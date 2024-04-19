Title: Mission 1er stage : Modification Amaliage
Date: 2023-06-05 20:28
Category: Python
Tags: pelican
Slug: stage1Amaliage
Authors: Thomas Rissian

### Contexte :

J'ai travaillé seul sur cette mission de stage. 

J'ai dû développer une fonctionnalité sur leur intranet, la partie de cet intranet s'appelle Amaliage. 
Amaliage s'occupe de la gestion des camions.

### Environnement technologique : 
* visual studio code
* microsoft sql server
* bureau à distance (environnement de développement)
* PHP
* mysql
* HTML / CSS

### compétence mobilisée : 

- **B1.2.3 : Traiter des demandes concernant les applications**

l'objectif était que quand on cliquait sur "arrivé" ou "parti" dans transporeon, la case sur Amaliage soit tout aussi coché.

Pour pouvoir faire cela j'ai dû tenter de récupérer la donnée par la base de donnée et faire des tests afin de modifier la valeur correctement.

![Mon image](./theme/images/article/stage/1er/lienAmaliageTransporeon/rendu/choixTranporeon.png) 
![Mon image](./theme/images/article/stage/1er/lienAmaliageTransporeon/rendu/renduAmaliage.png) 

J'ai rajouté une catégorie qui permettait de gérer les heures de chargement de chaque site.
Sur la base de donnée se trouver les horaires pour chaque site, mais ils n'étaient pas implémentés.

je devais dire quand la livraison devait arriver "matin, après midi, journée", et les bons horaires de chaque site devait automatiquement être retourné

![Mon image](./theme/images/article/stage/1er/horraireLivraison/rendu.png) 
![Mon image](./theme/images/article/stage/1er/horraireLivraison/renduTransporeon.png) 

