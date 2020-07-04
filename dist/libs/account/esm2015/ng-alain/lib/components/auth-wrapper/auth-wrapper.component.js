import { __decorate, __metadata } from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
let AuthWrapperComponent = class AuthWrapperComponent {
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], AuthWrapperComponent.prototype, "mainContentRef", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], AuthWrapperComponent.prototype, "cancelContentRef", void 0);
AuthWrapperComponent = __decorate([
    Component({
        selector: 'ng-alain-auth-wrapper',
        template: "<ng-alain-tenant-box [mainContentRef]=\"mainContentRef\">\r\n\r\n</ng-alain-tenant-box>\r\n\r\n<ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>"
    })
], AuthWrapperComponent);
export { AuthWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvYXV0aC13cmFwcGVyL2F1dGgtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFROUUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0FPaEMsQ0FBQTtBQUpDO0lBREMsS0FBSyxFQUFFOzhCQUNpQixXQUFXOzREQUFNO0FBRzFDO0lBREMsS0FBSyxFQUFFOzhCQUNtQixXQUFXOzhEQUFNO0FBTmpDLG9CQUFvQjtJQUpoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLDJLQUE0QztLQUM3QyxDQUFDO0dBQ1csb0JBQW9CLENBT2hDO1NBUFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHMgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1hbGFpbi1hdXRoLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRoLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFdyYXBwZXJDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIEFjY291bnQuQXV0aFdyYXBwZXJDb21wb25lbnRJbnB1dHMsIEFjY291bnQuQXV0aFdyYXBwZXJDb21wb25lbnRPdXRwdXRzIHtcclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5IG1haW5Db250ZW50UmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5IGNhbmNlbENvbnRlbnRSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcbn1cclxuIl19