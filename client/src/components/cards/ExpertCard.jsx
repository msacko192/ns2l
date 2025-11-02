import LazyImage from "../LazyImage"
import React from "react"
import { Link } from "react-router-dom"

const ExpertCard = ({ expert }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 max-w-sm mx-auto">
      {/* Photo Section - Reduced height */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <LazyImage
          src={expert.photo}
          alt={`${expert.prenom} ${expert.nom}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(expert.prenom)}+${encodeURIComponent(expert.nom)}&background=000&color=fff&size=400`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Section - Compact padding */}
      <div className="p-4 sm:p-5">
        {/* Name */}
        <h3 className="text-lg sm:text-xl font-bold text-black mb-2 leading-tight">
          {expert.prenom} {expert.nom}
        </h3>

        {/* Description */}
        <div className="text-gray-600 text-sm mb-3 leading-relaxed space-y-1">
          {Array.isArray(expert.description) ? (
            expert.description.map((phrase, index) => (
              <div key={index} className="flex items-start">
                <span className="mr-2 text-gray-400">−</span>
                <span className="flex-1">{phrase}</span>
              </div>
            ))
          ) : (
            <p>{expert.description}</p>
          )}
        </div>

        {/* Specializations - Compact display */}
        {expert.specializations && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {expert.specializations.slice(0, 3).map((spec, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border hover:bg-gray-100 transition-colors"
                >
                  {spec}
                </span>
              ))}
              {expert.specializations.length > 3 && (
                <span className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs rounded-full border">
                  +{expert.specializations.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Contact Info - Compact */}
        <div className="space-y-1.5 mb-4">
          {expert.email && (
            <div className="flex items-center text-xs sm:text-sm text-gray-600">
              <span className="mr-2 text-blue-500">📧</span>
              <a
                href={`mailto:${expert.email}`}
                className="hover:text-black transition-colors truncate"
              >
                {expert.email}
              </a>
            </div>
          )}

          {expert.phone && (
            <div className="flex items-center text-xs sm:text-sm text-gray-600">
              <span className="mr-2 text-green-500">📞</span>
              <a
                href={`tel:${expert.phone}`}
                className="hover:text-black transition-colors"
              >
                {expert.phone}
              </a>
            </div>
          )}
        </div>

        {/* CTA Button - Compact */}
        <Link to="/contact" className="block">
          <button className="w-full px-4 py-2.5 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-800 active:bg-gray-900 transition-colors transform hover:scale-[0.98] active:scale-95">
            Prendre rendez-vous
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ExpertCard