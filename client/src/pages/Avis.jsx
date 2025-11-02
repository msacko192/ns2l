import React from "react"
import ReviewCard from "../components/cards/ReviewCard"
import AverageRating from "../components/cards/AverageRating"
import { reviews, averageRating } from "../data/reviews"
import { AnimatedSection, PageTransition, StaggeredContainer, StaggeredItem, CountUpAnimation } from '../components/animations'
import { Star, Briefcase, Users, Trophy } from "lucide-react"
import useSEO from '../hooks/useSEO'

const Avis = () => {
  useSEO({
    title: "Avis Clients",
    description: "Découvrez les avis de nos clients sur NS2L & Associés. Note moyenne 4.7/5 sur Google. Témoignages clients sur notre expertise comptable et notre accompagnement personnalisé.",
    keywords: "avis clients, témoignages, google reviews, satisfaction client, expertise comptable, accompagnement personnalisé",
    canonical: "https://ns2l-associes.fr/avis"
  })

  return (
    <PageTransition>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Avis Clients
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez ce que nos clients pensent de nos services et pourquoi ils nous font confiance
              pour leur comptabilité et leur fiscalité.
            </p>
          </div>
        </div>
      </section>

      {/* Average Rating Section - as specified in CLAUDE.md */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <AverageRating averageData={averageRating} />
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Témoignages Clients
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Leurs retours d'expérience témoignent de notre engagement à fournir
              un service de qualité et un accompagnement personnalisé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Pourquoi nous choisir ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">4.7/5</h3>
              <p className="text-gray-700">Note moyenne sur Google</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">8+ ans</h3>
              <p className="text-gray-700">D'expérience dans le domaine</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CountUpAnimation value={300} suffix="+" className="text-xl font-semibold text-black mb-2 block" />
              <p className="text-gray-700">Clients nous font confiance</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <CountUpAnimation value={100} suffix="%" className="text-xl font-semibold text-black mb-2 block" delay={0.2} />
              <p className="text-gray-700">De satisfaction client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center mr-4">
                  <span className="text-black text-xl font-bold">G</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Google Reviews</h3>
                  <p className="text-gray-300">Retrouvez tous nos avis certifiés</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                Consultez l'ensemble de nos avis clients sur Google et découvrez pourquoi
                nos clients recommandent nos services comptables et fiscaux.
              </p>

              <a href="https://www.google.com/search?sca_esv=f0447ad3867c1f39&tbm=lcl&sxsrf=AE3TifPzaEduTot3pejMBQC8HVMH8ldn5g:1762119211028&q=NS2L+%26+Associ%C3%A9s+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxKyNLSwMDGxMDYxtTQ1NTU3trDYwMj4ilHUL9jIR0FNwbG4OD858_DKYgXHssziRazYxQHLbMnJSQAAAA&rldimm=918844834595557388&hl=fr-FR&sa=X&ved=2ahUKEwjngYDNtdSQAxW7UqQEHcPAEHEQ9fQKegQIRBAF&biw=1280&bih=551&dpr=1.5#lkt=LocalPoiReviews" target="_blank">
                <button className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors">
                Voir tous les avis Google
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bénéficiez vous aussi d'un accompagnement comptable et fiscal de qualité.
            Contactez-nous pour un premier entretien gratuit.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Demander un devis
          </a>
        </div>
      </section>
    </div>
    </PageTransition>
  )
}

export default Avis
