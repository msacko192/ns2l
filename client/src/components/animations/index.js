// Export de tous les composants d'animation
export { AnimatedSection, animationVariants } from './AnimatedSection'
export { default as CountUpAnimation } from './CountUpAnimation'
export { StaggeredContainer, StaggeredItem } from './StaggeredContainer'
export { default as PageTransition } from './PageTransition'

// Utilités d'animation communes
export const easeInOut = [0.25, 0.25, 0.25, 0.75]
export const easeOut = [0.34, 1.56, 0.64, 1]
export const spring = { type: "spring", stiffness: 400, damping: 25 }

// Variantes d'animation globales
export const globalAnimations = {
  // Animations de base
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: easeInOut }
    }
  },

  // Animations d'entrée avec mouvement
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOut }
    }
  },

  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeInOut }
    }
  },

  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeInOut }
    }
  },

  // Animation de zoom
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: easeOut }
    }
  },

  // Animation de rotation subtile
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut }
    }
  }
}