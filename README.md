# Portfolio Thomas RISSIAN

Portfolio personnel développé avec Astro et inspiré du design minimaliste d'Apple.

Ce projet est basé sur le template [Apple-Style Portfolio](https://astro.build/themes/details/apple-inspired-portfolio/) créé par [larry-xue](https://github.com/larry-xue/apple-style-portfolio).

## ✨ Fonctionnalités

- 🍎 Design inspiré d'Apple, minimaliste et élégant
- ⚡️ Performances optimales avec Astro
- 🎨 Styling avec Tailwind CSS
- 📱 Design responsive
- 🎬 Éléments 3D avec Three.js
- 📝 Contenu éditable en Markdown
- ⚛️ Composants React intégrés

## 📋 Table des matières

- [Installation](#installation)
- [Développement](#développement)
- [Déploiement GitHub Pages](#déploiement-github-pages)
- [Stack technique](#stack-technique)

## 🚀 Installation

### Prérequis

- Node.js (v20 ou supérieur)
- npm ou yarn

### Installation locale

1. Cloner le repository :

```bash
git clone https://github.com/VOTRE-USERNAME/portfolio.git
cd portfolio
```

2. Installer les dépendances :

```bash
npm install
```

## 💻 Développement

Pour démarrer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse `http://localhost:4321`

Pour créer un build de production :

```bash
npm run build
```

Pour prévisualiser le build de production :

```bash
npm run preview
```

## 🌐 Déploiement GitHub Pages

Ce projet est configuré pour être déployé automatiquement sur GitHub Pages.

### Configuration initiale

1. Dans `astro.config.mjs`, remplacer `USERNAME` par votre nom d'utilisateur GitHub :

```javascript
export default defineConfig({
  site: 'https://USERNAME.github.io',
  // Si le repo n'est pas USERNAME.github.io, décommenter et adapter :
  // base: '/nom-du-repo',
});
```

2. Sur GitHub, aller dans **Settings** > **Pages** > **Source** et sélectionner **GitHub Actions**

### Déploiement automatique

À chaque push sur la branche `main`, le workflow GitHub Actions :
- ✅ Construit le projet Astro
- ✅ Déploie automatiquement sur GitHub Pages
- ✅ Rend le site accessible à l'URL configurée

Pour déployer manuellement, aller dans l'onglet **Actions** et lancer le workflow "Deploy to GitHub Pages".

## 🛠️ Stack technique

- [Astro](https://astro.build) - Framework web statique
- [React](https://reactjs.org) - Composants interactifs
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utilitaire
- [Three.js](https://threejs.org) - Scènes 3D
- [TypeScript](https://www.typescriptlang.org/) - Typage statique

## 📝 Structure du contenu

Les contenus éditables se trouvent dans `src/content/` :

- `hero/` - Contenu de la page d'accueil
- `about/` - Page À propos
- `projects/` - Projets
- `skills/` - Compétences
- `experiences/` - Expériences professionnelles

## 📄 Crédits

Template original : [Apple-Style Portfolio](https://astro.build/themes/details/apple-inspired-portfolio/) par [larry-xue](https://github.com/larry-xue)
