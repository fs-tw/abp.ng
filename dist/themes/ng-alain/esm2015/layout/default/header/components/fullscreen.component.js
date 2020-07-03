import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/transition-patch";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "@ngx-translate/core";
export class HeaderFullScreenComponent {
    constructor() {
        this.status = false;
    }
    get sf() {
        return screenfull;
    }
    _resize() {
        this.status = this.sf.isFullscreen;
    }
    _click() {
        if (this.sf.isEnabled) {
            this.sf.toggle();
        }
    }
}
HeaderFullScreenComponent.ɵfac = function HeaderFullScreenComponent_Factory(t) { return new (t || HeaderFullScreenComponent)(); };
HeaderFullScreenComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderFullScreenComponent, selectors: [["header-fullscreen"]], hostVars: 2, hostBindings: function HeaderFullScreenComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function HeaderFullScreenComponent_resize_HostBindingHandler() { return ctx._resize(); }, false, i0.ɵɵresolveWindow)("click", function HeaderFullScreenComponent_click_HostBindingHandler() { return ctx._click(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("d-block", true);
    } }, decls: 3, vars: 4, consts: [["nz-icon", "", 3, "nzType"]], template: function HeaderFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "i", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
    } if (rf & 2) {
        i0.ɵɵproperty("nzType", ctx.status ? "fullscreen-exit" : "fullscreen");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, ctx.status ? "menu.fullscreen.exit" : "menu.fullscreen"), " ");
    } }, directives: [i1.ɵNzTransitionPatchDirective, i2.NzIconDirective], pipes: [i3.TranslatePipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderFullScreenComponent, [{
        type: Component,
        args: [{
                selector: 'header-fullscreen',
                template: `
    <i nz-icon [nzType]="status ? 'fullscreen-exit' : 'fullscreen'"></i>
    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
  `,
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.d-block]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { _resize: [{
            type: HostListener,
            args: ['window:resize']
        }], _click: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL2Z1bGxzY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxDQUFDOzs7OztBQWN6QyxNQUFNLE9BQU8seUJBQXlCO0lBWnRDO1FBYUUsV0FBTSxHQUFHLEtBQUssQ0FBQztLQWdCaEI7SUFmQyxJQUFZLEVBQUU7UUFDWixPQUFPLFVBQW1DLENBQUM7SUFDN0MsQ0FBQztJQUdELE9BQU87UUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFHRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7a0dBaEJVLHlCQUF5Qjs4REFBekIseUJBQXlCO3dHQUF6QixhQUFTLGdIQUFULFlBQVE7Ozs7UUFUakIsdUJBQW9FO1FBQ3BFLFlBQ0Y7OztRQUZhLHNFQUFvRDtRQUMvRCxlQUNGO1FBREUsOEdBQ0Y7O2tEQU9XLHlCQUF5QjtjQVpyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7R0FHVDtnQkFDRCxzREFBc0Q7Z0JBQ3RELElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRSxNQUFNO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBT0UsWUFBWTttQkFBQyxlQUFlOztrQkFLNUIsWUFBWTttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIHNjcmVlbmZ1bGwgZnJvbSAnc2NyZWVuZnVsbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlci1mdWxsc2NyZWVuJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cInN0YXR1cyA/ICdmdWxsc2NyZWVuLWV4aXQnIDogJ2Z1bGxzY3JlZW4nXCI+PC9pPlxyXG4gICAge3sgKHN0YXR1cyA/ICdtZW51LmZ1bGxzY3JlZW4uZXhpdCcgOiAnbWVudS5mdWxsc2NyZWVuJykgfCB0cmFuc2xhdGUgfX1cclxuICBgLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuZC1ibG9ja10nOiAndHJ1ZScsXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckZ1bGxTY3JlZW5Db21wb25lbnQge1xyXG4gIHN0YXR1cyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZ2V0IHNmKCk6IHNjcmVlbmZ1bGwuU2NyZWVuZnVsbCB7XHJcbiAgICByZXR1cm4gc2NyZWVuZnVsbCBhcyBzY3JlZW5mdWxsLlNjcmVlbmZ1bGw7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcclxuICBfcmVzaXplKCkge1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLnNmLmlzRnVsbHNjcmVlbjtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBfY2xpY2soKSB7XHJcbiAgICBpZiAodGhpcy5zZi5pc0VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5zZi50b2dnbGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19