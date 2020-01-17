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
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3RoZW1lLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUs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QWM7d0JBQ2QscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsMEJBQTBCO3dCQUMxQixjQUFjO3dCQUNkLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjtxQkFDbkI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUNyQixlQUFlLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDL0Q7Ozs7Z0JBM0RRLFlBQVk7O0lBb0ZyQix3QkFBQztDQUFBLEFBaEVELElBZ0VDO1NBeEJZLGlCQUFpQjs7Ozs7O0lBQ2hCLHlDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNb2R1bGUsIExhenlMb2FkU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmd4VmFsaWRhdGVDb3JlTW9kdWxlIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL21lc3NhZ2VzZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9hc3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RvYXN0JztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hhcnQvY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSHR0cEVycm9yV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9odHRwLWVycm9yLXdyYXBwZXIvaHR0cC1lcnJvci13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRlckJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXItYmFyL2xvYWRlci1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU29ydE9yZGVySWNvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zb3J0LW9yZGVyLWljb24vc29ydC1vcmRlci1pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYmxlRW1wdHlNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlLWVtcHR5LW1lc3NhZ2UvdGFibGUtZW1wdHktbWVzc2FnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b2FzdC1jb250YWluZXIvdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb25zdGFudHMvc3R5bGVzJztcclxuaW1wb3J0IHsgVGFibGVTb3J0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RhYmxlLXNvcnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9lcnJvci5oYW5kbGVyJztcclxuaW1wb3J0IHsgUm9vdFBhcmFtcyB9IGZyb20gJy4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IGh0dHBFcnJvckNvbmZpZ0ZhY3RvcnksIEhUVFBfRVJST1JfQ09ORklHIH0gZnJvbSAnLi90b2tlbnMvaHR0cC1lcnJvci50b2tlbic7XHJcbmltcG9ydCB7IERhdGVQYXJzZXJGb3JtYXR0ZXIgfSBmcm9tICcuL3V0aWxzL2RhdGUtcGFyc2VyLWZvcm1hdHRlcic7XHJcbmltcG9ydCB7IGNoYXJ0SnNMb2FkZWQkIH0gZnJvbSAnLi91dGlscy93aWRnZXQtdXRpbHMnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRTY3JpcHQoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgY29uc3QgZm4gPSAoKSA9PiB7XHJcbiAgICBpbXBvcnQoJ2NoYXJ0LmpzJykudGhlbigoKSA9PiBjaGFydEpzTG9hZGVkJC5uZXh0KHRydWUpKTtcclxuXHJcbiAgICBjb25zdCBsYXp5TG9hZFNlcnZpY2U6IExhenlMb2FkU2VydmljZSA9IGluamVjdG9yLmdldChMYXp5TG9hZFNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIGxhenlMb2FkU2VydmljZS5sb2FkKG51bGwsICdzdHlsZScsIHN0eWxlcywgJ2hlYWQnLCAnYmVmb3JlZW5kJykudG9Qcm9taXNlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZuO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb3JlTW9kdWxlLCBUb2FzdE1vZHVsZSwgTmd4VmFsaWRhdGVDb3JlTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGFydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQsXHJcbiAgICBMb2FkZXJCYXJDb21wb25lbnQsXHJcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxyXG4gICAgVGFibGVDb21wb25lbnQsXHJcbiAgICBUYWJsZUVtcHR5TWVzc2FnZUNvbXBvbmVudCxcclxuICAgIFRvYXN0Q29tcG9uZW50LFxyXG4gICAgVG9hc3RDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBTb3J0T3JkZXJJY29uQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0RpcmVjdGl2ZSxcclxuICAgIFRhYmxlU29ydERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGFydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIExvYWRlckJhckNvbXBvbmVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIFBhZ2luYXRpb25Db21wb25lbnQsXHJcbiAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIFRhYmxlRW1wdHlNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgVG9hc3RDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFNvcnRPcmRlckljb25Db21wb25lbnQsXHJcbiAgICBMb2FkaW5nRGlyZWN0aXZlLFxyXG4gICAgVGFibGVTb3J0RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbRGF0ZVBpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0h0dHBFcnJvcldyYXBwZXJDb21wb25lbnQsIExvYWRpbmdDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlbWVTaGFyZWRNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIpIHt9XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnMgPSB7fSBhcyBSb290UGFyYW1zKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW0luamVjdG9yXSxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGFwcGVuZFNjcmlwdCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogTWVzc2FnZVNlcnZpY2UsIHVzZUNsYXNzOiBNZXNzYWdlU2VydmljZSB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogSFRUUF9FUlJPUl9DT05GSUcsIHVzZVZhbHVlOiBvcHRpb25zLmh0dHBFcnJvckNvbmZpZyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6ICdIVFRQX0VSUk9SX0NPTkZJRycsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBodHRwRXJyb3JDb25maWdGYWN0b3J5LFxyXG4gICAgICAgICAgZGVwczogW0hUVFBfRVJST1JfQ09ORklHXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogTmdiRGF0ZVBhcnNlckZvcm1hdHRlciwgdXNlQ2xhc3M6IERhdGVQYXJzZXJGb3JtYXR0ZXIgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==