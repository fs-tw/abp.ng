import { CoreModule, ListService } from '@abp/ng.core';
import {
  Confirmation,
  ConfirmationService,
  ThemeSharedModule,
  ToasterService,
} from '@abp/ng.theme.shared';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Component, TrackByFunction, inject } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { IdentityUserService } from '@volo/abp.ng.identity/proxy';
import { eDemoNames } from './demo.model';
import { PageModule } from '@abp/ng.components/page';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { DemoStateService } from './demo-state.service';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { DemoDetailsComponent } from './demo-details/demo-details.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eDemoNames.Demo,
    },
  ],
  standalone: true,
  imports: [
    RouterModule,
    CoreModule,
    ThemeSharedModule,
    CommercialUiModule,
    PageModule,
    DemoModalComponent,

    DemoListComponent,
    DemoDetailsComponent,
  ],
})
export class DemoComponent {
  listComponent?: DemoListComponent;

  stateService = inject(DemoStateService);

  confirmationService = inject(ConfirmationService);

  service = inject(IdentityUserService);

  toasterService = inject(ToasterService);

  router = inject(Router);

  activatedRoute = inject(ActivatedRoute);

  trackByFn: TrackByFunction<AbstractControl> = (index, item) =>
    Object.keys(item)[0] || index;

  demoModal = {
    visible: false,
    id: null,
  } as { visible: boolean; id?: string | null };

  onActive($event: object) {
    if ($event instanceof DemoListComponent) this.listComponent = $event;
  }

  navigate(commands: unknown[]) {
    this.router.navigate(commands, { relativeTo: this.activatedRoute });
  }

  loadDatas() {
    this.listComponent?.list.get();
  }

  onAdd() {
    this.demoModal.id = null;
    this.demoModal.visible = true;
  }

  onEdit(id: string) {
    this.demoModal.id = id;
    this.demoModal.visible = true;
  }

  delete(id: string, userName: string) {
    this.confirmationService
      .warn(
        'AbpIdentity::UserDeletionConfirmationMessage',
        'AbpIdentity::AreYouSure',
        {
          messageLocalizationParams: [userName],
        }
      )
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.service.delete(id).subscribe(() => this.loadDatas());
        }
      });
  }

  unlock(id: string) {
    this.service.unlock(id).subscribe(() => {
      this.toasterService.success('AbpIdentity::UserUnlocked');
      this.loadDatas();
    });
  }
}
