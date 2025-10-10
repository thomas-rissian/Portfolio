# Corrections du déploiement GitHub Pages

## 🐛 Bugs corrigés

### 1. **Liens internes cassés**
- **Problème** : Les liens pointaient vers `/projects` au lieu de `/Portfolio/projects`
- **Solution** : Création d'un helper `withBase()` dans `src/lib/utils.ts` qui ajoute automatiquement le base path à toutes les URLs

### 2. **Images non chargées**
- **Problème** : Les images utilisaient des chemins absolus sans le base path
- **Raison** : Astro NE préfixe PAS automatiquement les fichiers du dossier `public/`
- **Solution** : Utilisation de `withBase()` pour toutes les images dans :
  - `ProjectCard.tsx`
  - `ProjectsWidget.astro`
  - `projectModal.ts`
  - `Layout.astro` (favicon)
  - `personal.ts` (avatar)

### 3. **Bouton "Voir détails" recharge la page**
- **Problème** : Le test `pathname === '/projects'` ne fonctionnait pas avec le base path
- **Solution** : Ajout de `e.preventDefault()` et test sur `pathname.endsWith('/projects')`

## 📁 Fichiers modifiés

### Nouveaux fichiers
- ✅ `src/lib/utils.ts` - Helper pour gérer les URLs avec base path

### Fichiers mis à jour
- ✅ `src/components/Hero.astro`
- ✅ `src/components/layout/Footer.astro`
- ✅ `src/components/widgets/ProjectsWidget.astro`
- ✅ `src/components/info/ProjectsWidget.astro`
- ✅ `src/components/projects/ProjectCard.tsx` (+ fix bouton détails)
- ✅ `src/layouts/Layout.astro`
- ✅ `src/pages/index.astro`
- ✅ `src/pages/a-propos.astro`
- ✅ `src/pages/projects.astro`
- ✅ `src/lib/projectModal.ts`
- ✅ `src/config/personal.ts` (avatar)

### Documentation créée
- 📄 `ASTRO_BASE_PATH.md` - Explication complète du comportement d'Astro

## 🚀 Comment ça fonctionne

### Helper `withBase()`
```typescript
const base = import.meta.env.BASE_URL || '/';

export function withBase(path: string): string {
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
```

### Utilisation
```astro
---
import { withBase, routes } from '../lib/utils';
---

<a href={routes.projects}>Projets</a>
<img src={withBase('/images/photo.jpg')} />
```

## ✅ Vérifications

Après déploiement, vérifiez que :
- [ ] La page d'accueil se charge
- [ ] Les liens de navigation fonctionnent
- [ ] Les images s'affichent correctement
- [ ] Le CV se télécharge
- [ ] Les modals de projets s'ouvrent
- [ ] Les images dans les modals s'affichent

## 🔄 Déploiement

1. Commitez les changements :
```bash
git add .
git commit -m "Fix: Correction des URLs et images pour GitHub Pages"
git push origin main
```

2. Le workflow GitHub Actions se déclenchera automatiquement

3. Vérifiez le déploiement dans l'onglet **Actions** sur GitHub

4. Une fois terminé, visitez : `https://thomas-rissian.github.io/Portfolio/`
