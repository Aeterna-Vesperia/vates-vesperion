import { JSDOM } from 'jsdom'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, 'dist')
const serverDir = path.resolve(__dirname, 'dist/server')

// Set up a minimal browser environment before loading the SSR bundle.
// Some dependencies (react-type-animation, react-slick) access DOM APIs at
// module evaluation time, so globals must be in place before the dynamic import.
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body><div id="root"></div></body></html>', {
  url: 'https://www.vesperion.com.br',
})
global.window = dom.window
global.document = dom.window.document
Object.defineProperty(global, 'navigator', { value: dom.window.navigator, writable: true, configurable: true })
global.location = dom.window.location
// enquire.js (used by react-slick) requires matchMedia at module load time
if (!global.window.matchMedia) {
  global.window.matchMedia = () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}

const routes = ['/', '/catalog']

const template = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8')

const { render } = await import('./dist/server/entry-server.js')

for (const url of routes) {
  let appHtml = ''
  try {
    appHtml = render(url)
  } catch (err) {
    console.warn(`⚠️  Could not render ${url}:`, err.message)
  }

  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outputDir =
    url === '/' ? distDir : path.resolve(distDir, url.replace(/^\//, ''))

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const outputFile = path.resolve(outputDir, 'index.html')
  fs.writeFileSync(outputFile, html)
  console.log(`✅ Pre-rendered: ${url} → dist${url === '/' ? '/index.html' : url + '/index.html'}`)
}

// Clean up server build artifacts (not needed at runtime)
fs.rmSync(serverDir, { recursive: true, force: true })
console.log('🧹 Removed dist/server build artifacts')
