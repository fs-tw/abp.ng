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
        Options.prototype.closable;
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
    let Status;
    (function (Status) {
        Status["confirm"] = "confirm";
        Status["reject"] = "reject";
        Status["dismiss"] = "dismiss";
    })(Status = Confirmation.Status || (Confirmation.Status = {}));
})(Confirmation || (Confirmation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2NvbmZpcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBVyxZQUFZLENBMEI1QjtBQTFCRCxXQUFpQixZQUFZOzs7O0lBQzNCLHNCQVNDOzs7O1FBUkMscUJBQVM7O1FBQ1QsMkJBQW1COztRQUNuQiw0Q0FBcUM7O1FBQ3JDLDBDQUFtQzs7UUFDbkMsZ0NBQXdCOztRQUN4Qiw2QkFBcUI7O1FBQ3JCLDZCQUFzQzs7UUFDdEMsMEJBQW1DOzs7OztJQUdyQyx5QkFLQzs7OztRQUpDLDZCQUFrQzs7UUFDbEMsMkJBQWlDOztRQUNqQyw4QkFBb0I7O1FBQ3BCLDZCQUEyQjs7SUFLN0IsSUFBWSxNQUlYO0lBSkQsV0FBWSxNQUFNO1FBQ2hCLDZCQUFtQixDQUFBO1FBQ25CLDJCQUFpQixDQUFBO1FBQ2pCLDZCQUFtQixDQUFBO0lBQ3JCLENBQUMsRUFKVyxNQUFNLEdBQU4sbUJBQU0sS0FBTixtQkFBTSxRQUlqQjtBQUNILENBQUMsRUExQmdCLFlBQVksS0FBWixZQUFZLFFBMEI1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIENvbmZpcm1hdGlvbiB7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBPcHRpb25zIHtcclxuICAgIGlkPzogYW55O1xyXG4gICAgY2xvc2FibGU/OiBib29sZWFuO1xyXG4gICAgbWVzc2FnZUxvY2FsaXphdGlvblBhcmFtcz86IHN0cmluZ1tdO1xyXG4gICAgdGl0bGVMb2NhbGl6YXRpb25QYXJhbXM/OiBzdHJpbmdbXTtcclxuICAgIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuO1xyXG4gICAgaGlkZVllc0J0bj86IGJvb2xlYW47XHJcbiAgICBjYW5jZWxUZXh0PzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtO1xyXG4gICAgeWVzVGV4dD86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW07XHJcbiAgICB0aXRsZT86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbTtcclxuICAgIHNldmVyaXR5PzogU2V2ZXJpdHk7XHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxPcHRpb25zPjtcclxuICB9XHJcblxyXG4gIGV4cG9ydCB0eXBlIFNldmVyaXR5ID0gJ25ldXRyYWwnIHwgJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJztcclxuXHJcbiAgZXhwb3J0IGVudW0gU3RhdHVzIHtcclxuICAgIGNvbmZpcm0gPSAnY29uZmlybScsXHJcbiAgICByZWplY3QgPSAncmVqZWN0JyxcclxuICAgIGRpc21pc3MgPSAnZGlzbWlzcycsXHJcbiAgfVxyXG59XHJcbiJdfQ==