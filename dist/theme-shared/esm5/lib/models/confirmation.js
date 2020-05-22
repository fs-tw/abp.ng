/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/confirmation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var Confirmation;
(function (Confirmation) {
    /**
     * @record
     */
    function Options() { }
    Confirmation.Options = Options;
    if (false) {
        /** @type {?|undefined} */
        Options.prototype.id;
        /** @type {?|undefined} */
        Options.prototype.dismissible;
        /** @type {?|undefined} */
        Options.prototype.messageLocalizationParams;
        /** @type {?|undefined} */
        Options.prototype.titleLocalizationParams;
        /** @type {?|undefined} */
        Options.prototype.hideCancelBtn;
        /** @type {?|undefined} */
        Options.prototype.hideYesBtn;
        /** @type {?|undefined} */
        Options.prototype.cancelText;
        /** @type {?|undefined} */
        Options.prototype.yesText;
        /**
         *
         * @deprecated To be deleted in v2.9
         * @type {?|undefined}
         */
        Options.prototype.closable;
    }
    /**
     * @record
     */
    function DialogData() { }
    Confirmation.DialogData = DialogData;
    if (false) {
        /** @type {?} */
        DialogData.prototype.message;
        /** @type {?|undefined} */
        DialogData.prototype.title;
        /** @type {?|undefined} */
        DialogData.prototype.severity;
        /** @type {?|undefined} */
        DialogData.prototype.options;
    }
    var Status;
    (function (Status) {
        Status["confirm"] = "confirm";
        Status["reject"] = "reject";
        Status["dismiss"] = "dismiss";
    })(Status = Confirmation.Status || (Confirmation.Status = {}));
})(Confirmation || (Confirmation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2NvbmZpcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBVyxZQUFZLENBZ0M1QjtBQWhDRCxXQUFpQixZQUFZOzs7O0lBQzNCLHNCQWVDOzs7O1FBZEMscUJBQVM7O1FBQ1QsOEJBQXNCOztRQUN0Qiw0Q0FBcUM7O1FBQ3JDLDBDQUFtQzs7UUFDbkMsZ0NBQXdCOztRQUN4Qiw2QkFBcUI7O1FBQ3JCLDZCQUFzQzs7UUFDdEMsMEJBQW1DOzs7Ozs7UUFNbkMsMkJBQW1COzs7OztJQUdyQix5QkFLQzs7OztRQUpDLDZCQUFrQzs7UUFDbEMsMkJBQWlDOztRQUNqQyw4QkFBb0I7O1FBQ3BCLDZCQUEyQjs7SUFLN0IsSUFBWSxNQUlYO0lBSkQsV0FBWSxNQUFNO1FBQ2hCLDZCQUFtQixDQUFBO1FBQ25CLDJCQUFpQixDQUFBO1FBQ2pCLDZCQUFtQixDQUFBO0lBQ3JCLENBQUMsRUFKVyxNQUFNLEdBQU4sbUJBQU0sS0FBTixtQkFBTSxRQUlqQjtBQUNILENBQUMsRUFoQ2dCLFlBQVksS0FBWixZQUFZLFFBZ0M1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIENvbmZpcm1hdGlvbiB7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBPcHRpb25zIHtcclxuICAgIGlkPzogYW55O1xyXG4gICAgZGlzbWlzc2libGU/OiBib29sZWFuO1xyXG4gICAgbWVzc2FnZUxvY2FsaXphdGlvblBhcmFtcz86IHN0cmluZ1tdO1xyXG4gICAgdGl0bGVMb2NhbGl6YXRpb25QYXJhbXM/OiBzdHJpbmdbXTtcclxuICAgIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuO1xyXG4gICAgaGlkZVllc0J0bj86IGJvb2xlYW47XHJcbiAgICBjYW5jZWxUZXh0PzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtO1xyXG4gICAgeWVzVGV4dD86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBUbyBiZSBkZWxldGVkIGluIHYyLjlcclxuICAgICAqL1xyXG4gICAgY2xvc2FibGU/OiBib29sZWFuO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbTtcclxuICAgIHRpdGxlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtO1xyXG4gICAgc2V2ZXJpdHk/OiBTZXZlcml0eTtcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPE9wdGlvbnM+O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IHR5cGUgU2V2ZXJpdHkgPSAnbmV1dHJhbCcgfCAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InO1xyXG5cclxuICBleHBvcnQgZW51bSBTdGF0dXMge1xyXG4gICAgY29uZmlybSA9ICdjb25maXJtJyxcclxuICAgIHJlamVjdCA9ICdyZWplY3QnLFxyXG4gICAgZGlzbWlzcyA9ICdkaXNtaXNzJyxcclxuICB9XHJcbn1cclxuIl19