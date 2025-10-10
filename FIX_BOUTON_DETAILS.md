# Fix: Bouton "Voir détails" - Actualisation de la page

## 🐛 Problème

Lorsqu'on clique sur "Voir détails" d'un projet, la page se recharge avant d'afficher la modal.

## 🔍 Cause

1. **Timing de chargement** : Les composants React se chargeaient avec `client:idle` (lazy loading)
2. **Fonction non disponible** : `openProjectModal` n'était pas immédiatement accessible
3. **Propagation d'événements** : L'événement click pouvait remonter au parent

## ✅ Solutions appliquées

### 1. Chargement immédiat des composants
```astro
<!-- AVANT -->
<ProjectCard client:idle project={project} />

<!-- APRÈS -->
<ProjectCard client:load project={project} />
```
`client:load` charge les composants React immédiatement au chargement de la page.

### 2. Amélioration du gestionnaire de clic
```tsx
<button
  type="button"  // ← Empêche comportement par défaut
  onClick={(e) => {
    e.preventDefault();      // ← Empêche action par défaut
    e.stopPropagation();     // ← Empêche propagation
    
    // Retry logic si fonction pas encore disponible
    const attemptOpen = () => {
      if (typeof (window as any).openProjectModal === 'function') {
        (window as any).openProjectModal(project);
      } else {
        setTimeout(attemptOpen, 100);  // Réessaye après 100ms
      }
    };
    attemptOpen();
  }}
>
```

### 3. Exposition immédiate de la fonction
```typescript
// Exposition AVANT DOMContentLoaded
(window as any).openProjectModal = openProjectModal;
console.log('✅ openProjectModal available globally');
```

### 4. Ajout de logs de debug
```typescript
console.log('🎯 Opening modal for project:', project.data.title);
console.log('📍 Current path:', window.location.pathname);
```

## 🧪 Tests à effectuer

1. **Page projects** : Cliquer sur "Voir détails" → Modal s'ouvre sans reload
2. **Page d'accueil** : Cliquer sur "Voir détails" → Navigation + modal s'ouvre
3. **Console** : Vérifier les logs pour détecter les problèmes

## 📊 Console attendue

```
✅ openProjectModal available globally function
📍 Current path: /Portfolio/projects
🚀 DOM Content Loaded - Setting up filters
🎯 Opening modal for project: Nom du projet
```

## 🎯 Changements de fichiers

### `src/components/projects/ProjectCard.tsx`
- ✅ Ajout de `type="button"`
- ✅ Ajout de `e.stopPropagation()`
- ✅ Logique de retry avec `attemptOpen()`
- ✅ Logs de debug

### `src/pages/projects.astro`
- ✅ Changement de `client:idle` → `client:load`
- ✅ Exposition immédiate de `openProjectModal`
- ✅ Ajout de logs de debug

## 🚀 Déploiement

```bash
git add .
git commit -m "Fix: Bouton détails sans reload + chargement immédiat des composants"
git push origin main
```

## ⚡ Performance

Le changement de `client:idle` à `client:load` :
- ✅ **Avantage** : Pas de problème de timing, interaction immédiate
- ⚠️ **Inconvénient** : Légère augmentation du temps de chargement initial

Si la performance devient un problème, on pourra revenir à `client:idle` en utilisant une autre approche (event delegation au niveau du grid).
