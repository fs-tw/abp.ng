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
import { ConfigState, LocalizationPipe } from '@abp/ng.core';
import { map } from 'rxjs/operators';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(settings, menuService, localizationPipe) {
        var _this = this;
        this.settings = settings;
        this.menuService = menuService;
        this.localizationPipe = localizationPipe;
        this.routes$.pipe(map((/**
         * @param {?} routes
         * @return {?}
         */
        function (routes) { return getVisibleRoutes(routes); }))).subscribe((/**
         * @param {?} routes
         * @return {?}
         */
        function (routes) {
            /** @type {?} */
            var result = [];
            routes.forEach((/**
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
                first.children.forEach((/**
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
                        second.children.forEach((/**
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
            _this.menuService.clear();
            _this.menuService.add(result);
        }));
    }
    SidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'layout-sidebar',
                    template: "<div class=\"alain-default__aside-inner\">\r\n  <!--<div nz-dropdown nzTrigger=\"click\" [nzDropdownMenu]=\"userMenu\" class=\"alain-default__aside-user\">\r\n    <nz-avatar class=\"alain-default__aside-user-avatar\" [nzSrc]=\"settings.user.avatar\"></nz-avatar>\r\n    <div class=\"alain-default__aside-user-info\">\r\n      <strong>{{ settings.user.name }}</strong>\r\n      <p class=\"mb0\">{{ settings.user.email }}</p>\r\n    </div>\r\n  </div>\r\n  <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\r\n    <ul nz-menu>\r\n      <li nz-menu-item routerLink=\"/pro/account/center\">{{ 'menu.account.center' | translate }}</li>\r\n      <li nz-menu-item routerLink=\"/pro/account/settings\">{{ 'menu.account.settings' | translate }}</li>\r\n    </ul>\r\n  </nz-dropdown-menu>-->\r\n  <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SidebarComponent.ctorParameters = function () { return [
        { type: SettingsService },
        { type: MenuService },
        { type: LocalizationPipe }
    ]; };
    tslib_1.__decorate([
        Select(ConfigState.getOne('routes')),
        tslib_1.__metadata("design:type", Observable)
    ], SidebarComponent.prototype, "routes$", void 0);
    return SidebarComponent;
}());
export { SidebarComponent };
if (false) {
    /** @type {?} */
    SidebarComponent.prototype.routes$;
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
/**
 * @param {?} routes
 * @return {?}
 */
function getVisibleRoutes(routes) {
    return routes.reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    function (acc, val) {
        if (val.invisible)
            return acc;
        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }
        return tslib_1.__spread(acc, [val]);
    }), []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFPLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFRRSwwQkFDUyxRQUF5QixFQUN4QixXQUF3QixFQUN4QixnQkFBa0M7UUFINUMsaUJBaURDO1FBaERRLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU07O2dCQUNyRSxNQUFNLEdBQVcsRUFBRTtZQUN2QixNQUFNLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsS0FBSzs7b0JBQ2QsS0FBSyxHQUFTO29CQUNoQixJQUFJLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNqRCxL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cnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlLCBNZW51U2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBQlAsIENvbmZpZ1N0YXRlLCBMb2NhbGl6YXRpb25QaXBlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsYXlvdXQtc2lkZWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCB7XHJcbiAgQFNlbGVjdChDb25maWdTdGF0ZS5nZXRPbmUoJ3JvdXRlcycpKVxyXG4gIHJvdXRlcyQ6IE9ic2VydmFibGU8QUJQLkZ1bGxSb3V0ZVtdPjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtZW51U2VydmljZTogTWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvY2FsaXphdGlvblBpcGU6IExvY2FsaXphdGlvblBpcGVcclxuICApIHtcclxuICAgIHRoaXMucm91dGVzJC5waXBlKG1hcChyb3V0ZXMgPT4gZ2V0VmlzaWJsZVJvdXRlcyhyb3V0ZXMpKSkuc3Vic2NyaWJlKHJvdXRlcyA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQ6IE1lbnVbXSA9IFtdO1xyXG4gICAgICByb3V0ZXMuZm9yRWFjaChmaXJzdCA9PiB7XHJcbiAgICAgICAgbGV0IGdyb3VwOiBNZW51ID0ge1xyXG4gICAgICAgICAgdGV4dDogdGhpcy5sb2NhbGl6YXRpb25QaXBlLnRyYW5zZm9ybShmaXJzdC5uYW1lKSxcclxuICAgICAgICAgIGdyb3VwOiB0cnVlLFxyXG4gICAgICAgICAgaGlkZUluQnJlYWRjcnVtYjogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzdWx0LnB1c2goZ3JvdXApO1xyXG4gICAgICAgIGZpcnN0LmNoaWxkcmVuLmZvckVhY2goc2Vjb25kID0+IHtcclxuICAgICAgICAgIGlmIChzZWNvbmQuY2hpbGRyZW4ubGVuZ3RoPT09MCkge1xyXG4gICAgICAgICAgICBsZXQgbGVmdDogTWVudSA9IHtcclxuICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmxvY2FsaXphdGlvblBpcGUudHJhbnNmb3JtKHNlY29uZC5uYW1lKSxcclxuICAgICAgICAgICAgICBsaW5rOiBzZWNvbmQudXJsLFxyXG4gICAgICAgICAgICAgIGljb246IHNlY29uZC5pY29uQ2xhc3NcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZ3JvdXAuY2hpbGRyZW4ucHVzaChsZWZ0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzZWNvbmQuY2hpbGRyZW4ubGVuZ3RoIT0wKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBNZW51ID0ge1xyXG4gICAgICAgICAgICAgIHRleHQ6IHRoaXMubG9jYWxpemF0aW9uUGlwZS50cmFuc2Zvcm0oc2Vjb25kLm5hbWUpLFxyXG4gICAgICAgICAgICAgIGljb246IHNlY29uZC5pY29uQ2xhc3MsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGdyb3VwLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIHNlY29uZC5jaGlsZHJlbi5mb3JFYWNoKHRoaXJkID0+IHtcclxuICAgICAgICAgICAgICBsZXQgbGVmdDogTWVudSA9IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMubG9jYWxpemF0aW9uUGlwZS50cmFuc2Zvcm0odGhpcmQubmFtZSksXHJcbiAgICAgICAgICAgICAgICBsaW5rOiB0aGlyZC51cmwsXHJcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlyZC5pY29uQ2xhc3NcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChsZWZ0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMubWVudVNlcnZpY2UuYWRkKHJlc3VsdCk7XHJcblxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBnZXRWaXNpYmxlUm91dGVzKHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdKSB7XHJcbiAgcmV0dXJuIHJvdXRlcy5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XHJcbiAgICBpZiAodmFsLmludmlzaWJsZSkgcmV0dXJuIGFjYztcclxuXHJcbiAgICBpZiAodmFsLmNoaWxkcmVuICYmIHZhbC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgdmFsLmNoaWxkcmVuID0gZ2V0VmlzaWJsZVJvdXRlcyh2YWwuY2hpbGRyZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbLi4uYWNjLCB2YWxdO1xyXG4gIH0sIFtdKTtcclxufVxyXG4iXX0=