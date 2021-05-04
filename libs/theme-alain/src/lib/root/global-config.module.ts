import { ModuleWithProviders, NgModule } from '@angular/core';
import { AlainThemeModule } from '@delon/theme';
import { AlainConfig, ALAIN_CONFIG } from '@delon/util';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { LANG_PROVIDES } from './providers/lang.provider';

// #region reuse-tab
/**
 * 若需要[路由复用](https://ng-alain.com/components/reuse-tab)需要：
 * 1、在 `shared-delon.module.ts` 导入 `ReuseTabModule` 模块
 * 2、注册 `RouteReuseStrategy`
 * 3、在 `src/app/layout/default/default.component.html` 修改：
 *  ```html
 *  <section class="alain-default__content">
 *    <reuse-tab #reuseTab></reuse-tab>
 *    <router-outlet (activate)="reuseTab.activate($event)"></router-outlet>
 *  </section>
 *  ```
 */
// import { RouteReuseStrategy } from '@angular/router';
// import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
// alainProvides.push({
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// } as any);

// #endregion

//import { DelonACLModule } from '@delon/acl';

// Please refer to: https://ng-alain.com/docs/global-config
// const alainConfig: AlainConfig = {
//   st: { modal: { paramsName: 'i', size: 'lg' }, page: { toTop: true, toTopOffset: 0 } },
//   pageHeader: { homeI18n: 'home', recursiveBreadcrumb: true },
//   auth: { login_url: '/account/login' },
// };
// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
//const ngZorroConfig: NzConfig = {};
const alainModules: any[] = [AlainThemeModule.forRoot()];
@NgModule({
  imports: [
    ...alainModules
    //DelonACLModule.forRoot()
  ],
})
export class GlobalConfigModule {
  constructor() {
  }

  static forRoot(): ModuleWithProviders<GlobalConfigModule> {
    return {
      ngModule: GlobalConfigModule,
      providers: [
        ...LANG_PROVIDES
        //{ provide: ALAIN_CONFIG, useValue: alainConfig },
        //{ provide: NZ_CONFIG, useValue: ngZorroConfig }
      ],
    };
  }
}
