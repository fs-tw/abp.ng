import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { LayoutModule } from '@fs/ng-alain/layout';
import { NgModule } from '@angular/core';
import { BASIC_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import * as i0 from "@angular/core";
export class NgAlainBasicModule {
    static forRoot() {
        return {
            ngModule: NgAlainBasicModule,
            providers: [BASIC_THEME_STYLES_PROVIDERS],
        };
    }
}
NgAlainBasicModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgAlainBasicModule });
NgAlainBasicModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgAlainBasicModule_Factory(t) { return new (t || NgAlainBasicModule)(); }, imports: [[
            NgAlainSharedModule,
            ThemeBasicModule,
            LayoutModule
        ],
        NgAlainSharedModule,
        ThemeBasicModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgAlainBasicModule, { imports: [NgAlainSharedModule,
        ThemeBasicModule,
        LayoutModule], exports: [NgAlainSharedModule,
        ThemeBasicModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgAlainBasicModule, [{
        type: NgModule,
        args: [{
                imports: [
                    NgAlainSharedModule,
                    ThemeBasicModule,
                    LayoutModule
                ],
                exports: [
                    NgAlainSharedModule,
                    ThemeBasicModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYWxhaW4tYmFzaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2Jhc2ljL3NyYy9saWIvbmctYWxhaW4tYmFzaWMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFhM0UsTUFBTSxPQUFPLGtCQUFrQjtJQUMzQixNQUFNLENBQUMsT0FBTztRQUNWLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7SUFDSixDQUFDOztzREFOTSxrQkFBa0I7bUhBQWxCLGtCQUFrQixrQkFWbEI7WUFDTCxtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLFlBQVk7U0FDZjtRQUVHLG1CQUFtQjtRQUNuQixnQkFBZ0I7d0ZBR1gsa0JBQWtCLGNBVHZCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsWUFBWSxhQUdaLG1CQUFtQjtRQUNuQixnQkFBZ0I7a0RBR1gsa0JBQWtCO2NBWDlCLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLFlBQVk7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO2lCQUNuQjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVCYXNpY01vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuYmFzaWMnO1xyXG5pbXBvcnQgeyBOZ0FsYWluU2hhcmVkTW9kdWxlIH0gZnJvbSAnQGZzL25nLWFsYWluL3NoYXJlZCc7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCQVNJQ19USEVNRV9TVFlMRVNfUFJPVklERVJTIH0gZnJvbSAnLi9wcm92aWRlcnMvc3R5bGVzLnByb3ZpZGVyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmdBbGFpblNoYXJlZE1vZHVsZSxcclxuICAgICAgICBUaGVtZUJhc2ljTW9kdWxlLFxyXG4gICAgICAgIExheW91dE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBOZ0FsYWluU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIFRoZW1lQmFzaWNNb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQWxhaW5CYXNpY01vZHVsZSB7IFxyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ0FsYWluQmFzaWNNb2R1bGU+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmdNb2R1bGU6IE5nQWxhaW5CYXNpY01vZHVsZSxcclxuICAgICAgICAgIHByb3ZpZGVyczogW0JBU0lDX1RIRU1FX1NUWUxFU19QUk9WSURFUlNdLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gICAgXHJcbn1cclxuIl19