/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/initial.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomInsertionService, AddReplaceableComponent, CONTENT_STRATEGY } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import styles from '../constants/styles';
import { ApplicationLayoutComponent } from '../components/application-layout/application-layout.component';
import { AccountLayoutComponent } from '../components/account-layout/account-layout.component';
import { EmptyLayoutComponent } from '../components/empty-layout/empty-layout.component';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "@ngxs/store";
export class InitialService {
    /**
     * @param {?} domInsertion
     * @param {?} store
     */
    constructor(domInsertion, store) {
        this.domInsertion = domInsertion;
        this.store = store;
        this.appendStyle();
        this.store.dispatch([
            new AddReplaceableComponent({
                key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
                component: ApplicationLayoutComponent,
            }),
            new AddReplaceableComponent({
                key: "Theme.AccountLayoutComponent" /* AccountLayout */,
                component: AccountLayoutComponent,
            }),
            new AddReplaceableComponent({
                key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
                component: EmptyLayoutComponent,
            }),
        ]);
    }
    /**
     * @return {?}
     */
    appendStyle() {
        this.domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
    }
}
InitialService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
InitialService.ctorParameters = () => [
    { type: DomInsertionService },
    { type: Store }
];
/** @nocollapse */ InitialService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function InitialService_Factory() { return new InitialService(i0.ɵɵinject(i1.DomInsertionService), i0.ɵɵinject(i2.Store)); }, token: InitialService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.domInsertion;
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9pbml0aWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sTUFBTSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7O0FBSXpGLE1BQU0sT0FBTyxjQUFjOzs7OztJQUN6QixZQUFvQixZQUFpQyxFQUFVLEtBQVk7UUFBdkQsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUN6RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDbEIsSUFBSSx1QkFBdUIsQ0FBQztnQkFDMUIsR0FBRyw0REFBeUM7Z0JBQzVDLFNBQVMsRUFBRSwwQkFBMEI7YUFDdEMsQ0FBQztZQUNGLElBQUksdUJBQXVCLENBQUM7Z0JBQzFCLEdBQUcsb0RBQXFDO2dCQUN4QyxTQUFTLEVBQUUsc0JBQXNCO2FBQ2xDLENBQUM7WUFDRixJQUFJLHVCQUF1QixDQUFDO2dCQUMxQixHQUFHLGdEQUFtQztnQkFDdEMsU0FBUyxFQUFFLG9CQUFvQjthQUNoQyxDQUFDO1NBQ0gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7OztZQXZCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBVHpCLG1CQUFtQjtZQUVuQixLQUFLOzs7Ozs7OztJQVNBLHNDQUF5Qzs7Ozs7SUFBRSwrQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21JbnNlcnRpb25TZXJ2aWNlLCBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCwgQ09OVEVOVF9TVFJBVEVHWSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY29uc3RhbnRzL3N0eWxlcyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9hcHBsaWNhdGlvbi1sYXlvdXQvYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjY291bnRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2FjY291bnQtbGF5b3V0L2FjY291bnQtbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtcHR5TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9lbXB0eS1sYXlvdXQvZW1wdHktbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGVUaGVtZUJhc2ljQ29tcG9uZW50cyB9IGZyb20gJy4uL2VudW1zL2NvbXBvbmVudHMnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEluaXRpYWxTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbUluc2VydGlvbjogRG9tSW5zZXJ0aW9uU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHtcclxuICAgIHRoaXMuYXBwZW5kU3R5bGUoKTtcclxuXHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFtcclxuICAgICAgbmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHtcclxuICAgICAgICBrZXk6IGVUaGVtZUJhc2ljQ29tcG9uZW50cy5BcHBsaWNhdGlvbkxheW91dCxcclxuICAgICAgICBjb21wb25lbnQ6IEFwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHtcclxuICAgICAgICBrZXk6IGVUaGVtZUJhc2ljQ29tcG9uZW50cy5BY2NvdW50TGF5b3V0LFxyXG4gICAgICAgIGNvbXBvbmVudDogQWNjb3VudExheW91dENvbXBvbmVudCxcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCh7XHJcbiAgICAgICAga2V5OiBlVGhlbWVCYXNpY0NvbXBvbmVudHMuRW1wdHlMYXlvdXQsXHJcbiAgICAgICAgY29tcG9uZW50OiBFbXB0eUxheW91dENvbXBvbmVudCxcclxuICAgICAgfSksXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZFN0eWxlKCkge1xyXG4gICAgdGhpcy5kb21JbnNlcnRpb24uaW5zZXJ0Q29udGVudChDT05URU5UX1NUUkFURUdZLkFwcGVuZFN0eWxlVG9IZWFkKHN0eWxlcykpO1xyXG4gIH1cclxufVxyXG4iXX0=