/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/initial-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { registerLocaleData } from '@angular/common';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { tap } from 'rxjs/operators';
import { GetAppConfiguration } from '../actions/config.actions';
import differentLocales from '../constants/different-locales';
import { ConfigState } from '../states/config.state';
import { CORE_OPTIONS } from '../tokens/options.token';
/**
 * @param {?} injector
 * @return {?}
 */
export function getInitialData(injector) {
    /** @type {?} */
    const fn = (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const store = injector.get(Store);
        const { skipGetAppConfiguration } = (/** @type {?} */ (injector.get(CORE_OPTIONS)));
        if (skipGetAppConfiguration)
            return;
        return store
            .dispatch(new GetAppConfiguration())
            .pipe(tap((/**
         * @param {?} res
         * @return {?}
         */
        res => checkAccessToken(store, injector))))
            .toPromise();
    });
    return fn;
}
/**
 * @param {?} store
 * @param {?} injector
 * @return {?}
 */
function checkAccessToken(store, injector) {
    /** @type {?} */
    const oAuth = injector.get(OAuthService);
    if (oAuth.hasValidAccessToken() && !store.selectSnapshot(ConfigState.getDeep('currentUser.id'))) {
        oAuth.logOut();
    }
}
/**
 * @param {?} injector
 * @return {?}
 */
export function localeInitializer(injector) {
    /** @type {?} */
    const fn = (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const store = injector.get(Store);
        /** @type {?} */
        const lang = store.selectSnapshot((/**
         * @param {?} state
         * @return {?}
         */
        state => state.SessionState.language)) || 'en';
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            registerLocale(lang).then((/**
             * @return {?}
             */
            () => resolve('resolved')), reject);
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
    `@angular/common/locales/${differentLocales[locale] || locale}.js`).then((/**
     * @param {?} module
     * @return {?}
     */
    module => {
        registerLocaleData(module.default);
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9pbml0aWFsLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFckQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sZ0JBQWdCLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFFdkQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFrQjs7VUFDekMsRUFBRTs7O0lBQUcsR0FBRyxFQUFFOztjQUNSLEtBQUssR0FBVSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztjQUNsQyxFQUFFLHVCQUF1QixFQUFFLEdBQUcsbUJBQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBWTtRQUUxRSxJQUFJLHVCQUF1QjtZQUFFLE9BQU87UUFFcEMsT0FBTyxLQUFLO2FBQ1QsUUFBUSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQzthQUNuQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQUM7YUFDbkQsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFBO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDOzs7Ozs7QUFFRCxTQUFTLGdCQUFnQixDQUFDLEtBQVksRUFBRSxRQUFrQjs7VUFDbEQsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ3hDLElBQUksS0FBSyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFO1FBQy9GLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNoQjtBQUNILENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFFBQWtCOztVQUM1QyxFQUFFOzs7SUFBRyxHQUFHLEVBQUU7O2NBQ1IsS0FBSyxHQUFVLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDOztjQUVsQyxJQUFJLEdBQUcsS0FBSyxDQUFDLGNBQWM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLElBQUksSUFBSTtRQUUvRSxPQUFPLElBQUksT0FBTzs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTs7O1lBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsTUFBYztJQUMzQyxPQUFPLE1BQU07SUFDWCw0Y0FBNGM7SUFDNWMsMkJBQTJCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUNuRSxDQUFDLElBQUk7Ozs7SUFBQyxNQUFNLENBQUMsRUFBRTtRQUNkLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlckxvY2FsZURhdGEgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgR2V0QXBwQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQgZGlmZmVyZW50TG9jYWxlcyBmcm9tICcuLi9jb25zdGFudHMvZGlmZmVyZW50LWxvY2FsZXMnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuaW1wb3J0IHsgQ09SRV9PUFRJT05TIH0gZnJvbSAnLi4vdG9rZW5zL29wdGlvbnMudG9rZW4nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxEYXRhKGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gIGNvbnN0IGZuID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmU6IFN0b3JlID0gaW5qZWN0b3IuZ2V0KFN0b3JlKTtcclxuICAgIGNvbnN0IHsgc2tpcEdldEFwcENvbmZpZ3VyYXRpb24gfSA9IGluamVjdG9yLmdldChDT1JFX09QVElPTlMpIGFzIEFCUC5Sb290O1xyXG5cclxuICAgIGlmIChza2lwR2V0QXBwQ29uZmlndXJhdGlvbikgcmV0dXJuO1xyXG5cclxuICAgIHJldHVybiBzdG9yZVxyXG4gICAgICAuZGlzcGF0Y2gobmV3IEdldEFwcENvbmZpZ3VyYXRpb24oKSlcclxuICAgICAgLnBpcGUodGFwKHJlcyA9PiBjaGVja0FjY2Vzc1Rva2VuKHN0b3JlLCBpbmplY3RvcikpKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0FjY2Vzc1Rva2VuKHN0b3JlOiBTdG9yZSwgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgY29uc3Qgb0F1dGggPSBpbmplY3Rvci5nZXQoT0F1dGhTZXJ2aWNlKTtcclxuICBpZiAob0F1dGguaGFzVmFsaWRBY2Nlc3NUb2tlbigpICYmICFzdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXREZWVwKCdjdXJyZW50VXNlci5pZCcpKSkge1xyXG4gICAgb0F1dGgubG9nT3V0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlSW5pdGlhbGl6ZXIoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgY29uc3QgZm4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZTogU3RvcmUgPSBpbmplY3Rvci5nZXQoU3RvcmUpO1xyXG5cclxuICAgIGNvbnN0IGxhbmcgPSBzdG9yZS5zZWxlY3RTbmFwc2hvdChzdGF0ZSA9PiBzdGF0ZS5TZXNzaW9uU3RhdGUubGFuZ3VhZ2UpIHx8ICdlbic7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVnaXN0ZXJMb2NhbGUobGFuZykudGhlbigoKSA9PiByZXNvbHZlKCdyZXNvbHZlZCcpLCByZWplY3QpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMb2NhbGUobG9jYWxlOiBzdHJpbmcpIHtcclxuICByZXR1cm4gaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0luY2x1ZGU6IC8oYWZ8YW18YXItU0F8YXN8YXotTGF0bnxiZXxiZ3xibi1CRHxibi1JTnxic3xjYXxjYS1FUy1WQUxFTkNJQXxjc3xjeXxkYXxkZXxkZXxlbHxlbi1HQnxlbnxlc3xlbnxlcy1VU3xlcy1NWHxldHxldXxmYXxmaXxlbnxmcnxmcnxmci1DQXxnYXxnZHxnbHxndXxoYXxoZXxoaXxocnxodXxoeXxpZHxpZ3xpc3xpdHxpdHxqYXxrYXxra3xrbXxrbnxrb3xrb2t8ZW58ZW58bGJ8bHR8bHZ8ZW58bWt8bWx8bW58bXJ8bXN8bXR8bmJ8bmV8bmx8bmwtQkV8bm58ZW58b3J8cGF8cGEtQXJhYnxwbHxlbnxwdHxwdC1QVHxlbnxlbnxyb3xydXxyd3xwYS1BcmFifHNpfHNrfHNsfHNxfHNyLUN5cmwtQkF8c3ItQ3lybHxzci1MYXRufHN2fHN3fHRhfHRlfHRnfHRofHRpfHRrfHRufHRyfHR0fHVnfHVrfHVyfHV6LUxhdG58dml8d298eGh8eW98emgtSGFuc3x6aC1IYW50fHp1KVxcLmpzJC8gKi9cclxuICAgIGBAYW5ndWxhci9jb21tb24vbG9jYWxlcy8ke2RpZmZlcmVudExvY2FsZXNbbG9jYWxlXSB8fCBsb2NhbGV9LmpzYFxyXG4gICkudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgcmVnaXN0ZXJMb2NhbGVEYXRhKG1vZHVsZS5kZWZhdWx0KTtcclxuICB9KTtcclxufVxyXG4iXX0=