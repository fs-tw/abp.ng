/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/replaceable-components.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { State, Action, Selector, createSelector } from '@ngxs/store';
import { AddReplaceableComponent } from '../actions/replaceable-components.actions';
import snq from 'snq';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZ0IsUUFBUSxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVwRixPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7OztJQThDdEIsQ0FBQzttQ0F4Q1ksMEJBQTBCOzs7OztJQUU5QixpQ0FBTTs7OztJQUFiLFVBQWMsRUFFZ0I7WUFENUIsZ0RBQXFCO1FBRXJCLE9BQU8scUJBQXFCLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU0sdUNBQVk7Ozs7SUFBbkIsVUFBb0IsR0FBVzs7WUFDdkIsUUFBUSxHQUFHLGNBQWMsQ0FDN0IsQ0FBQyw0QkFBMEIsQ0FBQzs7OztRQUM1QixVQUFDLEtBQWtDO1lBQ2pDLE9BQU8sR0FBRzs7O1lBQUMsY0FBTSxPQUFBLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBckIsQ0FBcUIsRUFBQyxFQUFwRSxDQUFvRSxFQUFDLENBQUM7UUFDekYsQ0FBQyxFQUNGO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBR0QsZ0VBQTJCOzs7OztJQUEzQixVQUNFLEVBQW1FLEVBQ25FLEVBQW9DO1lBRGxDLHNCQUFRLEVBQUUsMEJBQVU7WUFDcEIsb0JBQU87UUFFSCxJQUFBLHdEQUFxQjs7WUFFckIsS0FBSyxHQUFHLEdBQUc7OztRQUNmLGNBQU0sT0FBQSxxQkFBcUIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxHQUFHLEVBQTdCLENBQTZCLEVBQUMsRUFBM0UsQ0FBMkUsR0FDakYsQ0FBQyxDQUFDLENBQ0g7UUFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUN4QzthQUFNO1lBQ0wscUJBQXFCLG9CQUFPLHFCQUFxQixHQUFFLE9BQU8sRUFBQyxDQUFDO1NBQzdEO1FBRUQsVUFBVSxDQUFDO1lBQ1QscUJBQXFCLHVCQUFBO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7O0lBbkJEO1FBREMsTUFBTSxDQUFDLHVCQUF1QixDQUFDOzt5REFHakIsdUJBQXVCOztpRkFpQnJDO0lBckNEO1FBREMsUUFBUSxFQUFFOzs7O2tEQUtWO0lBTlUsMEJBQTBCO1FBSnRDLEtBQUssQ0FBOEI7WUFDbEMsSUFBSSxFQUFFLDRCQUE0QjtZQUNsQyxRQUFRLEVBQUUsbUJBQUEsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsRUFBK0I7U0FDdkUsQ0FBQztPQUNXLDBCQUEwQixDQXdDdEM7SUFBRCxpQ0FBQztDQUFBLElBQUE7U0F4Q1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGUsIEFjdGlvbiwgU3RhdGVDb250ZXh0LCBTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vYWN0aW9ucy9yZXBsYWNlYWJsZS1jb21wb25lbnRzLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHMgfSBmcm9tICcuLi9tb2RlbHMvcmVwbGFjZWFibGUtY29tcG9uZW50cyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuXHJcbkBTdGF0ZTxSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGU+KHtcclxuICBuYW1lOiAnUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IHJlcGxhY2VhYmxlQ29tcG9uZW50czogW10gfSBhcyBSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZSB7XHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0QWxsKHtcclxuICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50cyxcclxuICB9OiBSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGUpOiBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUmVwbGFjZWFibGVDb21wb25lbnRbXSB7XHJcbiAgICByZXR1cm4gcmVwbGFjZWFibGVDb21wb25lbnRzIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldENvbXBvbmVudChrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgICAgW1JlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlXSxcclxuICAgICAgKHN0YXRlOiBSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGUpOiBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUmVwbGFjZWFibGVDb21wb25lbnQgPT4ge1xyXG4gICAgICAgIHJldHVybiBzbnEoKCkgPT4gc3RhdGUucmVwbGFjZWFibGVDb21wb25lbnRzLmZpbmQoY29tcG9uZW50ID0+IGNvbXBvbmVudC5rZXkgPT09IGtleSkpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KVxyXG4gIHJlcGxhY2VhYmxlQ29tcG9uZW50c0FjdGlvbihcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFJlcGxhY2VhYmxlQ29tcG9uZW50cy5TdGF0ZT4sXHJcbiAgICB7IHBheWxvYWQgfTogQWRkUmVwbGFjZWFibGVDb21wb25lbnQsXHJcbiAgKSB7XHJcbiAgICBsZXQgeyByZXBsYWNlYWJsZUNvbXBvbmVudHMgfSA9IGdldFN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBzbnEoXHJcbiAgICAgICgpID0+IHJlcGxhY2VhYmxlQ29tcG9uZW50cy5maW5kSW5kZXgoY29tcG9uZW50ID0+IGNvbXBvbmVudC5rZXkgPT09IHBheWxvYWQua2V5KSxcclxuICAgICAgLTEsXHJcbiAgICApO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgcmVwbGFjZWFibGVDb21wb25lbnRzW2luZGV4XSA9IHBheWxvYWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXBsYWNlYWJsZUNvbXBvbmVudHMgPSBbLi4ucmVwbGFjZWFibGVDb21wb25lbnRzLCBwYXlsb2FkXTtcclxuICAgIH1cclxuXHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgcmVwbGFjZWFibGVDb21wb25lbnRzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==