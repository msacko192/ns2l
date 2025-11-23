import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Home, Mail, ArrowRight } from 'lucide-react'
import FadeInAnimation from '../components/animations/FadeInAnimation'
import ScaleInAnimation from '../components/animations/ScaleInAnimation'
import useSEO from '../hooks/useSEO'

const ContactConfirmation = () => {
  useSEO({
    title: "Message envoyé avec succès",
    description: "Votre message a été envoyé avec succès. Notre équipe vous répondra dans les plus brefs délais.",
    keywords: "confirmation, message envoyé, contact NS2L",
    canonical: "https://ns2l-associes.fr/contact-confirmation"
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Success Icon */}
        <ScaleInAnimation delay={0}>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>
        </ScaleInAnimation>

        {/* Main Message */}
        <FadeInAnimation delay={0.2}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Message envoyé avec succès !
            </h1>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-gray-700">
                Nous avons bien reçu votre demande et nous vous remercions de nous avoir contactés.
              </p>
              <p className="text-lg text-gray-600">
                Notre équipe d'experts-comptables va traiter votre demande et vous répondra dans les plus brefs délais, généralement sous 24 heures.
              </p>
            </div>
          </div>
        </FadeInAnimation>

        {/* Info Cards */}
        <FadeInAnimation delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-black mb-2">Email de confirmation</h3>
              <p className="text-sm text-gray-600">
                Un email de confirmation vous a été envoyé à l'adresse indiquée
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-black mb-2">Réponse rapide</h3>
              <p className="text-sm text-gray-600">
                Nous vous répondrons sous 24h ouvrées maximum
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-black mb-2">Prochaines étapes</h3>
              <p className="text-sm text-gray-600">
                Un expert vous contactera pour discuter de vos besoins
              </p>
            </div>

          </div>
        </FadeInAnimation>

        {/* Contact Info */}
        <FadeInAnimation delay={0.6}>
          <div className="bg-gray-50 p-8 rounded-lg border mb-8">
            <h2 className="text-2xl font-bold text-black mb-4 text-center">
              Besoin d'une réponse immédiate ?
            </h2>
            <div className="text-center space-y-3 text-gray-700">
              <p>N'hésitez pas à nous contacter directement :</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-lg">
                <div>
                  <span className="font-medium">Nathan ELBAZ :</span>
                  <a href="tel:+33631553579" className="ml-2 text-black hover:underline font-semibold">
                    06 31 55 35 79
                  </a>
                </div>
                <div className="hidden sm:block text-gray-400">|</div>
                <div>
                  <span className="font-medium">Salomé ELBAZ :</span>
                  <a href="tel:+33783692861" className="ml-2 text-black hover:underline font-semibold">
                    07 83 69 28 61
                  </a>
                </div>
              </div>
              <p className="text-sm pt-2">
                Support WhatsApp disponible 24/7
              </p>
            </div>
          </div>
        </FadeInAnimation>

        {/* Action Buttons */}
        <FadeInAnimation delay={0.8}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Link>
            <Link
              to="/nos-services"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black border-2 border-black rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              Découvrir nos services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </FadeInAnimation>

      </div>
    </div>
  )
}

export default ContactConfirmation
