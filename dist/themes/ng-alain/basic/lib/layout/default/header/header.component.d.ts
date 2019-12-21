import { SettingsService } from '@delon/theme';
export declare class HeaderComponent {
    settings: SettingsService;
    searchToggleStatus: boolean;
    constructor(settings: SettingsService);
    toggleCollapsedSidebar(): void;
    searchToggleChange(): void;
}
