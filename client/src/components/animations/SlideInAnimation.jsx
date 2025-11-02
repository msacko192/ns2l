import React from 'react'
import { motion } from 'framer-motion'

const SlideInAnimation = ({
  children,
  direction = "left", // left, right, up, down
  delay = 0,
  duration = 0.6,
  distance = 50,
  className = "",
  once = true
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "right":
        return { x: distance, opacity: 0 }
      case "left":
        return { x: -distance, opacity: 0 }
      case "up":
        return { y: -distance, opacity: 0 }
      case "down":
        return { y: distance, opacity: 0 }
      default:
        return { x: -distance, opacity: 0 }
    }
  }

  const getAnimatePosition = () => {
    return { x: 0, y: 0, opacity: 1 }
  }

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getAnimatePosition()}
      viewport={{ once: once, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
    >
      {children}
    </motion.div>
  )
}

export default SlideInAnimation