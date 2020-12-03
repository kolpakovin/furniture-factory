import { Room } from '../logic/Room';
import { GothicFurnitureFactory } from '../logic/GothicFurnitureFactory';
import { ModernFurnitureFactory } from '../logic/ModernFurnitureFactory';
export class Dom {
    constructor() {
        this.inputsIds = [
            'modernChairInput', 'modernTableInput', 'modernSofaInput',
            'gothicChairInput', 'gothicTableInput', 'gothicSofaInput'
        ];
        this.submitButton = document.getElementById('submit');
        this.elements = {};
        this.modernFurnitureFactory = new ModernFurnitureFactory();
        this.gothicFurnitureFactory = new GothicFurnitureFactory();
        this.room = new Room();
        this.furnitureAmount = {};
        this.onSubmit = () => {
            Object.values(this.elements).forEach((input) => {
                this.furnitureAmount[input.name] = parseInt(input.value);
            });
            this.addFurnitureToRoom();
        };
        this.inputsIds.forEach(inputId => {
            this.elements[inputId] = document.getElementById(inputId);
        });
        this.addEventListener('change', Object.values(this.elements));
        this.addEventListener('onclick', this.submitButton);
    }
    addEventListener(eventName, el) {
        if (el instanceof Array) {
            el.forEach((input) => {
                input.addEventListener(eventName, (e) => {
                    this.onInputChange(e.currentTarget);
                });
            });
        }
        else {
            el.onclick = this.onSubmit;
        }
    }
    onInputChange(el) {
        const span = document.getElementById(`${el.name}Value`);
        span.innerHTML = el.value;
    }
    addFurnitureToRoom() {
        this.room.furniture = [];
        for (let key in this.furnitureAmount) {
            for (let i = 0; i < this.furnitureAmount[key]; i++) {
                let furniture;
                switch (key) {
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
                this.visualiseRoom();
            }
        }
    }
    visualiseRoom() {
        const images = document.getElementById('images');
        images.innerHTML = '';
        this.room.furniture.forEach(furniture => {
            this.room.visualiseRoom(images, furniture);
        });
    }
}
