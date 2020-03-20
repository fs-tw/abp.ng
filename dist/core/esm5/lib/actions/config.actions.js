/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/config.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PatchRouteByName = /** @class */ (function () {
    function PatchRouteByName(name, newValue) {
        this.name = name;
        this.newValue = newValue;
    }
    PatchRouteByName.type = '[Config] Patch Route By Name';
    return PatchRouteByName;
}());
export { PatchRouteByName };
if (false) {
    /** @type {?} */
    PatchRouteByName.type;
    /** @type {?} */
    PatchRouteByName.prototype.name;
    /** @type {?} */
    PatchRouteByName.prototype.newValue;
}
var GetAppConfiguration = /** @class */ (function () {
    function GetAppConfiguration() {
    }
    GetAppConfiguration.type = '[Config] Get App Configuration';
    return GetAppConfiguration;
}());
export { GetAppConfiguration };
if (false) {
    /** @type {?} */
    GetAppConfiguration.type;
}
/**
 * @see usage: https://github.com/abpframework/abp/pull/2425#issue-355018812
 */
var AddRoute = /** @class */ (function () {
    function AddRoute(payload) {
        this.payload = payload;
    }
    AddRoute.type = '[Config] Add Route';
    return AddRoute;
}());
export { AddRoute };
if (false) {
    /** @type {?} */
    AddRoute.type;
    /** @type {?} */
    AddRoute.prototype.payload;
}
var SetEnvironment = /** @class */ (function () {
    function SetEnvironment(environment) {
        this.environment = environment;
    }
    SetEnvironment.type = '[Config] Set Environment';
    return SetEnvironment;
}());
export { SetEnvironment };
if (false) {
    /** @type {?} */
    SetEnvironment.type;
    /** @type {?} */
    SetEnvironment.prototype.environment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9jb25maWcuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBO0lBRUUsMEJBQW1CLElBQVksRUFBUyxRQUE0QjtRQUFqRCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFBRyxDQUFDO0lBRHhELHFCQUFJLEdBQUcsOEJBQThCLENBQUM7SUFFeEQsdUJBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxnQkFBZ0I7OztJQUMzQixzQkFBc0Q7O0lBQzFDLGdDQUFtQjs7SUFBRSxvQ0FBbUM7O0FBR3RFO0lBQUE7SUFFQSxDQUFDO0lBRGlCLHdCQUFJLEdBQUcsZ0NBQWdDLENBQUM7SUFDMUQsMEJBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSxtQkFBbUI7OztJQUM5Qix5QkFBd0Q7Ozs7O0FBTTFEO0lBRUUsa0JBQW1CLE9BQW9DO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO0lBQUcsQ0FBQztJQUQzQyxhQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFFOUMsZUFBQztDQUFBLEFBSEQsSUFHQztTQUhZLFFBQVE7OztJQUNuQixjQUE0Qzs7SUFDaEMsMkJBQTJDOztBQUd6RDtJQUVFLHdCQUFtQixXQUErQjtRQUEvQixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7SUFBRyxDQUFDO0lBRHRDLG1CQUFJLEdBQUcsMEJBQTBCLENBQUM7SUFFcEQscUJBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxjQUFjOzs7SUFDekIsb0JBQWtEOztJQUN0QyxxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0Y2hSb3V0ZUJ5TmFtZSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW0NvbmZpZ10gUGF0Y2ggUm91dGUgQnkgTmFtZSc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIG5ld1ZhbHVlOiBQYXJ0aWFsPEFCUC5Sb3V0ZT4pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRBcHBDb25maWd1cmF0aW9uIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbQ29uZmlnXSBHZXQgQXBwIENvbmZpZ3VyYXRpb24nO1xyXG59XHJcblxyXG4vKipcclxuICogQHNlZSB1c2FnZTogaHR0cHM6Ly9naXRodWIuY29tL2FicGZyYW1ld29yay9hYnAvcHVsbC8yNDI1I2lzc3VlLTM1NTAxODgxMlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFkZFJvdXRlIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbQ29uZmlnXSBBZGQgUm91dGUnO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBPbWl0PEFCUC5Sb3V0ZSwgJ2NoaWxkcmVuJz4pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXRFbnZpcm9ubWVudCB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW0NvbmZpZ10gU2V0IEVudmlyb25tZW50JztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZW52aXJvbm1lbnQ6IENvbmZpZy5FbnZpcm9ubWVudCkge31cclxufVxyXG4iXX0=