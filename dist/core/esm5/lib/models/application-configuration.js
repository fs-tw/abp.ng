/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/application-configuration.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var ApplicationConfiguration;
(function (ApplicationConfiguration) {
    /**
     * @record
     */
    function Response() { }
    ApplicationConfiguration.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.localization;
        /** @type {?} */
        Response.prototype.auth;
        /** @type {?} */
        Response.prototype.setting;
        /** @type {?} */
        Response.prototype.currentUser;
        /** @type {?} */
        Response.prototype.features;
    }
    /**
     * @record
     */
    function Localization() { }
    ApplicationConfiguration.Localization = Localization;
    if (false) {
        /** @type {?} */
        Localization.prototype.currentCulture;
        /** @type {?} */
        Localization.prototype.defaultResourceName;
        /** @type {?} */
        Localization.prototype.languages;
        /** @type {?} */
        Localization.prototype.values;
    }
    /**
     * @record
     */
    function LocalizationValue() { }
    ApplicationConfiguration.LocalizationValue = LocalizationValue;
    /**
     * @record
     */
    function Language() { }
    ApplicationConfiguration.Language = Language;
    if (false) {
        /** @type {?} */
        Language.prototype.cultureName;
        /** @type {?} */
        Language.prototype.uiCultureName;
        /** @type {?} */
        Language.prototype.displayName;
        /** @type {?} */
        Language.prototype.flagIcon;
    }
    /**
     * @record
     */
    function CurrentCulture() { }
    ApplicationConfiguration.CurrentCulture = CurrentCulture;
    if (false) {
        /** @type {?} */
        CurrentCulture.prototype.cultureName;
        /** @type {?} */
        CurrentCulture.prototype.dateTimeFormat;
        /** @type {?} */
        CurrentCulture.prototype.displayName;
        /** @type {?} */
        CurrentCulture.prototype.englishName;
        /** @type {?} */
        CurrentCulture.prototype.isRightToLeft;
        /** @type {?} */
        CurrentCulture.prototype.name;
        /** @type {?} */
        CurrentCulture.prototype.nativeName;
        /** @type {?} */
        CurrentCulture.prototype.threeLetterIsoLanguageName;
        /** @type {?} */
        CurrentCulture.prototype.twoLetterIsoLanguageName;
    }
    /**
     * @record
     */
    function DateTimeFormat() { }
    ApplicationConfiguration.DateTimeFormat = DateTimeFormat;
    if (false) {
        /** @type {?} */
        DateTimeFormat.prototype.calendarAlgorithmType;
        /** @type {?} */
        DateTimeFormat.prototype.dateSeparator;
        /** @type {?} */
        DateTimeFormat.prototype.fullDateTimePattern;
        /** @type {?} */
        DateTimeFormat.prototype.longTimePattern;
        /** @type {?} */
        DateTimeFormat.prototype.shortDatePattern;
        /** @type {?} */
        DateTimeFormat.prototype.shortTimePattern;
    }
    /**
     * @record
     */
    function Auth() { }
    ApplicationConfiguration.Auth = Auth;
    if (false) {
        /** @type {?} */
        Auth.prototype.policies;
        /** @type {?} */
        Auth.prototype.grantedPolicies;
    }
    /**
     * @record
     */
    function Policy() { }
    ApplicationConfiguration.Policy = Policy;
    /**
     * @record
     */
    function Value() { }
    ApplicationConfiguration.Value = Value;
    if (false) {
        /** @type {?} */
        Value.prototype.values;
    }
    /**
     * @record
     */
    function CurrentUser() { }
    ApplicationConfiguration.CurrentUser = CurrentUser;
    if (false) {
        /** @type {?} */
        CurrentUser.prototype.isAuthenticated;
        /** @type {?} */
        CurrentUser.prototype.id;
        /** @type {?} */
        CurrentUser.prototype.tenantId;
        /** @type {?} */
        CurrentUser.prototype.userName;
        /** @type {?} */
        CurrentUser.prototype.email;
    }
})(ApplicationConfiguration || (ApplicationConfiguration = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYXBwbGljYXRpb24tY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBVyx3QkFBd0IsQ0FvRXhDO0FBcEVELFdBQWlCLHdCQUF3Qjs7OztJQUN2Qyx1QkFNQzs7OztRQUxDLGdDQUEyQjs7UUFDM0Isd0JBQVc7O1FBQ1gsMkJBQWU7O1FBQ2YsK0JBQXlCOztRQUN6Qiw0QkFBZ0I7Ozs7O0lBR2xCLDJCQUtDOzs7O1FBSkMsc0NBQStCOztRQUMvQiwyQ0FBNEI7O1FBQzVCLGlDQUFzQjs7UUFDdEIsOEJBQTBCOzs7OztJQUc1QixnQ0FFQzs7Ozs7SUFFRCx1QkFLQzs7OztRQUpDLCtCQUFvQjs7UUFDcEIsaUNBQXNCOztRQUN0QiwrQkFBb0I7O1FBQ3BCLDRCQUFpQjs7Ozs7SUFHbkIsNkJBVUM7Ozs7UUFUQyxxQ0FBb0I7O1FBQ3BCLHdDQUErQjs7UUFDL0IscUNBQW9COztRQUNwQixxQ0FBb0I7O1FBQ3BCLHVDQUF1Qjs7UUFDdkIsOEJBQWE7O1FBQ2Isb0NBQW1COztRQUNuQixvREFBbUM7O1FBQ25DLGtEQUFpQzs7Ozs7SUFHbkMsNkJBT0M7Ozs7UUFOQywrQ0FBOEI7O1FBQzlCLHVDQUFzQjs7UUFDdEIsNkNBQTRCOztRQUM1Qix5Q0FBd0I7O1FBQ3hCLDBDQUF5Qjs7UUFDekIsMENBQXlCOzs7OztJQUczQixtQkFHQzs7OztRQUZDLHdCQUFpQjs7UUFDakIsK0JBQXdCOzs7OztJQUcxQixxQkFFQzs7Ozs7SUFFRCxvQkFFQzs7OztRQURDLHVCQUErQjs7Ozs7SUFHakMsMEJBTUM7Ozs7UUFMQyxzQ0FBeUI7O1FBQ3pCLHlCQUFXOztRQUNYLCtCQUFpQjs7UUFDakIsK0JBQWlCOztRQUNqQiw0QkFBYzs7QUFFbEIsQ0FBQyxFQXBFZ0Isd0JBQXdCLEtBQXhCLHdCQUF3QixRQW9FeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAgfSBmcm9tICcuL2NvbW1vbic7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZSB7XHJcbiAgICBsb2NhbGl6YXRpb246IExvY2FsaXphdGlvbjtcclxuICAgIGF1dGg6IEF1dGg7XHJcbiAgICBzZXR0aW5nOiBWYWx1ZTtcclxuICAgIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcjtcclxuICAgIGZlYXR1cmVzOiBWYWx1ZTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgTG9jYWxpemF0aW9uIHtcclxuICAgIGN1cnJlbnRDdWx0dXJlOiBDdXJyZW50Q3VsdHVyZTtcclxuICAgIGRlZmF1bHRSZXNvdXJjZU5hbWU6IHN0cmluZztcclxuICAgIGxhbmd1YWdlczogTGFuZ3VhZ2VbXTtcclxuICAgIHZhbHVlczogTG9jYWxpemF0aW9uVmFsdWU7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIExvY2FsaXphdGlvblZhbHVlIHtcclxuICAgIFtrZXk6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlIHtcclxuICAgIGN1bHR1cmVOYW1lOiBzdHJpbmc7XHJcbiAgICB1aUN1bHR1cmVOYW1lOiBzdHJpbmc7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgZmxhZ0ljb246IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ3VycmVudEN1bHR1cmUge1xyXG4gICAgY3VsdHVyZU5hbWU6IHN0cmluZztcclxuICAgIGRhdGVUaW1lRm9ybWF0OiBEYXRlVGltZUZvcm1hdDtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICBlbmdsaXNoTmFtZTogc3RyaW5nO1xyXG4gICAgaXNSaWdodFRvTGVmdDogYm9vbGVhbjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG5hdGl2ZU5hbWU6IHN0cmluZztcclxuICAgIHRocmVlTGV0dGVySXNvTGFuZ3VhZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICB0d29MZXR0ZXJJc29MYW5ndWFnZU5hbWU6IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgRGF0ZVRpbWVGb3JtYXQge1xyXG4gICAgY2FsZW5kYXJBbGdvcml0aG1UeXBlOiBzdHJpbmc7XHJcbiAgICBkYXRlU2VwYXJhdG9yOiBzdHJpbmc7XHJcbiAgICBmdWxsRGF0ZVRpbWVQYXR0ZXJuOiBzdHJpbmc7XHJcbiAgICBsb25nVGltZVBhdHRlcm46IHN0cmluZztcclxuICAgIHNob3J0RGF0ZVBhdHRlcm46IHN0cmluZztcclxuICAgIHNob3J0VGltZVBhdHRlcm46IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXV0aCB7XHJcbiAgICBwb2xpY2llczogUG9saWN5O1xyXG4gICAgZ3JhbnRlZFBvbGljaWVzOiBQb2xpY3k7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIFBvbGljeSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBWYWx1ZSB7XHJcbiAgICB2YWx1ZXM6IEFCUC5EaWN0aW9uYXJ5PHN0cmluZz47XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIEN1cnJlbnRVc2VyIHtcclxuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0ZW5hbnRJZDogc3RyaW5nO1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgfVxyXG59XHJcbiJdfQ==