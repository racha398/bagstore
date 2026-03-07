# Bag Store

Site de commande de sacs, pensé pour les clients venant d'Instagram ou d'autres réseaux sociaux.

## Structure du projet

```text
bag-store
│
├── backend
│   ├── config
│   │   └── db.js          # Connexion MySQL + création de la table orders
│   ├── routes
│   │   └── orders.js      # Routes API pour créer et lister les commandes
│   └── server.js          # Serveur Express (point d'entrée Node)
│
├── frontend
│   ├── index.html         # Page clients (produits + panier + formulaire de commande)
│   ├── admin.html         # Tableau de bord /admin pour voir les commandes
│   ├── style.css          # Design mobile-first, tons blanc / beige
│   └── script.js          # Logique du panier, formulaire et appel API
│
├── .env.example           # Exemple de configuration des variables d'environnement
├── package.json
└── README.md
```

## Installation

1. **Cloner ou copier le projet** dans un dossier, par exemple :

   ```bash
   c:\Users\HP\site sacs\bag-store
   ```

2. **Installer les dépendances Node.js** (dans le dossier `bag-store`) :

   ```bash
   npm install
   ```

   Cela installe notamment :

   - `express`
   - `mysql2`
   - `dotenv`
   - (dev) `nodemon`

3. **Configurer la base de données MySQL** :

   - Créer la base :

     ```sql
     CREATE DATABASE bag_store CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
     ```

   - Copier `.env.example` vers `.env` et adapter les valeurs :

     ```ini
     PORT=3000
     DB_HOST=localhost
     DB_PORT=3306
     DB_NAME=bag_store
     DB_USER=root
     DB_PASSWORD=mot_de_passe
     ```

   - Au premier démarrage, la table `orders` sera créée automatiquement.

4. **Configurer le numéro WhatsApp dans le frontend** :

   Ouvrir `frontend/script.js` et remplacer la valeur de `WHATSAPP_NUMBER` par votre numéro (sans `+` ni zéros initiaux) :

   ```js
   // Exemple pour l'Algérie : +213 6 12 34 56 78
   const WHATSAPP_NUMBER = "213612345678";
   ```

## Lancement en local

Depuis le dossier `bag-store` :

```bash
npm start
```

ou, en développement avec rechargement automatique (si `nodemon` est installé) :

```bash
npm run dev
```

- Page client : `http://localhost:3000/`
- Tableau de bord admin : `http://localhost:3000/admin`

## Modifier facilement les produits

Les produits affichés sont définis dans `frontend/script.js` :

```js
const products = [
  {
    id: 1,
    name: "Sac Noir Élégant",
    price: 4500,
    colors: ["Noir", "Beige", "Marron"],
  },
  {
    id: 2,
    name: "Sac Beige Classique",
    price: 4200,
    colors: ["Beige", "Noir"],
  },
  {
    id: 3,
    name: "Mini Sac Chic",
    price: 3900,
    colors: ["Noir", "Blanc"],
  },
];
```

Pour changer **nom**, **prix** ou **couleurs**, il suffit de modifier ce tableau.

## Résumé technique

- **Frontend** : HTML, CSS, JavaScript pur, design mobile-first, layout vertical scrollable, gros boutons tactiles et formulaire en overlay.
- **Backend** : Node.js + Express, structure modulaire (`config`, `routes`).
- **Base de données** : MySQL, table `orders` avec une colonne `produits` en JSON pour stocker la liste des sacs (nom, couleur, quantité, prix).
- **WhatsApp** : ouverture automatique d'une conversation avec un message pré-rempli après confirmation de la commande (sur mobile).

