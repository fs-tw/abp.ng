/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/theme.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var NB_MODULES = [
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
var COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
    TinyMCEComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
];
/** @type {?} */
var PIPES = [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe,
    NumberWithCommasPipe,
];
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    /**
     * @return {?}
     */
    ThemeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            ngModule: ThemeModule,
            providers: tslib_1.__spread(NbThemeModule.forRoot({
                name: 'default',
            }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers),
        }));
    };
    ThemeModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread([CommonModule], NB_MODULES),
                    exports: tslib_1.__spread([CommonModule], PIPES, COMPONENTS),
                    declarations: tslib_1.__spread(COMPONENTS, PIPES),
                },] }
    ];
    return ThemeModule;
}());
export { ThemeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AdGhlbWUvdGhlbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGNBQWMsRUFDZCxZQUFZLEVBQ1osY0FBYyxFQUNkLGVBQWUsRUFDZixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxjQUFjLEVBQ2QsWUFBWSxFQUNaLGFBQWEsR0FDZCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDdEYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFFMUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRXJFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFM0MsVUFBVSxHQUFHO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0NBQ2pCOztJQUNLLFVBQVUsR0FBRztJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQix5QkFBeUI7Q0FDMUI7O0lBQ0ssS0FBSyxHQUFHO0lBQ1osY0FBYztJQUNkLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLG9CQUFvQjtDQUNyQjtBQUVEO0lBQUE7SUFtQkEsQ0FBQzs7OztJQWJRLG1CQUFPOzs7SUFBZDtRQUNFLE9BQU8sbUJBQXFCO1lBQzFCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsbUJBQ0osYUFBYSxDQUFDLE9BQU8sQ0FDdEI7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7YUFDaEIsRUFDRCxDQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFVBQVUsQ0FBRSxDQUM3RCxDQUFDLFNBQVMsQ0FDWjtTQUNGLEVBQUEsQ0FBQztJQUNKLENBQUM7O2dCQWxCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxvQkFBRyxZQUFZLEdBQUssVUFBVSxDQUFDO29CQUN0QyxPQUFPLG9CQUFHLFlBQVksR0FBSyxLQUFLLEVBQUssVUFBVSxDQUFDO29CQUNoRCxZQUFZLG1CQUFNLFVBQVUsRUFBSyxLQUFLLENBQUM7aUJBQ3hDOztJQWVELGtCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FkWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBOYkFjdGlvbnNNb2R1bGUsXHJcbiAgTmJMYXlvdXRNb2R1bGUsXHJcbiAgTmJNZW51TW9kdWxlLFxyXG4gIE5iU2VhcmNoTW9kdWxlLFxyXG4gIE5iU2lkZWJhck1vZHVsZSxcclxuICBOYlVzZXJNb2R1bGUsXHJcbiAgTmJDb250ZXh0TWVudU1vZHVsZSxcclxuICBOYkJ1dHRvbk1vZHVsZSxcclxuICBOYlNlbGVjdE1vZHVsZSxcclxuICBOYkljb25Nb2R1bGUsXHJcbiAgTmJUaGVtZU1vZHVsZSxcclxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcbmltcG9ydCB7IE5iRXZhSWNvbnNNb2R1bGUgfSBmcm9tICdAbmVidWxhci9ldmEtaWNvbnMnO1xyXG5pbXBvcnQgeyBOYlNlY3VyaXR5TW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvc2VjdXJpdHknO1xyXG5cclxuXHJcbmltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtTZWFyY2hJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtUaW55TUNFQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvdGlueS1tY2UvdGlueS1tY2UuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7Q2FwaXRhbGl6ZVBpcGV9IGZyb20gJy4vcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuaW1wb3J0IHtQbHVyYWxQaXBlfSBmcm9tICcuL3BpcGVzL3BsdXJhbC5waXBlJztcclxuaW1wb3J0IHtSb3VuZFBpcGV9IGZyb20gJy4vcGlwZXMvcm91bmQucGlwZSc7XHJcbmltcG9ydCB7VGltaW5nUGlwZX0gZnJvbSAnLi9waXBlcy90aW1pbmcucGlwZSc7XHJcbmltcG9ydCB7TnVtYmVyV2l0aENvbW1hc1BpcGV9IGZyb20gJy4vcGlwZXMvbnVtYmVyLXdpdGgtY29tbWFzLnBpcGUnO1xyXG5cclxuaW1wb3J0IHtPbmVDb2x1bW5MYXlvdXRDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0cy9vbmUtY29sdW1uL29uZS1jb2x1bW4ubGF5b3V0JztcclxuaW1wb3J0IHtUaHJlZUNvbHVtbnNMYXlvdXRDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0cy90aHJlZS1jb2x1bW5zL3RocmVlLWNvbHVtbnMubGF5b3V0JztcclxuaW1wb3J0IHtUd29Db2x1bW5zTGF5b3V0Q29tcG9uZW50fSBmcm9tICcuL2xheW91dHMvdHdvLWNvbHVtbnMvdHdvLWNvbHVtbnMubGF5b3V0JztcclxuXHJcbmltcG9ydCB7IERFRkFVTFRfVEhFTUUgfSBmcm9tICcuL3N0eWxlcy90aGVtZS5kZWZhdWx0JztcclxuaW1wb3J0IHsgQ09TTUlDX1RIRU1FIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUuY29zbWljJztcclxuaW1wb3J0IHsgQ09SUE9SQVRFX1RIRU1FIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUuY29ycG9yYXRlJztcclxuaW1wb3J0IHsgREFSS19USEVNRSB9IGZyb20gJy4vc3R5bGVzL3RoZW1lLmRhcmsnO1xyXG5cclxuY29uc3QgTkJfTU9EVUxFUyA9IFtcclxuICBOYkxheW91dE1vZHVsZSxcclxuICBOYk1lbnVNb2R1bGUsXHJcbiAgTmJVc2VyTW9kdWxlLFxyXG4gIE5iQWN0aW9uc01vZHVsZSxcclxuICBOYlNlYXJjaE1vZHVsZSxcclxuICBOYlNpZGViYXJNb2R1bGUsXHJcbiAgTmJDb250ZXh0TWVudU1vZHVsZSxcclxuICBOYlNlY3VyaXR5TW9kdWxlLFxyXG4gIE5iQnV0dG9uTW9kdWxlLFxyXG4gIE5iU2VsZWN0TW9kdWxlLFxyXG4gIE5iSWNvbk1vZHVsZSxcclxuICBOYkV2YUljb25zTW9kdWxlLFxyXG5dO1xyXG5jb25zdCBDT01QT05FTlRTID0gW1xyXG4gIEhlYWRlckNvbXBvbmVudCxcclxuICBGb290ZXJDb21wb25lbnQsXHJcbiAgU2VhcmNoSW5wdXRDb21wb25lbnQsXHJcbiAgVGlueU1DRUNvbXBvbmVudCxcclxuICBPbmVDb2x1bW5MYXlvdXRDb21wb25lbnQsXHJcbiAgVGhyZWVDb2x1bW5zTGF5b3V0Q29tcG9uZW50LFxyXG4gIFR3b0NvbHVtbnNMYXlvdXRDb21wb25lbnQsXHJcbl07XHJcbmNvbnN0IFBJUEVTID0gW1xyXG4gIENhcGl0YWxpemVQaXBlLFxyXG4gIFBsdXJhbFBpcGUsXHJcbiAgUm91bmRQaXBlLFxyXG4gIFRpbWluZ1BpcGUsXHJcbiAgTnVtYmVyV2l0aENvbW1hc1BpcGUsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIC4uLk5CX01PRFVMRVNdLFxyXG4gIGV4cG9ydHM6IFtDb21tb25Nb2R1bGUsIC4uLlBJUEVTLCAuLi5DT01QT05FTlRTXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaGVtZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4gPE1vZHVsZVdpdGhQcm92aWRlcnM+e1xyXG4gICAgICBuZ01vZHVsZTogVGhlbWVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIC4uLk5iVGhlbWVNb2R1bGUuZm9yUm9vdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFsgREVGQVVMVF9USEVNRSwgQ09TTUlDX1RIRU1FLCBDT1JQT1JBVEVfVEhFTUUsIERBUktfVEhFTUUgXSxcclxuICAgICAgICApLnByb3ZpZGVycyxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==