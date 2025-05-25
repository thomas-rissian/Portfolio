---
title: "SoundStage"
slug: "soundstage"
image: "/projects/soundstage/accueilSoundStage.png"
dates: "7 Mars 2025 - 24 Mars 2025"
description: >
  Projet scolaire réalisé dans le cadre du BUT Informatique.
  Plateforme d'événements musicaux, divisée en deux applications indépendantes : une API en Symfony, et une interface utilisateur en React.

technologies: ["Symfony", "React", "PHP", "TypeScript", "Sqlite", "Jest"]
competences:
  - titre: "Développement fullstack découplé"
    justificatif: "Conception de deux applications autonomes communiquant via une API REST sécurisée."
  - titre: "Tests et qualité du code"
    justificatif: "Écriture de tests unitaires backend avec PHPUnit et Jest côté frontend."
  - titre: "Consommation d'API"
    justificatif: "Utilisation de React pour récupérer dynamiquement les données depuis une API Symfony."
github: "https://github.com/thomas-rissian/SoundStage"
numerique: false
images: [
  {
    src: "/projects/soundstage/accueilSoundStage.png",
    alt: "Accueil Symfony",
    caption: "Accueil de la plateforme Symfony"
  },
  {
    src: "/projects/soundstage/apiSoundStage.png",
    alt: "Interface API",
    caption: "Schéma des routes de l'API Symfony"
  },
  {
    src: "/projects/soundstage/authSoundStage.png",
    alt: "Authentification",
    caption: "Champ de connection de l'application"
  },
  {
    src: "/projects/soundstage/evenement.png",
    alt: "Evenement",
    caption: "Champ des evenement de l'application"
  },
  {
    src: "/projects/soundstage/formulaire.png",
    alt: "Formulaire",
    caption: "Champ de creation d'un artiste"
  },
  {
    src: "/projects/soundstage/reactAriste.png",
    alt: "React",
    caption: "Liste des artistes sur l'application react"
  }
]
---

## Contexte

Projet universitaire mené dans le cadre du **BUT Informatique**. L’objectif était de construire une plateforme d’événements musicaux avec une **architecture moderne découplée**, permettant de différencier les responsabilités entre le backend et le frontend.

---

## Architecture

SoundStage est divisé en deux parties indépendantes :

### 🎛️ API Symfony (backend)
- Fournit des données d’événements via des routes REST (`GET`).
- Base de données PostgreSQL.
- Tests unitaires écrits avec **PHPUnit**.
- Documentation accessible via Postman / Swagger.

### 🎧 Interface React (frontend)
- Récupération dynamique des données depuis l’API Symfony.
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

- 🔗 Mise en place d’une communication fiable entre les deux applications.
- 🧪 Couverture de tests significative sur l’API.
- 🧩 Modularisation du frontend avec composants React.
- 🚀 Livraison dans un délai court avec une organisation efficace.

---

## Bilan

### ✅ Acquis techniques

- Bonne maîtrise de l’**écosystème Symfony** et de l’architecture MVC.
- Solide expérience avec **React** moderne et appels API.
- Utilisation concrète de **tests unitaires** (PHPUnit & Jest).
- Prise en main de projets **multi-repos** dans un contexte réaliste.

### 🔧 Améliorations envisagées

- Ajouter un système d’authentification JWT pour sécuriser les routes.
- Mise en production avec Docker / CI.
- Étendre les filtres d’événements côté client.
---

Souhaite-tu aussi que je t'aide à intégrer ce markdown dans un fichier `.md` compatible Astro ou que je l’envoie vers ton projet Carousel ?
