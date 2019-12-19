import { SettingsService, MenuService } from '@delon/theme';
import { Observable } from 'rxjs';
import { ABP, LocalizationPipe } from '@abp/ng.core';
export declare class SidebarComponent {
    settings: SettingsService;
    private menuService;
    private localizationPipe;
    routes$: Observable<ABP.FullRoute[]>;
    constructor(settings: SettingsService, menuService: MenuService, localizationPipe: LocalizationPipe);
}
