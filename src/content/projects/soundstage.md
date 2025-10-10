---
id: 3
title: "SoundStage"
description: "Plateforme d'événements musicaux, divisée en deux applications indépendantes : une API en Symfony, et une interface utilisateur en React."
image: "/projects/soundstage/accueilSoundStage.png"
images:
  - "/projects/soundstage/accueilSoundStage.png"
  - "/projects/soundstage/apiSoundStage.png"
  - "/projects/soundstage/authSoundStage.png"
  - "/projects/soundstage/evenement.png"
  - "/projects/soundstage/formulaire.png"
  - "/projects/soundstage/reactAriste.png"
tags: ["Symfony", "React", "PHP", "TypeScript", "Sqlite", "Jest"]
githubUrl: "https://github.com/thomas-rissian/SoundStage"
featured: false
---

## Contexte

Projet universitaire mené dans le cadre du **BUT Informatique**. L'objectif était de construire une plateforme d'événements musicaux avec une **architecture moderne découplée**, permettant de différencier les responsabilités entre le backend et le frontend.

---

## Architecture

SoundStage est divisé en deux parties indépendantes :

### 🎛️ API Symfony (backend)
- Fournit des données d'événements via des routes REST (`GET`).
- Base de données SQLite.
- Tests unitaires écrits avec **PHPUnit**.
- Documentation accessible via Postman / Swagger.

### 🎧 Interface React (frontend)
- Récupération dynamique des données depuis l'API Symfony.
- Affichage des événements avec tri, filtres, pagination.
- Développement en TypeScript.
- Tests unitaires avec **Jest**.

---

## Objectifs du projet

- Concevoir une API REST sécurisée et maintenable avec Symfony.
- Développer une interface utilisateur réactive avec React.
- Assurer une séparation claire entre les deux couches applicatives.
- Implémenter des tests unitaires pour fiabiliser le développement.

---

## Réalisations clés

- 🔗 Mise en place d'une communication fiable entre les deux applications.
- 🧪 Couverture de tests significative sur l'API.
- 🧩 Modularisation du frontend avec composants React.
- 🚀 Livraison dans un délai court avec une organisation efficace.

---

## Bilan

### ✅ Acquis techniques

- Bonne maîtrise de l'**écosystème Symfony** et de l'architecture MVC.
- Solide expérience avec **React** moderne et appels API.
- Utilisation concrète de **tests unitaires** (PHPUnit & Jest).
- Prise en main de projets **multi-repos** dans un contexte réaliste.

### 🔧 Améliorations envisagées

- Ajouter un système d'authentification JWT pour sécuriser les routes.
- Mise en production avec Docker / CI.
- Étendre les filtres d'événements côté client.
