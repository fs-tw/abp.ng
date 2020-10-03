var ReplaceableComponentsState_1;
import { __decorate, __metadata } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { Action, createSelector, Selector, State } from '@ngxs/store';
import snq from 'snq';
import { AddReplaceableComponent } from '../actions/replaceable-components.actions';
import { ReplaceableComponentsService } from '../services/replaceable-components.service';
function logDeprecationMsg() {
    if (isDevMode()) {
        console.warn(`
     ReplacableComponentsState has been deprecated. Use ReplaceableComponentsService instead.
     See the doc https://docs.abp.io/en/abp/latest/UI/Angular/Component-Replacement
     `);
    }
}
// tslint:disable: max-line-length
/**
 * @deprecated To be deleted in v4.0. Use ReplaceableComponentsService instead. See the doc (https://docs.abp.io/en/abp/latest/UI/Angular/Component-Replacement)
 */
let ReplaceableComponentsState = ReplaceableComponentsState_1 = class ReplaceableComponentsState {
    constructor(service) {
        this.service = service;
    }
    static getAll({ replaceableComponents, }) {
        logDeprecationMsg();
        return replaceableComponents || [];
    }
    static getComponent(key) {
        const selector = createSelector([ReplaceableComponentsState_1], (state) => {
            logDeprecationMsg();
            return snq(() => state.replaceableComponents.find(component => component.key === key));
        });
        return selector;
    }
    replaceableComponentsAction({ getState, patchState }, { payload, reload }) {
        logDeprecationMsg();
        let { replaceableComponents } = getState();
        const index = snq(() => replaceableComponents.findIndex(component => component.key === payload.key), -1);
        if (index > -1) {
            replaceableComponents[index] = payload;
        }
        else {
            replaceableComponents = [...replaceableComponents, payload];
        }
        patchState({
            replaceableComponents,
        });
        this.service.add(payload, reload);
    }
};
ReplaceableComponentsState.decorators = [
    { type: Injectable }
];
ReplaceableComponentsState.ctorParameters = () => [
    { type: ReplaceableComponentsService }
];
__decorate([
    Action(AddReplaceableComponent),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AddReplaceableComponent]),
    __metadata("design:returntype", void 0)
], ReplaceableComponentsState.prototype, "replaceableComponentsAction", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], ReplaceableComponentsState, "getAll", null);
ReplaceableComponentsState = ReplaceableComponentsState_1 = __decorate([
    State({
        name: 'ReplaceableComponentsState',
        defaults: { replaceableComponents: [] },
    }),
    __metadata("design:paramtypes", [ReplaceableComponentsService])
], ReplaceableComponentsState);
export { ReplaceableComponentsState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zdGF0ZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BGLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVwRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUUxRixTQUFTLGlCQUFpQjtJQUN4QixJQUFJLFNBQVMsRUFBRSxFQUFFO1FBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQzs7O01BR1gsQ0FBQyxDQUFDO0tBQ0w7QUFDSCxDQUFDO0FBRUQsa0NBQWtDO0FBQ2xDOztHQUVHO0lBTVUsMEJBQTBCLHdDQUExQiwwQkFBMEI7SUFxQnJDLFlBQW9CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO0lBQUcsQ0FBQztJQW5CN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUNaLHFCQUFxQixHQUNPO1FBQzVCLGlCQUFpQixFQUFFLENBQUM7UUFDcEIsT0FBTyxxQkFBcUIsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBVztRQUM3QixNQUFNLFFBQVEsR0FBRyxjQUFjLENBQzdCLENBQUMsNEJBQTBCLENBQUMsRUFDNUIsQ0FBQyxLQUFrQyxFQUE4QyxFQUFFO1lBQ2pGLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6RixDQUFDLENBQ0YsQ0FBQztRQUVGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFLRCwyQkFBMkIsQ0FDekIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUE2QyxFQUNuRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQTJCO1FBRTVDLGlCQUFpQixFQUFFLENBQUM7UUFFcEIsSUFBSSxFQUFFLHFCQUFxQixFQUFFLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFFM0MsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUNmLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUNqRixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDeEM7YUFBTTtZQUNMLHFCQUFxQixHQUFHLENBQUMsR0FBRyxxQkFBcUIsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3RDtRQUVELFVBQVUsQ0FBQztZQUNULHFCQUFxQjtTQUN0QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGLENBQUE7O1lBakRBLFVBQVU7OztZQW5CRiw0QkFBNEI7O0FBNENuQztJQURDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQzs7NkNBR1QsdUJBQXVCOzs2RUFxQjdDO0FBN0NEO0lBREMsUUFBUSxFQUFFOzs7OzhDQU1WO0FBUFUsMEJBQTBCO0lBTHRDLEtBQUssQ0FBOEI7UUFDbEMsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxRQUFRLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLEVBQWlDO0tBQ3ZFLENBQUM7cUNBdUI2Qiw0QkFBNEI7R0FyQjlDLDBCQUEwQixDQWdEdEM7U0FoRFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IsIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vYWN0aW9ucy9yZXBsYWNlYWJsZS1jb21wb25lbnRzLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHMgfSBmcm9tICcuLi9tb2RlbHMvcmVwbGFjZWFibGUtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFJlcGxhY2VhYmxlQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yZXBsYWNlYWJsZS1jb21wb25lbnRzLnNlcnZpY2UnO1xyXG5cclxuZnVuY3Rpb24gbG9nRGVwcmVjYXRpb25Nc2coKSB7XHJcbiAgaWYgKGlzRGV2TW9kZSgpKSB7XHJcbiAgICBjb25zb2xlLndhcm4oYFxyXG4gICAgIFJlcGxhY2FibGVDb21wb25lbnRzU3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIFJlcGxhY2VhYmxlQ29tcG9uZW50c1NlcnZpY2UgaW5zdGVhZC5cclxuICAgICBTZWUgdGhlIGRvYyBodHRwczovL2RvY3MuYWJwLmlvL2VuL2FicC9sYXRlc3QvVUkvQW5ndWxhci9Db21wb25lbnQtUmVwbGFjZW1lbnRcclxuICAgICBgKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlOiBtYXgtbGluZS1sZW5ndGhcclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIFRvIGJlIGRlbGV0ZWQgaW4gdjQuMC4gVXNlIFJlcGxhY2VhYmxlQ29tcG9uZW50c1NlcnZpY2UgaW5zdGVhZC4gU2VlIHRoZSBkb2MgKGh0dHBzOi8vZG9jcy5hYnAuaW8vZW4vYWJwL2xhdGVzdC9VSS9Bbmd1bGFyL0NvbXBvbmVudC1SZXBsYWNlbWVudClcclxuICovXHJcbkBTdGF0ZTxSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGU+KHtcclxuICBuYW1lOiAnUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IHJlcGxhY2VhYmxlQ29tcG9uZW50czogW10gfSBhcyBSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRBbGwoe1xyXG4gICAgcmVwbGFjZWFibGVDb21wb25lbnRzLFxyXG4gIH06IFJlcGxhY2VhYmxlQ29tcG9uZW50cy5TdGF0ZSk6IFJlcGxhY2VhYmxlQ29tcG9uZW50cy5SZXBsYWNlYWJsZUNvbXBvbmVudFtdIHtcclxuICAgIGxvZ0RlcHJlY2F0aW9uTXNnKCk7XHJcbiAgICByZXR1cm4gcmVwbGFjZWFibGVDb21wb25lbnRzIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldENvbXBvbmVudChrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgICAgW1JlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlXSxcclxuICAgICAgKHN0YXRlOiBSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGUpOiBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUmVwbGFjZWFibGVDb21wb25lbnQgPT4ge1xyXG4gICAgICAgIGxvZ0RlcHJlY2F0aW9uTXNnKCk7XHJcbiAgICAgICAgcmV0dXJuIHNucSgoKSA9PiBzdGF0ZS5yZXBsYWNlYWJsZUNvbXBvbmVudHMuZmluZChjb21wb25lbnQgPT4gY29tcG9uZW50LmtleSA9PT0ga2V5KSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogUmVwbGFjZWFibGVDb21wb25lbnRzU2VydmljZSkge31cclxuXHJcbiAgQEFjdGlvbihBZGRSZXBsYWNlYWJsZUNvbXBvbmVudClcclxuICByZXBsYWNlYWJsZUNvbXBvbmVudHNBY3Rpb24oXHJcbiAgICB7IGdldFN0YXRlLCBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGU+LFxyXG4gICAgeyBwYXlsb2FkLCByZWxvYWQgfTogQWRkUmVwbGFjZWFibGVDb21wb25lbnQsXHJcbiAgKSB7XHJcbiAgICBsb2dEZXByZWNhdGlvbk1zZygpO1xyXG5cclxuICAgIGxldCB7IHJlcGxhY2VhYmxlQ29tcG9uZW50cyB9ID0gZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IHNucShcclxuICAgICAgKCkgPT4gcmVwbGFjZWFibGVDb21wb25lbnRzLmZpbmRJbmRleChjb21wb25lbnQgPT4gY29tcG9uZW50LmtleSA9PT0gcGF5bG9hZC5rZXkpLFxyXG4gICAgICAtMSxcclxuICAgICk7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICByZXBsYWNlYWJsZUNvbXBvbmVudHNbaW5kZXhdID0gcGF5bG9hZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50cyA9IFsuLi5yZXBsYWNlYWJsZUNvbXBvbmVudHMsIHBheWxvYWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICByZXBsYWNlYWJsZUNvbXBvbmVudHMsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNlcnZpY2UuYWRkKHBheWxvYWQsIHJlbG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==