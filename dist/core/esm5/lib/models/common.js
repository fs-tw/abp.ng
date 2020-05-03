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
        /**
         *
         * @deprecated To be deleted in v3.0
         * @type {?|undefined}
         */
        Root.prototype.requirements;
        /** @type {?|undefined} */
        Root.prototype.skipGetAppConfiguration;
    }
    /**
     * @record
     */
    function Test() { }
    ABP.Test = Test;
    if (false) {
        /** @type {?|undefined} */
        Test.prototype.baseHref;
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
    function Option() { }
    ABP.Option = Option;
    if (false) {
        /** @type {?} */
        Option.prototype.key;
        /** @type {?} */
        Option.prototype.value;
    }
    /**
     * @record
     * @template T
     */
    function Dictionary() { }
    ABP.Dictionary = Dictionary;
})(ABP || (ABP = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxNQUFNLEtBQVcsR0FBRyxDQWdFbkI7QUFoRUQsV0FBaUIsR0FBRzs7OztJQUNsQixtQkFRQzs7OztRQVBDLDJCQUF5Qzs7Ozs7O1FBS3pDLDRCQUFtQzs7UUFDbkMsdUNBQWtDOzs7OztJQUdwQyxtQkFFQzs7OztRQURDLHdCQUFrQjs7Ozs7O0lBT3BCLGlDQUVDOzs7O1FBREMsbUNBQVc7Ozs7O0lBR2IsOEJBS0M7Ozs7UUFKQyxpQ0FBZ0I7O1FBQ2hCLGtDQUFpQjs7UUFDakIsb0NBQW1COztRQUNuQix5Q0FBd0I7Ozs7O0lBRzFCLG9CQVVDOzs7O1FBVEMseUJBQW1COztRQUNuQiwwQkFBb0I7O1FBQ3BCLHVCQUFxQjs7UUFDckIscUJBQWE7O1FBQ2Isc0JBQWU7O1FBQ2YsMkJBQW9COztRQUNwQixxQkFBYTs7UUFDYiwrQkFBd0I7O1FBQ3hCLDBCQUFtQjs7Ozs7SUFHckIsd0JBR0M7Ozs7UUFGQyx3QkFBYTs7UUFDYiw0QkFBa0I7Ozs7O0lBR3BCLHdCQUdDOzs7O1FBRkMsdUJBQVc7O1FBQ1gseUJBQWE7Ozs7OztJQUdmLHFCQUdDOzs7O1FBRkMscUJBQThCOztRQUM5Qix1QkFBbUM7Ozs7OztJQUdyQyx5QkFFQzs7QUFLSCxDQUFDLEVBaEVnQixHQUFHLEtBQUgsR0FBRyxRQWdFbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBlTGF5b3V0VHlwZSB9IGZyb20gJy4uL2VudW1zL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQUJQIHtcclxuICBleHBvcnQgaW50ZXJmYWNlIFJvb3Qge1xyXG4gICAgZW52aXJvbm1lbnQ6IFBhcnRpYWw8Q29uZmlnLkVudmlyb25tZW50PjtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBkZXByZWNhdGVkIFRvIGJlIGRlbGV0ZWQgaW4gdjMuMFxyXG4gICAgICovXHJcbiAgICByZXF1aXJlbWVudHM/OiBDb25maWcuUmVxdWlyZW1lbnRzO1xyXG4gICAgc2tpcEdldEFwcENvbmZpZ3VyYXRpb24/OiBib29sZWFuO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBUZXN0IHtcclxuICAgIGJhc2VIcmVmPzogUm91dGVyO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IHR5cGUgUGFnZWRSZXNwb25zZTxUPiA9IHtcclxuICAgIHRvdGFsQ291bnQ6IG51bWJlcjtcclxuICB9ICYgUGFnZWRJdGVtc1Jlc3BvbnNlPFQ+O1xyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIFBhZ2VkSXRlbXNSZXNwb25zZTxUPiB7XHJcbiAgICBpdGVtczogVFtdO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBQYWdlUXVlcnlQYXJhbXMge1xyXG4gICAgZmlsdGVyPzogc3RyaW5nO1xyXG4gICAgc29ydGluZz86IHN0cmluZztcclxuICAgIHNraXBDb3VudD86IG51bWJlcjtcclxuICAgIG1heFJlc3VsdENvdW50PzogbnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBSb3V0ZSB7XHJcbiAgICBjaGlsZHJlbj86IFJvdXRlW107XHJcbiAgICBpbnZpc2libGU/OiBib29sZWFuO1xyXG4gICAgbGF5b3V0PzogZUxheW91dFR5cGU7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcmRlcj86IG51bWJlcjtcclxuICAgIHBhcmVudE5hbWU/OiBzdHJpbmc7XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbiAgICByZXF1aXJlZFBvbGljeT86IHN0cmluZztcclxuICAgIGljb25DbGFzcz86IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgRnVsbFJvdXRlIGV4dGVuZHMgUm91dGUge1xyXG4gICAgdXJsPzogc3RyaW5nO1xyXG4gICAgd3JhcHBlcj86IGJvb2xlYW47XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIEJhc2ljSXRlbSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBPcHRpb248VD4ge1xyXG4gICAga2V5OiBFeHRyYWN0PGtleW9mIFQsIHN0cmluZz47XHJcbiAgICB2YWx1ZTogVFtFeHRyYWN0PGtleW9mIFQsIHN0cmluZz5dO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBEaWN0aW9uYXJ5PFQgPSBhbnk+IHtcclxuICAgIFtrZXk6IHN0cmluZ106IFQ7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgdHlwZSBFeHRyYWN0RnJvbU91dHB1dDxcclxuICAgIFQgZXh0ZW5kcyBFdmVudEVtaXR0ZXI8YW55PiB8IFN1YmplY3Q8YW55PlxyXG4gID4gPSBUIGV4dGVuZHMgRXZlbnRFbWl0dGVyPGluZmVyIFg+ID8gWCA6IFQgZXh0ZW5kcyBTdWJqZWN0PGluZmVyIFk+ID8gWSA6IG5ldmVyO1xyXG59XHJcbiJdfQ==