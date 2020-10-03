import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Action, Selector, State } from '@ngxs/store';
import { SetSelectedSettingTab } from '../actions/setting-management.actions';
let SettingManagementState = class SettingManagementState {
    static getSelectedTab({ selectedTab }) {
        return selectedTab;
    }
    settingManagementAction({ patchState }, { payload }) {
        patchState({
            selectedTab: payload,
        });
    }
};
SettingManagementState.decorators = [
    { type: Injectable }
];
__decorate([
    Action(SetSelectedSettingTab),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, SetSelectedSettingTab]),
    __metadata("design:returntype", void 0)
], SettingManagementState.prototype, "settingManagementAction", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SettingManagementState, "getSelectedTab", null);
SettingManagementState = __decorate([
    State({
        name: 'SettingManagementState',
        defaults: {},
    })
], SettingManagementState);
export { SettingManagementState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc2V0dGluZy1tYW5hZ2VtZW50L3NyYy9saWIvc3RhdGVzL3NldHRpbmctbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0lBUWpFLHNCQUFzQixTQUF0QixzQkFBc0I7SUFFakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFdBQVcsRUFBMkI7UUFDNUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUdELHVCQUF1QixDQUNyQixFQUFFLFVBQVUsRUFBeUMsRUFDckQsRUFBRSxPQUFPLEVBQXlCO1FBRWxDLFVBQVUsQ0FBQztZQUNULFdBQVcsRUFBRSxPQUFPO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztZQWhCQSxVQUFVOztBQVFUO0lBREMsTUFBTSxDQUFDLHFCQUFxQixDQUFDOzs2Q0FHZixxQkFBcUI7O3FFQUtuQztBQVpEO0lBREMsUUFBUSxFQUFFOzs7O2tEQUdWO0FBSlUsc0JBQXNCO0lBTGxDLEtBQUssQ0FBMEI7UUFDOUIsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FFVyxzQkFBc0IsQ0FlbEM7U0FmWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiwgU2VsZWN0b3IsIFN0YXRlLCBTdGF0ZUNvbnRleHQgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFNldFNlbGVjdGVkU2V0dGluZ1RhYiB9IGZyb20gJy4uL2FjdGlvbnMvc2V0dGluZy1tYW5hZ2VtZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBTZXR0aW5nTWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscy9zZXR0aW5nLW1hbmFnZW1lbnQnO1xyXG5cclxuQFN0YXRlPFNldHRpbmdNYW5hZ2VtZW50LlN0YXRlPih7XHJcbiAgbmFtZTogJ1NldHRpbmdNYW5hZ2VtZW50U3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7fSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ01hbmFnZW1lbnRTdGF0ZSB7XHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0U2VsZWN0ZWRUYWIoeyBzZWxlY3RlZFRhYiB9OiBTZXR0aW5nTWFuYWdlbWVudC5TdGF0ZSkge1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkVGFiO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihTZXRTZWxlY3RlZFNldHRpbmdUYWIpXHJcbiAgc2V0dGluZ01hbmFnZW1lbnRBY3Rpb24oXHJcbiAgICB7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFNldHRpbmdNYW5hZ2VtZW50LlN0YXRlPixcclxuICAgIHsgcGF5bG9hZCB9OiBTZXRTZWxlY3RlZFNldHRpbmdUYWIsXHJcbiAgKSB7XHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRUYWI6IHBheWxvYWQsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19