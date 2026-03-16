---
id: 7
title: "ForeignGineer"
description: "Jeu de survie et de gestion écologique développé dans Godot. Le joueur incarne un ingénieur spatial piégé sur une planète inconnue, avec pour mission de restaurer son équilibre écologique."
image: "/projects/foreigngineer/home.png"
images:
  - "/projects/foreigngineer/home.png"
  - "/projects/foreigngineer/inventaire.png"
  - "/projects/foreigngineer/factory.png"
  - "/projects/foreigngineer/circuit.png"
  - "/projects/foreigngineer/energy.png"
  - "/projects/foreigngineer/texte.png"
  - "/projects/foreigngineer/daltonien.png"
tags: ["Godot", "C#", "Git", "UML"]
githubUrl: "https://github.com/thomas-rissian/ForeignGeneer"
featured: false
ecoResponsibility: |
  ## Écoconception

  ### Optimisation des ressources
  - **Moteur léger** : Utilisation de Godot, moteur open-source performant et peu gourmand en ressources
  - **Optimisation graphique** : Compression des textures et modèles 3D pour réduire l'empreinte mémoire
  - **Chargement intelligent** : Instanciation asynchrone des scènes pour limiter les pics de consommation

  ### Architecture durable
  - **Code modulaire** : Structure orientée objet facilitant la maintenance et l'évolution du projet
  - **Pas de dépendances externes** : Aucun service cloud ou API tierce énergivore
  - **Ciblage optimisé** : Développement PC uniquement pour éviter les ressources multi-plateformes inutiles

  ### Sensibilisation écologique
  - **Gameplay engagé** : Mécaniques de jeu centrées sur la dépollution et la gestion durable des ressources
  - **Message pédagogique** : Narration environnementale intégrée au scénario

  ## Accessibilité

  ### Adaptations visuelles
  - **Mode daltonien** : Plusieurs profils de couleurs disponibles (protanopie, deutéranopie, tritanopie)
  - **Typographie adaptée** : Police spécialisée pour les dyslexiques avec espacement optimisé
  - **Contraste élevé** : Interfaces lisibles avec des contours nets et des couleurs distinctes

  ### Interactions inclusives
  - **Contrôles personnalisables** : Remapping complet des touches (défaut : E pour interagir)
  - **Navigation au clavier** : Tous les menus et interfaces accessibles sans souris
  - **Retours visuels clairs** : Indicateurs et feedback pour chaque action
---

## Contexte

Dans le cadre de notre projet tutoré, nous avons développé **ForeignGineer**, un jeu de survie et de gestion écologique sur une planète inconnue.

## Cahier des charges

- Moteur de jeu : Godot (version stable)
- Langage : C#
- Développement pensé pour portabilité (Windows 10+)
- Interface intuitive avec éléments interactifs (clavier/souris)
- Éléments de gameplay : pollution, craft, gestion de ressources, exploration

## Ambition

Ce projet vise à sensibiliser les joueurs à la préservation de l'environnement à travers des mécaniques de jeu engageantes, tout en offrant une expérience utilisateur fluide et immersive.

## Objectifs

- Proposer une narration environnementale forte
- Créer des systèmes de craft, de construction et de dépollution
- Offrir une interface simple et des contrôles personnalisables
- Intégrer des éléments de survie (faim, santé, ressources)

## Compétences mobilisées

### Développement de jeu vidéo
- Création d'interfaces et systèmes (menu, inventaire, fonderie)
- Scripts C# optimisés pour l'interaction en temps réel
- Intégration de mécaniques complexes (robots, automation, pollution)

### Gestion de projet logiciel
- Utilisation d'UML pour modéliser les systèmes
- Gestion de version via Git et GitHub
- Documentation claire et structurée

## Réalisation

Le jeu comprend plusieurs fonctionnalités majeures :
- **Dépollution** : le joueur surveille une barre de pollution et agit pour l'abaisser.
- **Réparation de robots** : des entités autonomes peuvent aider une fois restaurées.
- **Gestion de ressources** : collecte, traitement, automatisation via machines et convoyeurs.
- **Construction** : placer, orienter et connecter des machines pour créer une chaîne de production.

### Accessibilité
- Options de daltonisme intégrées
- Typographie adaptée aux dyslexiques
- Commandes reconfigurables
- Interfaces claires et contrastées
