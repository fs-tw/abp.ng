/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme-shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CoreModule, LazyLoadService } from '@abp/ng.core';
import { DatePipe } from '@angular/common';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { NgbDateParserFormatter, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
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
    var fn = (/**
     * @return {?}
     */
    function () {
        import('chart.js').then((/**
         * @return {?}
         */
        function () { return chartJsLoaded$.next(true); }));
        /** @type {?} */
        var lazyLoadService = injector.get(LazyLoadService);
        return lazyLoadService.load(null, 'style', styles, 'head', 'beforeend').toPromise();
    });
    return fn;
}
var ThemeSharedModule = /** @class */ (function () {
    function ThemeSharedModule(errorHandler) {
        this.errorHandler = errorHandler;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    ThemeSharedModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = (/** @type {?} */ ({})); }
        return {
            ngModule: ThemeSharedModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [Injector],
                    useFactory: appendScript,
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
    };
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
    ThemeSharedModule.ctorParameters = function () { return [
        { type: ErrorHandler }
    ]; };
    return ThemeSharedModule;
}());
export { ThemeSharedModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeSharedModule.prototype.errorHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3RoZW1lLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7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Q3ZCLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7cUJBQ25CO29CQUNELFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDckIsZUFBZSxFQUFFLENBQUMseUJBQXlCLEVBQUUsZ0JBQWdCLENBQUM7aUJBQy9EOzs7O2dCQTNEUSxZQUFZOztJQW1GckIsd0JBQUM7Q0FBQSxBQS9ERCxJQStEQztTQXZCWSxpQkFBaUI7Ozs7OztJQUNoQix5Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlTW9kdWxlLCBMYXp5TG9hZFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIsIE5nYlBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE5neFZhbGlkYXRlQ29yZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdmFsaWRhdGUvY29yZSc7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaHR0cC1lcnJvci13cmFwcGVyL2h0dHAtZXJyb3Itd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkZXJCYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGVyLWJhci9sb2FkZXItYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnRPcmRlckljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc29ydC1vcmRlci1pY29uL3NvcnQtb3JkZXItaWNvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJsZUVtcHR5TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS1lbXB0eS1tZXNzYWdlL3RhYmxlLWVtcHR5LW1lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29uc3RhbnRzL3N0eWxlcyc7XHJcbmltcG9ydCB7IFRhYmxlU29ydERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90YWJsZS1zb3J0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEVycm9ySGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvZXJyb3IuaGFuZGxlcic7XHJcbmltcG9ydCB7IFJvb3RQYXJhbXMgfSBmcm9tICcuL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBodHRwRXJyb3JDb25maWdGYWN0b3J5LCBIVFRQX0VSUk9SX0NPTkZJRyB9IGZyb20gJy4vdG9rZW5zL2h0dHAtZXJyb3IudG9rZW4nO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2VyRm9ybWF0dGVyIH0gZnJvbSAnLi91dGlscy9kYXRlLXBhcnNlci1mb3JtYXR0ZXInO1xyXG5pbXBvcnQgeyBjaGFydEpzTG9hZGVkJCB9IGZyb20gJy4vdXRpbHMvd2lkZ2V0LXV0aWxzJztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kU2NyaXB0KGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gIGNvbnN0IGZuID0gKCkgPT4ge1xyXG4gICAgaW1wb3J0KCdjaGFydC5qcycpLnRoZW4oKCkgPT4gY2hhcnRKc0xvYWRlZCQubmV4dCh0cnVlKSk7XHJcblxyXG4gICAgY29uc3QgbGF6eUxvYWRTZXJ2aWNlOiBMYXp5TG9hZFNlcnZpY2UgPSBpbmplY3Rvci5nZXQoTGF6eUxvYWRTZXJ2aWNlKTtcclxuICAgIHJldHVybiBsYXp5TG9hZFNlcnZpY2UubG9hZChudWxsLCAnc3R5bGUnLCBzdHlsZXMsICdoZWFkJywgJ2JlZm9yZWVuZCcpLnRvUHJvbWlzZSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBmbjtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29yZU1vZHVsZSwgTmd4VmFsaWRhdGVDb3JlTW9kdWxlLCBOZ2JQYWdpbmF0aW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGFydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQsXHJcbiAgICBMb2FkZXJCYXJDb21wb25lbnQsXHJcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxyXG4gICAgVGFibGVDb21wb25lbnQsXHJcbiAgICBUYWJsZUVtcHR5TWVzc2FnZUNvbXBvbmVudCxcclxuICAgIFRvYXN0Q29tcG9uZW50LFxyXG4gICAgVG9hc3RDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBTb3J0T3JkZXJJY29uQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0RpcmVjdGl2ZSxcclxuICAgIFRhYmxlU29ydERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGFydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIExvYWRlckJhckNvbXBvbmVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIFBhZ2luYXRpb25Db21wb25lbnQsXHJcbiAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIFRhYmxlRW1wdHlNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgVG9hc3RDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFNvcnRPcmRlckljb25Db21wb25lbnQsXHJcbiAgICBMb2FkaW5nRGlyZWN0aXZlLFxyXG4gICAgVGFibGVTb3J0RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbRGF0ZVBpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0h0dHBFcnJvcldyYXBwZXJDb21wb25lbnQsIExvYWRpbmdDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlbWVTaGFyZWRNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIpIHt9XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnMgPSB7fSBhcyBSb290UGFyYW1zKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW0luamVjdG9yXSxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGFwcGVuZFNjcmlwdCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogSFRUUF9FUlJPUl9DT05GSUcsIHVzZVZhbHVlOiBvcHRpb25zLmh0dHBFcnJvckNvbmZpZyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6ICdIVFRQX0VSUk9SX0NPTkZJRycsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBodHRwRXJyb3JDb25maWdGYWN0b3J5LFxyXG4gICAgICAgICAgZGVwczogW0hUVFBfRVJST1JfQ09ORklHXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogTmdiRGF0ZVBhcnNlckZvcm1hdHRlciwgdXNlQ2xhc3M6IERhdGVQYXJzZXJGb3JtYXR0ZXIgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==