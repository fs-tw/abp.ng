import { Component } from '@angular/core';
export class AccountLayoutComponent {
}
// required for dynamic component
AccountLayoutComponent.type = "account" /* account */;
AccountLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-layout-account',
                template: `
    <router-outlet></router-outlet>
    <abp-confirmation></abp-confirmation>
    <abp-toast-container right="30px" bottom="30px"></abp-toast-container>
  `
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtYmFzaWMvc3JjL2xpYi9jb21wb25lbnRzL2FjY291bnQtbGF5b3V0L2FjY291bnQtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVzFDLE1BQU0sT0FBTyxzQkFBc0I7O0FBQ2pDLGlDQUFpQztBQUMxQiwyQkFBSSwyQkFBdUI7O1lBVm5DLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7R0FJVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGVMYXlvdXRUeXBlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWxheW91dC1hY2NvdW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgPGFicC1jb25maXJtYXRpb24+PC9hYnAtY29uZmlybWF0aW9uPlxyXG4gICAgPGFicC10b2FzdC1jb250YWluZXIgcmlnaHQ9XCIzMHB4XCIgYm90dG9tPVwiMzBweFwiPjwvYWJwLXRvYXN0LWNvbnRhaW5lcj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudExheW91dENvbXBvbmVudCB7XHJcbiAgLy8gcmVxdWlyZWQgZm9yIGR5bmFtaWMgY29tcG9uZW50XHJcbiAgc3RhdGljIHR5cGUgPSBlTGF5b3V0VHlwZS5hY2NvdW50O1xyXG59XHJcbiJdfQ==