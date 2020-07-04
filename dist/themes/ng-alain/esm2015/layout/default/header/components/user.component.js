import { __decorate, __metadata, __param } from "tslib";
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { SettingsService } from '@delon/theme';
import { ConfigState, AuthService } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
let HeaderUserComponent = class HeaderUserComponent {
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
};
__decorate([
    Select(ConfigState.getOne('currentUser')),
    __metadata("design:type", Observable)
], HeaderUserComponent.prototype, "currentUser$", void 0);
HeaderUserComponent = __decorate([
    Component({
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
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __param(3, Inject(DA_SERVICE_TOKEN)),
    __metadata("design:paramtypes", [SettingsService,
        Router,
        AuthService, Object])
], HeaderUserComponent);
export { HeaderUserComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL3VzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFpQixNQUFNLGFBQWEsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQTRCLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFzQ3JDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBRzlCLFlBQ1MsUUFBeUIsRUFDeEIsTUFBYyxFQUNkLFdBQXdCLEVBQ0UsWUFBMkI7UUFIdEQsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ0UsaUJBQVksR0FBWixZQUFZLENBQWU7SUFDNUQsQ0FBQztJQUVKLE1BQU07UUFDSiw0QkFBNEI7UUFDNUIseURBQXlEO1FBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUFmQztJQURDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzhCQUM1QixVQUFVO3lEQUF1QztBQUZwRCxtQkFBbUI7SUFwQy9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCVDtRQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7SUFRRyxXQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO3FDQUhSLGVBQWU7UUFDaEIsTUFBTTtRQUNELFdBQVc7R0FOdkIsbUJBQW1CLENBaUIvQjtTQWpCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hdXRoJztcclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUsIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiwgQXV0aFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVhZGVyLXVzZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBweC1zbVwiXHJcbiAgICAgIG56LWRyb3Bkb3duXHJcbiAgICAgIG56UGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxyXG4gICAgICBbbnpEcm9wZG93bk1lbnVdPVwidXNlck1lbnVcIlxyXG4gICAgPlxyXG4gICAgICA8IS0tPG56LWF2YXRhciBbbnpTcmNdPVwic2V0dGluZ3MudXNlci5hdmF0YXJcIiBuelNpemU9XCJzbWFsbFwiIGNsYXNzPVwibXItc21cIj48L256LWF2YXRhcj4tLT5cclxuICAgICAge3sgKGN1cnJlbnRVc2VyJCB8IGFzeW5jKT8udXNlck5hbWUgfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPG56LWRyb3Bkb3duLW1lbnUgI3VzZXJNZW51PVwibnpEcm9wZG93bk1lbnVcIj5cclxuICAgICAgPGRpdiBuei1tZW51IGNsYXNzPVwid2lkdGgtc21cIj5cclxuICAgICAgICA8ZGl2IG56LW1lbnUtaXRlbSByb3V0ZXJMaW5rPVwiL2FjY291bnQvbWFuYWdlLXByb2ZpbGVcIj5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwidXNlclwiIGNsYXNzPVwibXItc21cIj48L2k+XHJcbiAgICAgICAgICB7eyAnQWJwQWNjb3VudDo6TWFuYWdlWW91clByb2ZpbGUnIHwgYWJwTG9jYWxpemF0aW9uIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLTxkaXYgbnotbWVudS1pdGVtIHJvdXRlckxpbms9XCIvcHJvL2FjY291bnQvc2V0dGluZ3NcIj5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic2V0dGluZ1wiIGNsYXNzPVwibXItc21cIj48L2k+XHJcbiAgICAgICAgICB7eyAnbWVudS5hY2NvdW50LnNldHRpbmdzJyB8IHRyYW5zbGF0ZSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgbnotbWVudS1pdGVtIHJvdXRlckxpbms9XCIvZXhjZXB0aW9uL3RyaWdnZXJcIj5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCIgY2xhc3M9XCJtci1zbVwiPjwvaT5cclxuICAgICAgICAgIHt7ICdtZW51LmFjY291bnQudHJpZ2dlcicgfCB0cmFuc2xhdGUgfX1cclxuICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgICA8bGkgbnotbWVudS1kaXZpZGVyPjwvbGk+XHJcbiAgICAgICAgPGRpdiBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImxvZ291dCgpXCI+XHJcbiAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImxvZ291dFwiIGNsYXNzPVwibXItc21cIj48L2k+XHJcbiAgICAgICAgICB7eyAnQWJwVWk6OkxvZ291dCcgfCBhYnBMb2NhbGl6YXRpb24gfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L256LWRyb3Bkb3duLW1lbnU+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlclVzZXJDb21wb25lbnQge1xyXG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdjdXJyZW50VXNlcicpKVxyXG4gIGN1cnJlbnRVc2VyJDogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uQ3VycmVudFVzZXI+OyAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgXHJcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBJVG9rZW5TZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgLy90aGlzLnRva2VuU2VydmljZS5jbGVhcigpO1xyXG4gICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudG9rZW5TZXJ2aWNlLmxvZ2luX3VybCk7XHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddLCB7IHN0YXRlOiB7IHJlZGlyZWN0VXJsOiB0aGlzLnJvdXRlci51cmwgfSB9KTtcclxuICAgIH0pOyAgICBcclxuICB9XHJcbn1cclxuIl19