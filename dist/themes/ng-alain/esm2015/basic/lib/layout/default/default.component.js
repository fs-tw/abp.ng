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
export class LayoutDefaultComponent {
    /**
     * @param {?} router
     * @param {?} _message
     * @param {?} resolver
     * @param {?} settings
     * @param {?} el
     * @param {?} renderer
     * @param {?} doc
     */
    constructor(router, _message, resolver, settings, el, renderer, doc) {
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
        evt => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
            }
            if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
                this.isFetching = false;
                if (evt instanceof NavigationError) {
                    _message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof NavigationEnd || evt instanceof RouteConfigLoadEnd)) {
                return;
            }
            if (this.isFetching) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.isFetching = false;
                }), 100);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    setClass() {
        const { el, doc, renderer, settings } = this;
        /** @type {?} */
        const layout = settings.layout;
        updateHostClass(el.nativeElement, renderer, {
            ['alain-default']: true,
            [`alain-default__fixed`]: layout.fixed,
            [`alain-default__collapsed`]: layout.collapsed,
        });
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Setting componet for only developer
        if (true) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const settingFactory = this.resolver.resolveComponentFactory(SettingDrawerComponent);
                this.settingHost.createComponent(settingFactory);
            }), 22);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { settings, unsubscribe$ } = this;
        settings.notify.pipe(takeUntil(unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => this.setClass()));
        this.setClass();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
LayoutDefaultComponent.type = "application" /* application */;
LayoutDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-default',
                template: "<div class=\"alain-default__progress-bar\" *ngIf=\"isFetching\"></div>\r\n<layout-header class=\"alain-default__header\"></layout-header>\r\n<layout-sidebar class=\"alain-default__aside\"></layout-sidebar>\r\n<section class=\"alain-default__content\">\r\n  <router-outlet></router-outlet>\r\n</section>\r\n<ng-template #settingHost></ng-template>\r\n<abp-confirmation></abp-confirmation>\r\n<abp-toast></abp-toast>\r\n"
            }] }
];
/** @nocollapse */
LayoutDefaultComponent.ctorParameters = () => [
    { type: Router },
    { type: NzMessageService },
    { type: ComponentFactoryResolver },
    { type: SettingsService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
LayoutDefaultComponent.propDecorators = {
    settingHost: [{ type: ViewChild, args: ['settingHost', { read: ViewContainerRef, static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBSWhCLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNySSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBT25GLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7SUFRL0IsWUFDSSxNQUFjLEVBQ2QsUUFBMEIsRUFDbEIsUUFBa0MsRUFDbEMsUUFBeUIsRUFDekIsRUFBYyxFQUNkLFFBQW1CLEVBQ0QsR0FBUTtRQUoxQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNELFFBQUcsR0FB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QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiw4YUFBdUM7YUFDMUM7Ozs7WUFkUSxNQUFNO1lBQ04sZ0JBQWdCO1lBWHJCLHdCQUF3QjtZQWFuQixlQUFlO1lBUnBCLFVBQVU7WUFDVixTQUFTOzRDQWtDSixNQUFNLFNBQUMsUUFBUTs7OzBCQVhuQixTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFGbEUsNEJBQXNDOzs7OztJQUN0Qyw4Q0FBMkM7Ozs7O0lBQzNDLDZDQUNzQzs7SUFDdEMsNENBQW1COzs7OztJQUtmLDBDQUEwQzs7Ozs7SUFDMUMsMENBQWlDOzs7OztJQUNqQyxvQ0FBc0I7Ozs7O0lBQ3RCLDBDQUEyQjs7Ozs7SUFDM0IscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIFJlbmRlcmVyMixcclxuICAgIEluamVjdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQsIFJvdXRlQ29uZmlnTG9hZFN0YXJ0LCBSb3V0ZUNvbmZpZ0xvYWRFbmQsIE5hdmlnYXRpb25FcnJvciwgTmF2aWdhdGlvbkNhbmNlbCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgdXBkYXRlSG9zdENsYXNzIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgU2V0dGluZ0RyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgZUxheW91dFR5cGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZWZhdWx0LmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgc3RhdGljIHR5cGUgPSBlTGF5b3V0VHlwZS5hcHBsaWNhdGlvbjtcclxuICAgIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIEBWaWV3Q2hpbGQoJ3NldHRpbmdIb3N0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcclxuICAgIHByaXZhdGUgc2V0dGluZ0hvc3Q6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgICBpc0ZldGNoaW5nID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgX21lc3NhZ2U6IE56TWVzc2FnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gc2Nyb2xsIHRvIHRvcCBpbiBjaGFuZ2UgcGFnZVxyXG4gICAgICAgIHJvdXRlci5ldmVudHMucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoZXZ0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmV0Y2hpbmcgJiYgZXZ0IGluc3RhbmNlb2YgUm91dGVDb25maWdMb2FkU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGZXRjaGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvciB8fCBldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBfbWVzc2FnZS5lcnJvcihg5peg5rOV5Yqg6L29JHtldnQudXJsfei3r+eUsWAsIHsgbnpEdXJhdGlvbjogMTAwMCAqIDMgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEoZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCB8fCBldnQgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRFbmQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNGZXRjaGluZykge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcclxuICAgICAgICBjb25zdCB7IGVsLCBkb2MsIHJlbmRlcmVyLCBzZXR0aW5ncyB9ID0gdGhpcztcclxuICAgICAgICBjb25zdCBsYXlvdXQgPSBzZXR0aW5ncy5sYXlvdXQ7XHJcbiAgICAgICAgdXBkYXRlSG9zdENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCB7XHJcbiAgICAgICAgICAgIFsnYWxhaW4tZGVmYXVsdCddOiB0cnVlLFxyXG4gICAgICAgICAgICBbYGFsYWluLWRlZmF1bHRfX2ZpeGVkYF06IGxheW91dC5maXhlZCxcclxuICAgICAgICAgICAgW2BhbGFpbi1kZWZhdWx0X19jb2xsYXBzZWRgXTogbGF5b3V0LmNvbGxhcHNlZCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jLmJvZHkuY2xhc3NMaXN0W2xheW91dC5jb2xvcldlYWsgPyAnYWRkJyA6ICdyZW1vdmUnXSgnY29sb3Itd2VhaycpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBTZXR0aW5nIGNvbXBvbmV0IGZvciBvbmx5IGRldmVsb3BlclxyXG4gICAgICAgIGlmICh0cnVlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0dGluZ0ZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFNldHRpbmdEcmF3ZXJDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nSG9zdC5jcmVhdGVDb21wb25lbnQoc2V0dGluZ0ZhY3RvcnkpO1xyXG4gICAgICAgICAgICB9LCAyMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2V0dGluZ3MsIHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcclxuICAgICAgICBzZXR0aW5ncy5ub3RpZnkucGlwZSh0YWtlVW50aWwodW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0Q2xhc3MoKSk7XHJcbiAgICAgICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnN0IHsgdW5zdWJzY3JpYmUkIH0gPSB0aGlzO1xyXG4gICAgICAgIHVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICAgICAgdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19