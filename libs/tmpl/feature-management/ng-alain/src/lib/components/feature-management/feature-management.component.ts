import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { FeatureManagementComponent as AbpFeatureManagementComponent, FeaturesService } from '@abp/ng.feature-management';
import { TrackByService } from '@abp/ng.core';

@Component({
  selector: 'ng-alain-feature-management',
  templateUrl: './feature-management.component.html'
})
export class FeatureManagementComponent extends AbpFeatureManagementComponent {
  @Input()
  providerKey: string;

  @Input()
  providerName: string;

  protected _visible;

  @Input()
  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
    this.visibleChange.emit(value);

    if (value) this.openModal();
  }
    
  constructor(
    public readonly _track: TrackByService,
    protected _service: FeaturesService,
    private _store: Store) {
    super(_track,_service,_store);
  }
}
