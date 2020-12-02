import { Chair, ModernChair, GothicChair } from '../furniture/Chair';
import { Table, ModernTable, GothicTable } from '../furniture/Table';
import { Sofa, ModernSofa, GothicSofa } from '../furniture/Sofa';


export interface FurnitureFactoryMethods {
    createChair(): Chair;
    createTable(): Table;
    createSofa(): Sofa;
}

export type AvailableFurniture = Chair | Sofa | Table;

export type FurnitureInstance = 
    ModernChair | GothicChair | 
    ModernTable | GothicTable |
    ModernSofa | GothicSofa 

// export enum AvailableFurniture  {
//     ModernChair, ModernTable, ModernSofa,
//     GothicChair, GothicTable, GothicSofa
// }


