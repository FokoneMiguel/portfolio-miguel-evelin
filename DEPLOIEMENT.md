# Déploiement du portfolio

## 1. Exécuter le projet en local

### Prérequis
- **Node.js** (v18 ou plus)
- **pnpm** : `npm install -g pnpm` (si pas déjà installé)

### Commandes

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement (avec rechargement à chaud)
pnpm dev
```

Ouvrir **http://localhost:3000** dans le navigateur.

### Build et prévisualisation production

```bash
# Construire le projet
pnpm build

# Prévisualiser le build (optionnel)
pnpm preview
```

---

## 2. Pousser le projet sur GitHub

### Si le dépôt n’existe pas encore

1. Créer un nouveau dépôt sur [github.com](https://github.com) (sans README, sans .gitignore).

2. Dans le dossier du projet :

```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - portfolio"

# Remplacer par l’URL de VOTRE dépôt GitHub
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-miguel-evelin.git

# Branche principale (souvent main)
git branch -M main

# Envoyer sur GitHub
git push -u origin main
```

### Si le dépôt existe déjà et est déjà cloné

```bash
git add .
git commit -m "Description des changements"
git push
```

---

## 3. Déployer sur Vercel

1. Aller sur [vercel.com](https://vercel.com) et se connecter (avec GitHub si possible).

2. **Import Project** → choisir le dépôt **portfolio-miguel-evelin**.

3. Vercel détecte automatiquement :
   - **Framework** : Vite  
   - **Build Command** : `pnpm run build`  
   - **Output Directory** : `dist/public`  
   (grâce au fichier `vercel.json` du projet)

4. Cliquer sur **Deploy**. Après quelques minutes, le site est en ligne.

5. Les prochains déploiements se feront automatiquement à chaque `git push` sur la branche connectée (souvent `main`).

---

## Résumé des commandes

| Action              | Commande        |
|---------------------|-----------------|
| Installer           | `pnpm install`  |
| Lancer en dev       | `pnpm dev`      |
| Build production    | `pnpm build`    |
| Prévisualiser build | `pnpm preview`  |
