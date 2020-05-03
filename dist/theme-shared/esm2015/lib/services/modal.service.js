/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentProjectionService, PROJECTION_STRATEGY } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { ModalContainerComponent } from '../components/modal/modal-container.component';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class ModalService {
    /**
     * @param {?} contentProjectionService
     */
    constructor(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.setContainer();
    }
    /**
     * @private
     * @return {?}
     */
    setContainer() {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ModalContainerComponent));
        this.containerComponentRef.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    clearModal() {
        this.getContainer().clear();
        this.detectChanges();
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.containerComponentRef.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    getContainer() {
        return this.containerComponentRef.instance.container;
    }
    /**
     * @template T
     * @param {?} template
     * @param {?=} context
     * @return {?}
     */
    renderTemplate(template, context) {
        /** @type {?} */
        const containerRef = this.getContainer();
        /** @type {?} */
        const strategy = PROJECTION_STRATEGY.ProjectTemplateToContainer(template, containerRef, context);
        this.contentProjectionService.projectContent(strategy);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.containerComponentRef.destroy();
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: ContentProjectionService }
];
/** @nocollapse */ ModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.ContentProjectionService)); }, token: ModalService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.containerComponentRef;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.contentProjectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0UsT0FBTyxFQUFnQixVQUFVLEVBQTRDLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7QUFLeEYsTUFBTSxPQUFPLFlBQVk7Ozs7SUFHdkIsWUFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDcEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU8sWUFBWTtRQUNsQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FDdkUsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsQ0FDbkUsQ0FBQztRQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7SUFFRCxjQUFjLENBQWdCLFFBQXdCLEVBQUUsT0FBVzs7Y0FDM0QsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7O2NBRWxDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FDN0QsUUFBUSxFQUNSLFlBQVksRUFDWixPQUFPLENBQ1I7UUFFRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7OztZQTdDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSx3QkFBd0I7Ozs7Ozs7O0lBUS9CLDZDQUFxRTs7Ozs7SUFFekQsZ0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudFByb2plY3Rpb25TZXJ2aWNlLCBQUk9KRUNUSU9OX1NUUkFURUdZIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY29udGFpbmVyQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TW9kYWxDb250YWluZXJDb21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlbnRQcm9qZWN0aW9uU2VydmljZTogQ29udGVudFByb2plY3Rpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNldENvbnRhaW5lcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb250YWluZXIoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZiA9IHRoaXMuY29udGVudFByb2plY3Rpb25TZXJ2aWNlLnByb2plY3RDb250ZW50KFxyXG4gICAgICBQUk9KRUNUSU9OX1NUUkFURUdZLkFwcGVuZENvbXBvbmVudFRvQm9keShNb2RhbENvbnRhaW5lckNvbXBvbmVudCksXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyQ29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGNsZWFyTW9kYWwoKSB7XHJcbiAgICB0aGlzLmdldENvbnRhaW5lcigpLmNsZWFyKCk7XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGRldGVjdENoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb250YWluZXIoKTogVmlld0NvbnRhaW5lclJlZiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYuaW5zdGFuY2UuY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGVtcGxhdGU8VCBleHRlbmRzIGFueT4odGVtcGxhdGU6IFRlbXBsYXRlUmVmPFQ+LCBjb250ZXh0PzogVCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gdGhpcy5nZXRDb250YWluZXIoKTtcclxuXHJcbiAgICBjb25zdCBzdHJhdGVneSA9IFBST0pFQ1RJT05fU1RSQVRFR1kuUHJvamVjdFRlbXBsYXRlVG9Db250YWluZXIoXHJcbiAgICAgIHRlbXBsYXRlLFxyXG4gICAgICBjb250YWluZXJSZWYsXHJcbiAgICAgIGNvbnRleHQsXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29udGVudFByb2plY3Rpb25TZXJ2aWNlLnByb2plY3RDb250ZW50KHN0cmF0ZWd5KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=