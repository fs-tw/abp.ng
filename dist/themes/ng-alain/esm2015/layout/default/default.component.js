import { DOCUMENT } from '@angular/common';
import { Component, ComponentFactoryResolver, ElementRef, Inject, Renderer2, ViewChild, ViewContainerRef, } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { updateHostClass } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SettingDrawerComponent } from './setting-drawer/setting-drawer.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "ng-zorro-antd/message";
import * as i3 from "@delon/theme";
import * as i4 from "@angular/common";
import * as i5 from "./header/header.component";
import * as i6 from "./sidebar/sidebar.component";
import * as i7 from "./theme-btn/theme-btn.component";
const _c0 = ["settingHost"];
function LayoutDefaultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} }
function LayoutDefaultComponent_ng_template_5_Template(rf, ctx) { }
export class LayoutDefaultComponent {
    constructor(router, msgSrv, resolver, settings, el, renderer, doc) {
        this.resolver = resolver;
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((evt) => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
            }
            if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
                this.isFetching = false;
                if (evt instanceof NavigationError) {
                    msgSrv.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof NavigationEnd || evt instanceof RouteConfigLoadEnd)) {
                return;
            }
            if (this.isFetching) {
                setTimeout(() => {
                    this.isFetching = false;
                }, 100);
            }
        });
    }
    setClass() {
        const { el, doc, renderer, settings } = this;
        const layout = settings.layout;
        updateHostClass(el.nativeElement, renderer, {
            ['alain-default']: true,
            [`alain-default__fixed`]: layout.fixed,
            [`alain-default__collapsed`]: layout.collapsed,
        });
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }
    ngAfterViewInit() {
        // Setting componet for only developer
        if (true) {
            setTimeout(() => {
                const settingFactory = this.resolver.resolveComponentFactory(SettingDrawerComponent);
                this.settingHost.createComponent(settingFactory);
            }, 22);
        }
    }
    ngOnInit() {
        const { settings, unsubscribe$ } = this;
        settings.notify.pipe(takeUntil(unsubscribe$)).subscribe(() => this.setClass());
        this.setClass();
    }
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
LayoutDefaultComponent.ɵfac = function LayoutDefaultComponent_Factory(t) { return new (t || LayoutDefaultComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.NzMessageService), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i3.SettingsService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
LayoutDefaultComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutDefaultComponent, selectors: [["layout-default"]], viewQuery: function LayoutDefaultComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.settingHost = _t.first);
    } }, decls: 8, vars: 1, consts: [["class", "alain-default__progress-bar", 4, "ngIf"], [1, "alain-default__header"], [1, "alain-default__aside"], [1, "alain-default__content"], ["settingHost", ""], [1, "alain-default__progress-bar"]], template: function LayoutDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, LayoutDefaultComponent_div_0_Template, 1, 0, "div", 0);
        i0.ɵɵelement(1, "layout-header", 1);
        i0.ɵɵelement(2, "layout-sidebar", 2);
        i0.ɵɵelementStart(3, "section", 3);
        i0.ɵɵelement(4, "router-outlet");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, LayoutDefaultComponent_ng_template_5_Template, 0, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelement(7, "layout-theme-btn");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isFetching);
    } }, directives: [i4.NgIf, i5.HeaderComponent, i6.SidebarComponent, i1.RouterOutlet, i7.LayoutThemeBtnComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayoutDefaultComponent, [{
        type: Component,
        args: [{
                selector: 'layout-default',
                templateUrl: './default.component.html',
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.NzMessageService }, { type: i0.ComponentFactoryResolver }, { type: i3.SettingsService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { settingHost: [{
            type: ViewChild,
            args: ['settingHost', { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2xheW91dC9zcmMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsU0FBUyxFQUNULHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsTUFBTSxFQUdOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JJLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7Ozs7Ozs7SUNwQm5GLHlCQUFrRTs7O0FEMEJsRSxNQUFNLE9BQU8sc0JBQXNCO0lBTWpDLFlBQ0UsTUFBYyxFQUNkLE1BQXdCLEVBQ2hCLFFBQWtDLEVBQ2xDLFFBQXlCLEVBQ3pCLEVBQWMsRUFDZCxRQUFtQixFQUNELEdBQVE7UUFKMUIsYUFBUSxHQUFS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QVksRUFBRSxHQUFHLElBQUksQ0FBQztRQUM5QixZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7OzRGQXRFVSxzQkFBc0IseVFBYXZCLFFBQVE7MkRBYlAsc0JBQXNCO3dDQUVDLGdCQUFnQjs7Ozs7UUM1QnBELHVFQUE0RDtRQUM1RCxtQ0FBNkQ7UUFDN0Qsb0NBQThEO1FBQzlELGtDQUNFO1FBQUEsZ0NBQStCO1FBQ2pDLGlCQUFVO1FBQ1Ysd0hBQTBCO1FBQzFCLG1DQUFxQzs7UUFQSSxxQ0FBa0I7O2tERDBCOUMsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsMEJBQTBCO2FBQ3hDOztzQkFjSSxNQUFNO3VCQUFDLFFBQVE7O2tCQVhqQixTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBFbGVtZW50UmVmLFxyXG4gIEluamVjdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkNhbmNlbCwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkVycm9yLCBSb3V0ZUNvbmZpZ0xvYWRFbmQsIFJvdXRlQ29uZmlnTG9hZFN0YXJ0LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFNldHRpbmdEcmF3ZXJDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmctZHJhd2VyL3NldHRpbmctZHJhd2VyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGVmYXVsdC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBAVmlld0NoaWxkKCdzZXR0aW5nSG9zdCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXHJcbiAgcHJpdmF0ZSBzZXR0aW5nSG9zdDogVmlld0NvbnRhaW5lclJlZjtcclxuICBpc0ZldGNoaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBtc2dTcnY6IE56TWVzc2FnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcclxuICApIHtcclxuICAgIC8vIHNjcm9sbCB0byB0b3AgaW4gY2hhbmdlIHBhZ2VcclxuICAgIHJvdXRlci5ldmVudHMucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuaXNGZXRjaGluZyAmJiBldnQgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRTdGFydCkge1xyXG4gICAgICAgIHRoaXMuaXNGZXRjaGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvciB8fCBldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcikge1xyXG4gICAgICAgICAgbXNnU3J2LmVycm9yKGDml6Dms5XliqDovb0ke2V2dC51cmx96Lev55SxYCwgeyBuekR1cmF0aW9uOiAxMDAwICogMyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgfHwgZXZ0IGluc3RhbmNlb2YgUm91dGVDb25maWdMb2FkRW5kKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pc0ZldGNoaW5nKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XHJcbiAgICBjb25zdCB7IGVsLCBkb2MsIHJlbmRlcmVyLCBzZXR0aW5ncyB9ID0gdGhpcztcclxuICAgIGNvbnN0IGxheW91dCA9IHNldHRpbmdzLmxheW91dDtcclxuICAgIHVwZGF0ZUhvc3RDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCByZW5kZXJlciwge1xyXG4gICAgICBbJ2FsYWluLWRlZmF1bHQnXTogdHJ1ZSxcclxuICAgICAgW2BhbGFpbi1kZWZhdWx0X19maXhlZGBdOiBsYXlvdXQuZml4ZWQsXHJcbiAgICAgIFtgYWxhaW4tZGVmYXVsdF9fY29sbGFwc2VkYF06IGxheW91dC5jb2xsYXBzZWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2MuYm9keS5jbGFzc0xpc3RbbGF5b3V0LmNvbG9yV2VhayA/ICdhZGQnIDogJ3JlbW92ZSddKCdjb2xvci13ZWFrJyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAvLyBTZXR0aW5nIGNvbXBvbmV0IGZvciBvbmx5IGRldmVsb3BlclxyXG4gICAgaWYgKHRydWUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ0ZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFNldHRpbmdEcmF3ZXJDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ0hvc3QuY3JlYXRlQ29tcG9uZW50KHNldHRpbmdGYWN0b3J5KTtcclxuICAgICAgfSwgMjIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCB7IHNldHRpbmdzLCB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XHJcbiAgICBzZXR0aW5ncy5ub3RpZnkucGlwZSh0YWtlVW50aWwodW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0Q2xhc3MoKSk7XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGNvbnN0IHsgdW5zdWJzY3JpYmUkIH0gPSB0aGlzO1xyXG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fcHJvZ3Jlc3MtYmFyXCIgKm5nSWY9XCJpc0ZldGNoaW5nXCI+PC9kaXY+XHJcbjxsYXlvdXQtaGVhZGVyIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9faGVhZGVyXCI+PC9sYXlvdXQtaGVhZGVyPlxyXG48bGF5b3V0LXNpZGViYXIgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19hc2lkZVwiPjwvbGF5b3V0LXNpZGViYXI+XHJcbjxzZWN0aW9uIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fY29udGVudFwiPlxyXG4gIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuPC9zZWN0aW9uPlxyXG48bmctdGVtcGxhdGUgI3NldHRpbmdIb3N0PjwvbmctdGVtcGxhdGU+XHJcbjxsYXlvdXQtdGhlbWUtYnRuPjwvbGF5b3V0LXRoZW1lLWJ0bj5cclxuIl19