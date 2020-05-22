/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/list.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { debounceTime, shareReplay, switchMap, tap } from 'rxjs/operators';
import { LIST_QUERY_DEBOUNCE_TIME } from '../tokens/list.token';
import { takeUntilDestroy } from '../utils/rxjs-utils';
export class ListService {
    /**
     * @param {?} delay
     */
    constructor(delay) {
        this.delay = delay;
        this._filter = '';
        this._maxResultCount = 10;
        this._page = 1;
        this._sortKey = '';
        this._sortOrder = '';
        this._query$ = new ReplaySubject(1);
        this._isLoading$ = new BehaviorSubject(false);
        this.get = (/**
         * @return {?}
         */
        () => {
            this._query$.next({
                filter: this._filter || undefined,
                maxResultCount: this._maxResultCount,
                skipCount: (this._page - 1) * this._maxResultCount,
                sorting: this._sortOrder ? `${this._sortKey} ${this._sortOrder}` : undefined,
            });
        });
        this.get();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set filter(value) {
        this._filter = value;
        this.get();
    }
    /**
     * @return {?}
     */
    get filter() {
        return this._filter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxResultCount(value) {
        this._maxResultCount = value;
        this.get();
    }
    /**
     * @return {?}
     */
    get maxResultCount() {
        return this._maxResultCount;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this._page = value;
        this.get();
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sortKey(value) {
        this._sortKey = value;
        this.get();
    }
    /**
     * @return {?}
     */
    get sortKey() {
        return this._sortKey;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sortOrder(value) {
        this._sortOrder = value;
        this.get();
    }
    /**
     * @return {?}
     */
    get sortOrder() {
        return this._sortOrder;
    }
    /**
     * @return {?}
     */
    get query$() {
        return this._query$
            .asObservable()
            .pipe(debounceTime(this.delay || 300), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    /**
     * @template T
     * @param {?} streamCreatorCallback
     * @return {?}
     */
    hookToQuery(streamCreatorCallback) {
        this._isLoading$.next(true);
        return this.query$.pipe(switchMap(streamCreatorCallback), tap((/**
         * @return {?}
         */
        () => this._isLoading$.next(false))), shareReplay({ bufferSize: 1, refCount: true }), takeUntilDestroy(this));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
ListService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ListService.ctorParameters = () => [
    { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [LIST_QUERY_DEBOUNCE_TIME,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListService.prototype._filter;
    /**
     * @type {?}
     * @private
     */
    ListService.prototype._maxResultCount;
    /**
     * @type {?}
     * @private
     */
    ListService.prototype._page;
    /**
     * @type {?}
     * @private
     */
    ListService.prototype._sortKey;
    /**
     * @type {?}
     * @private
     */
    ListService.prototype._sortOrder;
    /**
     * @type {?}
     * @private
     */
    ListService.prototype._query$;
    /**
     * @type {?}
     * @private
     */
    ListService.prototype._isLoading$;
    /** @type {?} */
    ListService.prototype.get;
    /**
     * @type {?}
     * @private
     */
    ListService.prototype.delay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdkQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFxRXRCLFlBQWtFLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBcEV2RSxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBU2Isb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFTckIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQVNWLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFTZCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBU2hCLFlBQU8sR0FBRyxJQUFJLGFBQWEsQ0FBc0IsQ0FBQyxDQUFDLENBQUM7UUFRcEQsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQU1qRCxRQUFHOzs7UUFBRyxHQUFHLEVBQUU7WUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUztnQkFDakMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFH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O0lBU3hCLDhCQUE0RDs7Ozs7SUFRNUQsa0NBQWlEOztJQU1qRCwwQkFPRTs7Ozs7SUFFVSw0QkFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgUGFnZWRSZXN1bHREdG8gfSBmcm9tICcuLi9tb2RlbHMvZHRvcyc7XHJcbmltcG9ydCB7IExJU1RfUVVFUllfREVCT1VOQ0VfVElNRSB9IGZyb20gJy4uL3Rva2Vucy9saXN0LnRva2VuJztcclxuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSB9IGZyb20gJy4uL3V0aWxzL3J4anMtdXRpbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGlzdFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX2ZpbHRlciA9ICcnO1xyXG4gIHNldCBmaWx0ZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZmlsdGVyID0gdmFsdWU7XHJcbiAgICB0aGlzLmdldCgpO1xyXG4gIH1cclxuICBnZXQgZmlsdGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbWF4UmVzdWx0Q291bnQgPSAxMDtcclxuICBzZXQgbWF4UmVzdWx0Q291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fbWF4UmVzdWx0Q291bnQgPSB2YWx1ZTtcclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG4gIGdldCBtYXhSZXN1bHRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heFJlc3VsdENvdW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcGFnZSA9IDE7XHJcbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9wYWdlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc29ydEtleSA9ICcnO1xyXG4gIHNldCBzb3J0S2V5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NvcnRLZXkgPSB2YWx1ZTtcclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG4gIGdldCBzb3J0S2V5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc29ydEtleTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NvcnRPcmRlciA9ICcnO1xyXG4gIHNldCBzb3J0T3JkZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc29ydE9yZGVyID0gdmFsdWU7XHJcbiAgICB0aGlzLmdldCgpO1xyXG4gIH1cclxuICBnZXQgc29ydE9yZGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc29ydE9yZGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcXVlcnkkID0gbmV3IFJlcGxheVN1YmplY3Q8QUJQLlBhZ2VRdWVyeVBhcmFtcz4oMSk7XHJcblxyXG4gIGdldCBxdWVyeSQoKTogT2JzZXJ2YWJsZTxBQlAuUGFnZVF1ZXJ5UGFyYW1zPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcXVlcnkkXHJcbiAgICAgIC5hc09ic2VydmFibGUoKVxyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWxheSB8fCAzMDApLCBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lzTG9hZGluZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgZ2V0IGlzTG9hZGluZyQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkaW5nJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCA9ICgpID0+IHtcclxuICAgIHRoaXMuX3F1ZXJ5JC5uZXh0KHtcclxuICAgICAgZmlsdGVyOiB0aGlzLl9maWx0ZXIgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYXhSZXN1bHRDb3VudDogdGhpcy5fbWF4UmVzdWx0Q291bnQsXHJcbiAgICAgIHNraXBDb3VudDogKHRoaXMuX3BhZ2UgLSAxKSAqIHRoaXMuX21heFJlc3VsdENvdW50LFxyXG4gICAgICBzb3J0aW5nOiB0aGlzLl9zb3J0T3JkZXIgPyBgJHt0aGlzLl9zb3J0S2V5fSAke3RoaXMuX3NvcnRPcmRlcn1gIDogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChMSVNUX1FVRVJZX0RFQk9VTkNFX1RJTUUpIHByaXZhdGUgZGVsYXk6IG51bWJlcikge1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcblxyXG4gIGhvb2tUb1F1ZXJ5PFQgZXh0ZW5kcyBhbnk+KFxyXG4gICAgc3RyZWFtQ3JlYXRvckNhbGxiYWNrOiBRdWVyeVN0cmVhbUNyZWF0b3JDYWxsYmFjazxUPixcclxuICApOiBPYnNlcnZhYmxlPFBhZ2VkUmVzdWx0RHRvPFQ+PiB7XHJcbiAgICB0aGlzLl9pc0xvYWRpbmckLm5leHQodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucXVlcnkkLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcChzdHJlYW1DcmVhdG9yQ2FsbGJhY2spLFxyXG4gICAgICB0YXAoKCkgPT4gdGhpcy5faXNMb2FkaW5nJC5uZXh0KGZhbHNlKSksXHJcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSksXHJcbiAgICAgIHRha2VVbnRpbERlc3Ryb3kodGhpcyksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBRdWVyeVN0cmVhbUNyZWF0b3JDYWxsYmFjazxUPiA9IChcclxuICBxdWVyeTogQUJQLlBhZ2VRdWVyeVBhcmFtcyxcclxuKSA9PiBPYnNlcnZhYmxlPFBhZ2VkUmVzdWx0RHRvPFQ+PjtcclxuIl19