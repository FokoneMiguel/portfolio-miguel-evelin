# Mettre à jour le projet sur GitHub

À chaque fois que tu modifies ton projet et que tu veux mettre à jour le dépôt GitHub, exécute ces commandes **dans l’ordre** dans un terminal (PowerShell ou CMD), depuis le dossier du projet.

---

## 1. Aller dans le dossier du projet

```powershell
cd "d:\Work\portfolio-miguel-evelin"
```

---

## 2. Voir ce qui a changé

```powershell
git status
```

Tu verras la liste des fichiers modifiés, ajoutés ou supprimés.

---

## 3. Ajouter tous les changements

```powershell
git add .
```

*(Le point signifie « tous les fichiers modifiés ».)*

---

## 4. Créer un commit avec un message

```powershell
git commit -m "Description de tes changements"
```

**Exemples de messages :**
- `git commit -m "Ajout du téléchargement du CV en PDF"`
- `git commit -m "Mise à jour de la page Contact"`
- `git commit -m "Correction du titre sur la page CV"`

---

## 5. Envoyer sur GitHub

```powershell
git push
```

Si c’est la première fois après avoir branché le dépôt :

```powershell
git push -u origin main
```

---

## Résumé (tout en une fois)

Après avoir fait tes modifications dans le projet :

```powershell
cd "d:\Work\portfolio-miguel-evelin"
git add .
git commit -m "Ajout du téléchargement du CV en PDF"
git push
```

---

## En cas de problème

- **« nothing to commit »** : Aucun fichier n’a été modifié depuis le dernier commit. Tu n’as rien à pousser.
- **« failed to push »** : Vérifie ta connexion internet et que tu es bien connecté à GitHub (identifiant + token si demandé).
- **« branch 'main' has no upstream »** : Utilise une fois `git push -u origin main`.
