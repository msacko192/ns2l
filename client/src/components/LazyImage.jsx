import React, { useState, useRef, useEffect } from 'react'

const LazyImage = ({
  src,
  alt,
  className = "",
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E",
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [imageRef, setImageRef] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let observer

    if (imageRef && imageSrc === placeholder) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src)
              observer.unobserve(imageRef)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      )
      observer.observe(imageRef)
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef)
      }
    }
  }, [imageRef, imageSrc, placeholder, src])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-75'} ${className}`}
      onLoad={handleLoad}
      loading="lazy"
      decoding="async"
      {...props}
    />
  )
}

export default LazyImage