---
id: 6
title: "Flash & Friends"
description: "Jeu d’exploration et de photographie développé avec Unity où le joueur capture des moments uniques lors d’un festival vivant peuplé de PNJ autonomes."
image: "/projects/flashandfriends/city.png"
images:
  - "/projects/flashandfriends/city.png"
  - "/projects/flashandfriends/menu.png"
  - "/projects/flashandfriends/quest.png"
tags: ["Unity", "C#", "Game Development", "AI", "Simulation", "Procedural Systems"]
githubUrl: "https://github.com/thomas-rissian/FlashAndFriends"
featured: false
---

## Contexte

**Flash & Friends** est un jeu d’exploration en vue subjective développé avec **Unity**, dans lequel le joueur incarne un photographe parcourant un festival urbain animé.

Le projet met l’accent sur la création d’un monde vivant grâce à des PNJ autonomes, un système de quêtes dynamiques et une mécanique centrale basée sur la photographie et l’évaluation de composition visuelle.

L’objectif était de concevoir une expérience complète combinant **IA comportementale, systèmes de quêtes, sauvegarde de données et gameplay émergent**.

---

## Concept

Observer • Composer • Capturer

Le joueur explore un festival rempli de personnages ayant leurs propres routines et comportements.

Chaque photo prise peut :

- générer un score basé sur sa qualité,
- valider des objectifs,
- être sauvegardée définitivement dans un album photo accessible en jeu.

---

## Gameplay

### Objectif

Réaliser les meilleures photos possibles afin d’augmenter son score **Good Vibes** et compléter les quêtes du festival.

### Boucles de jeu

**Low loop**
Explorer → Observer → Photographier → Recevoir un score.

**Mid loop**
Compléter des quêtes photo → Débloquer contenus et progression.

**High loop**
Remporter le festival photo en constituant un album complet.

---

## Fonctionnalités principales

### 📸 Système de photographie

- Caméra FPS avec visée libre.
- Raycast pour identifier les sujets photographiés.
- Analyse automatique de la photo :
  - distance optimale,
  - cadrage,
  - visibilité du sujet,
  - conditions de quête.
- Attribution dynamique d’un score.

---

###  Intelligence artificielle des PNJ

- PNJ autonomes utilisant NavMesh Agent.
- Routines basées sur des Points Of Interest (POI).
- Planning comportemental cohérent.
- Réactions dynamiques au joueur :
  - poser pour une photo,
  - éviter la caméra,
  - s’éloigner ou ignorer.

Les comportements créent des situations émergentes uniques.

---

###  Système de quêtes photo

- Quêtes définies via structures de données modulaires.
- Objectifs multiples possibles :
  - types de personnages,
  - éléments de décor,
  - conditions contextuelles.
- Validation automatique lors de la prise de photo.
- Progression narrative légère.

---

###  Sauvegarde réelle des photos

- Capture via RenderTexture.
- Conversion en Texture2D.
- Encodage PNG.
- Sauvegarde sur disque (`persistentDataPath`).
- Album photo rechargeant dynamiquement les images.

Chaque partie génère un historique permanent des clichés du joueur.

---

###  Environnement & immersion

- Festival urbain modélisé avec ProBuilder.
- Materials PBR et éclairage d’ambiance.
- Post-processing pour renforcer l’atmosphère.
- Décals environnementaux (affiches, graffitis).

---

###  Feedback visuel et audio

- Effets de flash photo.
- Particules de score.
- Sons d’ambiance dynamiques.
- UI réactive et contextualisée.

---

###  Mise en scène

- Introduction via Timeline.
- Caméras cinématiques avec Cinemachine.
- Transition fluide entre gameplay et narration.

---

## Compétences mobilisées

### Gameplay Programming

- Raycasting avancé.
- Analyse contextuelle d’actions joueur.
- Boucles de gameplay multi-niveau.
- Systèmes d’objectifs dynamiques.

### Intelligence artificielle

- Navigation NavMesh.
- Routines comportementales.
- State machines pour réactions PNJ.

### Gestion de données

- Manipulation fichiers disque.
- Encodage d’images PNG.
- Chargement dynamique de ressources.

### Architecture Unity

- Systèmes découplés :
  - Player
  - Photo System
  - Quest System
  - AI System
  - Album Manager
  - UI Manager

---

## Réalisation

### Player & Camera System
Contrôle FPS et capture photo.

### Photo Evaluation System
Analyse des éléments visibles et scoring.

### NPC AI System
Routines POI et comportements réactifs.

### Quest Manager
Gestion des objectifs et progression.

### Album System
Sauvegarde et affichage dynamique des photos.

---

## Stack technique

| Domaine | Technologies |
|--------|-------------|
| Moteur | Unity |
| Langage | C# |
| IA | NavMesh Agent |
| Caméra | Cinemachine |
| Cinématiques | Timeline |
| UI | Canvas + TextMeshPro |
| Rendering | RenderTexture |
| Sauvegarde | PNG + File IO |
| Level Design | ProBuilder |

---

## Conclusion

### Bilan technique

- Expérience complète centrée sur un gameplay original.
- Monde dynamique basé sur comportements IA.
- Système de sauvegarde persistant avancé.
- Intégration réussie de nombreux systèmes Unity.

### Apprentissages

- Conception de systèmes interconnectés complexes.
- Gestion avancée des données utilisateur.
- Création d’IA crédibles et réactives.
- Structuration d’un projet Unity à grande échelle.

### Perspectives d’amélioration

- PNJ avec mémoire comportementale.
- Conditions météo dynamiques.
- Équipement photo évolutif.
- Système social entre personnages.

---