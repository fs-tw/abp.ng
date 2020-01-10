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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3RoZW1lLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUs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aEIsY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2QsMEJBQTBCO29CQUMxQixjQUFjO29CQUNkLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixrQkFBa0I7aUJBQ25CO2dCQUNELFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDckIsZUFBZSxFQUFFLENBQUMseUJBQXlCLEVBQUUsZ0JBQWdCLENBQUM7YUFDL0Q7Ozs7WUF6RFEsWUFBWTs7Ozs7OztJQTJEUCx5Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlTW9kdWxlLCBMYXp5TG9hZFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE5neFZhbGlkYXRlQ29yZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdmFsaWRhdGUvY29yZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9tZXNzYWdlc2VydmljZSc7XHJcbmltcG9ydCB7IFRvYXN0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy90b2FzdCc7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaHR0cC1lcnJvci13cmFwcGVyL2h0dHAtZXJyb3Itd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkZXJCYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGVyLWJhci9sb2FkZXItYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnRPcmRlckljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc29ydC1vcmRlci1pY29uL3NvcnQtb3JkZXItaWNvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJsZUVtcHR5TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS1lbXB0eS1tZXNzYWdlL3RhYmxlLWVtcHR5LW1lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnN0YW50cy9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUYWJsZVNvcnREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGFibGUtc29ydC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBSb290UGFyYW1zIH0gZnJvbSAnLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgaHR0cEVycm9yQ29uZmlnRmFjdG9yeSwgSFRUUF9FUlJPUl9DT05GSUcgfSBmcm9tICcuL3Rva2Vucy9odHRwLWVycm9yLnRva2VuJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNlckZvcm1hdHRlciB9IGZyb20gJy4vdXRpbHMvZGF0ZS1wYXJzZXItZm9ybWF0dGVyJztcclxuaW1wb3J0IHsgY2hhcnRKc0xvYWRlZCQgfSBmcm9tICcuL3V0aWxzL3dpZGdldC11dGlscyc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbG9hZGluZy5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFNjcmlwdChpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgIGltcG9ydCgnY2hhcnQuanMnKS50aGVuKCgpID0+IGNoYXJ0SnNMb2FkZWQkLm5leHQodHJ1ZSkpO1xyXG5cclxuICAgIGNvbnN0IGxhenlMb2FkU2VydmljZTogTGF6eUxvYWRTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0KExhenlMb2FkU2VydmljZSk7XHJcbiAgICByZXR1cm4gbGF6eUxvYWRTZXJ2aWNlLmxvYWQobnVsbCwgJ3N0eWxlJywgc3R5bGVzLCAnaGVhZCcsICdiZWZvcmVlbmQnKS50b1Byb21pc2UoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gZm47XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvcmVNb2R1bGUsIFRvYXN0TW9kdWxlLCBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIENoYXJ0Q29tcG9uZW50LFxyXG4gICAgQ29uZmlybWF0aW9uQ29tcG9uZW50LFxyXG4gICAgSHR0cEVycm9yV3JhcHBlckNvbXBvbmVudCxcclxuICAgIExvYWRlckJhckNvbXBvbmVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIFBhZ2luYXRpb25Db21wb25lbnQsXHJcbiAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIFRhYmxlRW1wdHlNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgVG9hc3RDb21wb25lbnQsXHJcbiAgICBTb3J0T3JkZXJJY29uQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0RpcmVjdGl2ZSxcclxuICAgIFRhYmxlU29ydERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGFydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIExvYWRlckJhckNvbXBvbmVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIFBhZ2luYXRpb25Db21wb25lbnQsXHJcbiAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIFRhYmxlRW1wdHlNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgVG9hc3RDb21wb25lbnQsXHJcbiAgICBTb3J0T3JkZXJJY29uQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0RpcmVjdGl2ZSxcclxuICAgIFRhYmxlU29ydERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW0RhdGVQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50LCBMb2FkaW5nQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZW1lU2hhcmVkTW9kdWxlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyKSB7fVxyXG5cclxuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zID0ge30gYXMgUm9vdFBhcmFtcyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRoZW1lU2hhcmVkTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBhcHBlbmRTY3JpcHQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IE1lc3NhZ2VTZXJ2aWNlLCB1c2VDbGFzczogTWVzc2FnZVNlcnZpY2UgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfRVJST1JfQ09ORklHLCB1c2VWYWx1ZTogb3B0aW9ucy5odHRwRXJyb3JDb25maWcgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiAnSFRUUF9FUlJPUl9DT05GSUcnLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogaHR0cEVycm9yQ29uZmlnRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtIVFRQX0VSUk9SX0NPTkZJR10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIsIHVzZUNsYXNzOiBEYXRlUGFyc2VyRm9ybWF0dGVyIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=