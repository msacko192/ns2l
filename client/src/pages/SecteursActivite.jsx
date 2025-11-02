import React from 'react'
import { Link } from 'react-router-dom'
import { secteurs } from '../data/secteurs'
import SecteurCard from '../components/cards/SecteurCard'
import SlideInAnimation from '../components/animations/SlideInAnimation'
import FadeInAnimation from '../components/animations/FadeInAnimation'
import ScaleInAnimation from '../components/animations/ScaleInAnimation'
import useSEO from '../hooks/useSEO'

const SecteursActivite = () => {
  useSEO({
    title: "Secteurs d'Activité",
    description: "NS2L & Associés accompagne les entreprises de tous secteurs : PME/TPE, professions libérales, commerce, immobilier, international. Expertise spécialisée par domaine d'activité.",
    keywords: "secteurs activité, PME, TPE, professions libérales, commerce, immobilier, international, expertise spécialisée",
    canonical: "https://ns2l-associes.fr/secteurs-activite"
  })

  return (
    <>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white overflow-hidden h-screen max-h-screen" role="banner" aria-label="Nos secteurs d'activité spécialisés">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <div className="animate-slide-in-left">
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                  Nos
                  <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Secteurs d'Activité
                  </span>
                  <span className="block text-gray-300 text-lg md:text-xl xl:text-2xl mt-2 font-medium">
                    Solutions adaptées à vos besoins
                  </span>
                </h1>
              </div>

              <div className="animate-slide-in-left">
                <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg leading-relaxed">
                  Notre connaissance approfondie des secteurs d'activités nous permet de fournir des solutions comptables et fiscales sur mesure, adaptées aux besoins spécifiques de nos clients dans chaque domaine.
                </p>
              </div>

              <div className="animate-fade-in">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-semibold text-sm hover:scale-105 shadow-lg hover:bg-gray-100 transition-all duration-200"
                    aria-label="Demander une consultation pour votre secteur"
                  >
                    Consultation gratuite
                  </Link>
                  <Link
                    to="/nos-services"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-lg text-sm hover:bg-white/10 backdrop-blur-sm font-medium transition-all duration-200"
                    aria-label="Découvrir nos services comptables"
                  >
                    Voir nos services
                  </Link>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="/images/pages/secteurs-page.jpg"
                  alt="Secteurs d'activité NS2L & Associés - Expertise spécialisée par domaine"
                  className="rounded-lg shadow-2xl w-full h-auto"
                  loading="eager"
                  fetchPriority="high"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs Overview */}
      <section className="py-20 bg-white" aria-label="Aperçu de nos secteurs d'activité">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInAnimation delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Une expertise spécialisée par secteur
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Notre objectif est d'accompagner nos clients vers le succès en leur offrant des conseils et un soutien professionnel de haute qualité, adaptés à leur domaine d'activité.
              </p>
            </div>
          </FadeInAnimation>

        {/* Secteurs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {secteurs.map((secteur, index) => (
            <ScaleInAnimation key={secteur.id} delay={0.1 * index}>
              <SecteurCard secteur={secteur} />
            </ScaleInAnimation>
          ))}
        </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white" aria-label="Appel à l'action pour nous contacter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <FadeInAnimation delay={0.4}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Votre secteur ne figure pas dans cette liste ?
            </h2>
          </FadeInAnimation>

          <FadeInAnimation delay={0.6}>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Contactez-nous pour découvrir comment notre expertise peut s'adapter à votre domaine d'activité spécifique.
              Nous développons des solutions sur mesure pour chaque secteur.
            </p>
          </FadeInAnimation>

          <SlideInAnimation direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
                aria-label="Nous contacter pour discuter de votre secteur d'activité"
              >
                Nous contacter
              </Link>
              <Link
                to="/nos-services"
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-colors duration-200"
                aria-label="Découvrir tous nos services comptables"
              >
                Découvrir nos services
              </Link>
            </div>
          </SlideInAnimation>
        </div>
      </section>
    </main>
    </>
  )
}

export default SecteursActivite
