import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@delon/theme';
import { TranslateService } from '@ngx-translate/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICONS } from '../style-icons';
import { ICONS_AUTO } from '../style-icons-auto';
import { I18NService } from '../i18n/i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/icon";
import * as i2 from "@delon/theme";
import * as i3 from "@ngx-translate/core";
import * as i4 from "@delon/acl";
import * as i5 from "@angular/common/http";
import * as i6 from "../i18n/i18n.service";
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
export class StartupService {
    constructor(iconSrv, menuService, translate, i18n, settingService, aclService, titleService, httpClient) {
        this.menuService = menuService;
        this.translate = translate;
        this.i18n = i18n;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.httpClient = httpClient;
        iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
    }
    load() {
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise((resolve) => {
            zip(this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`), this.httpClient.get('assets/tmp/app-data.json'))
                .pipe(
            // 接收其他拦截器后产生的异常消息
            catchError((res) => {
                console.warn(`StartupService.load: Network request failed`, res);
                resolve(null);
                return [];
            }))
                .subscribe(([langData, appData]) => {
                // setting language data
                this.translate.setTranslation(this.i18n.defaultLang, langData);
                this.translate.setDefaultLang(this.i18n.defaultLang);
                // application data
                const res = appData;
                // 应用信息：包括站点名、描述、年份
                this.settingService.setApp(res.app);
                // 用户信息：包括姓名、头像、邮箱地址
                //this.settingService.setUser(res.user);
                // ACL：设置权限为全量
                this.aclService.setFull(true);
                // 初始化菜单
                this.menuService.add(res.menu);
                // 设置页面标题的后缀
                this.titleService.default = '';
                this.titleService.suffix = res.app.name;
            }, () => { }, () => {
                resolve(null);
            });
        });
    }
}
StartupService.ɵfac = function StartupService_Factory(t) { return new (t || StartupService)(i0.ɵɵinject(i1.NzIconService), i0.ɵɵinject(i2.MenuService), i0.ɵɵinject(i3.TranslateService), i0.ɵɵinject(ALAIN_I18N_TOKEN), i0.ɵɵinject(i2.SettingsService), i0.ɵɵinject(i4.ACLService), i0.ɵɵinject(i2.TitleService), i0.ɵɵinject(i5.HttpClient)); };
StartupService.ɵprov = i0.ɵɵdefineInjectable({ token: StartupService, factory: StartupService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StartupService, [{
        type: Injectable
    }], function () { return [{ type: i1.NzIconService }, { type: i2.MenuService }, { type: i3.TranslateService }, { type: i6.I18NService, decorators: [{
                type: Inject,
                args: [ALAIN_I18N_TOKEN]
            }] }, { type: i2.SettingsService }, { type: i4.ACLService }, { type: i2.TitleService }, { type: i5.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnR1cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2NvcmUvc3JjL3N0YXJ0dXAvc3RhcnR1cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7O0FBRW5EOzs7R0FHRztBQUVILE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQ0UsT0FBc0IsRUFDZCxXQUF3QixFQUN4QixTQUEyQixFQUNELElBQWlCLEVBQzNDLGNBQStCLEVBQy9CLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLFVBQXNCO1FBTnRCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQ0QsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUMzQyxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRTlCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsSUFBSTtRQUNGLDJCQUEyQjtRQUMzQixrREFBa0Q7UUFDbEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7aUJBQ3ZILElBQUk7WUFDSCxrQkFBa0I7WUFDbEIsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDZCxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUNIO2lCQUNBLFNBQVMsQ0FDUixDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RCLHdCQUF3QjtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRXJELG1CQUFtQjtnQkFDbkIsTUFBTSxHQUFHLEdBQVEsT0FBTyxDQUFDO2dCQUN6QixtQkFBbUI7Z0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEMsb0JBQW9CO2dCQUNwQix3Q0FBd0M7Z0JBQ3hDLGNBQWM7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLFFBQVE7Z0JBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixZQUFZO2dCQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDMUMsQ0FBQyxFQUNELEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDUixHQUFHLEVBQUU7Z0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs0RUFyRFUsY0FBYyw0R0FLZixnQkFBZ0I7c0RBTGYsY0FBYyxXQUFkLGNBQWM7a0RBQWQsY0FBYztjQUQxQixVQUFVOztzQkFNTixNQUFNO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XHJcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIE1lbnVTZXJ2aWNlLCBTZXR0aW5nc1NlcnZpY2UsIFRpdGxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IHppcCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJQ09OUyB9IGZyb20gJy4uL3N0eWxlLWljb25zJztcclxuaW1wb3J0IHsgSUNPTlNfQVVUTyB9IGZyb20gJy4uL3N0eWxlLWljb25zLWF1dG8nO1xyXG5pbXBvcnQgeyBJMThOU2VydmljZSB9IGZyb20gJy4uL2kxOG4vaTE4bi5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiDnlKjkuo7lupTnlKjlkK/liqjml7ZcclxuICog5LiA6Iis55So5p2l6I635Y+W5bqU55So5omA6ZyA6KaB55qE5Z+656GA5pWw5o2u562JXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGFydHVwU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpY29uU3J2OiBOekljb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtZW51U2VydmljZTogTWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcclxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuOiBJMThOU2VydmljZSxcclxuICAgIHByaXZhdGUgc2V0dGluZ1NlcnZpY2U6IFNldHRpbmdzU2VydmljZSxcclxuICAgIHByaXZhdGUgYWNsU2VydmljZTogQUNMU2VydmljZSxcclxuICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXHJcbiAgKSB7XHJcbiAgICBpY29uU3J2LmFkZEljb24oLi4uSUNPTlNfQVVUTywgLi4uSUNPTlMpO1xyXG4gIH1cclxuXHJcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgLy8gb25seSB3b3JrcyB3aXRoIHByb21pc2VzXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNTA4OFxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHppcCh0aGlzLmh0dHBDbGllbnQuZ2V0KGBhc3NldHMvdG1wL2kxOG4vJHt0aGlzLmkxOG4uZGVmYXVsdExhbmd9Lmpzb25gKSwgdGhpcy5odHRwQ2xpZW50LmdldCgnYXNzZXRzL3RtcC9hcHAtZGF0YS5qc29uJykpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAvLyDmjqXmlLblhbbku5bmi6bmiKrlmajlkI7kuqfnlJ/nmoTlvILluLjmtojmga9cclxuICAgICAgICAgIGNhdGNoRXJyb3IoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFN0YXJ0dXBTZXJ2aWNlLmxvYWQ6IE5ldHdvcmsgcmVxdWVzdCBmYWlsZWRgLCByZXMpO1xyXG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgIChbbGFuZ0RhdGEsIGFwcERhdGFdKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHNldHRpbmcgbGFuZ3VhZ2UgZGF0YVxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbih0aGlzLmkxOG4uZGVmYXVsdExhbmcsIGxhbmdEYXRhKTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcodGhpcy5pMThuLmRlZmF1bHRMYW5nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFwcGxpY2F0aW9uIGRhdGFcclxuICAgICAgICAgICAgY29uc3QgcmVzOiBhbnkgPSBhcHBEYXRhO1xyXG4gICAgICAgICAgICAvLyDlupTnlKjkv6Hmga/vvJrljIXmi6znq5nngrnlkI3jgIHmj4/ov7DjgIHlubTku71cclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5zZXRBcHAocmVzLmFwcCk7XHJcbiAgICAgICAgICAgIC8vIOeUqOaIt+S/oeaBr++8muWMheaLrOWnk+WQjeOAgeWktOWDj+OAgemCrueuseWcsOWdgFxyXG4gICAgICAgICAgICAvL3RoaXMuc2V0dGluZ1NlcnZpY2Uuc2V0VXNlcihyZXMudXNlcik7XHJcbiAgICAgICAgICAgIC8vIEFDTO+8muiuvue9ruadg+mZkOS4uuWFqOmHj1xyXG4gICAgICAgICAgICB0aGlzLmFjbFNlcnZpY2Uuc2V0RnVsbCh0cnVlKTtcclxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW6I+c5Y2VXHJcbiAgICAgICAgICAgIHRoaXMubWVudVNlcnZpY2UuYWRkKHJlcy5tZW51KTtcclxuICAgICAgICAgICAgLy8g6K6+572u6aG16Z2i5qCH6aKY55qE5ZCO57yAXHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLmRlZmF1bHQgPSAnJztcclxuICAgICAgICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc3VmZml4ID0gcmVzLmFwcC5uYW1lO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICgpID0+IHt9LFxyXG4gICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==