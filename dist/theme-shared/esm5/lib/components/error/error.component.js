/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/error/error.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { takeUntilDestroy } from '@abp/ng.core';
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.status = 0;
        this.title = 'Oops!';
        this.details = 'Sorry, an error has occured.';
        this.customComponent = null;
        this.hideCloseIcon = false;
    }
    Object.defineProperty(ErrorComponent.prototype, "statusText", {
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
    ErrorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.customComponent) {
            /** @type {?} */
            var customComponentRef = this.cfRes.resolveComponentFactory(this.customComponent).create(this.injector);
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
    ErrorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ErrorComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    ErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-error',
                    template: "<div #container id=\"abp-error\" class=\"error\">\r\n  <button *ngIf=\"!hideCloseIcon\" id=\"abp-close-button\" type=\"button\" class=\"close mr-2\" (click)=\"destroy()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a (click)=\"destroy()\" routerLink=\"/\" class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".error{position:fixed;top:0;background-color:#fff;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
                }] }
    ];
    ErrorComponent.propDecorators = {
        containerRef: [{ type: ViewChild, args: ['container', { static: false },] }]
    };
    return ErrorComponent;
}());
export { ErrorComponent };
if (false) {
    /** @type {?} */
    ErrorComponent.prototype.appRef;
    /** @type {?} */
    ErrorComponent.prototype.cfRes;
    /** @type {?} */
    ErrorComponent.prototype.injector;
    /** @type {?} */
    ErrorComponent.prototype.status;
    /** @type {?} */
    ErrorComponent.prototype.title;
    /** @type {?} */
    ErrorComponent.prototype.details;
    /** @type {?} */
    ErrorComponent.prototype.customComponent;
    /** @type {?} */
    ErrorComponent.prototype.destroy$;
    /** @type {?} */
    ErrorComponent.prototype.hideCloseIcon;
    /** @type {?} */
    ErrorComponent.prototype.containerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEQsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBSVYsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RDtJQUFBO1FBWUUsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLFVBQUssR0FBNkIsT0FBTyxDQUFDO1FBRTFDLFlBQU8sR0FBNkIsOEJBQThCLENBQUM7UUFFbkUsb0JBQWUsR0FBYyxJQUFJLENBQUM7UUFJbEMsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFvQ3hCLENBQUM7SUEvQkMsc0JBQUksc0NBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBSSxJQUFJLENBQUMsTUFBTSxNQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTs7OztJQUVELHdDQUFlOzs7SUFBZjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7O2dCQUNsQixrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN6RyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEQsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLG1CQUFBLGtCQUFrQixDQUFDLFFBQVEsRUFBd0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hILGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3REO1FBRUQsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDekIsSUFBSSxDQUNILGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUN0QixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE1BQU07Ozs7UUFBQyxVQUFDLEdBQWtCLElBQUssT0FBQSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQTNCLENBQTJCLEVBQUMsQ0FDNUQ7YUFDQSxTQUFTOzs7UUFBQztZQUNULEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVgsY0FBZSxDQUFDOzs7O0lBRWhCLGdDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkF6REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixtNkJBQXFDOztpQkFFdEM7OzsrQkFvQkUsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBa0MzQyxxQkFBQztDQUFBLEFBMURELElBMERDO1NBckRZLGNBQWM7OztJQUN6QixnQ0FBdUI7O0lBRXZCLCtCQUFnQzs7SUFFaEMsa0NBQW1COztJQUVuQixnQ0FBVzs7SUFFWCwrQkFBMEM7O0lBRTFDLGlDQUFtRTs7SUFFbkUseUNBQWtDOztJQUVsQyxrQ0FBd0I7O0lBRXhCLHVDQUFzQjs7SUFFdEIsc0NBQ3lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnLCB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgT25EZXN0cm95LFxyXG4gIFR5cGUsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIEluamVjdG9yLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1lcnJvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZXJyb3IuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmO1xyXG5cclxuICBjZlJlczogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xyXG5cclxuICBpbmplY3RvcjogSW5qZWN0b3I7XHJcblxyXG4gIHN0YXR1cyA9IDA7XHJcblxyXG4gIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0gPSAnT29wcyEnO1xyXG5cclxuICBkZXRhaWxzOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0gPSAnU29ycnksIGFuIGVycm9yIGhhcyBvY2N1cmVkLic7XHJcblxyXG4gIGN1c3RvbUNvbXBvbmVudDogVHlwZTxhbnk+ID0gbnVsbDtcclxuXHJcbiAgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD47XHJcblxyXG4gIGhpZGVDbG9zZUljb24gPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgY29udGFpbmVyUmVmOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgZ2V0IHN0YXR1c1RleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyA/IGBbJHt0aGlzLnN0YXR1c31dYCA6ICcnO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ29tcG9uZW50KSB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbUNvbXBvbmVudFJlZiA9IHRoaXMuY2ZSZXMucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jdXN0b21Db21wb25lbnQpLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuICAgICAgY3VzdG9tQ29tcG9uZW50UmVmLmluc3RhbmNlLmVycm9yU3RhdHVzID0gdGhpcy5zdGF0dXM7XHJcbiAgICAgIGN1c3RvbUNvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXN0cm95JCA9IHRoaXMuZGVzdHJveSQ7XHJcbiAgICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY3VzdG9tQ29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCgoY3VzdG9tQ29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0pO1xyXG4gICAgICBjdXN0b21Db21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZyb21FdmVudChkb2N1bWVudCwgJ2tleXVwJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveSh0aGlzKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTUwKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19