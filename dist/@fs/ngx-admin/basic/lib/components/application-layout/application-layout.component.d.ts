import { eLayoutType, ABP, LocalizationPipe } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { NbMenuItem, NbIconLibraries } from '@nebular/theme';
export declare class ApplicationLayoutComponent {
    private localizationPipe;
    private iconLibraries;
    static type: eLayoutType;
    routes$: Observable<ABP.FullRoute[]>;
    menu: NbMenuItem[];
    constructor(localizationPipe: LocalizationPipe, iconLibraries: NbIconLibraries);
    createNbMenuItem(router: ABP.FullRoute): NbMenuItem;
}
