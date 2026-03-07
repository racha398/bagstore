# Démarrer le site (Boutique de sacs)

## 1. Prérequis

- **Node.js** installé sur ton PC ([télécharger](https://nodejs.org/))
- **MySQL** installé et lancé (pour enregistrer les commandes)

## 2. Base de données MySQL

1. Ouvre MySQL (phpMyAdmin, MySQL Workbench ou ligne de commande).
2. Crée une base nommée `bag_store` :
   ```sql
   CREATE DATABASE bag_store;
   ```
3. Par défaut le site utilise :
   - Utilisateur : `root`
   - Mot de passe : (vide)
   - Hôte : `localhost`
   - Base : `bag_store`  
   La table des commandes est créée automatiquement au premier démarrage.

   Si tu as un autre mot de passe ou un autre utilisateur, crée un fichier `.env` à la racine du dossier `bag-store` avec :
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=ton_mot_de_passe
   DB_NAME=bag_store
   PORT=3000
   ```

## 3. Lancer le site

Dans un terminal, va dans le dossier du projet puis lance le serveur :

```bash
cd "c:\Users\HP\Desktop\site sacs2\bag-store"
npm install
npm start
```

Tu devrais voir : `Serveur démarré sur http://localhost:3000`

## 4. Ouvrir le site

- **Boutique (clients)** : http://localhost:3000  
- **Admin (voir les commandes)** : http://localhost:3000/admin  

## Option : mode développement

Pour redémarrer le serveur automatiquement quand tu modifies le code :

```bash
npm run dev
```

## 5. Notification WhatsApp (CallMeBot)

À chaque commande validée, un message est envoyé sur ton WhatsApp via CallMeBot.

1. Va sur [CallMeBot WhatsApp](https://www.callmebot.com/blog/free-api-whatsapp-messages/) et active l’API (envoie le message au bot pour obtenir ta clé).
2. Dans le fichier `.env`, ajoute :
   ```
   CALLMEBOT_PHONE=TON_NUMERO_WHATSAPP
   CALLMEBOT_API_KEY=TA_CLE_API
   ```
   (Numéro avec indicatif pays sans +, ex. `213612345678`.)

La commande est toujours enregistrée dans la base et visible dans **admin**. Le message WhatsApp contient : client, téléphone, adresse, détail de la commande, prix total, date et statut « En attente ».

## 6. Protection de la page Admin

La page **admin** est protégée par un mot de passe. Par défaut le code utilise le mot de passe `TON_MOT_DE_PASSE`. Pour le changer : ouvre `frontend/admin.html`, cherche `const ADMIN_PASSWORD = "TON_MOT_DE_PASSE"` et remplace par ton mot de passe. Si le visiteur se trompe, il est redirigé vers la page d’accueil après 1,5 seconde.

## Sans MySQL (tester uniquement l’interface)

Si tu n’as pas MySQL, tu peux quand même ouvrir la page d’accueil : le site s’affiche, le panier et la langue (FR / العربية) marchent. En revanche, le bouton « Confirmer la commande » renverra une erreur tant que la base n’est pas configurée.
