import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { Component, Input, TrackByFunction, inject } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { PageModule } from '@abp/ng.components/page';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { DemoDetailsStateService } from './demo-details-state.service';
import { DemoDetailsTabsService } from './demo-details-tabs.service';
import { IdentityUserDto } from '@volo/abp.ng.identity/proxy';

@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html',
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, CommercialUiModule, PageModule],
})
export class DemoDetailsComponent {
  @Input()
  set id(id: string) {
    console.log(id);
  }

  @Input()
  set selectedData(selectedData: IdentityUserDto) {
    this.stateService.selectedData$.next(selectedData);
  }

  stateService = inject(DemoDetailsStateService);

  tabsService = inject(DemoDetailsTabsService);

  trackByFn: TrackByFunction<AbstractControl> = (index, item) =>
    Object.keys(item)[0] || index;
}
