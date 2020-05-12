/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toaster.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { PROJECTION_STRATEGY, ContentProjectionService } from '@abp/ng.core';
import snq from 'snq';
import { ToastContainerComponent } from '../components/toast-container/toast-container.component';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
var ToasterService = /** @class */ (function () {
    function ToasterService(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.toasts$ = new ReplaySubject(1);
        this.lastId = -1;
        this.toasts = (/** @type {?} */ ([]));
    }
    /**
     * @private
     * @return {?}
     */
    ToasterService.prototype.setContainer = /**
     * @private
     * @return {?}
     */
    function () {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ToastContainerComponent, { toasts$: this.toasts$ }));
        this.containerComponentRef.changeDetectorRef.detectChanges();
    };
    /**
     * Creates an info toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    /**
     * Creates an info toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    ToasterService.prototype.info = /**
     * Creates an info toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'info', options);
    };
    /**
     * Creates a success toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    /**
     * Creates a success toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    ToasterService.prototype.success = /**
     * Creates a success toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'success', options);
    };
    /**
     * Creates a warning toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    /**
     * Creates a warning toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    ToasterService.prototype.warn = /**
     * Creates a warning toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'warning', options);
    };
    /**
     * Creates an error toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    /**
     * Creates an error toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    ToasterService.prototype.error = /**
     * Creates an error toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'error', options);
    };
    /**
     * Creates a toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param severity Sets color of the toast. "success", "warning" etc.
     * @param options Spesific style or structural options for individual toast
     */
    /**
     * Creates a toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} severity Sets color of the toast. "success", "warning" etc.
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    ToasterService.prototype.show = /**
     * Creates a toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} severity Sets color of the toast. "success", "warning" etc.
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    function (message, title, severity, options) {
        if (title === void 0) { title = null; }
        if (severity === void 0) { severity = 'neutral'; }
        if (options === void 0) { options = (/** @type {?} */ ({})); }
        if (!this.containerComponentRef)
            this.setContainer();
        /** @type {?} */
        var id = ++this.lastId;
        this.toasts.push({
            message: message,
            title: title,
            severity: severity,
            options: tslib_1.__assign({ closable: true, id: id }, options),
        });
        this.toasts$.next(this.toasts);
        return id;
    };
    /**
     * Removes the toast with given id.
     * @param id ID of the toast to be removed.
     */
    /**
     * Removes the toast with given id.
     * @param {?} id ID of the toast to be removed.
     * @return {?}
     */
    ToasterService.prototype.remove = /**
     * Removes the toast with given id.
     * @param {?} id ID of the toast to be removed.
     * @return {?}
     */
    function (id) {
        this.toasts = this.toasts.filter((/**
         * @param {?} toast
         * @return {?}
         */
        function (toast) { return snq((/**
         * @return {?}
         */
        function () { return toast.options.id; })) !== id; }));
        this.toasts$.next(this.toasts);
    };
    /**
     * Removes all open toasts at once.
     */
    /**
     * Removes all open toasts at once.
     * @param {?=} key
     * @return {?}
     */
    ToasterService.prototype.clear = /**
     * Removes all open toasts at once.
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        this.toasts = !key
            ? []
            : this.toasts.filter((/**
             * @param {?} toast
             * @return {?}
             */
            function (toast) { return snq((/**
             * @return {?}
             */
            function () { return toast.options.containerKey; })) !== key; }));
        this.toasts$.next(this.toasts);
    };
    ToasterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ToasterService.ctorParameters = function () { return [
        { type: ContentProjectionService }
    ]; };
    /** @nocollapse */ ToasterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToasterService_Factory() { return new ToasterService(i0.ɵɵinject(i1.ContentProjectionService)); }, token: ToasterService, providedIn: "root" });
    return ToasterService;
}());
export { ToasterService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFVLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3JGLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQzs7O0FBRWxHO0lBWUUsd0JBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBUnRFLFlBQU8sR0FBRyxJQUFJLGFBQWEsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7UUFFeEMsV0FBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRVosV0FBTSxHQUFHLG1CQUFBLEVBQUUsRUFBbUIsQ0FBQztJQUlrQyxDQUFDOzs7OztJQUVsRSxxQ0FBWTs7OztJQUFwQjtRQUNFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUN2RSxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FDOUYsQ0FBQztRQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsNkJBQUk7Ozs7Ozs7SUFBSixVQUNFLE9BQWlDLEVBQ2pDLEtBQWdDLEVBQ2hDLE9BQXVDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FB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eEhZLGNBQWM7OztJQUN6QixpQ0FBZ0Q7Ozs7O0lBRWhELGdDQUFvQjs7Ozs7SUFFcEIsZ0NBQXVDOzs7OztJQUV2QywrQ0FBcUU7Ozs7O0lBRXpELGtEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb25maWcsIFBST0pFQ1RJT05fU1RSQVRFR1ksIENvbnRlbnRQcm9qZWN0aW9uU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RvYXN0LWNvbnRhaW5lci90b2FzdC1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdGVyU2VydmljZSB7XHJcbiAgdG9hc3RzJCA9IG5ldyBSZXBsYXlTdWJqZWN0PFRvYXN0ZXIuVG9hc3RbXT4oMSk7XHJcblxyXG4gIHByaXZhdGUgbGFzdElkID0gLTE7XHJcblxyXG4gIHByaXZhdGUgdG9hc3RzID0gW10gYXMgVG9hc3Rlci5Ub2FzdFtdO1xyXG5cclxuICBwcml2YXRlIGNvbnRhaW5lckNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFRvYXN0Q29udGFpbmVyQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZW50UHJvamVjdGlvblNlcnZpY2U6IENvbnRlbnRQcm9qZWN0aW9uU2VydmljZSkge31cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb250YWluZXIoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZiA9IHRoaXMuY29udGVudFByb2plY3Rpb25TZXJ2aWNlLnByb2plY3RDb250ZW50KFxyXG4gICAgICBQUk9KRUNUSU9OX1NUUkFURUdZLkFwcGVuZENvbXBvbmVudFRvQm9keShUb2FzdENvbnRhaW5lckNvbXBvbmVudCwgeyB0b2FzdHMkOiB0aGlzLnRvYXN0cyQgfSksXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyQ29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gaW5mbyB0b2FzdCB3aXRoIGdpdmVuIHBhcmFtZXRlcnMuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgQ29udGVudCBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIG9wdGlvbnMgU3Blc2lmaWMgc3R5bGUgb3Igc3RydWN0dXJhbCBvcHRpb25zIGZvciBpbmRpdmlkdWFsIHRvYXN0XHJcbiAgICovXHJcbiAgaW5mbyhcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8VG9hc3Rlci5Ub2FzdE9wdGlvbnM+LFxyXG4gICk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnaW5mbycsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHN1Y2Nlc3MgdG9hc3Qgd2l0aCBnaXZlbiBwYXJhbWV0ZXJzLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIENvbnRlbnQgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIFNwZXNpZmljIHN0eWxlIG9yIHN0cnVjdHVyYWwgb3B0aW9ucyBmb3IgaW5kaXZpZHVhbCB0b2FzdFxyXG4gICAqL1xyXG4gIHN1Y2Nlc3MoXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZT86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFRvYXN0ZXIuVG9hc3RPcHRpb25zPixcclxuICApOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgJ3N1Y2Nlc3MnLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB3YXJuaW5nIHRvYXN0IHdpdGggZ2l2ZW4gcGFyYW1ldGVycy5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSBDb250ZW50IG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBTcGVzaWZpYyBzdHlsZSBvciBzdHJ1Y3R1cmFsIG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgdG9hc3RcclxuICAgKi9cclxuICB3YXJuKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU/OiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxUb2FzdGVyLlRvYXN0T3B0aW9ucz4sXHJcbiAgKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICd3YXJuaW5nJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuIGVycm9yIHRvYXN0IHdpdGggZ2l2ZW4gcGFyYW1ldGVycy5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSBDb250ZW50IG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBTcGVzaWZpYyBzdHlsZSBvciBzdHJ1Y3R1cmFsIG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgdG9hc3RcclxuICAgKi9cclxuICBlcnJvcihcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8VG9hc3Rlci5Ub2FzdE9wdGlvbnM+LFxyXG4gICk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnZXJyb3InLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0b2FzdCB3aXRoIGdpdmVuIHBhcmFtZXRlcnMuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgQ29udGVudCBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIHNldmVyaXR5IFNldHMgY29sb3Igb2YgdGhlIHRvYXN0LiBcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIgZXRjLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIFNwZXNpZmljIHN0eWxlIG9yIHN0cnVjdHVyYWwgb3B0aW9ucyBmb3IgaW5kaXZpZHVhbCB0b2FzdFxyXG4gICAqL1xyXG5cclxuICBzaG93KFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSA9IG51bGwsXHJcbiAgICBzZXZlcml0eTogVG9hc3Rlci5TZXZlcml0eSA9ICduZXV0cmFsJyxcclxuICAgIG9wdGlvbnMgPSB7fSBhcyBQYXJ0aWFsPFRvYXN0ZXIuVG9hc3RPcHRpb25zPixcclxuICApOiBudW1iZXIge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZikgdGhpcy5zZXRDb250YWluZXIoKTtcclxuXHJcbiAgICBjb25zdCBpZCA9ICsrdGhpcy5sYXN0SWQ7XHJcbiAgICB0aGlzLnRvYXN0cy5wdXNoKHtcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHNldmVyaXR5LFxyXG4gICAgICBvcHRpb25zOiB7IGNsb3NhYmxlOiB0cnVlLCBpZCwgLi4ub3B0aW9ucyB9LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnRvYXN0cyQubmV4dCh0aGlzLnRvYXN0cyk7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIHRoZSB0b2FzdCB3aXRoIGdpdmVuIGlkLlxyXG4gICAqIEBwYXJhbSBpZCBJRCBvZiB0aGUgdG9hc3QgdG8gYmUgcmVtb3ZlZC5cclxuICAgKi9cclxuICByZW1vdmUoaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy50b2FzdHMgPSB0aGlzLnRvYXN0cy5maWx0ZXIodG9hc3QgPT4gc25xKCgpID0+IHRvYXN0Lm9wdGlvbnMuaWQpICE9PSBpZCk7XHJcbiAgICB0aGlzLnRvYXN0cyQubmV4dCh0aGlzLnRvYXN0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFsbCBvcGVuIHRvYXN0cyBhdCBvbmNlLlxyXG4gICAqL1xyXG4gIGNsZWFyKGtleT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy50b2FzdHMgPSAha2V5XHJcbiAgICAgID8gW11cclxuICAgICAgOiB0aGlzLnRvYXN0cy5maWx0ZXIodG9hc3QgPT4gc25xKCgpID0+IHRvYXN0Lm9wdGlvbnMuY29udGFpbmVyS2V5KSAhPT0ga2V5KTtcclxuICAgIHRoaXMudG9hc3RzJC5uZXh0KHRoaXMudG9hc3RzKTtcclxuICB9XHJcbn1cclxuIl19