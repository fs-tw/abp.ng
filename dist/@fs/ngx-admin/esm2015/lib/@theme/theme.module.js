/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/theme.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule, NbLayoutModule, NbMenuModule, NbSearchModule, NbSidebarModule, NbUserModule, NbContextMenuModule, NbButtonModule, NbSelectModule, NbIconModule, NbThemeModule, } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TinyMCEComponent } from './components/tiny-mce/tiny-mce.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PluralPipe } from './pipes/plural.pipe';
import { RoundPipe } from './pipes/round.pipe';
import { TimingPipe } from './pipes/timing.pipe';
import { NumberWithCommasPipe } from './pipes/number-with-commas.pipe';
import { OneColumnLayoutComponent } from './layouts/one-column/one-column.layout';
import { ThreeColumnsLayoutComponent } from './layouts/three-columns/three-columns.layout';
import { TwoColumnsLayoutComponent } from './layouts/two-columns/two-columns.layout';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
/** @type {?} */
const NB_MODULES = [
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbSecurityModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
];
/** @type {?} */
const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
    TinyMCEComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
];
/** @type {?} */
const PIPES = [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe,
    NumberWithCommasPipe,
];
export class ThemeModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: ThemeModule,
            providers: [
                ...NbThemeModule.forRoot({
                    name: 'default',
                }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers,
            ],
        }));
    }
}
ThemeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ...NB_MODULES],
                exports: [CommonModule, ...PIPES, ...COMPONENTS],
                declarations: [...COMPONENTS, ...PIPES],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AdGhlbWUvdGhlbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEVBQ2QsZUFBZSxFQUNmLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLGNBQWMsRUFDZCxZQUFZLEVBQ1osYUFBYSxHQUNkLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUN0RixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUUxRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDekYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFFbkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUUzQyxVQUFVLEdBQUc7SUFDakIsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7Q0FDakI7O01BQ0ssVUFBVSxHQUFHO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtDQUMxQjs7TUFDSyxLQUFLLEdBQUc7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0JBQW9CO0NBQ3JCO0FBT0QsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLG1CQUFxQjtZQUMxQixRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUN0QjtvQkFDRSxJQUFJLEVBQUUsU0FBUztpQkFDaEIsRUFDRCxDQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFVBQVUsQ0FBRSxDQUM3RCxDQUFDLFNBQVM7YUFDWjtTQUNGLEVBQUEsQ0FBQztJQUNKLENBQUM7OztZQWxCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsVUFBVSxDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxLQUFLLEVBQUUsR0FBRyxVQUFVLENBQUM7Z0JBQ2hELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDO2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBOYkFjdGlvbnNNb2R1bGUsXHJcbiAgTmJMYXlvdXRNb2R1bGUsXHJcbiAgTmJNZW51TW9kdWxlLFxyXG4gIE5iU2VhcmNoTW9kdWxlLFxyXG4gIE5iU2lkZWJhck1vZHVsZSxcclxuICBOYlVzZXJNb2R1bGUsXHJcbiAgTmJDb250ZXh0TWVudU1vZHVsZSxcclxuICBOYkJ1dHRvbk1vZHVsZSxcclxuICBOYlNlbGVjdE1vZHVsZSxcclxuICBOYkljb25Nb2R1bGUsXHJcbiAgTmJUaGVtZU1vZHVsZSxcclxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcbmltcG9ydCB7IE5iRXZhSWNvbnNNb2R1bGUgfSBmcm9tICdAbmVidWxhci9ldmEtaWNvbnMnO1xyXG5pbXBvcnQgeyBOYlNlY3VyaXR5TW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvc2VjdXJpdHknO1xyXG5cclxuXHJcbmltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtTZWFyY2hJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtUaW55TUNFQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvdGlueS1tY2UvdGlueS1tY2UuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7Q2FwaXRhbGl6ZVBpcGV9IGZyb20gJy4vcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuaW1wb3J0IHtQbHVyYWxQaXBlfSBmcm9tICcuL3BpcGVzL3BsdXJhbC5waXBlJztcclxuaW1wb3J0IHtSb3VuZFBpcGV9IGZyb20gJy4vcGlwZXMvcm91bmQucGlwZSc7XHJcbmltcG9ydCB7VGltaW5nUGlwZX0gZnJvbSAnLi9waXBlcy90aW1pbmcucGlwZSc7XHJcbmltcG9ydCB7TnVtYmVyV2l0aENvbW1hc1BpcGV9IGZyb20gJy4vcGlwZXMvbnVtYmVyLXdpdGgtY29tbWFzLnBpcGUnO1xyXG5cclxuaW1wb3J0IHtPbmVDb2x1bW5MYXlvdXRDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0cy9vbmUtY29sdW1uL29uZS1jb2x1bW4ubGF5b3V0JztcclxuaW1wb3J0IHtUaHJlZUNvbHVtbnNMYXlvdXRDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0cy90aHJlZS1jb2x1bW5zL3RocmVlLWNvbHVtbnMubGF5b3V0JztcclxuaW1wb3J0IHtUd29Db2x1bW5zTGF5b3V0Q29tcG9uZW50fSBmcm9tICcuL2xheW91dHMvdHdvLWNvbHVtbnMvdHdvLWNvbHVtbnMubGF5b3V0JztcclxuXHJcbmltcG9ydCB7IERFRkFVTFRfVEhFTUUgfSBmcm9tICcuL3N0eWxlcy90aGVtZS5kZWZhdWx0JztcclxuaW1wb3J0IHsgQ09TTUlDX1RIRU1FIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUuY29zbWljJztcclxuaW1wb3J0IHsgQ09SUE9SQVRFX1RIRU1FIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUuY29ycG9yYXRlJztcclxuaW1wb3J0IHsgREFSS19USEVNRSB9IGZyb20gJy4vc3R5bGVzL3RoZW1lLmRhcmsnO1xyXG5cclxuY29uc3QgTkJfTU9EVUxFUyA9IFtcclxuICBOYkxheW91dE1vZHVsZSxcclxuICBOYk1lbnVNb2R1bGUsXHJcbiAgTmJVc2VyTW9kdWxlLFxyXG4gIE5iQWN0aW9uc01vZHVsZSxcclxuICBOYlNlYXJjaE1vZHVsZSxcclxuICBOYlNpZGViYXJNb2R1bGUsXHJcbiAgTmJDb250ZXh0TWVudU1vZHVsZSxcclxuICBOYlNlY3VyaXR5TW9kdWxlLFxyXG4gIE5iQnV0dG9uTW9kdWxlLFxyXG4gIE5iU2VsZWN0TW9kdWxlLFxyXG4gIE5iSWNvbk1vZHVsZSxcclxuICBOYkV2YUljb25zTW9kdWxlLFxyXG5dO1xyXG5jb25zdCBDT01QT05FTlRTID0gW1xyXG4gIEhlYWRlckNvbXBvbmVudCxcclxuICBGb290ZXJDb21wb25lbnQsXHJcbiAgU2VhcmNoSW5wdXRDb21wb25lbnQsXHJcbiAgVGlueU1DRUNvbXBvbmVudCxcclxuICBPbmVDb2x1bW5MYXlvdXRDb21wb25lbnQsXHJcbiAgVGhyZWVDb2x1bW5zTGF5b3V0Q29tcG9uZW50LFxyXG4gIFR3b0NvbHVtbnNMYXlvdXRDb21wb25lbnQsXHJcbl07XHJcbmNvbnN0IFBJUEVTID0gW1xyXG4gIENhcGl0YWxpemVQaXBlLFxyXG4gIFBsdXJhbFBpcGUsXHJcbiAgUm91bmRQaXBlLFxyXG4gIFRpbWluZ1BpcGUsXHJcbiAgTnVtYmVyV2l0aENvbW1hc1BpcGUsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIC4uLk5CX01PRFVMRVNdLFxyXG4gIGV4cG9ydHM6IFtDb21tb25Nb2R1bGUsIC4uLlBJUEVTLCAuLi5DT01QT05FTlRTXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaGVtZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4gPE1vZHVsZVdpdGhQcm92aWRlcnM+e1xyXG4gICAgICBuZ01vZHVsZTogVGhlbWVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIC4uLk5iVGhlbWVNb2R1bGUuZm9yUm9vdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFsgREVGQVVMVF9USEVNRSwgQ09TTUlDX1RIRU1FLCBDT1JQT1JBVEVfVEhFTUUsIERBUktfVEhFTUUgXSxcclxuICAgICAgICApLnByb3ZpZGVycyxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==