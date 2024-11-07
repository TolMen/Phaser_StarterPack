// Définition de la scène par défaut qui hérite de Phaser.Scene
export default class baseScene extends Phaser.Scene {
    // Le constructeur initialise la scène avec un nom clé "DefaultScene"
    constructor() {
        super({ key: "baseScene" });
    }

    // La méthode preload est utilisée pour charger les assets (images, sons, etc.)
    preload() {
        // Chargement de l'image de l'arrière-plan
        // L'image "background.jpg" sera stockée sous la clé "imgBackground"
        this.load.image("imgBackground", "assets/img/background.jpg");

        // Chargement du logo Phaser en format WebP
        // L'image "phaserLogo.webp" sera stockée sous la clé "logoPhaser"
        this.load.image("logoPhaser", "assets/img/phaserLogo.webp");
    }

    // La méthode create est appelée une fois que tous les assets sont chargés
    create() {
        // Création de l'arrière-plan et centrage à l'écran
        // "imgBackground" fait référence à l'image que l'on a chargée dans la méthode preload
        // Positionnement de l'arrière-plan au centre de l'écran (en fonction de la taille de la fenêtre)
        this.background = this.add.image(
            window.innerWidth / 2, // Position X (au centre de l'écran)
            window.innerHeight / 2, // Position Y (au centre de l'écran)
            "imgBackground" // Clé de l'image de l'arrière-plan
        );

        // Redimensionnement de l'arrière-plan pour qu'il occupe toute la fenêtre
        this.background.setDisplaySize(window.innerWidth, window.innerHeight);

        // Ajout du logo Phaser au centre de la scène
        // Le logo est placé à la position (500, 250) sur la scène
        this.add.image(500, 250, "logoPhaser");
    }

    // La méthode update est appelée à chaque frame (frame-rate)
    // Elle peut être utilisée pour des animations ou des actions répétées pendant le jeu
    update() {
        // Aucun code de mise à jour spécifique n'est nécessaire ici
        // mais cette fonction peut être utilisée pour des actions continues (par exemple, déplacements, animations)
    }
}
