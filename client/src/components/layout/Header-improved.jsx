import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  const isActiveRoute = (path) => {
    if (path === "/" && location.pathname === "/") return true
    if (path !== "/" && location.pathname.startsWith(path)) return true
    return false
  }

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const navigationItems = [
    { name: "Accueil", path: "/" },
    { name: "Notre Cabinet", path: "/notre-cabinet" },
    { name: "Nos Services", path: "/nos-services" },
    { name: "Secteurs d'Activité", path: "/secteurs-activite" },
    { name: "Notre Expert", path: "/experts" },
    { name: "Actualités", path: "/actualites" },
    { name: "Avis Clients", path: "/avis" }
  ]

  return (
    <header className="bg-black border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div>
              <img
                  src="/NS2L.jpg"
                  alt="Logo"
                  className="w-32 sm:w-40 md:w-44 lg:w-48 xl:w-56"
                />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center font-medium transition-colors ${
                        isActiveRoute(item.path)
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.name}
                      <span className="ml-1 text-sm">▼</span>
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-600 rounded-md shadow-lg py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors ${
                      isActiveRoute(item.path)
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className={`hidden sm:inline-flex items-center justify-center px-6 py-2 rounded-md font-medium transition-colors ${
                isActiveRoute('/contact')
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              Contact
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-700 py-4">
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center justify-between w-full text-left font-medium py-2 transition-colors ${
                          isActiveRoute(item.path)
                            ? 'text-white'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {item.name}
                        <span className={`text-sm transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}>
                          ▼
                        </span>
                      </button>
                      {openDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block text-gray-400 hover:text-white py-1"
                              onClick={() => {
                                setIsMenuOpen(false)
                                setOpenDropdown(null)
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block font-medium py-2 transition-colors ${
                        isActiveRoute(item.path)
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-md font-medium transition-colors ${
                    isActiveRoute('/contact')
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
