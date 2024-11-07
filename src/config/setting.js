// Importation de la scène "baseScene" depuis le fichier "baseScene.js"
// Cette scène contiendra la logique de jeu que tu souhaites implémenter dans ton jeu
import baseScene from "../scene/baseScene.js";

// Configuration du jeu Phaser dans un objet "config"
const config = {
    // Définition du type de rendu du jeu : Phaser choisira automatiquement le meilleur moteur de rendu disponible
    // "Phaser.AUTO" choisit WebGL si possible, sinon il utilisera le rendu Canvas
    type: Phaser.AUTO,

    // Définition de la largeur du jeu basée sur la taille de la fenêtre du navigateur
    // Cela fait que le jeu occupera toute la largeur de l'écran
    width: window.innerWidth,

    // Définition de la hauteur du jeu basée sur la taille de la fenêtre du navigateur
    // Cela fait que le jeu occupera toute la hauteur de l'écran
    height: window.innerHeight,

    // Configuration du moteur physique du jeu, ici on utilise la physique "arcade"
    physics: {
        // Le type de physique utilisé est "arcade", qui est une physique simple et rapide pour des jeux 2D
        default: "arcade",
        arcade: {
            // Définition de la gravité appliquée aux objets physiques sur l'axe Y (vers le bas)
            gravity: { y: 300 }, // Valeur positive pour la gravité (attirer les objets vers le bas)

            // Debug est défini sur false pour ne pas afficher d'informations de débogage à l'écran
            debug: false,
        },
    },

    // Définition des scènes à charger et utiliser dans le jeu
    // Ici, seule la scène "baseScene" est incluse dans cette configuration
    scene: [baseScene],
};

// Exportation de la configuration pour pouvoir l'utiliser ailleurs dans le jeu
export default config;
