import { motion } from 'framer-motion'
import React from 'react'

const NUM_PARTICLES = 30

const Particles = () => {
  if (typeof window === 'undefined') return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(NUM_PARTICLES)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export default Particles