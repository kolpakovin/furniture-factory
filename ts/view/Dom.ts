import { Room } from '../logic/Room';
import { AvailableFurniture } from '../logic/FurnitureFactory';
import { GothicFurnitureFactory } from '../logic/GothicFurnitureFactory';
import { ModernFurnitureFactory } from '../logic/ModernFurnitureFactory'

export class Dom {
    inputsIds: string[] = [
        'modernChairInput', 'modernTableInput', 'modernSofaInput',
        'gothicChairInput', 'gothicTableInput', 'gothicSofaInput'
    ]
    submitButton = document.getElementById('submit') as HTMLButtonElement;

    elements: { [key: string]: HTMLInputElement } = {}
    
    
    modernFurnitureFactory = new ModernFurnitureFactory();
    gothicFurnitureFactory = new GothicFurnitureFactory();
    
    room = new Room();
    furnitureAmount: { [key:string]: number } = {}; 

    constructor() {
        this.inputsIds.forEach(inputId => {
            this.elements[inputId] = document.getElementById(inputId) as HTMLInputElement;
        })
        this.addEventListener('change', Object.values(this.elements));
        this.addEventListener('onclick', this.submitButton);
    }

    addEventListener(eventName: string, el: HTMLInputElement[] | HTMLButtonElement): void {
        if(el instanceof Array) {
            el.forEach((input: HTMLInputElement) => {
                input.addEventListener(eventName, (e: Event): void => {
                    this.onInputChange(e.currentTarget as HTMLInputElement);
                })
            })
        } else {
            el.onclick = this.onSubmit;
        }
    }

    onInputChange(el: HTMLInputElement): void {
        const span = document.getElementById(`${el.name}Value`) as HTMLSpanElement;
        span.innerHTML = el.value;
    }

    onSubmit = (): void => {
        Object.values(this.elements).forEach((input) => {
            this.furnitureAmount[input.name] = parseInt(input.value);
        });
        this.addFurnitureToRoom();
    }

    addFurnitureToRoom() {
        this.room.furniture = [];
        for(let key in this.furnitureAmount) {
            for(let i = 0; i < this.furnitureAmount[key]; i++) {
                let furniture: AvailableFurniture;
                switch(key) {
                    case 'modernChair':
                        furniture = this.modernFurnitureFactory.createChair();
                        break;
                    case 'modernSofa':
                        furniture = this.modernFurnitureFactory.createSofa();
                        break;
                    case 'modernTable':
                        furniture = this.modernFurnitureFactory.createTable();
                        break;
                    case 'gothicChair':
                        furniture = this.gothicFurnitureFactory.createChair();
                        break;
                    case 'gothicSofa':
                        furniture = this.gothicFurnitureFactory.createSofa();
                        break;
                    case 'gothicTable':
                        furniture = this.gothicFurnitureFactory.createTable();
                        break;
                    default:
                        throw new Error('Invalid furniture');
                    
                }
                this.room.addFurnitureToTheRoom(furniture);
                this.visualiseRoom()
            }   
        }
    }
    visualiseRoom() {
        const images = document.getElementById('images') as HTMLDivElement;
        images.innerHTML = '';  
        this.room.furniture.forEach(furniture => {
            this.room.visualiseRoom(images, furniture);
        })
    }
}