---
id: 1
title: "Biblio"
description: "Application de gestion et de consultation de livres développée pour Michelin. Architecture fullstack avec Vue.js et Node.js natif."
image: "/projects/biblio/homeBiblio.png"
images:
  - "/projects/biblio/homeBiblio.png"
  - "/projects/biblio/statistiqueBiblio.png"
  - "/projects/biblio/arbo.jpeg"
tags: ["Vue.js", "Node.js", "Prisma", "Jest"]
githubUrl: "https://github.com/thomas-rissian/biblio"
featured: true
---

## Contexte

Dans le cadre d'un processus de recrutement chez Michelin, il m'a été demandé de développer une application web de gestion et de consultation de livres. L'objectif était de tester mes compétences en développement fullstack et en gestion de projet.

## Cahier des charges

- Backend : API REST sans framework (pas d'Express).
- Frontend : Vue.js ou Angular (j'ai choisi Vue.js).
- Architecture modulaire (frontend et backend séparés).
- Création de composants réutilisables côté frontend.
- Base de données PostgreSQL via l'ORM Prisma.

## Ambition

Ce projet visait à reproduire un contexte professionnel avec des contraintes réelles, comme :
- Respect d'un cahier des charges précis.
- Livraison d'une application stable et évolutive.
- UX claire et intuitive.

## Objectifs

- Implémenter une API REST complète sans framework.
- Concevoir une interface utilisateur fluide avec Vue.js.
- Structurer proprement la base de données avec Prisma.
- Assurer une communication efficace entre le frontend et l'API.

## Compétences mobilisées

### Gestion de projet
- Utilisation de Git pour le suivi de version.
- Organisation des tâches et priorisation.
- Structuration du dépôt et documentation claire.

### Développement fullstack
- Backend Node.js natif et API REST.
- Base de données PostgreSQL gérée avec Prisma.
- Frontend Vue.js avec composants réutilisables.
- Utilisation de Jest pour les tests unitaires.

## Réalisation

L'application est structurée autour de deux serveurs :
- **Backend (API Biblio)** : Gère les opérations CRUD pour les livres, auteurs et catégories.  
  L'API fonctionne sans framework, utilise Prisma comme ORM, et est totalement découplée du frontend.
  
- **Frontend** : Interface développée avec Vue.js, utilisant des appels HTTP pour interagir avec l'API. Navigation simple, formulaire de gestion et affichage dynamique des données.

## Conclusion

### Bilan technique
- Mise en place réussie d'une architecture propre et modulaire.
- Respect des contraintes imposées (pas de framework backend).
- Application performante et facilement extensible.

### Apprentissages
- Approfondissement de Node.js natif et de Prisma et de Vue.js.
- Développement frontend structuré avec Vue.js.
- Renforcement des bonnes pratiques en architecture logicielle.

### Perspectives d'amélioration
- Implémentation d'une authentification simple.
- Refactoring potentiel du backend avec Express pour la maintenabilité.