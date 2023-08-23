import {
  collapse,
  ThemeSharedModule,
  ToasterService,
} from '@abp/ng.theme.shared';
import { Component, inject, Injector } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { PageModule } from '@abp/ng.components/page';
import { CoreModule } from '@abp/ng.core';
import { IdentityUserService } from '@volo/abp.ng.identity/proxy';
import { DemoStateService } from '../demo-state.service';

@Component({
  selector: 'app-two-factor',
  templateUrl: 'two-factor.component.html',
  animations: [collapse],
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, PageModule],
})
export class TwoFactorComponent {
  public injector = inject(Injector);
  private fb = inject(UntypedFormBuilder);
  public service = inject(IdentityUserService);
  public stateService = inject(DemoStateService);
  private toasterService = inject(ToasterService);

  twoFactorForm!: UntypedFormGroup;

  saving = false;
  constructor() {
    this.service
      .getTwoFactorEnabled(this.stateService.getSelected()?.id as string)
      .subscribe((res) => {
        this.twoFactorForm = this.fb.group({
          checkboxValue: [res],
        });
      });
  }

  save() {
    if (this.saving || this.twoFactorForm.invalid) return;

    this.saving = true;
    this.service
      .setTwoFactorEnabled(
        this.stateService.getSelected()?.id as string,
        this.twoFactorForm.value.checkboxValue
      )
      .pipe(finalize(() => (this.saving = false)))
      .subscribe(() => {
        this.toasterService.success('Demo::SuccessfullySaved');
        this.twoFactorForm.reset();
        this.stateService.setSelected(undefined);
      });
  }
}
