# Cabinet Comptable - Site Web

Site web professionnel pour un cabinet d'expertise comptable, développé avec React, Vite, Tailwind CSS et shadcn/ui.

## 🚀 Fonctionnalités

- ✅ Design noir et blanc professionnel
- ✅ Composants réutilisables (ExpertCard, ReviewCard, AverageRating)
- ✅ Navigation responsive avec accordéon
- ✅ 8 pages complètes
- ✅ Système d'évaluations avec étoiles dorées
- ✅ Formulaire de contact fonctionnel
- ✅ Données structurées pour experts et avis
- ✅ SEO-friendly

## 📱 Pages Disponibles

1. **Accueil** (/) - Page d'accueil avec présentation générale
2. **Notre Cabinet** (/notre-cabinet) - Présentation du cabinet et valeurs
3. **Nos Services** (/nos-services) - Services détaillés avec tarifs
4. **Secteurs d'Activité** (/secteurs-activite) - Expertise sectorielle
5. **Nos Experts** (/experts) - Présentation des 2 experts avec cartes
6. **Actualités** (/actualites) - Articles et ressources
7. **Avis Clients** (/avis) - Témoignages avec note moyenne
8. **Contact** (/contact) - Formulaire de contact et informations

## 🛠 Technologies Utilisées

- **React 18** - Framework JavaScript
- **Vite** - Outil de build moderne
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI
- **React Router DOM** - Routing
- **Lucide React** - Icônes

## 🎨 Design System

### Palette de Couleurs
- **Noir** (#000000) - Couleur principale
- **Blanc** (#ffffff) - Arrière-plan
- **Or** (#fbbf24, #f59e0b) - Accents pour les étoiles
- **Gris** - Variations pour le texte et les bordures

### Composants Réutilisables
- `ExpertCard` - Carte pour présenter les experts
- `ReviewCard` - Carte pour les avis clients
- `AverageRating` - Composant d'évaluation moyenne
- `StarRating` - Affichage d'étoiles
- `Layout` - Layout principal avec header/footer

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 🔧 Configuration

### Images
Ajoutez vos images dans `/public/images/` :
- Photos des experts (400x400px)
- Photos des clients pour les avis (48x48px)
- Images des articles d'actualités (400x225px)

*Note : Le code utilise des fallbacks automatiques si les images sont manquantes.*

## 📁 Structure des Fichiers

```
src/
├── components/
│   ├── ui/              # Composants shadcn/ui
│   ├── layout/          # Composants de layout
│   ├── cards/           # Composants de cartes
│   └── common/          # Composants communs
├── pages/               # Pages du site
├── data/                # Données structurées
└── lib/                 # Utilitaires
```

## 📊 Données

### Experts
Modifiez `/src/data/experts.js` pour personnaliser :
- Informations des experts-comptables
- Photos, descriptions, spécialisations
- Coordonnées de contact

### Avis Clients
Personnalisez `/src/data/reviews.js` :
- Témoignages clients
- Notes et commentaires
- Statistiques d'évaluation

### Services
Adaptez `/src/data/services.js` :
- Description des services
- Tarifs et prestations
- Secteurs d'activité

## 🎯 Personnalisation

### Couleurs
Modifiez `tailwind.config.js` pour changer le thème

### Contenu
1. Remplacez les textes dans chaque page
2. Ajoutez vos vraies données dans `/src/data/`
3. Remplacez les images par vos photos
4. Configurez les informations de contact

## 🚀 Déploiement

```bash
npm run build
```

Déployez le dossier `dist/` sur votre serveur web.

---

Développé avec ❤️ pour les cabinets d'expertise comptable.