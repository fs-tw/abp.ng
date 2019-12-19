/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/module-import-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWltcG9ydC1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9kdWxlLWltcG9ydC1ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLG9CQUFvQixDQUFDLFlBQWlCLEVBQUUsVUFBa0I7SUFDeEUsSUFBSSxZQUFZLEVBQUU7UUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLFVBQVUsc0VBQXNFLENBQUMsQ0FBQztLQUN0RztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlOiBhbnksIG1vZHVsZU5hbWU6IHN0cmluZykge1xyXG4gIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgJHttb2R1bGVOYW1lfSBoYXMgYWxyZWFkeSBiZWVuIGxvYWRlZC4gSW1wb3J0IENvcmUgbW9kdWxlcyBpbiB0aGUgQXBwTW9kdWxlIG9ubHkuYCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==