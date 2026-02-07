# Mettre le projet sur Git (GitHub)

Ouvre **PowerShell** ou **Invite de commandes** dans le dossier du projet, puis exécute les commandes ci-dessous **dans l’ordre**.

---

## Étape 1 : Vérifier que Git est prêt

Le dépôt a déjà été initialisé. Vérifie avec :

```powershell
cd "d:\Work\portfolio-miguel-evelin"
git status
```

Si tu vois la liste des fichiers non suivis, c’est bon. Passe à l’étape 2.

Si tu vois « not a git repository », initialise d’abord :

```powershell
git init
```

---

## Étape 2 : Ajouter tous les fichiers et faire le premier commit

```powershell
git add .
git commit -m "Initial commit - portfolio Miguel Evelin"
```

---

## Étape 3 : Créer le dépôt sur GitHub

1. Va sur **https://github.com/new**
2. **Repository name** : `portfolio-miguel-evelin` (ou un autre nom si tu préfères)
3. Laisse **Public**
4. **Ne coche pas** « Add a README » (le projet en a déjà)
5. Clique sur **Create repository**

---

## Étape 4 : Relier ton projet à GitHub et pousser

Sur la page du nouveau dépôt, GitHub affiche des commandes. Tu peux utiliser celles-ci (en remplaçant `TON_USERNAME` par ton identifiant GitHub) :

```powershell
git remote add origin https://github.com/TON_USERNAME/portfolio-miguel-evelin.git
git branch -M main
git push -u origin main
```

**Exemple** si ton username GitHub est `miguelevelin` :

```powershell
git remote add origin https://github.com/miguelevelin/portfolio-miguel-evelin.git
git branch -M main
git push -u origin main
```

Si GitHub te demande de te connecter, utilise ton identifiant et un **Personal Access Token** (mot de passe) à la place de ton mot de passe GitHub. Tu peux en créer un ici : **GitHub → Settings → Developer settings → Personal access tokens**.

---

## Résumé des commandes (tout d’un coup)

Une fois le dépôt créé sur GitHub, tu peux tout faire avec :

```powershell
cd "d:\Work\portfolio-miguel-evelin"
git add .
git commit -m "Initial commit - portfolio Miguel Evelin"
git remote add origin https://github.com/TON_USERNAME/portfolio-miguel-evelin.git
git branch -M main
git push -u origin main
```

N’oublie pas de remplacer **TON_USERNAME** par ton vrai nom d’utilisateur GitHub.
