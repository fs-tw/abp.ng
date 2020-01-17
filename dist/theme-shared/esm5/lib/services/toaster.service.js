/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toaster.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import snq from 'snq';
import * as i0 from "@angular/core";
var ToasterService = /** @class */ (function () {
    function ToasterService() {
        this.toasts$ = new ReplaySubject(1);
        this.lastId = -1;
        this.toasts = (/** @type {?} */ ([]));
    }
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
    /** @nocollapse */ ToasterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToasterService_Factory() { return new ToasterService(); }, token: ToasterService, providedIn: "root" });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7O0FBRXRCO0lBQUE7UUFJRSxZQUFPLEdBQUcsSUFBSSxhQUFhLENBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRXhDLFdBQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVaLFdBQU0sR0FBRyxtQkFBQSxFQUFFLEVBQW1CLENBQUM7S0FxR3hDO0lBbkdDOzs7OztPQUtHOzs7Ozs7OztJQUNILDZCQUFJOzs7Ozs7O0lBQUosVUFDRSxPQUFpQyxFQUNqQyxLQUFnQyxFQUNoQyxPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7OztJQUNILGdDQUFPOzs7Ozs7O0lBQVAsVUFDRSxPQUFpQyxFQUNqQyxLQUFnQyxFQUNoQyxPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7OztJQUNILDZCQUFJOzs7Ozs7O0lBQUosVUFDRSxPQUFpQyxFQUNqQyxLQUFnQyxFQUNoQyxPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7OztJQUNILDhCQUFLOzs7Ozs7O0lBQUwsVUFDRSxPQUFpQyxFQUNqQyxLQUFnQyxFQUNoQyxPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBRUgsNkJBQUk7Ozs7Ozs7O0lBQUosVUFDRSxPQUFpQyxFQUNqQyxLQUFzQyxFQUN0QyxRQUFzQyxFQUN0QyxPQUE2QztRQUY3QyxzQkFBQSxFQUFBLFlBQXNDO1FBQ3RDLHlCQUFBLEVBQUEsb0JBQXNDO1FBQ3RDLHdCQUFBLEVBQUEsNkJBQVUsRUFBRSxFQUFpQzs7WUFFdkMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU07UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixPQUFPLFNBQUE7WUFDUCxLQUFLLE9BQUE7WUFDTCxRQUFRLFVBQUE7WUFDUixPQUFPLHFCQUFJLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFBLElBQUssT0FBTyxDQUFFO1NBQzVDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILCtCQUFNOzs7OztJQUFOLFVBQU8sRUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxHQUFHOzs7UUFBQyxjQUFNLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQWhCLENBQWdCLEVBQUMsS0FBSyxFQUFFLEVBQWxDLENBQWtDLEVBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCw4QkFBSzs7Ozs7SUFBTCxVQUFNLEdBQVk7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUc7WUFDaEIsQ0FBQyxDQUFDLEVBQUU7WUFDSixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQTFCLENBQTBCLEVBQUMsS0FBSyxHQUFHLEVBQTdDLENBQTZDLEVBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBNUdGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt5QkFSRDtDQW1IQyxBQTdHRCxJQTZHQztTQTFHWSxjQUFjOzs7SUFDekIsaUNBQWdEOzs7OztJQUVoRCxnQ0FBb0I7Ozs7O0lBRXBCLGdDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0ZXJTZXJ2aWNlIHtcclxuICB0b2FzdHMkID0gbmV3IFJlcGxheVN1YmplY3Q8VG9hc3Rlci5Ub2FzdFtdPigxKTtcclxuXHJcbiAgcHJpdmF0ZSBsYXN0SWQgPSAtMTtcclxuXHJcbiAgcHJpdmF0ZSB0b2FzdHMgPSBbXSBhcyBUb2FzdGVyLlRvYXN0W107XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gaW5mbyB0b2FzdCB3aXRoIGdpdmVuIHBhcmFtZXRlcnMuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgQ29udGVudCBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIG9wdGlvbnMgU3Blc2lmaWMgc3R5bGUgb3Igc3RydWN0dXJhbCBvcHRpb25zIGZvciBpbmRpdmlkdWFsIHRvYXN0XHJcbiAgICovXHJcbiAgaW5mbyhcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8VG9hc3Rlci5Ub2FzdE9wdGlvbnM+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgJ2luZm8nLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBzdWNjZXNzIHRvYXN0IHdpdGggZ2l2ZW4gcGFyYW1ldGVycy5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSBDb250ZW50IG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBTcGVzaWZpYyBzdHlsZSBvciBzdHJ1Y3R1cmFsIG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgdG9hc3RcclxuICAgKi9cclxuICBzdWNjZXNzKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU/OiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxUb2FzdGVyLlRvYXN0T3B0aW9ucz4sXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnc3VjY2VzcycsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHdhcm5pbmcgdG9hc3Qgd2l0aCBnaXZlbiBwYXJhbWV0ZXJzLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIENvbnRlbnQgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIFNwZXNpZmljIHN0eWxlIG9yIHN0cnVjdHVyYWwgb3B0aW9ucyBmb3IgaW5kaXZpZHVhbCB0b2FzdFxyXG4gICAqL1xyXG4gIHdhcm4oXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZT86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFRvYXN0ZXIuVG9hc3RPcHRpb25zPixcclxuICApIHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICd3YXJuaW5nJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuIGVycm9yIHRvYXN0IHdpdGggZ2l2ZW4gcGFyYW1ldGVycy5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSBDb250ZW50IG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgdG9hc3RcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBTcGVzaWZpYyBzdHlsZSBvciBzdHJ1Y3R1cmFsIG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgdG9hc3RcclxuICAgKi9cclxuICBlcnJvcihcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8VG9hc3Rlci5Ub2FzdE9wdGlvbnM+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgJ2Vycm9yJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgdG9hc3Qgd2l0aCBnaXZlbiBwYXJhbWV0ZXJzLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIENvbnRlbnQgb2YgdGhlIHRvYXN0XHJcbiAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSB0b2FzdFxyXG4gICAqIEBwYXJhbSBzZXZlcml0eSBTZXRzIGNvbG9yIG9mIHRoZSB0b2FzdC4gXCJzdWNjZXNzXCIsIFwid2FybmluZ1wiIGV0Yy5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyBTcGVzaWZpYyBzdHlsZSBvciBzdHJ1Y3R1cmFsIG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgdG9hc3RcclxuICAgKi9cclxuXHJcbiAgc2hvdyhcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0gPSBudWxsLFxyXG4gICAgc2V2ZXJpdHk6IFRvYXN0ZXIuU2V2ZXJpdHkgPSAnbmV1dHJhbCcsXHJcbiAgICBvcHRpb25zID0ge30gYXMgUGFydGlhbDxUb2FzdGVyLlRvYXN0T3B0aW9ucz4sXHJcbiAgKSB7XHJcbiAgICBjb25zdCBpZCA9ICsrdGhpcy5sYXN0SWQ7XHJcbiAgICB0aGlzLnRvYXN0cy5wdXNoKHtcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHNldmVyaXR5LFxyXG4gICAgICBvcHRpb25zOiB7IGNsb3NhYmxlOiB0cnVlLCBpZCwgLi4ub3B0aW9ucyB9LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnRvYXN0cyQubmV4dCh0aGlzLnRvYXN0cyk7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIHRoZSB0b2FzdCB3aXRoIGdpdmVuIGlkLlxyXG4gICAqIEBwYXJhbSBpZCBJRCBvZiB0aGUgdG9hc3QgdG8gYmUgcmVtb3ZlZC5cclxuICAgKi9cclxuICByZW1vdmUoaWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy50b2FzdHMgPSB0aGlzLnRvYXN0cy5maWx0ZXIodG9hc3QgPT4gc25xKCgpID0+IHRvYXN0Lm9wdGlvbnMuaWQpICE9PSBpZCk7XHJcbiAgICB0aGlzLnRvYXN0cyQubmV4dCh0aGlzLnRvYXN0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFsbCBvcGVuIHRvYXN0cyBhdCBvbmNlLlxyXG4gICAqL1xyXG4gIGNsZWFyKGtleT86IHN0cmluZykge1xyXG4gICAgdGhpcy50b2FzdHMgPSAha2V5XHJcbiAgICAgID8gW11cclxuICAgICAgOiB0aGlzLnRvYXN0cy5maWx0ZXIodG9hc3QgPT4gc25xKCgpID0+IHRvYXN0Lm9wdGlvbnMuY29udGFpbmVyS2V5KSAhPT0ga2V5KTtcclxuICAgIHRoaXMudG9hc3RzJC5uZXh0KHRoaXMudG9hc3RzKTtcclxuICB9XHJcbn1cclxuIl19