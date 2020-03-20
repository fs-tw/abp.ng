/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/sidebar/sidebar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService, MenuService } from '@delon/theme';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfigState, LocalizationPipe, ConfigStateService } from '@abp/ng.core';
import { tap } from 'rxjs/operators';
export class SidebarComponent {
    /**
     * @param {?} configStateService
     * @param {?} settings
     * @param {?} menuService
     * @param {?} localizationPipe
     */
    constructor(configStateService, settings, menuService, localizationPipe) {
        this.configStateService = configStateService;
        this.settings = settings;
        this.menuService = menuService;
        this.localizationPipe = localizationPipe;
        this.auth$.pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            /** @type {?} */
            var routes = this.configStateService.getOne('routes');
            this.setMenu(routes);
        }))).subscribe();
    }
    /**
     * @param {?} routes
     * @return {?}
     */
    setMenu(routes) {
        /** @type {?} */
        let result = [];
        /** @type {?} */
        let condition = (/**
         * @param {?} x
         * @return {?}
         */
        (x) => !!!x.invisible && this.isGrantedPolicy(x.requiredPolicy));
        routes.filter(condition).forEach((/**
         * @param {?} first
         * @return {?}
         */
        first => {
            /** @type {?} */
            let group = {
                text: this.localizationPipe.transform(first.name),
                group: true,
                hideInBreadcrumb: true,
                children: []
            };
            result.push(group);
            first.children.filter(condition).forEach((/**
             * @param {?} second
             * @return {?}
             */
            second => {
                if (second.children.length === 0) {
                    /** @type {?} */
                    let left = {
                        text: this.localizationPipe.transform(second.name),
                        link: second.url,
                        icon: second.iconClass
                    };
                    if (left.link.split('/').length > 2)
                        group.children.push(left);
                }
                if (second.children.length != 0) {
                    /** @type {?} */
                    let node = {
                        text: this.localizationPipe.transform(second.name),
                        icon: second.iconClass,
                        children: []
                    };
                    group.children.push(node);
                    second.children.filter(condition).forEach((/**
                     * @param {?} third
                     * @return {?}
                     */
                    third => {
                        /** @type {?} */
                        let left = {
                            text: this.localizationPipe.transform(third.name),
                            link: third.url,
                            icon: third.iconClass
                        };
                        node.children.push(left);
                    }));
                }
            }));
        }));
        this.menuService.clear();
        this.menuService.add(result);
    }
    /**
     * @param {?} requiredPolicy
     * @return {?}
     */
    isGrantedPolicy(requiredPolicy) {
        if (!!requiredPolicy) {
            return this.configStateService.getGrantedPolicy(requiredPolicy);
        }
        return true;
    }
}
SidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-sidebar',
                template: "<div class=\"alain-default__aside-inner\">\r\n  <!--<div nz-dropdown nzTrigger=\"click\" [nzDropdownMenu]=\"userMenu\" class=\"alain-default__aside-user\">\r\n    <nz-avatar class=\"alain-default__aside-user-avatar\" [nzSrc]=\"settings.user.avatar\"></nz-avatar>\r\n    <div class=\"alain-default__aside-user-info\">\r\n      <strong>{{ settings.user.name }}</strong>\r\n      <p class=\"mb0\">{{ settings.user.email }}</p>\r\n    </div>\r\n  </div>\r\n  <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\r\n    <ul nz-menu>\r\n      <li nz-menu-item routerLink=\"/pro/account/center\">{{ 'menu.account.center' | translate }}</li>\r\n      <li nz-menu-item routerLink=\"/pro/account/settings\">{{ 'menu.account.settings' | translate }}</li>\r\n    </ul>\r\n  </nz-dropdown-menu>-->\r\n  <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SidebarComponent.ctorParameters = () => [
    { type: ConfigStateService },
    { type: SettingsService },
    { type: MenuService },
    { type: LocalizationPipe }
];
tslib_1.__decorate([
    Select(ConfigState.getOne('auth')),
    tslib_1.__metadata("design:type", Observable)
], SidebarComponent.prototype, "auth$", void 0);
if (false) {
    /** @type {?} */
    SidebarComponent.prototype.auth$;
    /** @type {?} */
    SidebarComponent.prototype.configStateService;
    /** @type {?} */
    SidebarComponent.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.menuService;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.localizationPipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFPLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN0RixPQUFPLEVBQU8sR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPMUMsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7OztJQUkzQixZQUNTLGtCQUFzQyxFQUN0QyxRQUF5QixFQUN4QixXQUF3QixFQUN4QixnQkFBa0M7UUFIbkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTs7Z0JBQ2xCLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxPQUFP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O1lBUDRDLGtCQUFrQjtZQUh0RCxlQUFlO1lBQUUsV0FBVztZQUdWLGdCQUFnQjs7QUFVekM7SUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztzQ0FDNUIsVUFBVTsrQ0FBa0I7OztJQURuQyxpQ0FDbUM7O0lBR2pDLDhDQUE2Qzs7SUFDN0Msb0NBQWdDOzs7OztJQUNoQyx1Q0FBZ0M7Ozs7O0lBQ2hDLDRDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UsIE1lbnVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFCUCwgQ29uZmlnU3RhdGUsIExvY2FsaXphdGlvblBpcGUsIENvbmZpZ1N0YXRlU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsYXlvdXQtc2lkZWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCB7XHJcbiAgQFNlbGVjdChDb25maWdTdGF0ZS5nZXRPbmUoJ2F1dGgnKSlcclxuICBhdXRoJDogT2JzZXJ2YWJsZTxBQlAuRnVsbFJvdXRlW10+O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvbmZpZ1N0YXRlU2VydmljZTogQ29uZmlnU3RhdGVTZXJ2aWNlLFxyXG4gICAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYWxpemF0aW9uUGlwZTogTG9jYWxpemF0aW9uUGlwZVxyXG4gICkge1xyXG4gICAgdGhpcy5hdXRoJC5waXBlKHRhcCh4ID0+IHtcclxuICAgICAgdmFyIHJvdXRlcyA9IHRoaXMuY29uZmlnU3RhdGVTZXJ2aWNlLmdldE9uZSgncm91dGVzJyk7XHJcbiAgICAgIHRoaXMuc2V0TWVudShyb3V0ZXMpO1xyXG4gICAgfSkpLnN1YnNjcmliZSgpOyAgICBcclxuICB9XHJcblxyXG4gIHNldE1lbnUocm91dGVzOiBhbnkpIHtcclxuICAgIGxldCByZXN1bHQ6IE1lbnVbXSA9IFtdO1xyXG4gICAgbGV0IGNvbmRpdGlvbiA9ICh4OiBBQlAuRnVsbFJvdXRlKSA9PiAhISF4LmludmlzaWJsZSAmJiB0aGlzLmlzR3JhbnRlZFBvbGljeSh4LnJlcXVpcmVkUG9saWN5KTtcclxuICAgIHJvdXRlcy5maWx0ZXIoY29uZGl0aW9uKS5mb3JFYWNoKGZpcnN0ID0+IHtcclxuICAgICAgbGV0IGdyb3VwOiBNZW51ID0ge1xyXG4gICAgICAgIHRleHQ6IHRoaXMubG9jYWxpemF0aW9uUGlwZS50cmFuc2Zvcm0oZmlyc3QubmFtZSksXHJcbiAgICAgICAgZ3JvdXA6IHRydWUsXHJcbiAgICAgICAgaGlkZUluQnJlYWRjcnVtYjogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgfTtcclxuICAgICAgcmVzdWx0LnB1c2goZ3JvdXApO1xyXG4gICAgICBmaXJzdC5jaGlsZHJlbi5maWx0ZXIoY29uZGl0aW9uKS5mb3JFYWNoKHNlY29uZCA9PiB7XHJcbiAgICAgICAgaWYgKHNlY29uZC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIGxldCBsZWZ0OiBNZW51ID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmxvY2FsaXphdGlvblBpcGUudHJhbnNmb3JtKHNlY29uZC5uYW1lKSxcclxuICAgICAgICAgICAgbGluazogc2Vjb25kLnVybCxcclxuICAgICAgICAgICAgaWNvbjogc2Vjb25kLmljb25DbGFzc1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmIChsZWZ0Lmxpbmsuc3BsaXQoJy8nKS5sZW5ndGggPiAyKVxyXG4gICAgICAgICAgICBncm91cC5jaGlsZHJlbi5wdXNoKGxlZnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2Vjb25kLmNoaWxkcmVuLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICBsZXQgbm9kZTogTWVudSA9IHtcclxuICAgICAgICAgICAgdGV4dDogdGhpcy5sb2NhbGl6YXRpb25QaXBlLnRyYW5zZm9ybShzZWNvbmQubmFtZSksXHJcbiAgICAgICAgICAgIGljb246IHNlY29uZC5pY29uQ2xhc3MsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGdyb3VwLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICBzZWNvbmQuY2hpbGRyZW4uZmlsdGVyKGNvbmRpdGlvbikuZm9yRWFjaCh0aGlyZCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsZWZ0OiBNZW51ID0ge1xyXG4gICAgICAgICAgICAgIHRleHQ6IHRoaXMubG9jYWxpemF0aW9uUGlwZS50cmFuc2Zvcm0odGhpcmQubmFtZSksXHJcbiAgICAgICAgICAgICAgbGluazogdGhpcmQudXJsLFxyXG4gICAgICAgICAgICAgIGljb246IHRoaXJkLmljb25DbGFzc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2gobGVmdCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1lbnVTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICB0aGlzLm1lbnVTZXJ2aWNlLmFkZChyZXN1bHQpO1xyXG5cclxuICB9XHJcblxyXG4gIGlzR3JhbnRlZFBvbGljeShyZXF1aXJlZFBvbGljeTogc3RyaW5nKSB7XHJcbiAgICBpZiAoISFyZXF1aXJlZFBvbGljeSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWdTdGF0ZVNlcnZpY2UuZ2V0R3JhbnRlZFBvbGljeShyZXF1aXJlZFBvbGljeSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9ICBcclxufVxyXG5cclxuXHJcbiJdfQ==