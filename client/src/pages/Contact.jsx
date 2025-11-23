import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Phone, Mail, MapPin, Clock, CheckCircle, ChevronDown } from 'lucide-react'
import SlideInAnimation from '../components/animations/SlideInAnimation'
import FadeInAnimation from '../components/animations/FadeInAnimation'
import ScaleInAnimation from '../components/animations/ScaleInAnimation'
import useSEO from '../hooks/useSEO'

const Contact = () => {
  const navigate = useNavigate()

  useSEO({
    title: "Contact",
    description: "Contactez NS2L & Associés, cabinet d'expertise comptable à Levallois-Perret. Prenez rendez-vous pour une consultation gratuite. Formulaire de contact et coordonnées.",
    keywords: "contact, cabinet comptable, Levallois-Perret, consultation gratuite, rendez-vous expert-comptable, formulaire contact",
    canonical: "https://ns2l-associes.fr/contact"
  })
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Fermer le dropdown quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Envoi vers l'API backend
      const apiUrl = 'http://localhost:3067/api/send-email'

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi')
      }

      // Succès - Redirection vers la page de confirmation
      navigate('/contact-confirmation')

    } catch (error) {
      setError(error.message || 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInAnimation delay={0}>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Contactez-nous
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Notre équipe d'experts-comptables est à votre disposition pour répondre à vos questions
                et vous accompagner dans vos projets.
              </p>
            </div>
          </FadeInAnimation>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <SlideInAnimation direction="left" delay={0.2}>
              <div className="bg-white p-8 rounded-lg border shadow-lg">
                <h2 className="text-2xl font-bold text-black mb-6">
                  Demander un devis gratuit
                </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email professionnel *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="contact@entreprise.fr"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telephone">Téléphone</Label>
                  <Input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="01 23 45 67 89"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="entreprise">Nom de l'entreprise *</Label>
                  <Input
                    id="entreprise"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    required
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service recherché *</Label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus:ring-black focus:ring-2 focus:border-black disabled:cursor-not-allowed disabled:opacity-50 justify-between items-center text-left"
                    >
                      <span className={formData.service ? "text-black" : "text-gray-500"}>
                        {formData.service
                          ? {
                              'expertise-comptable': 'Expertise comptable',
                              'conseil-fiscal': 'Conseil fiscal',
                              'social-paie': 'Social et paie',
                              'conseil-gestion': 'Conseil en gestion',
                              'creation-entreprise': 'Création d\'entreprise',
                              'accompagnement-digital': 'Accompagnement digital',
                              'autre': 'Autre'
                            }[formData.service]
                          : 'Sélectionnez un service'
                        }
                      </span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                        {[
                          { value: '', label: 'Sélectionnez un service' },
                          { value: 'expertise-comptable', label: 'Expertise comptable' },
                          { value: 'conseil-fiscal', label: 'Conseil fiscal' },
                          { value: 'social-paie', label: 'Social et paie' },
                          { value: 'conseil-gestion', label: 'Conseil en gestion' },
                          { value: 'creation-entreprise', label: 'Création d\'entreprise' },
                          { value: 'accompagnement-digital', label: 'Accompagnement digital' },
                          { value: 'autre', label: 'Autre' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, service: option.value })
                              setIsDropdownOpen(false)
                            }}
                            className="w-full px-3 py-2 text-left text-sm hover:bg-black hover:text-white transition-colors first:rounded-t-md last:rounded-b-md"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Hidden input pour la validation du formulaire */}
                  <input
                    type="hidden"
                    name="service"
                    value={formData.service}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre besoin ou vos questions..."
                    rows={4}
                  />
                </div>

                <div className="text-sm text-gray-600">
                  <p>
                    En soumettant ce formulaire, vous acceptez que vos données soient utilisées
                    pour vous recontacter dans le cadre de votre demande. Conformément au RGPD,
                    vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                  </p>
                </div>

                <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white" size="lg" disabled={isLoading}>
                  {isLoading ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </Button>
              </form>

              {isSubmitted && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800">
                    Votre message a été envoyé avec succès ! Nous vous recontacterons sous 24h.
                  </span>
                </div>
              )}

              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <span className="text-red-800">{error}</span>
                </div>
              )}
              </div>
            </SlideInAnimation>

            {/* Contact Information */}
            <SlideInAnimation direction="right" delay={0.4}>
              <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">
                  Nos coordonnées
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Adresse</h3>
                      <p className="text-gray-700">
                        31 Rue Danton<br />
                        92300 Levallois-Perret, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Téléphone</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>
                          <span className="font-medium">Nathan ELBAZ :</span>
                          <a href="tel:+33631553579" className="ml-2 hover:text-black transition-colors">
                            06 31 55 35 79
                          </a>
                        </p>
                        <p>
                          <span className="font-medium">Salomé ELBAZ :</span>
                          <a href="tel:+33783692861" className="ml-2 hover:text-black transition-colors">
                            07 83 69 28 61
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:contact@ns2l.com" className="hover:text-black transition-colors">
                          contact@ns2l.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Horaires</h3>
                      <div className="text-gray-700">
                        <p>Lundi - Vendredi : 9h00 - 18h00</p>
                        <p>Support WhatsApp : 24h/7j</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-black mb-3">Notre engagement</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Réponse garantie sous 24h</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Premier entretien gratuit</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Devis personnalisé sans engagement</span>
                  </div>
                </div>
              </div>
              </div>
            </SlideInAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInAnimation delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Nous trouver
              </h2>
              <p className="text-lg text-gray-700">
                Cabinet situé à Levallois-Perret, facilement accessible en transports en commun
              </p>
            </div>
          </FadeInAnimation>

          <ScaleInAnimation delay={0.4}>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=31%20Rue%20Danton,%2092300%20Levallois-Perret,%20France&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation NS2L & Associés - 31 Rue Danton, 92300 Levallois-Perret"
                ></iframe>
              </div>
            </div>
          </ScaleInAnimation>
        </div>
      </section>
    </div>
  )
}

export default Contact
