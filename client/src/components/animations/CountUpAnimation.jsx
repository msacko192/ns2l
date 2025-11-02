import React, { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

const CountUpAnimation = ({
  value,
  duration = 2,
  delay = 0,
  suffix = '',
  prefix = '',
  className = '',
  threshold = 0.5,
  ...props
}) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: duration * 1000
  })

  const isInView = useInView(ref, {
    threshold,
    once: true,
    margin: "0px 0px -50px 0px"
  })

  // Transform la valeur spring en nombre entier
  const display = useTransform(springValue, (current) =>
    Math.round(current)
  )

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(value)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [motionValue, isInView, value, delay])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      {...props}
    >
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.span>
  )
}

export default CountUpAnimation