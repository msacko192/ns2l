import React from 'react'
import { motion } from 'framer-motion'

const ScaleInAnimation = ({
  children,
  delay = 0,
  duration = 0.5,
  scale = 0.8,
  className = "",
  once = true
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: once, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScaleInAnimation