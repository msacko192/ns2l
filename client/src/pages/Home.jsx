import React, { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Calculator, Shield, TrendingUp, Users, CheckCircle, Award, Building, Globe, ArrowRight, Sparkles, Heart, Clock, Star } from "lucide-react"
import { secteurs } from "../data/secteurs"
import { reviews } from "../data/reviews"
import ReviewCard from "../components/cards/ReviewCard"
import SlideInAnimation from "../components/animations/SlideInAnimation"
import FadeInAnimation from "../components/animations/FadeInAnimation"
import ScaleInAnimation from "../components/animations/ScaleInAnimation"
import CounterAnimation from "../components/animations/CounterAnimation"
import LogoScroll from "../components/LogoScroll"
import useSEO from "../hooks/useSEO"

const Home = () => {
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)
  const [currentVideo, setCurrentVideo] = useState(1)

  useSEO({
    title: "Accueil",
    description: "Cabinet d'expertise comptable NS2L & Associés à Levallois-Perret. Solutions 100% dématérialisées, accompagnement personnalisé TPE/PME. Salomé et Nathan EL-BAZ, experts-comptables diplômés.",
    keywords: "expert-comptable, cabinet comptable, Levallois-Perret, expertise comptable, conseil fiscal, TPE, PME, dématérialisé, Pennylane, NS2L",
    canonical: "https://ns2l-associes.fr/"
  })

  useEffect(() => {
    // Fonction pour gérer la fin d'une vidéo et passer à la suivante
    const handleVideoEnd = (videoNumber) => {
      if (videoNumber === 1 && video2Ref.current) {
        // Basculer vers vidéo 2
        setCurrentVideo(2)
        video2Ref.current.play().catch(() => {
          // Réessayer après un court délai
          setTimeout(() => video2Ref.current?.play().catch(() => { }), 100)
        })
      } else if (videoNumber === 2 && video1Ref.current) {
        // Basculer vers vidéo 1
        setCurrentVideo(1)
        video1Ref.current.play().catch(() => {
          // Réessayer après un court délai
          setTimeout(() => video1Ref.current?.play().catch(() => { }), 100)
        })
      }
    }

    // Ajouter les écouteurs d'événements
    const video1 = video1Ref.current
    const video2 = video2Ref.current

    if (video1) {
      video1.addEventListener('ended', () => handleVideoEnd(1))
    }
    if (video2) {
      video2.addEventListener('ended', () => handleVideoEnd(2))
    }

    // Démarrer la première vidéo avec gestion d'erreur améliorée
    if (video1) {
      // Tenter de lire immédiatement
      const playPromise = video1.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Si l'autoplay échoue, réessayer après interaction utilisateur
          const attemptPlay = () => {
            video1.play().catch(() => { })
            document.removeEventListener('click', attemptPlay)
            document.removeEventListener('touchstart', attemptPlay)
          }
          document.addEventListener('click', attemptPlay, { once: true })
          document.addEventListener('touchstart', attemptPlay, { once: true })
        })
      }
    }

    // Nettoyage
    return () => {
      if (video1) {
        video1.removeEventListener('ended', () => handleVideoEnd(1))
      }
      if (video2) {
        video2.removeEventListener('ended', () => handleVideoEnd(2))
      }
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section avec Vidéos en Background */}
      <section className="relative bg-black text-white overflow-hidden h-screen max-h-screen" role="banner" aria-label="Accueil NS2L & Associés">
        {/* Vidéo 1 - Vue plongée sur table avec mains uniquement */}
        <video
          ref={video1Ref}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          aria-label="Vue aérienne d'une réunion d'affaires"
        >
          <source
            src="/videos/hero-video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Vidéo 2 - Vue plongée sur table avec mains uniquement */}
        <video
          ref={video2Ref}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentVideo === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          aria-label="Vue aérienne d'une réunion d'affaires"
        >
          <source
            src="/videos/hero-video-2.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 z-20"></div>

        {/* Contenu au-dessus de la vidéo */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-8 z-30">
          <div className="max-w-4xl mx-auto text-center w-full">
            <SlideInAnimation direction="up" delay={0.2}>
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                Votre partenaire comptable
                <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mt-2">
                  moderne et innovant
                </span>
                <span className="block text-gray-300 text-lg md:text-xl xl:text-2xl mt-3 font-medium">
                  NS2L & Associés
                </span>
              </h1>
            </SlideInAnimation>

            <SlideInAnimation direction="up" delay={0.4}>
              <p className="text-base md:text-lg text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed">
                Cabinet d'expertise comptable à Levallois-Perret. Solutions 100% dématérialisées et accompagnement personnalisé pour TPE et PME.
              </p>
            </SlideInAnimation>

            <FadeInAnimation delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg font-semibold text-base hover:scale-105 shadow-2xl hover:bg-gray-100 transition-all duration-200"
                  aria-label="Demander une consultation gratuite"
                >
                  Consultation gratuite
                </Link>
                <Link
                  to="/nos-services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white rounded-lg text-base hover:bg-white/20 backdrop-blur-sm font-semibold transition-all duration-200"
                  aria-label="Découvrir nos services d'expertise"
                >
                  Découvrir nos services
                </Link>
              </div>
            </FadeInAnimation>

            {/* Google Reviews Badge */}
            <FadeInAnimation delay={0.7}>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="backdrop-blur-sm bg-white/10 rounded-lg px-6 py-3 flex items-center gap-3 border border-white/20">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="text-white font-bold text-sm">EXCELLENT</div>
                  </div>
                  <div className="h-10 w-px bg-white/30"></div>
                  <div className="flex flex-col items-start">
                    <div className="text-white text-sm font-semibold">48 avis</div>
                    <div className="text-gray-300 text-xs">Google</div>
                  </div>
                </div>
              </div>
            </FadeInAnimation>

            {/* Stats avec animation */}
            <FadeInAnimation delay={0.8}>
              <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-3 md:p-4">
                  <CounterAnimation
                    to={300}
                    suffix="+"
                    className="text-2xl md:text-3xl font-bold text-white block mb-1"
                    duration={1.5}
                  />
                  <div className="text-gray-200 text-xs md:text-sm font-medium">Clients accompagnés</div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-3 md:p-4">
                  <CounterAnimation
                    to={2023}
                    className="text-2xl md:text-3xl font-bold text-white block mb-1"
                    duration={1.5}
                  />
                  <div className="text-gray-200 text-xs md:text-sm font-medium">Année de création</div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-3 md:p-4">
                  <CounterAnimation
                    to={100}
                    suffix="%"
                    className="text-2xl md:text-3xl font-bold text-white block mb-1"
                    duration={1.5}
                  />
                  <div className="text-gray-200 text-xs md:text-sm font-medium">Dématérialisé</div>
                </div>
              </div>
            </FadeInAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" aria-label="Nos services d'expertise comptable">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Nos Services
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Des solutions comptables modernes et personnalisées pour accompagner votre entreprise à chaque étape de son développement.
              </p>
            </div>
          </FadeInAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator,
                title: "Expertise Comptable",
                description: "Tenue complète de votre comptabilité",
                features: ["Saisie en temps réel", "Comptes annuels", "Liasse fiscale"]
              },
              {
                icon: TrendingUp,
                title: "Commissariat aux comptes",
                description: "Certification de vos comptes et missions exceptionnelles.",
                features: [
                  "Audit contractuel",
                  "Audit légale",
                  "Audit financier"
                ],
              },
              {
                icon: Shield,
                title: "Conseil Fiscal",
                description: "Optimisation fiscale et veille réglementaire",
                features: ["Optimisation IR/IS", "Déclarations des échéances fiscales", "Structuraturation et optimisation des holdings et société filles"]
              },
              {
                icon: TrendingUp,
                title: "Conseil en Gestion",
                description: "Pilotage de votre performance et croissance",
                features: ["Tableaux de bord", "Business plan", "Analyse financière"]
              },
              {
                icon: Users,
                title: "Social & Paie",
                description: "Gestion complète de vos ressources humaines",
                features: ["Bulletins de paie", "Déclarations sociales", "Contrats"]
              },
              {
                icon: Building,
                title: "Création d'Entreprise",
                description: "Accompagnement de l'idée à la réalisation",
                features: ["Choix du statut", "Formalités", "Prévisionnel"]
              },
              
            ].map((service, index) => (
              <ScaleInAnimation key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-700 text-center mb-4 flex-grow">
                    {service.description}
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 mt-auto">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScaleInAnimation>
            ))}
          </div>

          <FadeInAnimation delay={0.8}>
            <div className="text-center mt-16">
              <Link
                to="/nos-services"
                className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-200"
                aria-label="Découvrir tous nos services d'expertise"
              >
                Découvrir tous nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeInAnimation>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50" aria-label="Pourquoi choisir NS2L & Associés">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Pourquoi nous choisir ?
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Un cabinet moderne qui allie expertise traditionnelle et innovation technologique pour vous accompagner vers le succès.
              </p>
            </div>
          </FadeInAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Expertise reconnue",
                description: "Formation académique approfondie et expérience professionnelle solide",
                stat: "2023"
              },
              {
                icon: Clock,
                title: "Réactivité",
                description: "Support WhatsApp Business pour répondre à vos questions en temps réel",
                stat: "24h/7j"
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Outils modernes et processus 100% dématérialisés",
                stat: "100%"
              },
              {
                icon: Heart,
                title: "Accompagnement",
                description: "Solutions adaptées aux besoins spécifiques de votre entreprise",
                stat: "Sur mesure"
              }
            ].map((benefit, index) => (
              <SlideInAnimation
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-black mb-2">{benefit.stat}</div>
                  <h3 className="text-lg font-bold text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                </div>
              </SlideInAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Partenaires - Défilement Infini */}
      <LogoScroll />

      {/* Secteurs d'Activité */}
      <section className="py-20 bg-white" aria-label="Nos secteurs d'activité spécialisés">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Nos Secteurs d'Activité
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Une expertise spécialisée dans de nombreux secteurs pour répondre aux besoins spécifiques de votre activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {secteurs.slice(0, 6).map((secteur) => (
              <div
                key={secteur.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={secteur.image}
                    alt={`Secteur ${secteur.nom} - NS2L & Associés`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors">
                    {secteur.nom}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {secteur.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/secteurs-activite"
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-200"
              aria-label="Voir tous nos secteurs d'activité"
            >
              Voir tous les secteurs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section className="py-20 bg-gray-50" aria-label="Avis de nos clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages sur notre expertise comptable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/avis"
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-200"
              aria-label="Voir tous les avis clients"
            >
              Voir tous les avis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white" aria-label="Appel à l'action pour nous contacter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
            <ArrowRight className="w-10 h-10 text-black" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à moderniser votre comptabilité ?
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Rejoignez plus de 300 entreprises qui nous font confiance pour leur gestion comptable et fiscale.
            Consultation gratuite et devis personnalisé.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
              aria-label="Demander une consultation gratuite"
            >
              Consultation gratuite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/avis"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-colors duration-200"
              aria-label="Voir les avis de nos clients"
            >
              Voir les avis clients
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
