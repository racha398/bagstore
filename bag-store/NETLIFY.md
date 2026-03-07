# Déploiement sur Netlify

## Option 1 : Site statique uniquement (frontend)

1. Connecte ton repo Git (GitHub/GitLab) à Netlify.
2. **Répertoire de base** : `bag-store` (si le repo est "site sacs2", indique le sous-dossier).
3. **Répertoire à publier** : `frontend` (déjà dans `netlify.toml`).
4. Déploie.

Les pages `index.html` et `admin.html` seront en ligne. Les liens (style.css, script.js, admin.html) sont relatifs et fonctionneront.

⚠️ **Important** : Sans backend, le formulaire de commande ne pourra pas enregistrer en base ni envoyer la notification WhatsApp. Pour un site 100 % fonctionnel, utilise l’**Option 2** (backend séparé) ou héberge le backend Node.js ailleurs (Railway, Render, etc.) et configure l’URL de l’API dans le frontend.

## Option 2 : Frontend sur Netlify + backend ailleurs

1. Déploie le frontend sur Netlify comme en Option 1.
2. Déploie le backend Node.js (dossier `backend` + `config`, `package.json`) sur **Railway**, **Render** ou **Heroku**.
3. Dans le frontend, remplace les appels à `/api/orders` par l’URL de ton API (ex. `https://ton-app.railway.app/api/orders`). Tu peux utiliser une variable d’environnement Netlify pour l’URL de l’API.

## Images pour le web

- Place tes images dans `frontend/img/` (ex. `sac-noir.jpg`, `sac-marron.jpg`, `sac-bordeaux.jpg`).
- Formats conseillés : **WebP** ou **JPEG**.
- Taille raisonnable : 800–1200 px de large max, qualité 80–85 % pour limiter le poids.
- Le CSS actuel utilise déjà `max-width: 100%` et `height: auto` pour les rendre responsives.

## Liens vérifiés

- `/` ou `/index.html` → page d’accueil
- `/admin` ou `/admin.html` → tableau de bord admin (protégé par mot de passe)
