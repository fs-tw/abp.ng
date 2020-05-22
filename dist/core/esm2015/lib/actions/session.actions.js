/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/session.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class SetLanguage {
    /**
     * @param {?} payload
     * @param {?=} dispatchAppConfiguration
     */
    constructor(payload, dispatchAppConfiguration) {
        this.payload = payload;
        this.dispatchAppConfiguration = dispatchAppConfiguration;
    }
}
SetLanguage.type = '[Session] Set Language';
if (false) {
    /** @type {?} */
    SetLanguage.type;
    /** @type {?} */
    SetLanguage.prototype.payload;
    /** @type {?} */
    SetLanguage.prototype.dispatchAppConfiguration;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc2Vzc2lvbi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBRXRCLFlBQW1CLE9BQWUsRUFBUyx3QkFBa0M7UUFBMUQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFTLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBVTtJQUFHLENBQUM7O0FBRGpFLGdCQUFJLEdBQUcsd0JBQXdCLENBQUM7OztJQUFoRCxpQkFBZ0Q7O0lBQ3BDLDhCQUFzQjs7SUFBRSwrQ0FBeUM7O0FBRS9FLE1BQU0sT0FBTyxTQUFTOzs7O0lBRXBCLFlBQW1CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFBRyxDQUFDOztBQUQ3QixjQUFJLEdBQUcsc0JBQXNCLENBQUM7OztJQUE5QyxlQUE4Qzs7SUFDbEMsNEJBQTZCOztBQUUzQyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRS9CLFlBQW1CLFNBQWtDO1FBQWxDLGNBQVMsR0FBVCxTQUFTLENBQXlCO0lBQUcsQ0FBQzs7QUFEekMseUJBQUksR0FBRyxtQ0FBbUMsQ0FBQzs7O0lBQTNELDBCQUEyRDs7SUFDL0MseUNBQXlDOztBQUV2RCxNQUFNLE9BQU8sV0FBVzs7OztJQUV0QixZQUFtQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQUcsQ0FBQzs7QUFEdkIsZ0JBQUksR0FBRyx3QkFBd0IsQ0FBQzs7O0lBQWhELGlCQUFnRDs7SUFDcEMsOEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXRMYW5ndWFnZSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1Nlc3Npb25dIFNldCBMYW5ndWFnZSc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZywgcHVibGljIGRpc3BhdGNoQXBwQ29uZmlndXJhdGlvbj86IGJvb2xlYW4pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNldFRlbmFudCB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1Nlc3Npb25dIFNldCBUZW5hbnQnO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBQlAuQmFzaWNJdGVtKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBNb2RpZnlPcGVuZWRUYWJDb3VudCB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1Nlc3Npb25dIE1vZGlmeSBPcGVuZWQgVGFiIENvdW50JztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3BlcmF0aW9uOiAnaW5jcmVhc2UnIHwgJ2RlY3JlYXNlJykge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2V0UmVtZW1iZXIge1xyXG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tTZXNzaW9uXSBTZXQgUmVtZW1iZXInO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBib29sZWFuKSB7fVxyXG59XHJcbiJdfQ==