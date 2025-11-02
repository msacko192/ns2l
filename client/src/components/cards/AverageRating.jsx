import React from "react"
import StarRating from "../common/StarRating"

const AverageRating = ({ averageData }) => {
  const { score } = averageData

  return (
    <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-lg border shadow-lg text-center">
      <div className="flex items-center justify-center space-x-4 mb-4">
        <div className="text-6xl font-bold text-black">
          {score.toFixed(1)}
        </div>
        <StarRating rating={score} size="lg" />
      </div>
      <p className="text-gray-600 text-lg">
        Excellence reconnue par nos clients
      </p>
    </div>
  )
}

export default AverageRating
