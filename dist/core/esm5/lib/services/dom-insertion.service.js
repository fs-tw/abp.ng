/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/dom-insertion.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { generateHash } from '../utils';
import * as i0 from "@angular/core";
var DomInsertionService = /** @class */ (function () {
    function DomInsertionService() {
        this.inserted = new Set();
    }
    /**
     * @template T
     * @param {?} contentStrategy
     * @return {?}
     */
    DomInsertionService.prototype.insertContent = /**
     * @template T
     * @param {?} contentStrategy
     * @return {?}
     */
    function (contentStrategy) {
        /** @type {?} */
        var hash = generateHash(contentStrategy.content);
        if (this.inserted.has(hash))
            return;
        /** @type {?} */
        var element = contentStrategy.insertElement();
        this.inserted.add(hash);
        return element;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomInsertionService.prototype.removeContent = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var hash = generateHash(element.textContent);
        this.inserted.delete(hash);
        element.parentNode.removeChild(element);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    DomInsertionService.prototype.has = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        /** @type {?} */
        var hash = generateHash(content);
        return this.inserted.has(hash);
    };
    DomInsertionService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DomInsertionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DomInsertionService_Factory() { return new DomInsertionService(); }, token: DomInsertionService, providedIn: "root" });
    return DomInsertionService;
}());
export { DomInsertionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomInsertionService.prototype.inserted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLWluc2VydGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RvbS1pbnNlcnRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFFeEM7SUFBQTtRQUVtQixhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztLQTJCL0M7Ozs7OztJQXpCQywyQ0FBYTs7Ozs7SUFBYixVQUNFLGVBQW1DOztZQUU3QixJQUFJLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7UUFFbEQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPOztZQUU5QixPQUFPLEdBQUcsZUFBZSxDQUFDLGFBQWEsRUFBRTtRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELDJDQUFhOzs7O0lBQWIsVUFBYyxPQUE2Qzs7WUFDbkQsSUFBSSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNCLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsaUNBQUc7Ozs7SUFBSCxVQUFJLE9BQWU7O1lBQ1gsSUFBSSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFFbEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkE1QkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzhCQUpsQztDQWlDQyxBQTdCRCxJQTZCQztTQTVCWSxtQkFBbUI7Ozs7OztJQUM5Qix1Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlbnRTdHJhdGVneSB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvY29udGVudC5zdHJhdGVneSc7XHJcbmltcG9ydCB7IGdlbmVyYXRlSGFzaCB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBEb21JbnNlcnRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGluc2VydGVkID0gbmV3IFNldDxudW1iZXI+KCk7XHJcblxyXG4gIGluc2VydENvbnRlbnQ8VCBleHRlbmRzIEhUTUxTY3JpcHRFbGVtZW50IHwgSFRNTFN0eWxlRWxlbWVudD4oXHJcbiAgICBjb250ZW50U3RyYXRlZ3k6IENvbnRlbnRTdHJhdGVneTxUPixcclxuICApOiBUIHtcclxuICAgIGNvbnN0IGhhc2ggPSBnZW5lcmF0ZUhhc2goY29udGVudFN0cmF0ZWd5LmNvbnRlbnQpO1xyXG5cclxuICAgIGlmICh0aGlzLmluc2VydGVkLmhhcyhoYXNoKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBjb250ZW50U3RyYXRlZ3kuaW5zZXJ0RWxlbWVudCgpO1xyXG4gICAgdGhpcy5pbnNlcnRlZC5hZGQoaGFzaCk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb250ZW50KGVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50IHwgSFRNTFN0eWxlRWxlbWVudCkge1xyXG4gICAgY29uc3QgaGFzaCA9IGdlbmVyYXRlSGFzaChlbGVtZW50LnRleHRDb250ZW50KTtcclxuICAgIHRoaXMuaW5zZXJ0ZWQuZGVsZXRlKGhhc2gpO1xyXG5cclxuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhcyhjb250ZW50OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGhhc2ggPSBnZW5lcmF0ZUhhc2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0ZWQuaGFzKGhhc2gpO1xyXG4gIH1cclxufVxyXG4iXX0=