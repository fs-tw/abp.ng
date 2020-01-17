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
    var Status;
    (function (Status) {
        Status["confirm"] = "confirm";
        Status["reject"] = "reject";
        Status["dismiss"] = "dismiss";
    })(Status = Toaster.Status || (Toaster.Status = {}));
})(Toaster || (Toaster = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL21vZGVscy90b2FzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFXLE9BQU8sQ0EwQnZCO0FBMUJELFdBQWlCLE9BQU87Ozs7SUFDdEIsMkJBU0M7Ozs7UUFSQyw0QkFBYzs7UUFDZCw4QkFBaUI7O1FBQ2pCLGdDQUFtQjs7UUFDbkIsb0NBQXVCOztRQUN2QixpREFBcUM7O1FBQ3JDLCtDQUFtQzs7UUFDbkMsMEJBQVE7O1FBQ1Isb0NBQXNCOzs7OztJQUd4QixvQkFLQzs7OztRQUpDLHdCQUFrQzs7UUFDbEMsc0JBQWlDOztRQUNqQyx5QkFBa0I7O1FBQ2xCLHdCQUF1Qjs7SUFLekIsSUFBWSxNQUlYO0lBSkQsV0FBWSxNQUFNO1FBQ2hCLDZCQUFtQixDQUFBO1FBQ25CLDJCQUFpQixDQUFBO1FBQ2pCLDZCQUFtQixDQUFBO0lBQ3JCLENBQUMsRUFKVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFJakI7QUFDSCxDQUFDLEVBMUJnQixPQUFPLEtBQVAsT0FBTyxRQTBCdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBUb2FzdGVyIHtcclxuICBleHBvcnQgaW50ZXJmYWNlIFRvYXN0T3B0aW9ucyB7XHJcbiAgICBsaWZlPzogbnVtYmVyO1xyXG4gICAgc3RpY2t5PzogYm9vbGVhbjtcclxuICAgIGNsb3NhYmxlPzogYm9vbGVhbjtcclxuICAgIHRhcFRvRGlzbWlzcz86IGJvb2xlYW47XHJcbiAgICBtZXNzYWdlTG9jYWxpemF0aW9uUGFyYW1zPzogc3RyaW5nW107XHJcbiAgICB0aXRsZUxvY2FsaXphdGlvblBhcmFtcz86IHN0cmluZ1tdO1xyXG4gICAgaWQ6IGFueTtcclxuICAgIGNvbnRhaW5lcktleT86IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgVG9hc3Qge1xyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtO1xyXG4gICAgdGl0bGU/OiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW07XHJcbiAgICBzZXZlcml0eT86IHN0cmluZztcclxuICAgIG9wdGlvbnM/OiBUb2FzdE9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgdHlwZSBTZXZlcml0eSA9ICduZXV0cmFsJyB8ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcic7XHJcblxyXG4gIGV4cG9ydCBlbnVtIFN0YXR1cyB7XHJcbiAgICBjb25maXJtID0gJ2NvbmZpcm0nLFxyXG4gICAgcmVqZWN0ID0gJ3JlamVjdCcsXHJcbiAgICBkaXNtaXNzID0gJ2Rpc21pc3MnLFxyXG4gIH1cclxufVxyXG4iXX0=