const { sendToMeta } = require('./meta')
const { sendToGoogle } = require('./google')
const { sendToLinkedIn } = require('./linkedin')
const { sendToTikTok } = require('./tiktok')

/**
 * Envoie les données de lead à toutes les plateformes publicitaires
 * @param {object} user - Données utilisateur { email, firstName, lastName, company, service }
 * @returns {Promise<object>} - Résultats de l'envoi vers toutes les plateformes
 */
async function sendLeadToAllPlatforms(user) {
  console.log('📤 Envoi du lead vers toutes les plateformes CAPI...')

  // Exécuter tous les envois en parallèle
  const results = await Promise.allSettled([
    sendToMeta(user),
    sendToGoogle(user),
    sendToLinkedIn(user),
    sendToTikTok(user)
  ])

  // Formater les résultats
  const summary = {
    total: results.length,
    success: results.filter(r => r.status === 'fulfilled' && r.value.success).length,
    failed: results.filter(r => r.status === 'rejected' || (r.status === 'fulfilled' && !r.value.success)).length,
    details: results.map((result, index) => {
      const platforms = ['Meta', 'Google', 'LinkedIn', 'TikTok']

      if (result.status === 'fulfilled') {
        return {
          platform: platforms[index],
          success: result.value.success,
          data: result.value
        }
      } else {
        return {
          platform: platforms[index],
          success: false,
          error: result.reason?.message || 'Unknown error'
        }
      }
    })
  }

  console.log('📊 Résumé envoi CAPI:', {
    réussies: summary.success,
    échouées: summary.failed
  })

  return summary
}

/**
 * Envoie les données de lead à des plateformes spécifiques
 * @param {object} user - Données utilisateur
 * @param {Array<string>} platforms - Liste des plateformes ['meta', 'google', 'linkedin', 'tiktok']
 * @returns {Promise<object>} - Résultats de l'envoi
 */
async function sendLeadToSpecificPlatforms(user, platforms = []) {
  console.log(`📤 Envoi du lead vers: ${platforms.join(', ')}`)

  const platformFunctions = {
    meta: sendToMeta,
    google: sendToGoogle,
    linkedin: sendToLinkedIn,
    tiktok: sendToTikTok
  }

  const promises = platforms
    .filter(platform => platformFunctions[platform])
    .map(platform => platformFunctions[platform](user))

  const results = await Promise.allSettled(promises)

  return {
    total: results.length,
    success: results.filter(r => r.status === 'fulfilled' && r.value.success).length,
    failed: results.filter(r => r.status === 'rejected' || (r.status === 'fulfilled' && !r.value.success)).length,
    details: results.map((result, index) => ({
      platform: platforms[index],
      success: result.status === 'fulfilled' ? result.value.success : false,
      data: result.status === 'fulfilled' ? result.value : { error: result.reason?.message }
    }))
  }
}

module.exports = {
  sendLeadToAllPlatforms,
  sendLeadToSpecificPlatforms,
  sendToMeta,
  sendToGoogle,
  sendToLinkedIn,
  sendToTikTok
}
