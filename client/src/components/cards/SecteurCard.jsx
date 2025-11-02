import React from 'react'

const SecteurCard = ({ secteur }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={secteur.image}
          alt={secteur.nom}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
          {secteur.nom}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed flex-1">
          {secteur.description}
        </p>
      </div>
    </div>
  )
}

export default SecteurCard