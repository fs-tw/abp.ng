import { SettingTab } from '@abp/ng.theme.shared';
import { OnInit, TrackByFunction } from '@angular/core';
import { Store } from '@ngxs/store';
export declare class SettingManagementComponent implements OnInit {
    private store;
    settings: SettingTab[];
    selected: SettingTab;
    trackByFn: TrackByFunction<SettingTab>;
    constructor(store: Store);
    ngOnInit(): void;
}
