import React from "react"
import StarRating from "../common/StarRating"

const ReviewCard = ({ review }) => {
  return (
    <div className="h-full bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow duration-300">
      {/* Google branding */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">G</span>
          </div>
          <span className="text-sm font-medium">
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC04' }}>o</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>l</span>
            <span style={{ color: '#EA4335' }}>e</span>
          </span>
        </div>
        <span className="text-xs text-gray-500">{review.date}</span>
      </div>

      {/* Client info */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-gray-200">
          <img
            src={review.clientImage}
            alt={review.clientName}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.clientName)}&background=000&color=fff&size=48`
            }}
          />
        </div>
        <div>
          <h4 className="font-semibold text-black">{review.clientName}</h4>
          <StarRating rating={review.rating} />
        </div>
      </div>

      {/* Review text */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {review.comment}
      </p>
    </div>
  )
}

export default ReviewCard
