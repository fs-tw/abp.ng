/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/default.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef, ElementRef, Renderer2, Inject, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationError, NavigationCancel } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { updateHostClass } from '@delon/util';
import { SettingsService } from '@delon/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SettingDrawerComponent } from './setting-drawer/setting-drawer.component';
var LayoutDefaultComponent = /** @class */ (function () {
    function LayoutDefaultComponent(router, _message, resolver, settings, el, renderer, doc) {
        var _this = this;
        this.resolver = resolver;
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            if (!_this.isFetching && evt instanceof RouteConfigLoadStart) {
                _this.isFetching = true;
            }
            if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
                _this.isFetching = false;
                if (evt instanceof NavigationError) {
                    _message.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof NavigationEnd || evt instanceof RouteConfigLoadEnd)) {
                return;
            }
            if (_this.isFetching) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.isFetching = false;
                }), 100);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    LayoutDefaultComponent.prototype.setClass = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        var _b = this, el = _b.el, doc = _b.doc, renderer = _b.renderer, settings = _b.settings;
        /** @type {?} */
        var layout = settings.layout;
        updateHostClass(el.nativeElement, renderer, (_a = {},
            _a['alain-default'] = true,
            _a["alain-default__fixed"] = layout.fixed,
            _a["alain-default__collapsed"] = layout.collapsed,
            _a));
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    };
    /**
     * @return {?}
     */
    LayoutDefaultComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Setting componet for only developer
        if (true) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var settingFactory = _this.resolver.resolveComponentFactory(SettingDrawerComponent);
                _this.settingHost.createComponent(settingFactory);
            }), 22);
        }
    };
    /**
     * @return {?}
     */
    LayoutDefaultComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, settings = _a.settings, unsubscribe$ = _a.unsubscribe$;
        settings.notify.pipe(takeUntil(unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () { return _this.setClass(); }));
        this.setClass();
    };
    /**
     * @return {?}
     */
    LayoutDefaultComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
    };
    LayoutDefaultComponent.type = "application" /* application */;
    LayoutDefaultComponent.decorators = [
        { type: Component, args: [{
                    selector: 'layout-default',
                    template: "<div class=\"alain-default__progress-bar\" *ngIf=\"isFetching\"></div>\r\n<layout-header class=\"alain-default__header\"></layout-header>\r\n<layout-sidebar class=\"alain-default__aside\"></layout-sidebar>\r\n<section class=\"alain-default__content\">\r\n  <router-outlet></router-outlet>\r\n</section>\r\n<ng-template #settingHost></ng-template>\r\n<abp-confirmation></abp-confirmation>\r\n<abp-toast></abp-toast>\r\n"
                }] }
    ];
    /** @nocollapse */
    LayoutDefaultComponent.ctorParameters = function () { return [
        { type: Router },
        { type: NzMessageService },
        { type: ComponentFactoryResolver },
        { type: SettingsService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    LayoutDefaultComponent.propDecorators = {
        settingHost: [{ type: ViewChild, args: ['settingHost', { read: ViewContainerRef, static: true },] }]
    };
    return LayoutDefaultComponent;
}());
export { LayoutDefaultComponent };
if (false) {
    /** @type {?} */
    LayoutDefaultComponent.type;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.settingHost;
    /** @type {?} */
    LayoutDefaultComponent.prototype.isFetching;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBSWhCLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNySSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBR25GO0lBWUksZ0NBQ0ksTUFBYyxFQUNkLFFBQTBCLEVBQ2xCLFFBQWtDLEVBQ2xDLFFBQXlCLEVBQ3pCLEVBQWMsRUFDZCxRQUFtQixFQUNELEdBQVE7UUFQdEMsaUJBOEJDO1FBM0JXLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0QsUUFBRyxHQUFILEdBQUcsQ0FBSztR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QUUsZ0JBQWdCO29CQUMxQiw4YUFBdUM7aUJBQzFDOzs7O2dCQWRRLE1BQU07Z0JBQ04sZ0JBQWdCO2dCQVhyQix3QkFBd0I7Z0JBYW5CLGVBQWU7Z0JBUnBCLFVBQVU7Z0JBQ1YsU0FBUztnREFrQ0osTUFBTSxTQUFDLFFBQVE7Ozs4QkFYbkIsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQXFFdEUsNkJBQUM7Q0FBQSxBQTdFRCxJQTZFQztTQXpFWSxzQkFBc0I7OztJQUUvQiw0QkFBc0M7Ozs7O0lBQ3RDLDhDQUEyQzs7Ozs7SUFDM0MsNkNBQ3NDOztJQUN0Qyw0Q0FBbUI7Ozs7O0lBS2YsMENBQTBDOzs7OztJQUMxQywwQ0FBaUM7Ozs7O0lBQ2pDLG9DQUFzQjs7Ozs7SUFDdEIsMENBQTJCOzs7OztJQUMzQixxQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgVmlld0NvbnRhaW5lclJlZixcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgSW5qZWN0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgUm91dGVDb25maWdMb2FkU3RhcnQsIFJvdXRlQ29uZmlnTG9hZEVuZCwgTmF2aWdhdGlvbkVycm9yLCBOYXZpZ2F0aW9uQ2FuY2VsIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBTZXR0aW5nRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5nLWRyYXdlci9zZXR0aW5nLWRyYXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBlTGF5b3V0VHlwZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGF5b3V0LWRlZmF1bHQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RlZmF1bHQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBzdGF0aWMgdHlwZSA9IGVMYXlvdXRUeXBlLmFwcGxpY2F0aW9uO1xyXG4gICAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgQFZpZXdDaGlsZCgnc2V0dGluZ0hvc3QnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxyXG4gICAgcHJpdmF0ZSBzZXR0aW5nSG9zdDogVmlld0NvbnRhaW5lclJlZjtcclxuICAgIGlzRmV0Y2hpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBfbWVzc2FnZTogTnpNZXNzYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgICApIHtcclxuICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIGluIGNoYW5nZSBwYWdlXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShldnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGZXRjaGluZyAmJiBldnQgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRTdGFydCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZldGNoaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yIHx8IGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGZXRjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIF9tZXNzYWdlLmVycm9yKGDml6Dms5XliqDovb0ke2V2dC51cmx96Lev55SxYCwgeyBuekR1cmF0aW9uOiAxMDAwICogMyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIShldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8IGV2dCBpbnN0YW5jZW9mIFJvdXRlQ29uZmlnTG9hZEVuZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ZldGNoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENsYXNzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZWwsIGRvYywgcmVuZGVyZXIsIHNldHRpbmdzIH0gPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGxheW91dCA9IHNldHRpbmdzLmxheW91dDtcclxuICAgICAgICB1cGRhdGVIb3N0Q2xhc3MoZWwubmF0aXZlRWxlbWVudCwgcmVuZGVyZXIsIHtcclxuICAgICAgICAgICAgWydhbGFpbi1kZWZhdWx0J106IHRydWUsXHJcbiAgICAgICAgICAgIFtgYWxhaW4tZGVmYXVsdF9fZml4ZWRgXTogbGF5b3V0LmZpeGVkLFxyXG4gICAgICAgICAgICBbYGFsYWluLWRlZmF1bHRfX2NvbGxhcHNlZGBdOiBsYXlvdXQuY29sbGFwc2VkLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2MuYm9keS5jbGFzc0xpc3RbbGF5b3V0LmNvbG9yV2VhayA/ICdhZGQnIDogJ3JlbW92ZSddKCdjb2xvci13ZWFrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFNldHRpbmcgY29tcG9uZXQgZm9yIG9ubHkgZGV2ZWxvcGVyXHJcbiAgICAgICAgaWYgKHRydWUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXR0aW5nRmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoU2V0dGluZ0RyYXdlckNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdIb3N0LmNyZWF0ZUNvbXBvbmVudChzZXR0aW5nRmFjdG9yeSk7XHJcbiAgICAgICAgICAgIH0sIDIyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzZXR0aW5ncywgdW5zdWJzY3JpYmUkIH0gPSB0aGlzO1xyXG4gICAgICAgIHNldHRpbmdzLm5vdGlmeS5waXBlKHRha2VVbnRpbCh1bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRDbGFzcygpKTtcclxuICAgICAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XHJcbiAgICAgICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgICAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=