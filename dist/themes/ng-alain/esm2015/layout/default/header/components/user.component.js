import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { SettingsService } from '@delon/theme';
import { ConfigState, AuthService } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/router";
import * as i3 from "@abp/ng.core";
import * as i4 from "ng-zorro-antd/dropdown";
import * as i5 from "ng-zorro-antd/menu";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/icon";
import * as i8 from "@angular/common";
export class HeaderUserComponent {
    constructor(settings, router, authService, tokenService) {
        this.settings = settings;
        this.router = router;
        this.authService = authService;
        this.tokenService = tokenService;
    }
    logout() {
        //this.tokenService.clear();
        //this.router.navigateByUrl(this.tokenService.login_url);
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/'], { state: { redirectUrl: this.router.url } });
        });
    }
}
HeaderUserComponent.ɵfac = function HeaderUserComponent_Factory(t) { return new (t || HeaderUserComponent)(i0.ɵɵdirectiveInject(i1.SettingsService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(DA_SERVICE_TOKEN)); };
HeaderUserComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderUserComponent, selectors: [["header-user"]], decls: 15, vars: 10, consts: [["nz-dropdown", "", "nzPlacement", "bottomRight", 1, "alain-default__nav-item", "d-flex", "align-items-center", "px-sm", 3, "nzDropdownMenu"], ["userMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "width-sm"], ["nz-menu-item", "", "routerLink", "/account/manage-profile"], ["nz-icon", "", "nzType", "user", 1, "mr-sm"], ["nz-menu-divider", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "logout", 1, "mr-sm"]], template: function HeaderUserComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nz-dropdown-menu", null, 1);
        i0.ɵɵelementStart(5, "div", 2);
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵelement(7, "i", 4);
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "li", 5);
        i0.ɵɵelementStart(11, "div", 6);
        i0.ɵɵlistener("click", function HeaderUserComponent_Template_div_click_11_listener() { return ctx.logout(); });
        i0.ɵɵelement(12, "i", 7);
        i0.ɵɵtext(13);
        i0.ɵɵpipe(14, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        var tmp_1_0 = null;
        i0.ɵɵproperty("nzDropdownMenu", _r0);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", (tmp_1_0 = i0.ɵɵpipeBind1(2, 4, ctx.currentUser$)) == null ? null : tmp_1_0.userName, " ");
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 6, "AbpAccount::ManageYourProfile"), " ");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(14, 8, "AbpUi::Logout"), " ");
    } }, directives: [i4.NzDropDownDirective, i4.NzDropdownMenuComponent, i5.NzMenuDirective, i6.ɵNzTransitionPatchDirective, i5.NzMenuItemDirective, i2.RouterLink, i7.NzIconDirective, i5.NzMenuDividerDirective], pipes: [i8.AsyncPipe, i3.LocalizationPipe], encapsulation: 2, changeDetection: 0 });
__decorate([
    Select(ConfigState.getOne('currentUser')),
    __metadata("design:type", Observable)
], HeaderUserComponent.prototype, "currentUser$", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderUserComponent, [{
        type: Component,
        args: [{
                selector: 'header-user',
                template: `
    <div
      class="alain-default__nav-item d-flex align-items-center px-sm"
      nz-dropdown
      nzPlacement="bottomRight"
      [nzDropdownMenu]="userMenu"
    >
      <!--<nz-avatar [nzSrc]="settings.user.avatar" nzSize="small" class="mr-sm"></nz-avatar>-->
      {{ (currentUser$ | async)?.userName }}
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <div nz-menu-item routerLink="/account/manage-profile">
          <i nz-icon nzType="user" class="mr-sm"></i>
          {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}
        </div>
        <!--<div nz-menu-item routerLink="/pro/account/settings">
          <i nz-icon nzType="setting" class="mr-sm"></i>
          {{ 'menu.account.settings' | translate }}
        </div>
        <div nz-menu-item routerLink="/exception/trigger">
          <i nz-icon nzType="close-circle" class="mr-sm"></i>
          {{ 'menu.account.trigger' | translate }}
        </div>-->
        <li nz-menu-divider></li>
        <div nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          {{ 'AbpUi::Logout' | abpLocalization }}
        </div>
      </div>
    </nz-dropdown-menu>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.SettingsService }, { type: i2.Router }, { type: i3.AuthService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DA_SERVICE_TOKEN]
            }] }]; }, { currentUser$: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL3VzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFpQixNQUFNLGFBQWEsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQTRCLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7QUFzQ3JDLE1BQU0sT0FBTyxtQkFBbUI7SUFHOUIsWUFDUyxRQUF5QixFQUN4QixNQUFjLEVBQ2QsV0FBd0IsRUFDRSxZQUEyQjtRQUh0RCxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDRSxpQkFBWSxHQUFaLFlBQVksQ0FBZTtJQUM1RCxDQUFDO0lBRUosTUFBTTtRQUNKLDRCQUE0QjtRQUM1Qix5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztzRkFoQlUsbUJBQW1CLHdJQU9wQixnQkFBZ0I7d0RBUGYsbUJBQW1CO1FBakM1Qiw4QkFNRTtRQUNBLFlBQ0Y7O1FBQUEsaUJBQU07UUFDTixpREFDRTtRQUFBLDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSx1QkFBMkM7UUFDM0MsWUFDRjs7UUFBQSxpQkFBTTtRQVNOLHlCQUF5QjtRQUN6QiwrQkFDRTtRQURnQiw4RkFBUyxZQUFRLElBQUM7UUFDbEMsd0JBQTZDO1FBQzdDLGFBQ0Y7O1FBQUEsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFtQjs7OztRQXpCakIsb0NBQTJCO1FBRzNCLGVBQ0Y7UUFERSxxSEFDRjtRQUtNLGVBQ0Y7UUFERSxzRkFDRjtRQVlFLGVBQ0Y7UUFERSx1RUFDRjs7QUFRTjtJQURDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzhCQUM1QixVQUFVO3lEQUF1QztrREFGcEQsbUJBQW1CO2NBcEMvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7c0JBUUksTUFBTTt1QkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hdXRoJztcclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUsIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiwgQXV0aFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVhZGVyLXVzZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBweC1zbVwiXHJcbiAgICAgIG56LWRyb3Bkb3duXHJcbiAgICAgIG56UGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxyXG4gICAgICBbbnpEcm9wZG93bk1lbnVdPVwidXNlck1lbnVcIlxyXG4gICAgPlxyXG4gICAgICA8IS0tPG56LWF2YXRhciBbbnpTcmNdPVwic2V0dGluZ3MudXNlci5hdmF0YXJcIiBuelNpemU9XCJzbWFsbFwiIGNsYXNzPVwibXItc21cIj48L256LWF2YXRhcj4tLT5cclxuICAgICAge3sgKGN1cnJlbnRVc2VyJCB8IGFzeW5jKT8udXNlck5hbWUgfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPG56LWRyb3Bkb3duLW1lbnUgI3VzZXJNZW51PVwibnpEcm9wZG93bk1lbnVcIj5cclxuICAgICAgPGRpdiBuei1tZW51IGNsYXNzPVwid2lkdGgtc21cIj5cclxuICAgICAgICA8ZGl2IG56LW1lbnUtaXRlbSByb3V0ZXJMaW5rPVwiL2FjY291bnQvbWFuYWdlLXByb2ZpbGVcIj5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwidXNlclwiIGNsYXNzPVwibXItc21cIj48L2k+XHJcbiAgICAgICAgICB7eyAnQWJwQWNjb3VudDo6TWFuYWdlWW91clByb2ZpbGUnIHwgYWJwTG9jYWxpemF0aW9uIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLTxkaXYgbnotbWVudS1pdGVtIHJvdXRlckxpbms9XCIvcHJvL2FjY291bnQvc2V0dGluZ3NcIj5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic2V0dGluZ1wiIGNsYXNzPVwibXItc21cIj48L2k+XHJcbiAgICAgICAgICB7eyAnbWVudS5hY2NvdW50LnNldHRpbmdzJyB8IHRyYW5zbGF0ZSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgbnotbWVudS1pdGVtIHJvdXRlckxpbms9XCIvZXhjZXB0aW9uL3RyaWdnZXJcIj5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCIgY2xhc3M9XCJtci1zbVwiPjwvaT5cclxuICAgICAgICAgIHt7ICdtZW51LmFjY291bnQudHJpZ2dlcicgfCB0cmFuc2xhdGUgfX1cclxuICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgICA8bGkgbnotbWVudS1kaXZpZGVyPjwvbGk+XHJcbiAgICAgICAgPGRpdiBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImxvZ291dCgpXCI+XHJcbiAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImxvZ291dFwiIGNsYXNzPVwibXItc21cIj48L2k+XHJcbiAgICAgICAgICB7eyAnQWJwVWk6OkxvZ291dCcgfCBhYnBMb2NhbGl6YXRpb24gfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L256LWRyb3Bkb3duLW1lbnU+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlclVzZXJDb21wb25lbnQge1xyXG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdjdXJyZW50VXNlcicpKVxyXG4gIGN1cnJlbnRVc2VyJDogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uQ3VycmVudFVzZXI+OyAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgXHJcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBJVG9rZW5TZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgLy90aGlzLnRva2VuU2VydmljZS5jbGVhcigpO1xyXG4gICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudG9rZW5TZXJ2aWNlLmxvZ2luX3VybCk7XHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddLCB7IHN0YXRlOiB7IHJlZGlyZWN0VXJsOiB0aGlzLnJvdXRlci51cmwgfSB9KTtcclxuICAgIH0pOyAgICBcclxuICB9XHJcbn1cclxuIl19