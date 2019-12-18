import { ABP, SetTenant, SessionState } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import snq from 'snq';
import { AccountService } from '@abp/ng.account/services/account.service';//'../../../../../../../packages/account/src/lib/services/account.service';
import { TenantBoxComponent as AbpTenantBoxComponent} from '@abp/ng.account/components/tenant-box/tenant-box.component';//'../../../../../../../packages/account/src/lib/components/tenant-box/tenant-box.component';

@Component({
  selector: 'ng-alain-tenant-box',
  templateUrl: './tenant-box.component.html'
})
export class TenantBoxComponent extends AbpTenantBoxComponent implements OnInit {
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
