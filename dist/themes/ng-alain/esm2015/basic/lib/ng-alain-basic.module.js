var NgAlainBasicModule_1;
import { __decorate } from "tslib";
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { LayoutModule } from '@fs/ng-alain/layout';
import { NgModule } from '@angular/core';
import { BASIC_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { FsNgAlainTreeComponent } from './components/fs-ng-alain-tree/fs-ng-alain-tree.component';
import { ThemeCoreModule } from '@fs/theme.core';
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
        declarations: [
            FsNgAlainTreeComponent
        ],
        imports: [
            ThemeCoreModule,
            NgAlainSharedModule,
            LayoutModule
        ],
        exports: [
            ThemeCoreModule,
            NgAlainSharedModule,
            FsNgAlainTreeComponent
        ]
    })
], NgAlainBasicModule);
export { NgAlainBasicModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYWxhaW4tYmFzaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2Jhc2ljL3NyYy9saWIvbmctYWxhaW4tYmFzaWMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWlCakQsSUFBYSxrQkFBa0IsMEJBQS9CLE1BQWEsa0JBQWtCO0lBQzNCLE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBa0I7WUFDNUIsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQztJQUNKLENBQUM7Q0FDTixDQUFBO0FBUFksa0JBQWtCO0lBZjlCLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBQztZQUNULHNCQUFzQjtTQUN6QjtRQUNELE9BQU8sRUFBRTtZQUNMLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsWUFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixzQkFBc0I7U0FDekI7S0FDSixDQUFDO0dBQ1csa0JBQWtCLENBTzlCO1NBUFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdBbGFpblNoYXJlZE1vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9zaGFyZWQnO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICdAZnMvbmctYWxhaW4vbGF5b3V0JztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQkFTSUNfVEhFTUVfU1RZTEVTX1BST1ZJREVSUyB9IGZyb20gJy4vcHJvdmlkZXJzL3N0eWxlcy5wcm92aWRlcic7XHJcbmltcG9ydCB7IEZzTmdBbGFpblRyZWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZnMtbmctYWxhaW4tdHJlZS9mcy1uZy1hbGFpbi10cmVlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRoZW1lQ29yZU1vZHVsZSB9IGZyb20gJ0Bmcy90aGVtZS5jb3JlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6W1xyXG4gICAgICAgIEZzTmdBbGFpblRyZWVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgVGhlbWVDb3JlTW9kdWxlLFxyXG4gICAgICAgIE5nQWxhaW5TaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgTGF5b3V0TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFRoZW1lQ29yZU1vZHVsZSxcclxuICAgICAgICBOZ0FsYWluU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIEZzTmdBbGFpblRyZWVDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQWxhaW5CYXNpY01vZHVsZSB7IFxyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ0FsYWluQmFzaWNNb2R1bGU+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmdNb2R1bGU6IE5nQWxhaW5CYXNpY01vZHVsZSxcclxuICAgICAgICAgIHByb3ZpZGVyczogW0JBU0lDX1RIRU1FX1NUWUxFU19QUk9WSURFUlNdLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gICAgXHJcbn1cclxuIl19