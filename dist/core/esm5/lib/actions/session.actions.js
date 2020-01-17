/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/session.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetLanguage = /** @class */ (function () {
    function SetLanguage(payload) {
        this.payload = payload;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc2Vzc2lvbi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7SUFFRSxxQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDO0lBRHRCLGdCQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFFbEQsa0JBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxXQUFXOzs7SUFDdEIsaUJBQWdEOztJQUNwQyw4QkFBc0I7O0FBRXBDO0lBRUUsbUJBQW1CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFBRyxDQUFDO0lBRDdCLGNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUVoRCxnQkFBQztDQUFBLEFBSEQsSUFHQztTQUhZLFNBQVM7OztJQUNwQixlQUE4Qzs7SUFDbEMsNEJBQTZCOztBQUUzQztJQUVFLDhCQUFtQixTQUFrQztRQUFsQyxjQUFTLEdBQVQsU0FBUyxDQUF5QjtJQUFHLENBQUM7SUFEekMseUJBQUksR0FBRyxtQ0FBbUMsQ0FBQztJQUU3RCwyQkFBQztDQUFBLEFBSEQsSUFHQztTQUhZLG9CQUFvQjs7O0lBQy9CLDBCQUEyRDs7SUFDL0MseUNBQXlDOztBQUV2RDtJQUVFLHFCQUFtQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQUcsQ0FBQztJQUR2QixnQkFBSSxHQUFHLHdCQUF3QixDQUFDO0lBRWxELGtCQUFDO0NBQUEsQUFIRCxJQUdDO1NBSFksV0FBVzs7O0lBQ3RCLGlCQUFnRDs7SUFDcEMsOEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXRMYW5ndWFnZSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1Nlc3Npb25dIFNldCBMYW5ndWFnZSc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2V0VGVuYW50IHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU2Vzc2lvbl0gU2V0IFRlbmFudCc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFCUC5CYXNpY0l0ZW0pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1vZGlmeU9wZW5lZFRhYkNvdW50IHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU2Vzc2lvbl0gTW9kaWZ5IE9wZW5lZCBUYWIgQ291bnQnO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcGVyYXRpb246ICdpbmNyZWFzZScgfCAnZGVjcmVhc2UnKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZXRSZW1lbWJlciB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1Nlc3Npb25dIFNldCBSZW1lbWJlcic7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGJvb2xlYW4pIHt9XHJcbn1cclxuIl19