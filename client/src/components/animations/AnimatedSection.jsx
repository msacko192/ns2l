import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Variantes d'animation prédéfinies
const animationVariants = {
  fadeInUp: {
    hidden: {
      opacity: 0,
      y: 60,
      transition: { duration: 0.3 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
        delay: 0.1
      }
    }
  },
  fadeInLeft: {
    hidden: {
      opacity: 0,
      x: -60,
      transition: { duration: 0.3 }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
        delay: 0.1
      }
    }
  },
  fadeInRight: {
    hidden: {
      opacity: 0,
      x: 60,
      transition: { duration: 0.3 }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
        delay: 0.1
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
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.1
      }
    }
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }
}

const AnimatedSection = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
  ...props
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    threshold,
    once: triggerOnce,
    margin: "0px 0px -100px 0px" // Déclenche l'animation 100px avant d'être visible
  })

  // Permet d'override les paramètres d'animation
  const customVariant = {
    ...animationVariants[animation],
    visible: {
      ...animationVariants[animation].visible,
      transition: {
        ...animationVariants[animation].visible.transition,
        delay: delay,
        duration: duration
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariant}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { AnimatedSection, animationVariants }