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
        /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxNQUFNLEtBQVcsTUFBTSxDQXlDdEI7QUF6Q0QsV0FBaUIsTUFBTTs7OztJQU9yQiwwQkFPQzs7OztRQU5DLGtDQUF5Qjs7UUFDekIsaUNBQW9COztRQUNwQiwwQkFBYzs7UUFDZCxrQ0FBd0I7O1FBQ3hCLDJCQUFXOztRQUNYLG1DQUE4Qzs7Ozs7SUFHaEQsMEJBR0M7Ozs7UUFGQywyQkFBYTs7UUFDYiw4QkFBaUI7Ozs7O0lBR25CLHdCQUdDOzs7O1FBREMsd0JBQVk7Ozs7OztJQUdkLG1CQUdDOzs7O1FBREMsdUJBQW1COzs7Ozs7SUFHckIsMkJBRUM7Ozs7UUFEQywrQkFBcUI7Ozs7O0lBR3ZCLHNDQUdDOzs7O1FBRkMsc0NBQVk7O1FBQ1osK0NBQXFCOztBQUl6QixDQUFDLEVBekNnQixNQUFNLEtBQU4sTUFBTSxRQXlDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF1dGhDb25maWcgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWd1cmF0aW9uIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi9jb21tb24nO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBDb25maWcge1xyXG4gIGV4cG9ydCB0eXBlIFN0YXRlID0gQXBwbGljYXRpb25Db25maWd1cmF0aW9uLlJlc3BvbnNlICZcclxuICAgIEFCUC5Sb290ICYgeyBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQgfSAmIHtcclxuICAgICAgcm91dGVzOiBBQlAuRnVsbFJvdXRlW107XHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXM6IEFCUC5GdWxsUm91dGVbXTtcclxuICAgIH07XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgRW52aXJvbm1lbnQge1xyXG4gICAgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uO1xyXG4gICAgcHJvZHVjdGlvbjogYm9vbGVhbjtcclxuICAgIGhtcj86IGJvb2xlYW47XHJcbiAgICBvQXV0aENvbmZpZzogQXV0aENvbmZpZztcclxuICAgIGFwaXM6IEFwaXM7XHJcbiAgICBsb2NhbGl6YXRpb246IHsgZGVmYXVsdFJlc291cmNlTmFtZTogc3RyaW5nIH07XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGxvZ29Vcmw/OiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIEFwaUNvbmZpZyB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpcyB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBBcGlDb25maWc7XHJcbiAgICBkZWZhdWx0OiBBcGlDb25maWc7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIFJlcXVpcmVtZW50cyB7XHJcbiAgICBsYXlvdXRzOiBUeXBlPGFueT5bXTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgTG9jYWxpemF0aW9uV2l0aERlZmF1bHQge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBkZWZhdWx0VmFsdWU6IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCB0eXBlIExvY2FsaXphdGlvblBhcmFtID0gc3RyaW5nIHwgTG9jYWxpemF0aW9uV2l0aERlZmF1bHQ7XHJcbn1cclxuIl19