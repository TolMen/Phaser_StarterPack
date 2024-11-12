import modelScene from "../config/modelScene.js";
import { assets } from "../config/assets.js";

export default class preloadScene extends modelScene {
    constructor() {
        super("preloadScene" );
    }

    preload() {
        // Barre de chargement
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        // Texte de chargement
        const loadingText = this.make
            .text({
                x: this.cameras.main.width / 2,
                y: this.cameras.main.height / 2 - 50,
                text: "Chargement...",
                style: { font: "20px monospace", fill: "#ffffff" },
            })
            .setOrigin(0.5);

        // Chargement dynamique des assets
        assets.images.forEach((asset) => {
            this.load.image(asset.key, asset.path);
        });

        // Mise à jour de la barre de progression
        this.load.on("progress", (value) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });

        // Destruction de la barre après chargement
        this.load.on("complete", () => {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
        });
    }

    create() {
        // Une fois le chargement terminé, passe à la scène suivante (baseScene)
        this.scene.start("baseScene");
    }
}
