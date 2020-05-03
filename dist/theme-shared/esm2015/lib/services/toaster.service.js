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
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ToastContainerComponent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQVUsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDckYsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOzs7QUFLbEcsTUFBTSxPQUFPLGNBQWM7Ozs7SUFTekIsWUFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFSdEUsWUFBTyxHQUFHLElBQUksYUFBYSxDQUFrQixDQUFDLENBQUMsQ0FBQztRQUV4QyxXQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFWixXQUFNLEdBQUcsbUJBQUEsRUFBRSxFQUFtQixDQUFDO0lBSWtDLENBQUM7Ozs7O0lBRWxFLFlBQVk7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQ3ZFLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLENBQ25FLENBQUM7UUFFRixJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0QsQ0FBQzs7Ozs7Ozs7SUFRRCxJQUFJLENBQ0YsT0FBaUMsRUFDakMsS0FBZ0MsRUFDaEMsT0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7Ozs7O0lBUUQsT0FBTyxDQUNMLE9BQWlDLEVBQ2pDLEtBQWdDLEVBQ2hDLE9BQXVDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7OztJQVFELElBQUksQ0FDRixPQUFpQyxFQUNqQyxLQUFnQyxFQUNoQyxPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7Ozs7SUFRRCxLQUFLLENBQ0gsT0FBaUMsRUFDakMsS0FBZ0MsRUFDaEMsT0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7OztJQVVELElBQUksQ0FDRixPQUFpQyxFQUNqQyxRQUFrQyxJQUFJLEVBQ3RDLFdBQTZCLFNBQVMsRUFDdEMsT0FBTyxHQUFHLG1CQUFBLEVBQUUsRUFBaUM7UUFFN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUI7WUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O2NBRS9DLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsT0FBTztZQUNQLEtBQUs7WUFDTCxRQUFRO1lBQ1IsT0FBTyxrQkFBSSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSyxPQUFPLENBQUU7U0FDNUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7O0lBTUQsTUFBTSxDQUFDLEVBQVU7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBS0QsS0FBSyxDQUFDLEdBQVk7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUc7WUFDaEIsQ0FBQyxDQUFDLEVBQUU7WUFDSixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBQyxLQUFLLEdBQUcsRUFBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUExSEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTnFDLHdCQUF3Qjs7Ozs7SUFRNUQsaUNBQWdEOzs7OztJQUVoRCxnQ0FBb0I7Ozs7O0lBRXBCLGdDQUF1Qzs7Ozs7SUFFdkMsK0NBQXFFOzs7OztJQUV6RCxrREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29uZmlnLCBQUk9KRUNUSU9OX1NUUkFURUdZLCBDb250ZW50UHJvamVjdGlvblNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy90b2FzdC1jb250YWluZXIvdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RlclNlcnZpY2Uge1xyXG4gIHRvYXN0cyQgPSBuZXcgUmVwbGF5U3ViamVjdDxUb2FzdGVyLlRvYXN0W10+KDEpO1xyXG5cclxuICBwcml2YXRlIGxhc3RJZCA9IC0xO1xyXG5cclxuICBwcml2YXRlIHRvYXN0cyA9IFtdIGFzIFRvYXN0ZXIuVG9hc3RbXTtcclxuXHJcbiAgcHJpdmF0ZSBjb250YWluZXJDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUb2FzdENvbnRhaW5lckNvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVudFByb2plY3Rpb25TZXJ2aWNlOiBDb250ZW50UHJvamVjdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29udGFpbmVyKCkge1xyXG4gICAgdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYgPSB0aGlzLmNvbnRlbnRQcm9qZWN0aW9uU2VydmljZS5wcm9qZWN0Q29udGVudChcclxuICAgICAgUFJPSkVDVElPTl9TVFJBVEVHWS5BcHBlbmRDb21wb25lbnRUb0JvZHkoVG9hc3RDb250YWluZXJDb21wb25lbnQpLFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuIGluZm8gdG9hc3Qgd2l0aCBnaXZlbiBwYXJhbWV0ZXJzLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIENvbnRlbnQgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIFNwZXNpZmljIHN0eWxlIG9yIHN0cnVjdHVyYWwgb3B0aW9ucyBmb3IgaW5kaXZpZHVhbCB0b2FzdFxyXG4gICAqL1xyXG4gIGluZm8oXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZT86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFRvYXN0ZXIuVG9hc3RPcHRpb25zPixcclxuICApOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgJ2luZm8nLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBzdWNjZXNzIHRvYXN0IHdpdGggZ2l2ZW4gcGFyYW1ldGVycy5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSBDb250ZW50IG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBTcGVzaWZpYyBzdHlsZSBvciBzdHJ1Y3R1cmFsIG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgdG9hc3RcclxuICAgKi9cclxuICBzdWNjZXNzKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU/OiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxUb2FzdGVyLlRvYXN0T3B0aW9ucz4sXHJcbiAgKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICdzdWNjZXNzJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgd2FybmluZyB0b2FzdCB3aXRoIGdpdmVuIHBhcmFtZXRlcnMuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgQ29udGVudCBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIG9wdGlvbnMgU3Blc2lmaWMgc3R5bGUgb3Igc3RydWN0dXJhbCBvcHRpb25zIGZvciBpbmRpdmlkdWFsIHRvYXN0XHJcbiAgICovXHJcbiAgd2FybihcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8VG9hc3Rlci5Ub2FzdE9wdGlvbnM+LFxyXG4gICk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnd2FybmluZycsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBlcnJvciB0b2FzdCB3aXRoIGdpdmVuIHBhcmFtZXRlcnMuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgQ29udGVudCBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIG9wdGlvbnMgU3Blc2lmaWMgc3R5bGUgb3Igc3RydWN0dXJhbCBvcHRpb25zIGZvciBpbmRpdmlkdWFsIHRvYXN0XHJcbiAgICovXHJcbiAgZXJyb3IoXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZT86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFRvYXN0ZXIuVG9hc3RPcHRpb25zPixcclxuICApOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgJ2Vycm9yJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgdG9hc3Qgd2l0aCBnaXZlbiBwYXJhbWV0ZXJzLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIENvbnRlbnQgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSBzZXZlcml0eSBTZXRzIGNvbG9yIG9mIHRoZSB0b2FzdC4gXCJzdWNjZXNzXCIsIFwid2FybmluZ1wiIGV0Yy5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyBTcGVzaWZpYyBzdHlsZSBvciBzdHJ1Y3R1cmFsIG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgdG9hc3RcclxuICAgKi9cclxuXHJcbiAgc2hvdyhcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0gPSBudWxsLFxyXG4gICAgc2V2ZXJpdHk6IFRvYXN0ZXIuU2V2ZXJpdHkgPSAnbmV1dHJhbCcsXHJcbiAgICBvcHRpb25zID0ge30gYXMgUGFydGlhbDxUb2FzdGVyLlRvYXN0T3B0aW9ucz4sXHJcbiAgKTogbnVtYmVyIHtcclxuICAgIGlmICghdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYpIHRoaXMuc2V0Q29udGFpbmVyKCk7XHJcblxyXG4gICAgY29uc3QgaWQgPSArK3RoaXMubGFzdElkO1xyXG4gICAgdGhpcy50b2FzdHMucHVzaCh7XHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBzZXZlcml0eSxcclxuICAgICAgb3B0aW9uczogeyBjbG9zYWJsZTogdHJ1ZSwgaWQsIC4uLm9wdGlvbnMgfSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy50b2FzdHMkLm5leHQodGhpcy50b2FzdHMpO1xyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyB0aGUgdG9hc3Qgd2l0aCBnaXZlbiBpZC5cclxuICAgKiBAcGFyYW0gaWQgSUQgb2YgdGhlIHRvYXN0IHRvIGJlIHJlbW92ZWQuXHJcbiAgICovXHJcbiAgcmVtb3ZlKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudG9hc3RzID0gdGhpcy50b2FzdHMuZmlsdGVyKHRvYXN0ID0+IHNucSgoKSA9PiB0b2FzdC5vcHRpb25zLmlkKSAhPT0gaWQpO1xyXG4gICAgdGhpcy50b2FzdHMkLm5leHQodGhpcy50b2FzdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbGwgb3BlbiB0b2FzdHMgYXQgb25jZS5cclxuICAgKi9cclxuICBjbGVhcihrZXk/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudG9hc3RzID0gIWtleVxyXG4gICAgICA/IFtdXHJcbiAgICAgIDogdGhpcy50b2FzdHMuZmlsdGVyKHRvYXN0ID0+IHNucSgoKSA9PiB0b2FzdC5vcHRpb25zLmNvbnRhaW5lcktleSkgIT09IGtleSk7XHJcbiAgICB0aGlzLnRvYXN0cyQubmV4dCh0aGlzLnRvYXN0cyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==