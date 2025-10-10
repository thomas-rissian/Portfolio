# ⚠️ Astro et le base path : Pourquoi faut-il utiliser withBase() ?

## 🤔 Le problème

Astro **NE préfixe PAS automatiquement** les fichiers du dossier `public/` avec le `base` configuré dans `astro.config.mjs`.

### Ce qui se passe avec `base: '/Portfolio'`

#### ✅ Ce qui fonctionne automatiquement :
- Les routes de pages : `/` devient `/Portfolio/`
- Les imports CSS et JS dans les composants

#### ❌ Ce qui NE fonctionne PAS automatiquement :
- Les images dans `public/` : `/profile.jpg` reste `/profile.jpg` (au lieu de `/Portfolio/profile.jpg`)
- Le favicon : `/favicon.svg` reste `/favicon.svg`
- Le CV : `/cv.pdf` reste `/cv.pdf`
- Les images de projets : `/projects/image.png` reste `/projects/image.png`

## 💡 La solution : withBase()

```typescript
import { withBase } from '../lib/utils';

// ❌ INCORRECT - Ne fonctionnera pas en production
<img src="/profile.jpg" />

// ✅ CORRECT - Fonctionne en dev ET en production
<img src={withBase("/profile.jpg")} />
```

## 📋 Checklist : Où utiliser withBase()

### Images
- ✅ `src/config/personal.ts` - Avatar
- ✅ `ProjectCard.tsx` - Images de projets
- ✅ `ProjectsWidget.astro` - Images de projets
- ✅ `projectModal.ts` - Images dans la modal

### Fichiers
- ✅ `Layout.astro` - Favicon
- ✅ `Hero.astro` - CV

### Liens internes
- ✅ Tous les `<a href="">` vers des pages internes
- ✅ Navigation dans `Hero.astro`
- ✅ Footer
- ✅ Widgets

## 🔍 Comment détecter les problèmes

### En développement (localhost)
Tout fonctionne car `base = '/'` par défaut.

### En production (GitHub Pages)
Les ressources sans `withBase()` donnent des erreurs 404 :
```
❌ https://thomas-rissian.github.io/profile.jpg (404)
✅ https://thomas-rissian.github.io/Portfolio/profile.jpg (200)
```

## 🛠️ Debugging

### Console du navigateur
```javascript
// Vérifier le base path actuel
console.log(import.meta.env.BASE_URL); // => "/Portfolio/" en prod

// Tester withBase
import { withBase } from './lib/utils';
console.log(withBase('/profile.jpg')); // => "/Portfolio/profile.jpg"
```

### Vérifier une ressource
```bash
# Doit retourner 200
curl -I https://thomas-rissian.github.io/Portfolio/profile.jpg
```

## 📚 Documentation Astro

C'est un comportement documenté d'Astro :
> "Files in the `public/` directory are served at the root path. If you have a base path configured, you need to manually prefix your public assets."

Source : https://docs.astro.build/en/guides/images/#images-in-public

## ✅ Résumé

**RÈGLE D'OR** : Utilise **TOUJOURS** `withBase()` pour :
- Toute ressource dans `public/`
- Tout lien interne vers une page
- Toute navigation programmatique

En cas de doute : **utilise withBase()** ! Ça ne fait jamais de mal.
