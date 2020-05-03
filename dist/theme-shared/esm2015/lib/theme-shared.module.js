/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme-shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CoreModule, LazyLoadService, noop } from '@abp/ng.core';
import { DatePipe } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { NgbDateParserFormatter, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './components/button/button.component';
import { ChartComponent } from './components/chart/chart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HttpErrorWrapperComponent } from './components/http-error-wrapper/http-error-wrapper.component';
import { LoaderBarComponent } from './components/loader-bar/loader-bar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalContainerComponent } from './components/modal/modal-container.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SortOrderIconComponent } from './components/sort-order-icon/sort-order-icon.component';
import { TableEmptyMessageComponent } from './components/table-empty-message/table-empty-message.component';
import { TableComponent } from './components/table/table.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { ToastComponent } from './components/toast/toast.component';
import styles from './constants/styles';
import { LoadingDirective } from './directives/loading.directive';
import { TableSortDirective } from './directives/table-sort.directive';
import { ErrorHandler } from './handlers/error.handler';
import { THEME_SHARED_APPEND_CONTENT } from './tokens/append-content.token';
import { httpErrorConfigFactory, HTTP_ERROR_CONFIG } from './tokens/http-error.token';
import { DateParserFormatter } from './utils/date-parser-formatter';
import { chartJsLoaded$ } from './utils/widget-utils';
/**
 *
 * @deprecated To be deleted in v2.6
 *
 * @param {?} injector
 * @return {?}
 */
export function appendScript(injector) {
    /** @type {?} */
    const fn = (/**
     * @return {?}
     */
    () => {
        import('chart.js').then((/**
         * @return {?}
         */
        () => chartJsLoaded$.next(true)));
        /** @type {?} */
        const lazyLoadService = injector.get(LazyLoadService);
        return lazyLoadService.load(null, 'style', styles, 'head', 'beforeend').toPromise();
    });
    return fn;
}
export class ThemeSharedModule {
    /**
     * @param {?} errorHandler
     */
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options = (/** @type {?} */ ({}))) {
        return {
            ngModule: ThemeSharedModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [THEME_SHARED_APPEND_CONTENT],
                    useFactory: noop,
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
}
ThemeSharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [CoreModule, NgxValidateCoreModule, NgbPaginationModule],
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
                    PaginationComponent,
                    TableComponent,
                    TableEmptyMessageComponent,
                    ToastComponent,
                    ToastContainerComponent,
                    SortOrderIconComponent,
                    LoadingDirective,
                    TableSortDirective,
                ],
                exports: [
                    BreadcrumbComponent,
                    ButtonComponent,
                    ChartComponent,
                    ConfirmationComponent,
                    LoaderBarComponent,
                    LoadingComponent,
                    ModalComponent,
                    PaginationComponent,
                    TableComponent,
                    TableEmptyMessageComponent,
                    ToastComponent,
                    ToastContainerComponent,
                    SortOrderIconComponent,
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
            },] }
];
/** @nocollapse */
ThemeSharedModule.ctorParameters = () => [
    { type: ErrorHandler }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeSharedModule.prototype.errorHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3RoZW1lLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWlDLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FB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O29CQUNkLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixjQUFjO29CQUNkLDBCQUEwQjtvQkFDMUIsY0FBYztvQkFDZCx1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixrQkFBa0I7aUJBQ25CO2dCQUNELFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDckIsZUFBZSxFQUFFO29CQUNmLHlCQUF5QjtvQkFDekIsZ0JBQWdCO29CQUNoQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIscUJBQXFCO2lCQUN0QjthQUNGOzs7O1lBckVRLFlBQVk7Ozs7Ozs7SUF1RVAseUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZHVsZSwgTGF6eUxvYWRTZXJ2aWNlLCBub29wIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIEluamVjdG9yLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLCBOZ2JQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUgfSBmcm9tICdAbmd4LXZhbGlkYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGFydC9jaGFydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2h0dHAtZXJyb3Itd3JhcHBlci9odHRwLWVycm9yLXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGVyQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlci1iYXIvbG9hZGVyLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU29ydE9yZGVySWNvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zb3J0LW9yZGVyLWljb24vc29ydC1vcmRlci1pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYmxlRW1wdHlNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlLWVtcHR5LW1lc3NhZ2UvdGFibGUtZW1wdHktbWVzc2FnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b2FzdC1jb250YWluZXIvdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb25zdGFudHMvc3R5bGVzJztcclxuaW1wb3J0IHsgTG9hZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRhYmxlU29ydERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90YWJsZS1zb3J0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEVycm9ySGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvZXJyb3IuaGFuZGxlcic7XHJcbmltcG9ydCB7IFJvb3RQYXJhbXMgfSBmcm9tICcuL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBUSEVNRV9TSEFSRURfQVBQRU5EX0NPTlRFTlQgfSBmcm9tICcuL3Rva2Vucy9hcHBlbmQtY29udGVudC50b2tlbic7XHJcbmltcG9ydCB7IGh0dHBFcnJvckNvbmZpZ0ZhY3RvcnksIEhUVFBfRVJST1JfQ09ORklHIH0gZnJvbSAnLi90b2tlbnMvaHR0cC1lcnJvci50b2tlbic7XHJcbmltcG9ydCB7IERhdGVQYXJzZXJGb3JtYXR0ZXIgfSBmcm9tICcuL3V0aWxzL2RhdGUtcGFyc2VyLWZvcm1hdHRlcic7XHJcbmltcG9ydCB7IGNoYXJ0SnNMb2FkZWQkIH0gZnJvbSAnLi91dGlscy93aWRnZXQtdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIFRvIGJlIGRlbGV0ZWQgaW4gdjIuNlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFNjcmlwdChpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgIGltcG9ydCgnY2hhcnQuanMnKS50aGVuKCgpID0+IGNoYXJ0SnNMb2FkZWQkLm5leHQodHJ1ZSkpO1xyXG5cclxuICAgIGNvbnN0IGxhenlMb2FkU2VydmljZTogTGF6eUxvYWRTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0KExhenlMb2FkU2VydmljZSk7XHJcbiAgICByZXR1cm4gbGF6eUxvYWRTZXJ2aWNlLmxvYWQobnVsbCwgJ3N0eWxlJywgc3R5bGVzLCAnaGVhZCcsICdiZWZvcmVlbmQnKS50b1Byb21pc2UoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gZm47XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvcmVNb2R1bGUsIE5neFZhbGlkYXRlQ29yZU1vZHVsZSwgTmdiUGFnaW5hdGlvbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQ2hhcnRDb21wb25lbnQsXHJcbiAgICBDb25maXJtYXRpb25Db21wb25lbnQsXHJcbiAgICBIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50LFxyXG4gICAgTG9hZGVyQmFyQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0NvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxyXG4gICAgVGFibGVDb21wb25lbnQsXHJcbiAgICBUYWJsZUVtcHR5TWVzc2FnZUNvbXBvbmVudCxcclxuICAgIFRvYXN0Q29tcG9uZW50LFxyXG4gICAgVG9hc3RDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBTb3J0T3JkZXJJY29uQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0RpcmVjdGl2ZSxcclxuICAgIFRhYmxlU29ydERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGFydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIExvYWRlckJhckNvbXBvbmVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIFBhZ2luYXRpb25Db21wb25lbnQsXHJcbiAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIFRhYmxlRW1wdHlNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgVG9hc3RDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFNvcnRPcmRlckljb25Db21wb25lbnQsXHJcbiAgICBMb2FkaW5nRGlyZWN0aXZlLFxyXG4gICAgVGFibGVTb3J0RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbRGF0ZVBpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgSHR0cEVycm9yV3JhcHBlckNvbXBvbmVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFRvYXN0Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgQ29uZmlybWF0aW9uQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaGVtZVNoYXJlZE1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcikge31cclxuXHJcbiAgc3RhdGljIGZvclJvb3Qob3B0aW9ucyA9IHt9IGFzIFJvb3RQYXJhbXMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUaGVtZVNoYXJlZE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICBkZXBzOiBbVEhFTUVfU0hBUkVEX0FQUEVORF9DT05URU5UXSxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IG5vb3AsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfRVJST1JfQ09ORklHLCB1c2VWYWx1ZTogb3B0aW9ucy5odHRwRXJyb3JDb25maWcgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiAnSFRUUF9FUlJPUl9DT05GSUcnLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogaHR0cEVycm9yQ29uZmlnRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtIVFRQX0VSUk9SX0NPTkZJR10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIsIHVzZUNsYXNzOiBEYXRlUGFyc2VyRm9ybWF0dGVyIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=