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
var ListService = /** @class */ (function () {
    function ListService(delay) {
        var _this = this;
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
        function () {
            _this._query$.next({
                filter: _this._filter || undefined,
                maxResultCount: _this._maxResultCount,
                skipCount: (_this._page - 1) * _this._maxResultCount,
                sorting: _this._sortOrder ? _this._sortKey + " " + _this._sortOrder : undefined,
            });
        });
        this.get();
    }
    Object.defineProperty(ListService.prototype, "filter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._filter = value;
            this.get();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListService.prototype, "maxResultCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maxResultCount;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxResultCount = value;
            this.get();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListService.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._page = value;
            this.get();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListService.prototype, "sortKey", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sortKey;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sortKey = value;
            this.get();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListService.prototype, "sortOrder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sortOrder;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sortOrder = value;
            this.get();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListService.prototype, "query$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._query$
                .asObservable()
                .pipe(debounceTime(this.delay || 300), shareReplay({ bufferSize: 1, refCount: true }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListService.prototype, "isLoading$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isLoading$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template T
     * @param {?} streamCreatorCallback
     * @return {?}
     */
    ListService.prototype.hookToQuery = /**
     * @template T
     * @param {?} streamCreatorCallback
     * @return {?}
     */
    function (streamCreatorCallback) {
        var _this = this;
        this._isLoading$.next(true);
        return this.query$.pipe(switchMap(streamCreatorCallback), tap((/**
         * @return {?}
         */
        function () { return _this._isLoading$.next(false); })), shareReplay({ bufferSize: 1, refCount: true }), takeUntilDestroy(this));
    };
    /**
     * @return {?}
     */
    ListService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    ListService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ListService.ctorParameters = function () { return [
        { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [LIST_QUERY_DEBOUNCE_TIME,] }] }
    ]; };
    return ListService;
}());
export { ListService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQ7SUFzRUUscUJBQWtFLEtBQWE7UUFBL0UsaUJBRUM7UUFGaUUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQXBFdkUsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQVNiLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBU3JCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFTVixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBU2QsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQVNoQixZQUFPLEdBQUcsSUFBSSxhQUFhLENBQXNCLENBQUMsQ0FBQyxDQUFDO1FBUXBELGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFNakQsUUFBRzs7O1FBQUc7WUFDSixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEIsTUFBTSxFQUFFLEtBQUksQ0FBQyxPQUFPLElBQUksU0FBUztnQkFDakMsY0FBYyxFQUFFLEtBQUksQ0FBQyxlQUFlO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxlQUFl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QztTQXZGWSxXQUFXOzs7Ozs7SUFDdEIsOEJBQXFCOzs7OztJQVNyQixzQ0FBNkI7Ozs7O0lBUzdCLDRCQUFrQjs7Ozs7SUFTbEIsK0JBQXNCOzs7OztJQVN0QixpQ0FBd0I7Ozs7O0lBU3hCLDhCQUE0RDs7Ozs7SUFRNUQsa0NBQWlEOztJQU1qRCwwQkFPRTs7Ozs7SUFFVSw0QkFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgUGFnZWRSZXN1bHREdG8gfSBmcm9tICcuLi9tb2RlbHMvZHRvcyc7XHJcbmltcG9ydCB7IExJU1RfUVVFUllfREVCT1VOQ0VfVElNRSB9IGZyb20gJy4uL3Rva2Vucy9saXN0LnRva2VuJztcclxuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSB9IGZyb20gJy4uL3V0aWxzL3J4anMtdXRpbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGlzdFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX2ZpbHRlciA9ICcnO1xyXG4gIHNldCBmaWx0ZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZmlsdGVyID0gdmFsdWU7XHJcbiAgICB0aGlzLmdldCgpO1xyXG4gIH1cclxuICBnZXQgZmlsdGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbWF4UmVzdWx0Q291bnQgPSAxMDtcclxuICBzZXQgbWF4UmVzdWx0Q291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fbWF4UmVzdWx0Q291bnQgPSB2YWx1ZTtcclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG4gIGdldCBtYXhSZXN1bHRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heFJlc3VsdENvdW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcGFnZSA9IDE7XHJcbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9wYWdlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc29ydEtleSA9ICcnO1xyXG4gIHNldCBzb3J0S2V5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NvcnRLZXkgPSB2YWx1ZTtcclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG4gIGdldCBzb3J0S2V5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc29ydEtleTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NvcnRPcmRlciA9ICcnO1xyXG4gIHNldCBzb3J0T3JkZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc29ydE9yZGVyID0gdmFsdWU7XHJcbiAgICB0aGlzLmdldCgpO1xyXG4gIH1cclxuICBnZXQgc29ydE9yZGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc29ydE9yZGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcXVlcnkkID0gbmV3IFJlcGxheVN1YmplY3Q8QUJQLlBhZ2VRdWVyeVBhcmFtcz4oMSk7XHJcblxyXG4gIGdldCBxdWVyeSQoKTogT2JzZXJ2YWJsZTxBQlAuUGFnZVF1ZXJ5UGFyYW1zPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcXVlcnkkXHJcbiAgICAgIC5hc09ic2VydmFibGUoKVxyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWxheSB8fCAzMDApLCBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lzTG9hZGluZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgZ2V0IGlzTG9hZGluZyQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkaW5nJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCA9ICgpID0+IHtcclxuICAgIHRoaXMuX3F1ZXJ5JC5uZXh0KHtcclxuICAgICAgZmlsdGVyOiB0aGlzLl9maWx0ZXIgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYXhSZXN1bHRDb3VudDogdGhpcy5fbWF4UmVzdWx0Q291bnQsXHJcbiAgICAgIHNraXBDb3VudDogKHRoaXMuX3BhZ2UgLSAxKSAqIHRoaXMuX21heFJlc3VsdENvdW50LFxyXG4gICAgICBzb3J0aW5nOiB0aGlzLl9zb3J0T3JkZXIgPyBgJHt0aGlzLl9zb3J0S2V5fSAke3RoaXMuX3NvcnRPcmRlcn1gIDogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChMSVNUX1FVRVJZX0RFQk9VTkNFX1RJTUUpIHByaXZhdGUgZGVsYXk6IG51bWJlcikge1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcblxyXG4gIGhvb2tUb1F1ZXJ5PFQgZXh0ZW5kcyBhbnk+KFxyXG4gICAgc3RyZWFtQ3JlYXRvckNhbGxiYWNrOiBRdWVyeVN0cmVhbUNyZWF0b3JDYWxsYmFjazxUPixcclxuICApOiBPYnNlcnZhYmxlPFBhZ2VkUmVzdWx0RHRvPFQ+PiB7XHJcbiAgICB0aGlzLl9pc0xvYWRpbmckLm5leHQodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucXVlcnkkLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcChzdHJlYW1DcmVhdG9yQ2FsbGJhY2spLFxyXG4gICAgICB0YXAoKCkgPT4gdGhpcy5faXNMb2FkaW5nJC5uZXh0KGZhbHNlKSksXHJcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSksXHJcbiAgICAgIHRha2VVbnRpbERlc3Ryb3kodGhpcyksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBRdWVyeVN0cmVhbUNyZWF0b3JDYWxsYmFjazxUPiA9IChcclxuICBxdWVyeTogQUJQLlBhZ2VRdWVyeVBhcmFtcyxcclxuKSA9PiBPYnNlcnZhYmxlPFBhZ2VkUmVzdWx0RHRvPFQ+PjtcclxuIl19