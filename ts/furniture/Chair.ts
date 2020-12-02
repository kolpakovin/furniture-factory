export interface Chair {
    peacesState: string;
    color: string;
    connectAllPeases(): void;
    paintTheChair(c: string) :void;
}

export class GothicChair implements Chair {
    peacesState: string = 'not connected';
    color: string = 'no color'; 
    metalChairLeg = true;

    constructor(color: string = 'black') {
        this.connectAllPeases();
        this.paintTheChair(color);
    }

    connectAllPeases(): void {
        this.peacesState = 'connected';
    }

    paintTheChair(color: string) :void {
        this.color = color;
    }
}

export class ModernChair implements Chair {
    peacesState: string = 'not connected';
    comfortableChairBack = true;

    constructor(public color: string = 'white') {
        this.connectAllPeases();
        this.paintTheChair(color);
    }
    connectAllPeases(): void {
        this.peacesState = 'connected';
    }
    paintTheChair(color: string) :void {
        this.color = color;
    }
}