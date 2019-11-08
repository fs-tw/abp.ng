/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { takeUntilDestroy } from '@abp/ng.core';
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
export class ErrorComponent {
    constructor() {
        this.status = 0;
        this.title = 'Oops!';
        this.details = 'Sorry, an error has occured.';
        this.customComponent = null;
    }
    /**
     * @return {?}
     */
    get statusText() {
        return this.status ? `[${this.status}]` : '';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.customComponent) {
            /** @type {?} */
            const customComponentRef = this.cfRes.resolveComponentFactory(this.customComponent).create(null);
            customComponentRef.instance.errorStatus = this.status;
            this.containerRef.nativeElement.appendChild(((/** @type {?} */ (customComponentRef.hostView))).rootNodes[0]);
            customComponentRef.changeDetectorRef.detectChanges();
        }
        fromEvent(document, 'keyup')
            .pipe(takeUntilDestroy(this), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key && key.key === 'Escape')))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.destroy();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    destroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-error',
                template: "<div #container id=\"abp-error\" class=\"error\">\r\n  <button id=\"abp-close-button\" type=\"button\" class=\"close mr-3\" (click)=\"destroy()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a (click)=\"destroy()\" routerLink=\"/\" class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".error{position:fixed;top:0;background-color:#fff;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
            }] }
];
ErrorComponent.propDecorators = {
    containerRef: [{ type: ViewChild, args: ['container', { static: false },] }]
};
if (false) {
    /** @type {?} */
    ErrorComponent.prototype.cfRes;
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
    ErrorComponent.prototype.containerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4RCxPQUFPLEVBRUwsU0FBUyxFQUVULFVBQVUsRUFJVixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3RELE1BQU0sT0FBTyxjQUFjO0lBTDNCO1FBUUUsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLFVBQUssR0FBNkIsT0FBTyxDQUFDO1FBRTFDLFlBQU8sR0FBNkIsOEJBQThCLENBQUM7UUFFbkUsb0JBQWUsR0FBYyxJQUFJLENBQUM7SUFvQ3BDLENBQUM7Ozs7SUE3QkMsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFOztrQkFDbEIsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsbUJBQUEsa0JBQWtCLENBQUMsUUFBUSxFQUF3QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEgsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEQ7UUFFRCxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUN6QixJQUFJLENBQ0gsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQ3RCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsTUFBTTs7OztRQUFDLENBQUMsR0FBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFDLENBQzVEO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFdBQVcsS0FBSSxDQUFDOzs7O0lBRWhCLE9BQU87UUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsMDRCQUFxQzs7YUFFdEM7OzsyQkFjRSxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQVp6QywrQkFBZ0M7O0lBRWhDLGdDQUFXOztJQUVYLCtCQUEwQzs7SUFFMUMsaUNBQW1FOztJQUVuRSx5Q0FBa0M7O0lBRWxDLGtDQUF3Qjs7SUFFeEIsc0NBQ3lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnLCB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgT25EZXN0cm95LFxyXG4gIFR5cGUsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1lcnJvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZXJyb3IuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBjZlJlczogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xyXG5cclxuICBzdGF0dXMgPSAwO1xyXG5cclxuICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtID0gJ09vcHMhJztcclxuXHJcbiAgZGV0YWlsczogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtID0gJ1NvcnJ5LCBhbiBlcnJvciBoYXMgb2NjdXJlZC4nO1xyXG5cclxuICBjdXN0b21Db21wb25lbnQ6IFR5cGU8YW55PiA9IG51bGw7XHJcblxyXG4gIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+O1xyXG5cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBjb250YWluZXJSZWY6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBnZXQgc3RhdHVzVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID8gYFske3RoaXMuc3RhdHVzfV1gIDogJyc7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21Db21wb25lbnQpIHtcclxuICAgICAgY29uc3QgY3VzdG9tQ29tcG9uZW50UmVmID0gdGhpcy5jZlJlcy5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmN1c3RvbUNvbXBvbmVudCkuY3JlYXRlKG51bGwpO1xyXG4gICAgICBjdXN0b21Db21wb25lbnRSZWYuaW5zdGFuY2UuZXJyb3JTdGF0dXMgPSB0aGlzLnN0YXR1cztcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCgoY3VzdG9tQ29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0pO1xyXG4gICAgICBjdXN0b21Db21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZyb21FdmVudChkb2N1bWVudCwgJ2tleXVwJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveSh0aGlzKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTUwKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19