import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { expertises } from '../data/expertises'
import SlideInAnimation from '../components/animations/SlideInAnimation'
import FadeInAnimation from '../components/animations/FadeInAnimation'
import ScaleInAnimation from '../components/animations/ScaleInAnimation'
import useSEO from '../hooks/useSEO'

const NosServices = () => {
  useSEO({
    title: "Nos Services",
    description: "Découvrez nos services d'expertise comptable : tenue de comptabilité, conseil fiscal, social & paie, création d'entreprise, audit et conseil en gestion. Solutions adaptées TPE/PME.",
    keywords: "expertise comptable, conseil fiscal, social paie, création entreprise, audit, conseil gestion, comptabilité, déclarations fiscales",
    canonical: "https://ns2l-associes.fr/nos-services"
  })

  return (
    <>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white overflow-hidden h-screen max-h-screen" role="banner" aria-label="Présentation de nos services d'expertise comptable">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <SlideInAnimation direction="left" delay={0}>
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                  Nos
                  <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Expertises Comptables
                  </span>
                  <span className="block text-gray-300 text-lg md:text-xl xl:text-2xl mt-2 font-medium">
                    Solutions complètes et innovantes
                  </span>
                </h1>
              </SlideInAnimation>

              <SlideInAnimation direction="left" delay={0}>
                <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg leading-relaxed">
                  Des services comptables complets et innovants, adaptés aux défis de votre entreprise moderne.
                  Découvrez notre gamme complète d'expertises pour vous accompagner à chaque étape.
                </p>
              </SlideInAnimation>

              <FadeInAnimation delay={0}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-semibold text-sm hover:scale-105 shadow-lg hover:bg-gray-100 transition-all duration-200"
                    aria-label="Demander une consultation gratuite avec nos experts"
                  >
                    Consultation gratuite
                  </Link>
                  <Link
                    to="/secteurs-activite"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-lg text-sm hover:bg-white/10 backdrop-blur-sm font-medium transition-all duration-200"
                    aria-label="Découvrir nos secteurs d'activité spécialisés"
                  >
                    Voir nos secteurs
                  </Link>
                </div>
              </FadeInAnimation>
            </div>

            <SlideInAnimation direction="right" delay={0.1}>
              <div className="relative">
                <img
                  src="/images/pages/services.jpg"
                  alt="Services comptables NS2L & Associés - Expertise moderne et innovante"
                  className="rounded-lg shadow-2xl w-full h-auto"
                  loading="eager"
                  fetchPriority="high"
                  width="600"
                  height="400"
                />
              </div>
            </SlideInAnimation>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white" aria-label="Aperçu de nos services d'expertise comptable">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInAnimation delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Une expertise complète à votre service
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Depuis 2023, nous développons des solutions sur mesure pour répondre
                aux besoins spécifiques de chaque entreprise, quelle que soit sa taille ou son secteur d'activité.
              </p>
            </div>
          </FadeInAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {expertises.map((expertise, index) => {
              const IconComponent = expertise.icon
              return (
                <ScaleInAnimation key={expertise.id} delay={0.1 * index}>
                  <div className="group bg-white p-8 rounded-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-16 h-16 mx-auto mb-6 bg-black text-white rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4 text-center">{expertise.title}</h3>
                    <p className="text-gray-700 text-center mb-4">
                      {expertise.description}
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2 mb-6">
                      {expertise.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScaleInAnimation>
              )
            })}
          </div>
        </div>
      </section>


      {/* Methodology Section */}
      <section className="py-20 bg-gray-50" aria-label="Notre méthodologie de travail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInAnimation delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Notre méthodologie
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Une approche structurée et personnalisée pour garantir la qualité de nos services
              </p>
            </div>
          </FadeInAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <SlideInAnimation direction="up" delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Analyse</h3>
                <p className="text-gray-700 text-sm">Étude approfondie de vos besoins et de votre secteur d'activité</p>
              </div>
            </SlideInAnimation>

            <SlideInAnimation direction="up" delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Proposition</h3>
                <p className="text-gray-700 text-sm">Élaboration d'une solution sur mesure adaptée à vos objectifs</p>
              </div>
            </SlideInAnimation>

            <SlideInAnimation direction="up" delay={0.6}>
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Mise en œuvre</h3>
                <p className="text-gray-700 text-sm">Déploiement des solutions avec accompagnement personnalisé</p>
              </div>
            </SlideInAnimation>

            <SlideInAnimation direction="up" delay={0.8}>
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Suivi</h3>
                <p className="text-gray-700 text-sm">Accompagnement continu et optimisation de nos prestations</p>
              </div>
            </SlideInAnimation>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white" aria-label="Appel à l'action pour nous contacter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScaleInAnimation delay={0.2}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
                <Phone className="w-10 h-10 text-black" />
              </div>
            </ScaleInAnimation>

            <FadeInAnimation delay={0.4}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à commencer ?
              </h2>
            </FadeInAnimation>

            <FadeInAnimation delay={0.6}>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Contactez-nous dès aujourd'hui pour un premier entretien gratuit et découvrez comment
                nos expertises peuvent transformer la gestion de votre entreprise.
              </p>
            </FadeInAnimation>

            <SlideInAnimation direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Demander un devis gratuit pour nos services"
                >
                  Demander un devis gratuit
                </Link>
                <Link
                  to="/experts"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-colors duration-200"
                  aria-label="Rencontrer nos experts Salomé et Nathan EL-BAZ"
                >
                  Rencontrer nos experts
                </Link>
              </div>
            </SlideInAnimation>
        </div>
      </section>
    </main>
    </>
  )
}

export default NosServices
