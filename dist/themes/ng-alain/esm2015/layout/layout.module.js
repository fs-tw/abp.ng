import { NgModule } from '@angular/core';
import { SharedModule } from '@fs/ng-alain/shared';
import { LayoutDefaultComponent } from './default/default.component';
import { HeaderFullScreenComponent } from './default/header/components/fullscreen.component';
import { HeaderI18nComponent } from './default/header/components/i18n.component';
import { HeaderIconComponent } from './default/header/components/icon.component';
import { HeaderNotifyComponent } from './default/header/components/notify.component';
import { HeaderSearchComponent } from './default/header/components/search.component';
import { HeaderStorageComponent } from './default/header/components/storage.component';
import { HeaderTaskComponent } from './default/header/components/task.component';
import { HeaderUserComponent } from './default/header/components/user.component';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';
import { SettingDrawerItemComponent } from './default/setting-drawer/setting-drawer-item.component';
import { SettingDrawerComponent } from './default/setting-drawer/setting-drawer.component';
import { LayoutThemeBtnComponent } from './default/theme-btn/theme-btn.component';
// passport
import { LayoutPassportComponent } from './passport/passport.component';
import * as i0 from "@angular/core";
const SETTINGDRAWER = [SettingDrawerComponent, SettingDrawerItemComponent];
const COMPONENTS = [
    LayoutDefaultComponent,
    LayoutFullScreenComponent,
    HeaderComponent,
    SidebarComponent,
    ...SETTINGDRAWER,
    LayoutThemeBtnComponent,
];
const HEADERCOMPONENTS = [
    HeaderSearchComponent,
    HeaderNotifyComponent,
    HeaderTaskComponent,
    HeaderIconComponent,
    HeaderFullScreenComponent,
    HeaderI18nComponent,
    HeaderStorageComponent,
    HeaderUserComponent,
];
const PASSPORT = [LayoutPassportComponent];
export class LayoutModule {
}
LayoutModule.ɵmod = i0.ɵɵdefineNgModule({ type: LayoutModule });
LayoutModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutModule, { declarations: [LayoutDefaultComponent,
        LayoutFullScreenComponent,
        HeaderComponent,
        SidebarComponent,
        SettingDrawerComponent, SettingDrawerItemComponent,
        LayoutThemeBtnComponent,
        HeaderSearchComponent,
        HeaderNotifyComponent,
        HeaderTaskComponent,
        HeaderIconComponent,
        HeaderFullScreenComponent,
        HeaderI18nComponent,
        HeaderStorageComponent,
        HeaderUserComponent,
        LayoutPassportComponent], imports: [SharedModule], exports: [LayoutDefaultComponent,
        LayoutFullScreenComponent,
        HeaderComponent,
        SidebarComponent,
        SettingDrawerComponent, SettingDrawerItemComponent,
        LayoutThemeBtnComponent,
        LayoutPassportComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayoutModule, [{
        type: NgModule,
        args: [{
                imports: [SharedModule],
                entryComponents: SETTINGDRAWER,
                declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT],
                exports: [...COMPONENTS, ...PASSPORT],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9sYXlvdXQvc3JjL2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBdUJsRixXQUFXO0FBQ1gsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBdEJ4RSxNQUFNLGFBQWEsR0FBRyxDQUFDLHNCQUFzQixFQUFFLDBCQUEwQixDQUFDLENBQUM7QUFDM0UsTUFBTSxVQUFVLEdBQUc7SUFDakIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLEdBQUcsYUFBYTtJQUNoQix1QkFBdUI7Q0FDeEIsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUc7SUFDdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtDQUNwQixDQUFDO0FBSUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBUTNDLE1BQU0sT0FBTyxZQUFZOztnREFBWixZQUFZO3VHQUFaLFlBQVksa0JBTGQsQ0FBQyxZQUFZLENBQUM7d0ZBS1osWUFBWSxtQkE3QnZCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGdCQUFnQjtRQUxLLHNCQUFzQixFQUFFLDBCQUEwQjtRQU92RSx1QkFBdUI7UUFJdkIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUtILHVCQUF1QixhQUc3QixZQUFZLGFBeEJ0QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixnQkFBZ0I7UUFMSyxzQkFBc0IsRUFBRSwwQkFBMEI7UUFPdkUsdUJBQXVCO1FBZ0JQLHVCQUF1QjtrREFRNUIsWUFBWTtjQU54QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixlQUFlLEVBQUUsYUFBYTtnQkFDOUIsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxnQkFBZ0IsRUFBRSxHQUFHLFFBQVEsQ0FBQztnQkFDL0QsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxRQUFRLENBQUM7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICdAZnMvbmctYWxhaW4vc2hhcmVkJztcclxuXHJcbmltcG9ydCB7IExheW91dERlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZWFkZXJGdWxsU2NyZWVuQ29tcG9uZW50IH0gZnJvbSAnLi9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL2Z1bGxzY3JlZW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVhZGVySTE4bkNvbXBvbmVudCB9IGZyb20gJy4vZGVmYXVsdC9oZWFkZXIvY29tcG9uZW50cy9pMThuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlckljb25Db21wb25lbnQgfSBmcm9tICcuL2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvaWNvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZWFkZXJOb3RpZnlDb21wb25lbnQgfSBmcm9tICcuL2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvbm90aWZ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlclNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vZGVmYXVsdC9oZWFkZXIvY29tcG9uZW50cy9zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVhZGVyU3RvcmFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGVmYXVsdC9oZWFkZXIvY29tcG9uZW50cy9zdG9yYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlclRhc2tDb21wb25lbnQgfSBmcm9tICcuL2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvdGFzay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZWFkZXJVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL3VzZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kZWZhdWx0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vZGVmYXVsdC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5b3V0RnVsbFNjcmVlbkNvbXBvbmVudCB9IGZyb20gJy4vZnVsbHNjcmVlbi9mdWxsc2NyZWVuLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBTZXR0aW5nRHJhd2VySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZGVmYXVsdC9zZXR0aW5nLWRyYXdlci9zZXR0aW5nLWRyYXdlci1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNldHRpbmdEcmF3ZXJDb21wb25lbnQgfSBmcm9tICcuL2RlZmF1bHQvc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5b3V0VGhlbWVCdG5Db21wb25lbnQgfSBmcm9tICcuL2RlZmF1bHQvdGhlbWUtYnRuL3RoZW1lLWJ0bi5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgU0VUVElOR0RSQVdFUiA9IFtTZXR0aW5nRHJhd2VyQ29tcG9uZW50LCBTZXR0aW5nRHJhd2VySXRlbUNvbXBvbmVudF07XHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXHJcbiAgTGF5b3V0RGVmYXVsdENvbXBvbmVudCxcclxuICBMYXlvdXRGdWxsU2NyZWVuQ29tcG9uZW50LFxyXG4gIEhlYWRlckNvbXBvbmVudCxcclxuICBTaWRlYmFyQ29tcG9uZW50LFxyXG4gIC4uLlNFVFRJTkdEUkFXRVIsXHJcbiAgTGF5b3V0VGhlbWVCdG5Db21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBIRUFERVJDT01QT05FTlRTID0gW1xyXG4gIEhlYWRlclNlYXJjaENvbXBvbmVudCxcclxuICBIZWFkZXJOb3RpZnlDb21wb25lbnQsXHJcbiAgSGVhZGVyVGFza0NvbXBvbmVudCxcclxuICBIZWFkZXJJY29uQ29tcG9uZW50LFxyXG4gIEhlYWRlckZ1bGxTY3JlZW5Db21wb25lbnQsXHJcbiAgSGVhZGVySTE4bkNvbXBvbmVudCxcclxuICBIZWFkZXJTdG9yYWdlQ29tcG9uZW50LFxyXG4gIEhlYWRlclVzZXJDb21wb25lbnQsXHJcbl07XHJcblxyXG4vLyBwYXNzcG9ydFxyXG5pbXBvcnQgeyBMYXlvdXRQYXNzcG9ydENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3BvcnQvcGFzc3BvcnQuY29tcG9uZW50JztcclxuY29uc3QgUEFTU1BPUlQgPSBbTGF5b3V0UGFzc3BvcnRDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFNFVFRJTkdEUkFXRVIsXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgLi4uSEVBREVSQ09NUE9ORU5UUywgLi4uUEFTU1BPUlRdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTLCAuLi5QQVNTUE9SVF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge31cclxuIl19