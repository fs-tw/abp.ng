import { addAbpRoutes, ConfigStateService, eLayoutType, ABP } from '@abp/ng.core';
import { Injectable, Injector } from '@angular/core';
import { ThemeCoreService, IConfigService } from '@fs/theme.core';
import { Store } from '@ngxs/store';
import { concat, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SettingManagementConfigService {

  get configStateService(): ConfigStateService {
    return this.injector.get(ConfigStateService);
  }
  get themeCoreService(): ThemeCoreService {
    return this.injector.get(ThemeCoreService);
  }

  get store(): Store {
    return this.injector.get(Store);
  }

  constructor(private injector: Injector) {
  }

  registerRoutes(): Observable<any> {   
   
     const route = {
      name: 'Setting management',
      path: 'setting-management',
      parentName: 'AbpUiNavigation::Menu:Administration',
      requiredPolicy: 'FS.Abp.SettingManagement.Core.DevelopPage',
      layout: eLayoutType.application,
      order: 6,
      iconClass: 'fa fa-cog',
      children: [
        {
          path: 'settings',
          name: '系統設定',
          order: 1,
          requiredPolicy: 'FS.Abp.SettingManagement.Core.DevelopPage',
        },
      ],      
    } as ABP.FullRoute;

     let codingRoute$ = this.themeCoreService.dispatchAddOrPatchRoute(route);  
     return concat(codingRoute$);
   }

  
}
