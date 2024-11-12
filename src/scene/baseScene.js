// Scène de base héritant de Phaser.Scene
export default class baseScene extends Phaser.Scene {
    constructor() {
        super({ key: "baseScene" });
    }

    create() {
        // Ajout et centrage de l'arrière-plan
        this.background = this.add.image(
            this.scale.width / 2,
            this.scale.height / 2,
            "imgBackground"
        );
        this.background.setDisplaySize(this.scale.width, this.scale.height); // Redimensionnement pour occuper tout l'écran

        // Ajout du logo Phaser
        this.add.image(500, 250, "logoPhaser");
    }

    update() {
        // Méthode d'animation (vide ici, mais prête pour les actions répétées)
    }
}
