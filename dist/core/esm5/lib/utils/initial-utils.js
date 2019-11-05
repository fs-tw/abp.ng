/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { registerLocaleData } from '@angular/common';
import { Store } from '@ngxs/store';
import { GetAppConfiguration } from '../actions/config.actions';
import differentLocales from '../constants/different-locales';
/**
 * @param {?} injector
 * @return {?}
 */
export function getInitialData(injector) {
    /** @type {?} */
    var fn = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var store = injector.get(Store);
        return store.dispatch(new GetAppConfiguration()).toPromise();
    });
    return fn;
}
/**
 * @param {?} injector
 * @return {?}
 */
export function localeInitializer(injector) {
    /** @type {?} */
    var fn = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var store = injector.get(Store);
        /** @type {?} */
        var lang = store.selectSnapshot((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.SessionState.language; })) || 'en';
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            registerLocale(lang).then((/**
             * @return {?}
             */
            function () { return resolve('resolved'); }), reject);
        }));
    });
    return fn;
}
/**
 * @param {?} locale
 * @return {?}
 */
export function registerLocale(locale) {
    return import(
    /* webpackInclude: /(af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\.js$/ */
    "@angular/common/locales/" + (differentLocales[locale] || locale) + ".js").then((/**
     * @param {?} module
     * @return {?}
     */
    function (module) {
        registerLocaleData(module.default);
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9pbml0aWFsLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sZ0JBQWdCLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBRTlELE1BQU0sVUFBVSxjQUFjLENBQUMsUUFBa0I7O1FBQ3pDLEVBQUU7OztJQUFHOztZQUNILEtBQUssR0FBVSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUV4QyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0QsQ0FBQyxDQUFBO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxRQUFrQjs7UUFDNUMsRUFBRTs7O0lBQUc7O1lBQ0gsS0FBSyxHQUFVLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDOztZQUVsQyxJQUFJLEdBQUcsS0FBSyxDQUFDLGNBQWM7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUEzQixDQUEyQixFQUFDLElBQUksSUFBSTtRQUUvRSxPQUFPLElBQUksT0FBTzs7Ozs7UUFBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJOzs7WUFBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFuQixDQUFtQixHQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsTUFBYztJQUMzQyxPQUFPLE1BQU07SUFDWCw0Y0FBNGM7SUFDNWMsOEJBQTJCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sU0FBSyxDQUNuRSxDQUFDLElBQUk7Ozs7SUFBQyxVQUFBLE1BQU07UUFDWCxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGVEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IEdldEFwcENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25zJztcclxuaW1wb3J0IGRpZmZlcmVudExvY2FsZXMgZnJvbSAnLi4vY29uc3RhbnRzL2RpZmZlcmVudC1sb2NhbGVzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWFsRGF0YShpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlOiBTdG9yZSA9IGluamVjdG9yLmdldChTdG9yZSk7XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKG5ldyBHZXRBcHBDb25maWd1cmF0aW9uKCkpLnRvUHJvbWlzZSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBmbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZUluaXRpYWxpemVyKGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gIGNvbnN0IGZuID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmU6IFN0b3JlID0gaW5qZWN0b3IuZ2V0KFN0b3JlKTtcclxuXHJcbiAgICBjb25zdCBsYW5nID0gc3RvcmUuc2VsZWN0U25hcHNob3Qoc3RhdGUgPT4gc3RhdGUuU2Vzc2lvblN0YXRlLmxhbmd1YWdlKSB8fCAnZW4nO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlZ2lzdGVyTG9jYWxlKGxhbmcpLnRoZW4oKCkgPT4gcmVzb2x2ZSgncmVzb2x2ZWQnKSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBmbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTG9jYWxlKGxvY2FsZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGltcG9ydChcclxuICAgIC8qIHdlYnBhY2tJbmNsdWRlOiAvKGFmfGFtfGFyLVNBfGFzfGF6LUxhdG58YmV8Ymd8Ym4tQkR8Ym4tSU58YnN8Y2F8Y2EtRVMtVkFMRU5DSUF8Y3N8Y3l8ZGF8ZGV8ZGV8ZWx8ZW4tR0J8ZW58ZXN8ZW58ZXMtVVN8ZXMtTVh8ZXR8ZXV8ZmF8Zml8ZW58ZnJ8ZnJ8ZnItQ0F8Z2F8Z2R8Z2x8Z3V8aGF8aGV8aGl8aHJ8aHV8aHl8aWR8aWd8aXN8aXR8aXR8amF8a2F8a2t8a218a258a298a29rfGVufGVufGxifGx0fGx2fGVufG1rfG1sfG1ufG1yfG1zfG10fG5ifG5lfG5sfG5sLUJFfG5ufGVufG9yfHBhfHBhLUFyYWJ8cGx8ZW58cHR8cHQtUFR8ZW58ZW58cm98cnV8cnd8cGEtQXJhYnxzaXxza3xzbHxzcXxzci1DeXJsLUJBfHNyLUN5cmx8c3ItTGF0bnxzdnxzd3x0YXx0ZXx0Z3x0aHx0aXx0a3x0bnx0cnx0dHx1Z3x1a3x1cnx1ei1MYXRufHZpfHdvfHhofHlvfHpoLUhhbnN8emgtSGFudHx6dSlcXC5qcyQvICovXHJcbiAgICBgQGFuZ3VsYXIvY29tbW9uL2xvY2FsZXMvJHtkaWZmZXJlbnRMb2NhbGVzW2xvY2FsZV0gfHwgbG9jYWxlfS5qc2BcclxuICApLnRoZW4obW9kdWxlID0+IHtcclxuICAgIHJlZ2lzdGVyTG9jYWxlRGF0YShtb2R1bGUuZGVmYXVsdCk7XHJcbiAgfSk7XHJcbn1cclxuIl19