import { FurnitureFactoryMethods } from "./FurnitureFactory";
import { Chair, GothicChair } from "../furniture/Chair";
import { Table, GothicTable } from "../furniture/Table";
import { Sofa, GothicSofa } from "../furniture/Sofa";

export class GothicFurnitureFactory implements FurnitureFactoryMethods {
    createChair(): Chair {
        return new GothicChair();
    }
    createTable(): Table {
        return new GothicTable();
    }
    createSofa(): Sofa {
        return new GothicSofa();
    }
}