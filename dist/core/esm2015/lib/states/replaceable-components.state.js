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
import { Injectable } from '@angular/core';
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
ReplaceableComponentsState.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdCLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFcEYsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7SUFPOUIsMEJBQTBCLHdDQUExQiwwQkFBMEI7Ozs7O0lBRXJDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFDWixxQkFBcUIsR0FDTztRQUM1QixPQUFPLHFCQUFxQixJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBVzs7Y0FDdkIsUUFBUSxHQUFHLGNBQWMsQ0FDN0IsQ0FBQyw0QkFBMEIsQ0FBQzs7OztRQUM1QixDQUFDLEtBQWtDLEVBQThDLEVBQUU7WUFDakYsT0FBTyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsSUFBSTs7OztZQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUMsRUFBQyxDQUFDO1FBQ3pGLENBQUMsRUFDRjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUdELDJCQUEyQixDQUN6QixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQTZDLEVBQ25FLEVBQUUsT0FBTyxFQUEyQjtZQUVoQyxFQUFFLHFCQUFxQixFQUFFLEdBQUcsUUFBUSxFQUFFOztjQUVwQyxLQUFLLEdBQUcsR0FBRzs7O1FBQ2YsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsU0FBUzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFDLEdBQ2pGLENBQUMsQ0FBQyxDQUNIO1FBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDeEM7YUFBTTtZQUNMLHFCQUFxQixHQUFHLENBQUMsR0FBRyxxQkFBcUIsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3RDtRQUVELFVBQVUsQ0FBQztZQUNULHFCQUFxQjtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7WUF6Q0EsVUFBVTs7QUFxQlQ7SUFEQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7O3FEQUdqQix1QkFBdUI7OzZFQWlCckM7QUFyQ0Q7SUFEQyxRQUFRLEVBQUU7Ozs7OENBS1Y7QUFOVSwwQkFBMEI7SUFMdEMsS0FBSyxDQUE4QjtRQUNsQyxJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLFFBQVEsRUFBRSxtQkFBQSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsRUFBRSxFQUErQjtLQUN2RSxDQUFDO0dBRVcsMEJBQTBCLENBd0N0QztTQXhDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZSwgQWN0aW9uLCBTdGF0ZUNvbnRleHQsIFNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgQWRkUmVwbGFjZWFibGVDb21wb25lbnQgfSBmcm9tICcuLi9hY3Rpb25zL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFJlcGxhY2VhYmxlQ29tcG9uZW50cyB9IGZyb20gJy4uL21vZGVscy9yZXBsYWNlYWJsZS1jb21wb25lbnRzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AU3RhdGU8UmVwbGFjZWFibGVDb21wb25lbnRzLlN0YXRlPih7XHJcbiAgbmFtZTogJ1JlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlJyxcclxuICBkZWZhdWx0czogeyByZXBsYWNlYWJsZUNvbXBvbmVudHM6IFtdIH0gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZSB7XHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0QWxsKHtcclxuICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50cyxcclxuICB9OiBSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGUpOiBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUmVwbGFjZWFibGVDb21wb25lbnRbXSB7XHJcbiAgICByZXR1cm4gcmVwbGFjZWFibGVDb21wb25lbnRzIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldENvbXBvbmVudChrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgICAgW1JlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlXSxcclxuICAgICAgKHN0YXRlOiBSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGUpOiBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUmVwbGFjZWFibGVDb21wb25lbnQgPT4ge1xyXG4gICAgICAgIHJldHVybiBzbnEoKCkgPT4gc3RhdGUucmVwbGFjZWFibGVDb21wb25lbnRzLmZpbmQoY29tcG9uZW50ID0+IGNvbXBvbmVudC5rZXkgPT09IGtleSkpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KVxyXG4gIHJlcGxhY2VhYmxlQ29tcG9uZW50c0FjdGlvbihcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFJlcGxhY2VhYmxlQ29tcG9uZW50cy5TdGF0ZT4sXHJcbiAgICB7IHBheWxvYWQgfTogQWRkUmVwbGFjZWFibGVDb21wb25lbnQsXHJcbiAgKSB7XHJcbiAgICBsZXQgeyByZXBsYWNlYWJsZUNvbXBvbmVudHMgfSA9IGdldFN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBzbnEoXHJcbiAgICAgICgpID0+IHJlcGxhY2VhYmxlQ29tcG9uZW50cy5maW5kSW5kZXgoY29tcG9uZW50ID0+IGNvbXBvbmVudC5rZXkgPT09IHBheWxvYWQua2V5KSxcclxuICAgICAgLTEsXHJcbiAgICApO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgcmVwbGFjZWFibGVDb21wb25lbnRzW2luZGV4XSA9IHBheWxvYWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXBsYWNlYWJsZUNvbXBvbmVudHMgPSBbLi4ucmVwbGFjZWFibGVDb21wb25lbnRzLCBwYXlsb2FkXTtcclxuICAgIH1cclxuXHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgcmVwbGFjZWFibGVDb21wb25lbnRzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==