const crypto = require('crypto')

/**
 * Hache une valeur en SHA-256
 * @param {string} value - La valeur à hacher
 * @returns {string} - Le hash SHA-256 en hexadécimal
 */
function sha256(value) {
  if (!value) return ''

  // Normaliser la valeur (trim + lowercase pour email)
  const normalizedValue = String(value).trim().toLowerCase()

  return crypto
    .createHash('sha256')
    .update(normalizedValue)
    .digest('hex')
}

/**
 * Hache plusieurs champs utilisateur
 * @param {object} user - Objet contenant les données utilisateur
 * @returns {object} - Objet avec les données hachées
 */
function hashUserData(user) {
  return {
    email: sha256(user.email),
    firstName: sha256(user.firstName),
    lastName: sha256(user.lastName),
    phone: user.phone ? sha256(user.phone) : undefined,
    // Données non hachées (metadata)
    company: user.company,
    service: user.service
  }
}

module.exports = {
  sha256,
  hashUserData
}
