import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import App from './App.jsx'
import { NotificationProvider } from './hooks/useNotification'
import dailyCardReducer from './redux/slices/dailyCardSlice'
import leituraReducer from './redux/slices/leituraSlice'

export function render(url) {
  // Create a fresh store per render to avoid shared state between routes
  const ssrStore = configureStore({
    reducer: {
      leitura: leituraReducer,
      dailyCard: dailyCardReducer,
    },
  })

  return renderToString(
    <Provider store={ssrStore}>
      <NotificationProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </NotificationProvider>
    </Provider>
  )
}
