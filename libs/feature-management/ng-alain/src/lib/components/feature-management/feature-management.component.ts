import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { FeatureManagementComponent as AbpFeatureManagementComponent } from '@abp/ng.feature-management';
@Component({
  selector: 'ng-alain-feature-management',
  templateUrl: './feature-management.component.html'
})
export class FeatureManagementComponent extends AbpFeatureManagementComponent {
    constructor(private _store: Store) {
        super(_store);
    }
}
