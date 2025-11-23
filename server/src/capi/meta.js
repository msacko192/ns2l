const { hashUserData } = require('../utils/hash')

/**
 * Envoie un événement Lead à Meta (Facebook/Instagram) via Conversions API
 * @param {object} user - Données utilisateur { email, firstName, lastName, company, service }
 * @returns {Promise<object>} - Réponse de l'API Meta
 */
async function sendToMeta(user) {
  const PIXEL_ID = process.env.META_PIXEL_ID
  const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn('Meta CAPI: Pixel ID ou Access Token manquant')
    return { success: false, error: 'Configuration manquante' }
  }

  try {
    const hashedData = hashUserData(user)
    const timestamp = Math.floor(Date.now() / 1000)

    const payload = {
      data: [
        {
          event_name: 'Lead',
          event_time: timestamp,
          event_source_url: process.env.FRONTEND_URL || 'https://www.ns2l.com',
          action_source: 'website',
          user_data: {
            em: hashedData.email,
            fn: hashedData.firstName,
            ln: hashedData.lastName,
            ph: hashedData.phone
          },
          custom_data: {
            company: user.company,
            service: user.service,
            value: 1.00,
            currency: 'EUR'
          }
        }
      ]
    }

    const url = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(`Meta CAPI Error: ${JSON.stringify(result)}`)
    }

    console.log('✅ Meta CAPI: Lead envoyé avec succès', result)
    return { success: true, platform: 'Meta', result }

  } catch (error) {
    console.error('❌ Meta CAPI Error:', error.message)
    return { success: false, platform: 'Meta', error: error.message }
  }
}

module.exports = { sendToMeta }
