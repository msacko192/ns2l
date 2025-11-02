# Backend API - Cabinet Comptable

API backend développée avec HonoJS pour gérer l'envoi d'emails depuis le formulaire de contact.

## 🚀 Installation

```bash
cd server
npm install
```

## ⚙️ Configuration

1. Créez un fichier `.env` à partir de `.env.example`
2. Ajoutez votre clé API Resend :

```env
RESEND_API_KEY=your_resend_api_key_here
PORT=3001
NODE_ENV=development
```

## 📡 API Endpoints

### POST `/api/send-email`
Envoie un email avec les données du formulaire de contact.

**Body (JSON) :**
```json
{
  "nom": "Dupont",
  "prenom": "Jean",
  "email": "jean.dupont@email.com",
  "telephone": "01 23 45 67 89",
  "entreprise": "Ma Société",
  "service": "expertise-comptable",
  "message": "Bonjour, j'aimerais un devis..."
}
```

**Réponse de succès :**
```json
{
  "success": true,
  "message": "Email envoyé avec succès",
  "id": "email-id-from-resend"
}
```

**Réponse d'erreur :**
```json
{
  "error": "Message d'erreur",
  "details": "Détails de l'erreur (en développement seulement)"
}
```

### GET `/api/health`
Vérifie l'état du serveur.

**Réponse :**
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2024-09-20T19:34:25.123Z"
}
```

## 🛠 Développement

```bash
# Démarrer en mode développement (avec auto-reload)
npm run dev

# Démarrer en production
npm start
```

## 📋 Configuration CORS

Le serveur est configuré pour accepter les requêtes depuis :
- `http://localhost:5173` (Vite dev)
- `http://localhost:5177` (Vite dev alternatif)
- `https://ns2l-associes.fr` (Production)

## 📧 Configuration Resend

1. Créez un compte sur [Resend](https://resend.com)
2. Ajoutez et vérifiez votre domaine
3. Créez une clé API
4. Ajoutez la clé dans votre fichier `.env`

**Note :** Remplacez `from: 'contact@ns2l-associes.fr'` dans `index.js` par votre domaine vérifié.

## 🔒 Sécurité

- Validation des données d'entrée
- Protection CORS configurée
- Validation d'email avec regex
- Gestion des erreurs sécurisée (pas de leak d'informations en production)

## 📁 Structure

```
server/
├── index.js          # Point d'entrée principal
├── package.json       # Dépendances et scripts
├── .env.example       # Template de configuration
└── README.md          # Documentation
```