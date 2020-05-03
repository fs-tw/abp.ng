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
export class LazyLoadService {
    constructor() {
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
    load(strategyOrUrl, retryTimesOrType, retryDelayOrContent, targetQuery = 'body', position = 'beforeend') {
        if (strategyOrUrl instanceof LoadingStrategy) {
            /** @type {?} */
            const strategy = strategyOrUrl;
            /** @type {?} */
            const retryTimes = typeof retryTimesOrType === 'number' ? retryTimesOrType : 2;
            /** @type {?} */
            const retryDelay = typeof retryDelayOrContent === 'number' ? retryDelayOrContent : 1000;
            if (this.loaded.has(strategy.path))
                return of(new CustomEvent('load'));
            return strategy.createStream().pipe(retryWhen((/**
             * @param {?} error$
             * @return {?}
             */
            error$ => concat(error$.pipe(delay(retryDelay), take(retryTimes)), throwError(new CustomEvent('error'))))), tap((/**
             * @return {?}
             */
            () => this.loaded.add(strategy.path))), delay(100), shareReplay({ bufferSize: 1, refCount: true }));
        }
        /** @type {?} */
        let urlOrUrls = strategyOrUrl;
        /** @type {?} */
        const content = ((/** @type {?} */ (retryDelayOrContent))) || '';
        /** @type {?} */
        const type = (/** @type {?} */ (retryTimesOrType));
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
        subscriber => {
            ((/** @type {?} */ (urlOrUrls))).forEach((/**
             * @param {?} url
             * @param {?} index
             * @return {?}
             */
            (url, index) => {
                /** @type {?} */
                const key = url ? url.slice(url.lastIndexOf('/') + 1) : uuid();
                if (this.loadedLibraries[key]) {
                    subscriber.next();
                    subscriber.complete();
                    return;
                }
                this.loadedLibraries[key] = new ReplaySubject();
                /** @type {?} */
                let library;
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
                () => {
                    this.loadedLibraries[key].next();
                    this.loadedLibraries[key].complete();
                    if (index === urlOrUrls.length - 1) {
                        subscriber.next();
                        subscriber.complete();
                    }
                });
                document.querySelector(targetQuery).insertAdjacentElement(position, library);
            }));
        }));
    }
}
LazyLoadService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ LazyLoadService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LazyLoadService_Factory() { return new LazyLoadService(); }, token: LazyLoadService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LazyLoadService.prototype.loaded;
    /** @type {?} */
    LazyLoadService.prototype.loadedLibraries;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1sb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbGF6eS1sb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUtoQyxNQUFNLE9BQU8sZUFBZTtJQUg1QjtRQUlXLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRTVCLG9CQUFlLEdBQTJDLEVBQUUsQ0FBQztLQXVHOUQ7Ozs7Ozs7OztJQXpGQyxJQUFJLENBQ0YsYUFBa0QsRUFDbEQsZ0JBQThDLEVBQzlDLG1CQUFxQyxFQUNyQyxjQUFzQixNQUFNLEVBQzVCLFdBQTJCLFdBQVc7UUFFdEMsSUFBSSxhQUFhLFlBQVksZUFBZSxFQUFFOztrQkFDdEMsUUFBUSxHQUFHLGFBQWE7O2tCQUN4QixVQUFVLEdBQUcsT0FBTyxnQkFBZ0IsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDOztrQkFDeEUsVUFBVSxHQUFHLE9BQU8sbUJBQW1CLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUV2RixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJ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SSxHQUFHLEdBQUcsQ0FBQztxQkFDekM7aUJBQ0Y7cUJBQU07b0JBQ0wsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzFDLENBQUMsbUJBQUEsT0FBTyxFQUFvQixDQUFDLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztpQkFDckQ7Z0JBRUQsT0FBTyxDQUFDLE1BQU07OztnQkFBRyxHQUFHLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBRXJDLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNsQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2xCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDdkI7Z0JBQ0gsQ0FBQyxDQUFBLENBQUM7Z0JBRUYsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDL0UsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQTVHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUMsaUNBQTRCOztJQUU1QiwwQ0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbmNhdCwgT2JzZXJ2YWJsZSwgb2YsIFJlcGxheVN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXksIHJldHJ5V2hlbiwgc2hhcmVSZXBsYXksIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnLi4vc3RyYXRlZ2llcyc7XHJcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF6eUxvYWRTZXJ2aWNlIHtcclxuICByZWFkb25seSBsb2FkZWQgPSBuZXcgU2V0KCk7XHJcblxyXG4gIGxvYWRlZExpYnJhcmllczogeyBbdXJsOiBzdHJpbmddOiBSZXBsYXlTdWJqZWN0PHZvaWQ+IH0gPSB7fTtcclxuXHJcbiAgbG9hZChzdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5LCByZXRyeVRpbWVzPzogbnVtYmVyLCByZXRyeURlbGF5PzogbnVtYmVyKTogT2JzZXJ2YWJsZTxFdmVudD47XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAZGVwcmVjYXRlZCBVc2Ugb3RoZXIgb3ZlcmxvYWQgdGhhdCByZXF1aXJlcyBhIHN0cmF0ZWd5IGFzIGZpcnN0IHBhcmFtXHJcbiAgICovXHJcbiAgbG9hZChcclxuICAgIHVybE9yVXJsczogc3RyaW5nIHwgc3RyaW5nW10sXHJcbiAgICB0eXBlOiAnc2NyaXB0JyB8ICdzdHlsZScsXHJcbiAgICBjb250ZW50Pzogc3RyaW5nLFxyXG4gICAgdGFyZ2V0UXVlcnk/OiBzdHJpbmcsXHJcbiAgICBwb3NpdGlvbj86IEluc2VydFBvc2l0aW9uLFxyXG4gICk6IE9ic2VydmFibGU8dm9pZD47XHJcbiAgbG9hZChcclxuICAgIHN0cmF0ZWd5T3JVcmw6IExvYWRpbmdTdHJhdGVneSB8IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gICAgcmV0cnlUaW1lc09yVHlwZT86IG51bWJlciB8ICdzY3JpcHQnIHwgJ3N0eWxlJyxcclxuICAgIHJldHJ5RGVsYXlPckNvbnRlbnQ/OiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICB0YXJnZXRRdWVyeTogc3RyaW5nID0gJ2JvZHknLFxyXG4gICAgcG9zaXRpb246IEluc2VydFBvc2l0aW9uID0gJ2JlZm9yZWVuZCcsXHJcbiAgKTogT2JzZXJ2YWJsZTxFdmVudCB8IHZvaWQ+IHtcclxuICAgIGlmIChzdHJhdGVneU9yVXJsIGluc3RhbmNlb2YgTG9hZGluZ1N0cmF0ZWd5KSB7XHJcbiAgICAgIGNvbnN0IHN0cmF0ZWd5ID0gc3RyYXRlZ3lPclVybDtcclxuICAgICAgY29uc3QgcmV0cnlUaW1lcyA9IHR5cGVvZiByZXRyeVRpbWVzT3JUeXBlID09PSAnbnVtYmVyJyA/IHJldHJ5VGltZXNPclR5cGUgOiAyO1xyXG4gICAgICBjb25zdCByZXRyeURlbGF5ID0gdHlwZW9mIHJldHJ5RGVsYXlPckNvbnRlbnQgPT09ICdudW1iZXInID8gcmV0cnlEZWxheU9yQ29udGVudCA6IDEwMDA7XHJcblxyXG4gICAgICBpZiAodGhpcy5sb2FkZWQuaGFzKHN0cmF0ZWd5LnBhdGgpKSByZXR1cm4gb2YobmV3IEN1c3RvbUV2ZW50KCdsb2FkJykpO1xyXG5cclxuICAgICAgcmV0dXJuIHN0cmF0ZWd5LmNyZWF0ZVN0cmVhbSgpLnBpcGUoXHJcbiAgICAgICAgcmV0cnlXaGVuKGVycm9yJCA9PlxyXG4gICAgICAgICAgY29uY2F0KFxyXG4gICAgICAgICAgICBlcnJvciQucGlwZShkZWxheShyZXRyeURlbGF5KSwgdGFrZShyZXRyeVRpbWVzKSksXHJcbiAgICAgICAgICAgIHRocm93RXJyb3IobmV3IEN1c3RvbUV2ZW50KCdlcnJvcicpKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgKSxcclxuICAgICAgICB0YXAoKCkgPT4gdGhpcy5sb2FkZWQuYWRkKHN0cmF0ZWd5LnBhdGgpKSxcclxuICAgICAgICBkZWxheSgxMDApLFxyXG4gICAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSksXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVybE9yVXJscyA9IHN0cmF0ZWd5T3JVcmw7XHJcbiAgICBjb25zdCBjb250ZW50ID0gKHJldHJ5RGVsYXlPckNvbnRlbnQgYXMgc3RyaW5nKSB8fCAnJztcclxuICAgIGNvbnN0IHR5cGUgPSByZXRyeVRpbWVzT3JUeXBlIGFzICdzY3JpcHQnIHwgJ3N0eWxlJztcclxuXHJcbiAgICBpZiAoIXVybE9yVXJscyAmJiAhY29udGVudCkge1xyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcignU2hvdWxkIHBhc3MgdXJsIG9yIGNvbnRlbnQnKTtcclxuICAgIH0gZWxzZSBpZiAoIXVybE9yVXJscyAmJiBjb250ZW50KSB7XHJcbiAgICAgIHVybE9yVXJscyA9IFtudWxsXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodXJsT3JVcmxzKSkge1xyXG4gICAgICB1cmxPclVybHMgPSBbdXJsT3JVcmxzXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiB7XHJcbiAgICAgICh1cmxPclVybHMgYXMgc3RyaW5nW10pLmZvckVhY2goKHVybCwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBrZXkgPSB1cmwgPyB1cmwuc2xpY2UodXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKSA6IHV1aWQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGVkTGlicmFyaWVzW2tleV0pIHtcclxuICAgICAgICAgIHN1YnNjcmliZXIubmV4dCgpO1xyXG4gICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkZWRMaWJyYXJpZXNba2V5XSA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XHJcblxyXG4gICAgICAgIGxldCBsaWJyYXJ5O1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnc2NyaXB0Jykge1xyXG4gICAgICAgICAgbGlicmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgbGlicmFyeS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgIChsaWJyYXJ5IGFzIEhUTUxTY3JpcHRFbGVtZW50KS5zcmMgPSB1cmw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgKGxpYnJhcnkgYXMgSFRNTFNjcmlwdEVsZW1lbnQpLnRleHQgPSBjb250ZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXJsKSB7XHJcbiAgICAgICAgICBsaWJyYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICAgICAgbGlicmFyeS50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgICAgIChsaWJyYXJ5IGFzIEhUTUxMaW5rRWxlbWVudCkucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG5cclxuICAgICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgKGxpYnJhcnkgYXMgSFRNTExpbmtFbGVtZW50KS5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsaWJyYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICAgIChsaWJyYXJ5IGFzIEhUTUxTdHlsZUVsZW1lbnQpLnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpYnJhcnkub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2FkZWRMaWJyYXJpZXNba2V5XS5uZXh0KCk7XHJcbiAgICAgICAgICB0aGlzLmxvYWRlZExpYnJhcmllc1trZXldLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgICAgICAgaWYgKGluZGV4ID09PSB1cmxPclVybHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoKTtcclxuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0UXVlcnkpLmluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbiwgbGlicmFyeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==