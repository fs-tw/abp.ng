/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/date-extensions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Date.prototype.toLocalISOString = (/**
 * @this {?}
 * @return {?}
 */
function () {
    /** @type {?} */
    var timezoneOffset = this.getTimezoneOffset();
    return new Date(this.getTime() - timezoneOffset * 60000).toISOString();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1leHRlbnNpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2RhdGUtZXh0ZW5zaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVFBLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCOzs7O0FBQUc7O1FBQzFCLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7SUFFL0MsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3pFLENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBEYXRlIHtcclxuICAgIHRvTG9jYWxJU09TdHJpbmc/OiAoKSA9PiBzdHJpbmc7XHJcbiAgfVxyXG59XHJcblxyXG5EYXRlLnByb3RvdHlwZS50b0xvY2FsSVNPU3RyaW5nID0gZnVuY3Rpb24odGhpczogRGF0ZSk6IHN0cmluZyB7XHJcbiAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSB0aGlzLmdldFRpbWV6b25lT2Zmc2V0KCk7XHJcblxyXG4gIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldFRpbWUoKSAtIHRpbWV6b25lT2Zmc2V0ICogNjAwMDApLnRvSVNPU3RyaW5nKCk7XHJcbn07XHJcbiJdfQ==