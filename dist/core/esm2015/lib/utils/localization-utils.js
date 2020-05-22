/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/localization-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} localization
 * @return {?}
 */
export function createLocalizer(localization) {
    return (/**
     * @param {?} resourceName
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    (resourceName, key, defaultValue) => {
        if (resourceName === '_')
            return key;
        /** @type {?} */
        const resource = localization.values[resourceName];
        if (!resource)
            return defaultValue;
        return resource[key] || defaultValue;
    });
}
/**
 * @param {?} localization
 * @return {?}
 */
export function createLocalizerWithFallback(localization) {
    /** @type {?} */
    const findLocalization = createLocalizationFinder(localization);
    return (/**
     * @param {?} resourceNames
     * @param {?} keys
     * @param {?} defaultValue
     * @return {?}
     */
    (resourceNames, keys, defaultValue) => {
        const { localized } = findLocalization(resourceNames, keys);
        return localized || defaultValue;
    });
}
/**
 * @param {?} localization
 * @return {?}
 */
export function createLocalizationPipeKeyGenerator(localization) {
    /** @type {?} */
    const findLocalization = createLocalizationFinder(localization);
    return (/**
     * @param {?} resourceNames
     * @param {?} keys
     * @param {?} defaultKey
     * @return {?}
     */
    (resourceNames, keys, defaultKey) => {
        const { resourceName, key } = findLocalization(resourceNames, keys);
        return !resourceName ? defaultKey : resourceName === '_' ? key : `${resourceName}::${key}`;
    });
}
/**
 * @param {?} localization
 * @return {?}
 */
function createLocalizationFinder(localization) {
    /** @type {?} */
    const localize = createLocalizer(localization);
    return (/**
     * @param {?} resourceNames
     * @param {?} keys
     * @return {?}
     */
    (resourceNames, keys) => {
        resourceNames = resourceNames.concat(localization.defaultResourceName).filter(Boolean);
        /** @type {?} */
        const resourceCount = resourceNames.length;
        /** @type {?} */
        const keyCount = keys.length;
        for (let i = 0; i < resourceCount; i++) {
            /** @type {?} */
            const resourceName = resourceNames[i];
            for (let j = 0; j < keyCount; j++) {
                /** @type {?} */
                const key = keys[j];
                /** @type {?} */
                const localized = localize(resourceName, key, null);
                if (localized)
                    return { resourceName, key, localized };
            }
        }
        return { resourceName: undefined, key: undefined, localized: undefined };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2xvY2FsaXphdGlvbi11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsZUFBZSxDQUFDLFlBQW1EO0lBQ2pGOzs7Ozs7SUFBTyxDQUFDLFlBQW9CLEVBQUUsR0FBVyxFQUFFLFlBQW9CLEVBQUUsRUFBRTtRQUNqRSxJQUFJLFlBQVksS0FBSyxHQUFHO1lBQUUsT0FBTyxHQUFHLENBQUM7O2NBRS9CLFFBQVEsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUVsRCxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8sWUFBWSxDQUFDO1FBRW5DLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQztJQUN2QyxDQUFDLEVBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxZQUFtRDs7VUFDdkYsZ0JBQWdCLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDO0lBRS9EOzs7Ozs7SUFBTyxDQUFDLGFBQXVCLEVBQUUsSUFBYyxFQUFFLFlBQW9CLEVBQUUsRUFBRTtjQUNqRSxFQUFFLFNBQVMsRUFBRSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7UUFDM0QsT0FBTyxTQUFTLElBQUksWUFBWSxDQUFDO0lBQ25DLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGtDQUFrQyxDQUNoRCxZQUFtRDs7VUFFN0MsZ0JBQWdCLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDO0lBRS9EOzs7Ozs7SUFBTyxDQUFDLGFBQXVCLEVBQUUsSUFBYyxFQUFFLFVBQWtCLEVBQUUsRUFBRTtjQUMvRCxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUM3RixDQUFDLEVBQUM7QUFDSixDQUFDOzs7OztBQUVELFNBQVMsd0JBQXdCLENBQUMsWUFBbUQ7O1VBQzdFLFFBQVEsR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDO0lBRTlDOzs7OztJQUFPLENBQUMsYUFBdUIsRUFBRSxJQUFjLEVBQUUsRUFBRTtRQUNqRCxhQUFhLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7O2NBRWpGLGFBQWEsR0FBRyxhQUFhLENBQUMsTUFBTTs7Y0FDcEMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBRTVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUNoQyxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUVyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFOztzQkFDM0IsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7O3NCQUNiLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7Z0JBQ25ELElBQUksU0FBUztvQkFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUN4RDtTQUNGO1FBRUQsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDM0UsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL21vZGVscy9hcHBsaWNhdGlvbi1jb25maWd1cmF0aW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhbGl6ZXIobG9jYWxpemF0aW9uOiBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uTG9jYWxpemF0aW9uKSB7XHJcbiAgcmV0dXJuIChyZXNvdXJjZU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAocmVzb3VyY2VOYW1lID09PSAnXycpIHJldHVybiBrZXk7XHJcblxyXG4gICAgY29uc3QgcmVzb3VyY2UgPSBsb2NhbGl6YXRpb24udmFsdWVzW3Jlc291cmNlTmFtZV07XHJcblxyXG4gICAgaWYgKCFyZXNvdXJjZSkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICByZXR1cm4gcmVzb3VyY2Vba2V5XSB8fCBkZWZhdWx0VmFsdWU7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvY2FsaXplcldpdGhGYWxsYmFjayhsb2NhbGl6YXRpb246IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5Mb2NhbGl6YXRpb24pIHtcclxuICBjb25zdCBmaW5kTG9jYWxpemF0aW9uID0gY3JlYXRlTG9jYWxpemF0aW9uRmluZGVyKGxvY2FsaXphdGlvbik7XHJcblxyXG4gIHJldHVybiAocmVzb3VyY2VOYW1lczogc3RyaW5nW10sIGtleXM6IHN0cmluZ1tdLCBkZWZhdWx0VmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgeyBsb2NhbGl6ZWQgfSA9IGZpbmRMb2NhbGl6YXRpb24ocmVzb3VyY2VOYW1lcywga2V5cyk7XHJcbiAgICByZXR1cm4gbG9jYWxpemVkIHx8IGRlZmF1bHRWYWx1ZTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9jYWxpemF0aW9uUGlwZUtleUdlbmVyYXRvcihcclxuICBsb2NhbGl6YXRpb246IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5Mb2NhbGl6YXRpb24sXHJcbikge1xyXG4gIGNvbnN0IGZpbmRMb2NhbGl6YXRpb24gPSBjcmVhdGVMb2NhbGl6YXRpb25GaW5kZXIobG9jYWxpemF0aW9uKTtcclxuXHJcbiAgcmV0dXJuIChyZXNvdXJjZU5hbWVzOiBzdHJpbmdbXSwga2V5czogc3RyaW5nW10sIGRlZmF1bHRLZXk6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgeyByZXNvdXJjZU5hbWUsIGtleSB9ID0gZmluZExvY2FsaXphdGlvbihyZXNvdXJjZU5hbWVzLCBrZXlzKTtcclxuICAgIHJldHVybiAhcmVzb3VyY2VOYW1lID8gZGVmYXVsdEtleSA6IHJlc291cmNlTmFtZSA9PT0gJ18nID8ga2V5IDogYCR7cmVzb3VyY2VOYW1lfTo6JHtrZXl9YDtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMb2NhbGl6YXRpb25GaW5kZXIobG9jYWxpemF0aW9uOiBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uTG9jYWxpemF0aW9uKSB7XHJcbiAgY29uc3QgbG9jYWxpemUgPSBjcmVhdGVMb2NhbGl6ZXIobG9jYWxpemF0aW9uKTtcclxuXHJcbiAgcmV0dXJuIChyZXNvdXJjZU5hbWVzOiBzdHJpbmdbXSwga2V5czogc3RyaW5nW10pID0+IHtcclxuICAgIHJlc291cmNlTmFtZXMgPSByZXNvdXJjZU5hbWVzLmNvbmNhdChsb2NhbGl6YXRpb24uZGVmYXVsdFJlc291cmNlTmFtZSkuZmlsdGVyKEJvb2xlYW4pO1xyXG5cclxuICAgIGNvbnN0IHJlc291cmNlQ291bnQgPSByZXNvdXJjZU5hbWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IGtleUNvdW50ID0ga2V5cy5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNvdXJjZUNvdW50OyBpKyspIHtcclxuICAgICAgY29uc3QgcmVzb3VyY2VOYW1lID0gcmVzb3VyY2VOYW1lc1tpXTtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5Q291bnQ7IGorKykge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbal07XHJcbiAgICAgICAgY29uc3QgbG9jYWxpemVkID0gbG9jYWxpemUocmVzb3VyY2VOYW1lLCBrZXksIG51bGwpO1xyXG4gICAgICAgIGlmIChsb2NhbGl6ZWQpIHJldHVybiB7IHJlc291cmNlTmFtZSwga2V5LCBsb2NhbGl6ZWQgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHJlc291cmNlTmFtZTogdW5kZWZpbmVkLCBrZXk6IHVuZGVmaW5lZCwgbG9jYWxpemVkOiB1bmRlZmluZWQgfTtcclxuICB9O1xyXG59XHJcbiJdfQ==