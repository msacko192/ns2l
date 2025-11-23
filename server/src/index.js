require('dotenv').config()
const { Hono } = require('hono')
const { serve } = require('@hono/node-server')
const { cors } = require('hono/cors')
const { Resend } = require('resend')
const { sendLeadToAllPlatforms } = require('./capi/index')

const app = new Hono()

// Configuration CORS
app.use('/api/*', cors({
  origin: (origin) => {
    const allowed = [
      'http://localhost:5173',
      'https://www.ns2l.com'
    ]

    // Gérer requêtes sans origin (ex: Postman)
    if (!origin) return "*"

    return allowed.includes(origin) ? origin : null
  },
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
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

    // Préparer le contenu de l'email pour l'équipe
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

    // Email de confirmation à l'utilisateur
    const confirmationEmailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <p>Bonjour ${prenom},</p>

      <p>Merci pour votre message et l'intérêt que vous portez à notre cabinet NS2L & ASSOCIES.</p>

      <p>Nous avons bien reçu votre demande de contact via notre site internet. Un membre de notre équipe va prendre connaissance de votre situation et reviendra vers vous prochainement afin d'échanger plus en détail sur vos besoins (comptables, fiscaux, juridiques, sociaux, ou de pilotage).</p>

      <p>Si vous souhaitez nous transmettre dès maintenant des précisions complémentaires (statut de votre structure, secteur d'activité, volume de pièces, urgences éventuelles…), vous pouvez répondre directement à cet e-mail.</p>

      <p>Au plaisir d'échanger avec vous,</p>

      <p>Bien cordialement,</p>

      <p><strong>L'équipe NS2L & ASSOCIES</strong><br>
      Cabinet d'expertise comptable & conseil<br>
      07 83 69 28 61<br>
      <a href="http://www.ns2l.com">www.ns2l.com</a></p>
    </div>
    `

    // Envoyer l'email de notification à l'équipe NS2L
    const notificationEmail = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Remplacez par votre domaine vérifié
      to: ['moussasacko418@gmail.com'], // Email de destination
      subject: `Nouvelle demande de contact - ${prenom} ${nom} (${entreprise})`,
      html: emailContent,
      replyTo: email
    })

    console.log('Email de notification envoyé avec succès:', notificationEmail)

    // Envoyer l'email de confirmation à l'utilisateur
    const confirmationEmail = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Remplacez par votre domaine vérifié
      to: [email],
      subject: 'REPONSE POST REMPLISSAGE FICHE',
      html: confirmationEmailContent,
      replyTo: 'contact@ns2l.com'
    })

    console.log('Email de confirmation envoyé avec succès:', confirmationEmail)

    // Préparer les données utilisateur pour les plateformes publicitaires
    const user = {
      email,
      firstName: prenom,
      lastName: nom,
      company: entreprise,
      service: serviceLabel,
      phone: body.telephone || null
    }

    // Envoyer le lead aux plateformes publicitaires via CAPI (server-side)
    // Cela permet de contourner les adblockers et restrictions iOS/IPT
    const capiResults = await sendLeadToAllPlatforms(user)
    console.log('📊 Résultats envoi CAPI:', capiResults)

    return c.json({
      success: true,
      message: 'Emails envoyés avec succès',
      notificationId: notificationEmail.id,
      confirmationId: confirmationEmail.id,
      capi: {
        sent: capiResults.success,
        failed: capiResults.failed,
        platforms: capiResults.details.map(d => ({
          platform: d.platform,
          success: d.success
        }))
      }
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
