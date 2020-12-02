export interface Sofa {
    material: string;
    color: string;
    chooseMaterial(material: string): void;
    design(color: string): void;
}

export class ModernSofa implements Sofa {
    material: string = 'no material';
    color: string = 'no color';
    softSeats = true;


    constructor(
        material: string = 'cotton and linen',
        color: string = 'gray'
    ) {
        this.chooseMaterial(material);
        this.design(color);
    }

    chooseMaterial(material: string): void {
        this.material = material
    }

    design(color: string): void {
        this.color = color;
    }
}

export class GothicSofa implements Sofa {
    material: string = 'no material';
    color: string = 'no color';
    hardSeats = true;

    constructor(
        material: string = 'velvet',
        color: string = 'dark blue'
    ) {
        this.chooseMaterial(material);
        this.design(color);
    }

    chooseMaterial(material: string): void {
        this.material = material;
    }

    design(color: string): void {
        this.color = color;
    }
}