# Configuration Email avec Resend

## 🚀 Installation terminée

Le formulaire de contact a été configuré pour utiliser **Resend** au lieu d'EmailJS.

## 📧 Comment ça marche

1. **Frontend** : Le formulaire envoie les données vers l'API backend
2. **Backend** : Serveur Express qui utilise Resend pour envoyer l'email
3. **Destination** : Tous les emails sont envoyés à `moussasacko418@gmail.com`

## ⚙️ Configuration requise

### 1. Créer un compte Resend

1. Aller sur https://resend.com
2. Créer un compte gratuit
3. Aller dans **API Keys**
4. Créer une nouvelle clé API

### 2. Configurer la clé API

Dans le fichier `.env`, remplacer :
```env
RESEND_API_KEY=your_resend_api_key_here
```

Par votre vraie clé API Resend.

## 🚀 Lancement de l'application

### Option 1 : Lancement complet (Frontend + Backend)
```bash
npm run dev:full
```

### Option 2 : Lancement séparé

**Terminal 1 - Backend API :**
```bash
npm run server
```

**Terminal 2 - Frontend :**
```bash
npm run dev
```

## 📋 URLs

- **Frontend** : http://localhost:5175 (ou autre port Vite)
- **Backend API** : http://localhost:3001
- **Test API** : http://localhost:3001/api/health

## 📧 Template d'email

L'email envoyé contient :
- ✅ Informations du contact (nom, prénom, email, téléphone)
- ✅ Entreprise et service demandé
- ✅ Message complet
- ✅ Design HTML professionnel
- ✅ Reply-to automatique vers l'email du client

## 🔧 Dépannage

### Si l'envoi ne fonctionne pas :

1. **Vérifier que l'API backend fonctionne :**
   ```bash
   curl http://localhost:3001/api/health
   ```

2. **Vérifier la clé API Resend dans `.env`**

3. **Vérifier les logs du serveur dans le terminal**

### Erreurs courantes :

- `CORS error` : Le backend n'est pas démarré
- `Network error` : Mauvaise URL d'API
- `Resend error` : Clé API invalide ou domaine non vérifié

## 🎯 Avantages de Resend

- ✅ Service fiable et professionnel
- ✅ Pas de limite stricte comme EmailJS
- ✅ Meilleure délivrabilité
- ✅ Templates HTML riches
- ✅ Analytics intégrées
- ✅ API simple et moderne