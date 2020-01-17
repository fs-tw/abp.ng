/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme-shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CoreModule, LazyLoadService } from '@abp/ng.core';
import { DatePipe } from '@angular/common';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { ToastModule } from 'primeng/toast';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './components/button/button.component';
import { ChartComponent } from './components/chart/chart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HttpErrorWrapperComponent } from './components/http-error-wrapper/http-error-wrapper.component';
import { LoaderBarComponent } from './components/loader-bar/loader-bar.component';
import { ModalComponent } from './components/modal/modal.component';
import { SortOrderIconComponent } from './components/sort-order-icon/sort-order-icon.component';
import { TableEmptyMessageComponent } from './components/table-empty-message/table-empty-message.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { TableComponent } from './components/table/table.component';
import { ToastComponent } from './components/toast/toast.component';
import styles from './constants/styles';
import { TableSortDirective } from './directives/table-sort.directive';
import { ErrorHandler } from './handlers/error.handler';
import { httpErrorConfigFactory, HTTP_ERROR_CONFIG } from './tokens/http-error.token';
import { DateParserFormatter } from './utils/date-parser-formatter';
import { chartJsLoaded$ } from './utils/widget-utils';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingDirective } from './directives/loading.directive';
/**
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
                    deps: [Injector],
                    useFactory: appendScript,
                },
                { provide: MessageService, useClass: MessageService },
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
                imports: [CoreModule, ToastModule, NgxValidateCoreModule],
                declarations: [
                    BreadcrumbComponent,
                    ButtonComponent,
                    ChartComponent,
                    ConfirmationComponent,
                    HttpErrorWrapperComponent,
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
                entryComponents: [HttpErrorWrapperComponent, LoadingComponent],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3RoZW1lLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUs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QWU7b0JBQ2YsY0FBYztvQkFDZCxxQkFBcUI7b0JBQ3JCLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQixjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCwwQkFBMEI7b0JBQzFCLGNBQWM7b0JBQ2QsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsa0JBQWtCO2lCQUNuQjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JCLGVBQWUsRUFBRSxDQUFDLHlCQUF5QixFQUFFLGdCQUFnQixDQUFDO2FBQy9EOzs7O1lBM0RRLFlBQVk7Ozs7Ozs7SUE2RFAseUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZHVsZSwgTGF6eUxvYWRTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIEluamVjdG9yLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUgfSBmcm9tICdAbmd4LXZhbGlkYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvY29tcG9uZW50cy9jb21tb24vbWVzc2FnZXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUb2FzdE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdG9hc3QnO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGFydC9jaGFydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2h0dHAtZXJyb3Itd3JhcHBlci9odHRwLWVycm9yLXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGVyQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlci1iYXIvbG9hZGVyLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3J0T3JkZXJJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NvcnQtb3JkZXItaWNvbi9zb3J0LW9yZGVyLWljb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVFbXB0eU1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUtZW1wdHktbWVzc2FnZS90YWJsZS1lbXB0eS1tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RvYXN0LWNvbnRhaW5lci90b2FzdC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnN0YW50cy9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUYWJsZVNvcnREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGFibGUtc29ydC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBSb290UGFyYW1zIH0gZnJvbSAnLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgaHR0cEVycm9yQ29uZmlnRmFjdG9yeSwgSFRUUF9FUlJPUl9DT05GSUcgfSBmcm9tICcuL3Rva2Vucy9odHRwLWVycm9yLnRva2VuJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNlckZvcm1hdHRlciB9IGZyb20gJy4vdXRpbHMvZGF0ZS1wYXJzZXItZm9ybWF0dGVyJztcclxuaW1wb3J0IHsgY2hhcnRKc0xvYWRlZCQgfSBmcm9tICcuL3V0aWxzL3dpZGdldC11dGlscyc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbG9hZGluZy5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFNjcmlwdChpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgIGltcG9ydCgnY2hhcnQuanMnKS50aGVuKCgpID0+IGNoYXJ0SnNMb2FkZWQkLm5leHQodHJ1ZSkpO1xyXG5cclxuICAgIGNvbnN0IGxhenlMb2FkU2VydmljZTogTGF6eUxvYWRTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0KExhenlMb2FkU2VydmljZSk7XHJcbiAgICByZXR1cm4gbGF6eUxvYWRTZXJ2aWNlLmxvYWQobnVsbCwgJ3N0eWxlJywgc3R5bGVzLCAnaGVhZCcsICdiZWZvcmVlbmQnKS50b1Byb21pc2UoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gZm47XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvcmVNb2R1bGUsIFRvYXN0TW9kdWxlLCBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIENoYXJ0Q29tcG9uZW50LFxyXG4gICAgQ29uZmlybWF0aW9uQ29tcG9uZW50LFxyXG4gICAgSHR0cEVycm9yV3JhcHBlckNvbXBvbmVudCxcclxuICAgIExvYWRlckJhckNvbXBvbmVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIFBhZ2luYXRpb25Db21wb25lbnQsXHJcbiAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIFRhYmxlRW1wdHlNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgVG9hc3RDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFNvcnRPcmRlckljb25Db21wb25lbnQsXHJcbiAgICBMb2FkaW5nRGlyZWN0aXZlLFxyXG4gICAgVGFibGVTb3J0RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIENoYXJ0Q29tcG9uZW50LFxyXG4gICAgQ29uZmlybWF0aW9uQ29tcG9uZW50LFxyXG4gICAgTG9hZGVyQmFyQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0NvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcclxuICAgIFRhYmxlQ29tcG9uZW50LFxyXG4gICAgVGFibGVFbXB0eU1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbXBvbmVudCxcclxuICAgIFRvYXN0Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgU29ydE9yZGVySWNvbkNvbXBvbmVudCxcclxuICAgIExvYWRpbmdEaXJlY3RpdmUsXHJcbiAgICBUYWJsZVNvcnREaXJlY3RpdmUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtEYXRlUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbSHR0cEVycm9yV3JhcHBlckNvbXBvbmVudCwgTG9hZGluZ0NvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaGVtZVNoYXJlZE1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcikge31cclxuXHJcbiAgc3RhdGljIGZvclJvb3Qob3B0aW9ucyA9IHt9IGFzIFJvb3RQYXJhbXMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUaGVtZVNoYXJlZE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICBkZXBzOiBbSW5qZWN0b3JdLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogYXBwZW5kU2NyaXB0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBNZXNzYWdlU2VydmljZSwgdXNlQ2xhc3M6IE1lc3NhZ2VTZXJ2aWNlIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBIVFRQX0VSUk9SX0NPTkZJRywgdXNlVmFsdWU6IG9wdGlvbnMuaHR0cEVycm9yQ29uZmlnIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogJ0hUVFBfRVJST1JfQ09ORklHJyxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBFcnJvckNvbmZpZ0ZhY3RvcnksXHJcbiAgICAgICAgICBkZXBzOiBbSFRUUF9FUlJPUl9DT05GSUddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLCB1c2VDbGFzczogRGF0ZVBhcnNlckZvcm1hdHRlciB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19