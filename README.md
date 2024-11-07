
# Phaser_StarterPack

Bienvenue dans le **Phaser_StarterPack** ! <br>
Ce pack de démarrage vous permet de créer rapidement des jeux web en utilisant [Phaser](https://phaser.io/), un framework puissant pour le développement de jeux 2D. <br>
Ce repo est conçu pour être facilement cloné et utilisé par tous les développeurs, qu'ils soient débutants ou plus expérimentés. <br>
Il est prêt à l'emploi, avec une structure organisée et des bonnes pratiques en place.

## Qu'est-ce que ce pack de démarrage ?

Ce projet fournit une base solide pour commencer à créer des jeux avec Phaser.

Il est conçu pour vous permettre de vous concentrer directement sur le développement de votre jeu sans avoir à configurer de nombreuses parties essentielles de votre projet.

Vous y trouverez des éléments comme :

- **La configuration Phaser prête à l'emploi** : <br>
`Le jeu est déjà configuré avec la scène par défaut et les dimensions de la fenêtre ajustées en fonction de la taille du navigateur.`

- **Un fichier HTML de base** : <br>
`Il contient l'importation de Phaser via un CDN et un fichier JS pour gérer la logique du jeu.`

- **Des fichiers séparés** : <br>
`Pour une organisation claire du code avec des fichiers dédiés à la configuration, la gestion du redimensionnement de la fenêtre, et la scène de jeu.`

- **Un système de redimensionnement automatique** : <br>
`Le jeu s'ajuste automatiquement à la taille de la fenêtre du navigateur, garantissant une expérience optimale sur tous les appareils.`

- **Des bonnes pratiques** : <br>
`Le code est bien commenté et documenté, avec des exemples de bonnes pratiques pour l'organisation et la gestion des ressources.`

## Fonctionnalités

### 1. **Structure claire et bien documentée**
   - **HTML de base** : Importation de Phaser via un CDN et ajout d'un fichier JavaScript externe pour la logique de jeu.
   - **JavaScript modulaire** : Les fichiers JavaScript sont séparés par fonctionnalité (par exemple, configuration du jeu, redimensionnement de la fenêtre, gestion des scènes).
   - **Phaser 3** : Utilisation de la dernière version de Phaser pour les jeux 2D.

### 2. **Adaptabilité**
   - Le jeu s'ajuste automatiquement à la taille de l'écran via la fonction de redimensionnement.
   - L'arrière-plan et le logo Phaser sont dimensionnés dynamiquement en fonction de la taille de la fenêtre.

### 3. **Prêt à l'emploi**
   - Clonez le repo et commencez à coder directement. Il vous suffit de modifier les fichiers existants ou d'ajouter de nouvelles scènes, logiques de jeu et assets.

## Installation

### Prérequis

Avant de commencer, vous devez avoir **Node.js** et **npm** installés sur votre machine.

1. **Clonez ce repo**
   `git clone https://github.com/votre-utilisateur/Phaser_StarterPack.git`

2. **Installez les dépendances**
   Si vous souhaitez ajouter des dépendances supplémentaires à votre projet (comme des plugins Phaser ou d'autres outils), vous pouvez les installer via npm :
   `npm init -y`

3. **Lancez le projet**
   Vous pouvez ouvrir directement le fichier `index.html` ou utiliser l'extension "Live Server" de VS Code, pour voir le jeu en action.

## Structure du projet

Voici la structure du projet que vous trouverez dans ce repo :

```
Phaser_StarterPack/
│
├── assets/                # Dossier contenant les ressources (images, CSS, etc.)
│   ├── img/               # Images (arrière-plan, logo, etc.)
│   └── reset.css          # Fichier CSS pour le reset et la mise en page
│
├── src/                   # Dossier contenant le code JavaScript
│   ├── config/            # Fichiers de configuration (paramètres, redimensionnement, etc.)
│   ├── scene/             # Scènes du jeu (ex: baseScene.js)
│   └── main.js            # Fichier principal qui démarre le jeu
│
├── index.html             # Fichier HTML de base pour le jeu
└── README.md              # Ce fichier README
```

## Ajouter une nouvelle scène

Pour ajouter une nouvelle scène à votre jeu, suivez ces étapes simples :

1. Créez un nouveau fichier JavaScript dans le dossier `src/scene/` (par exemple, `newScene.js`).
2. Définissez une nouvelle classe de scène en héritant de `Phaser.Scene`.
3. Ajoutez la scène à la configuration du jeu dans `src/config/setting.js` :

```javascript
import newScene from "../scene/newScene.js";  // Importez votre nouvelle scène

const config = {
    // Autres configurations...
    scene: [baseScene, newScene], // Ajoutez votre scène ici
};
```

## Contributions

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, ajouter de nouvelles fonctionnalités, ou corriger des bugs, voici comment vous pouvez contribuer :

### Comment contribuer ?

1. **Fork ce dépôt** : 
   - Cliquez sur le bouton "Fork" en haut à droite de cette page pour créer une copie de ce projet dans votre propre compte GitHub.
   
2. **Clone ton fork sur ton machine** :
   ```bash
   git clone https://github.com/votre-utilisateur/Phaser_StarterPack.git
   cd Phaser_StarterPack
   ```

3. **Crée une branche pour ta fonctionnalité ou ta correction** :
   - Pour chaque nouvelle fonctionnalité ou correction de bug, crée une branche dédiée :
     ```bash
     git checkout -b ma-nouvelle-fonctionnalite
     ```

4. **Fais tes modifications** :
   - Apporte tes modifications au code. N'oublie pas de mettre à jour la documentation et d'ajouter des commentaires clairs dans le code pour expliquer tes changements.
   - Si tu ajoutes une fonctionnalité, essaie de rendre l'architecture du projet aussi modulaire que possible.
   - Si tu corrige un bug, assure-toi de bien tester la correction.

5. **Commit tes modifications** :
   - Une fois que tu as effectué tes changements, commit-les :
     ```bash
     git add .
     git commit -m "Ajout d'une nouvelle fonctionnalité ou correction d'un bug"
     ```

6. **Push tes modifications sur GitHub** :
   - Pousse ta branche vers ton fork :
     ```bash
     git push origin ma-nouvelle-fonctionnalite
     ```

7. **Ouvre une Pull Request** :
   - Ouvre une pull request pour soumettre tes modifications au dépôt principal.
   - Dans ta description de pull request, sois précis sur ce que tu as modifié et pourquoi cela est bénéfique pour le projet.

### Bonnes pratiques pour les contributions

- **Respecte l'architecture** : Ce projet est conçu pour être modulaire, avec des fichiers séparés pour la configuration, les scènes, etc. Assure-toi que tes ajouts respectent cette structure.
- **Code propre** : Assure-toi que ton code est propre, bien formaté, et suit les conventions de nommage.
- **Tests** : Si tu ajoutes de nouvelles fonctionnalités, veille à tester leur bon fonctionnement. Si nécessaire, ajoute des tests unitaires.
- **Documentation** : Documente bien tes modifications dans le code et dans ce fichier README si nécessaire, afin que d'autres développeurs puissent comprendre ton ajout facilement.

### Que puis-je faire ?

Voici quelques idées d'améliorations possibles pour le projet :

- **Ajouter de nouvelles scènes** : Crée de nouvelles scènes de jeu avec différentes mécaniques (ex: un menu, des niveaux, ou un système de score).
- **Améliorer le système de gestion des assets** : Ajouter un gestionnaire de ressources plus avancé ou un préchargement de ressources.
- **Support multilingue** : Ajouter un système de langues pour rendre le jeu accessible à un public international.
- **Ajouter des effets spéciaux** : Créer de nouveaux effets visuels ou sonores à utiliser dans le jeu.
- **Optimisation** : Chercher des moyens d'améliorer les performances du jeu sur différents appareils (mobile, desktop).

Merci de contribuer à ce projet et de partager vos idées !

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus d'informations.

---

**Bon développement avec Phaser !** 🎮✨
