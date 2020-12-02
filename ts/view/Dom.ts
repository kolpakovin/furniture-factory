import { Room } from '../logic/Room';
import { ModernChair, GothicChair } from '../furniture/Chair';
import { AvailableFurniture } from '../logic/FurnitureFactory';
import { ModernSofa, GothicSofa } from '../furniture/Sofa';
import { ModernTable, GothicTable } from '../furniture/Table';
import { GothicFurnitureFactory } from '../logic/GothicFurnitureFactory';
import { ModernFurnitureFactory } from '../logic/ModernFurnitureFactory'

export class Dom {
    modernChairInput = document.getElementById('modernChairInput') as HTMLInputElement;
    modernTableInput = document.getElementById('modernTableInput') as HTMLInputElement;
    modernSofaInput = document.getElementById('modernSofaInput') as HTMLInputElement;
    
    gothicChairInput = document.getElementById('gothicChairInput') as HTMLInputElement;
    gothicTableInput = document.getElementById('gothicTableInput') as HTMLInputElement;
    gothicSofaInput = document.getElementById('gothicSofaInput') as HTMLInputElement;
    
    submitButton = document.getElementById('submit') as HTMLButtonElement;
    
    modernFurnitureFactory = new ModernFurnitureFactory();
    gothicFurnitureFactory = new GothicFurnitureFactory();
    
    room = new Room();

    inputs: HTMLInputElement[] = [
        this.modernChairInput, this.modernTableInput, this.modernSofaInput,
        this.gothicChairInput, this.gothicTableInput, this.gothicSofaInput];
    
    furnitureAmount: { [key:string]: number } = {}; 

    constructor() {
        this.addEventListener('change', this.inputs);
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
        this.inputs.forEach((input) => {
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
                        console.log(key)
                        throw new Error('Invalid furniture');
                    
                }
                this.room.addFurnitureToTheRoom(furniture);
                console.log(this.room.furniture)
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