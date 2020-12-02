export class ModernSofa {
    constructor(material = 'cotton and linen', color = 'gray') {
        this.material = 'no material';
        this.color = 'no color';
        this.softSeats = true;
        this.chooseMaterial(material);
        this.design(color);
    }
    chooseMaterial(material) {
        this.material = material;
    }
    design(color) {
        this.color = color;
    }
}
export class GothicSofa {
    constructor(material = 'velvet', color = 'dark blue') {
        this.material = 'no material';
        this.color = 'no color';
        this.hardSeats = true;
        this.chooseMaterial(material);
        this.design(color);
    }
    chooseMaterial(material) {
        this.material = material;
    }
    design(color) {
        this.color = color;
    }
}
