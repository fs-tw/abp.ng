import { Component, Inject, inject } from '@angular/core';
import {
  ActionData,
  EXTENSIONS_ACTION_DATA,
} from '@abp/ng.theme.shared/extensions';
import { DemoComponent } from '../demo.component';
import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { DemoStateService } from '../demo-state.service';

@Component({
  selector: 'app-user-dropdown-menu',
  templateUrl: './user-dropdown-menu.component.html',
  standalone: true,
  imports: [CoreModule, NgbDropdownModule, ThemeSharedModule],
})
export class UserDropdownMenuComponent {
  stateService = inject(DemoStateService);
  component: DemoComponent;
  constructor(@Inject(EXTENSIONS_ACTION_DATA) public data: ActionData) {
    this.component = data.getInjected(DemoComponent);
  }

  options = ['AbpIdentity::ExternalUser'];

  isExternalModalVisible = false;

  onAddExternalLogin() {
    this.stateService.setSelected(undefined);
    //this.isExternalModalVisible = true;
  }

  getList() {
    this.component.list.get();
  }
}
