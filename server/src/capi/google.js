const { hashUserData } = require('../utils/hash')

/**
 * Envoie un événement Lead à Google Ads via Enhanced Conversions API
 * @param {object} user - Données utilisateur { email, firstName, lastName, company, service }
 * @returns {Promise<object>} - Réponse de l'API Google
 */
async function sendToGoogle(user) {
  const CONVERSION_ID = process.env.GOOGLE_CONVERSION_ID
  const CONVERSION_LABEL = process.env.GOOGLE_CONVERSION_LABEL
  const API_KEY = process.env.GOOGLE_ADS_API_KEY

  if (!CONVERSION_ID || !CONVERSION_LABEL || !API_KEY) {
    console.warn('Google Ads CAPI: Configuration manquante')
    return { success: false, error: 'Configuration manquante' }
  }

  try {
    const hashedData = hashUserData(user)
    const timestamp = new Date().toISOString()

    const payload = {
      conversions: [
        {
          gclid: null, // Optionnel si pas de gclid
          conversion_action: `customers/${CONVERSION_ID}/conversionActions/${CONVERSION_LABEL}`,
          conversion_date_time: timestamp,
          conversion_value: 1.0,
          currency_code: 'EUR',
          user_identifiers: [
            {
              hashed_email: hashedData.email
            },
            {
              hashed_first_name: hashedData.firstName
            },
            {
              hashed_last_name: hashedData.lastName
            }
          ],
          custom_variables: [
            {
              key: 'company',
              value: user.company
            },
            {
              key: 'service',
              value: user.service
            }
          ]
        }
      ],
      partial_failure: false
    }

    // Note: Google Ads API nécessite OAuth2 - ceci est un exemple simplifié
    // Pour une implémentation complète, utilisez la bibliothèque officielle google-ads-api
    const url = `https://googleads.googleapis.com/v15/customers/${CONVERSION_ID}:uploadClickConversions`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'developer-token': process.env.GOOGLE_DEVELOPER_TOKEN || ''
      },
      body: JSON.stringify(payload)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(`Google Ads CAPI Error: ${JSON.stringify(result)}`)
    }

    console.log('✅ Google Ads CAPI: Lead envoyé avec succès', result)
    return { success: true, platform: 'Google', result }

  } catch (error) {
    console.error('❌ Google Ads CAPI Error:', error.message)
    return { success: false, platform: 'Google', error: error.message }
  }
}

module.exports = { sendToGoogle }
