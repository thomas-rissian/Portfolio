---
id: 2
title: "TaskMongo"
description: "Application web de gestion de tâches basée sur MongoDB, avec une API Express et un frontend Angular."
image: "/projects/taskmongo/board.png"
images:
  - "/projects/taskmongo/board.png"
  - "/projects/taskmongo/taskDetail.png"
  - "/projects/taskmongo/filters.png"
tags: ["Angular", "Node.js", "Express", "MongoDB", "Mongoose"]
githubUrl: "https://github.com/thomas-rissian/TaskMongo"
featured: false
---

## Contexte

**TaskMongo** est une application complète de gestion de tâches développée dans un contexte académique (BUT3) afin de mettre en pratique la conception d’une application **fullstack moderne**.

Le projet avait pour objectif de reproduire une architecture professionnelle réelle en séparant clairement le backend, le frontend et la base de données, tout en appliquant des bonnes pratiques d’API REST et de structuration Angular.

L’application permet de créer, organiser et suivre des tâches via une interface moderne incluant une vue **Kanban**.

---

## Cahier des charges

- Backend Node.js avec API REST Express.
- Base de données MongoDB via Mongoose.
- Frontend Angular moderne (standalone components).
- Architecture découplée frontend / backend.
- Gestion complète du cycle de vie des tâches.
- Interface dynamique inspirée d’un board Kanban.

---

## Ambition

Ce projet visait à simuler un environnement de développement professionnel avec :

- Une architecture scalable et maintenable.
- Une séparation claire des responsabilités.
- Une documentation technique complète.
- Une logique métier structurée côté backend.
- Une expérience utilisateur fluide côté frontend.

L’objectif était autant technique qu’organisationnel : construire une base solide pouvant évoluer comme un véritable produit.

---

## Objectifs

- Implémenter une API REST complète et cohérente.
- Concevoir une interface Angular réactive.
- Structurer les données avec MongoDB et Mongoose.
- Mettre en place un système avancé de filtrage et de tri.
- Créer une vue Kanban fonctionnelle.
- Documenter entièrement le projet pour faciliter sa reprise.

---

## Compétences mobilisées

### Gestion de projet

- Organisation modulaire du dépôt.
- Documentation technique détaillée.
- Suivi de l’avancement via fichiers de statut.
- Structuration claire des responsabilités techniques.

### Développement fullstack

- API REST avec Express.js.
- Modélisation MongoDB avec Mongoose.
- Architecture MVC côté backend.
- Angular 21 avec composants standalone.
- Communication HTTP via services Angular et RxJS.
- Gestion d’état et interaction UI dynamique.

---

## Réalisation

L’application repose sur une architecture en trois couches :

### Backend — API TaskMongo

Le backend expose une API REST permettant la gestion complète des tâches :

- CRUD complet des tâches.
- Gestion des sous-tâches.
- Système de commentaires.
- Historique des modifications.
- Recherche texte optimisée via index MongoDB.
- Filtrage avancé (statut, priorité, dates, catégories).

L’architecture backend est organisée en :

- Routes REST
- Controllers (logique métier)
- Models MongoDB
- Utilitaires (historique et traitements)

---

### Frontend — Application Angular

Le frontend Angular propose une interface moderne et interactive :

- Vue **Kanban** par statut.
- Création et modification de tâches.
- Filtrage dynamique.
- Composants réutilisables.
- Communication API via services HTTP.

L’application utilise une structure modulaire basée sur :

- Pages (Board, détail tâche)
- Components UI
- Services Angular
- Interfaces TypeScript

---

### Base de données

MongoDB est utilisée pour sa flexibilité documentaire :

- Modèles dynamiques adaptés aux tâches complexes.
- Relations imbriquées (sous-tâches, commentaires).
- Optimisation des recherches via index.

---

## Fonctionnalités principales

### Implémentées

- CRUD complet des tâches
- Sous-tâches
- Commentaires
- Historique des modifications
- Filtrage avancé multi-critères
- Tri configurable
- Vue Kanban
- Interface Angular réactive

### Améliorations prévues

- Pagination des listes importantes
- Validation frontend avancée
- Gestion d’erreurs UX (toasts/snackbars)
- Responsive design complet
- Tests unitaires

## Conclusion

### Bilan technique

- Mise en place d’une architecture fullstack claire et évolutive.
- API REST robuste et documentée.
- Frontend Angular structuré et extensible.
- Bonne séparation des responsabilités techniques.

### Apprentissages

- Approfondissement de MongoDB et Mongoose.
- Structuration d’une API professionnelle Express.
- Architecture Angular moderne (standalone).
- Organisation documentaire d’un projet réel.

### Perspectives d’amélioration

- Ajout d’un système d’authentification.
- Optimisation des performances frontend.
- Mise en production avec CI/CD.  
- Ajout de tests automatisés.

---