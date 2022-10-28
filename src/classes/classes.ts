import {IAbstractFactory, IProduct, ISolid, IWindowCase} from "../interfaces";

export class FilmFactory implements IAbstractFactory {
    public createSolidFacade(): ISolid {
        return new SolidFilmFacade();
    }

    public createWindowCaseFacade(): IWindowCase {
        return new WindowCaseFilmFacade();
    }

}

export class PaintedFactory implements IAbstractFactory {
    public createSolidFacade(): ISolid {
        return new SolidPaintedFacade();
    }


    public createWindowCaseFacade(): IWindowCase {
        return new WindowCasePaintedFacade();
    }
}

export class PlasticFactory implements IAbstractFactory {
    public createSolidFacade(): ISolid {
        return new SolidPlasticFacade();
    }

    public createWindowCaseFacade(): IWindowCase {
        return new WindowCasePlasticFacade();
    }
}

// solid facades

class SolidFilmFacade implements ISolid {
    public getSize(): number {
        return 3;
    }


    public getProductDescription(): string {
        return 'Its solid film facade'
    }

    public getPrice(): number {
        return 5000
    }

    getObj(): IProduct {
        return {
            material:'film',
            size: 3,
            productDescription: 'Its solid film facade',
            price: 5000
        }
    }
}

class SolidPaintedFacade implements ISolid {
    public getSize(): number {
        return 4;
    }


    public getProductDescription(): string {
        return 'Its Solid Painted Facade'
    }

    public getPrice(): number {
        return 7000
    }

    getObj(): IProduct {
        return {
            material:'painted',
            size: 4,
            productDescription: 'Its Solid Painted Facade',
            price: 7000
        }
    }
}

class SolidPlasticFacade implements ISolid {
    public getSize(): number {
        return 2;
    }


    public getProductDescription(): string {
        return 'Its SolidPlasticFacade'
    }

    public getPrice(): number {
        return 8500
    }

    getObj(): IProduct {
        return {
            material:'plastic',
            size: 2,
            productDescription: 'Its SolidPlasticFacade',
            price: 8500
        }
    }
}

// window case facades

class WindowCaseFilmFacade implements IWindowCase {

    public getSize(): number {
        return 2.5;
    }


    public getProductDescription(): string {
        return 'ITS Window Case Film Facade'
    }

    public getPrice(): number {
        return 4000
    }

    getObj(): IProduct {
        return {
            material:'film',
            size: 2.5,
            productDescription: 'ITS Window Case Film Facade',
            price: 4000
        }
    }

}

class WindowCasePaintedFacade implements IWindowCase {

    public getSize(): number {
        return 8;
    }


    public getProductDescription(): string {
        return 'Its Window Case Painted Facade'
    }

    public getPrice(): number {
        return 6000
    }

    getObj(): IProduct {
        return {
            material:'painted',
            size: 8,
            productDescription: 'Its Window Case Painted Facade',
            price: 6000
        }
    }
}

class WindowCasePlasticFacade implements IWindowCase {

    public getSize(): number {
        return 7;
    }

    public getProductDescription(): string {
        return 'its Window CasePlastic Facade'
    }

    public getPrice(): number {
        return 6000
    }

    getObj(): IProduct {
        return {
            material:'plastic',
            size: 7,
            productDescription: 'its Window CasePlastic Facade',
            price: 6000
        }
    }
}

// function clientCode(factory: IAbstractFactory) {
//     const productA = factory.createWindowCaseFacade();
//     const productB = factory.createSolidFacade();
//
//     console.log(productA.getPrice());
//     // console.log(productB.getProductDescription());
// }
//
// clientCode(new FilmFactory());
//
// console.log('');



// console.log('Client: Testing the same client code with the second factory type...');
// clientCode(new PaintedFactory());
//
// console.log('');
//
// console.log('Client: Testing the same client code with the second factory type...');
// clientCode(new PlasticFactory());


