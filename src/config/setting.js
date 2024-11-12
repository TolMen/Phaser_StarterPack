// Import des scènes du jeu
import preloadScene from "../scene/preloadScene.js";
import baseScene from "../scene/baseScene.js";

// Configuration Phaser pour le jeu
const config = {
    type: Phaser.AUTO, // Rendu automatique : WebGL si possible, sinon Canvas
    width: window.innerWidth, // Largeur dynamique pour correspondre à la fenêtre
    height: window.innerHeight, // Hauteur dynamique pour correspondre à la fenêtre

    physics: {
        default: "arcade", // Moteur physique 2D léger
        arcade: {
            gravity: { y: 300 }, // Gravité sur l'axe Y
            debug: false, // Mode débogage désactivé
        },
    },

    scene: [preloadScene, baseScene], // Scène(s) utilisée(s) dans le jeu
};

export default config;
