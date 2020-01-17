import { Component, Input, TemplateRef, OnInit, Inject } from '@angular/core';
import { Account } from '@abp/ng.account';
import { ReplaceableComponents } from '@abp/ng.core';

@Component({
  selector: 'ng-alain-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
})
export class AuthWrapperComponent
  implements Account.AuthWrapperComponentInputs, Account.AuthWrapperComponentOutputs {
  @Input()
  readonly mainContentRef: TemplateRef<any>;

  @Input()
  readonly cancelContentRef: TemplateRef<any>;
}
