var NgAlainBasicModule_1;
import { __decorate } from "tslib";
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { LayoutModule } from '@fs/ng-alain/layout';
import { NgModule } from '@angular/core';
import { BASIC_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
let NgAlainBasicModule = NgAlainBasicModule_1 = class NgAlainBasicModule {
    static forRoot() {
        return {
            ngModule: NgAlainBasicModule_1,
            providers: [BASIC_THEME_STYLES_PROVIDERS],
        };
    }
};
NgAlainBasicModule = NgAlainBasicModule_1 = __decorate([
    NgModule({
        imports: [
            NgAlainSharedModule,
            ThemeBasicModule,
            LayoutModule
        ],
        exports: [
            NgAlainSharedModule,
            ThemeBasicModule
        ]
    })
], NgAlainBasicModule);
export { NgAlainBasicModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYWxhaW4tYmFzaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2Jhc2ljL3NyYy9saWIvbmctYWxhaW4tYmFzaWMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBYTNFLElBQWEsa0JBQWtCLDBCQUEvQixNQUFhLGtCQUFrQjtJQUMzQixNQUFNLENBQUMsT0FBTztRQUNWLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7SUFDSixDQUFDO0NBQ04sQ0FBQTtBQVBZLGtCQUFrQjtJQVg5QixRQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLFlBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLG1CQUFtQjtZQUNuQixnQkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csa0JBQWtCLENBTzlCO1NBUFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVCYXNpY01vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuYmFzaWMnO1xyXG5pbXBvcnQgeyBOZ0FsYWluU2hhcmVkTW9kdWxlIH0gZnJvbSAnQGZzL25nLWFsYWluL3NoYXJlZCc7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCQVNJQ19USEVNRV9TVFlMRVNfUFJPVklERVJTIH0gZnJvbSAnLi9wcm92aWRlcnMvc3R5bGVzLnByb3ZpZGVyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmdBbGFpblNoYXJlZE1vZHVsZSxcclxuICAgICAgICBUaGVtZUJhc2ljTW9kdWxlLFxyXG4gICAgICAgIExheW91dE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBOZ0FsYWluU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIFRoZW1lQmFzaWNNb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQWxhaW5CYXNpY01vZHVsZSB7IFxyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ0FsYWluQmFzaWNNb2R1bGU+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmdNb2R1bGU6IE5nQWxhaW5CYXNpY01vZHVsZSxcclxuICAgICAgICAgIHByb3ZpZGVyczogW0JBU0lDX1RIRU1FX1NUWUxFU19QUk9WSURFUlNdLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gICAgXHJcbn1cclxuIl19