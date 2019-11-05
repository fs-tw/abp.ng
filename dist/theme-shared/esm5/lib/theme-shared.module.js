/**
 * @fileoverview added by tsickle
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
        return forkJoin(lazyLoadService.load(null, 'style', styles, 'head', 'afterbegin') /* lazyLoadService.load(null, 'script', scripts) */).toPromise();
    });
    return fn;
}
var ThemeSharedModule = /** @class */ (function () {
    function ThemeSharedModule() {
    }
    /**
     * @return {?}
     */
    ThemeSharedModule.forRoot = /**
     * @return {?}
     */
    function () {
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
                    entryComponents: [ErrorComponent],
                },] }
    ];
    return ThemeSharedModule;
}());
export { ThemeSharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3RoZW1lLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBRXRELE1BQU0sVUFBVSxZQUFZLENBQUMsUUFBa0I7O1FBQ3ZDLEVBQUU7OztJQUFHO1FBQ1QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUk7OztRQUFDLGNBQU0sT0FBQSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF6QixDQUF5QixFQUFDLENBQUM7O1lBRW5ELGVBQWUsR0FBb0IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7UUFFdEUsT0FBTyxRQUFRLENBQ2IsZUFBZSxDQUFDLElBQUksQ0FDbEIsSUFBSSxFQUNKLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLFlBQVksQ0FDYixDQUFDLG1EQUFtRCxDQUN0RCxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLENBQUMsQ0FBQTtJQUVELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUVEO0lBQUE7SUE0Q0EsQ0FBQzs7OztJQWRRLHlCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQztvQkFDOUIsVUFBVSxFQUFFLFlBQVk7aUJBQ3pCO2dCQUNELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO2FBQ3REO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQTNDRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQztvQkFDekQsWUFBWSxFQUFFO3dCQUNaLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsMEJBQTBCO3dCQUMxQixjQUFjO3dCQUNkLHNCQUFzQjt3QkFDdEIsa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsMEJBQTBCO3dCQUMxQixjQUFjO3dCQUNkLHNCQUFzQjt3QkFDdEIsa0JBQWtCO3FCQUNuQjtvQkFDRCxlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQ2xDOztJQWdCRCx3QkFBQztDQUFBLEFBNUNELElBNENDO1NBZlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZHVsZSwgTGF6eUxvYWRTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4VmFsaWRhdGVDb3JlTW9kdWxlIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL21lc3NhZ2VzZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9hc3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RvYXN0JztcclxuaW1wb3J0IHsgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hhcnQvY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGVyQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlci1iYXIvbG9hZGVyLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3J0T3JkZXJJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NvcnQtb3JkZXItaWNvbi9zb3J0LW9yZGVyLWljb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVFbXB0eU1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUtZW1wdHktbWVzc2FnZS90YWJsZS1lbXB0eS1tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250YW50cy9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUYWJsZVNvcnREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGFibGUtc29ydC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBjaGFydEpzTG9hZGVkJCB9IGZyb20gJy4vdXRpbHMvd2lkZ2V0LXV0aWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRTY3JpcHQoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgY29uc3QgZm4gPSAoKSA9PiB7XHJcbiAgICBpbXBvcnQoJ2NoYXJ0LmpzJykudGhlbigoKSA9PiBjaGFydEpzTG9hZGVkJC5uZXh0KHRydWUpKTtcclxuXHJcbiAgICBjb25zdCBsYXp5TG9hZFNlcnZpY2U6IExhenlMb2FkU2VydmljZSA9IGluamVjdG9yLmdldChMYXp5TG9hZFNlcnZpY2UpO1xyXG5cclxuICAgIHJldHVybiBmb3JrSm9pbihcclxuICAgICAgbGF6eUxvYWRTZXJ2aWNlLmxvYWQoXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnc3R5bGUnLFxyXG4gICAgICAgIHN0eWxlcyxcclxuICAgICAgICAnaGVhZCcsXHJcbiAgICAgICAgJ2FmdGVyYmVnaW4nLFxyXG4gICAgICApIC8qIGxhenlMb2FkU2VydmljZS5sb2FkKG51bGwsICdzY3JpcHQnLCBzY3JpcHRzKSAqLyxcclxuICAgICkudG9Qcm9taXNlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZuO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb3JlTW9kdWxlLCBUb2FzdE1vZHVsZSwgTmd4VmFsaWRhdGVDb3JlTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGFydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIEVycm9yQ29tcG9uZW50LFxyXG4gICAgTG9hZGVyQmFyQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBUYWJsZUVtcHR5TWVzc2FnZUNvbXBvbmVudCxcclxuICAgIFRvYXN0Q29tcG9uZW50LFxyXG4gICAgU29ydE9yZGVySWNvbkNvbXBvbmVudCxcclxuICAgIFRhYmxlU29ydERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGFydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIExvYWRlckJhckNvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgVGFibGVFbXB0eU1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbXBvbmVudCxcclxuICAgIFNvcnRPcmRlckljb25Db21wb25lbnQsXHJcbiAgICBUYWJsZVNvcnREaXJlY3RpdmUsXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtFcnJvckNvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaGVtZVNoYXJlZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW0luamVjdG9yLCBFcnJvckhhbmRsZXJdLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogYXBwZW5kU2NyaXB0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBNZXNzYWdlU2VydmljZSwgdXNlQ2xhc3M6IE1lc3NhZ2VTZXJ2aWNlIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=