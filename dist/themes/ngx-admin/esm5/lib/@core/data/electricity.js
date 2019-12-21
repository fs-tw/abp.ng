/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/electricity.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function Month() { }
if (false) {
    /** @type {?} */
    Month.prototype.month;
    /** @type {?} */
    Month.prototype.delta;
    /** @type {?} */
    Month.prototype.down;
    /** @type {?} */
    Month.prototype.kWatts;
    /** @type {?} */
    Month.prototype.cost;
}
/**
 * @record
 */
export function Electricity() { }
if (false) {
    /** @type {?} */
    Electricity.prototype.title;
    /** @type {?|undefined} */
    Electricity.prototype.active;
    /** @type {?} */
    Electricity.prototype.months;
}
/**
 * @record
 */
export function ElectricityChart() { }
if (false) {
    /** @type {?} */
    ElectricityChart.prototype.label;
    /** @type {?} */
    ElectricityChart.prototype.value;
}
/**
 * @abstract
 */
var /**
 * @abstract
 */
ElectricityData = /** @class */ (function () {
    function ElectricityData() {
    }
    return ElectricityData;
}());
/**
 * @abstract
 */
export { ElectricityData };
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    ElectricityData.prototype.getListData = function () { };
    /**
     * @abstract
     * @return {?}
     */
    ElectricityData.prototype.getChartData = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3RyaWNpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL2RhdGEvZWxlY3RyaWNpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSwyQkFNQzs7O0lBTEMsc0JBQWM7O0lBQ2Qsc0JBQWM7O0lBQ2QscUJBQWM7O0lBQ2QsdUJBQWU7O0lBQ2YscUJBQWE7Ozs7O0FBR2YsaUNBSUM7OztJQUhDLDRCQUFjOztJQUNkLDZCQUFpQjs7SUFDakIsNkJBQWdCOzs7OztBQUdsQixzQ0FHQzs7O0lBRkMsaUNBQWM7O0lBQ2QsaUNBQWM7Ozs7O0FBR2hCOzs7O0lBQUE7SUFHQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7Ozs7Ozs7OztJQUZDLHdEQUFrRDs7Ozs7SUFDbEQseURBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb250aCB7XHJcbiAgbW9udGg6IHN0cmluZztcclxuICBkZWx0YTogc3RyaW5nO1xyXG4gIGRvd246IGJvb2xlYW47XHJcbiAga1dhdHRzOiBzdHJpbmc7XHJcbiAgY29zdDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVsZWN0cmljaXR5IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGFjdGl2ZT86IGJvb2xlYW47XHJcbiAgbW9udGhzOiBNb250aFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVsZWN0cmljaXR5Q2hhcnQge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVsZWN0cmljaXR5RGF0YSB7XHJcbiAgYWJzdHJhY3QgZ2V0TGlzdERhdGEoKTogT2JzZXJ2YWJsZTxFbGVjdHJpY2l0eVtdPjtcclxuICBhYnN0cmFjdCBnZXRDaGFydERhdGEoKTogT2JzZXJ2YWJsZTxFbGVjdHJpY2l0eUNoYXJ0W10+O1xyXG59XHJcbiJdfQ==