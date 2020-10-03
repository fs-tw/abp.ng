import { PermissionManagementComponent as AbpPermissionManagementComponent, PermissionManagement } from '@abp/ng.permission-management';
import { Component, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';
import { take } from 'rxjs/operators';
@Component({
  selector: 'ng-alain-permission-management',
  styleUrls: ['./permission-management.component.less'],
  templateUrl: './permission-management.component.html'
})
export class PermissionManagementComponent extends AbpPermissionManagementComponent {
  selectAllIndeterminate = false;
  selectAllThisTabIndeterminate = false;

  constructor(private _store: Store, private _renderer: Renderer2) {
    super(_store, _renderer);
  }
  onClickSelectAll() {
    this.selectAllIndeterminate = false;
    this.permissions = this.permissions.map(permission => ({
      ...permission,
      isGranted: this.isGrantedByOtherProviderName(permission.grantedProviders) || this.selectAllTab,
    }));

    this.selectThisTab = this.selectAllTab;
  }
  onClickSelectThisTab() {
    this.selectAllThisTabIndeterminate = false;
    this.selectedGroupPermissions$.pipe(take(1)).subscribe(permissions => {
      permissions.forEach(permission => {
        if (permission.isGranted && this.isGrantedByOtherProviderName(permission.grantedProviders)) return;

        const index = this.permissions.findIndex(per => per.name === permission.name);

        this.permissions = [
          ...this.permissions.slice(0, index),
          { ...this.permissions[index], isGranted: this.selectThisTab },
          ...this.permissions.slice(index + 1)
        ];
      });
    });

    this.setGrantCheckboxState();
  }
  setTabCheckboxState() {
    this.selectedGroupPermissions$.pipe(take(1)).subscribe(permissions => {
      const selectedPermissions = permissions.filter(per => per.isGranted);
      if (selectedPermissions.length === permissions.length) {
        this.selectAllThisTabIndeterminate = false;
        this.selectThisTab = true;
      } else if (selectedPermissions.length === 0) {
        this.selectAllThisTabIndeterminate = false;
        this.selectThisTab = false;
      } else {
        this.selectAllThisTabIndeterminate = true;
      }
    });
  }
  setGrantCheckboxState() {
    const selectedAllPermissions = this.permissions.filter(per => per.isGranted);

    if (selectedAllPermissions.length === this.permissions.length) {
      this.selectAllIndeterminate = false;
      this.selectAllTab = true;
    } else if (selectedAllPermissions.length === 0) {
      this.selectAllIndeterminate = false;
      this.selectAllTab = false;
    } else {
      this.selectAllIndeterminate = true;
    }
  }
}

