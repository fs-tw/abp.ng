import { ABP, SetTenant, SessionState } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import snq from 'snq';
import { AccountService } from '@abp/ng.account';
import { TenantBoxComponent as AbpTenantBoxComponent,Account} from '@abp/ng.account';

@Component({
  selector: 'ng-alain-tenant-box',
  templateUrl: './tenant-box.component.html'
})
export class TenantBoxComponent 
  extends AbpTenantBoxComponent 
  implements OnInit, Account.TenantBoxComponentInputs, Account.TenantBoxComponentOutputs {
  @Input()
  mainContentRef: TemplateRef<any>;
  constructor(
    private _store: Store,
    private _toasterService: ToasterService,
    private _accountService: AccountService
  ) {
    super(_store, _toasterService, _accountService);
  }


}
