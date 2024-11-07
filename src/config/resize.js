// Fonction resizeGame qui permet de redimensionner le jeu en fonction de la taille de la fenêtre
function resizeGame(game) {
    // Redimensionne le jeu en ajustant les dimensions de la scène pour correspondre à la taille de la fenêtre
    // Cela permet d'ajuster le jeu en temps réel lorsqu'on redimensionne la fenêtre
    game.scale.resize(window.innerWidth, window.innerHeight);

    // Récupérer la scène actuelle nommée "baseScene" depuis l'instance du jeu
    const scene = game.scene.getScene("baseScene");

    // Vérifie si l'arrière-plan existe dans la scène (si oui, on le redimensionne et le repositionne)
    if (scene.background) {
        // Ajuste la taille de l'arrière-plan à la nouvelle taille de la fenêtre
        scene.background.setDisplaySize(window.innerWidth, window.innerHeight);

        // Repositionne l'arrière-plan pour qu'il soit centré dans la fenêtre du navigateur
        scene.background.setPosition(
            window.innerWidth / 2, // Centre l'arrière-plan sur l'axe X (largeur de la fenêtre)
            window.innerHeight / 2 // Centre l'arrière-plan sur l'axe Y (hauteur de la fenêtre)
        );
    }
}

// Exportation de la fonction resizeGame pour l'utiliser ailleurs dans le projet
export { resizeGame };
