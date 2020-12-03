export class GothicChair {
    constructor(color = 'black') {
        this.peacesState = 'not connected';
        this.color = 'no color';
        this.metalChairLeg = true;
        this.connectAllPeases();
        this.paintTheChair(color);
    }
    connectAllPeases() {
        this.peacesState = 'connected';
    }
    paintTheChair(color) {
        this.color = color;
    }
}
export class ModernChair {
    constructor(color = 'white') {
        this.peacesState = 'not connected';
        this.color = 'no color';
        this.comfortableChairBack = true;
        this.connectAllPeases();
        this.paintTheChair(color);
    }
    connectAllPeases() {
        this.peacesState = 'connected';
    }
    paintTheChair(color) {
        this.color = color;
    }
}
