# Schlecht Möbel

Une plateforme de gestion pour un magasin de meubles de seconde main, permettant aux utilisateurs de s'inscrire, de parcourir les meubles en vente, et de gérer le stock pour l'administrateur.

## Table des matières

- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Utilisation](#utilisation)
- [Captures d'écran](#captures-décran)

## Description

Ce projet vise à créer une plateforme web pour la gestion d'un magasin de meubles de seconde main. Il permettra aux utilisateurs de s'inscrire, de parcourir les meubles disponibles à la vente, et pour l'administrateur de gérer le stock et les meubles proposés par les utilisateurs.

## Fonctionnalités

### Utilisateurs

- Inscription et connexion
- Parcourir les meubles en vente
- Afficher les détails d'un meuble
- Créer un compte pour personnaliser l'affichage des meubles
- Proposer des meubles à vendre (visible seulement par l'administrateur)

### Administrateur

- Connexion sécurisée
- Gestion des meubles : ajouter, modifier, supprimer
- Validation des meubles proposés par les utilisateurs
- Suivi des statuts des meubles

## Technologies Utilisées

- **Langages** : HTML, CSS, JavaScript
- **Framework Backend** : NodeJS/express
- **Framework Frontend** : NextJS (app directory)
- **Base de Données** : Supabase (PostgreSQL)
- **Autres Outils** : Postman pour les APIs, Tailwind pour le CSS

Ouvrez votre navigateur et allez à l'adresse http://localhost:3000.

## Utilisation

**Pour les Utilisateurs**

- _Inscription et Connexion_ : <br/>Créez un compte ou connectez-vous pour accéder aux fonctionnalités personnalisées.
  <br/>
- _Parcourir les Meubles_ : <br/>Consultez les meubles en vente, cliquez sur un meuble pour voir les détails et acheter.
  <br/>
- _Proposer un Meuble_ : <br/>Si connecté, proposez des meubles à vendre en remplissant un formulaire.
  <br/>

**Pour l'Administrateur**

- _Connexion_ : <br/>Connectez-vous pour accéder aux fonctionnalités d'administration.
  <br/>
- _Gérer les Meubles_ : <br/>Ajoutez, modifiez ou supprimez des meubles depuis la page de gestion.
  <br/>
- _Valider les Propositions_ : <br/>Consultez et validez les meubles proposés par les utilisateurs.

## Commandes utiles

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "server": "dotenv -- node serveur_api/serveurtest.js",
    "server:maureen": "dotenv -- nodemon serveur_api/index.js",
    "db:generate-migration": "prisma migrate dev --schema serveur_api/prisma/schema.prisma",
    "db:pull": "prisma db pull --schema serveur_api/prisma/schema.prisma",
    "db:generate-client": "prisma generate --schema serveur_api/prisma/schema.prisma"
  },
```

## Captures d'écran:

_Page d'accueil:_
[![Page d'accueil](https://i.goopics.net/jhy4pi.jpg)](https://goopics.net/i/jhy4pi)

_page catalogue:_
[![Page catalogue](https://i.goopics.net/c04x94.jpg)](https://goopics.net/i/c04x94)

_Page de gestion des produits: (administrateur)_
[![Page de gestion des produits](https://i.goopics.net/3iwl30.jpg)](https://goopics.net/i/3iwl30)
