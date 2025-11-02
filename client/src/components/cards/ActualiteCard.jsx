import React from 'react'
import { Link } from 'react-router-dom'

const ActualiteCard = ({ actualite }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={actualite.image}
          alt={actualite.titre}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
            {actualite.categorie}
          </span>
          <span className="text-gray-500 text-sm">
            {actualite.date}
          </span>
        </div>

        <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
          {actualite.titre}
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
          {actualite.resume}
        </p>

        <Link
          to={`/actualites/${actualite.id}`}
          className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors duration-200"
        >
          Lire la suite
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ActualiteCard