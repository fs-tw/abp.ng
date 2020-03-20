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
var ReplaceableComponentsState = /** @class */ (function () {
    function ReplaceableComponentsState() {
    }
    ReplaceableComponentsState_1 = ReplaceableComponentsState;
    /**
     * @param {?} __0
     * @return {?}
     */
    ReplaceableComponentsState.getAll = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var replaceableComponents = _a.replaceableComponents;
        return replaceableComponents || [];
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ReplaceableComponentsState.getComponent = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ReplaceableComponentsState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return snq((/**
             * @return {?}
             */
            function () { return state.replaceableComponents.find((/**
             * @param {?} component
             * @return {?}
             */
            function (component) { return component.key === key; })); }));
        }));
        return selector;
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    ReplaceableComponentsState.prototype.replaceableComponentsAction = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var payload = _b.payload;
        var replaceableComponents = getState().replaceableComponents;
        /** @type {?} */
        var index = snq((/**
         * @return {?}
         */
        function () { return replaceableComponents.findIndex((/**
         * @param {?} component
         * @return {?}
         */
        function (component) { return component.key === payload.key; })); }), -1);
        if (index > -1) {
            replaceableComponents[index] = payload;
        }
        else {
            replaceableComponents = tslib_1.__spread(replaceableComponents, [payload]);
        }
        patchState({
            replaceableComponents: replaceableComponents,
        });
    };
    var ReplaceableComponentsState_1;
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
    return ReplaceableComponentsState;
}());
export { ReplaceableComponentsState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZ0IsUUFBUSxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVwRixPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBK0MzQyxDQUFDO21DQXhDWSwwQkFBMEI7Ozs7O0lBRTlCLGlDQUFNOzs7O0lBQWIsVUFBYyxFQUVnQjtZQUQ1QixnREFBcUI7UUFFckIsT0FBTyxxQkFBcUIsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTSx1Q0FBWTs7OztJQUFuQixVQUFvQixHQUFXOztZQUN2QixRQUFRLEdBQUcsY0FBYyxDQUM3QixDQUFDLDRCQUEwQixDQUFDOzs7O1FBQzVCLFVBQUMsS0FBa0M7WUFDakMsT0FBTyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFyQixDQUFxQixFQUFDLEVBQXBFLENBQW9FLEVBQUMsQ0FBQztRQUN6RixDQUFDLEVBQ0Y7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFHRCxnRUFBMkI7Ozs7O0lBQTNCLFVBQ0UsRUFBbUUsRUFDbkUsRUFBb0M7WUFEbEMsc0JBQVEsRUFBRSwwQkFBVTtZQUNwQixvQkFBTztRQUVILElBQUEsd0RBQXFCOztZQUVyQixLQUFLLEdBQUcsR0FBRzs7O1FBQ2YsY0FBTSxPQUFBLHFCQUFxQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLEdBQUcsRUFBN0IsQ0FBNkIsRUFBQyxFQUEzRSxDQUEyRSxHQUNqRixDQUFDLENBQUMsQ0FDSDtRQUNELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2QscUJBQXFCLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxxQkFBcUIsb0JBQU8scUJBQXFCLEdBQUUsT0FBTyxFQUFDLENBQUM7U0FDN0Q7UUFFRCxVQUFVLENBQUM7WUFDVCxxQkFBcUIsdUJBQUE7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O2dCQXhDRixVQUFVOztJQXFCVDtRQURDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQzs7eURBR2pCLHVCQUF1Qjs7aUZBaUJyQztJQXJDRDtRQURDLFFBQVEsRUFBRTs7OztrREFLVjtJQU5VLDBCQUEwQjtRQUx0QyxLQUFLLENBQThCO1lBQ2xDLElBQUksRUFBRSw0QkFBNEI7WUFDbEMsUUFBUSxFQUFFLG1CQUFBLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxFQUFFLEVBQStCO1NBQ3ZFLENBQUM7T0FFVywwQkFBMEIsQ0F3Q3RDO0lBQUQsaUNBQUM7Q0FBQSxJQUFBO1NBeENZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlLCBBY3Rpb24sIFN0YXRlQ29udGV4dCwgU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2FjdGlvbnMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5hY3Rpb25zJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVDb21wb25lbnRzIH0gZnJvbSAnLi4vbW9kZWxzL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBTdGF0ZTxSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGU+KHtcclxuICBuYW1lOiAnUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IHJlcGxhY2VhYmxlQ29tcG9uZW50czogW10gfSBhcyBSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRBbGwoe1xyXG4gICAgcmVwbGFjZWFibGVDb21wb25lbnRzLFxyXG4gIH06IFJlcGxhY2VhYmxlQ29tcG9uZW50cy5TdGF0ZSk6IFJlcGxhY2VhYmxlQ29tcG9uZW50cy5SZXBsYWNlYWJsZUNvbXBvbmVudFtdIHtcclxuICAgIHJldHVybiByZXBsYWNlYWJsZUNvbXBvbmVudHMgfHwgW107XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Q29tcG9uZW50KGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgICBbUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGVdLFxyXG4gICAgICAoc3RhdGU6IFJlcGxhY2VhYmxlQ29tcG9uZW50cy5TdGF0ZSk6IFJlcGxhY2VhYmxlQ29tcG9uZW50cy5SZXBsYWNlYWJsZUNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNucSgoKSA9PiBzdGF0ZS5yZXBsYWNlYWJsZUNvbXBvbmVudHMuZmluZChjb21wb25lbnQgPT4gY29tcG9uZW50LmtleSA9PT0ga2V5KSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oQWRkUmVwbGFjZWFibGVDb21wb25lbnQpXHJcbiAgcmVwbGFjZWFibGVDb21wb25lbnRzQWN0aW9uKFxyXG4gICAgeyBnZXRTdGF0ZSwgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8UmVwbGFjZWFibGVDb21wb25lbnRzLlN0YXRlPixcclxuICAgIHsgcGF5bG9hZCB9OiBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCxcclxuICApIHtcclxuICAgIGxldCB7IHJlcGxhY2VhYmxlQ29tcG9uZW50cyB9ID0gZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IHNucShcclxuICAgICAgKCkgPT4gcmVwbGFjZWFibGVDb21wb25lbnRzLmZpbmRJbmRleChjb21wb25lbnQgPT4gY29tcG9uZW50LmtleSA9PT0gcGF5bG9hZC5rZXkpLFxyXG4gICAgICAtMSxcclxuICAgICk7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICByZXBsYWNlYWJsZUNvbXBvbmVudHNbaW5kZXhdID0gcGF5bG9hZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50cyA9IFsuLi5yZXBsYWNlYWJsZUNvbXBvbmVudHMsIHBheWxvYWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICByZXBsYWNlYWJsZUNvbXBvbmVudHMsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19