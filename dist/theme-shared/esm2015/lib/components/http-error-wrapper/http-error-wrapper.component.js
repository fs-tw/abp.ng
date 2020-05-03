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
export class HttpErrorWrapperComponent {
    constructor() {
        this.status = 0;
        this.title = 'Oops!';
        this.details = 'Sorry, an error has occured.';
        this.customComponent = null;
        this.hideCloseIcon = false;
        this.isHomeShow = true;
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
    ngOnInit() {
        this.backgroundColor =
            snq((/**
             * @return {?}
             */
            () => window.getComputedStyle(document.body).getPropertyValue('background-color'))) ||
                '#fff';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.customComponent) {
            /** @type {?} */
            const customComponentRef = this.cfRes
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaHR0cC1lcnJvci13cmFwcGVyL2h0dHAtZXJyb3Itd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEQsT0FBTyxFQUdMLFNBQVMsRUFFVCxVQUFVLEVBTVYsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFPdEIsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQVlFLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxVQUFLLEdBQTZCLE9BQU8sQ0FBQztRQUUxQyxZQUFPLEdBQTZCLDhCQUE4QixDQUFDO1FBRW5FLG9CQUFlLEdBQWMsSUFBSSxDQUFDO1FBSWxDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBSXRCLGVBQVUsR0FBRyxJQUFJLENBQUM7SUE4Q3BCLENBQUM7Ozs7SUF6Q0MsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWU7WUFDbEIsR0FBRzs7O1lBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDO2dCQUN0RixNQUFNLENBQUM7SUFDWCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTs7a0JBQ2xCLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLO2lCQUNsQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2lCQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN4QixrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEQsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FDekMsQ0FBQyxtQkFBQSxrQkFBa0IsQ0FBQyxRQUFRLEVBQXdCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQ25FLENBQUM7WUFDRixrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0RDtRQUVELFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ3pCLElBQUksQ0FDSCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFDdEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixNQUFNOzs7O1FBQUMsQ0FBQyxHQUFrQixFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUMsQ0FDNUQ7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsV0FBVyxLQUFJLENBQUM7Ozs7SUFFaEIsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUF2RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLGduQ0FBa0Q7O2FBRW5EOzs7MkJBd0JFLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBdEJ6QywyQ0FBdUI7O0lBRXZCLDBDQUFnQzs7SUFFaEMsNkNBQW1COztJQUVuQiwyQ0FBVzs7SUFFWCwwQ0FBMEM7O0lBRTFDLDRDQUFtRTs7SUFFbkUsb0RBQWtDOztJQUVsQyw2Q0FBd0I7O0lBRXhCLGtEQUFzQjs7SUFFdEIsb0RBQXdCOztJQUV4QiwrQ0FBa0I7O0lBRWxCLGlEQUN5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZywgdGFrZVVudGlsRGVzdHJveSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBBcHBsaWNhdGlvblJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEluamVjdG9yLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgVHlwZSxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtaHR0cC1lcnJvci13cmFwcGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaHR0cC1lcnJvci13cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnaHR0cC1lcnJvci13cmFwcGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIGFwcFJlZjogQXBwbGljYXRpb25SZWY7XHJcblxyXG4gIGNmUmVzOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XHJcblxyXG4gIGluamVjdG9yOiBJbmplY3RvcjtcclxuXHJcbiAgc3RhdHVzID0gMDtcclxuXHJcbiAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSA9ICdPb3BzISc7XHJcblxyXG4gIGRldGFpbHM6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSA9ICdTb3JyeSwgYW4gZXJyb3IgaGFzIG9jY3VyZWQuJztcclxuXHJcbiAgY3VzdG9tQ29tcG9uZW50OiBUeXBlPGFueT4gPSBudWxsO1xyXG5cclxuICBkZXN0cm95JDogU3ViamVjdDx2b2lkPjtcclxuXHJcbiAgaGlkZUNsb3NlSWNvbiA9IGZhbHNlO1xyXG5cclxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuXHJcbiAgaXNIb21lU2hvdyA9IHRydWU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIGdldCBzdGF0dXNUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPyBgWyR7dGhpcy5zdGF0dXN9XWAgOiAnJztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPVxyXG4gICAgICBzbnEoKCkgPT4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpKSB8fFxyXG4gICAgICAnI2ZmZic7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21Db21wb25lbnQpIHtcclxuICAgICAgY29uc3QgY3VzdG9tQ29tcG9uZW50UmVmID0gdGhpcy5jZlJlc1xyXG4gICAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmN1c3RvbUNvbXBvbmVudClcclxuICAgICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgICBjdXN0b21Db21wb25lbnRSZWYuaW5zdGFuY2UuZXJyb3JTdGF0dXMgPSB0aGlzLnN0YXR1cztcclxuICAgICAgY3VzdG9tQ29tcG9uZW50UmVmLmluc3RhbmNlLmRlc3Ryb3kkID0gdGhpcy5kZXN0cm95JDtcclxuICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjdXN0b21Db21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIChjdXN0b21Db21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSxcclxuICAgICAgKTtcclxuICAgICAgY3VzdG9tQ29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3kodGhpcyksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDE1MCksXHJcbiAgICAgICAgZmlsdGVyKChrZXk6IEtleWJvYXJkRXZlbnQpID0+IGtleSAmJiBrZXkua2V5ID09PSAnRXNjYXBlJyksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7fVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==