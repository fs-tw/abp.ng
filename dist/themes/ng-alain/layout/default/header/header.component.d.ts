import { SettingsService } from '@delon/theme';
import { Config } from '@abp/ng.core';
import { Store } from '@ngxs/store';
export declare class HeaderComponent {
    settings: SettingsService;
    private store;
    get appInfo(): Config.Application;
    searchToggleStatus: boolean;
    constructor(settings: SettingsService, store: Store);
    toggleCollapsedSidebar(): void;
    searchToggleChange(): void;
}
