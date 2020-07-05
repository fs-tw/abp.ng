import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';
let LayoutThemeBtnComponent = class LayoutThemeBtnComponent {
    constructor(renderer, configSrv, platform) {
        this.renderer = renderer;
        this.configSrv = configSrv;
        this.platform = platform;
        this.theme = 'default';
    }
    ngOnInit() {
        this.initTheme();
    }
    initTheme() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.theme = localStorage.getItem('site-theme') || 'default';
        this.updateChartTheme();
        this.onThemeChange(this.theme);
    }
    updateChartTheme() {
        this.configSrv.set('chart', { theme: this.theme === 'dark' ? 'dark' : '' });
    }
    onThemeChange(theme) {
        if (!this.platform.isBrowser) {
            return;
        }
        this.theme = theme;
        this.renderer.setAttribute(document.body, 'data-theme', theme);
        const dom = document.getElementById('site-theme');
        if (dom) {
            dom.remove();
        }
        localStorage.removeItem('site-theme');
        if (theme !== 'default') {
            const el = (this.el = document.createElement('link'));
            el.type = 'text/css';
            el.rel = 'stylesheet';
            el.id = 'site-theme';
            el.href = `assets/style.${theme}.css`;
            localStorage.setItem('site-theme', theme);
            document.body.append(el);
        }
        this.updateChartTheme();
    }
    ngOnDestroy() {
        if (this.el) {
            document.body.removeChild(this.el);
        }
    }
};
LayoutThemeBtnComponent = __decorate([
    Component({
        selector: 'layout-theme-btn',
        template: "<div class=\"ant-avatar ant-avatar-circle ant-avatar-icon\" nz-dropdown nzPlacement=\"topCenter\" [nzDropdownMenu]=\"menu\">\r\n  <svg class=\"anticon\" role=\"img\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"currentColor\">\r\n    <g fill-rule=\"evenodd\">\r\n      <g fill-rule=\"nonzero\">\r\n        <path\r\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\r\n        ></path>\r\n      </g>\r\n    </g>\r\n  </svg>\r\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n    <ul nz-menu nzSelectable>\r\n      <li nz-menu-item (click)=\"onThemeChange('default')\">Default Theme</li>\r\n      <li nz-menu-item (click)=\"onThemeChange('dark')\">Dark Theme</li>\r\n      <li nz-menu-item (click)=\"onThemeChange('compact')\">Compact Theme</li>\r\n    </ul>\r\n  </nz-dropdown-menu>\r\n</div>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host ::ng-deep{bottom:102px;cursor:pointer;display:flex;flex-direction:column;position:fixed;right:32px;z-index:2147483640}:host ::ng-deep-active{color:#1890ff;font-size:22px;height:44px;line-height:44px;width:44px}:host ::ng-deep .ant-avatar{background-color:#fff;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);color:#000;transition:color .3s}:host ::ng-deep .ant-avatar:hover{color:#1890ff}"]
    }),
    __metadata("design:paramtypes", [Renderer2, AlainConfigService, Platform])
], LayoutThemeBtnComponent);
export { LayoutThemeBtnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9sYXlvdXQvc3JjL2RlZmF1bHQvdGhlbWUtYnRuL3RoZW1lLWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBVWpELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBSWxDLFlBQW9CLFFBQW1CLEVBQVUsU0FBNkIsRUFBVSxRQUFrQjtRQUF0RixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSDFHLFVBQUssR0FBYyxTQUFTLENBQUM7SUFHZ0YsQ0FBQztJQUU5RyxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQWUsSUFBSSxTQUFTLENBQUM7UUFDNUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWdCO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvRCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Q7UUFDRCxZQUFZLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RELEVBQUUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLEtBQUssTUFBTSxDQUFDO1lBRXRDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXBEWSx1QkFBdUI7SUFObkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixnL0NBQXlDO1FBRXpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDO3FDQUs4QixTQUFTLEVBQXFCLGtCQUFrQixFQUFvQixRQUFRO0dBSi9GLHVCQUF1QixDQW9EbkM7U0FwRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbnR5cGUgU2l0ZVRoZW1lID0gJ2RlZmF1bHQnIHwgJ2RhcmsnIHwgJ2NvbXBhY3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsYXlvdXQtdGhlbWUtYnRuJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGhlbWUtYnRuLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90aGVtZS1idG4uY29tcG9uZW50Lmxlc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dFRoZW1lQnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHRoZW1lOiBTaXRlVGhlbWUgPSAnZGVmYXVsdCc7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTExpbmtFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdFRoZW1lKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRUaGVtZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aGVtZSA9IChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2l0ZS10aGVtZScpIGFzIFNpdGVUaGVtZSkgfHwgJ2RlZmF1bHQnO1xyXG4gICAgdGhpcy51cGRhdGVDaGFydFRoZW1lKCk7XHJcbiAgICB0aGlzLm9uVGhlbWVDaGFuZ2UodGhpcy50aGVtZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNoYXJ0VGhlbWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZ1Nydi5zZXQoJ2NoYXJ0JywgeyB0aGVtZTogdGhpcy50aGVtZSA9PT0gJ2RhcmsnID8gJ2RhcmsnIDogJycgfSk7XHJcbiAgfVxyXG5cclxuICBvblRoZW1lQ2hhbmdlKHRoZW1lOiBTaXRlVGhlbWUpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aGVtZSA9IHRoZW1lO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZG9jdW1lbnQuYm9keSwgJ2RhdGEtdGhlbWUnLCB0aGVtZSk7XHJcbiAgICBjb25zdCBkb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS10aGVtZScpO1xyXG4gICAgaWYgKGRvbSkge1xyXG4gICAgICBkb20ucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2l0ZS10aGVtZScpO1xyXG4gICAgaWYgKHRoZW1lICE9PSAnZGVmYXVsdCcpIHtcclxuICAgICAgY29uc3QgZWwgPSAodGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSk7XHJcbiAgICAgIGVsLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICBlbC5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICAgIGVsLmlkID0gJ3NpdGUtdGhlbWUnO1xyXG4gICAgICBlbC5ocmVmID0gYGFzc2V0cy9zdHlsZS4ke3RoZW1lfS5jc3NgO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NpdGUtdGhlbWUnLCB0aGVtZSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsKTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlQ2hhcnRUaGVtZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbCkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=