/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/logo/logo.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConfigState } from '@abp/ng.core';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
var LogoComponent = /** @class */ (function () {
    function LogoComponent(store) {
        this.store = store;
    }
    Object.defineProperty(LogoComponent.prototype, "appInfo", {
        get: /**
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot(ConfigState.getApplicationInfo);
        },
        enumerable: true,
        configurable: true
    });
    LogoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-logo',
                    template: "\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <img\n        *ngIf=\"appInfo.logoUrl; else appName\"\n        [src]=\"appInfo.logoUrl\"\n        [alt]=\"appInfo.name\"\n        width=\"100%\"\n        height=\"auto\"\n      />\n    </a>\n\n    <ng-template #appName>\n      {{ appInfo.name }}\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    LogoComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return LogoComponent;
}());
export { LogoComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogoComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLmJhc2ljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBVSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDO0lBdUJFLHVCQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7SUFKcEMsc0JBQUksa0NBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbkUsQ0FBQzs7O09BQUE7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSx3VUFjVDtpQkFDRjs7OztnQkFuQlEsS0FBSzs7SUEwQmQsb0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQU5ZLGFBQWE7Ozs7OztJQUtaLDhCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZywgQ29uZmlnU3RhdGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1sb2dvJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiByb3V0ZXJMaW5rPVwiL1wiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgKm5nSWY9XCJhcHBJbmZvLmxvZ29Vcmw7IGVsc2UgYXBwTmFtZVwiXHJcbiAgICAgICAgW3NyY109XCJhcHBJbmZvLmxvZ29VcmxcIlxyXG4gICAgICAgIFthbHRdPVwiYXBwSW5mby5uYW1lXCJcclxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAvPlxyXG4gICAgPC9hPlxyXG5cclxuICAgIDxuZy10ZW1wbGF0ZSAjYXBwTmFtZT5cclxuICAgICAge3sgYXBwSW5mby5uYW1lIH19XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dvQ29tcG9uZW50IHtcclxuICBnZXQgYXBwSW5mbygpOiBDb25maWcuQXBwbGljYXRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0QXBwbGljYXRpb25JbmZvKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG59XHJcbiJdfQ==