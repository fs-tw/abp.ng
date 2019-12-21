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
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWltcG9ydC1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL21vZHVsZS1pbXBvcnQtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLFVBQVUsb0JBQW9CLENBQUMsWUFBaUIsRUFBRSxVQUFrQjtJQUN4RSxJQUFJLFlBQVksRUFBRTtRQUNoQixNQUFNLElBQUksS0FBSyxDQUFJLFVBQVUseUVBQXNFLENBQUMsQ0FBQztLQUN0RztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvc3R5bGVndWlkZSNzdHlsZS0wNC0xMlxyXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlOiBhbnksIG1vZHVsZU5hbWU6IHN0cmluZykge1xyXG4gIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgJHttb2R1bGVOYW1lfSBoYXMgYWxyZWFkeSBiZWVuIGxvYWRlZC4gSW1wb3J0IENvcmUgbW9kdWxlcyBpbiB0aGUgQXBwTW9kdWxlIG9ubHkuYCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==