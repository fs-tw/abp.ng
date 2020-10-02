import { RolesComponent as AbpRolesComponent } from '@abp/ng.identity';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ListService, PagedAndSortedResultRequestDto } from '@abp/ng.core';

@Component({
  selector: 'ng-alain-roles',
  templateUrl: './roles.component.html',
  providers: [ListService],
})
export class RolesComponent extends AbpRolesComponent implements OnInit {
  constructor(
    private _list: ListService<PagedAndSortedResultRequestDto>,
    private _confirmationService: ConfirmationService,
    private _fb: FormBuilder,
    private _store: Store) {
    super(_list,_confirmationService, _fb, _store);
  }
}
