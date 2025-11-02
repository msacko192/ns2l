import React from "react"
import { Link } from 'react-router-dom'
import ExpertCard from "../components/cards/ExpertCard"
import { experts } from "../data/experts"
import SlideInAnimation from '../components/animations/SlideInAnimation'
import FadeInAnimation from '../components/animations/FadeInAnimation'
import ScaleInAnimation from '../components/animations/ScaleInAnimation'
import useSEO from '../hooks/useSEO'

const Experts = () => {
  useSEO({
    title: "Nos Experts",
    description: "Rencontrez nos experts-comptables : Salomé et Nathan EL-BAZ. Diplômés d'écoles d'expertise, ils apportent leur savoir-faire et leur passion du métier pour votre accompagnement.",
    keywords: "experts comptables, Salomé EL-BAZ, Nathan EL-BAZ, experts-comptables diplômés, équipe comptable, accompagnement",
    canonical: "https://ns2l-associes.fr/experts"
  })

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white overflow-hidden h-screen max-h-screen" role="banner" aria-label="Nos experts comptables">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <SlideInAnimation direction="left" delay={0}>
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                  Nos
                  <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Experts Comptables
                  </span>
                  <span className="block text-gray-300 text-lg md:text-xl xl:text-2xl mt-2 font-medium">
                    Nathan & Salomé EL-BAZ
                  </span>
                </h1>
              </SlideInAnimation>

              <SlideInAnimation direction="left" delay={0}>
                <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg leading-relaxed">
                  Une équipe d'experts-comptables qualifiés et expérimentés, dédiée à votre accompagnement et à votre réussite. Découvrez l'expertise de Nathan et Salomé EL-BAZ.
                </p>
              </SlideInAnimation>

              <FadeInAnimation delay={0}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-semibold text-sm hover:scale-105 shadow-lg hover:bg-gray-100 transition-all duration-200"
                    aria-label="Prendre rendez-vous avec nos experts"
                  >
                    Prendre rendez-vous
                  </Link>
                  <Link
                    to="/nos-services"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-lg text-sm hover:bg-white/10 backdrop-blur-sm font-medium transition-all duration-200"
                    aria-label="Découvrir nos services comptables"
                  >
                    Voir nos services
                  </Link>
                </div>
              </FadeInAnimation>
            </div>

            <SlideInAnimation direction="right" delay={0.3}>
              <div className="relative">
                <img
                  src="/images/pages/experts.jpg"
                  alt="Nathan & Salomé EL-BAZ - Experts comptables NS2L & Associés"
                  className="rounded-lg shadow-2xl"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </SlideInAnimation>
          </div>
        </div>
      </section>

      {/* Experts Overview */}
      <section className="py-20 bg-white" aria-label="Présentation de nos experts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInAnimation delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Une expertise reconnue à votre service
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Nathan et Salomé EL-BAZ forment un duo dynamique et complémentaire, unis par leur passion du métier d'expert-comptable et leur engagement envers l'excellence.
              </p>
            </div>
          </FadeInAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experts.map((expert, index) => (
              <ScaleInAnimation key={expert.id} delay={0.2 * index}>
                <ExpertCard expert={expert} />
              </ScaleInAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white" aria-label="Appel à l'action pour prendre rendez-vous">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScaleInAnimation delay={0.2}>
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </ScaleInAnimation>

          <FadeInAnimation delay={0.4}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rencontrons-nous
            </h2>
          </FadeInAnimation>

          <FadeInAnimation delay={0.6}>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Nathan et Salomé EL-BAZ sont à votre disposition pour un premier entretien gratuit.
              Découvrez comment leur expertise peut transformer la gestion de votre entreprise.
            </p>
          </FadeInAnimation>

          <SlideInAnimation direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
                aria-label="Prendre rendez-vous avec nos experts"
              >
                Prendre rendez-vous
              </Link>
              <Link
                to="/secteurs-activite"
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-colors duration-200"
                aria-label="Découvrir nos secteurs d'activité"
              >
                Voir nos secteurs
              </Link>
            </div>
          </SlideInAnimation>
        </div>
      </section>
    </main>
  )
}

export default Experts
