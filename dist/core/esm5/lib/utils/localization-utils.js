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
    function (resourceName, key, defaultValue) {
        if (resourceName === '_')
            return key;
        /** @type {?} */
        var resource = localization.values[resourceName];
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
    var findLocalization = createLocalizationFinder(localization);
    return (/**
     * @param {?} resourceNames
     * @param {?} keys
     * @param {?} defaultValue
     * @return {?}
     */
    function (resourceNames, keys, defaultValue) {
        var localized = findLocalization(resourceNames, keys).localized;
        return localized || defaultValue;
    });
}
/**
 * @param {?} localization
 * @return {?}
 */
export function createLocalizationPipeKeyGenerator(localization) {
    /** @type {?} */
    var findLocalization = createLocalizationFinder(localization);
    return (/**
     * @param {?} resourceNames
     * @param {?} keys
     * @param {?} defaultKey
     * @return {?}
     */
    function (resourceNames, keys, defaultKey) {
        var _a = findLocalization(resourceNames, keys), resourceName = _a.resourceName, key = _a.key;
        return !resourceName ? defaultKey : resourceName === '_' ? key : resourceName + "::" + key;
    });
}
/**
 * @param {?} localization
 * @return {?}
 */
function createLocalizationFinder(localization) {
    /** @type {?} */
    var localize = createLocalizer(localization);
    return (/**
     * @param {?} resourceNames
     * @param {?} keys
     * @return {?}
     */
    function (resourceNames, keys) {
        resourceNames = resourceNames.concat(localization.defaultResourceName).filter(Boolean);
        /** @type {?} */
        var resourceCount = resourceNames.length;
        /** @type {?} */
        var keyCount = keys.length;
        for (var i = 0; i < resourceCount; i++) {
            /** @type {?} */
            var resourceName = resourceNames[i];
            for (var j = 0; j < keyCount; j++) {
                /** @type {?} */
                var key = keys[j];
                /** @type {?} */
                var localized = localize(resourceName, key, null);
                if (localized)
                    return { resourceName: resourceName, key: key, localized: localized };
            }
        }
        return { resourceName: undefined, key: undefined, localized: undefined };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2xvY2FsaXphdGlvbi11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsZUFBZSxDQUFDLFlBQW1EO0lBQ2pGOzs7Ozs7SUFBTyxVQUFDLFlBQW9CLEVBQUUsR0FBVyxFQUFFLFlBQW9CO1FBQzdELElBQUksWUFBWSxLQUFLLEdBQUc7WUFBRSxPQUFPLEdBQUcsQ0FBQzs7WUFFL0IsUUFBUSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBRWxELElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTyxZQUFZLENBQUM7UUFFbkMsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxDQUFDO0lBQ3ZDLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLDJCQUEyQixDQUFDLFlBQW1EOztRQUN2RixnQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUM7SUFFL0Q7Ozs7OztJQUFPLFVBQUMsYUFBdUIsRUFBRSxJQUFjLEVBQUUsWUFBb0I7UUFDM0QsSUFBQSwyREFBUztRQUNqQixPQUFPLFNBQVMsSUFBSSxZQUFZLENBQUM7SUFDbkMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsa0NBQWtDLENBQ2hELFlBQW1EOztRQUU3QyxnQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUM7SUFFL0Q7Ozs7OztJQUFPLFVBQUMsYUFBdUIsRUFBRSxJQUFjLEVBQUUsVUFBa0I7UUFDM0QsSUFBQSwwQ0FBNkQsRUFBM0QsOEJBQVksRUFBRSxZQUE2QztRQUNuRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksWUFBWSxVQUFLLEdBQUssQ0FBQztJQUM3RixDQUFDLEVBQUM7QUFDSixDQUFDOzs7OztBQUVELFNBQVMsd0JBQXdCLENBQUMsWUFBbUQ7O1FBQzdFLFFBQVEsR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDO0lBRTlDOzs7OztJQUFPLFVBQUMsYUFBdUIsRUFBRSxJQUFjO1FBQzdDLGFBQWEsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFFakYsYUFBYSxHQUFHLGFBQWEsQ0FBQyxNQUFNOztZQUNwQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFFNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ2hDLFlBQVksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBRXJDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUMzQixHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs7b0JBQ2IsU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFDbkQsSUFBSSxTQUFTO29CQUFFLE9BQU8sRUFBRSxZQUFZLGNBQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDO2FBQ3hEO1NBQ0Y7UUFFRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUMzRSxDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2FwcGxpY2F0aW9uLWNvbmZpZ3VyYXRpb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvY2FsaXplcihsb2NhbGl6YXRpb246IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5Mb2NhbGl6YXRpb24pIHtcclxuICByZXR1cm4gKHJlc291cmNlTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChyZXNvdXJjZU5hbWUgPT09ICdfJykgcmV0dXJuIGtleTtcclxuXHJcbiAgICBjb25zdCByZXNvdXJjZSA9IGxvY2FsaXphdGlvbi52YWx1ZXNbcmVzb3VyY2VOYW1lXTtcclxuXHJcbiAgICBpZiAoIXJlc291cmNlKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cclxuICAgIHJldHVybiByZXNvdXJjZVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9jYWxpemVyV2l0aEZhbGxiYWNrKGxvY2FsaXphdGlvbjogQXBwbGljYXRpb25Db25maWd1cmF0aW9uLkxvY2FsaXphdGlvbikge1xyXG4gIGNvbnN0IGZpbmRMb2NhbGl6YXRpb24gPSBjcmVhdGVMb2NhbGl6YXRpb25GaW5kZXIobG9jYWxpemF0aW9uKTtcclxuXHJcbiAgcmV0dXJuIChyZXNvdXJjZU5hbWVzOiBzdHJpbmdbXSwga2V5czogc3RyaW5nW10sIGRlZmF1bHRWYWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB7IGxvY2FsaXplZCB9ID0gZmluZExvY2FsaXphdGlvbihyZXNvdXJjZU5hbWVzLCBrZXlzKTtcclxuICAgIHJldHVybiBsb2NhbGl6ZWQgfHwgZGVmYXVsdFZhbHVlO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhbGl6YXRpb25QaXBlS2V5R2VuZXJhdG9yKFxyXG4gIGxvY2FsaXphdGlvbjogQXBwbGljYXRpb25Db25maWd1cmF0aW9uLkxvY2FsaXphdGlvbixcclxuKSB7XHJcbiAgY29uc3QgZmluZExvY2FsaXphdGlvbiA9IGNyZWF0ZUxvY2FsaXphdGlvbkZpbmRlcihsb2NhbGl6YXRpb24pO1xyXG5cclxuICByZXR1cm4gKHJlc291cmNlTmFtZXM6IHN0cmluZ1tdLCBrZXlzOiBzdHJpbmdbXSwgZGVmYXVsdEtleTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB7IHJlc291cmNlTmFtZSwga2V5IH0gPSBmaW5kTG9jYWxpemF0aW9uKHJlc291cmNlTmFtZXMsIGtleXMpO1xyXG4gICAgcmV0dXJuICFyZXNvdXJjZU5hbWUgPyBkZWZhdWx0S2V5IDogcmVzb3VyY2VOYW1lID09PSAnXycgPyBrZXkgOiBgJHtyZXNvdXJjZU5hbWV9Ojoke2tleX1gO1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvY2FsaXphdGlvbkZpbmRlcihsb2NhbGl6YXRpb246IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5Mb2NhbGl6YXRpb24pIHtcclxuICBjb25zdCBsb2NhbGl6ZSA9IGNyZWF0ZUxvY2FsaXplcihsb2NhbGl6YXRpb24pO1xyXG5cclxuICByZXR1cm4gKHJlc291cmNlTmFtZXM6IHN0cmluZ1tdLCBrZXlzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgcmVzb3VyY2VOYW1lcyA9IHJlc291cmNlTmFtZXMuY29uY2F0KGxvY2FsaXphdGlvbi5kZWZhdWx0UmVzb3VyY2VOYW1lKS5maWx0ZXIoQm9vbGVhbik7XHJcblxyXG4gICAgY29uc3QgcmVzb3VyY2VDb3VudCA9IHJlc291cmNlTmFtZXMubGVuZ3RoO1xyXG4gICAgY29uc3Qga2V5Q291bnQgPSBrZXlzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc291cmNlQ291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCByZXNvdXJjZU5hbWUgPSByZXNvdXJjZU5hbWVzW2ldO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlDb3VudDsgaisrKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tqXTtcclxuICAgICAgICBjb25zdCBsb2NhbGl6ZWQgPSBsb2NhbGl6ZShyZXNvdXJjZU5hbWUsIGtleSwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGxvY2FsaXplZCkgcmV0dXJuIHsgcmVzb3VyY2VOYW1lLCBrZXksIGxvY2FsaXplZCB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcmVzb3VyY2VOYW1lOiB1bmRlZmluZWQsIGtleTogdW5kZWZpbmVkLCBsb2NhbGl6ZWQ6IHVuZGVmaW5lZCB9O1xyXG4gIH07XHJcbn1cclxuIl19