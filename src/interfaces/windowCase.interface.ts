import {IProduct} from "./product.interface";

export interface IWindowCase {
    getSize(): number;

    getProductDescription(): string;

    getPrice(): number;

    getObj(): IProduct
}

