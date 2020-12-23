// import { ABP, GetAppConfiguration, SessionState, SetTenant } from '@abp/ng.core';
import { ABP, SessionStateService, CurrentTenantDto, SubscriptionService, AbpApplicationConfigurationService,ConfigStateService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, take, tap } from 'rxjs/operators';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'abp-tenant-box',
  templateUrl: './tenant-box.component.html',
})
export class TenantBoxComponent
  implements Account.TenantBoxComponentInputs, Account.TenantBoxComponentOutputs {

  currentTenant$: Observable<CurrentTenantDto>;

  name: string;

  isModalVisible: boolean;

  modalBusy: boolean;

  constructor(
    private toasterService: ToasterService,
    private accountService: AccountService,
    private sessionStateService: SessionStateService,
    private subscriptionService: SubscriptionService,
    private abpApplicationConfigurationService: AbpApplicationConfigurationService,
    private configStateService: ConfigStateService
  ) {
    this.currentTenant$ = this.sessionStateService.getTenant$()
  }

  onSwitch() {
    const tenant = this.sessionStateService.getTenant();//this.store.selectSnapshot(SessionState.getTenant);
    this.name = (tenant || ({} as ABP.BasicItem)).name;
    this.isModalVisible = true;
  }

  save() {
    if (!this.name) {
      this.setTenant(null);
      this.isModalVisible = false;
      return;
    }

    this.modalBusy = true;
    this.accountService
      .findTenant(this.name)
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(({ success, tenantId: id, name }) => {
        if (!success) {
          this.showError();
          return;
        }

        this.setTenant({ id, name });
        this.isModalVisible = false;
      });
  }

  private setTenant(tenant: ABP.BasicItem) {
    this.sessionStateService.setTenant(tenant as CurrentTenantDto);
    this.subscriptionService.addOne(
      this.sessionStateService.getTenant$(),
      (x) => {
        this.abpApplicationConfigurationService.get().pipe(tap(x => this.configStateService.setState(x))).subscribe();
      });
  }

  private showError() {
    this.toasterService.error('AbpUiMultiTenancy::GivenTenantIsNotAvailable', 'AbpUi::Error', {
      messageLocalizationParams: [this.name],
    });
  }
}
