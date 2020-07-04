import { __decorate, __metadata, __param } from "tslib";
import { Component, Injector, Optional, SkipSelf } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { RoutesService } from '../services/routes.service';
import { ReplaceableComponentsState } from '../states/replaceable-components.state';
import { findRoute, getRoutePath } from '../utils/route-utils';
import { takeUntilDestroy } from '../utils/rxjs-utils';
let DynamicLayoutComponent = class DynamicLayoutComponent {
    constructor(injector, store, dynamicLayoutComponent) {
        this.store = store;
        if (dynamicLayoutComponent)
            return;
        const route = injector.get(ActivatedRoute);
        const router = injector.get(Router);
        const routes = injector.get(RoutesService);
        const layouts = {
            application: this.getComponent('Theme.ApplicationLayoutComponent'),
            account: this.getComponent('Theme.AccountLayoutComponent'),
            empty: this.getComponent('Theme.EmptyLayoutComponent'),
        };
        router.events.pipe(takeUntilDestroy(this)).subscribe(event => {
            if (event instanceof NavigationEnd) {
                let expectedLayout = (route.snapshot.data || {}).layout;
                if (!expectedLayout) {
                    let node = findRoute(routes, getRoutePath(router));
                    node = { parent: node };
                    while (node.parent) {
                        node = node.parent;
                        if (node.layout) {
                            expectedLayout = node.layout;
                            break;
                        }
                    }
                }
                if (!expectedLayout)
                    expectedLayout = "empty" /* empty */;
                this.layout = layouts[expectedLayout].component;
            }
        });
    }
    getComponent(key) {
        return this.store.selectSnapshot(ReplaceableComponentsState.getComponent(key));
    }
    ngOnDestroy() { }
};
DynamicLayoutComponent = __decorate([
    Component({
        selector: 'abp-dynamic-layout',
        template: `
    <ng-container *ngTemplateOutlet="layout ? componentOutlet : routerOutlet"></ng-container>
    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>
    <ng-template #componentOutlet
      ><ng-container *ngComponentOutlet="layout"></ng-container
    ></ng-template>
  `
    }),
    __param(2, Optional()), __param(2, SkipSelf()),
    __metadata("design:paramtypes", [Injector,
        Store,
        DynamicLayoutComponent])
], DynamicLayoutComponent);
export { DynamicLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBbUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBYXZELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBR2pDLFlBQ0UsUUFBa0IsRUFDVixLQUFZLEVBQ0ksc0JBQThDO1FBRDlELFVBQUssR0FBTCxLQUFLLENBQU87UUFHcEIsSUFBSSxzQkFBc0I7WUFBRSxPQUFPO1FBQ25DLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sT0FBTyxHQUFHO1lBQ2QsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsa0NBQWtDLENBQUM7WUFDbEUsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsOEJBQThCLENBQUM7WUFDMUQsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsNEJBQTRCLENBQUM7U0FDdkQsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNELElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTtnQkFDbEMsSUFBSSxjQUFjLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBRXhELElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ25CLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ25ELElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQXlCLENBQUM7b0JBRS9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBRW5CLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTs0QkFDZixjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzs0QkFDN0IsTUFBTTt5QkFDUDtxQkFDRjtpQkFDRjtnQkFFRCxJQUFJLENBQUMsY0FBYztvQkFBRSxjQUFjLHNCQUFvQixDQUFDO2dCQUV4RCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUM7YUFDakQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxZQUFZLENBQUMsR0FBVztRQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxXQUFXLEtBQUksQ0FBQztDQUNqQixDQUFBO0FBaERZLHNCQUFzQjtJQVZsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7S0FDRixDQUFDO0lBT0csV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7cUNBRmIsUUFBUTtRQUNILEtBQUs7UUFDNEIsc0JBQXNCO0dBTjdELHNCQUFzQixDQWdEbEM7U0FoRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgT25EZXN0cm95LCBUeXBlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBlTGF5b3V0VHlwZSB9IGZyb20gJy4uL2VudW1zL2NvbW1vbic7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IFJlcGxhY2VhYmxlQ29tcG9uZW50cyB9IGZyb20gJy4uL21vZGVscy9yZXBsYWNlYWJsZS1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgUm91dGVzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JvdXRlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZSc7XHJcbmltcG9ydCB7IGZpbmRSb3V0ZSwgZ2V0Um91dGVQYXRoIH0gZnJvbSAnLi4vdXRpbHMvcm91dGUtdXRpbHMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnLi4vdXRpbHMvcnhqcy11dGlscyc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vdXRpbHMvdHJlZS11dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1keW5hbWljLWxheW91dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsYXlvdXQgPyBjb21wb25lbnRPdXRsZXQgOiByb3V0ZXJPdXRsZXRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjcm91dGVyT3V0bGV0Pjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD48L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlICNjb21wb25lbnRPdXRsZXRcclxuICAgICAgPjxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwibGF5b3V0XCI+PC9uZy1jb250YWluZXJcclxuICAgID48L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBsYXlvdXQ6IFR5cGU8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGR5bmFtaWNMYXlvdXRDb21wb25lbnQ6IER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgKSB7XHJcbiAgICBpZiAoZHluYW1pY0xheW91dENvbXBvbmVudCkgcmV0dXJuO1xyXG4gICAgY29uc3Qgcm91dGUgPSBpbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gaW5qZWN0b3IuZ2V0KFJvdXRlcik7XHJcbiAgICBjb25zdCByb3V0ZXMgPSBpbmplY3Rvci5nZXQoUm91dGVzU2VydmljZSk7XHJcbiAgICBjb25zdCBsYXlvdXRzID0ge1xyXG4gICAgICBhcHBsaWNhdGlvbjogdGhpcy5nZXRDb21wb25lbnQoJ1RoZW1lLkFwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50JyksXHJcbiAgICAgIGFjY291bnQ6IHRoaXMuZ2V0Q29tcG9uZW50KCdUaGVtZS5BY2NvdW50TGF5b3V0Q29tcG9uZW50JyksXHJcbiAgICAgIGVtcHR5OiB0aGlzLmdldENvbXBvbmVudCgnVGhlbWUuRW1wdHlMYXlvdXRDb21wb25lbnQnKSxcclxuICAgIH07XHJcblxyXG4gICAgcm91dGVyLmV2ZW50cy5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuICAgICAgICBsZXQgZXhwZWN0ZWRMYXlvdXQgPSAocm91dGUuc25hcHNob3QuZGF0YSB8fCB7fSkubGF5b3V0O1xyXG5cclxuICAgICAgICBpZiAoIWV4cGVjdGVkTGF5b3V0KSB7XHJcbiAgICAgICAgICBsZXQgbm9kZSA9IGZpbmRSb3V0ZShyb3V0ZXMsIGdldFJvdXRlUGF0aChyb3V0ZXIpKTtcclxuICAgICAgICAgIG5vZGUgPSB7IHBhcmVudDogbm9kZSB9IGFzIFRyZWVOb2RlPEFCUC5Sb3V0ZT47XHJcblxyXG4gICAgICAgICAgd2hpbGUgKG5vZGUucGFyZW50KSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChub2RlLmxheW91dCkge1xyXG4gICAgICAgICAgICAgIGV4cGVjdGVkTGF5b3V0ID0gbm9kZS5sYXlvdXQ7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZXhwZWN0ZWRMYXlvdXQpIGV4cGVjdGVkTGF5b3V0ID0gZUxheW91dFR5cGUuZW1wdHk7XHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0ID0gbGF5b3V0c1tleHBlY3RlZExheW91dF0uY29tcG9uZW50O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29tcG9uZW50KGtleTogc3RyaW5nKTogUmVwbGFjZWFibGVDb21wb25lbnRzLlJlcGxhY2VhYmxlQ29tcG9uZW50IHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFJlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlLmdldENvbXBvbmVudChrZXkpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge31cclxufVxyXG4iXX0=