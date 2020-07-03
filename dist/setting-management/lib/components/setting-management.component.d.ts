import { ABP, SettingTabsService } from '@abp/ng.core';
import { OnDestroy, OnInit, TrackByFunction } from '@angular/core';
import { Store } from '@ngxs/store';
export declare class SettingManagementComponent implements OnDestroy, OnInit {
    private store;
    private settingTabs;
    private subscription;
    settings: ABP.Tab[];
    set selected(value: ABP.Tab);
    get selected(): ABP.Tab;
    trackByFn: TrackByFunction<ABP.Tab>;
    constructor(store: Store, settingTabs: SettingTabsService);
    ngOnDestroy(): void;
    ngOnInit(): void;
}
