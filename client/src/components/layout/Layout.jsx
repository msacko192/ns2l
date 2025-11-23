import React from "react"
import { useLocation } from "react-router-dom"
import Header from "./Header-improved"
import Footer from "./Footer"
import CookieConsent from "../CookieConsent"

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main
        key={location.pathname}
        className="animate-fade-in"
        style={{
          animationDuration: '0.4s',
          animationTimingFunction: 'ease-out',
          animationFillMode: 'both'
        }}
      >
        {children}
      </main>
      <CookieConsent />
      <Footer />
    </div>
  )
}

export default Layout
