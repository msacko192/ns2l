const { hashUserData } = require('../utils/hash')

/**
 * Envoie un événement Lead à LinkedIn Ads via Conversion API
 * @param {object} user - Données utilisateur { email, firstName, lastName, company, service }
 * @returns {Promise<object>} - Réponse de l'API LinkedIn
 */
async function sendToLinkedIn(user) {
  const CONVERSION_ID = process.env.LINKEDIN_CONVERSION_ID
  const ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN

  if (!CONVERSION_ID || !ACCESS_TOKEN) {
    console.warn('LinkedIn CAPI: Conversion ID ou Access Token manquant')
    return { success: false, error: 'Configuration manquante' }
  }

  try {
    const hashedData = hashUserData(user)
    const timestamp = Date.now()

    const payload = {
      conversion: CONVERSION_ID,
      conversionHappenedAt: timestamp,
      conversionValue: {
        currencyCode: 'EUR',
        amount: '1.00'
      },
      user: {
        userIds: [
          {
            idType: 'SHA256_EMAIL',
            idValue: hashedData.email
          }
        ],
        userInfo: {
          firstName: hashedData.firstName,
          lastName: hashedData.lastName,
          companyName: user.company
        }
      },
      eventId: `lead_${timestamp}_${hashedData.email.substring(0, 8)}`,
      customData: {
        service: user.service
      }
    }

    const url = 'https://api.linkedin.com/rest/conversionEvents'

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'LinkedIn-Version': '202401',
        'X-RestLi-Protocol-Version': '2.0.0'
      },
      body: JSON.stringify(payload)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(`LinkedIn CAPI Error: ${JSON.stringify(result)}`)
    }

    console.log('✅ LinkedIn CAPI: Lead envoyé avec succès', result)
    return { success: true, platform: 'LinkedIn', result }

  } catch (error) {
    console.error('❌ LinkedIn CAPI Error:', error.message)
    return { success: false, platform: 'LinkedIn', error: error.message }
  }
}

module.exports = { sendToLinkedIn }
