import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const StaggeredContainer = ({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
  ...props
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    threshold,
    once: triggerOnce,
    margin: "0px 0px -100px 0px"
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Composant enfant pour les éléments staggered
const StaggeredItem = ({
  children,
  animation = 'fadeInUp',
  className = '',
  ...props
}) => {
  const itemVariants = {
    fadeInUp: {
      hidden: {
        opacity: 0,
        y: 40,
        transition: { duration: 0.3 }
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }
    },
    fadeInLeft: {
      hidden: {
        opacity: 0,
        x: -40,
        transition: { duration: 0.3 }
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }
    },
    fadeInRight: {
      hidden: {
        opacity: 0,
        x: 40,
        transition: { duration: 0.3 }
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }
    },
    scaleIn: {
      hidden: {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.3 }
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.34, 1.56, 0.64, 1]
        }
      }
    }
  }

  return (
    <motion.div
      variants={itemVariants[animation]}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { StaggeredContainer, StaggeredItem }