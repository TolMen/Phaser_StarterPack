export default class modelScene extends Phaser.Scene {
    constructor(key) {
        super({ key });
    }

    preload() {
        // Peut être redéfini dans chaque scène si des assets spécifiques doivent être chargés
    }

    create() {
        // Peut être redéfini dans chaque scène pour initialiser les éléments
    }

    update(time, delta) {
        // Peut être redéfini pour les animations ou interactions spécifiques
    }

    // Méthode utilitaire pour centrer un objet sur l'écran
    centerObject(object) {
        object.setPosition(this.scale.width / 2, this.scale.height / 2);
    }
}
