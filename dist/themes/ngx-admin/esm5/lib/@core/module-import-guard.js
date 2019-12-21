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
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWltcG9ydC1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9kdWxlLWltcG9ydC1ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLG9CQUFvQixDQUFDLFlBQWlCLEVBQUUsVUFBa0I7SUFDeEUsSUFBSSxZQUFZLEVBQUU7UUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBSSxVQUFVLHlFQUFzRSxDQUFDLENBQUM7S0FDdEc7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZTogYW55LCBtb2R1bGVOYW1lOiBzdHJpbmcpIHtcclxuICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bW9kdWxlTmFtZX0gaGFzIGFscmVhZHkgYmVlbiBsb2FkZWQuIEltcG9ydCBDb3JlIG1vZHVsZXMgaW4gdGhlIEFwcE1vZHVsZSBvbmx5LmApO1xyXG4gIH1cclxufVxyXG4iXX0=