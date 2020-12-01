import { Chair } from '../furniture/Chair';
import { Table } from '../furniture/Table';
import { Sofa } from '../furniture/Sofa';

export interface FurnitureFactoryMethods {
    createChair(): Chair;
    createTable(): Table;
    createSofa(): Sofa;
}

export enum AvailableFurniture  {
    Chair,  Table , Sofa
}


