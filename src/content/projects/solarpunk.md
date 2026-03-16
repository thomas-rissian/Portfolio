---
id: 5
title: "Potager Solarpunk"
description: "Jeu de gestion de potager développé avec Unity où un drone horticole plante, arrose et optimise la production dans un univers solarpunk."
image: "/projects/potagersolarpunk/menu.png"
images:
  - "/projects/potagersolarpunk/menu.png"
  - "/projects/potagersolarpunk/gameplay.png"
  - "/projects/potagersolarpunk/shop.png"
  - "/projects/potagersolarpunk/water.png"
tags: ["Unity", "C#"]
githubUrl: "https://github.com/thomas-rissian/PotagerSolarpunk"
featured: false
---

## Contexte

**Potager Solarpunk** est un jeu de gestion développé avec **Unity** dans lequel le joueur incarne un drone horticole chargé d’entretenir un potager futuriste.

Le projet avait pour objectif pédagogique de maîtriser les fondamentaux du développement gameplay Unity : **instanciation d’objets, gestion des inputs, UI dynamique et boucle de gameplay complète**.

Au-delà du cahier des charges initial, le projet a évolué vers une expérience plus complète intégrant économie, optimisation du temps et progression joueur.

---

## Concept

Bienvenue jeune fermier !

Le joueur contrôle un drone capable de planter, arroser, récolter et vendre des cultures afin d’optimiser sa production.

L’univers solarpunk met l’accent sur une ambiance calme et technologique, centrée sur l’efficacité et l’organisation.

---

## Gameplay

### Objectif

Optimiser la production agricole et réduire le temps nécessaire pour atteindre le score cible.

### Boucle de jeu

Récupérer de l’eau → Planter → Arroser → Récolter → Vendre → Améliorer → Recommencer.

Le joueur doit gérer ses déplacements et ses ressources pour maximiser son efficacité.

---

## Fonctionnalités principales

###  Drone joueur

- Déplacement libre sur deux axes.
- Interaction contextuelle avec outils.
- Utilisation d’inputs via Unity Input System.
- Actions :
  - planter,
  - arroser,
  - récolter,
  - interagir avec le shop.

---

###  Système de culture

- Instanciation dynamique des graines.
- Croissance progressive des plantes.
- Transformation graine → légume mûr.
- Surmaturité entraînant la destruction.
- Gestion temporelle via Coroutines et `Time.deltaTime`.

---

###  Système économique

- Shop interactif :
  - achat de graines,
  - vente de récoltes,
  - améliorations d’outils,
  - amélioration de l’inventaire.
- Progression basée sur l’optimisation.

---

###  Score & progression

- Score basé sur la production.
- Sauvegarde des meilleurs temps.
- Classement affiché en fin de partie.
- Formatage du temps en **mm:ss.ff**.
- Persistance via PlayerPrefs et JsonUtility.

---

###  Interface utilisateur

- HUD dynamique :
  - niveau d’eau,
  - informations parcelles,
  - objet sélectionné.
- Valeurs affichées avec précision décimale.
- Menu pause et écran de fin.
- Feedback visuel clair.

---

###  Feedback & immersion

- Particules d’arrosage.
- Effets sonores contextuels.
- Micro-animations via Animator.
- SoundManager centralisé.

---

## Compétences mobilisées

### Gameplay Programming

- Instanciation de Prefabs.
- Gestion d’interactions joueur ↔ monde.
- Boucle gameplay complète.
- Gestion du temps et états d’objets.

### Architecture Unity

- Séparation :
  - Gameplay
  - UI
  - Données
  - Animation
- Communication par événements.
- Scripts modulaires et maintenables.

### UI & UX

- HUD dynamique.
- Feedback joueur clair.
- Gestion des menus et écrans de jeu.

### Systèmes Unity utilisés

- Prefabs
- Input System
- Animator
- Coroutines
- Particle System
- AudioSource
- TextMeshPro
- PlayerPrefs
- JsonUtility

---

## Réalisation

Le projet repose sur plusieurs systèmes indépendants :

### Player Controller
Gestion des déplacements et interactions outils.

### Crop System
Cycle de vie complet des plantes et logique de croissance.

### Economy System
Gestion du shop, achats et progression joueur.

### UI Manager
Affichage dynamique des informations gameplay.

### Save System
Enregistrement et affichage des meilleurs temps.

---

## Stack technique

| Domaine | Technologies |
|--------|-------------|
| Moteur | Unity |
| Langage | C# |
| Input | Unity Input System |
| UI | Canvas + TextMeshPro |
| Animation | Animator |
| Effets | Particle System |
| Persistence | PlayerPrefs + JSON |

---

## Conclusion

### Bilan technique

- Jeu complet jouable du début à la fin.
- Implémentation réussie des bases du gameplay Unity.
- Architecture claire facilitant les évolutions.
- Expérience cohérente mêlant gestion et optimisation.

### Apprentissages

- Maîtrise de l’instanciation et des Prefabs.
- Organisation d’un projet Unity structuré.
- Création d’une boucle gameplay complète.
- Gestion de sauvegarde et scoring.

### Perspectives d’amélioration

- Ajout de nouvelles cultures.
- Équilibrage économique.
- Version mobile.
- Système météo dynamique.
- Extensions gameplay (automation, drones secondaires).

---