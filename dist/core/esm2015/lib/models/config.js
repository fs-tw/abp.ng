/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var Config;
(function (Config) {
    /**
     * @record
     */
    function Environment() { }
    Config.Environment = Environment;
    if (false) {
        /** @type {?} */
        Environment.prototype.application;
        /** @type {?} */
        Environment.prototype.production;
        /** @type {?|undefined} */
        Environment.prototype.hmr;
        /** @type {?} */
        Environment.prototype.oAuthConfig;
        /** @type {?} */
        Environment.prototype.apis;
        /** @type {?|undefined} */
        Environment.prototype.localization;
    }
    /**
     * @record
     */
    function Application() { }
    Config.Application = Application;
    if (false) {
        /** @type {?} */
        Application.prototype.name;
        /** @type {?|undefined} */
        Application.prototype.logoUrl;
    }
    /**
     * @record
     */
    function ApiConfig() { }
    Config.ApiConfig = ApiConfig;
    if (false) {
        /** @type {?} */
        ApiConfig.prototype.url;
        /* Skipping unhandled member: [key: string]: string;*/
    }
    /**
     * @record
     */
    function Apis() { }
    Config.Apis = Apis;
    if (false) {
        /** @type {?} */
        Apis.prototype.default;
        /* Skipping unhandled member: [key: string]: ApiConfig;*/
    }
    /**
     * @record
     */
    function Requirements() { }
    Config.Requirements = Requirements;
    if (false) {
        /** @type {?} */
        Requirements.prototype.layouts;
    }
    /**
     * @record
     */
    function LocalizationWithDefault() { }
    Config.LocalizationWithDefault = LocalizationWithDefault;
    if (false) {
        /** @type {?} */
        LocalizationWithDefault.prototype.key;
        /** @type {?} */
        LocalizationWithDefault.prototype.defaultValue;
    }
})(Config || (Config = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxNQUFNLEtBQVcsTUFBTSxDQXlDdEI7QUF6Q0QsV0FBaUIsTUFBTTs7OztJQU9yQiwwQkFPQzs7OztRQU5DLGtDQUF5Qjs7UUFDekIsaUNBQW9COztRQUNwQiwwQkFBYzs7UUFDZCxrQ0FBd0I7O1FBQ3hCLDJCQUFXOztRQUNYLG1DQUFnRDs7Ozs7SUFHbEQsMEJBR0M7Ozs7UUFGQywyQkFBYTs7UUFDYiw4QkFBaUI7Ozs7O0lBR25CLHdCQUdDOzs7O1FBREMsd0JBQVk7Ozs7OztJQUdkLG1CQUdDOzs7O1FBREMsdUJBQW1COzs7Ozs7SUFHckIsMkJBRUM7Ozs7UUFEQywrQkFBcUI7Ozs7O0lBR3ZCLHNDQUdDOzs7O1FBRkMsc0NBQVk7O1FBQ1osK0NBQXFCOztBQUl6QixDQUFDLEVBekNnQixNQUFNLEtBQU4sTUFBTSxRQXlDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF1dGhDb25maWcgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWd1cmF0aW9uIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi9jb21tb24nO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBDb25maWcge1xyXG4gIGV4cG9ydCB0eXBlIFN0YXRlID0gQXBwbGljYXRpb25Db25maWd1cmF0aW9uLlJlc3BvbnNlICZcclxuICAgIEFCUC5Sb290ICYgeyBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQgfSAmIHtcclxuICAgICAgcm91dGVzOiBBQlAuRnVsbFJvdXRlW107XHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXM6IEFCUC5GdWxsUm91dGVbXTtcclxuICAgIH07XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgRW52aXJvbm1lbnQge1xyXG4gICAgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uO1xyXG4gICAgcHJvZHVjdGlvbjogYm9vbGVhbjtcclxuICAgIGhtcj86IGJvb2xlYW47XHJcbiAgICBvQXV0aENvbmZpZzogQXV0aENvbmZpZztcclxuICAgIGFwaXM6IEFwaXM7XHJcbiAgICBsb2NhbGl6YXRpb24/OiB7IGRlZmF1bHRSZXNvdXJjZU5hbWU/OiBzdHJpbmcgfTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb24ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbG9nb1VybD86IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpQ29uZmlnIHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlzIHtcclxuICAgIFtrZXk6IHN0cmluZ106IEFwaUNvbmZpZztcclxuICAgIGRlZmF1bHQ6IEFwaUNvbmZpZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVxdWlyZW1lbnRzIHtcclxuICAgIGxheW91dHM6IFR5cGU8YW55PltdO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBMb2NhbGl6YXRpb25XaXRoRGVmYXVsdCB7XHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IHR5cGUgTG9jYWxpemF0aW9uUGFyYW0gPSBzdHJpbmcgfCBMb2NhbGl6YXRpb25XaXRoRGVmYXVsdDtcclxufVxyXG4iXX0=