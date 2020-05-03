/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/http-error-wrapper/http-error-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { takeUntilDestroy } from '@abp/ng.core';
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import snq from 'snq';
var HttpErrorWrapperComponent = /** @class */ (function () {
    function HttpErrorWrapperComponent() {
        this.status = 0;
        this.title = 'Oops!';
        this.details = 'Sorry, an error has occured.';
        this.customComponent = null;
        this.hideCloseIcon = false;
        this.isHomeShow = true;
    }
    Object.defineProperty(HttpErrorWrapperComponent.prototype, "statusText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.status ? "[" + this.status + "]" : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.backgroundColor =
            snq((/**
             * @return {?}
             */
            function () { return window.getComputedStyle(document.body).getPropertyValue('background-color'); })) ||
                '#fff';
    };
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.customComponent) {
            /** @type {?} */
            var customComponentRef = this.cfRes
                .resolveComponentFactory(this.customComponent)
                .create(this.injector);
            customComponentRef.instance.errorStatus = this.status;
            customComponentRef.instance.destroy$ = this.destroy$;
            this.appRef.attachView(customComponentRef.hostView);
            this.containerRef.nativeElement.appendChild(((/** @type {?} */ (customComponentRef.hostView))).rootNodes[0]);
            customComponentRef.changeDetectorRef.detectChanges();
        }
        fromEvent(document, 'keyup')
            .pipe(takeUntilDestroy(this), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Escape'; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.destroy();
        }));
    };
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    HttpErrorWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-http-error-wrapper',
                    template: "<div\r\n  #container\r\n  id=\"abp-http-error-container\"\r\n  class=\"error\"\r\n  [style.backgroundColor]=\"backgroundColor\"\r\n>\r\n  <button\r\n    *ngIf=\"!hideCloseIcon\"\r\n    id=\"abp-close-button\"\r\n    type=\"button\"\r\n    class=\"close mr-2\"\r\n    (click)=\"destroy()\"\r\n  >\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a\r\n            *ngIf=\"isHomeShow\"\r\n            (click)=\"destroy()\"\r\n            routerLink=\"/\"\r\n            class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".error{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}"]
                }] }
    ];
    HttpErrorWrapperComponent.propDecorators = {
        containerRef: [{ type: ViewChild, args: ['container', { static: false },] }]
    };
    return HttpErrorWrapperComponent;
}());
export { HttpErrorWrapperComponent };
if (false) {
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.appRef;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.cfRes;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.injector;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.status;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.title;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.details;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.customComponent;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.destroy$;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.hideCloseIcon;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.backgroundColor;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.isHomeShow;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.containerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaHR0cC1lcnJvci13cmFwcGVyL2h0dHAtZXJyb3Itd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEQsT0FBTyxFQUdMLFNBQVMsRUFFVCxVQUFVLEVBTVYsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFFdEI7SUFBQTtRQVlFLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxVQUFLLEdBQTZCLE9BQU8sQ0FBQztRQUUxQyxZQUFPLEdBQTZCLDhCQUE4QixDQUFDO1FBRW5FLG9CQUFlLEdBQWMsSUFBSSxDQUFDO1FBSWxDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBSXRCLGVBQVUsR0FBRyxJQUFJLENBQUM7SUE4Q3BCLENBQUM7SUF6Q0Msc0JBQUksaURBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBSSxJQUFJLENBQUMsTUFBTSxNQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTs7OztJQUVELDRDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxlQUFlO1lBQ2xCLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLEVBQTNFLENBQTJFLEVBQUM7Z0JBQ3RGLE1BQU0sQ0FBQztJQUNYLENBQUM7Ozs7SUFFRCxtREFBZTs7O0lBQWY7UUFBQSxpQkF1QkM7UUF0QkMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFOztnQkFDbEIsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUs7aUJBQ2xDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7aUJBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3hCLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN0RCxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUN6QyxDQUFDLG1CQUFBLGtCQUFrQixDQUFDLFFBQVEsRUFBd0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FDbkUsQ0FBQztZQUNGLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3REO1FBRUQsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDekIsSUFBSSxDQUNILGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUN0QixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE1BQU07Ozs7UUFBQyxVQUFDLEdBQWtCLElBQUssT0FBQSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQTNCLENBQTJCLEVBQUMsQ0FDNUQ7YUFDQSxTQUFTOzs7UUFBQztZQUNULEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCwrQ0FBVzs7O0lBQVgsY0FBZSxDQUFDOzs7O0lBRWhCLDJDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkF2RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLGduQ0FBa0Q7O2lCQUVuRDs7OytCQXdCRSxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUE0QzNDLGdDQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0FuRVkseUJBQXlCOzs7SUFDcEMsMkNBQXVCOztJQUV2QiwwQ0FBZ0M7O0lBRWhDLDZDQUFtQjs7SUFFbkIsMkNBQVc7O0lBRVgsMENBQTBDOztJQUUxQyw0Q0FBbUU7O0lBRW5FLG9EQUFrQzs7SUFFbEMsNkNBQXdCOztJQUV4QixrREFBc0I7O0lBRXRCLG9EQUF3Qjs7SUFFeEIsK0NBQWtCOztJQUVsQixpREFDeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcsIHRha2VVbnRpbERlc3Ryb3kgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBFbGVtZW50UmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBJbmplY3RvcixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFR5cGUsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWh0dHAtZXJyb3Itd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2h0dHAtZXJyb3Itd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2h0dHAtZXJyb3Itd3JhcHBlci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cEVycm9yV3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmO1xyXG5cclxuICBjZlJlczogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xyXG5cclxuICBpbmplY3RvcjogSW5qZWN0b3I7XHJcblxyXG4gIHN0YXR1cyA9IDA7XHJcblxyXG4gIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0gPSAnT29wcyEnO1xyXG5cclxuICBkZXRhaWxzOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0gPSAnU29ycnksIGFuIGVycm9yIGhhcyBvY2N1cmVkLic7XHJcblxyXG4gIGN1c3RvbUNvbXBvbmVudDogVHlwZTxhbnk+ID0gbnVsbDtcclxuXHJcbiAgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD47XHJcblxyXG4gIGhpZGVDbG9zZUljb24gPSBmYWxzZTtcclxuXHJcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGlzSG9tZVNob3cgPSB0cnVlO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBjb250YWluZXJSZWY6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBnZXQgc3RhdHVzVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID8gYFske3RoaXMuc3RhdHVzfV1gIDogJyc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID1cclxuICAgICAgc25xKCgpID0+IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKSkgfHxcclxuICAgICAgJyNmZmYnO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ29tcG9uZW50KSB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbUNvbXBvbmVudFJlZiA9IHRoaXMuY2ZSZXNcclxuICAgICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jdXN0b21Db21wb25lbnQpXHJcbiAgICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuICAgICAgY3VzdG9tQ29tcG9uZW50UmVmLmluc3RhbmNlLmVycm9yU3RhdHVzID0gdGhpcy5zdGF0dXM7XHJcbiAgICAgIGN1c3RvbUNvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXN0cm95JCA9IHRoaXMuZGVzdHJveSQ7XHJcbiAgICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY3VzdG9tQ29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAoY3VzdG9tQ29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0sXHJcbiAgICAgICk7XHJcbiAgICAgIGN1c3RvbUNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnJvbUV2ZW50KGRvY3VtZW50LCAna2V5dXAnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWxEZXN0cm95KHRoaXMpLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxNTApLFxyXG4gICAgICAgIGZpbHRlcigoa2V5OiBLZXlib2FyZEV2ZW50KSA9PiBrZXkgJiYga2V5LmtleSA9PT0gJ0VzY2FwZScpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge31cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=