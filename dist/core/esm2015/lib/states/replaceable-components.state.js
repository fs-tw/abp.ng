var ReplaceableComponentsState_1;
import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { State, Action, Selector, createSelector } from '@ngxs/store';
import { AddReplaceableComponent } from '../actions/replaceable-components.actions';
import snq from 'snq';
let ReplaceableComponentsState = ReplaceableComponentsState_1 = class ReplaceableComponentsState {
    static getAll({ replaceableComponents, }) {
        return replaceableComponents || [];
    }
    static getComponent(key) {
        const selector = createSelector([ReplaceableComponentsState_1], (state) => {
            return snq(() => state.replaceableComponents.find(component => component.key === key));
        });
        return selector;
    }
    replaceableComponentsAction({ getState, patchState }, { payload }) {
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
    }
};
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
    Injectable()
], ReplaceableComponentsState);
export { ReplaceableComponentsState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zdGF0ZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdCLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFcEYsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBT3RCLElBQWEsMEJBQTBCLGtDQUF2QyxNQUFhLDBCQUEwQjtJQUVyQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQ1oscUJBQXFCLEdBQ087UUFDNUIsT0FBTyxxQkFBcUIsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBVztRQUM3QixNQUFNLFFBQVEsR0FBRyxjQUFjLENBQzdCLENBQUMsNEJBQTBCLENBQUMsRUFDNUIsQ0FBQyxLQUFrQyxFQUE4QyxFQUFFO1lBQ2pGLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekYsQ0FBQyxDQUNGLENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBR0QsMkJBQTJCLENBQ3pCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBNkMsRUFDbkUsRUFBRSxPQUFPLEVBQTJCO1FBRXBDLElBQUksRUFBRSxxQkFBcUIsRUFBRSxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBRTNDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FDZixHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFDakYsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNGLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2QscUJBQXFCLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxxQkFBcUIsR0FBRyxDQUFDLEdBQUcscUJBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxVQUFVLENBQUM7WUFDVCxxQkFBcUI7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUFwQkM7SUFEQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7OzZDQUdqQix1QkFBdUI7OzZFQWlCckM7QUFyQ0Q7SUFEQyxRQUFRLEVBQUU7Ozs7OENBS1Y7QUFOVSwwQkFBMEI7SUFMdEMsS0FBSyxDQUE4QjtRQUNsQyxJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLFFBQVEsRUFBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsRUFBaUM7S0FDdkUsQ0FBQztJQUNELFVBQVUsRUFBRTtHQUNBLDBCQUEwQixDQXdDdEM7U0F4Q1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdGF0ZSwgQWN0aW9uLCBTdGF0ZUNvbnRleHQsIFNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgQWRkUmVwbGFjZWFibGVDb21wb25lbnQgfSBmcm9tICcuLi9hY3Rpb25zL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFJlcGxhY2VhYmxlQ29tcG9uZW50cyB9IGZyb20gJy4uL21vZGVscy9yZXBsYWNlYWJsZS1jb21wb25lbnRzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5cclxuQFN0YXRlPFJlcGxhY2VhYmxlQ29tcG9uZW50cy5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgcmVwbGFjZWFibGVDb21wb25lbnRzOiBbXSB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5TdGF0ZSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldEFsbCh7XHJcbiAgICByZXBsYWNlYWJsZUNvbXBvbmVudHMsXHJcbiAgfTogUmVwbGFjZWFibGVDb21wb25lbnRzLlN0YXRlKTogUmVwbGFjZWFibGVDb21wb25lbnRzLlJlcGxhY2VhYmxlQ29tcG9uZW50W10ge1xyXG4gICAgcmV0dXJuIHJlcGxhY2VhYmxlQ29tcG9uZW50cyB8fCBbXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRDb21wb25lbnQoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgIFtSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZV0sXHJcbiAgICAgIChzdGF0ZTogUmVwbGFjZWFibGVDb21wb25lbnRzLlN0YXRlKTogUmVwbGFjZWFibGVDb21wb25lbnRzLlJlcGxhY2VhYmxlQ29tcG9uZW50ID0+IHtcclxuICAgICAgICByZXR1cm4gc25xKCgpID0+IHN0YXRlLnJlcGxhY2VhYmxlQ29tcG9uZW50cy5maW5kKGNvbXBvbmVudCA9PiBjb21wb25lbnQua2V5ID09PSBrZXkpKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihBZGRSZXBsYWNlYWJsZUNvbXBvbmVudClcclxuICByZXBsYWNlYWJsZUNvbXBvbmVudHNBY3Rpb24oXHJcbiAgICB7IGdldFN0YXRlLCBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxSZXBsYWNlYWJsZUNvbXBvbmVudHMuU3RhdGU+LFxyXG4gICAgeyBwYXlsb2FkIH06IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50LFxyXG4gICkge1xyXG4gICAgbGV0IHsgcmVwbGFjZWFibGVDb21wb25lbnRzIH0gPSBnZXRTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gc25xKFxyXG4gICAgICAoKSA9PiByZXBsYWNlYWJsZUNvbXBvbmVudHMuZmluZEluZGV4KGNvbXBvbmVudCA9PiBjb21wb25lbnQua2V5ID09PSBwYXlsb2FkLmtleSksXHJcbiAgICAgIC0xLFxyXG4gICAgKTtcclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50c1tpbmRleF0gPSBwYXlsb2FkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVwbGFjZWFibGVDb21wb25lbnRzID0gWy4uLnJlcGxhY2VhYmxlQ29tcG9uZW50cywgcGF5bG9hZF07XHJcbiAgICB9XHJcblxyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50cyxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=