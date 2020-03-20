/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/setting-management.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import { SetSelectedSettingTab } from '../actions/setting-management.actions';
import { Injectable } from '@angular/core';
var SettingManagementState = /** @class */ (function () {
    function SettingManagementState() {
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    SettingManagementState.getSelectedTab = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var selectedTab = _a.selectedTab;
        return selectedTab;
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    SettingManagementState.prototype.settingManagementAction = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        patchState({
            selectedTab: payload,
        });
    };
    SettingManagementState.decorators = [
        { type: Injectable }
    ];
    tslib_1.__decorate([
        Action(SetSelectedSettingTab),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, SetSelectedSettingTab]),
        tslib_1.__metadata("design:returntype", void 0)
    ], SettingManagementState.prototype, "settingManagementAction", null);
    tslib_1.__decorate([
        Selector(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], SettingManagementState, "getSelectedTab", null);
    SettingManagementState = tslib_1.__decorate([
        State({
            name: 'SettingManagementState',
            defaults: (/** @type {?} */ ({ selectedTab: {} })),
        })
    ], SettingManagementState);
    return SettingManagementState;
}());
export { SettingManagementState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5zZXR0aW5nLW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvc3RhdGVzL3NldHRpbmctbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQXNCM0MsQ0FBQzs7Ozs7SUFiUSxxQ0FBYzs7OztJQUFyQixVQUFzQixFQUF3QztZQUF0Qyw0QkFBVztRQUNqQyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFHRCx3REFBdUI7Ozs7O0lBQXZCLFVBQ0UsRUFBcUQsRUFDckQsRUFBa0M7WUFEaEMsMEJBQVU7WUFDVixvQkFBTztRQUVULFVBQVUsQ0FBQztZQUNULFdBQVcsRUFBRSxPQUFPO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWZGLFVBQVU7O0lBUVQ7UUFEQyxNQUFNLENBQUMscUJBQXFCLENBQUM7O3lEQUdmLHFCQUFxQjs7eUVBS25DO0lBWkQ7UUFEQyxRQUFRLEVBQUU7Ozs7c0RBR1Y7SUFKVSxzQkFBc0I7UUFMbEMsS0FBSyxDQUEwQjtZQUM5QixJQUFJLEVBQUUsd0JBQXdCO1lBQzlCLFFBQVEsRUFBRSxtQkFBQSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBMkI7U0FDekQsQ0FBQztPQUVXLHNCQUFzQixDQWVsQztJQUFELDZCQUFDO0NBQUEsSUFBQTtTQWZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgU2VsZWN0b3IsIFN0YXRlLCBTdGF0ZUNvbnRleHQgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFNldFNlbGVjdGVkU2V0dGluZ1RhYiB9IGZyb20gJy4uL2FjdGlvbnMvc2V0dGluZy1tYW5hZ2VtZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBTZXR0aW5nTWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscy9zZXR0aW5nLW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AU3RhdGU8U2V0dGluZ01hbmFnZW1lbnQuU3RhdGU+KHtcclxuICBuYW1lOiAnU2V0dGluZ01hbmFnZW1lbnRTdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgc2VsZWN0ZWRUYWI6IHt9IH0gYXMgU2V0dGluZ01hbmFnZW1lbnQuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdNYW5hZ2VtZW50U3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFNlbGVjdGVkVGFiKHsgc2VsZWN0ZWRUYWIgfTogU2V0dGluZ01hbmFnZW1lbnQuU3RhdGUpIHtcclxuICAgIHJldHVybiBzZWxlY3RlZFRhYjtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0U2VsZWN0ZWRTZXR0aW5nVGFiKVxyXG4gIHNldHRpbmdNYW5hZ2VtZW50QWN0aW9uKFxyXG4gICAgeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxTZXR0aW5nTWFuYWdlbWVudC5TdGF0ZT4sXHJcbiAgICB7IHBheWxvYWQgfTogU2V0U2VsZWN0ZWRTZXR0aW5nVGFiLFxyXG4gICkge1xyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkVGFiOiBwYXlsb2FkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==