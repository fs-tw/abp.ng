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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3RoZW1lLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWlDLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FB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cUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCwwQkFBMEI7d0JBQzFCLGNBQWM7d0JBQ2QsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3FCQUNuQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ3JCLGVBQWUsRUFBRTt3QkFDZix5QkFBeUI7d0JBQ3pCLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3dCQUN2Qix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjtxQkFDdEI7aUJBQ0Y7Ozs7Z0JBckVRLFlBQVk7O0lBNkZyQix3QkFBQztDQUFBLEFBdEVELElBc0VDO1NBdkJZLGlCQUFpQjs7Ozs7O0lBQ2hCLHlDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNb2R1bGUsIExhenlMb2FkU2VydmljZSwgbm9vcCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciwgTmdiUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmd4VmFsaWRhdGVDb3JlTW9kdWxlIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hhcnQvY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSHR0cEVycm9yV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9odHRwLWVycm9yLXdyYXBwZXIvaHR0cC1lcnJvci13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRlckJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXItYmFyL2xvYWRlci1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnRPcmRlckljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc29ydC1vcmRlci1pY29uL3NvcnQtb3JkZXItaWNvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJsZUVtcHR5TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS1lbXB0eS1tZXNzYWdlL3RhYmxlLWVtcHR5LW1lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29uc3RhbnRzL3N0eWxlcyc7XHJcbmltcG9ydCB7IExvYWRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbG9hZGluZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJsZVNvcnREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGFibGUtc29ydC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBSb290UGFyYW1zIH0gZnJvbSAnLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgVEhFTUVfU0hBUkVEX0FQUEVORF9DT05URU5UIH0gZnJvbSAnLi90b2tlbnMvYXBwZW5kLWNvbnRlbnQudG9rZW4nO1xyXG5pbXBvcnQgeyBodHRwRXJyb3JDb25maWdGYWN0b3J5LCBIVFRQX0VSUk9SX0NPTkZJRyB9IGZyb20gJy4vdG9rZW5zL2h0dHAtZXJyb3IudG9rZW4nO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2VyRm9ybWF0dGVyIH0gZnJvbSAnLi91dGlscy9kYXRlLXBhcnNlci1mb3JtYXR0ZXInO1xyXG5pbXBvcnQgeyBjaGFydEpzTG9hZGVkJCB9IGZyb20gJy4vdXRpbHMvd2lkZ2V0LXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAZGVwcmVjYXRlZCBUbyBiZSBkZWxldGVkIGluIHYyLjZcclxuICpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRTY3JpcHQoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgY29uc3QgZm4gPSAoKSA9PiB7XHJcbiAgICBpbXBvcnQoJ2NoYXJ0LmpzJykudGhlbigoKSA9PiBjaGFydEpzTG9hZGVkJC5uZXh0KHRydWUpKTtcclxuXHJcbiAgICBjb25zdCBsYXp5TG9hZFNlcnZpY2U6IExhenlMb2FkU2VydmljZSA9IGluamVjdG9yLmdldChMYXp5TG9hZFNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIGxhenlMb2FkU2VydmljZS5sb2FkKG51bGwsICdzdHlsZScsIHN0eWxlcywgJ2hlYWQnLCAnYmVmb3JlZW5kJykudG9Qcm9taXNlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZuO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb3JlTW9kdWxlLCBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUsIE5nYlBhZ2luYXRpb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIENoYXJ0Q29tcG9uZW50LFxyXG4gICAgQ29uZmlybWF0aW9uQ29tcG9uZW50LFxyXG4gICAgSHR0cEVycm9yV3JhcHBlckNvbXBvbmVudCxcclxuICAgIExvYWRlckJhckNvbXBvbmVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcclxuICAgIFRhYmxlQ29tcG9uZW50LFxyXG4gICAgVGFibGVFbXB0eU1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbXBvbmVudCxcclxuICAgIFRvYXN0Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgU29ydE9yZGVySWNvbkNvbXBvbmVudCxcclxuICAgIExvYWRpbmdEaXJlY3RpdmUsXHJcbiAgICBUYWJsZVNvcnREaXJlY3RpdmUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQ2hhcnRDb21wb25lbnQsXHJcbiAgICBDb25maXJtYXRpb25Db21wb25lbnQsXHJcbiAgICBMb2FkZXJCYXJDb21wb25lbnQsXHJcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxyXG4gICAgVGFibGVDb21wb25lbnQsXHJcbiAgICBUYWJsZUVtcHR5TWVzc2FnZUNvbXBvbmVudCxcclxuICAgIFRvYXN0Q29tcG9uZW50LFxyXG4gICAgVG9hc3RDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBTb3J0T3JkZXJJY29uQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0RpcmVjdGl2ZSxcclxuICAgIFRhYmxlU29ydERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW0RhdGVQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQsXHJcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlbWVTaGFyZWRNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIpIHt9XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnMgPSB7fSBhcyBSb290UGFyYW1zKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW1RIRU1FX1NIQVJFRF9BUFBFTkRfQ09OVEVOVF0sXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBub29wLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBIVFRQX0VSUk9SX0NPTkZJRywgdXNlVmFsdWU6IG9wdGlvbnMuaHR0cEVycm9yQ29uZmlnIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogJ0hUVFBfRVJST1JfQ09ORklHJyxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBFcnJvckNvbmZpZ0ZhY3RvcnksXHJcbiAgICAgICAgICBkZXBzOiBbSFRUUF9FUlJPUl9DT05GSUddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLCB1c2VDbGFzczogRGF0ZVBhcnNlckZvcm1hdHRlciB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19