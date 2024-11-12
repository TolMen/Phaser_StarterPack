import modelScene from "../config/modelScene.js";

// Scène de base héritant de Phaser.Scene
export default class baseScene extends modelScene {
    constructor() {
        super("baseScene");
    }

    create() {
        // Ajout et centrage de l'arrière-plan
        this.background = this.add.image(
            0, 
            0,
            "imgBackground"
        );
        this.background.setDisplaySize(this.scale.width, this.scale.height); // Redimensionnement pour occuper tout l'écran
        this.centerObject(this.background);

        // Ajout du logo Phaser
        const logo = this.add.image(500, 250, "logoPhaser");
        this.centerObject(logo);
    }

    update() {
        // Méthode d'animation (vide ici, mais prête pour les actions répétées)
    }
}
