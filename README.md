# 🎮 Phaser Starter Pack
> **A personal project to experiment with Phaser and 2D game development.** <br>
> --> *Version : [Français](README_FR.md)* 📖

## Description
This repository provides a solid foundation to quickly start developing 2D games with [Phaser](https://phaser.io/), a popular JavaScript framework for games. <br>
This StarterPack is designed for developers of all levels, allowing them to focus directly on game creation without worrying about basic configurations.

## 🎯 Goals

This StarterPack aims to offer :  
- A **starting point** for Phaser 3 projects with an organized file structure.
- **Standard Phaser configuration settings** ready to use.
- **Automatic game window adaptation** for optimal user experience.
- **Best practices** in modularity and code readability.

## ⚙️ Features

#### 1. **Ready-to-use Phaser Configuration**
   The `setting.js` file contains the game configuration, including the rendering engine, window size, and physics settings.

#### 2. **Automatic Resizing System**
   The `resize.js` file allows the game to dynamically adapt to the browser window size, resizing the background to fit the display.

#### 3. **Modular Code Structure**
   Different aspects of configuration, scenes, and styles are separated into dedicated folders for better organization.

## 🛠️ Installation

### Prerequisites
Before getting started, install **Node.js** and **npm** if you want to add dependencies.

### Installation Steps
1. **Clone the repository** :
   ```bash
   git clone https://github.com/your-username/Phaser_StarterPack.git
   cd Phaser_StarterPack
   ```
2. **Initialize an npm project (optional)** to manage additional dependencies :
   ```bash
   npm init -y
   ```

3. **Run the project** :  
   Open `index.html` directly or use "Live Server" in VS Code to launch a local server and see the game in action.

## 📁 Project Structure

Here's an overview of the repository’s file structure :

```plaintext
Phaser_StarterPack/
│
├── assets/                # Contains resources (images, CSS, etc.)
│   ├── img/               # Images (background, logo, etc.)
│   └── reset.css          # CSS file to remove default margins and center the game
│
├── src/                   # Folder containing JavaScript code
│   ├── config/            # Configuration files (settings and resizing)
│   ├── scene/             # Game scenes (e.g., baseScene.js)
│   └── main.js            # Main file that starts the game
│
├── index.html             # Base HTML file
└── README.md              # Project documentation
```

## 📜 File Explanations

#### `index.html`
The main HTML file. It includes Phaser via a CDN and loads the `main.js` file. This file initializes the game and launches the default scene.

#### `assets/reset.css`
This CSS file removes margins and fills the screen for the Phaser canvas, centering it both horizontally and vertically. It ensures the game displays correctly on various devices.

#### `src/main.js`
This file initializes the game by importing:  
1. **The game configuration** from `setting.js`.  
2. **The resizing function** from `resize.js` to adjust the game when the window is resized.

#### `src/config/setting.js`
Contains the game configuration, including :  
- **Rendering engine** : Phaser automatically selects WebGL or Canvas.
- **Dimensions** : Based on window size (`window.innerWidth` and `window.innerHeight`) for full screen.
- **Arcade Physics** : Simple gravity-based physics for 2D games.
- **Scenes** : Scenes to include, such as `baseScene`.

#### `src/config/resize.js`
This module adjusts the game size and its elements when the window resizes. It automatically resizes the background to fill the screen and centers it dynamically.

#### `src/scene/baseScene.js`
The default scene :  
1. **Preloads images** (`imgBackground` and `logoPhaser`).  
2. **Displays the background and logo** centered and resized to fit the screen.  
3. **Supports animations** by adding code in `update()`.

## ✨ Adding a New Scene

To add a new scene :  
1. Create a file in `src/scene/` (e.g., `newScene.js`).  
2. Define the scene by extending `Phaser.Scene`.  
3. Add the scene in `src/config/setting.js`:

```javascript
import newScene from "../scene/newScene.js";
const config = {
    // Other configurations...
    scene: [baseScene, newScene], // Add the new scene here
};
```

## 🤝 Contribution

Contributions are welcome ! If you want to improve this project, add features, or fix bugs, here’s how to contribute :

1. **Fork the repository**.
2. **Clone your fork** :
   ```bash
   git clone https://github.com/your-username/Phaser_StarterPack.git
   ```
3. **Create a branch** for each new feature :
   ```bash
   git checkout -b new-feature
   ```
4. **Make your changes** :
   - Document your changes.
   - Ensure the code is well-structured and follows project conventions.
5. **Commit and push** your changes :
   ```bash
   git commit -m "Added a new feature"
   git push origin new-feature
   ```
6. **Open a pull request** to propose your changes.

---

Thank you for taking the time to explore this project.  
Feel free to explore, learn, and modify it ! ✨  

**For any questions or collaborations, feel free to contact me ! 📩**

[TolMen](https://github.com/TolMen) - [LinkedIn](https://www.linkedin.com/in/jessyfrachisse/)

**Happy development with Phaser !** 🎮✨
