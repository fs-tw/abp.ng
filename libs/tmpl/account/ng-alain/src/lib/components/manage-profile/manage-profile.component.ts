import { fadeIn } from '@abp/ng.theme.shared';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { ManageProfileComponent as AbpManageProfileComponent } from '@abp/ng.account';
import { Store } from '@ngxs/store';

@Component({
    selector: 'ng-alain-manage-profile',
    templateUrl: './manage-profile.component.html',
    styleUrls: ['./manage-profile.component.less'],
    animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])],
})
export class ManageProfileComponent extends AbpManageProfileComponent {

    constructor(private _store:Store){
        super(_store)
    }
}
