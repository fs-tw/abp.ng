/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/track-by.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** @type {?} */
export const trackBy = (/**
 * @template T
 * @param {?} key
 * @return {?}
 */
(key) => (/**
 * @param {?} _
 * @param {?} item
 * @return {?}
 */
(_, item) => item[key]));
/** @type {?} */
export const trackByDeep = (/**
 * @template T
 * @param {...?} keys
 * @return {?}
 */
(...keys) => (/**
 * @param {?} _
 * @param {?} item
 * @return {?}
 */
(_, item) => keys.reduce((/**
 * @param {?} acc
 * @param {?} key
 * @return {?}
 */
(acc, key) => acc[key]), item)));
/**
 * @template ItemType
 */
export class TrackByService {
    constructor() {
        this.by = trackBy;
        this.byDeep = trackByDeep;
    }
}
TrackByService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ TrackByService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TrackByService_Factory() { return new TrackByService(); }, token: TrackByService, providedIn: "root" });
if (false) {
    /** @type {?} */
    TrackByService.prototype.by;
    /** @type {?} */
    TrackByService.prototype.byDeep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stYnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90cmFjay1ieS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBbUIsTUFBTSxlQUFlLENBQUM7OztBQUc1RCxNQUFNLE9BQU8sT0FBTzs7Ozs7QUFBRyxDQUFVLEdBQVksRUFBc0IsRUFBRTs7Ozs7QUFBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFBOztBQUU1RixNQUFNLE9BQU8sV0FBVzs7Ozs7QUFBRyxDQUN6QixHQUFHLElBQTJDLEVBQzFCLEVBQUU7Ozs7O0FBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTTs7Ozs7QUFBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQSxDQUFBOzs7O0FBSy9FLE1BQU0sT0FBTyxjQUFjO0lBSDNCO1FBSUUsT0FBRSxHQUFHLE9BQU8sQ0FBQztRQUViLFdBQU0sR0FBRyxXQUFXLENBQUM7S0FDdEI7OztZQVBBLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7SUFFQyw0QkFBYTs7SUFFYixnQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTyB9IGZyb20gJ3RzLXRvb2xiZWx0JztcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFja0J5ID0gPFQgPSBhbnk+KGtleToga2V5b2YgVCk6IFRyYWNrQnlGdW5jdGlvbjxUPiA9PiAoXywgaXRlbSkgPT4gaXRlbVtrZXldO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWNrQnlEZWVwID0gPFQgPSBhbnk+KFxyXG4gIC4uLmtleXM6IFQgZXh0ZW5kcyBvYmplY3QgPyBPLlBhdGhzPFQ+IDogbmV2ZXJcclxuKTogVHJhY2tCeUZ1bmN0aW9uPFQ+ID0+IChfLCBpdGVtKSA9PiBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IGFjY1trZXldLCBpdGVtKTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFja0J5U2VydmljZTxJdGVtVHlwZSA9IGFueT4ge1xyXG4gIGJ5ID0gdHJhY2tCeTtcclxuXHJcbiAgYnlEZWVwID0gdHJhY2tCeURlZXA7XHJcbn1cclxuIl19