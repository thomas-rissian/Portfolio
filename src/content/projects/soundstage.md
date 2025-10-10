---
id: 5
title: "SoundStage"
description: "Plateforme d'événements musicaux avec architecture découplée. API Symfony backend et interface React frontend pour une gestion moderne des événements musicaux."
image: "/projects/soundstage/accueilSoundStage.png"
images:
  - "/projects/soundstage/accueilSoundStage.png"
  - "/projects/soundstage/apiSoundStage.png"
  - "/projects/soundstage/authSoundStage.png"
  - "/projects/soundstage/evenement.png"
  - "/projects/soundstage/formulaire.png"
  - "/projects/soundstage/reactAriste.png"
tags: ["Symfony", "React", "PHP", "TypeScript", "SQLite", "Jest", "PHPUnit"]
githubUrl: "https://github.com/thomas-rissian/SoundStage"
featured: true
---

## Contexte académique

Projet universitaire réalisé dans le cadre du **BUT Informatique**. L'objectif pédagogique était de construire une plateforme complète d'événements musicaux en appliquant une **architecture moderne découplée**. Cette approche permet de séparer clairement les responsabilités entre le backend et le frontend, créant ainsi une base solide pour des applications scalables.

## Architecture applicative

### Infrastructure technique

#### API Symfony (Backend)
- **Framework** : Symfony pour une architecture MVC robuste
- **Base de données** : SQLite pour la persistance des données
- **API** : Exposition des données événements via routes REST (GET)
- **Tests** : Couverture unitaires avec PHPUnit
- **Documentation** : Interface Postman/Swagger pour l'exploration des endpoints

#### Interface React (Frontend)
- **Framework** : React pour une interface utilisateur dynamique
- **Langage** : TypeScript pour la sécurité des types
- **Communication** : Récupération asynchrone des données API
- **Fonctionnalités** : Tri, filtres, pagination des événements
- **Tests** : Suite de tests unitaires avec Jest

## Objectifs opérationnels

### Conception technique
- **API robuste** : Développement d'une API REST sécurisée et maintenable
- **Interface réactive** : Création d'une UI moderne et fluide avec React
- **Séparation des couches** : Architecture claire entre backend et frontend
- **Qualité du code** : Implémentation de tests unitaires complets

### Contraintes temporelles
- **Délai serré** : Livraison dans un timeframe réduit
- **Complexité** : Gestion simultanée de deux technologies distinctes
- **Intégration** : Coordination parfaite entre les deux applications

## Réalisations techniques

### Communication inter-applications
- **Protocole REST** : Établissement d'une communication fiable et standardisée
- **Gestion d'erreurs** : Traitement robuste des réponses API
- **Performance** : Optimisation des appels et du rendu des données

### Tests et qualité
- **Backend** : Tests unitaires complets avec PHPUnit
- **Frontend** : Suite de tests Jest pour la couverture fonctionnelle
- **Intégration** : Validation de l'interaction entre les composants

### Architecture modulaire
- **Composants React** : Développement de briques réutilisables
- **Structure MVC** : Organisation claire du code Symfony
- **Maintenance** : Code facilement évolutif et maintenable

## Résultats obtenus

### Compétences techniques acquises

#### Maîtrise technologique
- **Symfony avancé** : Expertise complète de l'écosystème et architecture MVC
- **React moderne** : Développement d'interfaces réactives et performantes
- **TypeScript** : Intégration de la sécurité des types dans le développement
- **Tests unitaires** : PHPUnit et Jest pour la qualité du code

#### Gestion de projet
- **Multi-repositories** : Expérience concrète de projets décentralisés
- **Coordination** : Gestion simultanée de développements parallèles
- **Méthodologie** : Application de pratiques de développement agiles

### Métriques de succès
- **Fonctionnalité** : Plateforme entièrement opérationnelle
- **Performance** : Temps de réponse optimisés
- **Qualité** : Code testé et documenté
- **Délais** : Livraison respectant les contraintes temporelles

## Perspectives d'évolution

### Sécurité renforcée
- **Authentification JWT** : Système de sécurisation des routes API
- **Autorisation** : Gestion fine des permissions utilisateur
- **Chiffrement** : Protection des données sensibles

### Déploiement et scalabilité
- **Containerisation** : Migration vers Docker pour l'environnement
- **CI/CD** : Mise en place de pipelines d'intégration continue
- **Production** : Déploiement en environnement réel

### Fonctionnalités étendues
- **Filtres avancés** : Extension des capacités de recherche côté client
- **Cache** : Optimisation des performances de récupération de données
- **Temps réel** : Notifications et mises à jour en direct