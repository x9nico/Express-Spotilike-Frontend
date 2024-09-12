# WebAPI-Express-Spotilike-Frontend

Ce projet est une inspiration de la plateforme SpotiLike qui est connectée au projet back-end développé en ASP .Net Core 8.0.

## Prérequis

- L'API de lancée en local (voir le repo WebAPI-Express-Spotilike-Backend)
- Node.JS en version 18.15.0 minimum

## Installation du projet

1- Clonez le repo.

2- Allez dans le dossier du projet que vous avez cloné 

3- Exécutez la commande npm install à la racine du projet

4- En fonction du port de l'API que vous avez lancé en local, adaptez toutes les fonctions fetch() dans le code pour que ça appelle l'API sur le bon port dans tous les composants Vue (Ctrl + Shift + F pour les trouver)

5- Une fois mis à jour, compilez le projet avec la commande npm run build 

6- Lancez l'application en local avec la commande npm run dev

7- Si tout se passe bien, il vous mentionnera dans la console l'URL de l'application pour y accéder.

### Problèmes rencontrés

Le système d'authentification ne fonctionne pas tout à fait, suite à une manque de temps, et quelques complexité.
De plus, l'application n'a pas pu être déployée sur Azure, suite à des problèmes administratifs vis-à-vis de mes droits d'étudiants.
