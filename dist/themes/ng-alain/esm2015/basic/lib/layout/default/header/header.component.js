/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@delon/theme';
export class HeaderComponent {
    /**
     * @param {?} settings
     */
    constructor(settings) {
        this.settings = settings;
    }
    /**
     * @return {?}
     */
    toggleCollapsedSidebar() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }
    /**
     * @return {?}
     */
    searchToggleChange() {
        this.searchToggleStatus = !this.searchToggleStatus;
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-header',
                template: "<div class=\"alain-default__header-logo\">\r\n  <a [routerLink]=\"['/']\" class=\"alain-default__header-logo-link\">\r\n    <img\r\n      class=\"alain-default__header-logo-expanded\"\r\n      src=\"./assets/logo-full.svg\"\r\n      alt=\"{{ settings.app.name }}\"\r\n      style=\"max-height:40px;\"\r\n    />\r\n    <img\r\n      class=\"alain-default__header-logo-collapsed\"\r\n      src=\"./assets/logo.svg\"\r\n      alt=\"{{ settings.app.name }}\"\r\n      style=\"max-height:30px;\"\r\n    />\r\n  </a>\r\n</div>\r\n<div class=\"alain-default__nav-wrap\">\r\n  <ul class=\"alain-default__nav\">\r\n    <!-- Menu -->\r\n    <li>\r\n      <div class=\"alain-default__nav-item\" (click)=\"toggleCollapsedSidebar()\">\r\n        <i nz-icon nzType=\"menu-{{ settings.layout.collapsed ? 'unfold' : 'fold' }}\"></i>\r\n      </div>\r\n    </li>\r\n    <!-- Github Page -->\r\n    <!--<li>\r\n      <a class=\"alain-default__nav-item\" href=\"//github.com/ng-alain/ng-alain\" target=\"_blank\">\r\n        <i nz-icon nzType=\"github\"></i>\r\n      </a>\r\n    </li>-->\r\n    <!-- Lock Page -->\r\n    <!--<li class=\"hidden-mobile\">\r\n      <div class=\"alain-default__nav-item\" routerLink=\"/passport/lock\">\r\n        <i nz-icon nzType=\"lock\"></i>\r\n      </div>\r\n    </li>-->\r\n    <!-- Search Button -->\r\n    <!--<li class=\"hidden-pc\" (click)=\"searchToggleChange()\">\r\n      <div class=\"alain-default__nav-item\">\r\n        <i nz-icon nzType=\"search\"></i>\r\n      </div>\r\n    </li>-->\r\n  </ul>\r\n  <!--<header-search class=\"alain-default__search\" [toggleChange]=\"searchToggleStatus\"></header-search>-->\r\n  <ul class=\"alain-default__nav\">\r\n    <!-- Notify -->\r\n    <!--<li>\r\n      <header-notify></header-notify>\r\n    </li>-->\r\n    <!-- Task -->\r\n    <!--<li class=\"hidden-mobile\">\r\n      <header-task></header-task>\r\n    </li>-->\r\n    <!-- App Icons -->\r\n    <!--<li class=\"hidden-mobile\">\r\n      <header-icon></header-icon>\r\n    </li>-->\r\n    <!-- Settings -->\r\n    <li class=\"hidden-mobile\">\r\n      <div\r\n        class=\"alain-default__nav-item\"\r\n        nz-dropdown\r\n        [nzDropdownMenu]=\"settingsMenu\"\r\n        nzTrigger=\"click\"\r\n        nzPlacement=\"bottomRight\"\r\n      >\r\n        <i nz-icon nzType=\"setting\"></i>\r\n      </div>\r\n      <nz-dropdown-menu #settingsMenu=\"nzDropdownMenu\">\r\n        <div nz-menu style=\"width:200px;\">\r\n          <!--<div nz-menu-item>\r\n            <header-fullscreen></header-fullscreen>\r\n          </div>\r\n          <div nz-menu-item>\r\n            <header-storage></header-storage>\r\n          </div>-->\r\n          <div nz-menu-item>\r\n            <header-i18n></header-i18n>\r\n          </div>\r\n        </div>\r\n      </nz-dropdown-menu>\r\n    </li>\r\n    <li class=\"hidden-mobile\">\r\n      <header-user></header-user>\r\n    </li>\r\n  </ul>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [
    { type: SettingsService }
];
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.searchToggleStatus;
    /** @type {?} */
    HeaderComponent.prototype.settings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi9iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvZGVmYXVsdC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU8vQyxNQUFNLE9BQU8sZUFBZTs7OztJQUcxQixZQUFtQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUFHLENBQUM7Ozs7SUFFaEQsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ3JELENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDQzRkFBc0M7Z0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBTlEsZUFBZTs7OztJQVF0Qiw2Q0FBNEI7O0lBRWhCLG1DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGF5b3V0LWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG4gIHNlYXJjaFRvZ2dsZVN0YXR1czogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UpIHt9XHJcblxyXG4gIHRvZ2dsZUNvbGxhcHNlZFNpZGViYXIoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLnNldExheW91dCgnY29sbGFwc2VkJywgIXRoaXMuc2V0dGluZ3MubGF5b3V0LmNvbGxhcHNlZCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hUb2dnbGVDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnNlYXJjaFRvZ2dsZVN0YXR1cyA9ICF0aGlzLnNlYXJjaFRvZ2dsZVN0YXR1cztcclxuICB9XHJcbn1cclxuIl19