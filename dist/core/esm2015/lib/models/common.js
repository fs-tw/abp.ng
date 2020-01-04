/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/common.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var ABP;
(function (ABP) {
    /**
     * @record
     */
    function Root() { }
    ABP.Root = Root;
    if (false) {
        /** @type {?} */
        Root.prototype.environment;
        /** @type {?} */
        Root.prototype.requirements;
    }
    /**
     * @record
     * @template T
     */
    function PagedItemsResponse() { }
    ABP.PagedItemsResponse = PagedItemsResponse;
    if (false) {
        /** @type {?} */
        PagedItemsResponse.prototype.items;
    }
    /**
     * @record
     */
    function PageQueryParams() { }
    ABP.PageQueryParams = PageQueryParams;
    if (false) {
        /** @type {?|undefined} */
        PageQueryParams.prototype.filter;
        /** @type {?|undefined} */
        PageQueryParams.prototype.sorting;
        /** @type {?|undefined} */
        PageQueryParams.prototype.skipCount;
        /** @type {?|undefined} */
        PageQueryParams.prototype.maxResultCount;
    }
    /**
     * @record
     */
    function Route() { }
    ABP.Route = Route;
    if (false) {
        /** @type {?|undefined} */
        Route.prototype.children;
        /** @type {?|undefined} */
        Route.prototype.invisible;
        /** @type {?|undefined} */
        Route.prototype.layout;
        /** @type {?} */
        Route.prototype.name;
        /** @type {?|undefined} */
        Route.prototype.order;
        /** @type {?|undefined} */
        Route.prototype.parentName;
        /** @type {?} */
        Route.prototype.path;
        /** @type {?|undefined} */
        Route.prototype.requiredPolicy;
        /** @type {?|undefined} */
        Route.prototype.iconClass;
    }
    /**
     * @record
     */
    function FullRoute() { }
    ABP.FullRoute = FullRoute;
    if (false) {
        /** @type {?|undefined} */
        FullRoute.prototype.url;
        /** @type {?|undefined} */
        FullRoute.prototype.wrapper;
    }
    /**
     * @record
     */
    function BasicItem() { }
    ABP.BasicItem = BasicItem;
    if (false) {
        /** @type {?} */
        BasicItem.prototype.id;
        /** @type {?} */
        BasicItem.prototype.name;
    }
    /**
     * @record
     * @template T
     */
    function Dictionary() { }
    ABP.Dictionary = Dictionary;
})(ABP || (ABP = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxNQUFNLEtBQVcsR0FBRyxDQWtEbkI7QUFsREQsV0FBaUIsR0FBRzs7OztJQUNsQixtQkFHQzs7OztRQUZDLDJCQUF5Qzs7UUFDekMsNEJBQWtDOzs7Ozs7SUFPcEMsaUNBRUM7Ozs7UUFEQyxtQ0FBVzs7Ozs7SUFHYiw4QkFLQzs7OztRQUpDLGlDQUFnQjs7UUFDaEIsa0NBQWlCOztRQUNqQixvQ0FBbUI7O1FBQ25CLHlDQUF3Qjs7Ozs7SUFHMUIsb0JBVUM7Ozs7UUFUQyx5QkFBbUI7O1FBQ25CLDBCQUFvQjs7UUFDcEIsdUJBQXFCOztRQUNyQixxQkFBYTs7UUFDYixzQkFBZTs7UUFDZiwyQkFBb0I7O1FBQ3BCLHFCQUFhOztRQUNiLCtCQUF3Qjs7UUFDeEIsMEJBQW1COzs7OztJQUdyQix3QkFHQzs7OztRQUZDLHdCQUFhOztRQUNiLDRCQUFrQjs7Ozs7SUFHcEIsd0JBR0M7Ozs7UUFGQyx1QkFBVzs7UUFDWCx5QkFBYTs7Ozs7O0lBR2YseUJBRUM7O0FBS0gsQ0FBQyxFQWxEZ0IsR0FBRyxLQUFILEdBQUcsUUFrRG5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZUxheW91dFR5cGUgfSBmcm9tICcuLi9lbnVtcy9jb21tb24nO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFCUCB7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBSb290IHtcclxuICAgIGVudmlyb25tZW50OiBQYXJ0aWFsPENvbmZpZy5FbnZpcm9ubWVudD47XHJcbiAgICByZXF1aXJlbWVudHM6IENvbmZpZy5SZXF1aXJlbWVudHM7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgdHlwZSBQYWdlZFJlc3BvbnNlPFQ+ID0ge1xyXG4gICAgdG90YWxDb3VudDogbnVtYmVyO1xyXG4gIH0gJiBQYWdlZEl0ZW1zUmVzcG9uc2U8VD47XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGFnZWRJdGVtc1Jlc3BvbnNlPFQ+IHtcclxuICAgIGl0ZW1zOiBUW107XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIFBhZ2VRdWVyeVBhcmFtcyB7XHJcbiAgICBmaWx0ZXI/OiBzdHJpbmc7XHJcbiAgICBzb3J0aW5nPzogc3RyaW5nO1xyXG4gICAgc2tpcENvdW50PzogbnVtYmVyO1xyXG4gICAgbWF4UmVzdWx0Q291bnQ/OiBudW1iZXI7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIFJvdXRlIHtcclxuICAgIGNoaWxkcmVuPzogUm91dGVbXTtcclxuICAgIGludmlzaWJsZT86IGJvb2xlYW47XHJcbiAgICBsYXlvdXQ/OiBlTGF5b3V0VHlwZTtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG9yZGVyPzogbnVtYmVyO1xyXG4gICAgcGFyZW50TmFtZT86IHN0cmluZztcclxuICAgIHBhdGg6IHN0cmluZztcclxuICAgIHJlcXVpcmVkUG9saWN5Pzogc3RyaW5nO1xyXG4gICAgaWNvbkNsYXNzPzogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBGdWxsUm91dGUgZXh0ZW5kcyBSb3V0ZSB7XHJcbiAgICB1cmw/OiBzdHJpbmc7XHJcbiAgICB3cmFwcGVyPzogYm9vbGVhbjtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgQmFzaWNJdGVtIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIERpY3Rpb25hcnk8VCA9IGFueT4ge1xyXG4gICAgW2tleTogc3RyaW5nXTogVDtcclxuICB9XHJcblxyXG4gIGV4cG9ydCB0eXBlIEV4dHJhY3RGcm9tT3V0cHV0PFxyXG4gICAgVCBleHRlbmRzIEV2ZW50RW1pdHRlcjxhbnk+IHwgU3ViamVjdDxhbnk+XHJcbiAgPiA9IFQgZXh0ZW5kcyBFdmVudEVtaXR0ZXI8aW5mZXIgWD4gPyBYIDogVCBleHRlbmRzIFN1YmplY3Q8aW5mZXIgWT4gPyBZIDogbmV2ZXI7XHJcbn1cclxuIl19