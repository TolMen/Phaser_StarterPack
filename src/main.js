// Importe la configuration du jeu
import config from "./config/setting.js";

// Importe la fonction de redimensionnement du jeu
import { resizeGame } from "./config/resize.js";

// Crée une instance de jeu Phaser avec la configuration importée
const game = new Phaser.Game(config);

// Redimensionne le jeu quand la fenêtre est ajustée
window.addEventListener("resize", () => resizeGame(game));
