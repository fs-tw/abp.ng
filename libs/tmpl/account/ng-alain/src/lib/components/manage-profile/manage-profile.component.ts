import { fadeIn } from '@abp/ng.theme.shared';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'ng-alain-manage-profile',
    templateUrl: './manage-profile.component.html',
    styleUrls: ['./manage-profile.component.less'],
    animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])],
})
export class ManageProfileComponent {
    selectedTab = 0;
}
