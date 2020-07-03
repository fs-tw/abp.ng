import { __decorate, __metadata } from "tslib";
import { ConfigState } from '@abp/ng.core';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
let LogoComponent = class LogoComponent {
    constructor(store) {
        this.store = store;
    }
    get appInfo() {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }
};
LogoComponent = __decorate([
    Component({
        selector: 'abp-logo',
        template: `
    <a class="navbar-brand" routerLink="/">
      <img
        *ngIf="appInfo.logoUrl; else appName"
        [src]="appInfo.logoUrl"
        [alt]="appInfo.name"
        width="100%"
        height="auto"
      />
    </a>

    <ng-template #appName>
      {{ appInfo.name }}
    </ng-template>
  `
    }),
    __metadata("design:paramtypes", [Store])
], LogoComponent);
export { LogoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1iYXNpYy9zcmMvbGliL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFVLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFvQnBDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFLeEIsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBSnBDLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUdGLENBQUE7QUFOWSxhQUFhO0lBbEJ6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0dBY1Q7S0FDRixDQUFDO3FDQU0yQixLQUFLO0dBTHJCLGFBQWEsQ0FNekI7U0FOWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnLCBDb25maWdTdGF0ZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWxvZ28nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIHJvdXRlckxpbms9XCIvXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICAqbmdJZj1cImFwcEluZm8ubG9nb1VybDsgZWxzZSBhcHBOYW1lXCJcclxuICAgICAgICBbc3JjXT1cImFwcEluZm8ubG9nb1VybFwiXHJcbiAgICAgICAgW2FsdF09XCJhcHBJbmZvLm5hbWVcIlxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L2E+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlICNhcHBOYW1lPlxyXG4gICAgICB7eyBhcHBJbmZvLm5hbWUgfX1cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ29Db21wb25lbnQge1xyXG4gIGdldCBhcHBJbmZvKCk6IENvbmZpZy5BcHBsaWNhdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRBcHBsaWNhdGlvbkluZm8pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcbn1cclxuIl19