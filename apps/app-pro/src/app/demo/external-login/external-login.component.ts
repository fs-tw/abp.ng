import { PageModule } from '@abp/ng.components/page';
import { ABP, CoreModule } from '@abp/ng.core';
import { ExternalLoginTabsService } from './external-login-tabs.service';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { Component, TrackByFunction, inject } from '@angular/core';

@Component({
  selector: 'app-external-login',
  templateUrl: './external-login.component.html',
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, PageModule],
})
export class ExternalLoginComponent {
  tabsService = inject(ExternalLoginTabsService);

  trackByFn: TrackByFunction<ABP.Tab> = (_, item) => item.name;
}
