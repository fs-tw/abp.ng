import { SettingsService } from '@delon/theme';
import { Config } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
export declare class HeaderComponent {
    settings: SettingsService;
    private store;
    get appInfo(): Config.Application;
    searchToggleStatus: boolean;
    constructor(settings: SettingsService, store: Store);
    toggleCollapsedSidebar(): void;
    searchToggleChange(): void;
    static ɵfac: i0.ɵɵFactoryDef<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HeaderComponent, "layout-header", never, {}, {}, never, never>;
}
