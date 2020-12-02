import { Room } from '../logic/Room';
import { GothicFurnitureFactory } from '../logic/GothicFurnitureFactory';
import { ModernFurnitureFactory } from '../logic/ModernFurnitureFactory';
export class Dom {
    constructor() {
        this.modernChairInput = document.getElementById('modernChairInput');
        this.modernTableInput = document.getElementById('modernTableInput');
        this.modernSofaInput = document.getElementById('modernSofaInput');
        this.gothicChairInput = document.getElementById('gothicChairInput');
        this.gothicTableInput = document.getElementById('gothicTableInput');
        this.gothicSofaInput = document.getElementById('gothicSofaInput');
        this.submitButton = document.getElementById('submit');
        this.modernFurnitureFactory = new ModernFurnitureFactory();
        this.gothicFurnitureFactory = new GothicFurnitureFactory();
        this.room = new Room();
        this.inputs = [
            this.modernChairInput, this.modernTableInput, this.modernSofaInput,
            this.gothicChairInput, this.gothicTableInput, this.gothicSofaInput
        ];
        this.furnitureAmount = {};
        this.onSubmit = () => {
            this.inputs.forEach((input) => {
                this.furnitureAmount[input.name] = parseInt(input.value);
            });
            this.addFurnitureToRoom();
        };
        this.addEventListener('change', this.inputs);
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
                        console.log(key);
                        throw new Error('Invalid furniture');
                }
                this.room.addFurnitureToTheRoom(furniture);
                console.log(this.room.furniture);
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
