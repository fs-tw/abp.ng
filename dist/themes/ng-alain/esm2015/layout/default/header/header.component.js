import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { ConfigState } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@ngxs/store";
import * as i3 from "@angular/router";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/dropdown";
import * as i7 from "ng-zorro-antd/menu";
import * as i8 from "./components/i18n.component";
import * as i9 from "./components/user.component";
function HeaderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.appInfo.name, " ");
} }
const _c0 = function () { return ["/"]; };
export class HeaderComponent {
    constructor(settings, store) {
        this.settings = settings;
        this.store = store;
    }
    get appInfo() {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }
    toggleCollapsedSidebar() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }
    searchToggleChange() {
        this.searchToggleStatus = !this.searchToggleStatus;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(i1.SettingsService), i0.ɵɵdirectiveInject(i2.Store)); };
HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["layout-header"]], decls: 22, vars: 6, consts: [[1, "alain-default__header-logo"], [1, "alain-default__header-logo-link", 3, "routerLink"], ["src", "./assets/logo-full.svg", 1, "alain-default__header-logo-expanded", 2, "max-height", "40px", 3, "alt"], ["src", "./assets/logo.svg", 1, "alain-default__header-logo-collapsed", 2, "max-height", "30px", 3, "alt"], ["appName", ""], [1, "alain-default__nav-wrap"], [1, "alain-default__nav"], [1, "alain-default__nav-item", 3, "click"], ["nz-icon", "", 3, "nzType"], ["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "alain-default__nav-item", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "setting"], ["settingsMenu", "nzDropdownMenu"], ["nz-menu", "", 2, "width", "200px"], ["nz-menu-item", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "a", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelement(3, "img", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, HeaderComponent_ng_template_4_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelementStart(7, "ul", 6);
        i0.ɵɵelementStart(8, "li");
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵlistener("click", function HeaderComponent_Template_div_click_9_listener() { return ctx.toggleCollapsedSidebar(); });
        i0.ɵɵelement(10, "i", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "ul", 6);
        i0.ɵɵelementStart(12, "li");
        i0.ɵɵelementStart(13, "div", 9);
        i0.ɵɵelement(14, "i", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "nz-dropdown-menu", null, 11);
        i0.ɵɵelementStart(17, "div", 12);
        i0.ɵɵelementStart(18, "div", 13);
        i0.ɵɵelement(19, "header-i18n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "li");
        i0.ɵɵelement(21, "header-user");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(16);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(5, _c0));
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("alt", ctx.appInfo.name);
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("alt", ctx.appInfo.name);
        i0.ɵɵadvance(7);
        i0.ɵɵpropertyInterpolate1("nzType", "menu-", ctx.settings.layout.collapsed ? "unfold" : "fold", "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("nzDropdownMenu", _r2);
    } }, directives: [i3.RouterLinkWithHref, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i6.NzDropDownDirective, i6.NzDropdownMenuComponent, i7.NzMenuDirective, i7.NzMenuItemDirective, i8.HeaderI18nComponent, i9.HeaderUserComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{
                selector: 'layout-header',
                templateUrl: './header.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.SettingsService }, { type: i2.Store }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9sYXlvdXQvc3JjL2RlZmF1bHQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBVSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7O0lDbUI5QixZQUNGOzs7SUFERSxvREFDRjs7O0FEYkYsTUFBTSxPQUFPLGVBQWU7SUFNMUIsWUFDUyxRQUF5QixFQUN4QixLQUFZO1FBRGIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBTztJQUNqQixDQUFDO0lBUk4sSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBUUQsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ3JELENBQUM7OzhFQWpCVSxlQUFlO29EQUFmLGVBQWU7UUNWNUIsOEJBQ0U7UUFBQSw0QkFDRTtRQU1BLHlCQU1BO1FBQUEseUJBTUY7UUFBQSxpQkFBSTtRQUNKLGlIQUNFO1FBRUosaUJBQU07UUFDTiw4QkFDRTtRQUFBLDZCQUNFO1FBQ0EsMEJBQ0U7UUFBQSw4QkFDRTtRQURtQyx5RkFBUyw0QkFBd0IsSUFBQztRQUNyRSx3QkFBaUY7UUFDbkYsaUJBQU07UUFDUixpQkFBSztRQW1CUCxpQkFBSztRQUVMLDhCQUNFO1FBYUEsMkJBQ0U7UUFBQSwrQkFPRTtRQUFBLHlCQUFnQztRQUNsQyxpQkFBTTtRQUNOLG1EQUNFO1FBQUEsZ0NBQ0U7UUFNQSxnQ0FDRTtRQUFBLCtCQUEyQjtRQUM3QixpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQW1CO1FBQ3JCLGlCQUFLO1FBQ0wsMkJBQ0U7UUFBQSwrQkFBMkI7UUFDN0IsaUJBQUs7UUFDUCxpQkFBSztRQUNQLGlCQUFNOzs7UUE5RkQsZUFBb0I7UUFBcEIsdURBQW9CO1FBVW5CLGVBQXdCO1FBQXhCLGlEQUF3QjtRQU14QixlQUF3QjtRQUF4QixpREFBd0I7UUFhWCxlQUFpRTtRQUFqRSxtR0FBaUU7UUF5QzVFLGVBQStCO1FBQS9CLG9DQUErQjs7a0REN0QxQixlQUFlO2NBTDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnU3RhdGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xheW91dC1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcclxuICBnZXQgYXBwSW5mbygpOiBDb25maWcuQXBwbGljYXRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0QXBwbGljYXRpb25JbmZvKTtcclxuICB9ICBcclxuICBzZWFyY2hUb2dnbGVTdGF0dXM6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZVxyXG4gICAgKSB7fVxyXG5cclxuICB0b2dnbGVDb2xsYXBzZWRTaWRlYmFyKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsICF0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoVG9nZ2xlQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5zZWFyY2hUb2dnbGVTdGF0dXMgPSAhdGhpcy5zZWFyY2hUb2dnbGVTdGF0dXM7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nb1wiPlxyXG4gIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCIgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nby1saW5rXCI+XHJcbiAgICA8IS0tIDxpbWdcclxuICAgICpuZ0lmPVwiYXBwSW5mby5sb2dvVXJsOyBlbHNlIGFwcE5hbWVcIlxyXG4gICAgW3NyY109XCJhcHBJbmZvLmxvZ29VcmxcIlxyXG4gICAgW2FsdF09XCJhcHBJbmZvLm5hbWVcIlxyXG4gICAgc3R5bGU9XCJtYXgtaGVpZ2h0OjQwcHg7XCJcclxuICAgIC8+ICAgICAtLT5cclxuICAgIDxpbWdcclxuICAgICAgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nby1leHBhbmRlZFwiXHJcbiAgICAgIHNyYz1cIi4vYXNzZXRzL2xvZ28tZnVsbC5zdmdcIlxyXG4gICAgICBhbHQ9XCJ7eyBhcHBJbmZvLm5hbWUgfX1cIlxyXG4gICAgICBzdHlsZT1cIm1heC1oZWlnaHQ6NDBweDtcIlxyXG4gICAgLz5cclxuICAgIDxpbWdcclxuICAgICAgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nby1jb2xsYXBzZWRcIlxyXG4gICAgICBzcmM9XCIuL2Fzc2V0cy9sb2dvLnN2Z1wiXHJcbiAgICAgIGFsdD1cInt7IGFwcEluZm8ubmFtZSB9fVwiXHJcbiAgICAgIHN0eWxlPVwibWF4LWhlaWdodDozMHB4O1wiXHJcbiAgICAvPlxyXG4gIDwvYT5cclxuICA8bmctdGVtcGxhdGUgI2FwcE5hbWU+XHJcbiAgICB7eyBhcHBJbmZvLm5hbWUgfX1cclxuICA8L25nLXRlbXBsYXRlPiAgXHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LXdyYXBcIj5cclxuICA8dWwgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXZcIj5cclxuICAgIDwhLS0gTWVudSAtLT5cclxuICAgIDxsaT5cclxuICAgICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtXCIgKGNsaWNrKT1cInRvZ2dsZUNvbGxhcHNlZFNpZGViYXIoKVwiPlxyXG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwibWVudS17eyBzZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkID8gJ3VuZm9sZCcgOiAnZm9sZCcgfX1cIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICAgIDwhLS0gR2l0aHViIFBhZ2UgLS0+XHJcbiAgICA8IS0tIDxsaT5cclxuICAgICAgPGEgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtaXRlbVwiIGhyZWY9XCIvL2dpdGh1Yi5jb20vbmctYWxhaW4vbmctYWxhaW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImdpdGh1YlwiPjwvaT5cclxuICAgICAgPC9hPlxyXG4gICAgPC9saT4gLS0+XHJcbiAgICA8IS0tIExvY2sgUGFnZSAtLT5cclxuICAgIDwhLS0gPGxpIGNsYXNzPVwiaGlkZGVuLW1vYmlsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW1cIiByb3V0ZXJMaW5rPVwiL3Bhc3Nwb3J0L2xvY2tcIj5cclxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImxvY2tcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT4gLS0+XHJcbiAgICA8IS0tIFNlYXJjaCBCdXR0b24gLS0+XHJcbiAgICA8IS0tIDxsaSBjbGFzcz1cImhpZGRlbi1wY1wiIChjbGljayk9XCJzZWFyY2hUb2dnbGVDaGFuZ2UoKVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW1cIj5cclxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInNlYXJjaFwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPiAtLT5cclxuICA8L3VsPlxyXG4gIDwhLS0gPGhlYWRlci1zZWFyY2ggY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19zZWFyY2hcIiBbdG9nZ2xlQ2hhbmdlXT1cInNlYXJjaFRvZ2dsZVN0YXR1c1wiPjwvaGVhZGVyLXNlYXJjaD4gLS0+XHJcbiAgPHVsIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2XCI+XHJcbiAgICA8IS0tIE5vdGlmeSAtLT5cclxuICAgIDwhLS0gPGxpPlxyXG4gICAgICA8aGVhZGVyLW5vdGlmeT48L2hlYWRlci1ub3RpZnk+XHJcbiAgICA8L2xpPiAtLT5cclxuICAgIDwhLS0gVGFzayAtLT5cclxuICAgIDwhLS0gPGxpIGNsYXNzPVwiaGlkZGVuLW1vYmlsZVwiPlxyXG4gICAgICA8aGVhZGVyLXRhc2s+PC9oZWFkZXItdGFzaz5cclxuICAgIDwvbGk+IC0tPlxyXG4gICAgPCEtLSBBcHAgSWNvbnMgLS0+XHJcbiAgICA8IS0tIDxsaSBjbGFzcz1cImhpZGRlbi1tb2JpbGVcIj5cclxuICAgICAgPGhlYWRlci1pY29uPjwvaGVhZGVyLWljb24+XHJcbiAgICA8L2xpPiAtLT5cclxuICAgIDwhLS0gU2V0dGluZ3MgLS0+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtXCJcclxuICAgICAgICBuei1kcm9wZG93blxyXG4gICAgICAgIFtuekRyb3Bkb3duTWVudV09XCJzZXR0aW5nc01lbnVcIlxyXG4gICAgICAgIG56VHJpZ2dlcj1cImNsaWNrXCJcclxuICAgICAgICBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic2V0dGluZ1wiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuei1kcm9wZG93bi1tZW51ICNzZXR0aW5nc01lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxyXG4gICAgICAgIDxkaXYgbnotbWVudSBzdHlsZT1cIndpZHRoOjIwMHB4O1wiPlxyXG4gICAgICAgICAgPCEtLSA8ZGl2IG56LW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgPGhlYWRlci1mdWxsc2NyZWVuPjwvaGVhZGVyLWZ1bGxzY3JlZW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgbnotbWVudS1pdGVtPlxyXG4gICAgICAgICAgICA8aGVhZGVyLXN0b3JhZ2U+PC9oZWFkZXItc3RvcmFnZT5cclxuICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgIDxkaXYgbnotbWVudS1pdGVtPlxyXG4gICAgICAgICAgICA8aGVhZGVyLWkxOG4+PC9oZWFkZXItaTE4bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L256LWRyb3Bkb3duLW1lbnU+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8aGVhZGVyLXVzZXI+PC9oZWFkZXItdXNlcj5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC9kaXY+XHJcbiJdfQ==