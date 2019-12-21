/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/module-import-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// https://angular.io/guide/styleguide#style-04-12
/**
 * @param {?} parentModule
 * @param {?} moduleName
 * @return {?}
 */
export function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWltcG9ydC1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL21vZHVsZS1pbXBvcnQtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLFVBQVUsb0JBQW9CLENBQUMsWUFBaUIsRUFBRSxVQUFrQjtJQUN4RSxJQUFJLFlBQVksRUFBRTtRQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsVUFBVSxzRUFBc0UsQ0FBQyxDQUFDO0tBQ3RHO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9zdHlsZWd1aWRlI3N0eWxlLTA0LTEyXHJcbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGU6IGFueSwgbW9kdWxlTmFtZTogc3RyaW5nKSB7XHJcbiAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGAke21vZHVsZU5hbWV9IGhhcyBhbHJlYWR5IGJlZW4gbG9hZGVkLiBJbXBvcnQgQ29yZSBtb2R1bGVzIGluIHRoZSBBcHBNb2R1bGUgb25seS5gKTtcclxuICB9XHJcbn1cclxuIl19