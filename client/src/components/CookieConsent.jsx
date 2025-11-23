import { useState, useEffect } from 'react'
import { Cookie } from 'lucide-react'
import { Button } from './ui/button'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Afficher le banner après un court délai
      setTimeout(() => {
        setShowBanner(true)
      }, 1000)
    } else {
      setIsVisible(false)
      setShowButton(true) // Afficher le bouton si un choix a déjà été fait
      // Initialiser GTM si les cookies ont été acceptés
      if (consent === 'accepted') {
        initializeGTM()
      }
    }
  }, [])

  const initializeGTM = () => {
    // Initialiser le dataLayer si ce n'est pas déjà fait
    window.dataLayer = window.dataLayer || []
  }

  const handleAccept = () => {
    const previousConsent = localStorage.getItem('cookieConsent')
    localStorage.setItem('cookieConsent', 'accepted')
    initializeGTM()

    // Envoyer un événement de consentement
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'cookie_consent',
      consent_status: 'accepted'
    })

    // Si l'utilisateur modifie son consentement, recharger la page
    if (previousConsent && previousConsent !== 'accepted') {
      setShowBanner(false)
      setTimeout(() => {
        window.location.reload()
      }, 300)
    } else {
      // Première fois qu'il accepte
      setShowBanner(false)
      setTimeout(() => {
        setIsVisible(false)
        setShowButton(true)
      }, 300)
    }
  }

  const handleRefuse = () => {
    const previousConsent = localStorage.getItem('cookieConsent')
    localStorage.setItem('cookieConsent', 'refused')

    // Supprimer tous les cookies Google Analytics et publicitaires
    deleteCookiesByPrefix('_ga')
    deleteCookiesByPrefix('_gcl')

    // Envoyer un événement de refus
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'cookie_consent',
      consent_status: 'refused'
    })

    // Si l'utilisateur modifie son consentement, recharger la page
    if (previousConsent && previousConsent !== 'refused') {
      setShowBanner(false)
      setTimeout(() => {
        window.location.reload()
      }, 300)
    } else {
      // Première fois qu'il refuse
      setShowBanner(false)
      setTimeout(() => {
        setIsVisible(false)
        setShowButton(true)
      }, 300)
    }
  }

  const handleOpenSettings = () => {
    setShowBanner(true)
    setIsVisible(true)
  }

  const deleteCookiesByPrefix = (prefix) => {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      const cookieName = cookie.split('=')[0]
      if (cookieName.startsWith(prefix)) {
        // Supprimer le cookie pour tous les chemins et domaines possibles
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`
      }
    }
  }

  return (
    <>
      {/* Bouton Cookie persistant en bas à gauche */}
      {showButton && (
        <button
          onClick={handleOpenSettings}
          className="fixed bottom-4 left-4 z-[9997] bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all hover:scale-110"
          aria-label="Gérer les cookies"
          title="Gérer les cookies"
        >
          <Cookie className="w-6 h-6" />
        </button>
      )}

      {/* Overlay */}
      {isVisible && (
        <div
          className={`fixed inset-0 bg-black/60 z-[9998] transition-opacity duration-300 ${
            showBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />
      )}

      {/* Cookie Card - Centered */}
      {isVisible && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${
            showBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className={`bg-white rounded-xl shadow-2xl border-2 border-black max-w-2xl w-full relative transform transition-all duration-300 ${
              showBanner ? 'scale-100' : 'scale-95'
            }`}
          >
            {/* Bouton Refuser - Petit en haut à droite */}
            <button
              onClick={handleRefuse}
              className="absolute top-3 right-3 text-xs text-gray-400 hover:text-gray-600 transition-colors underline"
              aria-label="Refuser les cookies"
            >
              Continuer sans accepter
            </button>

            {/* Contenu de la carte */}
            <div className="p-8 pt-10">
              {/* Icon & Title */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4">
                  <Cookie className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  Gestion des cookies
                </h3>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-700 text-base leading-relaxed text-center">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site et analyser notre trafic.
                  Ces cookies nous aident également à optimiser nos campagnes publicitaires et à mieux comprendre vos besoins.
                </p>
                <p className="text-gray-700 text-base leading-relaxed text-center mt-4">
                  En cliquant sur "Accepter", vous consentez à l'utilisation de ces cookies conformément à notre{' '}
                  <a href="/politique-confidentialite" className="underline hover:text-black font-medium">
                    politique de confidentialité
                  </a>.
                </p>
              </div>

              {/* Bouton Accepter - Grand et centré */}
              <div className="flex justify-center">
                <Button
                  onClick={handleAccept}
                  className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Accepter les cookies
                </Button>
              </div>

              {/* Petit texte sous le bouton */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Vous pouvez cliquer sur "Continuer sans accepter" en haut à droite pour refuser les cookies.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieConsent
