import React from 'react'
import { actualites } from '../data/actualites'
import ActualiteCard from '../components/cards/ActualiteCard'
import useSEO from '../hooks/useSEO'

const Actualites = () => {
  useSEO({
    title: "Actualités",
    description: "Restez informés des dernières évolutions comptables, fiscales et économiques. Découvrez nos articles et conseils d'experts-comptables NS2L & Associés.",
    keywords: "actualités comptables, fiscalité, évolutions légales, conseils experts-comptables, réglementation comptable, économie entreprise",
    canonical: "https://ns2l-associes.fr/actualites"
  })
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Actualités
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Restez informés des dernières évolutions comptables, fiscales et économiques qui impactent votre entreprise.
          </p>
        </div>

        {/* Actualités Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((actualite) => (
            <ActualiteCard key={actualite.id} actualite={actualite} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Actualites
