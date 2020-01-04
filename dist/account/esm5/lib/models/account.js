/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/account.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var Account;
(function (Account) {
    /**
     * @record
     */
    function AuthWrapperComponentInputs() { }
    Account.AuthWrapperComponentInputs = AuthWrapperComponentInputs;
    if (false) {
        /** @type {?} */
        AuthWrapperComponentInputs.prototype.mainContentRef;
        /** @type {?|undefined} */
        AuthWrapperComponentInputs.prototype.cancelContentRef;
    }
    /**
     * @record
     */
    function AuthWrapperComponentOutputs() { }
    Account.AuthWrapperComponentOutputs = AuthWrapperComponentOutputs;
    /**
     * @record
     */
    function TenantBoxComponentInputs() { }
    Account.TenantBoxComponentInputs = TenantBoxComponentInputs;
    /**
     * @record
     */
    function TenantBoxComponentOutputs() { }
    Account.TenantBoxComponentOutputs = TenantBoxComponentOutputs;
    /**
     * @record
     */
    function PersonalSettingsComponentInputs() { }
    Account.PersonalSettingsComponentInputs = PersonalSettingsComponentInputs;
    /**
     * @record
     */
    function PersonalSettingsComponentOutputs() { }
    Account.PersonalSettingsComponentOutputs = PersonalSettingsComponentOutputs;
    /**
     * @record
     */
    function ChangePasswordComponentInputs() { }
    Account.ChangePasswordComponentInputs = ChangePasswordComponentInputs;
    /**
     * @record
     */
    function ChangePasswordComponentOutputs() { }
    Account.ChangePasswordComponentOutputs = ChangePasswordComponentOutputs;
})(Account || (Account = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBVyxPQUFPLENBMEJ2QjtBQTFCRCxXQUFpQixPQUFPOzs7O0lBQ3RCLHlDQUdDOzs7O1FBRkMsb0RBQTBDOztRQUMxQyxzREFBNkM7Ozs7O0lBSS9DLDBDQUErQzs7Ozs7SUFHL0MsdUNBQTRDOzs7OztJQUc1Qyx3Q0FBNkM7Ozs7O0lBRzdDLDhDQUFtRDs7Ozs7SUFHbkQsK0NBQW9EOzs7OztJQUdwRCw0Q0FBaUQ7Ozs7O0lBR2pELDZDQUFrRDs7QUFDcEQsQ0FBQyxFQTFCZ0IsT0FBTyxLQUFQLE9BQU8sUUEwQnZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQWNjb3VudCB7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBBdXRoV3JhcHBlckNvbXBvbmVudElucHV0cyB7XHJcbiAgICByZWFkb25seSBtYWluQ29udGVudFJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIHJlYWRvbmx5IGNhbmNlbENvbnRlbnRSZWY/OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1lbXB0eS1pbnRlcmZhY2VcclxuICBleHBvcnQgaW50ZXJmYWNlIEF1dGhXcmFwcGVyQ29tcG9uZW50T3V0cHV0cyB7fVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWVtcHR5LWludGVyZmFjZVxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgVGVuYW50Qm94Q29tcG9uZW50SW5wdXRzIHt9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHktaW50ZXJmYWNlXHJcbiAgZXhwb3J0IGludGVyZmFjZSBUZW5hbnRCb3hDb21wb25lbnRPdXRwdXRzIHt9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHktaW50ZXJmYWNlXHJcbiAgZXhwb3J0IGludGVyZmFjZSBQZXJzb25hbFNldHRpbmdzQ29tcG9uZW50SW5wdXRzIHt9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHktaW50ZXJmYWNlXHJcbiAgZXhwb3J0IGludGVyZmFjZSBQZXJzb25hbFNldHRpbmdzQ29tcG9uZW50T3V0cHV0cyB7fVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWVtcHR5LWludGVyZmFjZVxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnRJbnB1dHMge31cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1lbXB0eS1pbnRlcmZhY2VcclxuICBleHBvcnQgaW50ZXJmYWNlIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50T3V0cHV0cyB7fVxyXG59XHJcbiJdfQ==