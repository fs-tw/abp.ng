/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toaster.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { PROJECTION_STRATEGY, ContentProjectionService } from '@abp/ng.core';
import snq from 'snq';
import { ToastContainerComponent } from '../components/toast-container/toast-container.component';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class ToasterService {
    /**
     * @param {?} contentProjectionService
     */
    constructor(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.toasts$ = new ReplaySubject(1);
        this.lastId = -1;
        this.toasts = (/** @type {?} */ ([]));
    }
    /**
     * @private
     * @return {?}
     */
    setContainer() {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ToastContainerComponent, { toasts$: this.toasts$ }));
        this.containerComponentRef.changeDetectorRef.detectChanges();
    }
    /**
     * Creates an info toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    info(message, title, options) {
        return this.show(message, title, 'info', options);
    }
    /**
     * Creates a success toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    success(message, title, options) {
        return this.show(message, title, 'success', options);
    }
    /**
     * Creates a warning toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    warn(message, title, options) {
        return this.show(message, title, 'warning', options);
    }
    /**
     * Creates an error toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    error(message, title, options) {
        return this.show(message, title, 'error', options);
    }
    /**
     * Creates a toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} severity Sets color of the toast. "success", "warning" etc.
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    show(message, title = null, severity = 'neutral', options = (/** @type {?} */ ({}))) {
        if (!this.containerComponentRef)
            this.setContainer();
        /** @type {?} */
        const id = ++this.lastId;
        this.toasts.push({
            message,
            title,
            severity,
            options: Object.assign({ closable: true, id }, options),
        });
        this.toasts$.next(this.toasts);
        return id;
    }
    /**
     * Removes the toast with given id.
     * @param {?} id ID of the toast to be removed.
     * @return {?}
     */
    remove(id) {
        this.toasts = this.toasts.filter((/**
         * @param {?} toast
         * @return {?}
         */
        toast => snq((/**
         * @return {?}
         */
        () => toast.options.id)) !== id));
        this.toasts$.next(this.toasts);
    }
    /**
     * Removes all open toasts at once.
     * @param {?=} key
     * @return {?}
     */
    clear(key) {
        this.toasts = !key
            ? []
            : this.toasts.filter((/**
             * @param {?} toast
             * @return {?}
             */
            toast => snq((/**
             * @return {?}
             */
            () => toast.options.containerKey)) !== key));
        this.toasts$.next(this.toasts);
    }
}
ToasterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ToasterService.ctorParameters = () => [
    { type: ContentProjectionService }
];
/** @nocollapse */ ToasterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToasterService_Factory() { return new ToasterService(i0.ɵɵinject(i1.ContentProjectionService)); }, token: ToasterService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ToasterService.prototype.toasts$;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.lastId;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.toasts;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.containerComponentRef;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.contentProjectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQVUsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDckYsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOzs7QUFLbEcsTUFBTSxPQUFPLGNBQWM7Ozs7SUFTekIsWUFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFSdEUsWUFBTyxHQUFHLElBQUksYUFBYSxDQUFrQixDQUFDLENBQUMsQ0FBQztRQUV4QyxXQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFWixXQUFNLEdBQUcsbUJBQUEsRUFBRSxFQUFtQixDQUFDO0lBSWtDLENBQUM7Ozs7O0lBRWxFLFlBQVk7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQ3ZFLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUM5RixDQUFDO1FBRUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQy9ELENBQUM7Ozs7Ozs7O0lBUUQsSUFBSSxDQUNGLE9BQWlDLEVBQ2pDLEtBQWdDLEVBQ2hDLE9BQXVDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7OztJQVFELE9BQU8sQ0FDTCxPQUFpQyxFQUNqQyxLQUFnQyxFQUNoQyxPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7Ozs7SUFRRCxJQUFJLENBQ0YsT0FBaUMsRUFDakMsS0FBZ0MsRUFDaEMsT0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7O0lBUUQsS0FBSyxDQUNILE9BQWlDLEVBQ2pDLEtBQWdDLEVBQ2hDLE9BQXVDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7Ozs7SUFVRCxJQUFJLENBQ0YsT0FBaUMsRUFDakMsUUFBa0MsSUFBSSxFQUN0QyxXQUE2QixTQUFTLEVBQ3RDLE9BQU8sR0FBRyxtQkFBQSxFQUFFLEVBQWlDO1FBRTdDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCO1lBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDOztjQUUvQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLE9BQU87WUFDUCxLQUFLO1lBQ0wsUUFBUTtZQUNSLE9BQU8sa0JBQUksUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUssT0FBTyxDQUFFO1NBQzVDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7OztJQU1ELE1BQU0sQ0FBQyxFQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUtELEtBQUssQ0FBQyxHQUFZO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHO1lBQ2hCLENBQUMsQ0FBQyxFQUFFO1lBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRzs7O1lBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUMsS0FBSyxHQUFHLEVBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBMUhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5xQyx3QkFBd0I7Ozs7O0lBUTVELGlDQUFnRDs7Ozs7SUFFaEQsZ0NBQW9COzs7OztJQUVwQixnQ0FBdUM7Ozs7O0lBRXZDLCtDQUFxRTs7Ozs7SUFFekQsa0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbmZpZywgUFJPSkVDVElPTl9TVFJBVEVHWSwgQ29udGVudFByb2plY3Rpb25TZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0ZXJTZXJ2aWNlIHtcclxuICB0b2FzdHMkID0gbmV3IFJlcGxheVN1YmplY3Q8VG9hc3Rlci5Ub2FzdFtdPigxKTtcclxuXHJcbiAgcHJpdmF0ZSBsYXN0SWQgPSAtMTtcclxuXHJcbiAgcHJpdmF0ZSB0b2FzdHMgPSBbXSBhcyBUb2FzdGVyLlRvYXN0W107XHJcblxyXG4gIHByaXZhdGUgY29udGFpbmVyQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VG9hc3RDb250YWluZXJDb21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlbnRQcm9qZWN0aW9uU2VydmljZTogQ29udGVudFByb2plY3Rpb25TZXJ2aWNlKSB7fVxyXG5cclxuICBwcml2YXRlIHNldENvbnRhaW5lcigpIHtcclxuICAgIHRoaXMuY29udGFpbmVyQ29tcG9uZW50UmVmID0gdGhpcy5jb250ZW50UHJvamVjdGlvblNlcnZpY2UucHJvamVjdENvbnRlbnQoXHJcbiAgICAgIFBST0pFQ1RJT05fU1RSQVRFR1kuQXBwZW5kQ29tcG9uZW50VG9Cb2R5KFRvYXN0Q29udGFpbmVyQ29tcG9uZW50LCB7IHRvYXN0cyQ6IHRoaXMudG9hc3RzJCB9KSxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBpbmZvIHRvYXN0IHdpdGggZ2l2ZW4gcGFyYW1ldGVycy5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSBDb250ZW50IG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBTcGVzaWZpYyBzdHlsZSBvciBzdHJ1Y3R1cmFsIG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgdG9hc3RcclxuICAgKi9cclxuICBpbmZvKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU/OiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxUb2FzdGVyLlRvYXN0T3B0aW9ucz4sXHJcbiAgKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICdpbmZvJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgc3VjY2VzcyB0b2FzdCB3aXRoIGdpdmVuIHBhcmFtZXRlcnMuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgQ29udGVudCBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIG9wdGlvbnMgU3Blc2lmaWMgc3R5bGUgb3Igc3RydWN0dXJhbCBvcHRpb25zIGZvciBpbmRpdmlkdWFsIHRvYXN0XHJcbiAgICovXHJcbiAgc3VjY2VzcyhcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8VG9hc3Rlci5Ub2FzdE9wdGlvbnM+LFxyXG4gICk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnc3VjY2VzcycsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHdhcm5pbmcgdG9hc3Qgd2l0aCBnaXZlbiBwYXJhbWV0ZXJzLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIENvbnRlbnQgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIFNwZXNpZmljIHN0eWxlIG9yIHN0cnVjdHVyYWwgb3B0aW9ucyBmb3IgaW5kaXZpZHVhbCB0b2FzdFxyXG4gICAqL1xyXG4gIHdhcm4oXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZT86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFRvYXN0ZXIuVG9hc3RPcHRpb25zPixcclxuICApOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgJ3dhcm5pbmcnLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gZXJyb3IgdG9hc3Qgd2l0aCBnaXZlbiBwYXJhbWV0ZXJzLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIENvbnRlbnQgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIFNwZXNpZmljIHN0eWxlIG9yIHN0cnVjdHVyYWwgb3B0aW9ucyBmb3IgaW5kaXZpZHVhbCB0b2FzdFxyXG4gICAqL1xyXG4gIGVycm9yKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU/OiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxUb2FzdGVyLlRvYXN0T3B0aW9ucz4sXHJcbiAgKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICdlcnJvcicsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHRvYXN0IHdpdGggZ2l2ZW4gcGFyYW1ldGVycy5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSBDb250ZW50IG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gc2V2ZXJpdHkgU2V0cyBjb2xvciBvZiB0aGUgdG9hc3QuIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiBldGMuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgU3Blc2lmaWMgc3R5bGUgb3Igc3RydWN0dXJhbCBvcHRpb25zIGZvciBpbmRpdmlkdWFsIHRvYXN0XHJcbiAgICovXHJcblxyXG4gIHNob3coXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtID0gbnVsbCxcclxuICAgIHNldmVyaXR5OiBUb2FzdGVyLlNldmVyaXR5ID0gJ25ldXRyYWwnLFxyXG4gICAgb3B0aW9ucyA9IHt9IGFzIFBhcnRpYWw8VG9hc3Rlci5Ub2FzdE9wdGlvbnM+LFxyXG4gICk6IG51bWJlciB7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbmVyQ29tcG9uZW50UmVmKSB0aGlzLnNldENvbnRhaW5lcigpO1xyXG5cclxuICAgIGNvbnN0IGlkID0gKyt0aGlzLmxhc3RJZDtcclxuICAgIHRoaXMudG9hc3RzLnB1c2goe1xyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgc2V2ZXJpdHksXHJcbiAgICAgIG9wdGlvbnM6IHsgY2xvc2FibGU6IHRydWUsIGlkLCAuLi5vcHRpb25zIH0sXHJcbiAgICB9KTtcclxuICAgIHRoaXMudG9hc3RzJC5uZXh0KHRoaXMudG9hc3RzKTtcclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgdGhlIHRvYXN0IHdpdGggZ2l2ZW4gaWQuXHJcbiAgICogQHBhcmFtIGlkIElEIG9mIHRoZSB0b2FzdCB0byBiZSByZW1vdmVkLlxyXG4gICAqL1xyXG4gIHJlbW92ZShpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvYXN0cyA9IHRoaXMudG9hc3RzLmZpbHRlcih0b2FzdCA9PiBzbnEoKCkgPT4gdG9hc3Qub3B0aW9ucy5pZCkgIT09IGlkKTtcclxuICAgIHRoaXMudG9hc3RzJC5uZXh0KHRoaXMudG9hc3RzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIG9wZW4gdG9hc3RzIGF0IG9uY2UuXHJcbiAgICovXHJcbiAgY2xlYXIoa2V5Pzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvYXN0cyA9ICFrZXlcclxuICAgICAgPyBbXVxyXG4gICAgICA6IHRoaXMudG9hc3RzLmZpbHRlcih0b2FzdCA9PiBzbnEoKCkgPT4gdG9hc3Qub3B0aW9ucy5jb250YWluZXJLZXkpICE9PSBrZXkpO1xyXG4gICAgdGhpcy50b2FzdHMkLm5leHQodGhpcy50b2FzdHMpO1xyXG4gIH1cclxufVxyXG4iXX0=