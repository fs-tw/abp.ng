/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme-shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CoreModule, LazyLoadService } from '@abp/ng.core';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { ToastModule } from 'primeng/toast';
import { forkJoin } from 'rxjs';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './components/button/button.component';
import { ChartComponent } from './components/chart/chart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ErrorComponent } from './components/error/error.component';
import { LoaderBarComponent } from './components/loader-bar/loader-bar.component';
import { ModalComponent } from './components/modal/modal.component';
import { SortOrderIconComponent } from './components/sort-order-icon/sort-order-icon.component';
import { TableEmptyMessageComponent } from './components/table-empty-message/table-empty-message.component';
import { ToastComponent } from './components/toast/toast.component';
import styles from './contants/styles';
import { TableSortDirective } from './directives/table-sort.directive';
import { ErrorHandler } from './handlers/error.handler';
import { chartJsLoaded$ } from './utils/widget-utils';
import { HTTP_ERROR_CONFIG, httpErrorConfigFactory } from './tokens/http-error.token';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DateParserFormatter } from './utils/date-parser-formatter';
import { DatePipe } from '@angular/common';
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
        return forkJoin(lazyLoadService.load(null, 'style', styles, 'head', 'afterbegin') /* lazyLoadService.load(null, 'script', scripts) */).toPromise();
    });
    return fn;
}
export class ThemeSharedModule {
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
                    deps: [Injector, ErrorHandler],
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
                    ErrorComponent,
                    LoaderBarComponent,
                    ModalComponent,
                    TableEmptyMessageComponent,
                    ToastComponent,
                    SortOrderIconComponent,
                    TableSortDirective,
                ],
                exports: [
                    BreadcrumbComponent,
                    ButtonComponent,
                    ChartComponent,
                    ConfirmationComponent,
                    LoaderBarComponent,
                    ModalComponent,
                    TableEmptyMessageComponent,
                    ToastComponent,
                    SortOrderIconComponent,
                    TableSortDirective,
                ],
                providers: [DatePipe],
                entryComponents: [ErrorComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3RoZW1lLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFM0MsTUFBTSxVQUFVLFlBQVksQ0FBQyxRQUFrQjs7VUFDdkMsRUFBRTs7O0lBQUcsR0FBRyxFQUFFO1FBQ2QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUk7OztRQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQzs7Y0FFbkQsZUFBZSxHQUFvQixRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUV0RSxPQUFPLFFBQVEsQ0FDYixlQUFlLENBQUMsSUFBSSxDQUNsQixJQUFJLEVBQ0osT0FBTyxFQUNQLE1BQU0sRUFDTixNQUFNLEVBQ04sWUFBWSxDQUNiLENBQUMsbURBQW1ELENBQ3RELENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQyxDQUFBO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBZ0NELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLG1CQUFBLEVBQUUsRUFBYztRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLEtBQUssRUFBRSxJQUFJO29CQUNYLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUM7b0JBQzlCLFVBQVUsRUFBRSxZQUFZO2lCQUN6QjtnQkFDRCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtnQkFDckQsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxlQUFlLEVBQUU7Z0JBQ2pFO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFVBQVUsRUFBRSxzQkFBc0I7b0JBQ2xDLElBQUksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUMxQjtnQkFDRCxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7YUFDbkU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBbkRGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixDQUFDO2dCQUN6RCxZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QscUJBQXFCO29CQUNyQixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCwwQkFBMEI7b0JBQzFCLGNBQWM7b0JBQ2Qsc0JBQXNCO29CQUN0QixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxxQkFBcUI7b0JBQ3JCLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCwwQkFBMEI7b0JBQzFCLGNBQWM7b0JBQ2Qsc0JBQXNCO29CQUN0QixrQkFBa0I7aUJBQ25CO2dCQUNELFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDckIsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZHVsZSwgTGF6eUxvYWRTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4VmFsaWRhdGVDb3JlTW9kdWxlIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL21lc3NhZ2VzZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9hc3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RvYXN0JztcclxuaW1wb3J0IHsgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hhcnQvY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGVyQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlci1iYXIvbG9hZGVyLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3J0T3JkZXJJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NvcnQtb3JkZXItaWNvbi9zb3J0LW9yZGVyLWljb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVFbXB0eU1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUtZW1wdHktbWVzc2FnZS90YWJsZS1lbXB0eS1tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250YW50cy9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUYWJsZVNvcnREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGFibGUtc29ydC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBjaGFydEpzTG9hZGVkJCB9IGZyb20gJy4vdXRpbHMvd2lkZ2V0LXV0aWxzJztcclxuaW1wb3J0IHsgUm9vdFBhcmFtcyB9IGZyb20gJy4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IEhUVFBfRVJST1JfQ09ORklHLCBodHRwRXJyb3JDb25maWdGYWN0b3J5IH0gZnJvbSAnLi90b2tlbnMvaHR0cC1lcnJvci50b2tlbic7XHJcbmltcG9ydCB7IE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IERhdGVQYXJzZXJGb3JtYXR0ZXIgfSBmcm9tICcuL3V0aWxzL2RhdGUtcGFyc2VyLWZvcm1hdHRlcic7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRTY3JpcHQoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgY29uc3QgZm4gPSAoKSA9PiB7XHJcbiAgICBpbXBvcnQoJ2NoYXJ0LmpzJykudGhlbigoKSA9PiBjaGFydEpzTG9hZGVkJC5uZXh0KHRydWUpKTtcclxuXHJcbiAgICBjb25zdCBsYXp5TG9hZFNlcnZpY2U6IExhenlMb2FkU2VydmljZSA9IGluamVjdG9yLmdldChMYXp5TG9hZFNlcnZpY2UpO1xyXG5cclxuICAgIHJldHVybiBmb3JrSm9pbihcclxuICAgICAgbGF6eUxvYWRTZXJ2aWNlLmxvYWQoXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnc3R5bGUnLFxyXG4gICAgICAgIHN0eWxlcyxcclxuICAgICAgICAnaGVhZCcsXHJcbiAgICAgICAgJ2FmdGVyYmVnaW4nLFxyXG4gICAgICApIC8qIGxhenlMb2FkU2VydmljZS5sb2FkKG51bGwsICdzY3JpcHQnLCBzY3JpcHRzKSAqLyxcclxuICAgICkudG9Qcm9taXNlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZuO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb3JlTW9kdWxlLCBUb2FzdE1vZHVsZSwgTmd4VmFsaWRhdGVDb3JlTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGFydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIEVycm9yQ29tcG9uZW50LFxyXG4gICAgTG9hZGVyQmFyQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBUYWJsZUVtcHR5TWVzc2FnZUNvbXBvbmVudCxcclxuICAgIFRvYXN0Q29tcG9uZW50LFxyXG4gICAgU29ydE9yZGVySWNvbkNvbXBvbmVudCxcclxuICAgIFRhYmxlU29ydERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGFydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIExvYWRlckJhckNvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgVGFibGVFbXB0eU1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbXBvbmVudCxcclxuICAgIFNvcnRPcmRlckljb25Db21wb25lbnQsXHJcbiAgICBUYWJsZVNvcnREaXJlY3RpdmUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtEYXRlUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbRXJyb3JDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlbWVTaGFyZWRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnMgPSB7fSBhcyBSb290UGFyYW1zKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW0luamVjdG9yLCBFcnJvckhhbmRsZXJdLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogYXBwZW5kU2NyaXB0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBNZXNzYWdlU2VydmljZSwgdXNlQ2xhc3M6IE1lc3NhZ2VTZXJ2aWNlIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBIVFRQX0VSUk9SX0NPTkZJRywgdXNlVmFsdWU6IG9wdGlvbnMuaHR0cEVycm9yQ29uZmlnIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogJ0hUVFBfRVJST1JfQ09ORklHJyxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBFcnJvckNvbmZpZ0ZhY3RvcnksXHJcbiAgICAgICAgICBkZXBzOiBbSFRUUF9FUlJPUl9DT05GSUddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLCB1c2VDbGFzczogRGF0ZVBhcnNlckZvcm1hdHRlciB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19