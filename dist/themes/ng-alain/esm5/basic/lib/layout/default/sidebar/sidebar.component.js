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
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(configStateService, settings, menuService, localizationPipe) {
        var _this = this;
        this.configStateService = configStateService;
        this.settings = settings;
        this.menuService = menuService;
        this.localizationPipe = localizationPipe;
        this.auth$.pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            /** @type {?} */
            var routes = _this.configStateService.getOne('routes');
            _this.setMenu(routes);
        }))).subscribe();
    }
    /**
     * @param {?} routes
     * @return {?}
     */
    SidebarComponent.prototype.setMenu = /**
     * @param {?} routes
     * @return {?}
     */
    function (routes) {
        var _this = this;
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var condition = (/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !!!x.invisible && _this.isGrantedPolicy(x.requiredPolicy); });
        routes.filter(condition).forEach((/**
         * @param {?} first
         * @return {?}
         */
        function (first) {
            /** @type {?} */
            var group = {
                text: _this.localizationPipe.transform(first.name),
                group: true,
                hideInBreadcrumb: true,
                children: []
            };
            result.push(group);
            first.children.filter(condition).forEach((/**
             * @param {?} second
             * @return {?}
             */
            function (second) {
                if (second.children.length === 0) {
                    /** @type {?} */
                    var left = {
                        text: _this.localizationPipe.transform(second.name),
                        link: second.url,
                        icon: second.iconClass
                    };
                    if (left.link.split('/').length > 2)
                        group.children.push(left);
                }
                if (second.children.length != 0) {
                    /** @type {?} */
                    var node_1 = {
                        text: _this.localizationPipe.transform(second.name),
                        icon: second.iconClass,
                        children: []
                    };
                    group.children.push(node_1);
                    second.children.filter(condition).forEach((/**
                     * @param {?} third
                     * @return {?}
                     */
                    function (third) {
                        /** @type {?} */
                        var left = {
                            text: _this.localizationPipe.transform(third.name),
                            link: third.url,
                            icon: third.iconClass
                        };
                        node_1.children.push(left);
                    }));
                }
            }));
        }));
        this.menuService.clear();
        this.menuService.add(result);
    };
    /**
     * @param {?} requiredPolicy
     * @return {?}
     */
    SidebarComponent.prototype.isGrantedPolicy = /**
     * @param {?} requiredPolicy
     * @return {?}
     */
    function (requiredPolicy) {
        if (!!requiredPolicy) {
            return this.configStateService.getGrantedPolicy(requiredPolicy);
        }
        return true;
    };
    SidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'layout-sidebar',
                    template: "<div class=\"alain-default__aside-inner\">\r\n  <!--<div nz-dropdown nzTrigger=\"click\" [nzDropdownMenu]=\"userMenu\" class=\"alain-default__aside-user\">\r\n    <nz-avatar class=\"alain-default__aside-user-avatar\" [nzSrc]=\"settings.user.avatar\"></nz-avatar>\r\n    <div class=\"alain-default__aside-user-info\">\r\n      <strong>{{ settings.user.name }}</strong>\r\n      <p class=\"mb0\">{{ settings.user.email }}</p>\r\n    </div>\r\n  </div>\r\n  <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\r\n    <ul nz-menu>\r\n      <li nz-menu-item routerLink=\"/pro/account/center\">{{ 'menu.account.center' | translate }}</li>\r\n      <li nz-menu-item routerLink=\"/pro/account/settings\">{{ 'menu.account.settings' | translate }}</li>\r\n    </ul>\r\n  </nz-dropdown-menu>-->\r\n  <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SidebarComponent.ctorParameters = function () { return [
        { type: ConfigStateService },
        { type: SettingsService },
        { type: MenuService },
        { type: LocalizationPipe }
    ]; };
    tslib_1.__decorate([
        Select(ConfigState.getOne('auth')),
        tslib_1.__metadata("design:type", Observable)
    ], SidebarComponent.prototype, "auth$", void 0);
    return SidebarComponent;
}());
export { SidebarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFPLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN0RixPQUFPLEVBQU8sR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUM7SUFTRSwwQkFDUyxrQkFBc0MsRUFDdEMsUUFBeUIsRUFDeEIsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSjVDLGlCQVVDO1FBVFEsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUM7O2dCQUNmLE1BQU0sR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNyRCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxrQ0FBTzs7OztJQUFQLFVBQVEsTUFB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QkFDaEQ7Ozs7Z0JBUDRDLGtCQUFrQjtnQkFIdEQsZUFBZTtnQkFBRSxXQUFXO2dCQUdWLGdCQUFnQjs7SUFVekM7UUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzswQ0FDNUIsVUFBVTttREFBa0I7SUFrRXJDLHVCQUFDO0NBQUEsQUF6RUQsSUF5RUM7U0FwRVksZ0JBQWdCOzs7SUFDM0IsaUNBQ21DOztJQUdqQyw4Q0FBNkM7O0lBQzdDLG9DQUFnQzs7Ozs7SUFDaEMsdUNBQWdDOzs7OztJQUNoQyw0Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlLCBNZW51U2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBQlAsIENvbmZpZ1N0YXRlLCBMb2NhbGl6YXRpb25QaXBlLCBDb25maWdTdGF0ZVNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGF5b3V0LXNpZGViYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQge1xyXG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdhdXRoJykpXHJcbiAgYXV0aCQ6IE9ic2VydmFibGU8QUJQLkZ1bGxSb3V0ZVtdPjtcclxuICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb25maWdTdGF0ZVNlcnZpY2U6IENvbmZpZ1N0YXRlU2VydmljZSxcclxuICAgIHB1YmxpYyBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtZW51U2VydmljZTogTWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvY2FsaXphdGlvblBpcGU6IExvY2FsaXphdGlvblBpcGVcclxuICApIHtcclxuICAgIHRoaXMuYXV0aCQucGlwZSh0YXAoeCA9PiB7XHJcbiAgICAgIHZhciByb3V0ZXMgPSB0aGlzLmNvbmZpZ1N0YXRlU2VydmljZS5nZXRPbmUoJ3JvdXRlcycpO1xyXG4gICAgICB0aGlzLnNldE1lbnUocm91dGVzKTtcclxuICAgIH0pKS5zdWJzY3JpYmUoKTsgICAgXHJcbiAgfVxyXG5cclxuICBzZXRNZW51KHJvdXRlczogYW55KSB7XHJcbiAgICBsZXQgcmVzdWx0OiBNZW51W10gPSBbXTtcclxuICAgIGxldCBjb25kaXRpb24gPSAoeDogQUJQLkZ1bGxSb3V0ZSkgPT4gISEheC5pbnZpc2libGUgJiYgdGhpcy5pc0dyYW50ZWRQb2xpY3koeC5yZXF1aXJlZFBvbGljeSk7XHJcbiAgICByb3V0ZXMuZmlsdGVyKGNvbmRpdGlvbikuZm9yRWFjaChmaXJzdCA9PiB7XHJcbiAgICAgIGxldCBncm91cDogTWVudSA9IHtcclxuICAgICAgICB0ZXh0OiB0aGlzLmxvY2FsaXphdGlvblBpcGUudHJhbnNmb3JtKGZpcnN0Lm5hbWUpLFxyXG4gICAgICAgIGdyb3VwOiB0cnVlLFxyXG4gICAgICAgIGhpZGVJbkJyZWFkY3J1bWI6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdXHJcbiAgICAgIH07XHJcbiAgICAgIHJlc3VsdC5wdXNoKGdyb3VwKTtcclxuICAgICAgZmlyc3QuY2hpbGRyZW4uZmlsdGVyKGNvbmRpdGlvbikuZm9yRWFjaChzZWNvbmQgPT4ge1xyXG4gICAgICAgIGlmIChzZWNvbmQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBsZXQgbGVmdDogTWVudSA9IHtcclxuICAgICAgICAgICAgdGV4dDogdGhpcy5sb2NhbGl6YXRpb25QaXBlLnRyYW5zZm9ybShzZWNvbmQubmFtZSksXHJcbiAgICAgICAgICAgIGxpbms6IHNlY29uZC51cmwsXHJcbiAgICAgICAgICAgIGljb246IHNlY29uZC5pY29uQ2xhc3NcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAobGVmdC5saW5rLnNwbGl0KCcvJykubGVuZ3RoID4gMilcclxuICAgICAgICAgICAgZ3JvdXAuY2hpbGRyZW4ucHVzaChsZWZ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlY29uZC5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgbGV0IG5vZGU6IE1lbnUgPSB7XHJcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubG9jYWxpemF0aW9uUGlwZS50cmFuc2Zvcm0oc2Vjb25kLm5hbWUpLFxyXG4gICAgICAgICAgICBpY29uOiBzZWNvbmQuaWNvbkNsYXNzLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBncm91cC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgc2Vjb25kLmNoaWxkcmVuLmZpbHRlcihjb25kaXRpb24pLmZvckVhY2godGhpcmQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGVmdDogTWVudSA9IHtcclxuICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmxvY2FsaXphdGlvblBpcGUudHJhbnNmb3JtKHRoaXJkLm5hbWUpLFxyXG4gICAgICAgICAgICAgIGxpbms6IHRoaXJkLnVybCxcclxuICAgICAgICAgICAgICBpY29uOiB0aGlyZC5pY29uQ2xhc3NcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5wdXNoKGxlZnQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgIH0pO1xyXG4gICAgdGhpcy5tZW51U2VydmljZS5jbGVhcigpO1xyXG4gICAgdGhpcy5tZW51U2VydmljZS5hZGQocmVzdWx0KTtcclxuXHJcbiAgfVxyXG5cclxuICBpc0dyYW50ZWRQb2xpY3kocmVxdWlyZWRQb2xpY3k6IHN0cmluZykge1xyXG4gICAgaWYgKCEhcmVxdWlyZWRQb2xpY3kpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnU3RhdGVTZXJ2aWNlLmdldEdyYW50ZWRQb2xpY3kocmVxdWlyZWRQb2xpY3kpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSAgXHJcbn1cclxuXHJcblxyXG4iXX0=