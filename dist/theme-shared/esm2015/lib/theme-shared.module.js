var ThemeSharedModule_1;
import { __decorate, __metadata } from "tslib";
import { CoreModule, noop } from '@abp/ng.core';
import { DatePipe } from '@angular/common';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { NgbDateParserFormatter, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './components/button/button.component';
import { ChartComponent } from './components/chart/chart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HttpErrorWrapperComponent } from './components/http-error-wrapper/http-error-wrapper.component';
import { LoaderBarComponent } from './components/loader-bar/loader-bar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalContainerComponent } from './components/modal/modal-container.component';
import { ModalComponent } from './components/modal/modal.component';
import { SortOrderIconComponent } from './components/sort-order-icon/sort-order-icon.component';
import { TableEmptyMessageComponent } from './components/table-empty-message/table-empty-message.component';
import { TableComponent } from './components/table/table.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { ToastComponent } from './components/toast/toast.component';
import { LoadingDirective } from './directives/loading.directive';
import { NgxDatatableDefaultDirective } from './directives/ngx-datatable-default.directive';
import { NgxDatatableListDirective } from './directives/ngx-datatable-list.directive';
import { TableSortDirective } from './directives/table-sort.directive';
import { ErrorHandler } from './handlers/error.handler';
import { initLazyStyleHandler } from './handlers/lazy-style.handler';
import { THEME_SHARED_ROUTE_PROVIDERS } from './providers/route.provider';
import { THEME_SHARED_APPEND_CONTENT } from './tokens/append-content.token';
import { httpErrorConfigFactory, HTTP_ERROR_CONFIG } from './tokens/http-error.token';
import { DateParserFormatter } from './utils/date-parser-formatter';
let ThemeSharedModule = ThemeSharedModule_1 = class ThemeSharedModule {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    static forRoot(options = {}) {
        return {
            ngModule: ThemeSharedModule_1,
            providers: [
                THEME_SHARED_ROUTE_PROVIDERS,
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [THEME_SHARED_APPEND_CONTENT],
                    useFactory: noop,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [Injector],
                    useFactory: initLazyStyleHandler,
                },
                { provide: HTTP_ERROR_CONFIG, useValue: options.httpErrorConfig },
                {
                    provide: 'HTTP_ERROR_CONFIG',
                    useFactory: httpErrorConfigFactory,
                    deps: [HTTP_ERROR_CONFIG],
                },
                { provide: NgbDateParserFormatter, useClass: DateParserFormatter },
            ],
        };
    }
};
ThemeSharedModule = ThemeSharedModule_1 = __decorate([
    NgModule({
        imports: [CoreModule, NgxDatatableModule, NgxValidateCoreModule, NgbPaginationModule],
        declarations: [
            BreadcrumbComponent,
            ButtonComponent,
            ChartComponent,
            ConfirmationComponent,
            HttpErrorWrapperComponent,
            LoaderBarComponent,
            LoadingComponent,
            ModalComponent,
            ModalContainerComponent,
            TableComponent,
            TableEmptyMessageComponent,
            ToastComponent,
            ToastContainerComponent,
            SortOrderIconComponent,
            NgxDatatableDefaultDirective,
            NgxDatatableListDirective,
            LoadingDirective,
            TableSortDirective,
        ],
        exports: [
            NgxDatatableModule,
            BreadcrumbComponent,
            ButtonComponent,
            ChartComponent,
            ConfirmationComponent,
            LoaderBarComponent,
            LoadingComponent,
            ModalComponent,
            TableComponent,
            TableEmptyMessageComponent,
            ToastComponent,
            ToastContainerComponent,
            SortOrderIconComponent,
            NgxDatatableDefaultDirective,
            NgxDatatableListDirective,
            LoadingDirective,
            TableSortDirective,
        ],
        providers: [DatePipe],
        entryComponents: [
            HttpErrorWrapperComponent,
            LoadingComponent,
            ModalContainerComponent,
            ToastContainerComponent,
            ConfirmationComponent,
        ],
    }),
    __metadata("design:paramtypes", [ErrorHandler])
], ThemeSharedModule);
export { ThemeSharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL3RoZW1lLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3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QjtZQUN2QixzQkFBc0I7WUFDdEIsNEJBQTRCO1lBQzVCLHlCQUF5QjtZQUN6QixnQkFBZ0I7WUFDaEIsa0JBQWtCO1NBQ25CO1FBQ0QsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ3JCLGVBQWUsRUFBRTtZQUNmLHlCQUF5QjtZQUN6QixnQkFBZ0I7WUFDaEIsdUJBQXVCO1lBQ3ZCLHVCQUF1QjtZQUN2QixxQkFBcUI7U0FDdEI7S0FDRixDQUFDO3FDQUVrQyxZQUFZO0dBRG5DLGlCQUFpQixDQThCN0I7U0E5QlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZHVsZSwgbm9vcCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciwgTmdiUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmd4VmFsaWRhdGVDb3JlTW9kdWxlIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgTmd4RGF0YXRhYmxlTW9kdWxlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGFydC9jaGFydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2h0dHAtZXJyb3Itd3JhcHBlci9odHRwLWVycm9yLXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGVyQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlci1iYXIvbG9hZGVyLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU29ydE9yZGVySWNvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zb3J0LW9yZGVyLWljb24vc29ydC1vcmRlci1pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYmxlRW1wdHlNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlLWVtcHR5LW1lc3NhZ2UvdGFibGUtZW1wdHktbWVzc2FnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b2FzdC1jb250YWluZXIvdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbG9hZGluZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOZ3hEYXRhdGFibGVEZWZhdWx0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25neC1kYXRhdGFibGUtZGVmYXVsdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOZ3hEYXRhdGFibGVMaXN0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25neC1kYXRhdGFibGUtbGlzdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJsZVNvcnREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGFibGUtc29ydC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBpbml0TGF6eVN0eWxlSGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvbGF6eS1zdHlsZS5oYW5kbGVyJztcclxuaW1wb3J0IHsgUm9vdFBhcmFtcyB9IGZyb20gJy4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IFRIRU1FX1NIQVJFRF9ST1VURV9QUk9WSURFUlMgfSBmcm9tICcuL3Byb3ZpZGVycy9yb3V0ZS5wcm92aWRlcic7XHJcbmltcG9ydCB7IFRIRU1FX1NIQVJFRF9BUFBFTkRfQ09OVEVOVCB9IGZyb20gJy4vdG9rZW5zL2FwcGVuZC1jb250ZW50LnRva2VuJztcclxuaW1wb3J0IHsgaHR0cEVycm9yQ29uZmlnRmFjdG9yeSwgSFRUUF9FUlJPUl9DT05GSUcgfSBmcm9tICcuL3Rva2Vucy9odHRwLWVycm9yLnRva2VuJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNlckZvcm1hdHRlciB9IGZyb20gJy4vdXRpbHMvZGF0ZS1wYXJzZXItZm9ybWF0dGVyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvcmVNb2R1bGUsIE5neERhdGF0YWJsZU1vZHVsZSwgTmd4VmFsaWRhdGVDb3JlTW9kdWxlLCBOZ2JQYWdpbmF0aW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGFydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQsXHJcbiAgICBMb2FkZXJCYXJDb21wb25lbnQsXHJcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFRhYmxlQ29tcG9uZW50LFxyXG4gICAgVGFibGVFbXB0eU1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbXBvbmVudCxcclxuICAgIFRvYXN0Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgU29ydE9yZGVySWNvbkNvbXBvbmVudCxcclxuICAgIE5neERhdGF0YWJsZURlZmF1bHREaXJlY3RpdmUsXHJcbiAgICBOZ3hEYXRhdGFibGVMaXN0RGlyZWN0aXZlLFxyXG4gICAgTG9hZGluZ0RpcmVjdGl2ZSxcclxuICAgIFRhYmxlU29ydERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE5neERhdGF0YWJsZU1vZHVsZSxcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGFydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIExvYWRlckJhckNvbXBvbmVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIFRhYmxlQ29tcG9uZW50LFxyXG4gICAgVGFibGVFbXB0eU1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbXBvbmVudCxcclxuICAgIFRvYXN0Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgU29ydE9yZGVySWNvbkNvbXBvbmVudCxcclxuICAgIE5neERhdGF0YWJsZURlZmF1bHREaXJlY3RpdmUsXHJcbiAgICBOZ3hEYXRhdGFibGVMaXN0RGlyZWN0aXZlLFxyXG4gICAgTG9hZGluZ0RpcmVjdGl2ZSxcclxuICAgIFRhYmxlU29ydERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW0RhdGVQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQsXHJcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlbWVTaGFyZWRNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIpIHt9XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnMgPSB7fSBhcyBSb290UGFyYW1zKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUaGVtZVNoYXJlZE1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRoZW1lU2hhcmVkTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBUSEVNRV9TSEFSRURfUk9VVEVfUFJPVklERVJTLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW1RIRU1FX1NIQVJFRF9BUFBFTkRfQ09OVEVOVF0sXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBub29wLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICBkZXBzOiBbSW5qZWN0b3JdLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogaW5pdExhenlTdHlsZUhhbmRsZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfRVJST1JfQ09ORklHLCB1c2VWYWx1ZTogb3B0aW9ucy5odHRwRXJyb3JDb25maWcgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiAnSFRUUF9FUlJPUl9DT05GSUcnLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogaHR0cEVycm9yQ29uZmlnRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtIVFRQX0VSUk9SX0NPTkZJR10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIsIHVzZUNsYXNzOiBEYXRlUGFyc2VyRm9ybWF0dGVyIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=