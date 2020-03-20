/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/layout.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import snq from 'snq';
import { AddNavigationElement, RemoveNavigationElementByName } from '../actions/layout.actions';
import { Injectable } from '@angular/core';
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
    LayoutState.decorators = [
        { type: Injectable }
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvbGF5b3V0LnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBZ0IsTUFBTSxhQUFhLENBQUM7QUFDcEUsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQThEM0MsQ0FBQzs7Ozs7SUFyRFEsaUNBQXFCOzs7O0lBQTVCLFVBQTZCLEVBQW9DO1lBQWxDLDBDQUFrQjtRQUMvQyxPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUdELHFDQUFlOzs7OztJQUFmLFVBQ0UsRUFBb0QsRUFDcEQsRUFBc0M7WUFEcEMsc0JBQVEsRUFBRSwwQkFBVTtZQUNwQixlQUFZLEVBQVosaUNBQVk7UUFFUixJQUFBLGtEQUFrQjtRQUV4QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtRQUVELElBQUksa0JBQWtCLENBQUMsTUFBTSxFQUFFO1lBQzdCLE9BQU8sR0FBRyxHQUFHOzs7WUFDWDtnQkFDRSxPQUFBLENBQUMsbUJBQUEsT0FBTyxFQUE4QixDQUFDLENBQUMsTUFBTTs7OztnQkFDNUMsVUFBQyxFQUFRO3dCQUFOLGNBQUk7b0JBQU8sT0FBQSxrQkFBa0IsQ0FBQyxTQUFTOzs7O29CQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWpCLENBQWlCLEVBQUMsR0FBRyxDQUFDO2dCQUExRCxDQUEwRCxFQUN6RTtZQUZELENBRUMsR0FDSCxFQUFFLENBQ0gsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUU1QixrQkFBa0IsR0FBRyxpQkFBSSxrQkFBa0IsRUFBSyxPQUFPLEVBQ3BELEdBQUc7Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLHNCQUFNLE9BQU8sSUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUcsRUFBNUMsQ0FBNEMsRUFBQzthQUM1RCxJQUFJOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsRUFBQyxDQUFDO1FBRXJDLE9BQU8sVUFBVSxDQUFDO1lBQ2hCLGtCQUFrQixvQkFBQTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFHRCx3Q0FBa0I7Ozs7O0lBQWxCLFVBQ0UsRUFBb0QsRUFDcEQsRUFBdUM7WUFEckMsc0JBQVEsRUFBRSwwQkFBVTtZQUNwQixjQUFJO1FBRUEsSUFBQSxrREFBa0I7O1lBRWxCLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksRUFBckIsQ0FBcUIsRUFBQztRQUU1RSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxPQUFPLFVBQVUsQ0FBQztZQUNoQixrQkFBa0Isb0JBQUE7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdkRGLFVBQVU7O0lBUVQ7UUFEQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7O3lEQUdULG9CQUFvQjs7c0RBMkJ2QztJQUdEO1FBREMsTUFBTSxDQUFDLDZCQUE2QixDQUFDOzt5REFHMUIsNkJBQTZCOzt5REFheEM7SUFwREQ7UUFEQyxRQUFRLEVBQUU7Ozs7a0RBR1Y7SUFKVSxXQUFXO1FBTHZCLEtBQUssQ0FBZTtZQUNuQixJQUFJLEVBQUUsYUFBYTtZQUNuQixRQUFRLEVBQUUsbUJBQUEsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsRUFBZ0I7U0FDckQsQ0FBQztPQUVXLFdBQVcsQ0F1RHZCO0lBQUQsa0JBQUM7Q0FBQSxJQUFBO1NBdkRZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEFkZE5hdmlnYXRpb25FbGVtZW50LCBSZW1vdmVOYXZpZ2F0aW9uRWxlbWVudEJ5TmFtZSB9IGZyb20gJy4uL2FjdGlvbnMvbGF5b3V0LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9tb2RlbHMvbGF5b3V0JztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFN0YXRlPExheW91dC5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdMYXlvdXRTdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgbmF2aWdhdGlvbkVsZW1lbnRzOiBbXSB9IGFzIExheW91dC5TdGF0ZSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0U3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldE5hdmlnYXRpb25FbGVtZW50cyh7IG5hdmlnYXRpb25FbGVtZW50cyB9OiBMYXlvdXQuU3RhdGUpOiBMYXlvdXQuTmF2aWdhdGlvbkVsZW1lbnRbXSB7XHJcbiAgICByZXR1cm4gbmF2aWdhdGlvbkVsZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihBZGROYXZpZ2F0aW9uRWxlbWVudClcclxuICBsYXlvdXRBZGRBY3Rpb24oXHJcbiAgICB7IGdldFN0YXRlLCBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxMYXlvdXQuU3RhdGU+LFxyXG4gICAgeyBwYXlsb2FkID0gW10gfTogQWRkTmF2aWdhdGlvbkVsZW1lbnQsXHJcbiAgKSB7XHJcbiAgICBsZXQgeyBuYXZpZ2F0aW9uRWxlbWVudHMgfSA9IGdldFN0YXRlKCk7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBheWxvYWQpKSB7XHJcbiAgICAgIHBheWxvYWQgPSBbcGF5bG9hZF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5hdmlnYXRpb25FbGVtZW50cy5sZW5ndGgpIHtcclxuICAgICAgcGF5bG9hZCA9IHNucShcclxuICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgKHBheWxvYWQgYXMgTGF5b3V0Lk5hdmlnYXRpb25FbGVtZW50W10pLmZpbHRlcihcclxuICAgICAgICAgICAgKHsgbmFtZSB9KSA9PiBuYXZpZ2F0aW9uRWxlbWVudHMuZmluZEluZGV4KG5hdiA9PiBuYXYubmFtZSA9PT0gbmFtZSkgPCAwLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICBbXSxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBheWxvYWQubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgbmF2aWdhdGlvbkVsZW1lbnRzID0gWy4uLm5hdmlnYXRpb25FbGVtZW50cywgLi4ucGF5bG9hZF1cclxuICAgICAgLm1hcChlbGVtZW50ID0+ICh7IC4uLmVsZW1lbnQsIG9yZGVyOiBlbGVtZW50Lm9yZGVyIHx8IDk5IH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG5cclxuICAgIHJldHVybiBwYXRjaFN0YXRlKHtcclxuICAgICAgbmF2aWdhdGlvbkVsZW1lbnRzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFJlbW92ZU5hdmlnYXRpb25FbGVtZW50QnlOYW1lKVxyXG4gIGxheW91dFJlbW92ZUFjdGlvbihcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PExheW91dC5TdGF0ZT4sXHJcbiAgICB7IG5hbWUgfTogUmVtb3ZlTmF2aWdhdGlvbkVsZW1lbnRCeU5hbWUsXHJcbiAgKSB7XHJcbiAgICBsZXQgeyBuYXZpZ2F0aW9uRWxlbWVudHMgfSA9IGdldFN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBuYXZpZ2F0aW9uRWxlbWVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBuYW1lKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICBuYXZpZ2F0aW9uRWxlbWVudHMgPSBuYXZpZ2F0aW9uRWxlbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIG5hdmlnYXRpb25FbGVtZW50cyxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=