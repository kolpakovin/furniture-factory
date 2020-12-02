import { GothicChair } from "../furniture/Chair";
import { GothicTable } from "../furniture/Table";
import { GothicSofa } from "../furniture/Sofa";
export class GothicFurnitureFactory {
    createChair() {
        return new GothicChair();
    }
    createTable() {
        return new GothicTable();
    }
    createSofa() {
        return new GothicSofa();
    }
}
