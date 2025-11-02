import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Force immediate scroll to top without animation
    // This prevents the unwanted scroll animation when navigating
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop