/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layouts/one-column/one-column.layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class OneColumnLayoutComponent {
}
OneColumnLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-admin-one-column-layout',
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-admin-header></ngx-admin-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
    <abp-confirmation></abp-confirmation>
    <abp-toast-container right="30px" bottom="30px"></abp-toast-container>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLWNvbHVtbi5sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluL2Jhc2ljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0cy9vbmUtY29sdW1uL29uZS1jb2x1bW4ubGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTJCMUMsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBekJwQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFFdkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVDs7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtYWRtaW4tb25lLWNvbHVtbi1sYXlvdXQnLFxyXG4gIHN0eWxlVXJsczogWycuL29uZS1jb2x1bW4ubGF5b3V0LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5iLWxheW91dCB3aW5kb3dNb2RlPlxyXG4gICAgICA8bmItbGF5b3V0LWhlYWRlciBmaXhlZD5cclxuICAgICAgICA8bmd4LWFkbWluLWhlYWRlcj48L25neC1hZG1pbi1oZWFkZXI+XHJcbiAgICAgIDwvbmItbGF5b3V0LWhlYWRlcj5cclxuXHJcbiAgICAgIDxuYi1zaWRlYmFyIGNsYXNzPVwibWVudS1zaWRlYmFyXCIgdGFnPVwibWVudS1zaWRlYmFyXCIgcmVzcG9uc2l2ZT5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1tZW51XCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L25iLXNpZGViYXI+XHJcblxyXG4gICAgICA8bmItbGF5b3V0LWNvbHVtbj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJyb3V0ZXItb3V0bGV0XCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L25iLWxheW91dC1jb2x1bW4+XHJcblxyXG4gICAgICA8bmItbGF5b3V0LWZvb3RlciBmaXhlZD5cclxuICAgICAgICA8bmd4LWZvb3Rlcj48L25neC1mb290ZXI+XHJcbiAgICAgIDwvbmItbGF5b3V0LWZvb3Rlcj5cclxuICAgIDwvbmItbGF5b3V0PlxyXG4gICAgPGFicC1jb25maXJtYXRpb24+PC9hYnAtY29uZmlybWF0aW9uPlxyXG4gICAgPGFicC10b2FzdC1jb250YWluZXIgcmlnaHQ9XCIzMHB4XCIgYm90dG9tPVwiMzBweFwiPjwvYWJwLXRvYXN0LWNvbnRhaW5lcj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT25lQ29sdW1uTGF5b3V0Q29tcG9uZW50IHt9XHJcbiJdfQ==