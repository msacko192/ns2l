import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import ScrollToTop from "./components/ScrollToTop"
import ErrorBoundary from "./components/ErrorBoundary"

// Import pages directly
import Home from "./pages/Home"
import NotreCabinet from "./pages/NotreCabinet"
import NosServices from "./pages/NosServices"
import SecteursActivite from "./pages/SecteursActivite"
import Experts from "./pages/Experts"
import Actualites from "./pages/Actualites"
import ActualiteDetail from "./pages/ActualiteDetail"
import Avis from "./pages/Avis"
import Contact from "./pages/Contact"
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite"
import MentionsLegales from "./pages/MentionsLegales"
import ContactConfirmation from "./pages/ContactConfirmation"
import Analytics from "./components/analytics"

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
         <Analytics />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notre-cabinet" element={<NotreCabinet />} />
            <Route path="/nos-services" element={<NosServices />} />
            <Route path="/secteurs-activite" element={<SecteursActivite />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/actualites/:id" element={<ActualiteDetail />} />
            <Route path="/avis" element={<Avis />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-confirmation" element={<ContactConfirmation />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App
