import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util";
import * as i2 from "ng-zorro-antd/dropdown";
import * as i3 from "ng-zorro-antd/menu";
import * as i4 from "ng-zorro-antd/core/transition-patch";
export class LayoutThemeBtnComponent {
    constructor(renderer, configSrv) {
        this.renderer = renderer;
        this.configSrv = configSrv;
        this.theme = 'default';
    }
    ngOnInit() {
        this.initTheme();
    }
    initTheme() {
        this.theme = localStorage.getItem('site-theme') || 'default';
        this.updateChartTheme();
        this.onThemeChange(this.theme);
    }
    updateChartTheme() {
        this.configSrv.set('chart', { theme: this.theme === 'dark' ? 'dark' : '' });
    }
    onThemeChange(theme) {
        this.theme = theme;
        this.renderer.setAttribute(document.body, 'data-theme', theme);
        const dom = document.getElementById('site-theme');
        if (dom) {
            dom.remove();
        }
        localStorage.removeItem('site-theme');
        if (theme !== 'default') {
            const style = document.createElement('link');
            style.type = 'text/css';
            style.rel = 'stylesheet';
            style.id = 'site-theme';
            style.href = `assets/style.${theme}.css`;
            localStorage.setItem('site-theme', theme);
            document.body.append(style);
        }
        this.updateChartTheme();
    }
}
LayoutThemeBtnComponent.ɵfac = function LayoutThemeBtnComponent_Factory(t) { return new (t || LayoutThemeBtnComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.AlainConfigService)); };
LayoutThemeBtnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutThemeBtnComponent, selectors: [["layout-theme-btn"]], decls: 14, vars: 1, consts: [["nz-dropdown", "", "nzPlacement", "topCenter", 1, "ant-avatar", "ant-avatar-circle", "ant-avatar-icon", 3, "nzDropdownMenu"], ["role", "img", "width", "21", "height", "21", "viewBox", "0 0 21 21", "fill", "currentColor", 1, "anticon"], ["fill-rule", "evenodd"], ["fill-rule", "nonzero"], ["d", "M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", 3, "click"]], template: function LayoutThemeBtnComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelementStart(2, "g", 2);
        i0.ɵɵelementStart(3, "g", 3);
        i0.ɵɵelement(4, "path", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(5, "nz-dropdown-menu", null, 5);
        i0.ɵɵelementStart(7, "ul", 6);
        i0.ɵɵelementStart(8, "li", 7);
        i0.ɵɵlistener("click", function LayoutThemeBtnComponent_Template_li_click_8_listener() { return ctx.onThemeChange("default"); });
        i0.ɵɵtext(9, "Default Theme");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "li", 7);
        i0.ɵɵlistener("click", function LayoutThemeBtnComponent_Template_li_click_10_listener() { return ctx.onThemeChange("dark"); });
        i0.ɵɵtext(11, "Dark Theme");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "li", 7);
        i0.ɵɵlistener("click", function LayoutThemeBtnComponent_Template_li_click_12_listener() { return ctx.onThemeChange("compact"); });
        i0.ɵɵtext(13, "Compact Theme");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(6);
        i0.ɵɵproperty("nzDropdownMenu", _r0);
    } }, directives: [i2.NzDropDownDirective, i2.NzDropdownMenuComponent, i3.NzMenuDirective, i4.ɵNzTransitionPatchDirective, i3.NzMenuItemDirective], styles: ["[_nghost-%COMP%]    {bottom:102px;cursor:pointer;display:flex;flex-direction:column;position:fixed;right:32px;z-index:2147483640}[_nghost-%COMP%]    -active{color:#1890ff;font-size:22px;height:44px;line-height:44px;width:44px}[_nghost-%COMP%]     .ant-avatar{background-color:#fff;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);color:#000;transition:color .3s}[_nghost-%COMP%]     .ant-avatar:hover{color:#1890ff}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayoutThemeBtnComponent, [{
        type: Component,
        args: [{
                selector: 'layout-theme-btn',
                templateUrl: './theme-btn.component.html',
                styleUrls: ['./theme-btn.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.AlainConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9sYXlvdXQvc3JjL2RlZmF1bHQvdGhlbWUtYnRuL3RoZW1lLWJ0bi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L3RoZW1lLWJ0bi90aGVtZS1idG4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7QUFVakQsTUFBTSxPQUFPLHVCQUF1QjtJQUdsQyxZQUFvQixRQUFtQixFQUFVLFNBQTZCO1FBQTFELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUY5RSxVQUFLLEdBQWMsU0FBUyxDQUFDO0lBRW9ELENBQUM7SUFFbEYsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQWUsSUFBSSxTQUFTLENBQUM7UUFDNUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWdCO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9ELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZDtRQUNELFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7WUFDeEIsS0FBSyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7WUFDekIsS0FBSyxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUM7WUFDeEIsS0FBSyxDQUFDLElBQUksR0FBRyxnQkFBZ0IsS0FBSyxNQUFNLENBQUM7WUFFekMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs4RkF0Q1UsdUJBQXVCOzREQUF2Qix1QkFBdUI7UUNYcEMsOEJBQ0U7UUFBQSxtQkFDRTtRQURGLDhCQUNFO1FBQUEsNEJBQ0U7UUFBQSw0QkFDRTtRQUFBLDBCQUVRO1FBQ1YsaUJBQUk7UUFDTixpQkFBSTtRQUNOLGlCQUFNO1FBQ04sb0JBQ0U7UUFERixpREFDRTtRQUFBLDZCQUNFO1FBQUEsNkJBQW9EO1FBQW5DLGdHQUFTLGtCQUFjLFNBQVMsQ0FBQyxJQUFDO1FBQUMsNkJBQWE7UUFBQSxpQkFBSztRQUN0RSw4QkFBaUQ7UUFBaEMsaUdBQVMsa0JBQWMsTUFBTSxDQUFDLElBQUM7UUFBQywyQkFBVTtRQUFBLGlCQUFLO1FBQ2hFLDhCQUFvRDtRQUFuQyxpR0FBUyxrQkFBYyxTQUFTLENBQUMsSUFBQztRQUFDLDhCQUFhO1FBQUEsaUJBQUs7UUFDeEUsaUJBQUs7UUFDUCxpQkFBbUI7UUFDckIsaUJBQU07OztRQWpCd0Ysb0NBQXVCOztrRERXeEcsdUJBQXVCO2NBTm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG50eXBlIFNpdGVUaGVtZSA9ICdkZWZhdWx0JyB8ICdkYXJrJyB8ICdjb21wYWN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGF5b3V0LXRoZW1lLWJ0bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RoZW1lLWJ0bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGhlbWUtYnRuLmNvbXBvbmVudC5sZXNzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRUaGVtZUJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdGhlbWU6IFNpdGVUaGVtZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdFRoZW1lKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRUaGVtZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGhlbWUgPSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpdGUtdGhlbWUnKSBhcyBTaXRlVGhlbWUpIHx8ICdkZWZhdWx0JztcclxuICAgIHRoaXMudXBkYXRlQ2hhcnRUaGVtZSgpO1xyXG4gICAgdGhpcy5vblRoZW1lQ2hhbmdlKHRoaXMudGhlbWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDaGFydFRoZW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWdTcnYuc2V0KCdjaGFydCcsIHsgdGhlbWU6IHRoaXMudGhlbWUgPT09ICdkYXJrJyA/ICdkYXJrJyA6ICcnIH0pO1xyXG4gIH1cclxuXHJcbiAgb25UaGVtZUNoYW5nZSh0aGVtZTogU2l0ZVRoZW1lKTogdm9pZCB7XHJcbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShkb2N1bWVudC5ib2R5LCAnZGF0YS10aGVtZScsIHRoZW1lKTtcclxuICAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlLXRoZW1lJyk7XHJcbiAgICBpZiAoZG9tKSB7XHJcbiAgICAgIGRvbS5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzaXRlLXRoZW1lJyk7XHJcbiAgICBpZiAodGhlbWUgIT09ICdkZWZhdWx0Jykge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgIHN0eWxlLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuICAgICAgc3R5bGUuaWQgPSAnc2l0ZS10aGVtZSc7XHJcbiAgICAgIHN0eWxlLmhyZWYgPSBgYXNzZXRzL3N0eWxlLiR7dGhlbWV9LmNzc2A7XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2l0ZS10aGVtZScsIHRoZW1lKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc3R5bGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVDaGFydFRoZW1lKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtYXZhdGFyIGFudC1hdmF0YXItY2lyY2xlIGFudC1hdmF0YXItaWNvblwiIG56LWRyb3Bkb3duIG56UGxhY2VtZW50PVwidG9wQ2VudGVyXCIgW256RHJvcGRvd25NZW51XT1cIm1lbnVcIj5cclxuICA8c3ZnIGNsYXNzPVwiYW50aWNvblwiIHJvbGU9XCJpbWdcIiB3aWR0aD1cIjIxXCIgaGVpZ2h0PVwiMjFcIiB2aWV3Qm94PVwiMCAwIDIxIDIxXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgPGcgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICA8ZyBmaWxsLXJ1bGU9XCJub256ZXJvXCI+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNNy4wMiAzLjYzNWwxMi41MTggMTIuNTE4YTEuODYzIDEuODYzIDAgMDEwIDIuNjM1bC0xLjMxNyAxLjMxOGExLjg2MyAxLjg2MyAwIDAxLTIuNjM1IDBMMy4wNjggNy41ODhBMi43OTUgMi43OTUgMCAxMTcuMDIgMy42MzV6bTIuMDkgMTQuNDI4YS45MzIuOTMyIDAgMTEwIDEuODY0LjkzMi45MzIgMCAwMTAtMS44NjR6bS0uMDQzLTkuNzQ3TDcuNzUgOS42MzVsOS4xNTQgOS4xNTMgMS4zMTgtMS4zMTctOS4xNTQtOS4xNTV6TTMuNTIgMTIuNDczYy41MTQgMCAuOTMxLjQxNy45MzEuOTMxdi45MzJoLjkzMmEuOTMyLjkzMiAwIDExMCAxLjg2NGgtLjkzMnYuOTMxYS45MzIuOTMyIDAgMDEtMS44NjMgMGwtLjAwMS0uOTMxaC0uOTNhLjkzMi45MzIgMCAwMTAtMS44NjRoLjkzdi0uOTMyYzAtLjUxNC40MTgtLjkzMS45MzMtLjkzMXptMTUuMzc0LTMuNzI3YTEuMzk4IDEuMzk4IDAgMTEwIDIuNzk1IDEuMzk4IDEuMzk4IDAgMDEwLTIuNzk1ek00LjM4NSA0Ljk1M2EuOTMyLjkzMiAwIDAwMCAxLjMxN2wyLjA0NiAyLjA0N0w3Ljc1IDcgNS43MDMgNC45NTNhLjkzMi45MzIgMCAwMC0xLjMxOCAwek0xNC43MDEuMzZhLjkzMi45MzIgMCAwMS45MzEuOTMydi45MzFoLjkzMmEuOTMyLjkzMiAwIDAxMCAxLjg2NGgtLjkzM2wuMDAxLjkzMmEuOTMyLjkzMiAwIDExLTEuODYzIDBsLS4wMDEtLjkzMmgtLjkzYS45MzIuOTMyIDAgMTEwLTEuODY0aC45M3YtLjkzMWEuOTMyLjkzMiAwIDAxLjkzMy0uOTMyelwiXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgPC9nPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG4gIDxuei1kcm9wZG93bi1tZW51ICNtZW51PVwibnpEcm9wZG93bk1lbnVcIj5cclxuICAgIDx1bCBuei1tZW51IG56U2VsZWN0YWJsZT5cclxuICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwib25UaGVtZUNoYW5nZSgnZGVmYXVsdCcpXCI+RGVmYXVsdCBUaGVtZTwvbGk+XHJcbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cIm9uVGhlbWVDaGFuZ2UoJ2RhcmsnKVwiPkRhcmsgVGhlbWU8L2xpPlxyXG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJvblRoZW1lQ2hhbmdlKCdjb21wYWN0JylcIj5Db21wYWN0IFRoZW1lPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9uei1kcm9wZG93bi1tZW51PlxyXG48L2Rpdj5cclxuIl19