import { AvailableFurniture, FurnitureInstance } from "./FurnitureFactory";

export class Room {
    furniture: AvailableFurniture[] = [];

    addFurnitureToTheRoom(furniture: AvailableFurniture) {
        this.furniture.push(furniture);
    }

    visualiseRoom(root: HTMLDivElement, furniture: AvailableFurniture) {
        const image = document.createElement("img") as HTMLImageElement;
        switch (furniture.constructor.name) {
            case 'ModernChair':
                image.src = '/modern-chair.8d94ab2a.jpg';
                break;
            case 'ModernTable':
                image.src = '/modern-table.ad992a07.jpg';
                break;
            case 'ModernSofa':
                image.src = '/modern-sofa.e7929329.jpg';
                break;
            case 'GothicChair':
                image.src = '/gothic-chair.495b01aa.png';
                break;
            case 'GothicTable':
                image.src = '/gothic-table.24882c3c.jpeg';
                break;
            case 'GothicSofa':
                image.src = '/gothic-sofa.f5134f72.jpg';
                break;
            default:
                throw new Error('No constructor found')
        }
        image.width = 150;
        image.height = 150;

        root.appendChild(image);
    }
}