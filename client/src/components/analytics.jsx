
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-3TXHSBDCDJ";

export default function Analytics() {
  const location = useLocation();
  const [isGALoaded, setIsGALoaded] = useState(false);

  // Charger le script Google Analytics uniquement si les cookies sont acceptés
  useEffect(() => {
    const checkConsentAndLoadGA = () => {
      const cookieConsent = localStorage.getItem('cookieConsent');

      if (cookieConsent === 'accepted' && !isGALoaded) {
        // Charger le script gtag.js de Google Analytics
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(script);

        // Attendre que le script soit chargé avant d'initialiser
        script.onload = () => {
          // Initialiser gtag
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', GA_ID, {
            page_path: location.pathname,
            cookie_flags: 'SameSite=None;Secure'
          });

          console.log('Google Analytics chargé et initialisé avec consentement');
        };

        setIsGALoaded(true);
      } else if (cookieConsent === 'refused') {
        // Supprimer tous les cookies Google Analytics si refusés
        deleteCookiesByPrefix('_ga');
        deleteCookiesByPrefix('_gcl');
      }
    };

    // Fonction pour supprimer les cookies par préfixe
    const deleteCookiesByPrefix = (prefix) => {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const cookieName = cookie.split('=')[0];
        if (cookieName.startsWith(prefix)) {
          // Supprimer le cookie pour tous les chemins et domaines possibles
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
        }
      }
    };

    // Vérifier immédiatement
    checkConsentAndLoadGA();

    // Écouter les changements de localStorage
    const handleStorageChange = (e) => {
      if (e.key === 'cookieConsent') {
        checkConsentAndLoadGA();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isGALoaded, location.pathname]);

  // Envoyer les pageviews uniquement si GA est chargé
  useEffect(() => {
    if (isGALoaded && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
      });
      console.log('Pageview envoyé à GA:', location.pathname);
    }
  }, [location, isGALoaded]);

  return null;
}
