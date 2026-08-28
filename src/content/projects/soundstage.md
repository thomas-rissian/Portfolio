---
id: 3
title: "SoundStage"
description: "Plateforme web dédiée aux événements musicaux, permettant aux utilisateurs de consulter et gérer des événements. Le projet repose sur une API Symfony et une interface React."
image: "/projects/soundstage/accueilSoundStage.png"
images:
  - "/projects/soundstage/accueilSoundStage.png"
  - "/projects/soundstage/evenement.png"
  - "/projects/soundstage/formulaire.png"
  - "/projects/soundstage/authSoundStage.png"
  - "/projects/soundstage/apiSoundStage.png"
  - "/projects/soundstage/reactAriste.png"
tags: ["Symfony", "React", "PHP", "TypeScript", "SQLite", "Jest"]
githubUrl: "https://github.com/thomas-rissian/SoundStage"
featured: false
---

## Contexte

SoundStage est un projet universitaire réalisé dans le cadre du **BUT Informatique**.

L'objectif était de développer une plateforme consacrée aux événements musicaux, en séparant clairement l'interface utilisateur et le serveur. Cette organisation permet à chaque partie de l'application d'évoluer indépendamment.

## Problématique

Comment construire une plateforme d'événements musicaux avec une interface agréable à utiliser, tout en conservant une séparation claire entre le frontend et le backend ?

## Objectifs

- Concevoir une API REST avec Symfony et PHP.
- Développer une interface utilisateur avec React et TypeScript.
- Faire communiquer le frontend et le backend de manière fiable.
- Organiser les données dans une base SQLite.
- Ajouter des tests unitaires pour vérifier le fonctionnement de l'application.

## Architecture

SoundStage est composé de deux applications indépendantes :

```text
Interface React (frontend)
        |
      API REST
        |
API Symfony (backend)
        |
   Base de données SQLite
```

### Backend : API Symfony

L'API Symfony fournit les données nécessaires à l'interface grâce à des routes REST. Elle s'appuie sur une base de données SQLite et comprend des tests unitaires réalisés avec PHPUnit. La documentation de l'API est accessible avec Postman et Swagger.

### Frontend : React

L'interface React récupère les données depuis l'API Symfony et les affiche de manière dynamique. Les événements peuvent être consultés avec un tri, des filtres et une pagination. Le frontend est développé en TypeScript et testé avec Jest.

---

## Étapes de réalisation

1. Définition de la structure de l'application et des données nécessaires.
2. Développement de l'API Symfony et mise en place de la base SQLite.
3. Développement de l'interface React.
4. Connexion du frontend à l'API REST.
5. Ajout des tests et vérification du fonctionnement de l'ensemble.

## Fonctionnalités principales

- Consultation des événements musicaux.
- Tri et filtrage des événements.
- Pagination des résultats.
- Communication entre l'interface React et l'API Symfony.
- Documentation et tests de l'API.

## Technologies utilisées

- **Backend :** PHP, Symfony et API REST.
- **Frontend :** React et TypeScript.
- **Base de données :** SQLite.
- **Tests :** PHPUnit et Jest.
- **Outils :** Git, GitHub, Postman et Swagger.

## Compétences acquises

- Compréhension de l'architecture MVC avec Symfony.
- Développement d'une API REST.
- Développement d'une interface React avec TypeScript.
- Gestion des échanges entre un frontend et un backend.
- Écriture de tests unitaires avec PHPUnit et Jest.
- Organisation d'un projet composé de plusieurs applications et utilisation de GitHub pour le suivi du code.

## Bilan et perspectives

SoundStage m'a permis de mieux comprendre la construction d'une application web complète et la séparation des responsabilités entre le frontend et le backend. Le projet correspond à mon objectif de progresser dans le développement web fullstack.

Plusieurs évolutions pourraient être ajoutées :

- Mettre en place une authentification JWT pour sécuriser les routes.
- Préparer le déploiement avec Docker et une chaîne d'intégration continue.
- Étendre les filtres d'événements côté client.
