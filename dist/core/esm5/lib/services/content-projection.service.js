/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/content-projection.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import * as i0 from "@angular/core";
var ContentProjectionService = /** @class */ (function () {
    function ContentProjectionService(injector) {
        this.injector = injector;
    }
    /**
     * @template T
     * @param {?} projectionStrategy
     * @param {?=} injector
     * @return {?}
     */
    ContentProjectionService.prototype.projectContent = /**
     * @template T
     * @param {?} projectionStrategy
     * @param {?=} injector
     * @return {?}
     */
    function (projectionStrategy, injector) {
        if (injector === void 0) { injector = this.injector; }
        return projectionStrategy.injectContent(injector);
    };
    ContentProjectionService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ContentProjectionService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ ContentProjectionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ContentProjectionService_Factory() { return new ContentProjectionService(i0.ɵɵinject(i0.INJECTOR)); }, token: ContentProjectionService, providedIn: "root" });
    return ContentProjectionService;
}());
export { ContentProjectionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContentProjectionService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wcm9qZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29udGVudC1wcm9qZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBcUIsTUFBTSxlQUFlLENBQUM7O0FBR3hFO0lBRUUsa0NBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDOzs7Ozs7O0lBRTFDLGlEQUFjOzs7Ozs7SUFBZCxVQUNFLGtCQUF5QyxFQUN6QyxRQUF3QjtRQUF4Qix5QkFBQSxFQUFBLFdBQVcsSUFBSSxDQUFDLFFBQVE7UUFFeEIsT0FBTyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Z0JBVEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFIYixRQUFROzs7bUNBQTdCO0NBYUMsQUFWRCxJQVVDO1NBVFksd0JBQXdCOzs7Ozs7SUFDdkIsNENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb2plY3Rpb25TdHJhdGVneSB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvcHJvamVjdGlvbi5zdHJhdGVneSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQ29udGVudFByb2plY3Rpb25TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cclxuXHJcbiAgcHJvamVjdENvbnRlbnQ8VCBleHRlbmRzIFR5cGU8YW55PiB8IFRlbXBsYXRlUmVmPGFueT4+KFxyXG4gICAgcHJvamVjdGlvblN0cmF0ZWd5OiBQcm9qZWN0aW9uU3RyYXRlZ3k8VD4sXHJcbiAgICBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IsXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gcHJvamVjdGlvblN0cmF0ZWd5LmluamVjdENvbnRlbnQoaW5qZWN0b3IpO1xyXG4gIH1cclxufVxyXG4iXX0=