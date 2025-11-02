import { useEffect } from 'react'

export const useSEO = ({ title, description, keywords, canonical }) => {
  useEffect(() => {
    // Update page title
    if (title) {
      document.title = `${title} | NS2L & Associés - Expert-Comptable Levallois-Perret`
    }

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.content = description
      }
    }

    // Update keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.content = keywords
      }
    }

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]')
      if (canonicalLink) {
        canonicalLink.href = canonical
      }
    }

    // Update Open Graph tags
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) {
        ogTitle.content = `${title} | NS2L & Associés`
      }
    }

    if (description) {
      let ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) {
        ogDescription.content = description
      }
    }

    if (canonical) {
      let ogUrl = document.querySelector('meta[property="og:url"]')
      if (ogUrl) {
        ogUrl.content = canonical
      }
    }

    // Update Twitter Card tags
    if (title) {
      let twitterTitle = document.querySelector('meta[name="twitter:title"]')
      if (twitterTitle) {
        twitterTitle.content = `${title} | NS2L & Associés`
      }
    }

    if (description) {
      let twitterDescription = document.querySelector('meta[name="twitter:description"]')
      if (twitterDescription) {
        twitterDescription.content = description
      }
    }
  }, [title, description, keywords, canonical])
}

export default useSEO