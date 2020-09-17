var ReplaceableComponentsState_1;
import { __awaiter, __decorate, __metadata } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Action, createSelector, Selector, State } from '@ngxs/store';
import snq from 'snq';
import { AddReplaceableComponent } from '../actions/replaceable-components.actions';
import { noop } from '../utils/common-utils';
let ReplaceableComponentsState = ReplaceableComponentsState_1 = class ReplaceableComponentsState {
    constructor(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
    }
    static getAll({ replaceableComponents, }) {
        return replaceableComponents || [];
    }
    static getComponent(key) {
        const selector = createSelector([ReplaceableComponentsState_1], (state) => {
            return snq(() => state.replaceableComponents.find(component => component.key === key));
        });
        return selector;
    }
    // TODO: Create a shared service for route reload and more
    reloadRoute() {
        const { shouldReuseRoute } = this.router.routeReuseStrategy;
        const setRouteReuse = (reuse) => {
            this.router.routeReuseStrategy.shouldReuseRoute = reuse;
        };
        setRouteReuse(() => false);
        this.router.navigated = false;
        this.ngZone.run(() => __awaiter(this, void 0, void 0, function* () {
            yield this.router.navigateByUrl(this.router.url).catch(noop);
            setRouteReuse(shouldReuseRoute);
        }));
    }
    replaceableComponentsAction({ getState, patchState }, { payload, reload }) {
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
        if (reload)
            this.reloadRoute();
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
    Injectable(),
    __metadata("design:paramtypes", [NgZone, Router])
], ReplaceableComponentsState);
export { ReplaceableComponentsState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zdGF0ZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFnQixNQUFNLGFBQWEsQ0FBQztBQUNwRixPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFcEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTzdDLElBQWEsMEJBQTBCLGtDQUF2QyxNQUFhLDBCQUEwQjtJQW1CckMsWUFBb0IsTUFBYyxFQUFVLE1BQWM7UUFBdEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBakI5RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQ1oscUJBQXFCLEdBQ087UUFDNUIsT0FBTyxxQkFBcUIsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBVztRQUM3QixNQUFNLFFBQVEsR0FBRyxjQUFjLENBQzdCLENBQUMsNEJBQTBCLENBQUMsRUFDNUIsQ0FBQyxLQUFrQyxFQUE4QyxFQUFFO1lBQ2pGLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekYsQ0FBQyxDQUNGLENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBSUQsMERBQTBEO0lBQ2xELFdBQVc7UUFDakIsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUM1RCxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQThCLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUMxRCxDQUFDLENBQUM7UUFFRixhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRTlCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQVMsRUFBRTtZQUN6QixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdELGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsMkJBQTJCLENBQ3pCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBNkMsRUFDbkUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUEyQjtRQUU1QyxJQUFJLEVBQUUscUJBQXFCLEVBQUUsR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUUzQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQ2YsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQ2pGLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUN4QzthQUFNO1lBQ0wscUJBQXFCLEdBQUcsQ0FBQyxHQUFHLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdEO1FBRUQsVUFBVSxDQUFDO1lBQ1QscUJBQXFCO1NBQ3RCLENBQUMsQ0FBQztRQUVILElBQUksTUFBTTtZQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBQ0YsQ0FBQTtBQXRCQztJQURDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQzs7NkNBR1QsdUJBQXVCOzs2RUFtQjdDO0FBekREO0lBREMsUUFBUSxFQUFFOzs7OzhDQUtWO0FBTlUsMEJBQTBCO0lBTHRDLEtBQUssQ0FBOEI7UUFDbEMsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxRQUFRLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLEVBQWlDO0tBQ3ZFLENBQUM7SUFDRCxVQUFVLEVBQUU7cUNBb0JpQixNQUFNLEVBQWtCLE1BQU07R0FuQi9DLDBCQUEwQixDQTREdEM7U0E1RFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IsIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vYWN0aW9ucy9yZXBsYWNlYWJsZS1jb21wb25lbnRzLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHMgfSBmcm9tICcuLi9tb2RlbHMvcmVwbGFjZWFibGUtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlscy9jb21tb24tdXRpbHMnO1xyXG5cclxuQFN0YXRlPFJlcGxhY2VhYmxlQ29tcG9uZW50cy5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgcmVwbGFjZWFibGVDb21wb25lbnRzOiBbXSB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5TdGF0ZSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldEFsbCh7XHJcbiAgICByZXBsYWNlYWJsZUNvbXBvbmVudHMsXHJcbiAgfTogUmVwbGFjZWFibGVDb21wb25lbnRzLlN0YXRlKTogUmVwbGFjZWFibGVDb21wb25lbnRzLlJlcGxhY2VhYmxlQ29tcG9uZW50W10ge1xyXG4gICAgcmV0dXJuIHJlcGxhY2VhYmxlQ29tcG9uZW50cyB8fCBbXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRDb21wb25lbnQoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgIFtSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZV0sXHJcbiAgICAgIChzdGF0ZTogUmVwbGFjZWFibGVDb21wb25lbnRzLlN0YXRlKTogUmVwbGFjZWFibGVDb21wb25lbnRzLlJlcGxhY2VhYmxlQ29tcG9uZW50ID0+IHtcclxuICAgICAgICByZXR1cm4gc25xKCgpID0+IHN0YXRlLnJlcGxhY2VhYmxlQ29tcG9uZW50cy5maW5kKGNvbXBvbmVudCA9PiBjb21wb25lbnQua2V5ID09PSBrZXkpKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgLy8gVE9ETzogQ3JlYXRlIGEgc2hhcmVkIHNlcnZpY2UgZm9yIHJvdXRlIHJlbG9hZCBhbmQgbW9yZVxyXG4gIHByaXZhdGUgcmVsb2FkUm91dGUoKSB7XHJcbiAgICBjb25zdCB7IHNob3VsZFJldXNlUm91dGUgfSA9IHRoaXMucm91dGVyLnJvdXRlUmV1c2VTdHJhdGVneTtcclxuICAgIGNvbnN0IHNldFJvdXRlUmV1c2UgPSAocmV1c2U6IHR5cGVvZiBzaG91bGRSZXVzZVJvdXRlKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyLnJvdXRlUmV1c2VTdHJhdGVneS5zaG91bGRSZXVzZVJvdXRlID0gcmV1c2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldFJvdXRlUmV1c2UoKCkgPT4gZmFsc2UpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5uZ1pvbmUucnVuKGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLnJvdXRlci51cmwpLmNhdGNoKG5vb3ApO1xyXG4gICAgICBzZXRSb3V0ZVJldXNlKHNob3VsZFJldXNlUm91dGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KVxyXG4gIHJlcGxhY2VhYmxlQ29tcG9uZW50c0FjdGlvbihcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFJlcGxhY2VhYmxlQ29tcG9uZW50cy5TdGF0ZT4sXHJcbiAgICB7IHBheWxvYWQsIHJlbG9hZCB9OiBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCxcclxuICApIHtcclxuICAgIGxldCB7IHJlcGxhY2VhYmxlQ29tcG9uZW50cyB9ID0gZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IHNucShcclxuICAgICAgKCkgPT4gcmVwbGFjZWFibGVDb21wb25lbnRzLmZpbmRJbmRleChjb21wb25lbnQgPT4gY29tcG9uZW50LmtleSA9PT0gcGF5bG9hZC5rZXkpLFxyXG4gICAgICAtMSxcclxuICAgICk7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICByZXBsYWNlYWJsZUNvbXBvbmVudHNbaW5kZXhdID0gcGF5bG9hZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50cyA9IFsuLi5yZXBsYWNlYWJsZUNvbXBvbmVudHMsIHBheWxvYWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICByZXBsYWNlYWJsZUNvbXBvbmVudHMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVsb2FkKSB0aGlzLnJlbG9hZFJvdXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==