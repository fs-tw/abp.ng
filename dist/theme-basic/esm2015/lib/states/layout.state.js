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
let LayoutState = class LayoutState {
    /**
     * @param {?} __0
     * @return {?}
     */
    static getNavigationElements({ navigationElements }) {
        return navigationElements;
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    layoutAddAction({ getState, patchState }, { payload = [] }) {
        let { navigationElements } = getState();
        if (!Array.isArray(payload)) {
            payload = [payload];
        }
        if (navigationElements.length) {
            payload = snq((/**
             * @return {?}
             */
            () => ((/** @type {?} */ (payload))).filter((/**
             * @param {?} __0
             * @return {?}
             */
            ({ name }) => navigationElements.findIndex((/**
             * @param {?} nav
             * @return {?}
             */
            nav => nav.name === name)) < 0))), []);
        }
        if (!payload.length)
            return;
        navigationElements = [...navigationElements, ...payload]
            .map((/**
         * @param {?} element
         * @return {?}
         */
        element => (Object.assign({}, element, { order: element.order || 99 }))))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.order - b.order));
        return patchState({
            navigationElements,
        });
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    layoutRemoveAction({ getState, patchState }, { name }) {
        let { navigationElements } = getState();
        /** @type {?} */
        const index = navigationElements.findIndex((/**
         * @param {?} element
         * @return {?}
         */
        element => element.name === name));
        if (index > -1) {
            navigationElements = navigationElements.splice(index, 1);
        }
        return patchState({
            navigationElements,
        });
    }
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
export { LayoutState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvbGF5b3V0LnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBZ0IsTUFBTSxhQUFhLENBQUM7QUFDcEUsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7SUFPOUIsV0FBVyxTQUFYLFdBQVc7Ozs7O0lBRXRCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLGtCQUFrQixFQUFnQjtRQUMvRCxPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUdELGVBQWUsQ0FDYixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQThCLEVBQ3BELEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBd0I7WUFFbEMsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLFFBQVEsRUFBRTtRQUV2QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtRQUVELElBQUksa0JBQWtCLENBQUMsTUFBTSxFQUFFO1lBQzdCLE9BQU8sR0FBRyxHQUFHOzs7WUFDWCxHQUFHLEVBQUUsQ0FDSCxDQUFDLG1CQUFBLE9BQU8sRUFBOEIsQ0FBQyxDQUFDLE1BQU07Ozs7WUFDNUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksRUFBQyxHQUFHLENBQUMsRUFDekUsR0FDSCxFQUFFLENBQ0gsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUU1QixrQkFBa0IsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLEVBQUUsR0FBRyxPQUFPLENBQUM7YUFDckQsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQU0sT0FBTyxJQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBRyxFQUFDO2FBQzVELElBQUk7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUVyQyxPQUFPLFVBQVUsQ0FBQztZQUNoQixrQkFBa0I7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBR0Qsa0JBQWtCLENBQ2hCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBOEIsRUFDcEQsRUFBRSxJQUFJLEVBQWlDO1lBRW5DLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxRQUFRLEVBQUU7O2NBRWpDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksRUFBQztRQUU1RSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxPQUFPLFVBQVUsQ0FBQztZQUNoQixrQkFBa0I7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7O1lBeERBLFVBQVU7O0FBUVQ7SUFEQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7O3FEQUdULG9CQUFvQjs7a0RBMkJ2QztBQUdEO0lBREMsTUFBTSxDQUFDLDZCQUE2QixDQUFDOztxREFHMUIsNkJBQTZCOztxREFheEM7QUFwREQ7SUFEQyxRQUFRLEVBQUU7Ozs7OENBR1Y7QUFKVSxXQUFXO0lBTHZCLEtBQUssQ0FBZTtRQUNuQixJQUFJLEVBQUUsYUFBYTtRQUNuQixRQUFRLEVBQUUsbUJBQUEsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsRUFBZ0I7S0FDckQsQ0FBQztHQUVXLFdBQVcsQ0F1RHZCO1NBdkRZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEFkZE5hdmlnYXRpb25FbGVtZW50LCBSZW1vdmVOYXZpZ2F0aW9uRWxlbWVudEJ5TmFtZSB9IGZyb20gJy4uL2FjdGlvbnMvbGF5b3V0LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9tb2RlbHMvbGF5b3V0JztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFN0YXRlPExheW91dC5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdMYXlvdXRTdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgbmF2aWdhdGlvbkVsZW1lbnRzOiBbXSB9IGFzIExheW91dC5TdGF0ZSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0U3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldE5hdmlnYXRpb25FbGVtZW50cyh7IG5hdmlnYXRpb25FbGVtZW50cyB9OiBMYXlvdXQuU3RhdGUpOiBMYXlvdXQuTmF2aWdhdGlvbkVsZW1lbnRbXSB7XHJcbiAgICByZXR1cm4gbmF2aWdhdGlvbkVsZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihBZGROYXZpZ2F0aW9uRWxlbWVudClcclxuICBsYXlvdXRBZGRBY3Rpb24oXHJcbiAgICB7IGdldFN0YXRlLCBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxMYXlvdXQuU3RhdGU+LFxyXG4gICAgeyBwYXlsb2FkID0gW10gfTogQWRkTmF2aWdhdGlvbkVsZW1lbnQsXHJcbiAgKSB7XHJcbiAgICBsZXQgeyBuYXZpZ2F0aW9uRWxlbWVudHMgfSA9IGdldFN0YXRlKCk7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBheWxvYWQpKSB7XHJcbiAgICAgIHBheWxvYWQgPSBbcGF5bG9hZF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5hdmlnYXRpb25FbGVtZW50cy5sZW5ndGgpIHtcclxuICAgICAgcGF5bG9hZCA9IHNucShcclxuICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgKHBheWxvYWQgYXMgTGF5b3V0Lk5hdmlnYXRpb25FbGVtZW50W10pLmZpbHRlcihcclxuICAgICAgICAgICAgKHsgbmFtZSB9KSA9PiBuYXZpZ2F0aW9uRWxlbWVudHMuZmluZEluZGV4KG5hdiA9PiBuYXYubmFtZSA9PT0gbmFtZSkgPCAwLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICBbXSxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBheWxvYWQubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgbmF2aWdhdGlvbkVsZW1lbnRzID0gWy4uLm5hdmlnYXRpb25FbGVtZW50cywgLi4ucGF5bG9hZF1cclxuICAgICAgLm1hcChlbGVtZW50ID0+ICh7IC4uLmVsZW1lbnQsIG9yZGVyOiBlbGVtZW50Lm9yZGVyIHx8IDk5IH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG5cclxuICAgIHJldHVybiBwYXRjaFN0YXRlKHtcclxuICAgICAgbmF2aWdhdGlvbkVsZW1lbnRzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFJlbW92ZU5hdmlnYXRpb25FbGVtZW50QnlOYW1lKVxyXG4gIGxheW91dFJlbW92ZUFjdGlvbihcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PExheW91dC5TdGF0ZT4sXHJcbiAgICB7IG5hbWUgfTogUmVtb3ZlTmF2aWdhdGlvbkVsZW1lbnRCeU5hbWUsXHJcbiAgKSB7XHJcbiAgICBsZXQgeyBuYXZpZ2F0aW9uRWxlbWVudHMgfSA9IGdldFN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBuYXZpZ2F0aW9uRWxlbWVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBuYW1lKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICBuYXZpZ2F0aW9uRWxlbWVudHMgPSBuYXZpZ2F0aW9uRWxlbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIG5hdmlnYXRpb25FbGVtZW50cyxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=