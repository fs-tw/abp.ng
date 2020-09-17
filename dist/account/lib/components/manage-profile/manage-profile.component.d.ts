import { OnInit } from '@angular/core';
import { eAccountComponents } from '../../enums/components';
import { Store } from '@ngxs/store';
export declare class ManageProfileComponent implements OnInit {
    private store;
    selectedTab: number;
    changePasswordKey: eAccountComponents;
    personalSettingsKey: eAccountComponents;
    isProfileLoaded: boolean;
    hideChangePasswordTab: boolean;
    constructor(store: Store);
    ngOnInit(): void;
}
