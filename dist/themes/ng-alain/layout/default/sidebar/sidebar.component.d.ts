import { SettingsService, MenuService } from '@delon/theme';
import { RoutesService, TreeNode, ABP, ConfigStateService, LocalizationPipe } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class SidebarComponent {
    settings: SettingsService;
    private menuService;
    readonly routes: RoutesService;
    configStateService: ConfigStateService;
    private localizationPipe;
    constructor(settings: SettingsService, menuService: MenuService, routes: RoutesService, configStateService: ConfigStateService, localizationPipe: LocalizationPipe);
    setMenu(routes: TreeNode<ABP.Route>[]): void;
    isGrantedPolicy(requiredPolicy: string): boolean;
    static ɵfac: i0.ɵɵFactoryDef<SidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SidebarComponent, "layout-sidebar", never, {}, {}, never, never>;
}
