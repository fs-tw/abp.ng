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
var ModalService = /** @class */ (function () {
    function ModalService(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.setContainer();
    }
    /**
     * @private
     * @return {?}
     */
    ModalService.prototype.setContainer = /**
     * @private
     * @return {?}
     */
    function () {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ModalContainerComponent));
        this.containerComponentRef.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    ModalService.prototype.clearModal = /**
     * @return {?}
     */
    function () {
        this.getContainer().clear();
        this.detectChanges();
    };
    /**
     * @return {?}
     */
    ModalService.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.containerComponentRef.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    ModalService.prototype.getContainer = /**
     * @return {?}
     */
    function () {
        return this.containerComponentRef.instance.container;
    };
    /**
     * @template T
     * @param {?} template
     * @param {?=} context
     * @return {?}
     */
    ModalService.prototype.renderTemplate = /**
     * @template T
     * @param {?} template
     * @param {?=} context
     * @return {?}
     */
    function (template, context) {
        /** @type {?} */
        var containerRef = this.getContainer();
        /** @type {?} */
        var strategy = PROJECTION_STRATEGY.ProjectTemplateToContainer(template, containerRef, context);
        this.contentProjectionService.projectContent(strategy);
    };
    /**
     * @return {?}
     */
    ModalService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.containerComponentRef.destroy();
    };
    ModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: ContentProjectionService }
    ]; };
    /** @nocollapse */ ModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.ContentProjectionService)); }, token: ModalService, providedIn: "root" });
    return ModalService;
}());
export { ModalService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0UsT0FBTyxFQUFnQixVQUFVLEVBQTRDLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7QUFFeEY7SUFNRSxzQkFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDcEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU8sbUNBQVk7Ozs7SUFBcEI7UUFDRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FDdkUsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsQ0FDbkUsQ0FBQztRQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsaUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsb0NBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFRCxtQ0FBWTs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7SUFFRCxxQ0FBYzs7Ozs7O0lBQWQsVUFBOEIsUUFBd0IsRUFBRSxPQUFXOztZQUMzRCxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFFbEMsUUFBUSxHQUFHLG1CQUFtQixDQUFDLDBCQUEwQixDQUM3RCxRQUFRLEVBQ1IsWUFBWSxFQUNaLE9BQU8sQ0FDUjtRQUVELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELGtDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QyxDQUFDOztnQkE3Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSx3QkFBd0I7Ozt1QkFBakM7Q0FrREMsQUE5Q0QsSUE4Q0M7U0EzQ1ksWUFBWTs7Ozs7O0lBQ3ZCLDZDQUFxRTs7Ozs7SUFFekQsZ0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudFByb2plY3Rpb25TZXJ2aWNlLCBQUk9KRUNUSU9OX1NUUkFURUdZIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY29udGFpbmVyQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TW9kYWxDb250YWluZXJDb21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlbnRQcm9qZWN0aW9uU2VydmljZTogQ29udGVudFByb2plY3Rpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNldENvbnRhaW5lcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb250YWluZXIoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZiA9IHRoaXMuY29udGVudFByb2plY3Rpb25TZXJ2aWNlLnByb2plY3RDb250ZW50KFxyXG4gICAgICBQUk9KRUNUSU9OX1NUUkFURUdZLkFwcGVuZENvbXBvbmVudFRvQm9keShNb2RhbENvbnRhaW5lckNvbXBvbmVudCksXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyQ29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGNsZWFyTW9kYWwoKSB7XHJcbiAgICB0aGlzLmdldENvbnRhaW5lcigpLmNsZWFyKCk7XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGRldGVjdENoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb250YWluZXIoKTogVmlld0NvbnRhaW5lclJlZiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYuaW5zdGFuY2UuY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGVtcGxhdGU8VCBleHRlbmRzIGFueT4odGVtcGxhdGU6IFRlbXBsYXRlUmVmPFQ+LCBjb250ZXh0PzogVCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gdGhpcy5nZXRDb250YWluZXIoKTtcclxuXHJcbiAgICBjb25zdCBzdHJhdGVneSA9IFBST0pFQ1RJT05fU1RSQVRFR1kuUHJvamVjdFRlbXBsYXRlVG9Db250YWluZXIoXHJcbiAgICAgIHRlbXBsYXRlLFxyXG4gICAgICBjb250YWluZXJSZWYsXHJcbiAgICAgIGNvbnRleHQsXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29udGVudFByb2plY3Rpb25TZXJ2aWNlLnByb2plY3RDb250ZW50KHN0cmF0ZWd5KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=