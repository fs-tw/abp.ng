/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/track-by.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** @type {?} */
export var trackBy = (/**
 * @template T
 * @param {?} key
 * @return {?}
 */
function (key) { return (/**
 * @param {?} _
 * @param {?} item
 * @return {?}
 */
function (_, item) { return item[key]; }); });
/** @type {?} */
export var trackByDeep = (/**
 * @template T
 * @param {...?} keys
 * @return {?}
 */
function () {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return (/**
     * @param {?} _
     * @param {?} item
     * @return {?}
     */
    function (_, item) { return keys.reduce((/**
     * @param {?} acc
     * @param {?} key
     * @return {?}
     */
    function (acc, key) { return acc[key]; }), item); });
});
/**
 * @template ItemType
 */
var TrackByService = /** @class */ (function () {
    function TrackByService() {
        this.by = trackBy;
        this.byDeep = trackByDeep;
    }
    TrackByService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ TrackByService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TrackByService_Factory() { return new TrackByService(); }, token: TrackByService, providedIn: "root" });
    return TrackByService;
}());
export { TrackByService };
if (false) {
    /** @type {?} */
    TrackByService.prototype.by;
    /** @type {?} */
    TrackByService.prototype.byDeep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stYnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90cmFjay1ieS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBbUIsTUFBTSxlQUFlLENBQUM7OztBQUc1RCxNQUFNLEtBQU8sT0FBTzs7Ozs7QUFBRyxVQUFVLEdBQVk7Ozs7O0FBQXlCLFVBQUMsQ0FBQyxFQUFFLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBVCxDQUFTLElBQUEsQ0FBQTs7QUFFNUYsTUFBTSxLQUFPLFdBQVc7Ozs7O0FBQUc7SUFDekIsY0FBOEM7U0FBOUMsVUFBOEMsRUFBOUMscUJBQThDLEVBQTlDLElBQThDO1FBQTlDLHlCQUE4Qzs7Ozs7OztJQUN2QixVQUFDLENBQUMsRUFBRSxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsTUFBTTs7Ozs7SUFBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQVIsQ0FBUSxHQUFFLElBQUksQ0FBQyxFQUF6QyxDQUF5QztDQUFBLENBQUE7Ozs7QUFFL0U7SUFBQTtRQUlFLE9BQUUsR0FBRyxPQUFPLENBQUM7UUFFYixXQUFNLEdBQUcsV0FBVyxDQUFDO0tBQ3RCOztnQkFQQSxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7eUJBWEQ7Q0FnQkMsQUFQRCxJQU9DO1NBSlksY0FBYzs7O0lBQ3pCLDRCQUFhOztJQUViLGdDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPIH0gZnJvbSAndHMtdG9vbGJlbHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWNrQnkgPSA8VCA9IGFueT4oa2V5OiBrZXlvZiBUKTogVHJhY2tCeUZ1bmN0aW9uPFQ+ID0+IChfLCBpdGVtKSA9PiBpdGVtW2tleV07XHJcblxyXG5leHBvcnQgY29uc3QgdHJhY2tCeURlZXAgPSA8VCA9IGFueT4oXHJcbiAgLi4ua2V5czogVCBleHRlbmRzIG9iamVjdCA/IE8uUGF0aHM8VD4gOiBuZXZlclxyXG4pOiBUcmFja0J5RnVuY3Rpb248VD4gPT4gKF8sIGl0ZW0pID0+IGtleXMucmVkdWNlKChhY2MsIGtleSkgPT4gYWNjW2tleV0sIGl0ZW0pO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYWNrQnlTZXJ2aWNlPEl0ZW1UeXBlID0gYW55PiB7XHJcbiAgYnkgPSB0cmFja0J5O1xyXG5cclxuICBieURlZXAgPSB0cmFja0J5RGVlcDtcclxufVxyXG4iXX0=