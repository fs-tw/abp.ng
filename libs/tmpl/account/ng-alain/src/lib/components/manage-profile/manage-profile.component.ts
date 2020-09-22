import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { eAccountComponents } from '@abp/ng.account';
import { GetProfile, ProfileState } from '@abp/ng.core';

@Component({
    selector: 'ng-alain-manage-profile',
    templateUrl: './manage-profile.component.html',
    styleUrls: ['./manage-profile.component.less'],
})
export class ManageProfileComponent implements OnInit {
    selectedTab = 0;
    changePasswordKey = eAccountComponents.ChangePassword;

    personalSettingsKey = eAccountComponents.PersonalSettings;

    isProfileLoaded: boolean;

    hideChangePasswordTab: boolean;
     currentProfile;
    constructor(private store: Store) { }


    ngOnInit() {
        this.store.dispatch(new GetProfile()).subscribe(() => {
            this.isProfileLoaded = true;
            this.currentProfile = this.store.selectSnapshot(ProfileState.getProfile);
            if (this.store.selectSnapshot(ProfileState.getProfile).isExternal) {
                this.hideChangePasswordTab = true;
                this.selectedTab = 1;
            }
        });
    }
}
