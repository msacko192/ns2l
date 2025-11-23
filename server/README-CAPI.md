# 📡 Module CAPI - Conversion API Server-Side

Ce module permet d'envoyer automatiquement les leads vers les principales plateformes publicitaires via leurs APIs server-side (CAPI), contournant ainsi les adblockers et restrictions iOS/IPT.

## 🎯 Plateformes supportées

- **Meta (Facebook/Instagram)** - Conversions API
- **Google Ads** - Enhanced Conversions API
- **LinkedIn Ads** - Conversion API
- **TikTok Ads** - Events API

## 📦 Architecture

```
server/
├── src/
│   ├── capi/
│   │   ├── index.js      # Module principal avec toutes les fonctions
│   │   ├── meta.js       # Meta Conversions API
│   │   ├── google.js     # Google Enhanced Conversions
│   │   ├── linkedin.js   # LinkedIn Conversion API
│   │   └── tiktok.js     # TikTok Events API
│   └── utils/
│       └── hash.js       # Hachage SHA-256 pour RGPD
└── index.js              # Intégration dans le serveur principal
```

## 🔐 Configuration

### 1. Variables d'environnement

Copiez `.env.example` vers `.env` et remplissez les valeurs :

```bash
# Meta (Facebook/Instagram)
META_PIXEL_ID=123456789
META_ACCESS_TOKEN=EAAxxxxxxxxxx

# Google Ads
GOOGLE_CONVERSION_ID=AW-123456789
GOOGLE_CONVERSION_LABEL=abc123
GOOGLE_ADS_API_KEY=your_api_key
GOOGLE_DEVELOPER_TOKEN=your_developer_token

# LinkedIn
LINKEDIN_CONVERSION_ID=12345678
LINKEDIN_ACCESS_TOKEN=AQVxxxxxxxxxx

# TikTok
TIKTOK_PIXEL_CODE=C123ABC456DEF
TIKTOK_ACCESS_TOKEN=abc123def456
```

### 2. Comment obtenir les tokens ?

#### Meta (Facebook/Instagram)
1. Allez sur [Meta Business Manager](https://business.facebook.com)
2. Créez un Pixel Facebook
3. Générez un Access Token via **Events Manager > Settings > Conversions API**
4. Utilisez le Pixel ID et l'Access Token

#### Google Ads
1. Allez sur [Google Ads](https://ads.google.com)
2. Configurez **Enhanced Conversions** dans vos campagnes
3. Récupérez votre Conversion ID (AW-XXXXXXXXX)
4. Créez un Conversion Label pour l'événement "Lead"
5. Générez une clé API OAuth2

#### LinkedIn
1. Allez sur [LinkedIn Campaign Manager](https://www.linkedin.com/campaignmanager)
2. Créez un **Insight Tag**
3. Configurez une **Conversion** de type "Lead"
4. Générez un Access Token via LinkedIn Developer Portal

#### TikTok
1. Allez sur [TikTok Ads Manager](https://ads.tiktok.com)
2. Créez un **TikTok Pixel**
3. Activez **Events API** dans les paramètres
4. Générez un Access Token

## 🚀 Utilisation

### Envoi automatique lors de la soumission du formulaire

Le module est déjà intégré dans `index.js`. Lorsqu'un utilisateur soumet le formulaire de contact, les données sont automatiquement envoyées à toutes les plateformes :

```javascript
const { sendLeadToAllPlatforms } = require('./src/capi/index')

// Dans l'endpoint /api/send-email
const user = {
  email,
  firstName: prenom,
  lastName: nom,
  company: entreprise,
  service: serviceLabel,
  phone: body.telephone || null
}

const capiResults = await sendLeadToAllPlatforms(user)
console.log('📊 Résultats CAPI:', capiResults)
```

### Envoi vers des plateformes spécifiques

```javascript
const { sendLeadToSpecificPlatforms } = require('./src/capi/index')

// Envoyer uniquement vers Meta et Google
const results = await sendLeadToSpecificPlatforms(user, ['meta', 'google'])
```

### Envoi vers une seule plateforme

```javascript
const { sendToMeta, sendToGoogle, sendToLinkedIn, sendToTikTok } = require('./src/capi/index')

// Envoyer uniquement vers Meta
const metaResult = await sendToMeta(user)
```

## 📊 Format de réponse

```javascript
{
  total: 4,
  success: 3,
  failed: 1,
  details: [
    {
      platform: 'Meta',
      success: true,
      data: { ... }
    },
    {
      platform: 'Google',
      success: true,
      data: { ... }
    },
    {
      platform: 'LinkedIn',
      success: false,
      error: 'Token invalide'
    },
    {
      platform: 'TikTok',
      success: true,
      data: { ... }
    }
  ]
}
```

## 🔒 Sécurité et conformité RGPD

### Hachage SHA-256

Toutes les données personnelles (email, prénom, nom) sont hachées en SHA-256 avant l'envoi, conformément aux exigences :
- **RGPD** (protection des données)
- **Meta CAPI** (données hachées obligatoires)
- **Google Enhanced Conversions** (données hachées recommandées)

```javascript
const { sha256, hashUserData } = require('./src/utils/hash')

// Hacher une valeur
const hashedEmail = sha256('john.doe@example.com')
// => "d8a928b2043db77e340b523547bf16cb4aa483f0645fe0a290ed1f20aab76257"

// Hacher toutes les données utilisateur
const hashedData = hashUserData({
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  company: 'ACME Corp',
  service: 'Expertise comptable'
})
```

### Données envoyées

**Hachées :**
- Email
- Prénom
- Nom
- Téléphone (si fourni)

**Non hachées (metadata) :**
- Entreprise
- Service recherché

## 🧪 Tests

### Test de connexion

```bash
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Doe",
    "prenom": "John",
    "email": "john.doe@example.com",
    "entreprise": "ACME Corp",
    "service": "expertise-comptable",
    "telephone": "0612345678",
    "message": "Test CAPI"
  }'
```

### Vérifier les logs

Les logs indiquent le succès ou l'échec de chaque plateforme :

```
📤 Envoi du lead vers toutes les plateformes CAPI...
✅ Meta CAPI: Lead envoyé avec succès
✅ Google Ads CAPI: Lead envoyé avec succès
❌ LinkedIn CAPI Error: Token invalide
✅ TikTok CAPI: Lead envoyé avec succès
📊 Résumé envoi CAPI: { réussies: 3, échouées: 1 }
```

## ⚠️ Gestion des erreurs

Le module utilise `Promise.allSettled()` pour que l'échec d'une plateforme n'empêche pas l'envoi aux autres.

Si une plateforme échoue :
- Un log d'erreur est affiché
- Les autres plateformes continuent
- L'email de confirmation est quand même envoyé

## 🔧 Dépannage

### "Configuration manquante"
➡️ Vérifiez que toutes les variables d'environnement sont définies dans `.env`

### "Token invalide"
➡️ Régénérez le token sur la plateforme concernée

### "Pixel ID non trouvé"
➡️ Vérifiez l'ID du pixel dans la console de la plateforme

### Aucune donnée reçue
➡️ Vérifiez les logs dans la console de la plateforme (peut prendre quelques minutes)

## 📚 Documentation officielle

- [Meta Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Google Enhanced Conversions](https://developers.google.com/google-ads/api/docs/conversions/upload-identifiers)
- [LinkedIn Conversion API](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/advertising-targeting/conversion-tracking)
- [TikTok Events API](https://business-api.tiktok.com/portal/docs?id=1741601162187777)

## 🎯 Avantages du CAPI

✅ **Contourne les adblockers** - Les données sont envoyées depuis le serveur
✅ **Contourne iOS/IPT** - Pas de restrictions liées aux cookies
✅ **Meilleur tracking** - Données plus fiables et précises
✅ **RGPD compliant** - Données hachées + consentement utilisateur
✅ **Optimisation publicitaire** - Meilleure attribution des conversions

## 📈 Métriques

Les plateformes publicitaires utiliseront ces données pour :
- **Optimiser les campagnes** (algorithmes de machine learning)
- **Améliorer le ciblage** (audiences similaires)
- **Mesurer les conversions** (attribution précise)
- **Calculer le ROI** (retour sur investissement publicitaire)
