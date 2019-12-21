/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/layouts/three-columns/three-columns.layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var ThreeColumnsLayoutComponent = /** @class */ (function () {
    function ThreeColumnsLayoutComponent() {
    }
    ThreeColumnsLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-three-columns-layout',
                    template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
                }] }
    ];
    return ThreeColumnsLayoutComponent;
}());
export { ThreeColumnsLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZWUtY29sdW1ucy5sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0B0aGVtZS9sYXlvdXRzL3RocmVlLWNvbHVtbnMvdGhyZWUtY29sdW1ucy5sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDO0lBQUE7SUE2QjBDLENBQUM7O2dCQTdCMUMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBRXBDLFFBQVEsRUFBRSwyb0JBd0JUOztpQkFDRjs7SUFDeUMsa0NBQUM7Q0FBQSxBQTdCM0MsSUE2QjJDO1NBQTlCLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtdGhyZWUtY29sdW1ucy1sYXlvdXQnLFxyXG4gIHN0eWxlVXJsczogWycuL3RocmVlLWNvbHVtbnMubGF5b3V0LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5iLWxheW91dCB3aW5kb3dNb2RlPlxyXG4gICAgICA8bmItbGF5b3V0LWhlYWRlciBmaXhlZD5cclxuICAgICAgICA8bmd4LWhlYWRlcj48L25neC1oZWFkZXI+XHJcbiAgICAgIDwvbmItbGF5b3V0LWhlYWRlcj5cclxuXHJcbiAgICAgIDxuYi1zaWRlYmFyIGNsYXNzPVwibWVudS1zaWRlYmFyXCIgdGFnPVwibWVudS1zaWRlYmFyXCIgcmVzcG9uc2l2ZT5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1tZW51XCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L25iLXNpZGViYXI+XHJcblxyXG4gICAgICA8bmItbGF5b3V0LWNvbHVtbiBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgIDwvbmItbGF5b3V0LWNvbHVtbj5cclxuXHJcbiAgICAgIDxuYi1sYXlvdXQtY29sdW1uPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInJvdXRlci1vdXRsZXRcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmItbGF5b3V0LWNvbHVtbj5cclxuXHJcbiAgICAgIDxuYi1sYXlvdXQtY29sdW1uIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgPC9uYi1sYXlvdXQtY29sdW1uPlxyXG5cclxuICAgICAgPG5iLWxheW91dC1mb290ZXIgZml4ZWQ+XHJcbiAgICAgICAgPG5neC1mb290ZXI+PC9uZ3gtZm9vdGVyPlxyXG4gICAgICA8L25iLWxheW91dC1mb290ZXI+XHJcbiAgICA8L25iLWxheW91dD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhyZWVDb2x1bW5zTGF5b3V0Q29tcG9uZW50IHt9XHJcbiJdfQ==