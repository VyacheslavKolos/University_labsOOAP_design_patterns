import {IProduct} from "./product.interface";

export interface ISolid {

    getSize(): number;

    getProductDescription(): string;

    getPrice(): number;

    getObj():IProduct
}

