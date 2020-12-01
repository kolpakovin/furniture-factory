import { FurnitureFactoryMethods } from "./FurnitureFactory";
import { Chair, ModernChair } from "../furniture/Chair";
import { Table, ModernTable } from "../furniture/Table";
import { Sofa, ModernSofa } from "../furniture/Sofa";

export class ModernFurnitureFactory implements FurnitureFactoryMethods {
    createChair(): Chair {
        return new ModernChair();
    }
    createTable(): Table {
        return new ModernTable();
    }
    createSofa(): Sofa {
        return new ModernSofa();
    }
}