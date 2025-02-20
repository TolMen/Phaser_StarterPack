
# 🎮 Phaser Starter Pack
> **Un projet personnel pour expérimenter Phaser et le développement de jeux 2D.** <br>
> --> *Version : [English](README.md)* 📖

## Description
Ce dépôt fournit une base solide pour démarrer rapidement le développement de jeux 2D avec [Phaser](https://phaser.io/), un framework JavaScript populaire pour les jeux. <br>
Ce StarterPack est destiné aux développeurs de tous niveaux, leur permettant de se concentrer directement sur la création du jeu sans se soucier des configurations de base.

## 🎯 Objectifs

Ce StarterPack vise à offrir :  
- Un **point de départ** pour les projets Phaser 3 avec une structure de fichier organisée.
- Des **paramètres de configuration Phaser** standard prêts à l'emploi.
- Une **adaptation automatique de la fenêtre de jeu** pour une expérience utilisateur optimale.
- Des **bonnes pratiques** en matière de modularité et de lisibilité du code.

## ⚙️ Fonctionnalités

#### 1. **Configuration Phaser prête à l'emploi**
   Le fichier `setting.js` contient la configuration du jeu, notamment le moteur de rendu, la taille de la fenêtre et les paramètres physiques. 

#### 2. **Système de redimensionnement automatique**
   Le fichier `resize.js` permet au jeu de s'adapter dynamiquement à la taille de la fenêtre du navigateur, en redimensionnant l'arrière-plan pour correspondre à l'affichage.

#### 3. **Structure modulaire du code**
   Les différents aspects de la configuration, des scènes et des styles sont séparés dans des dossiers dédiés pour une meilleure organisation.


## 🛠️ Installation

### Prérequis
Avant de commencer, installez **Node.js** et **npm** si vous souhaitez ajouter des dépendances.

### Étapes d'installation
1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/votre-utilisateur/Phaser_StarterPack.git
   cd Phaser_StarterPack
   ```
2. **Initialisez un projet npm (facultatif)** pour gérer des dépendances supplémentaires :
   ```bash
   npm init -y
   ```

3. **Lancez le projet** :  
   Ouvrez `index.html` directement ou utilisez "Live Server" sous VS Code pour lancer un serveur local et voir le jeu en action.

## 📁 Structure du Projet

Voici la structure des fichiers dans le dépôt pour une vue d'ensemble rapide :

```plaintext
Phaser_StarterPack/
│
├── assets/                # Contient les ressources (images, CSS, etc.)
│   ├── img/               # Images (arrière-plan, logo, etc.)
│   └── reset.css          # Fichier CSS pour supprimer les marges par défaut et centrer le jeu
│
├── src/                   # Dossier contenant le code JavaScript
│   ├── config/            # Fichiers de configuration (paramètres et redimensionnement)
│   ├── scene/             # Scènes du jeu (par exemple, baseScene.js)
│   └── main.js            # Fichier principal qui démarre le jeu
│
├── index.html             # Fichier HTML de base
└── README.md              # Documentation du projet
```

--

## 📜 Explication des fichiers

#### `index.html`
Le fichier HTML de base. Il inclut Phaser via un CDN et charge le fichier `main.js`. Ce dernier instancie le jeu et lance la scène par défaut.

#### `assets/reset.css`
Ce fichier CSS supprime les marges et remplit l'écran pour le canvas Phaser, centré horizontalement et verticalement. Il garantit que le jeu s'affiche correctement sur divers appareils.

#### `src/main.js`
Ce fichier initialise le jeu en important :  
1. **La configuration** du jeu depuis `setting.js`.  
2. **La fonction de redimensionnement** de `resize.js` pour ajuster le jeu lorsque la fenêtre est redimensionnée.

#### `src/config/setting.js`
Contient la configuration du jeu, incluant :  
- **Moteur de rendu** : Phaser choisit automatiquement WebGL ou Canvas.
- **Dimensions** : Basées sur la taille de la fenêtre (`window.innerWidth` et `window.innerHeight`) pour un plein écran.
- **Physique Arcade** : Utilisation d'une gravité simple pour les jeux 2D.
- **Scènes** : Les scènes à inclure, comme `baseScene`.

#### `src/config/resize.js`
Ce module ajuste la taille du jeu et de ses éléments lorsque la fenêtre change de dimension. Il redimensionne automatiquement l'arrière-plan pour remplir l'écran et se centre dynamiquement.

#### `src/scene/baseScene.js`
La scène par défaut :  
1. **Précharge des images** (`imgBackground` et `logoPhaser`).  
2. **Affiche l'arrière-plan et le logo** centrés et redimensionnés pour s'ajuster à l'écran.  
3. **Possibilité d'animations** en ajoutant du code dans `update()`.

## ✨ Ajouter une nouvelle scène

Pour ajouter une nouvelle scène :  
1. Créez un fichier dans `src/scene/` (ex. `newScene.js`).  
2. Définissez la scène en héritant de `Phaser.Scene`.  
3. Ajoutez la scène dans `src/config/setting.js` :

```javascript
import newScene from "../scene/newScene.js";
const config = {
    // Autres configurations...
    scene: [baseScene, newScene], // Ajoutez la nouvelle scène ici
};
```

## 🤝 Contribution

Les contributions sont bienvenues ! Si vous souhaitez améliorer ce projet, ajouter des fonctionnalités ou corriger des bugs, voici comment contribuer :

1. **Fork le dépôt**.
2. **Clonez votre fork** :
   ```bash
   git clone https://github.com/votre-utilisateur/Phaser_StarterPack.git
   ```
3. **Créez une branche** pour chaque nouvelle fonctionnalité :
   ```bash
   git checkout -b nouvelle-fonctionnalite
   ```
4. **Apportez vos modifications** :
   - Documentez vos changements.
   - Assurez-vous que le code est bien structuré et suit les conventions du projet.
5. **Commit et push** vos modifications :
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   git push origin nouvelle-fonctionnalite
   ```
6. **Ouvrez une pull request** pour proposer vos modifications.

---

Merci d’avoir pris le temps de découvrir ce projet.  
N’hésitez pas à l’explorer, l’apprendre et le modifier ! ✨  

**Pour toute question ou collaboration, n’hésitez pas à me contacter ! 📩**

[TolMen](https://github.com/TolMen) - [LinkedIn](https://www.linkedin.com/in/jessyfrachisse/)

**Bon développement avec Phaser !** 🎮✨
