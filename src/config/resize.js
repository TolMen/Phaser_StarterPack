function resizeGame(game) {
    // Ajuste la taille de la scène de jeu à celle de la fenêtre
    game.scale.resize(window.innerWidth, window.innerHeight);

    // Récupère la scène actuelle nommée "baseScene"
    const scene = game.scene.getScene("baseScene");

    if (scene && scene.background) {
        // Redimensionne et centre l'arrière-plan pour correspondre à la nouvelle taille de la fenêtre
        scene.background.setDisplaySize(scene.scale.width, scene.scale.height);
        scene.background.setPosition(
            scene.scale.width / 2,
            scene.scale.height / 2
        );
    }
}

export { resizeGame };
