import { RolesComponent as AbpRolesComponent } from '@abp/ng.identity';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
@Component({
  selector: 'ng-alain-roles',
  templateUrl: './roles.component.html',
})
export class RolesComponent extends AbpRolesComponent implements OnInit {
  constructor(
    private _confirmationService: ConfirmationService,
    private _fb: FormBuilder,
    private _store: Store) {
    super(_confirmationService, _fb, _store);
  }
}
