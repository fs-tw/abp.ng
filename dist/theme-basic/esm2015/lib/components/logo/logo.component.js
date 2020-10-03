import { ConfigState } from '@abp/ng.core';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
export class LogoComponent {
    constructor(store) {
        this.store = store;
    }
    get appInfo() {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }
}
LogoComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
LogoComponent.ctorParameters = () => [
    { type: Store }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1iYXNpYy9zcmMvbGliL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQW9CcEMsTUFBTSxPQUFPLGFBQWE7SUFLeEIsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBSnBDLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO2FBQ0Y7OztZQW5CUSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnLCBDb25maWdTdGF0ZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWxvZ28nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIHJvdXRlckxpbms9XCIvXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICAqbmdJZj1cImFwcEluZm8ubG9nb1VybDsgZWxzZSBhcHBOYW1lXCJcclxuICAgICAgICBbc3JjXT1cImFwcEluZm8ubG9nb1VybFwiXHJcbiAgICAgICAgW2FsdF09XCJhcHBJbmZvLm5hbWVcIlxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L2E+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlICNhcHBOYW1lPlxyXG4gICAgICB7eyBhcHBJbmZvLm5hbWUgfX1cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ29Db21wb25lbnQge1xyXG4gIGdldCBhcHBJbmZvKCk6IENvbmZpZy5BcHBsaWNhdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRBcHBsaWNhdGlvbkluZm8pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcbn1cclxuIl19