/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/dom-insertion.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { generateHash } from '../utils';
import * as i0 from "@angular/core";
export class DomInsertionService {
    constructor() {
        this.inserted = new Set();
    }
    /**
     * @template T
     * @param {?} contentStrategy
     * @return {?}
     */
    insertContent(contentStrategy) {
        /** @type {?} */
        const hash = generateHash(contentStrategy.content);
        if (this.inserted.has(hash))
            return;
        /** @type {?} */
        const element = contentStrategy.insertElement();
        this.inserted.add(hash);
        return element;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    removeContent(element) {
        /** @type {?} */
        const hash = generateHash(element.textContent);
        this.inserted.delete(hash);
        element.parentNode.removeChild(element);
    }
    /**
     * @param {?} content
     * @return {?}
     */
    has(content) {
        /** @type {?} */
        const hash = generateHash(content);
        return this.inserted.has(hash);
    }
}
DomInsertionService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DomInsertionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DomInsertionService_Factory() { return new DomInsertionService(); }, token: DomInsertionService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomInsertionService.prototype.inserted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLWluc2VydGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RvbS1pbnNlcnRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFHeEMsTUFBTSxPQUFPLG1CQUFtQjtJQURoQztRQUVtQixhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztLQTJCL0M7Ozs7OztJQXpCQyxhQUFhLENBQ1gsZUFBbUM7O2NBRTdCLElBQUksR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUVsRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU87O2NBRTlCLE9BQU8sR0FBRyxlQUFlLENBQUMsYUFBYSxFQUFFO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQTZDOztjQUNuRCxJQUFJLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0IsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsT0FBZTs7Y0FDWCxJQUFJLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUVsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQTVCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7OztJQUVoQyx1Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlbnRTdHJhdGVneSB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvY29udGVudC5zdHJhdGVneSc7XHJcbmltcG9ydCB7IGdlbmVyYXRlSGFzaCB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBEb21JbnNlcnRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGluc2VydGVkID0gbmV3IFNldDxudW1iZXI+KCk7XHJcblxyXG4gIGluc2VydENvbnRlbnQ8VCBleHRlbmRzIEhUTUxTY3JpcHRFbGVtZW50IHwgSFRNTFN0eWxlRWxlbWVudD4oXHJcbiAgICBjb250ZW50U3RyYXRlZ3k6IENvbnRlbnRTdHJhdGVneTxUPixcclxuICApOiBUIHtcclxuICAgIGNvbnN0IGhhc2ggPSBnZW5lcmF0ZUhhc2goY29udGVudFN0cmF0ZWd5LmNvbnRlbnQpO1xyXG5cclxuICAgIGlmICh0aGlzLmluc2VydGVkLmhhcyhoYXNoKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBjb250ZW50U3RyYXRlZ3kuaW5zZXJ0RWxlbWVudCgpO1xyXG4gICAgdGhpcy5pbnNlcnRlZC5hZGQoaGFzaCk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb250ZW50KGVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50IHwgSFRNTFN0eWxlRWxlbWVudCkge1xyXG4gICAgY29uc3QgaGFzaCA9IGdlbmVyYXRlSGFzaChlbGVtZW50LnRleHRDb250ZW50KTtcclxuICAgIHRoaXMuaW5zZXJ0ZWQuZGVsZXRlKGhhc2gpO1xyXG5cclxuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhcyhjb250ZW50OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGhhc2ggPSBnZW5lcmF0ZUhhc2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0ZWQuaGFzKGhhc2gpO1xyXG4gIH1cclxufVxyXG4iXX0=