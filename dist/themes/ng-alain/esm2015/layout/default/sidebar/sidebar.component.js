import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsService, MenuService } from '@delon/theme';
import { RoutesService, ConfigStateService, LocalizationPipe } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@abp/ng.core";
import * as i3 from "ng-zorro-antd/dropdown";
import * as i4 from "ng-zorro-antd/menu";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "@angular/router";
import * as i7 from "@delon/abc/sidebar-nav";
import * as i8 from "@ngx-translate/core";
export class SidebarComponent {
    constructor(settings, menuService, routes, configStateService, localizationPipe) {
        this.settings = settings;
        this.menuService = menuService;
        this.routes = routes;
        this.configStateService = configStateService;
        this.localizationPipe = localizationPipe;
        this.routes.visible$.subscribe(x => {
            this.setMenu(x);
        });
    }
    setMenu(routes) {
        let result = [];
        let condition = (x) => !!!x.invisible && this.isGrantedPolicy(x.requiredPolicy);
        routes.filter(condition).forEach(first => {
            let group = {
                text: this.localizationPipe.transform(first.name),
                group: true,
                hideInBreadcrumb: true,
                children: []
            };
            result.push(group);
            first.children.filter(condition).forEach(second => {
                if (second.children.length === 0) {
                    let left = {
                        text: this.localizationPipe.transform(second.name),
                        link: second.path,
                        icon: second.iconClass
                    };
                    if (left.link.split('/').length > 2)
                        group.children.push(left);
                }
                if (second.children.length != 0) {
                    let node = {
                        text: this.localizationPipe.transform(second.name),
                        icon: second.iconClass,
                        children: []
                    };
                    group.children.push(node);
                    second.children.filter(condition).forEach(third => {
                        let left = {
                            text: this.localizationPipe.transform(third.name),
                            link: third.path,
                            icon: third.iconClass
                        };
                        node.children.push(left);
                    });
                }
            });
        });
        this.menuService.clear();
        this.menuService.add(result);
    }
    isGrantedPolicy(requiredPolicy) {
        if (!!requiredPolicy) {
            return this.configStateService.getGrantedPolicy(requiredPolicy);
        }
        return true;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(i0.ɵɵdirectiveInject(i1.SettingsService), i0.ɵɵdirectiveInject(i1.MenuService), i0.ɵɵdirectiveInject(i2.RoutesService), i0.ɵɵdirectiveInject(i2.ConfigStateService), i0.ɵɵdirectiveInject(i2.LocalizationPipe)); };
SidebarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["layout-sidebar"]], decls: 11, vars: 6, consts: [[1, "alain-default__aside-inner"], ["userMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", "routerLink", "/pro/account/center"], ["nz-menu-item", "", "routerLink", "/pro/account/settings"], [1, "d-block", "py-lg"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "nz-dropdown-menu", null, 1);
        i0.ɵɵelementStart(3, "ul", 2);
        i0.ɵɵelementStart(4, "li", 3);
        i0.ɵɵtext(5);
        i0.ɵɵpipe(6, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "li", 4);
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "sidebar-nav", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 2, "menu.account.center"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 4, "menu.account.settings"));
    } }, directives: [i3.NzDropdownMenuComponent, i4.NzMenuDirective, i5.ɵNzTransitionPatchDirective, i4.NzMenuItemDirective, i6.RouterLink, i7.SidebarNavComponent], pipes: [i8.TranslatePipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{
                selector: 'layout-sidebar',
                templateUrl: './sidebar.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.SettingsService }, { type: i1.MenuService }, { type: i2.RoutesService }, { type: i2.ConfigStateService }, { type: i2.LocalizationPipe }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQVEsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQWlCLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7O0FBT2xHLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFDUyxRQUF5QixFQUN4QixXQUF3QixFQUNoQixNQUFxQixFQUM5QixrQkFBc0MsRUFDckMsZ0JBQWtDO1FBSm5DLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNyQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE9BQU8sQ0FBQyxNQUE2QjtRQUNuQyxJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUM7UUFDeEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFZLEVB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QkFBSztRQUNQLGlCQUFtQjtRQUNuQixrQ0FBaUQ7UUFDbkQsaUJBQU07O1FBTGtELGVBQXVDO1FBQXZDLGlFQUF1QztRQUNyQyxlQUF5QztRQUF6QyxtRUFBeUM7O2tEREZ0RixnQkFBZ0I7Y0FMNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UsIE1lbnUsIE1lbnVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgUm91dGVzU2VydmljZSwgVHJlZU5vZGUsIEFCUCwgQ29uZmlnU3RhdGVTZXJ2aWNlLCBMb2NhbGl6YXRpb25QaXBlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGF5b3V0LXNpZGViYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcclxuICAgIHB1YmxpYyByZWFkb25seSByb3V0ZXM6IFJvdXRlc1NlcnZpY2UsXHJcbiAgICBwdWJsaWMgY29uZmlnU3RhdGVTZXJ2aWNlOiBDb25maWdTdGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvY2FsaXphdGlvblBpcGU6IExvY2FsaXphdGlvblBpcGVcclxuICApIHtcclxuICAgIHRoaXMucm91dGVzLnZpc2libGUkLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgdGhpcy5zZXRNZW51KHgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldE1lbnUocm91dGVzOiBUcmVlTm9kZTxBQlAuUm91dGU+W10pIHtcclxuICAgIGxldCByZXN1bHQ6IE1lbnVbXSA9IFtdO1xyXG4gICAgbGV0IGNvbmRpdGlvbiA9ICh4OiBBQlAuUm91dGUpID0+ICEhIXguaW52aXNpYmxlICYmIHRoaXMuaXNHcmFudGVkUG9saWN5KHgucmVxdWlyZWRQb2xpY3kpO1xyXG4gICAgcm91dGVzLmZpbHRlcihjb25kaXRpb24pLmZvckVhY2goZmlyc3QgPT4ge1xyXG4gICAgICBsZXQgZ3JvdXA6IE1lbnUgPSB7XHJcbiAgICAgICAgdGV4dDogdGhpcy5sb2NhbGl6YXRpb25QaXBlLnRyYW5zZm9ybShmaXJzdC5uYW1lKSxcclxuICAgICAgICBncm91cDogdHJ1ZSxcclxuICAgICAgICBoaWRlSW5CcmVhZGNydW1iOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICB9O1xyXG4gICAgICByZXN1bHQucHVzaChncm91cCk7XHJcbiAgICAgIGZpcnN0LmNoaWxkcmVuLmZpbHRlcihjb25kaXRpb24pLmZvckVhY2goc2Vjb25kID0+IHtcclxuICAgICAgICBpZiAoc2Vjb25kLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgbGV0IGxlZnQ6IE1lbnUgPSB7XHJcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubG9jYWxpemF0aW9uUGlwZS50cmFuc2Zvcm0oc2Vjb25kLm5hbWUpLFxyXG4gICAgICAgICAgICBsaW5rOiBzZWNvbmQucGF0aCxcclxuICAgICAgICAgICAgaWNvbjogc2Vjb25kLmljb25DbGFzc1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmIChsZWZ0Lmxpbmsuc3BsaXQoJy8nKS5sZW5ndGggPiAyKVxyXG4gICAgICAgICAgICBncm91cC5jaGlsZHJlbi5wdXNoKGxlZnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2Vjb25kLmNoaWxkcmVuLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICBsZXQgbm9kZTogTWVudSA9IHtcclxuICAgICAgICAgICAgdGV4dDogdGhpcy5sb2NhbGl6YXRpb25QaXBlLnRyYW5zZm9ybShzZWNvbmQubmFtZSksXHJcbiAgICAgICAgICAgIGljb246IHNlY29uZC5pY29uQ2xhc3MsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGdyb3VwLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICBzZWNvbmQuY2hpbGRyZW4uZmlsdGVyKGNvbmRpdGlvbikuZm9yRWFjaCh0aGlyZCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsZWZ0OiBNZW51ID0ge1xyXG4gICAgICAgICAgICAgIHRleHQ6IHRoaXMubG9jYWxpemF0aW9uUGlwZS50cmFuc2Zvcm0odGhpcmQubmFtZSksXHJcbiAgICAgICAgICAgICAgbGluazogdGhpcmQucGF0aCxcclxuICAgICAgICAgICAgICBpY29uOiB0aGlyZC5pY29uQ2xhc3NcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5wdXNoKGxlZnQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgIH0pO1xyXG4gICAgdGhpcy5tZW51U2VydmljZS5jbGVhcigpO1xyXG4gICAgdGhpcy5tZW51U2VydmljZS5hZGQocmVzdWx0KTtcclxuXHJcbiAgfVxyXG4gIGlzR3JhbnRlZFBvbGljeShyZXF1aXJlZFBvbGljeTogc3RyaW5nKSB7XHJcbiAgICBpZiAoISFyZXF1aXJlZFBvbGljeSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWdTdGF0ZVNlcnZpY2UuZ2V0R3JhbnRlZFBvbGljeShyZXF1aXJlZFBvbGljeSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2FzaWRlLWlubmVyXCI+XHJcbiAgPCEtLSA8ZGl2IG56LWRyb3Bkb3duIG56VHJpZ2dlcj1cImNsaWNrXCIgW256RHJvcGRvd25NZW51XT1cInVzZXJNZW51XCIgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19hc2lkZS11c2VyXCI+XHJcbiAgICA8bnotYXZhdGFyIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fYXNpZGUtdXNlci1hdmF0YXJcIiBbbnpTcmNdPVwic2V0dGluZ3MudXNlci5hdmF0YXJcIj48L256LWF2YXRhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19hc2lkZS11c2VyLWluZm9cIj5cclxuICAgICAgPHN0cm9uZz57eyBzZXR0aW5ncy51c2VyLm5hbWUgfX08L3N0cm9uZz5cclxuICAgICAgPHAgY2xhc3M9XCJtYjBcIj57eyBzZXR0aW5ncy51c2VyLmVtYWlsIH19PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+IC0tPlxyXG4gIDxuei1kcm9wZG93bi1tZW51ICN1c2VyTWVudT1cIm56RHJvcGRvd25NZW51XCI+XHJcbiAgICA8dWwgbnotbWVudT5cclxuICAgICAgPGxpIG56LW1lbnUtaXRlbSByb3V0ZXJMaW5rPVwiL3Byby9hY2NvdW50L2NlbnRlclwiPnt7ICdtZW51LmFjY291bnQuY2VudGVyJyB8IHRyYW5zbGF0ZSB9fTwvbGk+XHJcbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gcm91dGVyTGluaz1cIi9wcm8vYWNjb3VudC9zZXR0aW5nc1wiPnt7ICdtZW51LmFjY291bnQuc2V0dGluZ3MnIHwgdHJhbnNsYXRlIH19PC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9uei1kcm9wZG93bi1tZW51PlxyXG4gIDxzaWRlYmFyLW5hdiBjbGFzcz1cImQtYmxvY2sgcHktbGdcIj48L3NpZGViYXItbmF2PlxyXG48L2Rpdj5cclxuIl19