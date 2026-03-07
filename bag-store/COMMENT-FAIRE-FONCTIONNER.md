# Comment faire fonctionner le site

## En local sur ton PC

### 1. Ouvrir un terminal
Ouvre **PowerShell** ou **Invite de commandes** (Windows).

### 2. Aller dans le dossier du projet
```powershell
cd "c:\Users\HP\Desktop\site sacs2\bag-store"
```

### 3. Installer les dépendances (une seule fois)
```powershell
npm install
```

### 4. Lancer le serveur
```powershell
npm start
```

Tu dois voir : **Serveur démarré sur http://localhost:3001**

### 5. Ouvrir le site dans le navigateur
- **Boutique (clients)** : ouvre **http://localhost:3001**
- **Admin (commandes)** : **http://localhost:3001/admin**  
  → Mot de passe par défaut : `TON_MOT_DE_PASSE` (à changer dans `frontend/admin.html`)

---

## Si tu veux enregistrer les commandes

Il faut **MySQL** :

1. Installe MySQL et crée une base : `CREATE DATABASE bag_store;`
2. Dans le dossier `bag-store`, le fichier **.env** peut contenir :
   ```
   DB_PASSWORD=ton_mot_de_passe_mysql
   ```
   (si ton MySQL a un mot de passe)

Les commandes seront sauvegardées et visibles dans la page **Admin**.

---

## Si tu veux recevoir les commandes sur WhatsApp

1. Va sur **https://www.callmebot.com/blog/free-api-whatsapp-messages/** et active l’API (tu reçois une clé).
2. Dans le fichier **.env** du dossier `bag-store`, ajoute :
   ```
   CALLMEBOT_PHONE=213612345678
   CALLMEBOT_API_KEY=ta_cle_recue
   ```
   (remplace par ton numéro et ta clé)

À chaque commande validée, tu recevras un message sur WhatsApp.

---

## Récapitulatif

| Étape | Commande / action |
|--------|--------------------|
| 1 | `cd "c:\Users\HP\Desktop\site sacs2\bag-store"` |
| 2 | `npm install` |
| 3 | `npm start` |
| 4 | Ouvrir **http://localhost:3001** dans Chrome, Edge, etc. |

Les **photos des sacs** (Noir, Marron, Bordeaux) sont déjà dans `frontend/img/` et reliées au site : en choisissant une couleur, la bonne photo s’affiche.
