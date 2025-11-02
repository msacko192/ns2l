import React from 'react'
import { motion } from 'framer-motion'

const FadeInAnimation = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  className = "",
  once = true
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: once, margin: "-50px" }}
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

export default FadeInAnimation