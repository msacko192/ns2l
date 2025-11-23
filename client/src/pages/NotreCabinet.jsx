import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Users, Smartphone, Zap, Award, Building2, Calculator, Scale, TrendingUp } from 'lucide-react'
import SlideInAnimation from '../components/animations/SlideInAnimation'
import FadeInAnimation from '../components/animations/FadeInAnimation'
import ScaleInAnimation from '../components/animations/ScaleInAnimation'
import useSEO from '../hooks/useSEO'

const NotreCabinet = () => {
  useSEO({
    title: "Notre Cabinet",
    description: "Découvrez NS2L & Associés, cabinet d'expertise comptable fondé par Salomé et Nathan EL-BAZ. Expertise moderne, solutions dématérialisées et accompagnement personnalisé à Levallois-Perret.",
    keywords: "cabinet comptable, expertise comptable, Nathan EL-BAZ, Salomé EL-BAZ, Levallois-Perret, dématérialisation, Pennylane",
    canonical: "https://ns2l-associes.fr/notre-cabinet"
  })

  return (
    <>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white overflow-hidden h-screen max-h-screen" role="banner" aria-label="Présentation de notre cabinet NS2L & Associés">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <SlideInAnimation direction="left" delay={0}>
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                  Ensemble, construisons un<span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">partenariat solide</span>
                  <span className="block text-gray-300 text-lg md:text-xl xl:text-2xl mt-2 font-medium">
                    pour atteindre vos objectifs
                  </span>
                </h1>
              </SlideInAnimation>

              <SlideInAnimation direction="left" delay={0}>
                <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg leading-relaxed">
                  Un cabinet proche, une équipe impliquée à vos côtés au quotidien
                  L'équipe de NS2L vous écoute, simplifie vos démarches et vous guide avec pédagogie pour des décisions sereines et impactantes.
                </p>
              </SlideInAnimation>

              <FadeInAnimation delay={0}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-semibold text-sm hover:scale-105 shadow-lg hover:bg-gray-100 transition-all duration-200"
                    aria-label="Découvrir nos services d'expertise comptable"
                  >
                    Découvrir nos services
                  </Link>
                  <Link
                    to="/secteurs-activite"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-lg text-sm hover:bg-white/10 backdrop-blur-sm font-medium transition-all duration-200"
                    aria-label="Voir nos secteurs d'activité spécialisés"
                  >
                    Voir nos secteurs d'activité
                  </Link>
                </div>
              </FadeInAnimation>
            </div>

            <SlideInAnimation direction="right" delay={0.1}>
              <div className="relative">
                <img
                  src="/images/pages/cabinet1.jpg"
                  alt="Équipe NS2L & Associés - Salomé et Nathan EL-BAZ, experts-comptables diplômés"
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

      {/* Notre Histoire */}
      <section className="py-20 bg-white" aria-label="Notre histoire et fondation du cabinet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <FadeInAnimation delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Notre Histoire
                </h2>
              </FadeInAnimation>

              <SlideInAnimation direction="left" delay={0.4}>
                <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                  <p>
                    Dès leur rencontre en école d'expertise, une collaboration professionnelle étroite les lie : en 2023, ils décident de lancer ensemble leur cabinet familial.
                  </p>
                  <p>
                    Dotés d'une formation académique approfondie et d'une expérience professionnelle solide dans le domaine de l'expertise et de l'audit, ils ont choisi d'utiliser leurs compétences pour accompagner leur client dans leur projet professionnel.
                  </p>
                </div>
              </SlideInAnimation>

              <div className="grid grid-cols-2 gap-6">
                <ScaleInAnimation delay={0.6}>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-3xl font-bold text-black block">2023</span>
                    <div className="text-gray-600">Création du cabinet</div>
                  </div>
                </ScaleInAnimation>
                <ScaleInAnimation delay={0.8}>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-3xl font-bold text-black block">100%</span>
                    <div className="text-gray-600">Dématérialisé</div>
                  </div>
                </ScaleInAnimation>
              </div>
            </div>

            <SlideInAnimation direction="right" delay={0.3}>
              <div className="relative">
                <img
                  src="/images/pages/experts.jpg"
                  alt="Formation et expertise - Salomé et Nathan EL-BAZ, fondateurs du cabinet NS2L & Associés"
                  className="rounded-lg shadow-lg"
                  loading="lazy"
                />
                <ScaleInAnimation delay={1.0}>
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg border">
                    <div className="text-center">
                      <span className="text-xl font-bold text-black mb-1 block">École</span>
                      <div className="text-sm text-gray-600">d'expertise</div>
                    </div>
                  </div>
                </ScaleInAnimation>
              </div>
            </SlideInAnimation>
          </div>
        </div>
      </section>

      {/* Notre Cabinet */}
      <section className="py-20 bg-gray-50" aria-label="Présentation de notre cabinet et localisation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInAnimation delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Notre Cabinet
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                NS2L & Associés est un cabinet d'expertise comptable et d'audit basé à Levallois-Perret, composé de professionnels expérimentés dédiés à fournir des solutions adaptées à nos clients.
              </p>
            </div>
          </FadeInAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
            <ScaleInAnimation delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Localisation</h3>
                <p className="text-gray-700 flex-grow">31 Rue Danton, 92300 Levallois-Perret</p>
              </div>
            </ScaleInAnimation>

            <ScaleInAnimation delay={0.4}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Spécialisation</h3>
                <p className="text-gray-700 flex-grow">TPE et PME à toutes les étapes de leur développement</p>
              </div>
            </ScaleInAnimation>

            <ScaleInAnimation delay={0.6}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Expertise</h3>
                <p className="text-gray-700 flex-grow">Partenaire privilégié dans divers secteurs d'activité</p>
              </div>
            </ScaleInAnimation>
          </div>

            <FadeInAnimation delay={0.8}>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                En tant que partenaire privilégié de nombreuses entreprises opérant dans divers secteurs, nous avons développé une expertise qui permet d'accompagner les TPE et PME à toutes les étapes de leur développement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chez NS2L & Associés, nous sommes fiers d'être un cabinet d'expertise comptable résolument tourné vers l'avenir.
              </p>
            </FadeInAnimation>
        </div>
      </section>

      {/* Innovation Technologique */}
      <section className="py-20 bg-white" aria-label="Innovation technologique et outils modernes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <SlideInAnimation direction="left" delay={0.3}>
              <div className="relative order-2 lg:order-1">
                <img
                  src="/images/pages/cabinet2.jpg"
                  alt="Innovation technologique - Outils numériques modernes utilisés par NS2L & Associés incluant Pennylane"
                  className="rounded-lg shadow-lg"
                  loading="lazy"
                />
                <ScaleInAnimation delay={1.0}>
                  <div className="absolute -top-6 -right-6 bg-black text-white p-4 rounded-lg">
                    <Zap className="w-8 h-8" />
                  </div>
                </ScaleInAnimation>
              </div>
            </SlideInAnimation>

            <div className="order-1 lg:order-2">
              <FadeInAnimation delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Innovation Technologique
                </h2>
              </FadeInAnimation>

              <SlideInAnimation direction="right" delay={0.4}>
                <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                  <p>
                    En effet, nous avons fait le choix d'une approche entièrement dématérialisée, en utilisant l'outil de production comptable <strong>Pennylane</strong>. Cela nous permet de garantir une efficacité accrue, une sécurité renforcée des données et une collaboration transparente avec nos clients.
                  </p>
                  <p>
                    Nous croyons fermement que la technologie joue un rôle essentiel dans l'optimisation des processus comptables et nous nous engageons à rester à la pointe des avancées technologiques pour offrir à nos clients des solutions modernes et performantes.
                  </p>
                </div>
              </SlideInAnimation>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ScaleInAnimation delay={0.6}>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Shield className="w-6 h-6 text-black" />
                    <span className="text-gray-700 font-medium">Sécurité renforcée</span>
                  </div>
                </ScaleInAnimation>
                <ScaleInAnimation delay={0.7}>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Zap className="w-6 h-6 text-black" />
                    <span className="text-gray-700 font-medium">Efficacité accrue</span>
                  </div>
                </ScaleInAnimation>
                <ScaleInAnimation delay={0.8}>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Users className="w-6 h-6 text-black" />
                    <span className="text-gray-700 font-medium">Collaboration transparente</span>
                  </div>
                </ScaleInAnimation>
                <ScaleInAnimation delay={0.9}>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Smartphone className="w-6 h-6 text-black" />
                    <span className="text-gray-700 font-medium">Support WhatsApp</span>
                  </div>
                </ScaleInAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication & Support */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-black text-white" aria-label="Support client WhatsApp Business">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScaleInAnimation delay={0.2}>
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-black" />
            </div>
          </ScaleInAnimation>

          <FadeInAnimation delay={0.4}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Support en Temps Réel
            </h2>
          </FadeInAnimation>

          <FadeInAnimation delay={0.6}>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
              Nous sommes joignables sur l'application <strong>WhatsApp Business</strong> pour répondre à vos questionnements comptables, juridiques et fiscales en temps réel.
            </p>
          </FadeInAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <ScaleInAnimation delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                    <Calculator className="w-4 h-4 text-black" />
                  </div>
                  <h4 className="text-lg font-semibold">Questions Comptables</h4>
                </div>
                <p className="text-gray-300 text-sm">Réponses immédiates à vos interrogations</p>
              </div>
            </ScaleInAnimation>
            <ScaleInAnimation delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                    <Scale className="w-4 h-4 text-black" />
                  </div>
                  <h4 className="text-lg font-semibold">Conseils Juridiques</h4>
                </div>
                <p className="text-gray-300 text-sm">Expertise juridique à portée de main</p>
              </div>
            </ScaleInAnimation>
            <ScaleInAnimation delay={0.6}>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                    <TrendingUp className="w-4 h-4 text-black" />
                  </div>
                  <h4 className="text-lg font-semibold">Optimisation Fiscale</h4>
                </div>
                <p className="text-gray-300 text-sm">Stratégies fiscales personnalisées</p>
              </div>
            </ScaleInAnimation>
          </div>

          <SlideInAnimation direction="up" delay={0.8}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-semibold text-sm hover:scale-105 shadow-lg hover:bg-gray-100 transition-all duration-200"
              aria-label="Nous contacter via WhatsApp Business ou formulaire"
            >
              Nous contacter
            </Link>
          </SlideInAnimation>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50" aria-label="Appel à l'action - Commencer votre collaboration">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInAnimation delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Prêt à commencer votre collaboration ?
              </h2>
            </FadeInAnimation>

            <FadeInAnimation delay={0.4}>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Découvrez comment notre approche moderne et personnalisée peut transformer la gestion de votre entreprise.
              </p>
            </FadeInAnimation>

            <SlideInAnimation direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/secteurs-activite"
                  className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Voir nos secteurs d'activité spécialisés"
                >
                  Voir nos secteurs d'activité
                </Link>
                <Link
                  to="/experts"
                  className="inline-flex items-center justify-center px-8 py-3 border border-black text-black rounded-md font-medium hover:bg-black hover:text-white transition-colors duration-200"
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

export default NotreCabinet
