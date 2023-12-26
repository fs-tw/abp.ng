import { Component, Inject, inject } from '@angular/core';
import {
  ActionData,
  EXTENSIONS_ACTION_DATA,
} from '@abp/ng.theme.shared/extensions';
import { DemoComponent } from '../demo.component';
import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-toolbar',
  templateUrl: './demo-toolbar.component.html',
  standalone: true,
  imports: [CoreModule, NgbDropdownModule, ThemeSharedModule],
})
export class DemoToolbarComponent {
  router = inject(Router);

  component: DemoComponent;

  constructor(@Inject(EXTENSIONS_ACTION_DATA) public data: ActionData) {
    this.component = data.getInjected(DemoComponent);
  }

  options = ['Demo::ExternalLogin'];

  toNavigate(commands: unknown[]) {
    this.component.navigate(commands);
  }
}