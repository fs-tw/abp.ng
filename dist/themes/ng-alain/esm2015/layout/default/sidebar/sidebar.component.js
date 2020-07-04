import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsService, MenuService } from '@delon/theme';
import { RoutesService, ConfigStateService, LocalizationPipe } from '@abp/ng.core';
let SidebarComponent = class SidebarComponent {
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
};
SidebarComponent = __decorate([
    Component({
        selector: 'layout-sidebar',
        template: "<div class=\"alain-default__aside-inner\">\r\n  <!-- <div nz-dropdown nzTrigger=\"click\" [nzDropdownMenu]=\"userMenu\" class=\"alain-default__aside-user\">\r\n    <nz-avatar class=\"alain-default__aside-user-avatar\" [nzSrc]=\"settings.user.avatar\"></nz-avatar>\r\n    <div class=\"alain-default__aside-user-info\">\r\n      <strong>{{ settings.user.name }}</strong>\r\n      <p class=\"mb0\">{{ settings.user.email }}</p>\r\n    </div>\r\n  </div> -->\r\n  <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\r\n    <ul nz-menu>\r\n      <li nz-menu-item routerLink=\"/pro/account/center\">{{ 'menu.account.center' | translate }}</li>\r\n      <li nz-menu-item routerLink=\"/pro/account/settings\">{{ 'menu.account.settings' | translate }}</li>\r\n    </ul>\r\n  </nz-dropdown-menu>\r\n  <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\r\n</div>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [SettingsService,
        MenuService,
        RoutesService,
        ConfigStateService,
        LocalizationPipe])
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBUSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBaUIsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFPbEcsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFDUyxRQUF5QixFQUN4QixXQUF3QixFQUNoQixNQUFxQixFQUM5QixrQkFBc0MsRUFDckMsZ0JBQWtDO1FBSm5DLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNyQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE9BQU8sQ0FBQyxNQUE2QjtRQUNuQyxJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUM7UUFDeEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsY0FBYyxD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IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlLCBNZW51LCBNZW51U2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IFJvdXRlc1NlcnZpY2UsIFRyZWVOb2RlLCBBQlAsIENvbmZpZ1N0YXRlU2VydmljZSwgTG9jYWxpemF0aW9uUGlwZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xheW91dC1zaWRlYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtZW51U2VydmljZTogTWVudVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcm91dGVzOiBSb3V0ZXNTZXJ2aWNlLFxyXG4gICAgcHVibGljIGNvbmZpZ1N0YXRlU2VydmljZTogQ29uZmlnU3RhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbGl6YXRpb25QaXBlOiBMb2NhbGl6YXRpb25QaXBlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJvdXRlcy52aXNpYmxlJC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIHRoaXMuc2V0TWVudSh4KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzZXRNZW51KHJvdXRlczogVHJlZU5vZGU8QUJQLlJvdXRlPltdKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBNZW51W10gPSBbXTtcclxuICAgIGxldCBjb25kaXRpb24gPSAoeDogQUJQLlJvdXRlKSA9PiAhISF4LmludmlzaWJsZSAmJiB0aGlzLmlzR3JhbnRlZFBvbGljeSh4LnJlcXVpcmVkUG9saWN5KTtcclxuICAgIHJvdXRlcy5maWx0ZXIoY29uZGl0aW9uKS5mb3JFYWNoKGZpcnN0ID0+IHtcclxuICAgICAgbGV0IGdyb3VwOiBNZW51ID0ge1xyXG4gICAgICAgIHRleHQ6IHRoaXMubG9jYWxpemF0aW9uUGlwZS50cmFuc2Zvcm0oZmlyc3QubmFtZSksXHJcbiAgICAgICAgZ3JvdXA6IHRydWUsXHJcbiAgICAgICAgaGlkZUluQnJlYWRjcnVtYjogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgfTtcclxuICAgICAgcmVzdWx0LnB1c2goZ3JvdXApO1xyXG4gICAgICBmaXJzdC5jaGlsZHJlbi5maWx0ZXIoY29uZGl0aW9uKS5mb3JFYWNoKHNlY29uZCA9PiB7XHJcbiAgICAgICAgaWYgKHNlY29uZC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIGxldCBsZWZ0OiBNZW51ID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmxvY2FsaXphdGlvblBpcGUudHJhbnNmb3JtKHNlY29uZC5uYW1lKSxcclxuICAgICAgICAgICAgbGluazogc2Vjb25kLnBhdGgsXHJcbiAgICAgICAgICAgIGljb246IHNlY29uZC5pY29uQ2xhc3NcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAobGVmdC5saW5rLnNwbGl0KCcvJykubGVuZ3RoID4gMilcclxuICAgICAgICAgICAgZ3JvdXAuY2hpbGRyZW4ucHVzaChsZWZ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlY29uZC5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgbGV0IG5vZGU6IE1lbnUgPSB7XHJcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubG9jYWxpemF0aW9uUGlwZS50cmFuc2Zvcm0oc2Vjb25kLm5hbWUpLFxyXG4gICAgICAgICAgICBpY29uOiBzZWNvbmQuaWNvbkNsYXNzLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBncm91cC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgc2Vjb25kLmNoaWxkcmVuLmZpbHRlcihjb25kaXRpb24pLmZvckVhY2godGhpcmQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGVmdDogTWVudSA9IHtcclxuICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmxvY2FsaXphdGlvblBpcGUudHJhbnNmb3JtKHRoaXJkLm5hbWUpLFxyXG4gICAgICAgICAgICAgIGxpbms6IHRoaXJkLnBhdGgsXHJcbiAgICAgICAgICAgICAgaWNvbjogdGhpcmQuaWNvbkNsYXNzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChsZWZ0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICB9KTtcclxuICAgIHRoaXMubWVudVNlcnZpY2UuY2xlYXIoKTtcclxuICAgIHRoaXMubWVudVNlcnZpY2UuYWRkKHJlc3VsdCk7XHJcblxyXG4gIH1cclxuICBpc0dyYW50ZWRQb2xpY3kocmVxdWlyZWRQb2xpY3k6IHN0cmluZykge1xyXG4gICAgaWYgKCEhcmVxdWlyZWRQb2xpY3kpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnU3RhdGVTZXJ2aWNlLmdldEdyYW50ZWRQb2xpY3kocmVxdWlyZWRQb2xpY3kpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==