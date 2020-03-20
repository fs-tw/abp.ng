/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/toaster.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var Toaster;
(function (Toaster) {
    /**
     * @record
     */
    function ToastOptions() { }
    Toaster.ToastOptions = ToastOptions;
    if (false) {
        /** @type {?|undefined} */
        ToastOptions.prototype.life;
        /** @type {?|undefined} */
        ToastOptions.prototype.sticky;
        /** @type {?|undefined} */
        ToastOptions.prototype.closable;
        /** @type {?|undefined} */
        ToastOptions.prototype.tapToDismiss;
        /** @type {?|undefined} */
        ToastOptions.prototype.messageLocalizationParams;
        /** @type {?|undefined} */
        ToastOptions.prototype.titleLocalizationParams;
        /** @type {?} */
        ToastOptions.prototype.id;
        /** @type {?|undefined} */
        ToastOptions.prototype.containerKey;
    }
    /**
     * @record
     */
    function Toast() { }
    Toaster.Toast = Toast;
    if (false) {
        /** @type {?} */
        Toast.prototype.message;
        /** @type {?|undefined} */
        Toast.prototype.title;
        /** @type {?|undefined} */
        Toast.prototype.severity;
        /** @type {?|undefined} */
        Toast.prototype.options;
    }
    /**
     * @deprecated Status will be removed from toaster model in v3.0
     */
    let Status;
    (function (Status) {
        Status["confirm"] = "confirm";
        Status["reject"] = "reject";
        Status["dismiss"] = "dismiss";
    })(Status = Toaster.Status || (Toaster.Status = {}));
})(Toaster || (Toaster = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL21vZGVscy90b2FzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFXLE9BQU8sQ0E2QnZCO0FBN0JELFdBQWlCLE9BQU87Ozs7SUFDdEIsMkJBU0M7Ozs7UUFSQyw0QkFBYzs7UUFDZCw4QkFBaUI7O1FBQ2pCLGdDQUFtQjs7UUFDbkIsb0NBQXVCOztRQUN2QixpREFBcUM7O1FBQ3JDLCtDQUFtQzs7UUFDbkMsMEJBQVE7O1FBQ1Isb0NBQXNCOzs7OztJQUd4QixvQkFLQzs7OztRQUpDLHdCQUFrQzs7UUFDbEMsc0JBQWlDOztRQUNqQyx5QkFBa0I7O1FBQ2xCLHdCQUF1Qjs7SUFLekI7O09BRUc7SUFDSCxJQUFZLE1BSVg7SUFKRCxXQUFZLE1BQU07UUFDaEIsNkJBQW1CLENBQUE7UUFDbkIsMkJBQWlCLENBQUE7UUFDakIsNkJBQW1CLENBQUE7SUFDckIsQ0FBQyxFQUpXLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQUlqQjtBQUNILENBQUMsRUE3QmdCLE9BQU8sS0FBUCxPQUFPLFFBNkJ2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFRvYXN0ZXIge1xyXG4gIGV4cG9ydCBpbnRlcmZhY2UgVG9hc3RPcHRpb25zIHtcclxuICAgIGxpZmU/OiBudW1iZXI7XHJcbiAgICBzdGlja3k/OiBib29sZWFuO1xyXG4gICAgY2xvc2FibGU/OiBib29sZWFuO1xyXG4gICAgdGFwVG9EaXNtaXNzPzogYm9vbGVhbjtcclxuICAgIG1lc3NhZ2VMb2NhbGl6YXRpb25QYXJhbXM/OiBzdHJpbmdbXTtcclxuICAgIHRpdGxlTG9jYWxpemF0aW9uUGFyYW1zPzogc3RyaW5nW107XHJcbiAgICBpZDogYW55O1xyXG4gICAgY29udGFpbmVyS2V5Pzogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBUb2FzdCB7XHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW07XHJcbiAgICB0aXRsZT86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbTtcclxuICAgIHNldmVyaXR5Pzogc3RyaW5nO1xyXG4gICAgb3B0aW9ucz86IFRvYXN0T3B0aW9ucztcclxuICB9XHJcblxyXG4gIGV4cG9ydCB0eXBlIFNldmVyaXR5ID0gJ25ldXRyYWwnIHwgJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJztcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgU3RhdHVzIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRvYXN0ZXIgbW9kZWwgaW4gdjMuMFxyXG4gICAqL1xyXG4gIGV4cG9ydCBlbnVtIFN0YXR1cyB7XHJcbiAgICBjb25maXJtID0gJ2NvbmZpcm0nLFxyXG4gICAgcmVqZWN0ID0gJ3JlamVjdCcsXHJcbiAgICBkaXNtaXNzID0gJ2Rpc21pc3MnLFxyXG4gIH1cclxufVxyXG4iXX0=