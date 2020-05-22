/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/session.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetLanguage = /** @class */ (function () {
    function SetLanguage(payload, dispatchAppConfiguration) {
        this.payload = payload;
        this.dispatchAppConfiguration = dispatchAppConfiguration;
    }
    SetLanguage.type = '[Session] Set Language';
    return SetLanguage;
}());
export { SetLanguage };
if (false) {
    /** @type {?} */
    SetLanguage.type;
    /** @type {?} */
    SetLanguage.prototype.payload;
    /** @type {?} */
    SetLanguage.prototype.dispatchAppConfiguration;
}
var SetTenant = /** @class */ (function () {
    function SetTenant(payload) {
        this.payload = payload;
    }
    SetTenant.type = '[Session] Set Tenant';
    return SetTenant;
}());
export { SetTenant };
if (false) {
    /** @type {?} */
    SetTenant.type;
    /** @type {?} */
    SetTenant.prototype.payload;
}
var ModifyOpenedTabCount = /** @class */ (function () {
    function ModifyOpenedTabCount(operation) {
        this.operation = operation;
    }
    ModifyOpenedTabCount.type = '[Session] Modify Opened Tab Count';
    return ModifyOpenedTabCount;
}());
export { ModifyOpenedTabCount };
if (false) {
    /** @type {?} */
    ModifyOpenedTabCount.type;
    /** @type {?} */
    ModifyOpenedTabCount.prototype.operation;
}
var SetRemember = /** @class */ (function () {
    function SetRemember(payload) {
        this.payload = payload;
    }
    SetRemember.type = '[Session] Set Remember';
    return SetRemember;
}());
export { SetRemember };
if (false) {
    /** @type {?} */
    SetRemember.type;
    /** @type {?} */
    SetRemember.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc2Vzc2lvbi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7SUFFRSxxQkFBbUIsT0FBZSxFQUFTLHdCQUFrQztRQUExRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFVO0lBQUcsQ0FBQztJQURqRSxnQkFBSSxHQUFHLHdCQUF3QixDQUFDO0lBRWxELGtCQUFDO0NBQUEsQUFIRCxJQUdDO1NBSFksV0FBVzs7O0lBQ3RCLGlCQUFnRDs7SUFDcEMsOEJBQXNCOztJQUFFLCtDQUF5Qzs7QUFFL0U7SUFFRSxtQkFBbUIsT0FBc0I7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtJQUFHLENBQUM7SUFEN0IsY0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBRWhELGdCQUFDO0NBQUEsQUFIRCxJQUdDO1NBSFksU0FBUzs7O0lBQ3BCLGVBQThDOztJQUNsQyw0QkFBNkI7O0FBRTNDO0lBRUUsOEJBQW1CLFNBQWtDO1FBQWxDLGNBQVMsR0FBVCxTQUFTLENBQXlCO0lBQUcsQ0FBQztJQUR6Qyx5QkFBSSxHQUFHLG1DQUFtQyxDQUFDO0lBRTdELDJCQUFDO0NBQUEsQUFIRCxJQUdDO1NBSFksb0JBQW9COzs7SUFDL0IsMEJBQTJEOztJQUMvQyx5Q0FBeUM7O0FBRXZEO0lBRUUscUJBQW1CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFBRyxDQUFDO0lBRHZCLGdCQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFFbEQsa0JBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxXQUFXOzs7SUFDdEIsaUJBQWdEOztJQUNwQyw4QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNldExhbmd1YWdlIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU2Vzc2lvbl0gU2V0IExhbmd1YWdlJztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nLCBwdWJsaWMgZGlzcGF0Y2hBcHBDb25maWd1cmF0aW9uPzogYm9vbGVhbikge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2V0VGVuYW50IHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU2Vzc2lvbl0gU2V0IFRlbmFudCc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFCUC5CYXNpY0l0ZW0pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1vZGlmeU9wZW5lZFRhYkNvdW50IHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU2Vzc2lvbl0gTW9kaWZ5IE9wZW5lZCBUYWIgQ291bnQnO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcGVyYXRpb246ICdpbmNyZWFzZScgfCAnZGVjcmVhc2UnKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZXRSZW1lbWJlciB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1Nlc3Npb25dIFNldCBSZW1lbWJlcic7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGJvb2xlYW4pIHt9XHJcbn1cclxuIl19