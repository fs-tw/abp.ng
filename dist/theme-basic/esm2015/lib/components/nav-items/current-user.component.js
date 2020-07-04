import { __decorate, __metadata } from "tslib";
import { AuthService, ConfigState } from '@abp/ng.core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
let CurrentUserComponent = class CurrentUserComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    get smallScreen() {
        return window.innerWidth < 992;
    }
    ngOnInit() { }
    logout() {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/'], { state: { redirectUrl: this.router.url } });
        });
    }
};
__decorate([
    Select(ConfigState.getOne('currentUser')),
    __metadata("design:type", Observable)
], CurrentUserComponent.prototype, "currentUser$", void 0);
CurrentUserComponent = __decorate([
    Component({
        selector: 'abp-current-user',
        // tslint:disable-next-line: component-max-inline-declarations
        template: `
    <ng-template #loginBtn>
      <a role="button" class="nav-link" routerLink="/account/login">{{
        'AbpAccount::Login' | abpLocalization
      }}</a>
    </ng-template>
    <div
      *ngIf="(currentUser$ | async)?.isAuthenticated; else loginBtn"
      ngbDropdown
      class="dropdown"
      #currentUserDropdown="ngbDropdown"
      display="static"
    >
      <a
        ngbDropdownToggle
        class="nav-link"
        href="javascript:void(0)"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {{ (currentUser$ | async)?.userName }}
      </a>
      <div
        class="dropdown-menu dropdown-menu-right border-0 shadow-sm"
        aria-labelledby="dropdownMenuLink"
        [class.d-block]="smallScreen && currentUserDropdown.isOpen()"
      >
        <a class="dropdown-item" routerLink="/account/manage-profile"
          ><i class="fa fa-cog mr-1"></i>{{ 'AbpAccount::ManageYourProfile' | abpLocalization }}</a
        >
        <a class="dropdown-item" href="javascript:void(0)" (click)="logout()"
          ><i class="fa fa-power-off mr-1"></i>{{ 'AbpUi::Logout' | abpLocalization }}</a
        >
      </div>
    </div>
  `
    }),
    __metadata("design:paramtypes", [AuthService, Router])
], CurrentUserComponent);
export { CurrentUserComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC11c2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLWJhc2ljL3NyYy9saWIvY29tcG9uZW50cy9uYXYtaXRlbXMvY3VycmVudC11c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUE0QixXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQTZDbEMsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFRL0IsWUFBb0IsV0FBd0IsRUFBVSxNQUFjO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFKeEUsSUFBSSxXQUFXO1FBQ2IsT0FBTyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztJQUNqQyxDQUFDO0lBSUQsUUFBUSxLQUFJLENBQUM7SUFFYixNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQWZDO0lBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7OEJBQzVCLFVBQVU7MERBQXVDO0FBRnBELG9CQUFvQjtJQTNDaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1Qiw4REFBOEQ7UUFDOUQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNDVDtLQUNGLENBQUM7cUNBU2lDLFdBQVcsRUFBa0IsTUFBTTtHQVJ6RCxvQkFBb0IsQ0FpQmhDO1NBakJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiwgQXV0aFNlcnZpY2UsIENvbmZpZ1N0YXRlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1jdXJyZW50LXVzZXInLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LW1heC1pbmxpbmUtZGVjbGFyYXRpb25zXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy10ZW1wbGF0ZSAjbG9naW5CdG4+XHJcbiAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdi1saW5rXCIgcm91dGVyTGluaz1cIi9hY2NvdW50L2xvZ2luXCI+e3tcclxuICAgICAgICAnQWJwQWNjb3VudDo6TG9naW4nIHwgYWJwTG9jYWxpemF0aW9uXHJcbiAgICAgIH19PC9hPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxkaXZcclxuICAgICAgKm5nSWY9XCIoY3VycmVudFVzZXIkIHwgYXN5bmMpPy5pc0F1dGhlbnRpY2F0ZWQ7IGVsc2UgbG9naW5CdG5cIlxyXG4gICAgICBuZ2JEcm9wZG93blxyXG4gICAgICBjbGFzcz1cImRyb3Bkb3duXCJcclxuICAgICAgI2N1cnJlbnRVc2VyRHJvcGRvd249XCJuZ2JEcm9wZG93blwiXHJcbiAgICAgIGRpc3BsYXk9XCJzdGF0aWNcIlxyXG4gICAgPlxyXG4gICAgICA8YVxyXG4gICAgICAgIG5nYkRyb3Bkb3duVG9nZ2xlXHJcbiAgICAgICAgY2xhc3M9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXHJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgaWQ9XCJkcm9wZG93bk1lbnVMaW5rXCJcclxuICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IChjdXJyZW50VXNlciQgfCBhc3luYyk/LnVzZXJOYW1lIH19XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0IGJvcmRlci0wIHNoYWRvdy1zbVwiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51TGlua1wiXHJcbiAgICAgICAgW2NsYXNzLmQtYmxvY2tdPVwic21hbGxTY3JlZW4gJiYgY3VycmVudFVzZXJEcm9wZG93bi5pc09wZW4oKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiByb3V0ZXJMaW5rPVwiL2FjY291bnQvbWFuYWdlLXByb2ZpbGVcIlxyXG4gICAgICAgICAgPjxpIGNsYXNzPVwiZmEgZmEtY29nIG1yLTFcIj48L2k+e3sgJ0FicEFjY291bnQ6Ok1hbmFnZVlvdXJQcm9maWxlJyB8IGFicExvY2FsaXphdGlvbiB9fTwvYVxyXG4gICAgICAgID5cclxuICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cImxvZ291dCgpXCJcclxuICAgICAgICAgID48aSBjbGFzcz1cImZhIGZhLXBvd2VyLW9mZiBtci0xXCI+PC9pPnt7ICdBYnBVaTo6TG9nb3V0JyB8IGFicExvY2FsaXphdGlvbiB9fTwvYVxyXG4gICAgICAgID5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VycmVudFVzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdjdXJyZW50VXNlcicpKVxyXG4gIGN1cnJlbnRVc2VyJDogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uQ3VycmVudFVzZXI+O1xyXG5cclxuICBnZXQgc21hbGxTY3JlZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCA5OTI7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddLCB7IHN0YXRlOiB7IHJlZGlyZWN0VXJsOiB0aGlzLnJvdXRlci51cmwgfSB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=