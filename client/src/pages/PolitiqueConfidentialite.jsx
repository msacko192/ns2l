import React from 'react'
import FadeInAnimation from '../components/animations/FadeInAnimation'
import SlideInAnimation from '../components/animations/SlideInAnimation'
import useSEO from '../hooks/useSEO'

const PolitiqueConfidentialite = () => {
  useSEO({
    title: "Politique de confidentialité",
    description: "Politique de confidentialité de NS2L & Associés. Découvrez comment nous protégeons et utilisons vos données personnelles conformément au RGPD.",
    keywords: "politique de confidentialité, RGPD, protection des données, données personnelles, NS2L",
    canonical: "https://ns2l-associes.fr/politique-confidentialite"
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInAnimation delay={0}>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Politique de confidentialité
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Assurer la confidentialité des données que vous nous transmettez est une priorité pour nous.
              </p>
            </div>
          </FadeInAnimation>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideInAnimation direction="up" delay={0.2}>
            <div className="bg-white rounded-lg border shadow-lg p-8 md:p-12 space-y-8">

              {/* Introduction */}
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Au travers de notre politique de confidentialité, nous vous présentons notre utilisation des données personnelles.
                </p>
              </div>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  1. Utilisation des données personnelles
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Lors de vos prises de rendez-vous ou de vos envois via les formulaires sur le site, des données à caractère personnel sont collectées (nom, prénom, adresse mail, etc.).
                  </p>
                  <p>
                    Le cabinet NS2L met en œuvre un traitement pour répondre à la demande du visiteur, dont la base légale est le consentement. Les données collectées sont transmises à l'entité du réseau en charge de la réponse.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  2. Sécurité
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Toutes les données personnelles recueillies dans nos formulaires sont transmises à l'aide d'un protocole chiffré (SSL/TLS) et stockées dans l'Union européenne dans des bases de données sécurisées, conformément aux dispositions de l'article 5, paragraphe 1, point f) du règlement européen n° 2016/679 (RGPD).
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  3. Droit de s'opposer au traitement de vos données personnelles
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Vous disposez du droit de vous opposer à tout moment au traitement de vos données personnelles.
                  </p>
                  <p>
                    Pour ce faire, vous pouvez en faire la demande auprès du Responsable de traitement qui, une fois la demande reçue, mettra un terme au traitement de vos données personnelles.
                  </p>
                  <p>
                    Celui-ci peut toutefois poursuivre le traitement dès lors qu'un motif légitime et impérieux le justifie. Il se chargera alors de vous en informer.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                <h3 className="text-xl font-bold text-black mb-3">
                  Identité du Responsable de traitement
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">
                    Nom prénom
                  </p>
                  <p>
                    <a
                      href="mailto:contact@ns2l.com"
                      className="text-black hover:underline transition-all"
                    >
                      contact@ns2l.com
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </SlideInAnimation>
        </div>
      </section>
    </div>
  )
}

export default PolitiqueConfidentialite
