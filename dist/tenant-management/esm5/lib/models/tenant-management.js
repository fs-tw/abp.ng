/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/tenant-management.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var TenantManagement;
(function (TenantManagement) {
    /**
     * @record
     */
    function State() { }
    TenantManagement.State = State;
    if (false) {
        /** @type {?} */
        State.prototype.result;
        /** @type {?} */
        State.prototype.selectedItem;
    }
    /**
     * @record
     */
    function Item() { }
    TenantManagement.Item = Item;
    if (false) {
        /** @type {?} */
        Item.prototype.id;
        /** @type {?} */
        Item.prototype.name;
    }
    /**
     * @record
     */
    function AddRequest() { }
    TenantManagement.AddRequest = AddRequest;
    if (false) {
        /** @type {?} */
        AddRequest.prototype.adminEmailAddress;
        /** @type {?} */
        AddRequest.prototype.adminPassword;
        /** @type {?} */
        AddRequest.prototype.name;
    }
    /**
     * @record
     */
    function UpdateRequest() { }
    TenantManagement.UpdateRequest = UpdateRequest;
    if (false) {
        /** @type {?} */
        UpdateRequest.prototype.id;
        /** @type {?} */
        UpdateRequest.prototype.name;
    }
    /**
     * @record
     */
    function DefaultConnectionStringRequest() { }
    TenantManagement.DefaultConnectionStringRequest = DefaultConnectionStringRequest;
    if (false) {
        /** @type {?} */
        DefaultConnectionStringRequest.prototype.id;
        /** @type {?} */
        DefaultConnectionStringRequest.prototype.defaultConnectionString;
    }
})(TenantManagement || (TenantManagement = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRlbmFudC1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL21vZGVscy90ZW5hbnQtbWFuYWdlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBVyxnQkFBZ0IsQ0E0QmhDO0FBNUJELFdBQWlCLGdCQUFnQjs7OztJQUMvQixvQkFHQzs7OztRQUZDLHVCQUFpQjs7UUFDakIsNkJBQW1COzs7OztJQUtyQixtQkFHQzs7OztRQUZDLGtCQUFXOztRQUNYLG9CQUFhOzs7OztJQUdmLHlCQUlDOzs7O1FBSEMsdUNBQTBCOztRQUMxQixtQ0FBc0I7O1FBQ3RCLDBCQUFhOzs7OztJQUdmLDRCQUdDOzs7O1FBRkMsMkJBQVc7O1FBQ1gsNkJBQWE7Ozs7O0lBR2YsNkNBR0M7Ozs7UUFGQyw0Q0FBVzs7UUFDWCxpRUFBZ0M7O0FBRXBDLENBQUMsRUE1QmdCLGdCQUFnQixLQUFoQixnQkFBZ0IsUUE0QmhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVGVuYW50TWFuYWdlbWVudCB7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICByZXN1bHQ6IFJlc3BvbnNlO1xyXG4gICAgc2VsZWN0ZWRJdGVtOiBJdGVtO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IHR5cGUgUmVzcG9uc2UgPSBBQlAuUGFnZWRSZXNwb25zZTxJdGVtPjtcclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJdGVtIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIEFkZFJlcXVlc3Qge1xyXG4gICAgYWRtaW5FbWFpbEFkZHJlc3M6IHN0cmluZztcclxuICAgIGFkbWluUGFzc3dvcmQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlUmVxdWVzdCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0Q29ubmVjdGlvblN0cmluZ1JlcXVlc3Qge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGRlZmF1bHRDb25uZWN0aW9uU3RyaW5nOiBzdHJpbmc7XHJcbiAgfVxyXG59XHJcbiJdfQ==