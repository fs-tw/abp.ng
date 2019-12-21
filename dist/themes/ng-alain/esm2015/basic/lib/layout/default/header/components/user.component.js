/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/user.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { Store, Select } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { Navigate, RouterState } from '@ngxs/router-plugin';
import { GetAppConfiguration, ConfigState, SessionState } from '@abp/ng.core';
import { Observable } from 'rxjs';
export class HeaderUserComponent {
    /**
     * @param {?} settings
     * @param {?} router
     * @param {?} tokenService
     * @param {?} store
     * @param {?} oauthService
     */
    constructor(settings, router, tokenService, store, oauthService) {
        this.settings = settings;
        this.router = router;
        this.tokenService = tokenService;
        this.store = store;
        this.oauthService = oauthService;
        this.tenant = (/** @type {?} */ ({}));
        this.tenant =
            this.store.selectSnapshot(SessionState.getTenant) ||
                ((/** @type {?} */ ({})));
        this.tenantName = this.tenant.name || '.';
    }
    //logout() {
    //  this.tokenService.clear();
    //  this.router.navigateByUrl(this.tokenService.login_url!);
    //  }
    /**
     * @return {?}
     */
    logout() {
        this.oauthService.logOut();
        this.store.dispatch(new Navigate(['/'], null, {
            state: { redirectUrl: this.store.selectSnapshot(RouterState).state.url }
        }));
        this.store.dispatch(new GetAppConfiguration());
    }
}
HeaderUserComponent.decorators = [
    { type: Component, args: [{
                selector: 'header-user',
                template: `
    <div
      class="alain-default__nav-item d-flex align-items-center px-sm"
      nz-dropdown
      nzPlacement="bottomRight"
      [nzDropdownMenu]="userMenu"
    >
      <!--<nz-avatar [nzSrc]="settings.user.avatar" nzSize="small" class="mr-sm"></nz-avatar>-->
      {{tenantName}}/{{ (currentUser$ | async)?.userName }}
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <div nz-menu-item routerLink="/account/manage-profile">
          <i nz-icon nzType="setting" class="mr-sm"></i>
          {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}
        </div>
        <li nz-menu-divider></li>
        <div nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          {{ 'AbpUi::Logout' | abpLocalization }}
        </div>
      </div>
    </nz-dropdown-menu>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
HeaderUserComponent.ctorParameters = () => [
    { type: SettingsService },
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: Store },
    { type: OAuthService }
];
tslib_1.__decorate([
    Select(ConfigState.getOne('currentUser')),
    tslib_1.__metadata("design:type", Observable)
], HeaderUserComponent.prototype, "currentUser$", void 0);
if (false) {
    /** @type {?} */
    HeaderUserComponent.prototype.currentUser$;
    /** @type {?} */
    HeaderUserComponent.prototype.tenant;
    /** @type {?} */
    HeaderUserComponent.prototype.tenantName;
    /** @type {?} */
    HeaderUserComponent.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    HeaderUserComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    HeaderUserComponent.prototype.tokenService;
    /**
     * @type {?}
     * @private
     */
    HeaderUserComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    HeaderUserComponent.prototype.oauthService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvdXNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFpQixNQUFNLGFBQWEsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUE0QixZQUFZLEVBQU8sTUFBTSxjQUFjLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQThCbEMsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7Ozs7SUFROUIsWUFDUyxRQUF5QixFQUN4QixNQUFjLEVBQ1ksWUFBMkIsRUFDckQsS0FBWSxFQUNaLFlBQTBCO1FBSjNCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDWSxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUNyRCxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osaUJBQVksR0FBWixZQUFZLENBQWM7UUFUcEMsV0FBTSxHQUFHLG1CQUFBLEVBQUUsRUFBaUIsQ0FBQztRQVczQixJQUFJLENBQUMsTUFBTTtZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pELENBQUMsbUJBQUEsRUFBRSxFQUFpQixDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUM7SUFDNUMsQ0FBQzs7Ozs7Ozs7SUFNRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUU7WUFDeEIsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7U0FDekUsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBbkNRLGVBQWU7WUFEZixNQUFNOzRDQWdEVixNQUFNLFNBQUMsZ0JBQWdCO1lBN0NuQixLQUFLO1lBQ0wsWUFBWTs7QUFtQ25CO0lBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7c0NBQzVCLFVBQVU7eURBQXVDOzs7SUFEL0QsMkNBQytEOztJQUUvRCxxQ0FBNkI7O0lBRTdCLHlDQUFtQjs7SUFHakIsdUNBQWdDOzs7OztJQUNoQyxxQ0FBc0I7Ozs7O0lBQ3RCLDJDQUE2RDs7Ozs7SUFDN0Qsb0NBQW9COzs7OztJQUNwQiwyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hdXRoJztcclxuaW1wb3J0IHsgU3RvcmUsIFNlbGVjdCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IE5hdmlnYXRlLCBSb3V0ZXJTdGF0ZSB9IGZyb20gJ0BuZ3hzL3JvdXRlci1wbHVnaW4nO1xyXG5pbXBvcnQgeyBHZXRBcHBDb25maWd1cmF0aW9uLCBDb25maWdTdGF0ZSwgQXBwbGljYXRpb25Db25maWd1cmF0aW9uLCBTZXNzaW9uU3RhdGUsIEFCUCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVhZGVyLXVzZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBweC1zbVwiXHJcbiAgICAgIG56LWRyb3Bkb3duXHJcbiAgICAgIG56UGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxyXG4gICAgICBbbnpEcm9wZG93bk1lbnVdPVwidXNlck1lbnVcIlxyXG4gICAgPlxyXG4gICAgICA8IS0tPG56LWF2YXRhciBbbnpTcmNdPVwic2V0dGluZ3MudXNlci5hdmF0YXJcIiBuelNpemU9XCJzbWFsbFwiIGNsYXNzPVwibXItc21cIj48L256LWF2YXRhcj4tLT5cclxuICAgICAge3t0ZW5hbnROYW1lfX0ve3sgKGN1cnJlbnRVc2VyJCB8IGFzeW5jKT8udXNlck5hbWUgfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPG56LWRyb3Bkb3duLW1lbnUgI3VzZXJNZW51PVwibnpEcm9wZG93bk1lbnVcIj5cclxuICAgICAgPGRpdiBuei1tZW51IGNsYXNzPVwid2lkdGgtc21cIj5cclxuICAgICAgICA8ZGl2IG56LW1lbnUtaXRlbSByb3V0ZXJMaW5rPVwiL2FjY291bnQvbWFuYWdlLXByb2ZpbGVcIj5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic2V0dGluZ1wiIGNsYXNzPVwibXItc21cIj48L2k+XHJcbiAgICAgICAgICB7eyAnQWJwQWNjb3VudDo6TWFuYWdlWW91clByb2ZpbGUnIHwgYWJwTG9jYWxpemF0aW9uIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGxpIG56LW1lbnUtZGl2aWRlcj48L2xpPlxyXG4gICAgICAgIDxkaXYgbnotbWVudS1pdGVtIChjbGljayk9XCJsb2dvdXQoKVwiPlxyXG4gICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJsb2dvdXRcIiBjbGFzcz1cIm1yLXNtXCI+PC9pPlxyXG4gICAgICAgICAge3sgJ0FicFVpOjpMb2dvdXQnIHwgYWJwTG9jYWxpemF0aW9uIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uei1kcm9wZG93bi1tZW51PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJVc2VyQ29tcG9uZW50IHtcclxuICBAU2VsZWN0KENvbmZpZ1N0YXRlLmdldE9uZSgnY3VycmVudFVzZXInKSlcclxuICBjdXJyZW50VXNlciQ6IE9ic2VydmFibGU8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLkN1cnJlbnRVc2VyPjtcclxuXHJcbiAgdGVuYW50ID0ge30gYXMgQUJQLkJhc2ljSXRlbTtcclxuXHJcbiAgdGVuYW50TmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSB0b2tlblNlcnZpY2U6IElUb2tlblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgb2F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMudGVuYW50ID1cclxuICAgICAgdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0VGVuYW50KSB8fFxyXG4gICAgICAoe30gYXMgQUJQLkJhc2ljSXRlbSk7XHJcbiAgICB0aGlzLnRlbmFudE5hbWUgPSB0aGlzLnRlbmFudC5uYW1lIHx8ICcuJztcclxuICB9XHJcblxyXG4gIC8vbG9nb3V0KCkge1xyXG4gIC8vICB0aGlzLnRva2VuU2VydmljZS5jbGVhcigpO1xyXG4gIC8vICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudG9rZW5TZXJ2aWNlLmxvZ2luX3VybCEpO1xyXG4gIC8vICB9XHJcbiAgbG9nb3V0KCkge1xyXG4gICAgdGhpcy5vYXV0aFNlcnZpY2UubG9nT3V0KCk7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICBuZXcgTmF2aWdhdGUoWycvJ10sIG51bGwsIHtcclxuICAgICAgICBzdGF0ZTogeyByZWRpcmVjdFVybDogdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChSb3V0ZXJTdGF0ZSkuc3RhdGUudXJsIH1cclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRBcHBDb25maWd1cmF0aW9uKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=