import { FeatureManagementWrapModule } from '@fs/feature-management/wrap';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { FeatureManagementComponent } from './components/feature-management/feature-management.component';
import * as i0 from "@angular/core";
export class FeatureManagementNgAlainModule {
}
FeatureManagementNgAlainModule.ɵmod = i0.ɵɵdefineNgModule({ type: FeatureManagementNgAlainModule });
FeatureManagementNgAlainModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FeatureManagementNgAlainModule_Factory(t) { return new (t || FeatureManagementNgAlainModule)(); }, imports: [[
            CoreModule,
            NgAlainBasicModule,
            FeatureManagementWrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FeatureManagementNgAlainModule, { declarations: [FeatureManagementComponent], imports: [CoreModule,
        NgAlainBasicModule,
        FeatureManagementWrapModule], exports: [FeatureManagementComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FeatureManagementNgAlainModule, [{
        type: NgModule,
        args: [{
                declarations: [FeatureManagementComponent],
                imports: [
                    CoreModule,
                    NgAlainBasicModule,
                    FeatureManagementWrapModule
                ],
                exports: [FeatureManagementComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvZmVhdHVyZS1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvZmVhdHVyZS1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7O0FBVzFHLE1BQU0sT0FBTyw4QkFBOEI7O2tFQUE5Qiw4QkFBOEI7MklBQTlCLDhCQUE4QixrQkFQOUI7WUFDTCxVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLDJCQUEyQjtTQUM5Qjt3RkFHUSw4QkFBOEIsbUJBUnhCLDBCQUEwQixhQUVyQyxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLDJCQUEyQixhQUVyQiwwQkFBMEI7a0RBRTNCLDhCQUE4QjtjQVQxQyxRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQzFDLE9BQU8sRUFBRTtvQkFDTCxVQUFVO29CQUNWLGtCQUFrQjtvQkFDbEIsMkJBQTJCO2lCQUM5QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZlYXR1cmVNYW5hZ2VtZW50V3JhcE1vZHVsZSB9IGZyb20gJ0Bmcy9mZWF0dXJlLW1hbmFnZW1lbnQvd3JhcCc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0FsYWluQmFzaWNNb2R1bGUgfSBmcm9tICdAZnMvbmctYWxhaW4vYmFzaWMnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZWF0dXJlLW1hbmFnZW1lbnQvZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbRmVhdHVyZU1hbmFnZW1lbnRDb21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvcmVNb2R1bGUsXHJcbiAgICAgICAgTmdBbGFpbkJhc2ljTW9kdWxlLFxyXG4gICAgICAgIEZlYXR1cmVNYW5hZ2VtZW50V3JhcE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVNYW5hZ2VtZW50TmdBbGFpbk1vZHVsZSB7IH1cclxuIl19