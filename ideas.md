# Brainstorming Design - Portfolio Miguel Evelin

## Contexte
Portfolio professionnel pour un développeur web et infographiste. L'objectif est de créer un site crédible, moderne et orienté business qui convainc les recruteurs en 30-60 secondes.

---

## Approche 1 : Minimalisme Contemporain & Contraste Dramatique
**Probabilité : 0.08**

### Design Movement
Bauhaus moderne avec influences du design suisse contemporain. Accent sur la clarté absolue et la hiérarchie typographique.

### Core Principles
1. **Espace blanc stratégique** - Chaque élément respire, rien n'est encombré
2. **Contraste noir/blanc maximal** - Fond blanc pur, texte noir profond, accents de couleur précis
3. **Typographie comme ornement** - Les polices font le design, pas les images
4. **Asymétrie intentionnelle** - Les éléments ne sont pas centrés, créant une tension visuelle

### Color Philosophy
- Fond : Blanc pur (oklch(1 0 0))
- Texte principal : Noir profond (oklch(0.15 0.01 0))
- Accent : Bleu électrique (oklch(0.55 0.25 260)) pour les CTAs et les points clés
- Gris neutre : oklch(0.7 0.01 0) pour les textes secondaires
- Raisonnement : Maximaliser la lisibilité et la professionnalité, l'accent bleu crée une énergie sans distraire

### Layout Paradigm
- Hero section asymétrique : nom et titre à gauche, image/illustration à droite
- Grille 3-colonnes pour les projets, mais avec des espacements irréguliers
- Sections alternées : texte plein écran, puis contenu avec images
- Navigation sticky minimaliste en haut

### Signature Elements
1. **Ligne de séparation animée** - Une fine ligne qui se dessine lors du scroll
2. **Bloc de code stylisé** - Afficher un snippet de code réel comme élément graphique
3. **Cercles de compétences** - Petits cercles colorés pour représenter les skills

### Interaction Philosophy
- Transitions fluides et subtiles (200-300ms)
- Hover sur les projets : léger zoom (1.02x) et ombre portée
- Scroll-triggered animations : éléments qui apparaissent progressivement
- Pas d'animations excessives, juste assez pour sentir la qualité

### Animation
- Entrée des sections : fade-in + slide-up léger (300ms)
- Hover sur les liens : underline qui se dessine (200ms)
- Scroll reveal : les éléments apparaissent avec une opacité progressive
- Transition de page : fade-out/fade-in (150ms)

### Typography System
- **Display** : Playfair Display (serif, bold) pour les titres principaux
- **Heading** : Inter (sans-serif, 600-700) pour les sous-titres
- **Body** : Inter (sans-serif, 400) pour le texte courant
- Hiérarchie : 48px → 32px → 24px → 16px → 14px

---

## Approche 2 : Néo-Brutalism & Texture Organique
**Probabilité : 0.07**

### Design Movement
Néo-brutalisme digital avec influences du design graphique des années 70. Accent sur l'authenticité et la texture.

### Core Principles
1. **Texture et grain** - Fond légèrement texturé (bruit subtil), pas de flatness
2. **Formes géométriques brutes** - Carrés, rectangles sans arrondis excessifs
3. **Couleurs terreuses** - Palette naturelle, chaleureuse
4. **Bordures épaisses** - Les éléments ont du poids visuel

### Color Philosophy
- Fond : Beige chaud (oklch(0.95 0.02 80))
- Texte : Marron foncé (oklch(0.3 0.08 40))
- Accent primaire : Terracotta (oklch(0.6 0.15 40))
- Accent secondaire : Vert olive (oklch(0.55 0.12 140))
- Raisonnement : Créer une atmosphère accueillante et humaine, moins "corporate"

### Layout Paradigm
- Grille asymétrique avec des colonnes de largeurs différentes
- Sections avec bordures épaisses (3-4px) qui divisent l'espace
- Images avec bordures noires épaisses
- Texte qui déborde légèrement des conteneurs

### Signature Elements
1. **Bloc de couleur brut** - Des rectangles de couleur terracotta/olive qui encadrent le contenu
2. **Ligne de séparation épaisse** - Barre de 4-5px entre les sections
3. **Badges texturés** - Petits carrés avec bordures épaisses pour les compétences

### Interaction Philosophy
- Interactions directes et sans détour
- Hover : changement de couleur de fond (pas de zoom)
- Click feedback : léger changement d'opacité
- Pas d'animations complexes, juste du feedback immédiat

### Animation
- Entrée des sections : aucune animation, apparition directe
- Hover : changement de couleur (150ms)
- Scroll : pas d'animations liées au scroll
- Transition : cut-to-black ou fade simple (100ms)

### Typography System
- **Display** : Courier Prime (monospace, bold) pour les titres
- **Heading** : IBM Plex Sans (sans-serif, 700) pour les sous-titres
- **Body** : IBM Plex Sans (sans-serif, 400) pour le texte
- Hiérarchie : 56px → 36px → 28px → 18px → 14px

---

## Approche 3 : Gradient Moderne & Glassmorphism
**Probabilité : 0.09**

### Design Movement
Design contemporain avec influences du glassmorphism et des gradients subtils. Accent sur la modernité et la profondeur.

### Core Principles
1. **Gradients subtils** - Dégradés doux qui créent de la profondeur sans être criards
2. **Effet verre** - Cartes semi-transparentes avec backdrop blur
3. **Profondeur en couches** - Plusieurs niveaux de z-index créent une hiérarchie visuelle
4. **Animations fluides** - Tout bouge avec grâce

### Color Philosophy
- Fond : Dégradé noir → bleu très foncé (oklch(0.1 0.02 260) → oklch(0.15 0.08 260))
- Texte : Blanc/gris clair (oklch(0.9 0.01 0))
- Accent : Cyan/turquoise (oklch(0.65 0.2 200))
- Cartes : Blanc semi-transparent (oklch(1 0 0 / 0.1)) avec backdrop blur
- Raisonnement : Créer une sensation de modernité, de tech, de futurisme

### Layout Paradigm
- Hero section plein écran avec gradient animé en arrière-plan
- Cartes flottantes avec effet verre
- Sections avec dégradés subtils
- Navigation translucide avec backdrop blur

### Signature Elements
1. **Gradient animé en arrière-plan** - Dégradé qui change légèrement au scroll
2. **Cartes avec effet verre** - Éléments semi-transparents avec blur
3. **Orbes de couleur** - Formes circulaires flottantes en arrière-plan

### Interaction Philosophy
- Interactions fluides et prévisibles
- Hover : les cartes se lèvent (shadow augmente, y translate)
- Click : feedback immédiat avec animation
- Animations au scroll : éléments qui suivent le mouvement

### Animation
- Entrée des sections : fade-in + scale (400ms, easing smooth)
- Hover : elevation (shadow augmente, y translate -4px) (250ms)
- Scroll : parallax léger sur les éléments (0.5x speed)
- Transition de page : fade-out avec scale (200ms)
- Orbes en arrière-plan : mouvement lent et continu

### Typography System
- **Display** : Sora (sans-serif, bold) pour les titres
- **Heading** : Sora (sans-serif, 600) pour les sous-titres
- **Body** : Sora (sans-serif, 400) pour le texte
- Hiérarchie : 52px → 36px → 24px → 16px → 14px

---

## Décision Finale

**Approche sélectionnée : Minimalisme Contemporain & Contraste Dramatique**

Cette approche est la plus appropriée pour un portfolio professionnel car elle :
- Maximise la lisibilité et la crédibilité (crucial pour les recruteurs)
- Permet au contenu (projets, compétences) de briller sans distractions
- Crée une impression de professionnalisme et de maîtrise
- Est intemporelle et ne risque pas de sembler "datée" rapidement
- Facilite la navigation et la compréhension rapide du portfolio

Les autres approches, bien que visuellement intéressantes, pourraient distraire du message principal ou sembler moins professionnelles pour un contexte de recrutement.
