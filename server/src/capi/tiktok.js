const { hashUserData } = require('../utils/hash')

/**
 * Envoie un événement Lead à TikTok Ads via Events API
 * @param {object} user - Données utilisateur { email, firstName, lastName, company, service }
 * @returns {Promise<object>} - Réponse de l'API TikTok
 */
async function sendToTikTok(user) {
  const PIXEL_CODE = process.env.TIKTOK_PIXEL_CODE
  const ACCESS_TOKEN = process.env.TIKTOK_ACCESS_TOKEN

  if (!PIXEL_CODE || !ACCESS_TOKEN) {
    console.warn('TikTok CAPI: Pixel Code ou Access Token manquant')
    return { success: false, error: 'Configuration manquante' }
  }

  try {
    const hashedData = hashUserData(user)
    const timestamp = Math.floor(Date.now() / 1000)

    const payload = {
      pixel_code: PIXEL_CODE,
      event: 'CompleteRegistration', // TikTok utilise CompleteRegistration pour les leads
      event_id: `lead_${timestamp}_${hashedData.email.substring(0, 8)}`,
      timestamp: timestamp.toString(),
      context: {
        user_agent: 'Mozilla/5.0 (Server-Side)',
        ip: '0.0.0.0', // Remplacer par l'IP réelle si disponible
        page: {
          url: process.env.FRONTEND_URL || 'https://www.ns2l.com/contact'
        }
      },
      properties: {
        contents: [
          {
            content_type: 'product',
            content_name: user.service,
            content_id: user.service
          }
        ],
        value: 1.0,
        currency: 'EUR',
        description: `Lead from ${user.company}`
      },
      user: {
        email: hashedData.email,
        phone: hashedData.phone,
        external_id: hashedData.email
      }
    }

    const url = 'https://business-api.tiktok.com/open_api/v1.3/event/track/'

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': ACCESS_TOKEN
      },
      body: JSON.stringify(payload)
    })

    const result = await response.json()

    if (!response.ok || result.code !== 0) {
      throw new Error(`TikTok CAPI Error: ${JSON.stringify(result)}`)
    }

    console.log('✅ TikTok CAPI: Lead envoyé avec succès', result)
    return { success: true, platform: 'TikTok', result }

  } catch (error) {
    console.error('❌ TikTok CAPI Error:', error.message)
    return { success: false, platform: 'TikTok', error: error.message }
  }
}

module.exports = { sendToTikTok }
