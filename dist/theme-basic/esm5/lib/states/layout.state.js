/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/layout.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import snq from 'snq';
import { AddNavigationElement, RemoveNavigationElementByName } from '../actions/layout.actions';
var LayoutState = /** @class */ (function () {
    function LayoutState() {
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    LayoutState.getNavigationElements = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var navigationElements = _a.navigationElements;
        return navigationElements;
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    LayoutState.prototype.layoutAddAction = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var _c = _b.payload, payload = _c === void 0 ? [] : _c;
        var navigationElements = getState().navigationElements;
        if (!Array.isArray(payload)) {
            payload = [payload];
        }
        if (navigationElements.length) {
            payload = snq((/**
             * @return {?}
             */
            function () {
                return ((/** @type {?} */ (payload))).filter((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var name = _a.name;
                    return navigationElements.findIndex((/**
                     * @param {?} nav
                     * @return {?}
                     */
                    function (nav) { return nav.name === name; })) < 0;
                }));
            }), []);
        }
        if (!payload.length)
            return;
        navigationElements = tslib_1.__spread(navigationElements, payload).map((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return (tslib_1.__assign({}, element, { order: element.order || 99 })); }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.order - b.order; }));
        return patchState({
            navigationElements: navigationElements,
        });
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    LayoutState.prototype.layoutRemoveAction = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var name = _b.name;
        var navigationElements = getState().navigationElements;
        /** @type {?} */
        var index = navigationElements.findIndex((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element.name === name; }));
        if (index > -1) {
            navigationElements = navigationElements.splice(index, 1);
        }
        return patchState({
            navigationElements: navigationElements,
        });
    };
    tslib_1.__decorate([
        Action(AddNavigationElement),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, AddNavigationElement]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LayoutState.prototype, "layoutAddAction", null);
    tslib_1.__decorate([
        Action(RemoveNavigationElementByName),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, RemoveNavigationElementByName]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LayoutState.prototype, "layoutRemoveAction", null);
    tslib_1.__decorate([
        Selector(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Array)
    ], LayoutState, "getNavigationElements", null);
    LayoutState = tslib_1.__decorate([
        State({
            name: 'LayoutState',
            defaults: (/** @type {?} */ ({ navigationElements: [] })),
        })
    ], LayoutState);
    return LayoutState;
}());
export { LayoutState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvbGF5b3V0LnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBZ0IsTUFBTSxhQUFhLENBQUM7QUFDcEUsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7SUE4RGhHLENBQUM7Ozs7O0lBckRRLGlDQUFxQjs7OztJQUE1QixVQUE2QixFQUFvQztZQUFsQywwQ0FBa0I7UUFDL0MsT0FBTyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFHRCxxQ0FBZTs7Ozs7SUFBZixVQUNFLEVBQW9ELEVBQ3BELEVBQXNDO1lBRHBDLHNCQUFRLEVBQUUsMEJBQVU7WUFDcEIsZUFBWSxFQUFaLGlDQUFZO1FBRVIsSUFBQSxrREFBa0I7UUFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7UUFFRCxJQUFJLGtCQUFrQixDQUFDLE1BQU0sRUFBRTtZQUM3QixPQUFPLEdBQUcsR0FBRzs7O1lBQ1g7Z0JBQ0UsT0FBQSxDQUFDLG1CQUFBLE9BQU8sRUFBOEIsQ0FBQyxDQUFDLE1BQU07Ozs7Z0JBQzVDLFVBQUMsRUFBUTt3QkFBTixjQUFJO29CQUFPLE9BQUEsa0JBQWtCLENBQUMsU0FBUzs7OztvQkFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFqQixDQUFpQixFQUFDLEdBQUcsQ0FBQztnQkFBMUQsQ0FBMEQsRUFDekU7WUFGRCxDQUVDLEdBQ0gsRUFBRSxDQUNILENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUFFLE9BQU87UUFFNUIsa0JBQWtCLEdBQUcsaUJBQUksa0JBQWtCLEVBQUssT0FBTyxFQUNwRCxHQUFHOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxzQkFBTSxPQUFPLElBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxJQUFHLEVBQTVDLENBQTRDLEVBQUM7YUFDNUQsSUFBSTs7Ozs7UUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLEVBQUMsQ0FBQztRQUVyQyxPQUFPLFVBQVUsQ0FBQztZQUNoQixrQkFBa0Isb0JBQUE7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBR0Qsd0NBQWtCOzs7OztJQUFsQixVQUNFLEVBQW9ELEVBQ3BELEVBQXVDO1lBRHJDLHNCQUFRLEVBQUUsMEJBQVU7WUFDcEIsY0FBSTtRQUVBLElBQUEsa0RBQWtCOztZQUVsQixLQUFLLEdBQUcsa0JBQWtCLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQXJCLENBQXFCLEVBQUM7UUFFNUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBRUQsT0FBTyxVQUFVLENBQUM7WUFDaEIsa0JBQWtCLG9CQUFBO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUEvQ0Q7UUFEQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7O3lEQUdULG9CQUFvQjs7c0RBMkJ2QztJQUdEO1FBREMsTUFBTSxDQUFDLDZCQUE2QixDQUFDOzt5REFHMUIsNkJBQTZCOzt5REFheEM7SUFwREQ7UUFEQyxRQUFRLEVBQUU7Ozs7a0RBR1Y7SUFKVSxXQUFXO1FBSnZCLEtBQUssQ0FBZTtZQUNuQixJQUFJLEVBQUUsYUFBYTtZQUNuQixRQUFRLEVBQUUsbUJBQUEsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsRUFBZ0I7U0FDckQsQ0FBQztPQUNXLFdBQVcsQ0F1RHZCO0lBQUQsa0JBQUM7Q0FBQSxJQUFBO1NBdkRZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEFkZE5hdmlnYXRpb25FbGVtZW50LCBSZW1vdmVOYXZpZ2F0aW9uRWxlbWVudEJ5TmFtZSB9IGZyb20gJy4uL2FjdGlvbnMvbGF5b3V0LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9tb2RlbHMvbGF5b3V0JztcclxuXHJcbkBTdGF0ZTxMYXlvdXQuU3RhdGU+KHtcclxuICBuYW1lOiAnTGF5b3V0U3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IG5hdmlnYXRpb25FbGVtZW50czogW10gfSBhcyBMYXlvdXQuU3RhdGUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRTdGF0ZSB7XHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0TmF2aWdhdGlvbkVsZW1lbnRzKHsgbmF2aWdhdGlvbkVsZW1lbnRzIH06IExheW91dC5TdGF0ZSk6IExheW91dC5OYXZpZ2F0aW9uRWxlbWVudFtdIHtcclxuICAgIHJldHVybiBuYXZpZ2F0aW9uRWxlbWVudHM7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKEFkZE5hdmlnYXRpb25FbGVtZW50KVxyXG4gIGxheW91dEFkZEFjdGlvbihcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PExheW91dC5TdGF0ZT4sXHJcbiAgICB7IHBheWxvYWQgPSBbXSB9OiBBZGROYXZpZ2F0aW9uRWxlbWVudCxcclxuICApIHtcclxuICAgIGxldCB7IG5hdmlnYXRpb25FbGVtZW50cyB9ID0gZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocGF5bG9hZCkpIHtcclxuICAgICAgcGF5bG9hZCA9IFtwYXlsb2FkXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmF2aWdhdGlvbkVsZW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICBwYXlsb2FkID0gc25xKFxyXG4gICAgICAgICgpID0+XHJcbiAgICAgICAgICAocGF5bG9hZCBhcyBMYXlvdXQuTmF2aWdhdGlvbkVsZW1lbnRbXSkuZmlsdGVyKFxyXG4gICAgICAgICAgICAoeyBuYW1lIH0pID0+IG5hdmlnYXRpb25FbGVtZW50cy5maW5kSW5kZXgobmF2ID0+IG5hdi5uYW1lID09PSBuYW1lKSA8IDAsXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIFtdLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGF5bG9hZC5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBuYXZpZ2F0aW9uRWxlbWVudHMgPSBbLi4ubmF2aWdhdGlvbkVsZW1lbnRzLCAuLi5wYXlsb2FkXVxyXG4gICAgICAubWFwKGVsZW1lbnQgPT4gKHsgLi4uZWxlbWVudCwgb3JkZXI6IGVsZW1lbnQub3JkZXIgfHwgOTkgfSkpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcblxyXG4gICAgcmV0dXJuIHBhdGNoU3RhdGUoe1xyXG4gICAgICBuYXZpZ2F0aW9uRWxlbWVudHMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oUmVtb3ZlTmF2aWdhdGlvbkVsZW1lbnRCeU5hbWUpXHJcbiAgbGF5b3V0UmVtb3ZlQWN0aW9uKFxyXG4gICAgeyBnZXRTdGF0ZSwgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8TGF5b3V0LlN0YXRlPixcclxuICAgIHsgbmFtZSB9OiBSZW1vdmVOYXZpZ2F0aW9uRWxlbWVudEJ5TmFtZSxcclxuICApIHtcclxuICAgIGxldCB7IG5hdmlnYXRpb25FbGVtZW50cyB9ID0gZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IG5hdmlnYXRpb25FbGVtZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IG5hbWUpO1xyXG5cclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIG5hdmlnYXRpb25FbGVtZW50cyA9IG5hdmlnYXRpb25FbGVtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRjaFN0YXRlKHtcclxuICAgICAgbmF2aWdhdGlvbkVsZW1lbnRzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==