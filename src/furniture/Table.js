export class ModernTable {
    constructor(form = 'rectangle', material = 'wood') {
        this.form = 'no form';
        this.material = 'no material';
        this.color = 'white';
        this.chooseMaterial(material);
        this.createForm(form);
    }
    chooseMaterial(material) {
        this.material = material;
    }
    createForm(form) {
        this.form = form;
    }
}
export class GothicTable {
    constructor(form = 'circle', material = 'metal') {
        this.form = 'no form';
        this.material = 'no material';
        this.color = 'dark brown';
        this.chooseMaterial(material);
        this.createForm(form);
    }
    chooseMaterial(material) {
        this.material = material;
    }
    createForm(form) {
        this.form = form;
    }
}
