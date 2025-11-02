require('dotenv').config()
const { Hono } = require('hono')
const { serve } = require('@hono/node-server')
const { cors } = require('hono/cors')
const { Resend } = require('resend')

const app = new Hono()

// Configuration CORS
app.use('/api/*', cors({
  origin: 'http://localhost:5173',
  allowHeaders: ['Content-Type'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))

// Initialiser Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Endpoint pour l'envoi d'emails
app.post('/api/send-email', async (c) => {
  try {
    const body = await c.req.json()

    // Validation des données requises
    const { nom, prenom, email, entreprise, service } = body

    if (!nom || !prenom || !email || !entreprise || !service) {
      return c.json({
        error: 'Les champs nom, prénom, email, entreprise et service sont requis'
      }, 400)
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return c.json({
        error: 'Format d\'email invalide'
      }, 400)
    }

    // Mappage des services pour l'affichage
    const serviceLabels = {
      'expertise-comptable': 'Expertise comptable',
      'conseil-fiscal': 'Conseil fiscal',
      'social-paie': 'Social et paie',
      'conseil-gestion': 'Conseil en gestion',
      'creation-entreprise': 'Création d\'entreprise',
      'accompagnement-digital': 'Accompagnement digital',
      'autre': 'Autre'
    }

    const serviceLabel = serviceLabels[service] || service

    // Préparer le contenu de l'email
    const emailContent = `
    <h2>Nouvelle demande de contact</h2>

    <h3>Informations du contact :</h3>
    <ul>
      <li><strong>Nom :</strong> ${nom}</li>
      <li><strong>Prénom :</strong> ${prenom}</li>
      <li><strong>Email :</strong> ${email}</li>
      <li><strong>Téléphone :</strong> ${body.telephone || 'Non renseigné'}</li>
      <li><strong>Entreprise :</strong> ${entreprise}</li>
      <li><strong>Service recherché :</strong> ${serviceLabel}</li>
    </ul>

    ${body.message ? `
    <h3>Message :</h3>
    <p>${body.message.replace(/\n/g, '<br>')}</p>
    ` : ''}

    <hr>
    <p><em>Email envoyé depuis le formulaire de contact du site NS2L & Associés</em></p>
    `

    // Envoyer l'email via Resend
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Remplacez par votre domaine vérifié
      to: ['moussasacko418@gmail.com'], // Email de destination
      subject: `Nouvelle demande de contact - ${prenom} ${nom} (${entreprise})`,
      html: emailContent,
      replyTo: email
    })

    console.log('Email envoyé avec succès:', data)

    return c.json({
      success: true,
      message: 'Email envoyé avec succès',
      id: data.id
    })

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)

    return c.json({
      error: 'Erreur serveur lors de l\'envoi de l\'email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, 500)
  }
})

// Route de test
app.get('/api/health', (c) => {
  return c.json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  })
})

// Gestion des routes non trouvées
app.notFound((c) => {
  return c.json({ error: 'Route non trouvée' }, 404)
})

const port = process.env.PORT || 3001

console.log(`Serveur démarré sur le port ${port}`)
serve({
  fetch: app.fetch,
  port
})