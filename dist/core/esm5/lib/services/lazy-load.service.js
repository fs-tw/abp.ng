/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/lazy-load.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { concat, Observable, of, ReplaySubject, throwError } from 'rxjs';
import { delay, retryWhen, shareReplay, take, tap } from 'rxjs/operators';
import { LoadingStrategy } from '../strategies';
import { uuid } from '../utils';
import * as i0 from "@angular/core";
var LazyLoadService = /** @class */ (function () {
    function LazyLoadService() {
        this.loaded = new Set();
        this.loadedLibraries = {};
    }
    /**
     * @param {?} strategyOrUrl
     * @param {?=} retryTimesOrType
     * @param {?=} retryDelayOrContent
     * @param {?=} targetQuery
     * @param {?=} position
     * @return {?}
     */
    LazyLoadService.prototype.load = /**
     * @param {?} strategyOrUrl
     * @param {?=} retryTimesOrType
     * @param {?=} retryDelayOrContent
     * @param {?=} targetQuery
     * @param {?=} position
     * @return {?}
     */
    function (strategyOrUrl, retryTimesOrType, retryDelayOrContent, targetQuery, position) {
        var _this = this;
        if (targetQuery === void 0) { targetQuery = 'body'; }
        if (position === void 0) { position = 'beforeend'; }
        if (strategyOrUrl instanceof LoadingStrategy) {
            /** @type {?} */
            var strategy_1 = strategyOrUrl;
            /** @type {?} */
            var retryTimes_1 = typeof retryTimesOrType === 'number' ? retryTimesOrType : 2;
            /** @type {?} */
            var retryDelay_1 = typeof retryDelayOrContent === 'number' ? retryDelayOrContent : 1000;
            if (this.loaded.has(strategy_1.path))
                return of(new CustomEvent('load'));
            return strategy_1.createStream().pipe(retryWhen((/**
             * @param {?} error$
             * @return {?}
             */
            function (error$) {
                return concat(error$.pipe(delay(retryDelay_1), take(retryTimes_1)), throwError(new CustomEvent('error')));
            })), tap((/**
             * @return {?}
             */
            function () { return _this.loaded.add(strategy_1.path); })), delay(100), shareReplay({ bufferSize: 1, refCount: true }));
        }
        /** @type {?} */
        var urlOrUrls = strategyOrUrl;
        /** @type {?} */
        var content = ((/** @type {?} */ (retryDelayOrContent))) || '';
        /** @type {?} */
        var type = (/** @type {?} */ (retryTimesOrType));
        if (!urlOrUrls && !content) {
            return throwError('Should pass url or content');
        }
        else if (!urlOrUrls && content) {
            urlOrUrls = [null];
        }
        if (!Array.isArray(urlOrUrls)) {
            urlOrUrls = [urlOrUrls];
        }
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            ((/** @type {?} */ (urlOrUrls))).forEach((/**
             * @param {?} url
             * @param {?} index
             * @return {?}
             */
            function (url, index) {
                /** @type {?} */
                var key = url ? url.slice(url.lastIndexOf('/') + 1) : uuid();
                if (_this.loadedLibraries[key]) {
                    subscriber.next();
                    subscriber.complete();
                    return;
                }
                _this.loadedLibraries[key] = new ReplaySubject();
                /** @type {?} */
                var library;
                if (type === 'script') {
                    library = document.createElement('script');
                    library.type = 'text/javascript';
                    if (url) {
                        ((/** @type {?} */ (library))).src = url;
                    }
                    ((/** @type {?} */ (library))).text = content;
                }
                else if (url) {
                    library = document.createElement('link');
                    library.type = 'text/css';
                    ((/** @type {?} */ (library))).rel = 'stylesheet';
                    if (url) {
                        ((/** @type {?} */ (library))).href = url;
                    }
                }
                else {
                    library = document.createElement('style');
                    ((/** @type {?} */ (library))).textContent = content;
                }
                library.onload = (/**
                 * @return {?}
                 */
                function () {
                    _this.loadedLibraries[key].next();
                    _this.loadedLibraries[key].complete();
                    if (index === urlOrUrls.length - 1) {
                        subscriber.next();
                        subscriber.complete();
                    }
                });
                document.querySelector(targetQuery).insertAdjacentElement(position, library);
            }));
        }));
    };
    LazyLoadService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ LazyLoadService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LazyLoadService_Factory() { return new LazyLoadService(); }, token: LazyLoadService, providedIn: "root" });
    return LazyLoadService;
}());
export { LazyLoadService };
if (false) {
    /** @type {?} */
    LazyLoadService.prototype.loaded;
    /** @type {?} */
    LazyLoadService.prototype.loadedLibraries;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1sb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbGF6eS1sb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUVoQztJQUFBO1FBSVcsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFFNUIsb0JBQWUsR0FBMkMsRUFBRSxDQUFDO0tBdUc5RDs7Ozs7Ozs7O0lBekZDLDhCQUFJOzs7Ozs7OztJQUFKLFVBQ0UsYUFBa0QsRUFDbEQsZ0JBQThDLEVBQzlDLG1CQUFxQyxFQUNyQyxXQUE0QixFQUM1QixRQUFzQztRQUx4QyxpQkF3RkM7UUFwRkMsNEJBQUEsRUFBQSxvQkFBNEI7UUFDNUIseUJBQUEsRUFBQSxzQkFBc0M7UUFFdEMsSUFBSSxhQUFhLFlBQVksZUFBZSxFQUFFOztnQkFDdEMsVUFBUSxHQUFHLGFBQWE7O2dCQUN4QixZQUFVLEdBQUcsT0FBTyxnQkFBZ0IsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFDeEUsWUFBVSxHQUFHLE9BQU8sbUJBQW1CLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUV2RixJ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QUFHLEVBQUU7d0JBQ1AsQ0FBQyxtQkFBQSxPQUFPLEVBQW1CLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO3FCQUN6QztpQkFDRjtxQkFBTTtvQkFDTCxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDMUMsQ0FBQyxtQkFBQSxPQUFPLEVBQW9CLENBQUMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO2lCQUNyRDtnQkFFRCxPQUFPLENBQUMsTUFBTTs7O2dCQUFHO29CQUNmLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBRXJDLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNsQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2xCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDdkI7Z0JBQ0gsQ0FBQyxDQUFBLENBQUM7Z0JBRUYsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDL0UsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTVHRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7MEJBUkQ7Q0FtSEMsQUE3R0QsSUE2R0M7U0ExR1ksZUFBZTs7O0lBQzFCLGlDQUE0Qjs7SUFFNUIsMENBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjb25jYXQsIE9ic2VydmFibGUsIG9mLCBSZXBsYXlTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlbGF5LCByZXRyeVdoZW4sIHNoYXJlUmVwbGF5LCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IExvYWRpbmdTdHJhdGVneSB9IGZyb20gJy4uL3N0cmF0ZWdpZXMnO1xyXG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhenlMb2FkU2VydmljZSB7XHJcbiAgcmVhZG9ubHkgbG9hZGVkID0gbmV3IFNldCgpO1xyXG5cclxuICBsb2FkZWRMaWJyYXJpZXM6IHsgW3VybDogc3RyaW5nXTogUmVwbGF5U3ViamVjdDx2b2lkPiB9ID0ge307XHJcblxyXG4gIGxvYWQoc3RyYXRlZ3k6IExvYWRpbmdTdHJhdGVneSwgcmV0cnlUaW1lcz86IG51bWJlciwgcmV0cnlEZWxheT86IG51bWJlcik6IE9ic2VydmFibGU8RXZlbnQ+O1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQGRlcHJlY2F0ZWQgVXNlIG90aGVyIG92ZXJsb2FkIHRoYXQgcmVxdWlyZXMgYSBzdHJhdGVneSBhcyBmaXJzdCBwYXJhbVxyXG4gICAqL1xyXG4gIGxvYWQoXHJcbiAgICB1cmxPclVybHM6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gICAgdHlwZTogJ3NjcmlwdCcgfCAnc3R5bGUnLFxyXG4gICAgY29udGVudD86IHN0cmluZyxcclxuICAgIHRhcmdldFF1ZXJ5Pzogc3RyaW5nLFxyXG4gICAgcG9zaXRpb24/OiBJbnNlcnRQb3NpdGlvbixcclxuICApOiBPYnNlcnZhYmxlPHZvaWQ+O1xyXG4gIGxvYWQoXHJcbiAgICBzdHJhdGVneU9yVXJsOiBMb2FkaW5nU3RyYXRlZ3kgfCBzdHJpbmcgfCBzdHJpbmdbXSxcclxuICAgIHJldHJ5VGltZXNPclR5cGU/OiBudW1iZXIgfCAnc2NyaXB0JyB8ICdzdHlsZScsXHJcbiAgICByZXRyeURlbGF5T3JDb250ZW50PzogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgdGFyZ2V0UXVlcnk6IHN0cmluZyA9ICdib2R5JyxcclxuICAgIHBvc2l0aW9uOiBJbnNlcnRQb3NpdGlvbiA9ICdiZWZvcmVlbmQnLFxyXG4gICk6IE9ic2VydmFibGU8RXZlbnQgfCB2b2lkPiB7XHJcbiAgICBpZiAoc3RyYXRlZ3lPclVybCBpbnN0YW5jZW9mIExvYWRpbmdTdHJhdGVneSkge1xyXG4gICAgICBjb25zdCBzdHJhdGVneSA9IHN0cmF0ZWd5T3JVcmw7XHJcbiAgICAgIGNvbnN0IHJldHJ5VGltZXMgPSB0eXBlb2YgcmV0cnlUaW1lc09yVHlwZSA9PT0gJ251bWJlcicgPyByZXRyeVRpbWVzT3JUeXBlIDogMjtcclxuICAgICAgY29uc3QgcmV0cnlEZWxheSA9IHR5cGVvZiByZXRyeURlbGF5T3JDb250ZW50ID09PSAnbnVtYmVyJyA/IHJldHJ5RGVsYXlPckNvbnRlbnQgOiAxMDAwO1xyXG5cclxuICAgICAgaWYgKHRoaXMubG9hZGVkLmhhcyhzdHJhdGVneS5wYXRoKSkgcmV0dXJuIG9mKG5ldyBDdXN0b21FdmVudCgnbG9hZCcpKTtcclxuXHJcbiAgICAgIHJldHVybiBzdHJhdGVneS5jcmVhdGVTdHJlYW0oKS5waXBlKFxyXG4gICAgICAgIHJldHJ5V2hlbihlcnJvciQgPT5cclxuICAgICAgICAgIGNvbmNhdChcclxuICAgICAgICAgICAgZXJyb3IkLnBpcGUoZGVsYXkocmV0cnlEZWxheSksIHRha2UocmV0cnlUaW1lcykpLFxyXG4gICAgICAgICAgICB0aHJvd0Vycm9yKG5ldyBDdXN0b21FdmVudCgnZXJyb3InKSksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICksXHJcbiAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGVkLmFkZChzdHJhdGVneS5wYXRoKSksXHJcbiAgICAgICAgZGVsYXkoMTAwKSxcclxuICAgICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB1cmxPclVybHMgPSBzdHJhdGVneU9yVXJsO1xyXG4gICAgY29uc3QgY29udGVudCA9IChyZXRyeURlbGF5T3JDb250ZW50IGFzIHN0cmluZykgfHwgJyc7XHJcbiAgICBjb25zdCB0eXBlID0gcmV0cnlUaW1lc09yVHlwZSBhcyAnc2NyaXB0JyB8ICdzdHlsZSc7XHJcblxyXG4gICAgaWYgKCF1cmxPclVybHMgJiYgIWNvbnRlbnQpIHtcclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoJ1Nob3VsZCBwYXNzIHVybCBvciBjb250ZW50Jyk7XHJcbiAgICB9IGVsc2UgaWYgKCF1cmxPclVybHMgJiYgY29udGVudCkge1xyXG4gICAgICB1cmxPclVybHMgPSBbbnVsbF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHVybE9yVXJscykpIHtcclxuICAgICAgdXJsT3JVcmxzID0gW3VybE9yVXJsc107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZXIgPT4ge1xyXG4gICAgICAodXJsT3JVcmxzIGFzIHN0cmluZ1tdKS5mb3JFYWNoKCh1cmwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdXJsID8gdXJsLnNsaWNlKHVybC5sYXN0SW5kZXhPZignLycpICsgMSkgOiB1dWlkKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvYWRlZExpYnJhcmllc1trZXldKSB7XHJcbiAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoKTtcclxuICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVkTGlicmFyaWVzW2tleV0gPSBuZXcgUmVwbGF5U3ViamVjdCgpO1xyXG5cclxuICAgICAgICBsZXQgbGlicmFyeTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3NjcmlwdCcpIHtcclxuICAgICAgICAgIGxpYnJhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgIGxpYnJhcnkudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAobGlicmFyeSBhcyBIVE1MU2NyaXB0RWxlbWVudCkuc3JjID0gdXJsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIChsaWJyYXJ5IGFzIEhUTUxTY3JpcHRFbGVtZW50KS50ZXh0ID0gY29udGVudDtcclxuICAgICAgICB9IGVsc2UgaWYgKHVybCkge1xyXG4gICAgICAgICAgbGlicmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgICAgIGxpYnJhcnkudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgICAgICAobGlicmFyeSBhcyBIVE1MTGlua0VsZW1lbnQpLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuXHJcbiAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgIChsaWJyYXJ5IGFzIEhUTUxMaW5rRWxlbWVudCkuaHJlZiA9IHVybDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGlicmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAobGlicmFyeSBhcyBIVE1MU3R5bGVFbGVtZW50KS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaWJyYXJ5Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMubG9hZGVkTGlicmFyaWVzW2tleV0ubmV4dCgpO1xyXG4gICAgICAgICAgdGhpcy5sb2FkZWRMaWJyYXJpZXNba2V5XS5jb21wbGV0ZSgpO1xyXG5cclxuICAgICAgICAgIGlmIChpbmRleCA9PT0gdXJsT3JVcmxzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KCk7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFF1ZXJ5KS5pbnNlcnRBZGphY2VudEVsZW1lbnQocG9zaXRpb24sIGxpYnJhcnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=