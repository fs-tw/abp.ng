/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/error/error.component.ts
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
        this.hideCloseIcon = false;
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
            const customComponentRef = this.cfRes.resolveComponentFactory(this.customComponent).create(this.injector);
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
                template: "<div #container id=\"abp-error\" class=\"error\">\r\n  <button *ngIf=\"!hideCloseIcon\" id=\"abp-close-button\" type=\"button\" class=\"close mr-2\" (click)=\"destroy()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a (click)=\"destroy()\" routerLink=\"/\" class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".error{position:fixed;top:0;background-color:#fff;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
            }] }
];
ErrorComponent.propDecorators = {
    containerRef: [{ type: ViewChild, args: ['container', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEQsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBSVYsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU90RCxNQUFNLE9BQU8sY0FBYztJQUwzQjtRQVlFLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxVQUFLLEdBQTZCLE9BQU8sQ0FBQztRQUUxQyxZQUFPLEdBQTZCLDhCQUE4QixDQUFDO1FBRW5FLG9CQUFlLEdBQWMsSUFBSSxDQUFDO1FBSWxDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBb0N4QixDQUFDOzs7O0lBL0JDLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTs7a0JBQ2xCLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3pHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN0RCxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsbUJBQUEsa0JBQWtCLENBQUMsUUFBUSxFQUF3QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEgsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEQ7UUFFRCxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUN6QixJQUFJLENBQ0gsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQ3RCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsTUFBTTs7OztRQUFDLENBQUMsR0FBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFDLENBQzVEO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFdBQVcsS0FBSSxDQUFDOzs7O0lBRWhCLE9BQU87UUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsbTZCQUFxQzs7YUFFdEM7OzsyQkFvQkUsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFsQnpDLGdDQUF1Qjs7SUFFdkIsK0JBQWdDOztJQUVoQyxrQ0FBbUI7O0lBRW5CLGdDQUFXOztJQUVYLCtCQUEwQzs7SUFFMUMsaUNBQW1FOztJQUVuRSx5Q0FBa0M7O0lBRWxDLGtDQUF3Qjs7SUFFeEIsdUNBQXNCOztJQUV0QixzQ0FDeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcsIHRha2VVbnRpbERlc3Ryb3kgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBFbGVtZW50UmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgVHlwZSxcclxuICBWaWV3Q2hpbGQsXHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgSW5qZWN0b3IsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWVycm9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydlcnJvci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXJyb3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIGFwcFJlZjogQXBwbGljYXRpb25SZWY7XHJcblxyXG4gIGNmUmVzOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XHJcblxyXG4gIGluamVjdG9yOiBJbmplY3RvcjtcclxuXHJcbiAgc3RhdHVzID0gMDtcclxuXHJcbiAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSA9ICdPb3BzISc7XHJcblxyXG4gIGRldGFpbHM6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSA9ICdTb3JyeSwgYW4gZXJyb3IgaGFzIG9jY3VyZWQuJztcclxuXHJcbiAgY3VzdG9tQ29tcG9uZW50OiBUeXBlPGFueT4gPSBudWxsO1xyXG5cclxuICBkZXN0cm95JDogU3ViamVjdDx2b2lkPjtcclxuXHJcbiAgaGlkZUNsb3NlSWNvbiA9IGZhbHNlO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBjb250YWluZXJSZWY6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBnZXQgc3RhdHVzVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID8gYFske3RoaXMuc3RhdHVzfV1gIDogJyc7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21Db21wb25lbnQpIHtcclxuICAgICAgY29uc3QgY3VzdG9tQ29tcG9uZW50UmVmID0gdGhpcy5jZlJlcy5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmN1c3RvbUNvbXBvbmVudCkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgICBjdXN0b21Db21wb25lbnRSZWYuaW5zdGFuY2UuZXJyb3JTdGF0dXMgPSB0aGlzLnN0YXR1cztcclxuICAgICAgY3VzdG9tQ29tcG9uZW50UmVmLmluc3RhbmNlLmRlc3Ryb3kkID0gdGhpcy5kZXN0cm95JDtcclxuICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjdXN0b21Db21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKChjdXN0b21Db21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSk7XHJcbiAgICAgIGN1c3RvbUNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnJvbUV2ZW50KGRvY3VtZW50LCAna2V5dXAnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWxEZXN0cm95KHRoaXMpLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxNTApLFxyXG4gICAgICAgIGZpbHRlcigoa2V5OiBLZXlib2FyZEV2ZW50KSA9PiBrZXkgJiYga2V5LmtleSA9PT0gJ0VzY2FwZScpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge31cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=