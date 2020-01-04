/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/permission-management.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var PermissionManagement;
(function (PermissionManagement) {
    /**
     * @record
     */
    function State() { }
    PermissionManagement.State = State;
    if (false) {
        /** @type {?} */
        State.prototype.permissionRes;
    }
    /**
     * @record
     */
    function Response() { }
    PermissionManagement.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.entityDisplayName;
        /** @type {?} */
        Response.prototype.groups;
    }
    /**
     * @record
     */
    function Group() { }
    PermissionManagement.Group = Group;
    if (false) {
        /** @type {?} */
        Group.prototype.name;
        /** @type {?} */
        Group.prototype.displayName;
        /** @type {?} */
        Group.prototype.permissions;
    }
    /**
     * @record
     */
    function MinimumPermission() { }
    PermissionManagement.MinimumPermission = MinimumPermission;
    if (false) {
        /** @type {?} */
        MinimumPermission.prototype.name;
        /** @type {?} */
        MinimumPermission.prototype.isGranted;
    }
    /**
     * @record
     */
    function Permission() { }
    PermissionManagement.Permission = Permission;
    if (false) {
        /** @type {?} */
        Permission.prototype.displayName;
        /** @type {?} */
        Permission.prototype.parentName;
        /** @type {?} */
        Permission.prototype.allowedProviders;
        /** @type {?} */
        Permission.prototype.grantedProviders;
    }
    /**
     * @record
     */
    function GrantedProvider() { }
    PermissionManagement.GrantedProvider = GrantedProvider;
    if (false) {
        /** @type {?} */
        GrantedProvider.prototype.providerName;
        /** @type {?} */
        GrantedProvider.prototype.providerKey;
    }
    /**
     * @record
     */
    function UpdateRequest() { }
    PermissionManagement.UpdateRequest = UpdateRequest;
    if (false) {
        /** @type {?} */
        UpdateRequest.prototype.permissions;
    }
    /**
     * @record
     */
    function PermissionManagementComponentInputs() { }
    PermissionManagement.PermissionManagementComponentInputs = PermissionManagementComponentInputs;
    if (false) {
        /** @type {?} */
        PermissionManagementComponentInputs.prototype.visible;
        /** @type {?} */
        PermissionManagementComponentInputs.prototype.providerName;
        /** @type {?} */
        PermissionManagementComponentInputs.prototype.providerKey;
        /** @type {?} */
        PermissionManagementComponentInputs.prototype.hideBadges;
    }
    /**
     * @record
     */
    function PermissionManagementComponentOutputs() { }
    PermissionManagement.PermissionManagementComponentOutputs = PermissionManagementComponentOutputs;
    if (false) {
        /** @type {?} */
        PermissionManagementComponentOutputs.prototype.visibleChange;
    }
})(PermissionManagement || (PermissionManagement = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5wZXJtaXNzaW9uLW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3Blcm1pc3Npb24tbWFuYWdlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBVyxvQkFBb0IsQ0ErQ3BDO0FBL0NELFdBQWlCLG9CQUFvQjs7OztJQUNuQyxvQkFFQzs7OztRQURDLDhCQUF3Qjs7Ozs7SUFHMUIsdUJBR0M7Ozs7UUFGQyxxQ0FBMEI7O1FBQzFCLDBCQUFnQjs7Ozs7SUFHbEIsb0JBSUM7Ozs7UUFIQyxxQkFBYTs7UUFDYiw0QkFBb0I7O1FBQ3BCLDRCQUEwQjs7Ozs7SUFHNUIsZ0NBR0M7Ozs7UUFGQyxpQ0FBYTs7UUFDYixzQ0FBbUI7Ozs7O0lBR3JCLHlCQUtDOzs7O1FBSkMsaUNBQW9COztRQUNwQixnQ0FBbUI7O1FBQ25CLHNDQUEyQjs7UUFDM0Isc0NBQW9DOzs7OztJQUd0Qyw4QkFHQzs7OztRQUZDLHVDQUFxQjs7UUFDckIsc0NBQW9COzs7OztJQUd0Qiw0QkFFQzs7OztRQURDLG9DQUFpQzs7Ozs7SUFHbkMsa0RBS0M7Ozs7UUFKQyxzREFBaUI7O1FBQ2pCLDJEQUE4Qjs7UUFDOUIsMERBQTZCOztRQUM3Qix5REFBNkI7Ozs7O0lBRy9CLG1EQUVDOzs7O1FBREMsNkRBQThDOztBQUVsRCxDQUFDLEVBL0NnQixvQkFBb0IsS0FBcEIsb0JBQW9CLFFBK0NwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBQZXJtaXNzaW9uTWFuYWdlbWVudCB7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBwZXJtaXNzaW9uUmVzOiBSZXNwb25zZTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2Uge1xyXG4gICAgZW50aXR5RGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgIGdyb3VwczogR3JvdXBbXTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uW107XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIE1pbmltdW1QZXJtaXNzaW9uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzR3JhbnRlZDogYm9vbGVhbjtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbiBleHRlbmRzIE1pbmltdW1QZXJtaXNzaW9uIHtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICBwYXJlbnROYW1lOiBzdHJpbmc7XHJcbiAgICBhbGxvd2VkUHJvdmlkZXJzOiBzdHJpbmdbXTtcclxuICAgIGdyYW50ZWRQcm92aWRlcnM6IEdyYW50ZWRQcm92aWRlcltdO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBHcmFudGVkUHJvdmlkZXIge1xyXG4gICAgcHJvdmlkZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwcm92aWRlcktleTogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBVcGRhdGVSZXF1ZXN0IHtcclxuICAgIHBlcm1pc3Npb25zOiBNaW5pbXVtUGVybWlzc2lvbltdO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uTWFuYWdlbWVudENvbXBvbmVudElucHV0cyB7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgcHJvdmlkZXJOYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBwcm92aWRlcktleTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgaGlkZUJhZGdlczogYm9vbGVhbjtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRPdXRwdXRzIHtcclxuICAgIHJlYWRvbmx5IHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICB9XHJcbn1cclxuIl19