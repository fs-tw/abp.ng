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
export class SidebarComponent {
    /**
     * @param {?} settings
     * @param {?} menuService
     * @param {?} localizationPipe
     */
    constructor(settings, menuService, localizationPipe) {
        this.settings = settings;
        this.menuService = menuService;
        this.localizationPipe = localizationPipe;
        this.routes$.pipe(map((/**
         * @param {?} routes
         * @return {?}
         */
        routes => getVisibleRoutes(routes)))).subscribe((/**
         * @param {?} routes
         * @return {?}
         */
        routes => {
            /** @type {?} */
            let result = [];
            routes.forEach((/**
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
                first.children.forEach((/**
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
                        second.children.forEach((/**
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
        }));
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
    { type: SettingsService },
    { type: MenuService },
    { type: LocalizationPipe }
];
tslib_1.__decorate([
    Select(ConfigState.getOne('routes')),
    tslib_1.__metadata("design:type", Observable)
], SidebarComponent.prototype, "routes$", void 0);
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
    (acc, val) => {
        if (val.invisible)
            return acc;
        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }
        return [...acc, val];
    }), []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFPLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPckMsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBRzNCLFlBQ1MsUUFBeUIsRUFDeEIsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBRm5DLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTs7Z0JBQ3hFLE1BQU0sR0FBVyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUU7O29CQUNqQixLQUFLLEdBQVM7b0JBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7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Q29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVHJhY2tCeUZ1bmN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSwgTWVudVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQUJQLCBDb25maWdTdGF0ZSwgTG9jYWxpemF0aW9uUGlwZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGF5b3V0LXNpZGViYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQge1xyXG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdyb3V0ZXMnKSlcclxuICByb3V0ZXMkOiBPYnNlcnZhYmxlPEFCUC5GdWxsUm91dGVbXT47XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcclxuICAgIHByaXZhdGUgbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbGl6YXRpb25QaXBlOiBMb2NhbGl6YXRpb25QaXBlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJvdXRlcyQucGlwZShtYXAocm91dGVzID0+IGdldFZpc2libGVSb3V0ZXMocm91dGVzKSkpLnN1YnNjcmliZShyb3V0ZXMgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0OiBNZW51W10gPSBbXTtcclxuICAgICAgcm91dGVzLmZvckVhY2goZmlyc3QgPT4ge1xyXG4gICAgICAgIGxldCBncm91cDogTWVudSA9IHtcclxuICAgICAgICAgIHRleHQ6IHRoaXMubG9jYWxpemF0aW9uUGlwZS50cmFuc2Zvcm0oZmlyc3QubmFtZSksXHJcbiAgICAgICAgICBncm91cDogdHJ1ZSxcclxuICAgICAgICAgIGhpZGVJbkJyZWFkY3J1bWI6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGdyb3VwKTtcclxuICAgICAgICBmaXJzdC5jaGlsZHJlbi5mb3JFYWNoKHNlY29uZCA9PiB7XHJcbiAgICAgICAgICBpZiAoc2Vjb25kLmNoaWxkcmVuLmxlbmd0aD09PTApIHtcclxuICAgICAgICAgICAgbGV0IGxlZnQ6IE1lbnUgPSB7XHJcbiAgICAgICAgICAgICAgdGV4dDogdGhpcy5sb2NhbGl6YXRpb25QaXBlLnRyYW5zZm9ybShzZWNvbmQubmFtZSksXHJcbiAgICAgICAgICAgICAgbGluazogc2Vjb25kLnVybCxcclxuICAgICAgICAgICAgICBpY29uOiBzZWNvbmQuaWNvbkNsYXNzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGdyb3VwLmNoaWxkcmVuLnB1c2gobGVmdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vjb25kLmNoaWxkcmVuLmxlbmd0aCE9MCkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogTWVudSA9IHtcclxuICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmxvY2FsaXphdGlvblBpcGUudHJhbnNmb3JtKHNlY29uZC5uYW1lKSxcclxuICAgICAgICAgICAgICBpY29uOiBzZWNvbmQuaWNvbkNsYXNzLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBncm91cC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICBzZWNvbmQuY2hpbGRyZW4uZm9yRWFjaCh0aGlyZCA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IGxlZnQ6IE1lbnUgPSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmxvY2FsaXphdGlvblBpcGUudHJhbnNmb3JtKHRoaXJkLm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgbGluazogdGhpcmQudXJsLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcmQuaWNvbkNsYXNzXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2gobGVmdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5tZW51U2VydmljZS5jbGVhcigpO1xyXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLmFkZChyZXN1bHQpO1xyXG5cclxuXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0VmlzaWJsZVJvdXRlcyhyb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSkge1xyXG4gIHJldHVybiByb3V0ZXMucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgaWYgKHZhbC5pbnZpc2libGUpIHJldHVybiBhY2M7XHJcblxyXG4gICAgaWYgKHZhbC5jaGlsZHJlbiAmJiB2YWwuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIHZhbC5jaGlsZHJlbiA9IGdldFZpc2libGVSb3V0ZXModmFsLmNoaWxkcmVuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gWy4uLmFjYywgdmFsXTtcclxuICB9LCBbXSk7XHJcbn1cclxuIl19