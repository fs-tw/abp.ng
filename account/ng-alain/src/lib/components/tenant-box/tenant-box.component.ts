import { ABP, SetTenant, SessionState, ConfigState } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { Store ,Select} from '@ngxs/store';
import { throwError, Observable } from 'rxjs';

import { AccountService } from '@abp/ng.account';
import { TenantBoxComponent as AbpTenantBoxComponent,Account} from '@abp/ng.account';

@Component({
  selector: 'ng-alain-tenant-box',
  templateUrl: './tenant-box.component.html'
})
export class TenantBoxComponent 
  extends AbpTenantBoxComponent 
  implements Account.TenantBoxComponentInputs, Account.TenantBoxComponentOutputs {
  @Input()
  mainContentRef: TemplateRef<any>;

  @Select(ConfigState.getDeep('multiTenancy.isEnabled'))
  isMultiTenancyEnabled$: Observable<boolean>;
  constructor(
    private _store: Store,
    private _toasterService: ToasterService,
    private _accountService: AccountService
  ) {
    super(_store, _toasterService, _accountService);
  }


}
