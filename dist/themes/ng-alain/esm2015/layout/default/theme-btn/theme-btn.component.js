import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';
let LayoutThemeBtnComponent = class LayoutThemeBtnComponent {
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
};
LayoutThemeBtnComponent = __decorate([
    Component({
        selector: 'layout-theme-btn',
        template: "<div class=\"ant-avatar ant-avatar-circle ant-avatar-icon\" nz-dropdown nzPlacement=\"topCenter\" [nzDropdownMenu]=\"menu\">\r\n  <svg class=\"anticon\" role=\"img\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"currentColor\">\r\n    <g fill-rule=\"evenodd\">\r\n      <g fill-rule=\"nonzero\">\r\n        <path\r\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\r\n        ></path>\r\n      </g>\r\n    </g>\r\n  </svg>\r\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n    <ul nz-menu nzSelectable>\r\n      <li nz-menu-item (click)=\"onThemeChange('default')\">Default Theme</li>\r\n      <li nz-menu-item (click)=\"onThemeChange('dark')\">Dark Theme</li>\r\n      <li nz-menu-item (click)=\"onThemeChange('compact')\">Compact Theme</li>\r\n    </ul>\r\n  </nz-dropdown-menu>\r\n</div>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host ::ng-deep{bottom:102px;cursor:pointer;display:flex;flex-direction:column;position:fixed;right:32px;z-index:2147483640}:host ::ng-deep-active{color:#1890ff;font-size:22px;height:44px;line-height:44px;width:44px}:host ::ng-deep .ant-avatar{background-color:#fff;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);color:#000;transition:color .3s}:host ::ng-deep .ant-avatar:hover{color:#1890ff}"]
    }),
    __metadata("design:paramtypes", [Renderer2, AlainConfigService])
], LayoutThemeBtnComponent);
export { LayoutThemeBtnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9sYXlvdXQvc3JjL2RlZmF1bHQvdGhlbWUtYnRuL3RoZW1lLWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVVqRCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQUdsQyxZQUFvQixRQUFtQixFQUFVLFNBQTZCO1FBQTFELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUY5RSxVQUFLLEdBQWMsU0FBUyxDQUFDO0lBRW9ELENBQUM7SUFFbEYsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQWUsSUFBSSxTQUFTLENBQUM7UUFDNUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWdCO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9ELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZDtRQUNELFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7WUFDeEIsS0FBSyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7WUFDekIsS0FBSyxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUM7WUFDeEIsS0FBSyxDQUFDLElBQUksR0FBRyxnQkFBZ0IsS0FBSyxNQUFNLENBQUM7WUFFekMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0YsQ0FBQTtBQXZDWSx1QkFBdUI7SUFObkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixnL0NBQXlDO1FBRXpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDO3FDQUk4QixTQUFTLEVBQXFCLGtCQUFrQjtHQUhuRSx1QkFBdUIsQ0F1Q25DO1NBdkNZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbnR5cGUgU2l0ZVRoZW1lID0gJ2RlZmF1bHQnIHwgJ2RhcmsnIHwgJ2NvbXBhY3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsYXlvdXQtdGhlbWUtYnRuJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGhlbWUtYnRuLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90aGVtZS1idG4uY29tcG9uZW50Lmxlc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dFRoZW1lQnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0aGVtZTogU2l0ZVRoZW1lID0gJ2RlZmF1bHQnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0VGhlbWUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFRoZW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy50aGVtZSA9IChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2l0ZS10aGVtZScpIGFzIFNpdGVUaGVtZSkgfHwgJ2RlZmF1bHQnO1xyXG4gICAgdGhpcy51cGRhdGVDaGFydFRoZW1lKCk7XHJcbiAgICB0aGlzLm9uVGhlbWVDaGFuZ2UodGhpcy50aGVtZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNoYXJ0VGhlbWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZ1Nydi5zZXQoJ2NoYXJ0JywgeyB0aGVtZTogdGhpcy50aGVtZSA9PT0gJ2RhcmsnID8gJ2RhcmsnIDogJycgfSk7XHJcbiAgfVxyXG5cclxuICBvblRoZW1lQ2hhbmdlKHRoZW1lOiBTaXRlVGhlbWUpOiB2b2lkIHtcclxuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGRvY3VtZW50LmJvZHksICdkYXRhLXRoZW1lJywgdGhlbWUpO1xyXG4gICAgY29uc3QgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtdGhlbWUnKTtcclxuICAgIGlmIChkb20pIHtcclxuICAgICAgZG9tLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NpdGUtdGhlbWUnKTtcclxuICAgIGlmICh0aGVtZSAhPT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgc3R5bGUucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG4gICAgICBzdHlsZS5pZCA9ICdzaXRlLXRoZW1lJztcclxuICAgICAgc3R5bGUuaHJlZiA9IGBhc3NldHMvc3R5bGUuJHt0aGVtZX0uY3NzYDtcclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaXRlLXRoZW1lJywgdGhlbWUpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzdHlsZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0VGhlbWUoKTtcclxuICB9XHJcbn1cclxuIl19