import React, { useState, useEffect } from 'react'

const LogoScroll = () => {
  const [logos, setLogos] = useState([])

  useEffect(() => {
    // Liste des logos réels
    const logoList = [
      { name: 'Pennylane', path: '/logos/pennylane.png' },
      { name: 'Finthesis', path: '/logos/Finthesis.png' },
      { name: 'Prisma Paie', path: '/logos/prisma-paie.png' },
      { name: 'Qonto', path: '/logos/qonto.png' },
      { name: 'Silae', path: '/logos/silae.png' },
      { name: 'So Bank', path: '/logos/so-bank.png' },
    ]
    setLogos(logoList)
  }, [])

  // Dupliquer les logos pour créer l'effet de boucle infinie
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="py-12 bg-white overflow-hidden" aria-label="Nos partenaires">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
            Des outils performants au service de votre entreprise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous mettons à votre disposition des solutions de gestion fiables et reconnues pour automatiser vos tâches, optimiser votre organisation et gagner en efficacité au quotidien.
          </p>
        </div>

        {/* Conteneur de défilement */}
        <div className="relative">
          {/* Gradient gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* Gradient droit */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Défilement des logos */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ width: '200px', height: '100px' }}
                >
                  <img
                    src={logo.path}
                    alt={logo.name}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Si l'image n'existe pas, afficher un placeholder
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
                          <span class="text-gray-400 text-sm font-medium text-center px-4">${logo.name}</span>
                        </div>
                      `
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Et bien d'autres partenaires de confiance
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default LogoScroll
