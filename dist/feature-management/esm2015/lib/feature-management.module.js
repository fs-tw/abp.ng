import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FreeTextInputDirective } from './directives/free-text-input.directive';
import { FeatureManagementComponent } from './components/feature-management/feature-management.component';
import { FeatureManagementState } from './states/feature-management.state';
const exported = [FeatureManagementComponent, FreeTextInputDirective];
export class FeatureManagementModule {
}
FeatureManagementModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...exported],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    NgbNavModule,
                    NgxsModule.forFeature([FeatureManagementState]),
                ],
                exports: [...exported],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL2ZlYXR1cmUtbWFuYWdlbWVudC9zcmMvbGliL2ZlYXR1cmUtbWFuYWdlbWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTNFLE1BQU0sUUFBUSxHQUFHLENBQUMsMEJBQTBCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQVl0RSxNQUFNLE9BQU8sdUJBQXVCOzs7WUFWbkMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO2dCQUMzQixPQUFPLEVBQUU7b0JBQ1AsVUFBVTtvQkFDVixpQkFBaUI7b0JBQ2pCLFlBQVk7b0JBQ1osVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQ2hEO2dCQUNELE9BQU8sRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lU2hhcmVkTW9kdWxlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hzTW9kdWxlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBOZ2JOYXZNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZyZWVUZXh0SW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZnJlZS10ZXh0LWlucHV0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZlYXR1cmUtbWFuYWdlbWVudC9mZWF0dXJlLW1hbmFnZW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmVhdHVyZU1hbmFnZW1lbnRTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2ZlYXR1cmUtbWFuYWdlbWVudC5zdGF0ZSc7XHJcblxyXG5jb25zdCBleHBvcnRlZCA9IFtGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudCwgRnJlZVRleHRJbnB1dERpcmVjdGl2ZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogWy4uLmV4cG9ydGVkXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICBOZ2JOYXZNb2R1bGUsXHJcbiAgICBOZ3hzTW9kdWxlLmZvckZlYXR1cmUoW0ZlYXR1cmVNYW5hZ2VtZW50U3RhdGVdKSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFsuLi5leHBvcnRlZF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlTWFuYWdlbWVudE1vZHVsZSB7fVxyXG4iXX0=