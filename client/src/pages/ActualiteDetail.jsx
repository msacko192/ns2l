import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { actualites } from '../data/actualites'
import useSEO from '../hooks/useSEO'

const ActualiteDetail = () => {
  const { id } = useParams()
  const actualite = actualites.find(a => a.id === parseInt(id))

  useSEO({
    title: actualite ? actualite.titre : "Actualité",
    description: actualite ? actualite.resume : "Découvrez nos actualités comptables et fiscales",
    keywords: actualite ? `${actualite.categorie}, comptabilité, fiscalité, conseil` : "comptabilité, fiscalité",
    canonical: `https://ns2l-associes.fr/actualites/${id}`
  })

  if (!actualite) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Actualité non trouvée</h1>
          <Link to="/actualites" className="text-black hover:text-gray-700 underline">
            Retour aux actualités
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            to="/actualites"
            className="inline-flex items-center text-black hover:text-gray-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux actualités
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
              {actualite.categorie}
            </span>
            <span className="text-gray-500">
              {actualite.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            {actualite.titre}
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {actualite.resume}
          </p>
        </div>

        {/* Article Image */}
        <div className="mb-8">
          <img
            src={actualite.image}
            alt={actualite.titre}
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: actualite.contenu }}
            style={{
              lineHeight: '1.8',
            }}
          />
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">
            Besoin de conseils personnalisés ?
          </h3>
          <p className="text-gray-700 mb-6">
            Nos experts sont à votre disposition pour vous accompagner dans vos démarches comptables et fiscales.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Contactez-nous
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-black mb-8">Autres actualités</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {actualites
              .filter(a => a.id !== actualite.id)
              .slice(0, 2)
              .map((otherActualite) => (
                <Link
                  key={otherActualite.id}
                  to={`/actualites/${otherActualite.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={otherActualite.image}
                    alt={otherActualite.titre}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                        {otherActualite.categorie}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {otherActualite.date}
                      </span>
                    </div>
                    <h4 className="font-semibold text-black line-clamp-2">
                      {otherActualite.titre}
                    </h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActualiteDetail