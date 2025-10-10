---
id: 3
title: "Biblio"
description: "Application de gestion et de consultation de livres développée pour Michelin. Architecture fullstack avec Vue.js et Node.js natif."
image: "/projects/biblio/homeBiblio.png"
images:
  - "/projects/biblio/homeBiblio.png"
  - "/projects/biblio/statistiqueBiblio.png"
  - "/projects/biblio/arbo.jpeg"
tags: ["Vue.js", "Node.js", "Prisma", "Jest", "PostgreSQL"]
githubUrl: "https://github.com/thomas-rissian/biblio"
featured: false
---

## Contexte du projet

Dans le cadre d'un processus de recrutement chez Michelin, il m'a été demandé de développer une application web complète de gestion et de consultation de livres. L'objectif principal était de démontrer mes compétences techniques en développement fullstack et en gestion de projet dans un environnement professionnel simulé.

## Cahier des charges fonctionnel

### Architecture applicative
- **Backend** : API REST développée sans framework (interdiction d'utiliser Express)
- **Frontend** : Framework Vue.js ou Angular (choix stratégique de Vue.js)
- **Architecture** : Modulaire avec séparation complète frontend/backend
- **Composants** : Développement de composants réutilisables côté frontend

### Infrastructure technique
- **Base de données** : PostgreSQL avec ORM Prisma
- **Tests** : Intégration de tests unitaires
- **Versionning** : Utilisation de Git pour le suivi des versions

## Objectifs opérationnels

### Fonctionnalités core
- Implémenter une API REST complète et fonctionnelle sans framework externe
- Concevoir une interface utilisateur fluide et intuitive avec Vue.js
- Structurer efficacement la base de données avec Prisma
- Établir une communication optimale entre les couches frontend et backend

### Contraintes techniques
- Respect strict des spécifications du cahier des charges
- Livraison d'une application stable et évolutive
- Optimisation des performances et de l'expérience utilisateur

## Compétences mises en œuvre

### Gestion de projet
- **Versionning** : Utilisation stratégique de Git pour le suivi des versions
- **Organisation** : Planification et priorisation méthodique des tâches
- **Documentation** : Structuration du dépôt avec documentation claire

### Développement fullstack
- **Backend** : Développement Node.js natif et architecture API REST
- **Base de données** : Gestion PostgreSQL via l'ORM Prisma
- **Frontend** : Développement Vue.js avec composants modulaires
- **Tests** : Implémentation de tests unitaires avec Jest

## Architecture et réalisation

### Structure applicative

#### Serveur Backend (API Biblio)
- **Fonctionnalités** : Gestion complète des opérations CRUD (livres, auteurs, catégories)
- **Technologie** : Node.js pur sans framework externe
- **ORM** : Prisma pour l'abstraction de base de données
- **Découplage** : Architecture totalement indépendante du frontend

#### Interface Frontend
- **Framework** : Vue.js pour une expérience utilisateur moderne
- **Communication** : Appels HTTP asynchrones vers l'API
- **Navigation** : Interface intuitive et fluide
- **Formulaires** : Gestion interactive des données
- **Affichage** : Rendu dynamique et réactif des informations

## Résultats et analyse

### Bilan technique
- **Architecture** : Mise en place réussie d'une structure propre et modulaire
- **Contraintes** : Respect total des limitations imposées (absence de framework backend)
- **Performance** : Application optimisée et hautement extensible

### Compétences développées
- **Node.js avancé** : Maîtrise du développement backend natif
- **Prisma** : Expertise dans l'utilisation d'ORM modernes
- **Vue.js** : Perfectionnement du développement frontend structuré
- **Architecture** : Renforcement des bonnes pratiques logicielles

### Optimisations futures
- **Sécurité** : Implémentation d'un système d'authentification robuste
- **Maintenance** : Refactoring potentiel du backend avec Express
- **Évolutivité** : Extension des fonctionnalités existantes