import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

const CounterAnimation = ({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
  decimals = 0
}) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      motionValue.set(to)
      setHasAnimated(true)
    }
  }, [motionValue, isInView, to, hasAnimated])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toFixed(decimals) + suffix
      }
    })
  }, [springValue, prefix, suffix, decimals])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{from}{suffix}
    </motion.span>
  )
}

export default CounterAnimation