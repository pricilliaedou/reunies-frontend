# Réunies: Entrepreneuriat au Féminin

Réunies est une association dédiée à la mise en relation, au soutien et à la promotion des femmes entrepreneures. Le site reunies est un site vitrine réalisé pour l'association. Il permet aux membres de se connecter, et d'effectuer d'avoir des informations sur les femmes entrepreneures inscrites sur la plaforme.

## Table des matières

- [Description du projet](#description-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Fonctionnalités principales](#fonctionnalités-principales)
- [Installation et exécution](#installation-et-exécution)
- [Déploiement](#déploiement)
- [Contributeurs](#contributeurs)
- [Licence](#licence)

## Description du projet

Ce projet comprend un **frontend** développé en **React** plus **Vite** et un **backend** construit avec **Node.js**, **Express** pour le serveur et **MongoDB** pour la base de données. L'application permet :

- L'inscription et la connexion des utilisateurs.
- La recherche et le réseautage entre femmes entrepreneures selon des critères spécifiques (activités, régions, villes).

## Technologies utilisées

### Frontend

- **React 18.3.1**
- **Vite 6.0.1**
- **React Router Dom**
- **Tailwind CSS**
- **Axios**
- **Netlify** (déploiement)

### Backend

- **Node.js**
- **Express**
- **MongoDB** (base de données)
- **Northflank** (déploiement)
- **Crypto-JS** (hashing des mots de passe)
- **UID2** (génération de tokens)

### Outils supplémentaires

- **ESLint**
- **Vite**

## Fonctionnalités principales

### Utilisateurs

- Inscription avec validation des champs et cryptage des mots de passe.
- Connexion avec génération de token sécurisé.

### Réseautage

- Recherche avancée par activité, région et ville.
- Filtrage dynamique des résultats.

### Frontend

- Design responsive grâce à Tailwind CSS.
- Navigation fluide via React Router.

### Backend

- API RESTful sécurisée pour gérer les utilisateurs et les recherches.
- Gestion robuste des erreurs (e.g., utilisateur déjà existant, email invalide).

## Installation et exécution

### Pré-requis

- Node.js (>= 20.x)
- MongoDB (en local ou via un service cloud)
- Un compte sur **Netlify** et **Northflank** pour le déploiement.

#### Cloner le projet

git clone https://github.com/pricilliaedou/reunies-frontend.git

#### Visualiser le projet

https://reunies.netlify.app/
