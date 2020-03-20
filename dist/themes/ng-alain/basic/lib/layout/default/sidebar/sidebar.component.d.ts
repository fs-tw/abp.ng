import { SettingsService, MenuService } from '@delon/theme';
import { Observable } from 'rxjs';
import { ABP, LocalizationPipe, ConfigStateService } from '@abp/ng.core';
export declare class SidebarComponent {
    configStateService: ConfigStateService;
    settings: SettingsService;
    private menuService;
    private localizationPipe;
    auth$: Observable<ABP.FullRoute[]>;
    constructor(configStateService: ConfigStateService, settings: SettingsService, menuService: MenuService, localizationPipe: LocalizationPipe);
    setMenu(routes: any): void;
    isGrantedPolicy(requiredPolicy: string): boolean;
}
