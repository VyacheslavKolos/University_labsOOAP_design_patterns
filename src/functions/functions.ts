import {IAbstractFactory, IProduct} from "../interfaces";
import {Dispatch, SetStateAction} from "react";

export function switchFunction(answer: string, counter: number, order: IProduct[], setAnswer: Dispatch<SetStateAction<string>>, filmFactory: IAbstractFactory, paintedFactory: IAbstractFactory, plasticFactory: IAbstractFactory) {
    switch (answer) {
        case '1':
            counter = 0;
            if (order.length === 0) {
                const filmSolid = filmFactory.createSolidFacade()
                order.push(filmSolid.getObj())
                setAnswer('0')
                console.log(order);
            } else {
                order.map(product => {
                    if (product.material === 'film') {
                        counter++;
                        if (counter === 1) {
                            const filmSolid = filmFactory.createSolidFacade()
                            order.push(filmSolid.getObj())
                            setAnswer('0')
                            console.log(order);
                        }
                    } else {
                        alert(`Ви можете додати тільки ${product.material} фасад!`)

                    }
                })
            }
            break;

        case '2':
            counter = 0
            if (order.length === 0) {
                const filmWindowCase = filmFactory.createWindowCaseFacade()
                order.push(filmWindowCase.getObj())
                setAnswer('0')
            } else {
                order.map(product => {
                    if (product.material === 'film') {
                        counter++;
                        if (counter === 1) {
                            const filmWindowCase = filmFactory.createWindowCaseFacade()
                            order.push(filmWindowCase.getObj())
                            setAnswer('0')
                        }
                    } else {
                         alert(`Ви можете додати тільки ${product.material} фасад!`)
                    }
                })
            }
            break;

        case '3':
            counter = 0
            if (order.length === 0) {
                const paintedSolid = paintedFactory.createSolidFacade()
                order.push(paintedSolid.getObj())
                setAnswer('0')
            } else {
                order.map(product => {
                    if (product.material === 'painted') {
                        counter++;
                        if (counter === 1) {
                            const paintedSolid = paintedFactory.createSolidFacade()
                            order.push(paintedSolid.getObj())
                            setAnswer('0')
                        }
                    } else {
                        alert(`Ви можете додати тільки ${product.material} фасад!`)
                    }
                })
            }
            break;

        case '4':
            counter = 0
            if (order.length === 0) {
                const paintedWindowCase = paintedFactory.createWindowCaseFacade()
                order.push(paintedWindowCase.getObj())
                setAnswer('0')
            } else {
                order.map(product => {
                    if (product.material === 'painted') {
                        counter++;
                        if (counter === 1) {
                            const paintedWindowCase = paintedFactory.createWindowCaseFacade()
                            order.push(paintedWindowCase.getObj())
                            setAnswer('0')
                        }
                    } else {
                      alert(`Ви можете додати тільки ${product.material} фасад!`)
                    }
                })
            }
            break;

        case '5':
            counter = 0
            if (order.length === 0) {
                const plasticSolid = plasticFactory.createWindowCaseFacade()
                order.push(plasticSolid.getObj())
                setAnswer('0')
            } else {
                order.map(product => {
                    if (product.material === 'plastic') {
                        counter++;
                        if (counter === 1) {
                            const plasticSolid = plasticFactory.createWindowCaseFacade()
                            order.push(plasticSolid.getObj())
                            setAnswer('0')
                        }
                    } else {
                          alert(`Ви можете додати тільки ${product.material} фасад!`)
                    }
                })
            }
            break;

        case '6':
            counter = 0;
            if (order.length === 0) {
                const plasticWindowCase = plasticFactory.createWindowCaseFacade()
                order.push(plasticWindowCase.getObj())
                setAnswer('0')
            } else {
                order.map(product => {
                    if (product.material === 'plastic') {
                        counter++;
                        if (counter === 1) {
                            const plasticWindowCase = plasticFactory.createWindowCaseFacade()
                            order.push(plasticWindowCase.getObj())
                            setAnswer('0')
                        }
                    } else {
                        alert(`Ви можете додати тільки ${product.material} фасад!`)
                    }
                })
            }
            break;

        default:
        // answer = prompt('Ви ввели невірне число, введіть ще раз: ')
    }
}
