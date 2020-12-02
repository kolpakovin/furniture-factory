import { ModernChair } from "../furniture/Chair";
import { ModernTable } from "../furniture/Table";
import { ModernSofa } from "../furniture/Sofa";
export class ModernFurnitureFactory {
    createChair() {
        return new ModernChair();
    }
    createTable() {
        return new ModernTable();
    }
    createSofa() {
        return new ModernSofa();
    }
}
