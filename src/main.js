// Importation des paramètres de configuration du jeu depuis le fichier "setting.js"
// Ce fichier doit contenir les réglages pour la scène, la taille de la fenêtre, et d'autres paramètres du jeu
import config from "./config/setting.js";

// Importation de la fonction "resizeGame" depuis le fichier "resize.js"
// Cette fonction permet de redimensionner le jeu en fonction de la taille de la fenêtre du navigateur
import { resizeGame } from "./config/resize.js";

// Création de l'instance de jeu avec la configuration importée
// La variable "game" est une nouvelle instance de Phaser.Game, et elle reçoit l'objet "config"
// qui contient tous les paramètres de configuration nécessaires au démarrage du jeu (ex : dimensions de la fenêtre, scène, etc.)
const game = new Phaser.Game(config);

// Ajout d'un écouteur d'événements pour l'événement "resize" du navigateur
// Cela permet de détecter quand la taille de la fenêtre change
window.addEventListener("resize", () => {
    // Lorsque la fenêtre est redimensionnée, on appelle la fonction "resizeGame"
    // qui adaptera la taille du jeu en fonction de la nouvelle taille de la fenêtre
    resizeGame(game);
});
