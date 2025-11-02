# CLAUDE.md - Accounting Firm Website Development Plan
## Tech Stack: React + Vite + Tailwind CSS + shadcn/ui

## 📋 Project Specifications

### Technologies Stack
- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Colors**: Black and White (firm brand colors)
- **Icons**: Lucide React (included with shadcn/ui)
- **Router**: React Router DOM

### Site Structure & Pages
1. **Home** (/)
2. **Our Firm** (/notre-cabinet)
3. **Our Services** (/nos-services)  
4. **Business Sectors** (/secteurs-activite)
5. **Accounting Experts** (/experts) - 2 experts with cards
6. **News** (/actualites)
7. **Google Reviews** (/avis) - Cards with star ratings + average
8. **Contact Us** (/contact)

### Key Components Requirements
- **Header**: Navigation with Accordion (shadcn/ui) for menu items
- **ExpertCard**: Reusable card (photo, first name, last name, description)
- **ReviewCard**: Review card with image, star rating and comment
- **AverageRating**: Average component with golden stars (e.g., 4.5/5)
- **Layout**: Reusable layout component

## 🎨 Design System

### Color Palette (Black & White Theme)
```css
colors: {
  primary: {
    50: '#ffffff',   // Pure white
    100: '#f8f8f8',  // Off white
    500: '#000000',  // Primary black
    900: '#000000'   // Deep black
  },
  accent: {
    400: '#fbbf24',  // Gold for stars
    500: '#f59e0b'   // Darker gold
  },
  gray: {
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    700: '#374151'
  }
}
```

### Typography
- **Headings**: font-bold, text-black
- **Body text**: text-gray-700 for contrast
- **Accents**: text-black for important elements

## 🛠 File Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   │   ├── accordion.jsx
│   │   ├── card.jsx
│   │   ├── button.jsx
│   │   └── input.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── cards/
│   │   ├── ExpertCard.jsx
│   │   ├── ReviewCard.jsx
│   │   └── AverageRating.jsx
│   └── common/
│       ├── StarRating.jsx
│       └── ContactForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── NotreCabinet.jsx
│   ├── NosServices.jsx
│   ├── SecteursActivite.jsx
│   ├── Experts.jsx
│   ├── Actualites.jsx
│   ├── Avis.jsx
│   └── Contact.jsx
├── data/
│   ├── experts.js
│   ├── reviews.js
│   └── services.js
├── assets/
│   └── images/
└── App.jsx
```

## 📱 Detailed Component Specifications

### Header with Accordion Navigation
- Fixed navigation bar
- Sub-menus using shadcn/ui accordions
- Black and white design
- Mobile responsive with hamburger menu
- Logo placement
- CTA button for contact

### ExpertCard Component (Reusable)
```jsx
<ExpertCard 
  expert={{
    prenom: "Marie",
    nom: "DUPONT",
    photo: "/images/expert1.jpg",
    description: "Certified public accountant with 15 years experience in corporate taxation..."
  }}
/>
```

**Features:**
- Professional photo display
- Name and surname
- Brief description
- Contact buttons
- Hover effects
- Responsive design

### ReviewCard Component (Reusable)
```jsx
<ReviewCard 
  review={{
    clientName: "Jean Martin",
    clientImage: "/images/client1.jpg",
    rating: 5,
    comment: "Excellent service, very professional...",
    date: "March 2024"
  }}
/>
```

**Features:**
- Client image at top
- Star rating display
- Comment text
- Date stamp
- Google branding
- Responsive layout

### AverageRating Component
**Features:**
- Overall rating score (e.g., 4.5/5)
- Golden filled/empty stars
- Total number of reviews
- Rating distribution
- Hover animations

## 🚀 Installation & Setup

### 1. Project Initialization
```bash
npm create vite@latest accounting-firm -- --template react
cd accounting-firm
npm install
```

### 2. Tailwind CSS Installation
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. shadcn/ui Setup
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add card
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
```

### 4. Additional Dependencies
```bash
npm install react-router-dom lucide-react
```

### 5. Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffffff',
          500: '#000000',
          900: '#000000'
        },
        accent: {
          400: '#fbbf24',
          500: '#f59e0b'
        }
      }
    }
  },
  plugins: []
}
```

## 📊 Data Structure Examples

### Experts Data (2 accounting experts)
```javascript
const experts = [
  {
    id: 1,
    prenom: "Marie",
    nom: "DUPONT",
    photo: "/images/marie-dupont.jpg",
    description: "Certified public accountant with 15 years of experience in corporate taxation and management consulting. Specialized in SME support and tax optimization.",
    email: "marie.dupont@cabinet.fr",
    phone: "01 23 45 67 89",
    specializations: ["Corporate Tax", "Management Consulting", "SME Support"]
  },
  {
    id: 2,
    prenom: "Pierre",
    nom: "MARTIN", 
    photo: "/images/pierre-martin.jpg",
    description: "Certified public accountant and statutory auditor with 20 years of experience. Expert in auditing and business creation support.",
    email: "pierre.martin@cabinet.fr",
    phone: "01 23 45 67 90",
    specializations: ["Auditing", "Business Creation", "Financial Control"]
  }
];
```

### Google Reviews Data
```javascript
const reviews = [
  {
    id: 1,
    clientName: "Sophie L.",
    clientImage: "/images/client1.jpg",
    rating: 5,
    comment: "Very professional firm, wise advice and exemplary responsiveness. I highly recommend!",
    date: "March 2024",
    platform: "Google"
  },
  {
    id: 2,
    clientName: "Marc D.",
    clientImage: "/images/client2.jpg",
    rating: 5,
    comment: "Excellent support in creating my company. Professional and available team.",
    date: "February 2024",
    platform: "Google"
  }
];

const averageRating = {
  score: 4.7,
  totalReviews: 47,
  distribution: {
    5: 35,
    4: 8,
    3: 3,
    2: 1,
    1: 0
  }
};
```

## ✅ Page-Specific Features

### Experts Page (/experts)
- Responsive grid (2 columns desktop, 1 mobile)
- Cards with photo, name, description
- Hover animations
- "Book Appointment" CTA buttons
- Professional layout

### Reviews Page (/avis)
- Overall average at top with golden stars
- Grid of client review cards
- Filter by star rating
- Pagination for 12+ reviews
- Google branding

### Header Navigation
- Company logo
- Main menu with accordions for sub-items
- "Contact" CTA button
- Mobile hamburger menu
- Sticky navigation

## 🎯 Component Reusability

### Reusable Components List
1. **StarRating** - Used in ReviewCard and AverageRating
2. **Card containers** - Consistent styling across all cards
3. **Button variants** - Primary (black) and outline styles
4. **Layout wrapper** - Consistent spacing and max-width
5. **Section headers** - Standardized typography

### Design Principles
- **Consistency**: Same spacing, typography, and color usage
- **Modularity**: Each component handles its own state
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Performance**: Optimized images and minimal re-renders

## 🚀 Development Phases

### Phase 1: Setup & Base Components (Week 1)
- Project initialization and configuration
- shadcn/ui setup and customization
- Layout components (Header, Footer, Layout)
- Basic routing setup

### Phase 2: Core Components (Week 2)
- ExpertCard component
- ReviewCard and StarRating components
- AverageRating component
- Data structure setup

### Phase 3: Pages Implementation (Week 3)
- All page components
- Navigation with accordions
- Content integration
- Responsive design

### Phase 4: Polish & Optimization (Week 4)
- Animations and transitions
- Performance optimization
- SEO improvements
- Final testing

## 📋 Development Checklist

### Setup
- [ ] Vite + React project created
- [ ] Tailwind CSS configured
- [ ] shadcn/ui components installed
- [ ] React Router DOM setup
- [ ] File structure organized

### Components
- [ ] Header with accordion navigation
- [ ] ExpertCard component
- [ ] ReviewCard component
- [ ] StarRating component
- [ ] AverageRating component
- [ ] Layout component

### Pages
- [ ] Home page
- [ ] Our Firm page
- [ ] Services page
- [ ] Business Sectors page
- [ ] Experts page (2 experts)
- [ ] News page
- [ ] Reviews page with average
- [ ] Contact page

### Styling
- [ ] Black and white theme implemented
- [ ] Golden stars for ratings
- [ ] Hover effects and animations
- [ ] Mobile responsive design
- [ ] Consistent typography

### Data
- [ ] Experts data structure
- [ ] Reviews data with ratings
- [ ] Services information
- [ ] Contact information

### Testing
- [ ] All components render correctly
- [ ] Navigation works properly
- [ ] Responsive design tested
- [ ] Accordion functionality
- [ ] Star ratings display correctly

## 🎨 Black & White Design Guidelines

### Visual Hierarchy
- **Primary elements**: Pure black (#000000)
- **Secondary elements**: Dark gray (#374151)
- **Background**: Pure white (#ffffff)
- **Borders**: Light gray (#e5e7eb)
- **Accents**: Golden stars (#fbbf24) only

### Typography Scale
- **H1**: text-4xl md:text-5xl font-bold
- **H2**: text-3xl md:text-4xl font-bold
- **H3**: text-xl md:text-2xl font-bold
- **Body**: text-base text-gray-700
- **Small**: text-sm text-gray-600

### Spacing System
- **Section padding**: py-16 px-4
- **Component margins**: mb-8 md:mb-12
- **Card padding**: p-6
- **Button padding**: px-6 py-3

This document serves as the complete roadmap for developing the accounting firm website with the specified requirements.