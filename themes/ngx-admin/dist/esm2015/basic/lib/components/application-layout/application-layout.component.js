/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/application-layout/application-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MENU_ITEMS } from './application-layout-menu';
import { ConfigState, LocalizationPipe } from '@abp/ng.core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NbIconLibraries } from '@nebular/theme';
export class ApplicationLayoutComponent {
    /**
     * @param {?} localizationPipe
     * @param {?} iconLibraries
     */
    constructor(localizationPipe, iconLibraries) {
        this.localizationPipe = localizationPipe;
        this.iconLibraries = iconLibraries;
        this.menu = MENU_ITEMS;
        this.iconLibraries.registerFontPack('fa', { packClass: 'fa' });
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
                    title: this.localizationPipe.transform(first.name),
                    group: true
                };
                result.push(group);
                if (!first.children)
                    return;
                first.children.forEach((/**
                 * @param {?} second
                 * @return {?}
                 */
                second => {
                    if (!second.children || second.children.length === 0) { //left
                        //left
                        /** @type {?} */
                        let left = this.createNbMenuItem(second);
                        result.push(left);
                        return;
                    }
                    if (second.children.length != 0) { //non left
                        //non left
                        /** @type {?} */
                        let node = this.createNbMenuItem(second);
                        node.children = [];
                        result.push(node);
                        second.children.forEach((/**
                         * @param {?} third
                         * @return {?}
                         */
                        third => {
                            /** @type {?} */
                            let left = this.createNbMenuItem(third);
                            node.children.push(left);
                        }));
                    }
                }));
            }));
            //this.menuService.clear();
            //this.menuService.add(result);
            this.menu = result;
        }));
    }
    /**
     * @param {?} router
     * @return {?}
     */
    createNbMenuItem(router) {
        /** @type {?} */
        let result = {
            title: this.localizationPipe.transform(router.name),
            link: router.url
        };
        if (!!router.iconClass) {
            /** @type {?} */
            let params = router.iconClass.split(' ');
            if (params.length === 1) {
                result.icon = router.iconClass;
                return result;
            }
            /** @type {?} */
            let pack = params[0];
            /** @type {?} */
            let iconName = params[1];
            result.icon = {
                icon: iconName,
                pack: pack
            };
        }
        return result;
    }
}
ApplicationLayoutComponent.type = "application" /* application */;
ApplicationLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-admin-layout-application',
                template: `
    <ngx-admin-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-admin-one-column-layout>
  `,
                styles: [".nb-theme-default :host ::ng-deep router-outlet+*{display:block;-webkit-animation:1s fade;animation:1s fade}@-webkit-keyframes fade{from{opacity:0}to{opacity:1}}.nb-theme-dark :host ::ng-deep router-outlet+*{display:block;-webkit-animation:1s fade;animation:1s fade}.nb-theme-cosmic :host ::ng-deep router-outlet+*{display:block;-webkit-animation:1s fade;animation:1s fade}.nb-theme-corporate :host ::ng-deep router-outlet+*{display:block;-webkit-animation:1s fade;animation:1s fade}@keyframes fade{from{opacity:0}to{opacity:1}}"]
            }] }
];
/** @nocollapse */
ApplicationLayoutComponent.ctorParameters = () => [
    { type: LocalizationPipe },
    { type: NbIconLibraries }
];
tslib_1.__decorate([
    Select(ConfigState.getOne('routes')),
    tslib_1.__metadata("design:type", Observable)
], ApplicationLayoutComponent.prototype, "routes$", void 0);
if (false) {
    /** @type {?} */
    ApplicationLayoutComponent.type;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.routes$;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.menu;
    /**
     * @type {?}
     * @private
     */
    ApplicationLayoutComponent.prototype.localizationPipe;
    /**
     * @type {?}
     * @private
     */
    ApplicationLayoutComponent.prototype.iconLibraries;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1sYXlvdXQvYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQWUsV0FBVyxFQUFPLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBWTdELE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBS3JDLFlBQ1UsZ0JBQWtDLEVBQ2xDLGFBQThCO1FBRDlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBSHhDLFNBQUksR0FBRyxVQUFVLENBQUM7UUFLaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFOztnQkFDeEUsTUFBTSxHQUFpQixFQUFFO1lBQzdCLE1B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QUEwQzs7Ozs7SUFDMUMsbURBQXNDOzs7Ozs7QUE0RDFDLFNBQVMsZ0JBQWdCLENBQUMsTUFBdUI7SUFDL0MsT0FBTyxNQUFNLENBQUMsTUFBTTs7Ozs7SUFBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNoQyxJQUFJLEdBQUcsQ0FBQyxTQUFTO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFFOUIsSUFBSSxHQUFHLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1FTlVfSVRFTVMgfSBmcm9tICcuL2FwcGxpY2F0aW9uLWxheW91dC1tZW51JztcclxuaW1wb3J0IHsgZUxheW91dFR5cGUsIENvbmZpZ1N0YXRlLCBBQlAsIExvY2FsaXphdGlvblBpcGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOYk1lbnVJdGVtLCBOYkljb25MaWJyYXJpZXMgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1hZG1pbi1sYXlvdXQtYXBwbGljYXRpb24nLFxyXG4gIHN0eWxlVXJsczogWydhcHBsaWNhdGlvbi1sYXlvdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5neC1hZG1pbi1vbmUtY29sdW1uLWxheW91dD5cclxuICAgICAgPG5iLW1lbnUgW2l0ZW1zXT1cIm1lbnVcIj48L25iLW1lbnU+XHJcbiAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgIDwvbmd4LWFkbWluLW9uZS1jb2x1bW4tbGF5b3V0PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbkxheW91dENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHR5cGUgPSBlTGF5b3V0VHlwZS5hcHBsaWNhdGlvbjtcclxuICBAU2VsZWN0KENvbmZpZ1N0YXRlLmdldE9uZSgncm91dGVzJykpXHJcbiAgcm91dGVzJDogT2JzZXJ2YWJsZTxBQlAuRnVsbFJvdXRlW10+O1xyXG4gIG1lbnUgPSBNRU5VX0lURU1TO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2NhbGl6YXRpb25QaXBlOiBMb2NhbGl6YXRpb25QaXBlLFxyXG4gICAgcHJpdmF0ZSBpY29uTGlicmFyaWVzOiBOYkljb25MaWJyYXJpZXNcclxuICApIHtcclxuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYScsIHsgcGFja0NsYXNzOiAnZmEnIH0pO1xyXG4gICAgdGhpcy5yb3V0ZXMkLnBpcGUobWFwKHJvdXRlcyA9PiBnZXRWaXNpYmxlUm91dGVzKHJvdXRlcykpKS5zdWJzY3JpYmUocm91dGVzID0+IHtcclxuICAgICAgbGV0IHJlc3VsdDogTmJNZW51SXRlbVtdID0gW107XHJcbiAgICAgIHJvdXRlcy5mb3JFYWNoKGZpcnN0ID0+IHtcclxuICAgICAgICBsZXQgZ3JvdXA6IE5iTWVudUl0ZW0gPSB7XHJcbiAgICAgICAgICB0aXRsZTogdGhpcy5sb2NhbGl6YXRpb25QaXBlLnRyYW5zZm9ybShmaXJzdC5uYW1lKSxcclxuICAgICAgICAgIGdyb3VwOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHQucHVzaChncm91cCk7XHJcbiAgICAgICAgaWYgKCFmaXJzdC5jaGlsZHJlbikgcmV0dXJuO1xyXG5cclxuICAgICAgICBmaXJzdC5jaGlsZHJlbi5mb3JFYWNoKHNlY29uZCA9PiB7XHJcbiAgICAgICAgICBpZiAoIXNlY29uZC5jaGlsZHJlbiB8fCBzZWNvbmQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7Ly9sZWZ0XHJcbiAgICAgICAgICAgIGxldCBsZWZ0ID0gdGhpcy5jcmVhdGVOYk1lbnVJdGVtKHNlY29uZCk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxlZnQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vjb25kLmNoaWxkcmVuLmxlbmd0aCAhPSAwKSB7Ly9ub24gbGVmdFxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY3JlYXRlTmJNZW51SXRlbShzZWNvbmQpO1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICBzZWNvbmQuY2hpbGRyZW4uZm9yRWFjaCh0aGlyZCA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IGxlZnQgPSB0aGlzLmNyZWF0ZU5iTWVudUl0ZW0odGhpcmQpO1xyXG4gICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChsZWZ0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgICAvL3RoaXMubWVudVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgLy90aGlzLm1lbnVTZXJ2aWNlLmFkZChyZXN1bHQpO1xyXG5cclxuICAgICAgdGhpcy5tZW51ID0gcmVzdWx0O1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuICBjcmVhdGVOYk1lbnVJdGVtKHJvdXRlcjogQUJQLkZ1bGxSb3V0ZSkge1xyXG4gICAgbGV0IHJlc3VsdDogTmJNZW51SXRlbSA9IHtcclxuICAgICAgdGl0bGU6IHRoaXMubG9jYWxpemF0aW9uUGlwZS50cmFuc2Zvcm0ocm91dGVyLm5hbWUpLFxyXG4gICAgICBsaW5rOiByb3V0ZXIudXJsXHJcbiAgICB9O1xyXG4gICAgaWYgKCEhcm91dGVyLmljb25DbGFzcykge1xyXG4gICAgICBsZXQgcGFyYW1zID0gcm91dGVyLmljb25DbGFzcy5zcGxpdCgnICcpO1xyXG4gICAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHJlc3VsdC5pY29uID0gcm91dGVyLmljb25DbGFzc1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBhY2sgPSBwYXJhbXNbMF07XHJcbiAgICAgIGxldCBpY29uTmFtZSA9IHBhcmFtc1sxXTtcclxuICAgICAgcmVzdWx0Lmljb24gPSB7XHJcbiAgICAgICAgaWNvbjogaWNvbk5hbWUsXHJcbiAgICAgICAgcGFjazogcGFja1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBnZXRWaXNpYmxlUm91dGVzKHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdKSB7XHJcbiAgcmV0dXJuIHJvdXRlcy5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XHJcbiAgICBpZiAodmFsLmludmlzaWJsZSkgcmV0dXJuIGFjYztcclxuXHJcbiAgICBpZiAodmFsLmNoaWxkcmVuICYmIHZhbC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgdmFsLmNoaWxkcmVuID0gZ2V0VmlzaWJsZVJvdXRlcyh2YWwuY2hpbGRyZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbLi4uYWNjLCB2YWxdO1xyXG4gIH0sIFtdKTtcclxufVxyXG5cclxuIl19