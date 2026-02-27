# Cabinet d'Orthoptie Montdidier - Jennifer Loisel

Site web professionnel pour le cabinet d'orthoptie de Jennifer Loisel à Montdidier (80500).

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles utilitaires
- **Lucide React** - Icônes

## 📦 Installation

1. **Cloner le projet** (ou copier les fichiers)

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 🏗️ Structure du projet

```
orthoptie-montdidier/
├── src/
│   ├── app/
│   │   ├── globals.css          # Styles globaux
│   │   ├── layout.tsx           # Layout principal
│   │   ├── page.tsx             # Page d'accueil
│   │   ├── services/
│   │   │   └── page.tsx         # Page services
│   │   ├── blog/
│   │   │   └── page.tsx         # Page blog
│   │   ├── contact/
│   │   │   └── page.tsx         # Page contact
│   │   ├── mentions-legales/
│   │   │   └── page.tsx         # Mentions légales
│   │   └── confidentialite/
│   │       └── page.tsx         # Politique de confidentialité
│   └── components/
│       ├── Header.tsx           # Navigation
│       ├── Footer.tsx           # Pied de page
│       ├── HeroSection.tsx      # Section hero
│       ├── MissionSection.tsx   # Section mission
│       ├── ParcoursSection.tsx  # Parcours patient
│       ├── ValeursSection.tsx   # Valeurs
│       ├── EquipeSection.tsx    # Équipe
│       ├── CabinetSection.tsx   # Le cabinet
│       └── AvisSection.tsx      # Avis Google
├── public/
│   └── images/                  # Images du site
├── tailwind.config.ts           # Configuration Tailwind
├── next.config.mjs              # Configuration Next.js
└── package.json
```

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.ts` :
- **Primary** : Bleu (#0ea5e9)
- **Secondary** : Gris ardoise
- **Accent** : Vert (#10b981)

### Informations à modifier
- **Adresse** : Footer.tsx, ContactPage, CabinetSection
- **Téléphone** : Header.tsx, Footer.tsx, ContactPage
- **Email** : Footer.tsx, ContactPage
- **Doctolib** : Tous les liens de prise de RDV
- **Mentions légales** : Numéros ADELI et SIRET

## 📱 Responsive Design

Le site est entièrement responsive :
- Mobile : < 640px
- Tablette : 640px - 1024px
- Desktop : > 1024px

## 🔧 Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Lancer en production
npm run lint     # Linter ESLint
```

## 📄 Pages

1. **Accueil** (`/`) - Présentation complète du cabinet
2. **Services** (`/services`) - Détail des soins proposés
3. **Blog** (`/blog`) - Articles sur la santé visuelle
4. **Contact** (`/contact`) - Formulaire et informations
5. **Mentions légales** (`/mentions-legales`)
6. **Confidentialité** (`/confidentialite`)

## 🖼️ Images

Pour ajouter vos images :
1. Placez-les dans `/public/images/`
2. Utilisez `<Image src="/images/nom-image.jpg" />` ou mettez à jour les composants

## ✨ Fonctionnalités

- ✅ Design moderne et professionnel
- ✅ Navigation responsive
- ✅ Sections animées
- ✅ Formulaire de contact
- ✅ Intégration Doctolib
- ✅ Avis Google
- ✅ SEO optimisé
- ✅ Accessibilité (WCAG)

## 📞 Support

Pour toute question technique, contactez le développeur.

---

© 2025 Cabinet d'Orthoptie Montdidier - Jennifer Loisel
