import {ISolid} from "./solid.intrerface";
import {IWindowCase} from "./windowCase.interface";

export interface IAbstractFactory {
    createSolidFacade(): ISolid;

    createWindowCaseFacade(): IWindowCase;
}
