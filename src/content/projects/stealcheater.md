---
id: 4
title: "Stealth Cheater"
description: "Jeu d’infiltration stratégique développé avec Unity où le joueur aide un étudiant à tricher grâce à un système de caméras de surveillance et une IA dynamique."
image: "/projects/stealthcheater/start.png"
images:
  - "/projects/stealthcheater/start.png"
  - "/projects/stealthcheater/gameplay.png"
  - "/projects/stealthcheater/cameras.png"
  - "/projects/stealthcheater/skin.png"
tags: ["Unity", "C#"]
githubUrl: "https://github.com/thomas-rissian/StealthCheater"
featured: false
---

## Contexte

**Stealth Cheater** est un jeu d’infiltration développé avec **Unity** mettant l’accent sur la stratégie, le timing et l’observation.

Le joueur doit aider un étudiant à tricher pendant un examen en utilisant un système de caméras de surveillance tout en évitant un professeur contrôlé par une intelligence artificielle.

Le projet avait pour objectif de concevoir un jeu complet intégrant plusieurs systèmes avancés : IA, gameplay stealth, UI interactive et génération procédurale.

---

## Concept

Discrétion • Stratégie • Timing

Le joueur navigue dans une salle de classe surveillée et doit copier sur différents élèves sans être repéré.

Deux écrans permettent de contrôler l’environnement :

- **Moniteur droit** : carte et sélection des caméras.
- **Moniteur gauche** : affichage de la caméra active.

L’observation et l’anticipation du comportement de l’IA sont essentielles pour réussir.

---

## Gameplay

### Objectif

Copier les réponses nécessaires puis retourner à sa place sans se faire détecter.

### Boucle de jeu

Observer → Accéder à une table → Copier → Éviter le professeur → Revenir → Optimiser son temps.

Une seule copie peut être réalisée simultanément.

---

## Fonctionnalités principales

###  Mécaniques de jeu

- Déplacement joueur avec Character Controller.
- Zones interactives pour copier.
- Progression temporelle de copie.
- États de jeu structurés :
  - Playing
  - Copying
  - Game Over
  - Victory
- Système de personnalisation esthétique du personnage.

---

###  Système de caméras

- Sélection de caméras via interface.
- Affichage dynamique en temps réel.
- Événements aléatoires affectant les caméras :
  - mode noir et blanc,
  - professeur invisible,
  - caméra tournée.
- Interaction souris avec interface UI.

---

###  Intelligence artificielle

- Professeur contrôlé par NavMesh Agent.
- 3 routines distinctes composées de points de patrouille.
- Temps d’attente variables entre déplacements.
- Animation spéciale marquant la fin d’une routine.
- Détection basée sur :
  - champ de vision,
  - distance,
  - raycasting.
- Le joueur peut rester proche tant qu’il n’est pas visible.

---

###  Bonus & Malus

- Objets récupérables influençant le temps de copie.
- Distractions sonores attirant l’IA vers une caméra.
- Usage unique par caméra.
- Variabilité renforçant la rejouabilité.

---

###  Génération procédurale

- Salle de classe générée dynamiquement.
- Placement automatique d’objets.
- Construction du NavMesh à runtime.
- Garantit des parties toujours différentes.

---

###  Interface utilisateur

- Double écran interactif.
- HUD de progression de copie.
- Menus pause et fin de partie.
- Feedback visuel clair et lisible.
- UI responsive avec TextMeshPro.

---

###  Animation & Feedback

- Animations humanoïdes (Mixamo).
- Animator Controllers joueur et IA.
- Effets visuels via LitMotion.
- Feedback audio contextuel.

---

## Compétences mobilisées

### Gameplay Programming

- Gestion d’états de jeu.
- Coroutines et gestion temporelle.
- Systèmes d’interaction joueur ↔ environnement.
- Gameplay stealth basé sur perception IA.

### Intelligence artificielle

- Navigation NavMesh dynamique.
- Simulation de vision par trigonométrie.
- Patrouilles comportementales.

### Architecture Unity

- Séparation des systèmes :
  - Gameplay
  - IA
  - UI
  - Caméras
  - Données
- Communication par événements.

### Outils Unity

- Character Controller
- Input System
- Cinemachine
- Animator & Blend Trees
- ProBuilder
- NavMesh Components
- TextMeshPro
- LitMotion

---

## Réalisation

Le projet est organisé autour de systèmes indépendants :

### Player System
Gestion des déplacements et interactions.

### Camera System
Contrôle et affichage dynamique des caméras.

### AI System
Patrouilles, détection et comportements du professeur.

### Level Generator
Création procédurale du niveau et génération NavMesh.

### UI Manager
Gestion centralisée des écrans et feedback.

---

## Stack technique

| Domaine | Technologies |
|--------|-------------|
| Moteur | Unity |
| Langage | C# |
| IA | NavMesh Agent |
| Caméra | Cinemachine |
| UI | Canvas + TextMeshPro |
| Animation | Animator |
| Level Design | ProBuilder |
| Input | Unity Input System |

---

## Conclusion

### Bilan technique

- Jeu d’infiltration complet et jouable.
- IA crédible et lisible pour le joueur.
- Système de caméras original intégré au gameplay.
- Génération procédurale fonctionnelle.

### Apprentissages

- Conception d’un gameplay stealth.
- Architecture système Unity avancée.
- Intégration IA + UI + génération procédurale.
- Gestion d’une expérience joueur complète.

### Perspectives d’amélioration

- IA adaptative basée sur comportement joueur.
- Ajout de nouveaux niveaux.
- Système sonore plus avancé.
- Optimisation performances build final.

---