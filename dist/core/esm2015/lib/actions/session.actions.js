/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/session.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class SetLanguage {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
SetLanguage.type = '[Session] Set Language';
if (false) {
    /** @type {?} */
    SetLanguage.type;
    /** @type {?} */
    SetLanguage.prototype.payload;
}
export class SetTenant {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
SetTenant.type = '[Session] Set Tenant';
if (false) {
    /** @type {?} */
    SetTenant.type;
    /** @type {?} */
    SetTenant.prototype.payload;
}
export class ModifyOpenedTabCount {
    /**
     * @param {?} operation
     */
    constructor(operation) {
        this.operation = operation;
    }
}
ModifyOpenedTabCount.type = '[Session] Modify Opened Tab Count';
if (false) {
    /** @type {?} */
    ModifyOpenedTabCount.type;
    /** @type {?} */
    ModifyOpenedTabCount.prototype.operation;
}
export class SetRemember {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
SetRemember.type = '[Session] Set Remember';
if (false) {
    /** @type {?} */
    SetRemember.type;
    /** @type {?} */
    SetRemember.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc2Vzc2lvbi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLFdBQVc7Ozs7SUFFdEIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDOztBQUR0QixnQkFBSSxHQUFHLHdCQUF3QixDQUFDOzs7SUFBaEQsaUJBQWdEOztJQUNwQyw4QkFBc0I7O0FBRXBDLE1BQU0sT0FBTyxTQUFTOzs7O0lBRXBCLFlBQW1CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFBRyxDQUFDOztBQUQ3QixjQUFJLEdBQUcsc0JBQXNCLENBQUM7OztJQUE5QyxlQUE4Qzs7SUFDbEMsNEJBQTZCOztBQUUzQyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRS9CLFlBQW1CLFNBQWtDO1FBQWxDLGNBQVMsR0FBVCxTQUFTLENBQXlCO0lBQUcsQ0FBQzs7QUFEekMseUJBQUksR0FBRyxtQ0FBbUMsQ0FBQzs7O0lBQTNELDBCQUEyRDs7SUFDL0MseUNBQXlDOztBQUV2RCxNQUFNLE9BQU8sV0FBVzs7OztJQUV0QixZQUFtQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQUcsQ0FBQzs7QUFEdkIsZ0JBQUksR0FBRyx3QkFBd0IsQ0FBQzs7O0lBQWhELGlCQUFnRDs7SUFDcEMsOEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXRMYW5ndWFnZSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1Nlc3Npb25dIFNldCBMYW5ndWFnZSc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2V0VGVuYW50IHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU2Vzc2lvbl0gU2V0IFRlbmFudCc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFCUC5CYXNpY0l0ZW0pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1vZGlmeU9wZW5lZFRhYkNvdW50IHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU2Vzc2lvbl0gTW9kaWZ5IE9wZW5lZCBUYWIgQ291bnQnO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcGVyYXRpb246ICdpbmNyZWFzZScgfCAnZGVjcmVhc2UnKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZXRSZW1lbWJlciB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1Nlc3Npb25dIFNldCBSZW1lbWJlcic7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGJvb2xlYW4pIHt9XHJcbn1cclxuIl19