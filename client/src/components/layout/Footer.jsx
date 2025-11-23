import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/NS2L.jpg"
                alt="NS2L & Associés"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              NS2L & Associés, votre cabinet d'expertise comptable et d'audit basé à Levallois-Perret.
              Nous accompagnons les TPE et PME avec des solutions modernes et personnalisées.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/company/ns2l-associes/about/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn NS2L & Associés">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook NS2L & Associés">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter NS2L & Associés">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className='flex flex-col justify-between gap-2'>
              <div className="mb-2">
              <img
                src="/oec.png"
                alt="NS2L & Associés"
                className="h-16 w-full"
              />
            </div>
            <div className="mb-2">
              <img
                src="/cncc.png"
                alt="NS2L & Associés"
                className="h-28 w-full"
              />
            </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/notre-cabinet" className="text-gray-300 hover:text-white transition-colors">
                  Notre Cabinet
                </Link>
              </li>
              <li>
                <Link to="/nos-services" className="text-gray-300 hover:text-white transition-colors">
                  Nos Expertises
                </Link>
              </li>
              <li>
                <Link to="/secteurs-activite" className="text-gray-300 hover:text-white transition-colors">
                  Secteurs d'Activité
                </Link>
              </li>
              <li>
                <Link to="/experts" className="text-gray-300 hover:text-white transition-colors">
                  Nos Experts
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="text-gray-300 hover:text-white transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/avis" className="text-gray-300 hover:text-white transition-colors">
                  Avis Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Expertises</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/nos-services" className="text-gray-300 hover:text-white transition-colors">
                  Expertise Comptable
                </Link>
              </li>
              <li>
                <Link to="/nos-services" className="text-gray-300 hover:text-white transition-colors">
                  Conseil Fiscal
                </Link>
              </li>
              <li>
                <Link to="/nos-services" className="text-gray-300 hover:text-white transition-colors">
                  Conseil en Gestion
                </Link>
              </li>
              <li>
                <Link to="/nos-services" className="text-gray-300 hover:text-white transition-colors">
                  Social & Paie
                </Link>
              </li>
              <li>
                <Link to="/nos-services" className="text-gray-300 hover:text-white transition-colors">
                  Création d'Entreprise
                </Link>
              </li>
              <li>
                <Link to="/nos-services" className="text-gray-300 hover:text-white transition-colors">
                  International
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
            
                <div className="text-gray-300">
                  <p>31 Rue Danton</p>
                  <p>92300 Levallois-Perret</p>
                  <p>France</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-gray-300 space-y-1">
                  <div>
                    <span className="font-medium">Nathan ELBAZ :</span>
                    <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/nathan-elbaz-921224121/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn NS2L & Associés">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <Phone className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <a href="tel:+33631553579" className="ml-2 hover:text-white transition-colors">
                      06 31 55 35 79
                    </a>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Salomé ELBAZ :</span>
                    <div className='flex gap-2'>
                      <a href="https://www.linkedin.com/in/salome-elbaz-67227884/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn NS2L & Associés">
                      <Linkedin className="h-5 w-5" />
                    </a>
                      <Phone className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <a href="tel:+33783692861" className="ml-2 hover:text-white transition-colors">
                      07 83 69 28 61
                    </a>
                    </div>
                    
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <a href="mailto:contact@ns2l.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@ns2l.com
                </a>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Lun - Ven : 9h - 18h</p>
                  <p>WhatsApp 24/7</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 NS2L & Associés. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer