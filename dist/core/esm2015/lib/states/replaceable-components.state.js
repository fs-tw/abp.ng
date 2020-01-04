var ReplaceableComponentsState_1;
/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/replaceable-components.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { State, Action, Selector, createSelector } from '@ngxs/store';
import { AddReplaceableComponent } from '../actions/replaceable-components.actions';
import snq from 'snq';
let ReplaceableComponentsState = ReplaceableComponentsState_1 = class ReplaceableComponentsState {
    /**
     * @param {?} __0
     * @return {?}
     */
    static getAll({ replaceableComponents, }) {
        return replaceableComponents || [];
    }
    /**
     * @param {?} key
     * @return {?}
     */
    static getComponent(key) {
        /** @type {?} */
        const selector = createSelector([ReplaceableComponentsState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            return snq((/**
             * @return {?}
             */
            () => state.replaceableComponents.find((/**
             * @param {?} component
             * @return {?}
             */
            component => component.key === key))));
        }));
        return selector;
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    replaceableComponentsAction({ getState, patchState }, { payload }) {
        let { replaceableComponents } = getState();
        /** @type {?} */
        const index = snq((/**
         * @return {?}
         */
        () => replaceableComponents.findIndex((/**
         * @param {?} component
         * @return {?}
         */
        component => component.key === payload.key))), -1);
        if (index > -1) {
            replaceableComponents[index] = payload;
        }
        else {
            replaceableComponents = [...replaceableComponents, payload];
        }
        patchState({
            replaceableComponents,
        });
    }
};
tslib_1.__decorate([
    Action(AddReplaceableComponent),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, AddReplaceableComponent]),
    tslib_1.__metadata("design:returntype", void 0)
], ReplaceableComponentsState.prototype, "replaceableComponentsAction", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Array)
], ReplaceableComponentsState, "getAll", null);
ReplaceableComponentsState = ReplaceableComponentsState_1 = tslib_1.__decorate([
    State({
        name: 'ReplaceableComponentsState',
        defaults: (/** @type {?} */ ({ replaceableComponents: [] })),
    })
], ReplaceableComponentsState);
export { ReplaceableComponentsState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdCLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFcEYsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0lBTVQsMEJBQTBCLHdDQUExQiwwQkFBMEI7Ozs7O0lBRXJDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFDWixxQkFBcUIsR0FDTztRQUM1QixPQUFPLHFCQUFxQixJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBVzs7Y0FDdkIsUUFBUSxHQUFHLGNBQWMsQ0FDN0IsQ0FBQyw0QkFBMEIsQ0FBQzs7OztRQUM1QixDQUFDLEtBQWtDLEVBQThDLEVBQUU7WUFDakYsT0FBTyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsSUFBSTs7OztZQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUMsRUFBQyxDQUFDO1FBQ3pGLENBQUMsRUFDRjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUdELDJCQUEyQixDQUN6QixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQTZDLEVBQ25FLEVBQUUsT0FBTyxFQUEyQjtZQUVoQyxFQUFFLHFCQUFxQixFQUFFLEdBQUcsUUFBUSxFQUFFOztjQUVwQyxLQUFLLEdBQUcsR0FBRzs7O1FBQ2YsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsU0FBUzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFDLEdBQ2pGLENBQUMsQ0FBQyxDQUNIO1FBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDeEM7YUFBTTtZQUNMLHFCQUFxQixHQUFHLENBQUMsR0FBRyxxQkFBcUIsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3RDtRQUVELFVBQVUsQ0FBQztZQUNULHFCQUFxQjtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQXBCQztJQURDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQzs7cURBR2pCLHVCQUF1Qjs7NkVBaUJyQztBQXJDRDtJQURDLFFBQVEsRUFBRTs7Ozs4Q0FLVjtBQU5VLDBCQUEwQjtJQUp0QyxLQUFLLENBQThCO1FBQ2xDLElBQUksRUFBRSw0QkFBNEI7UUFDbEMsUUFBUSxFQUFFLG1CQUFBLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxFQUFFLEVBQStCO0tBQ3ZFLENBQUM7R0FDVywwQkFBMEIsQ0F3Q3RDO1NBeENZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlLCBBY3Rpb24sIFN0YXRlQ29udGV4dCwgU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2FjdGlvbnMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5hY3Rpb25zJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVDb21wb25lbnRzIH0gZnJvbSAnLi4vbW9kZWxzL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcblxyXG5AU3RhdGU8UmVwbGFjZWFibGVDb21wb25lbnRzLlN0YXRlPih7XHJcbiAgbmFtZTogJ1JlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlJyxcclxuICBkZWZhdWx0czogeyByZXBsYWNlYWJsZUNvbXBvbmVudHM6IFtdIH0gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlN0YXRlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldEFsbCh7XHJcbiAgICByZXBsYWNlYWJsZUNvbXBvbmVudHMsXHJcbiAgfTogUmVwbGFjZWFibGVDb21wb25lbnRzLlN0YXRlKTogUmVwbGFjZWFibGVDb21wb25lbnRzLlJlcGxhY2VhYmxlQ29tcG9uZW50W10ge1xyXG4gICAgcmV0dXJuIHJlcGxhY2VhYmxlQ29tcG9uZW50cyB8fCBbXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRDb21wb25lbnQoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgIFtSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZV0sXHJcbiAgICAgIChzdGF0ZTogUmVwbGFjZWFibGVDb21wb25lbnRzLlN0YXRlKTogUmVwbGFjZWFibGVDb21wb25lbnRzLlJlcGxhY2VhYmxlQ29tcG9uZW50ID0+IHtcclxuICAgICAgICByZXR1cm4gc25xKCgpID0+IHN0YXRlLnJlcGxhY2VhYmxlQ29tcG9uZW50cy5maW5kKGNvbXBvbmVudCA9PiBjb21wb25lbnQua2V5ID09PSBrZXkpKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihBZGRSZXBsYWNlYWJsZUNvbXBvbmVudClcclxuICByZXBsYWNlYWJsZUNvbXBvbmVudHNBY3Rpb24oXHJcbiAgICB7IGdldFN0YXRlLCBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGU+LFxyXG4gICAgeyBwYXlsb2FkIH06IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50LFxyXG4gICkge1xyXG4gICAgbGV0IHsgcmVwbGFjZWFibGVDb21wb25lbnRzIH0gPSBnZXRTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gc25xKFxyXG4gICAgICAoKSA9PiByZXBsYWNlYWJsZUNvbXBvbmVudHMuZmluZEluZGV4KGNvbXBvbmVudCA9PiBjb21wb25lbnQua2V5ID09PSBwYXlsb2FkLmtleSksXHJcbiAgICAgIC0xLFxyXG4gICAgKTtcclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50c1tpbmRleF0gPSBwYXlsb2FkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVwbGFjZWFibGVDb21wb25lbnRzID0gWy4uLnJlcGxhY2VhYmxlQ29tcG9uZW50cywgcGF5bG9hZF07XHJcbiAgICB9XHJcblxyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50cyxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=