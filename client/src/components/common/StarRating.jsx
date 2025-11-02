import React from "react"
import { Star } from "lucide-react"

const StarRating = ({ rating, totalStars = 5, showNumber = false, size = "sm" }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5", 
    lg: "h-6 w-6"
  }

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[...Array(totalStars)].map((_, index) => {
          const isFilled = index < Math.floor(rating)
          const isPartiallyFilled = index === Math.floor(rating) && rating % 1 !== 0
          const partialPercentage = rating % 1

          if (isFilled) {
            // Étoile complètement remplie
            return (
              <Star
                key={index}
                className={`${sizeClasses[size]} text-yellow-400 fill-yellow-400`}
              />
            )
          } else if (isPartiallyFilled) {
            // Étoile partiellement remplie
            return (
              <div key={index} className="relative">
                <Star className={`${sizeClasses[size]} text-gray-300`} />
                <div
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${partialPercentage * 100}%` }}
                >
                  <Star className={`${sizeClasses[size]} text-yellow-400 fill-yellow-400`} />
                </div>
              </div>
            )
          } else {
            // Étoile vide
            return (
              <Star
                key={index}
                className={`${sizeClasses[size]} text-gray-300`}
              />
            )
          }
        })}
      </div>
      {showNumber && (
        <span className="text-sm font-medium text-gray-700 ml-2">
          {rating.toFixed(1)}/5
        </span>
      )}
    </div>
  )
}

export default StarRating
