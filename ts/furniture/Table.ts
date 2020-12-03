export interface Table {
    form: string;
    material: string;
    color: string;
    chooseMaterial(material: string): void;
    createForm(form: string): void;
}

export class ModernTable implements Table {
    form: string = 'no form';
    material: string = 'no material';
    color: string = 'white';

    constructor(form: string = 'rectangle', material: string = 'wood') {
        this.chooseMaterial(material);
        this.createForm(form);
    }

    chooseMaterial(material: string): void {
        this.material = material;
    }
    
    createForm(form: string): void {
        this.form = form;
    }
}

export class GothicTable implements Table {
    form: string = 'no form';
    material: string = 'no material';
    color: string = 'dark brown';

    constructor(form: string = 'circle', material: string = 'metal') {
        this.chooseMaterial(material);
        this.createForm(form);
    }

    chooseMaterial(material: string): void {
        this.material = material;
    }

    createForm(form: string): void {
        this.form = form;
    }
}