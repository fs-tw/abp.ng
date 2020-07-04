import { __decorate, __metadata, __param } from "tslib";
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
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
let StartupService = class StartupService {
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
};
StartupService = __decorate([
    Injectable(),
    __param(3, Inject(ALAIN_I18N_TOKEN)),
    __metadata("design:paramtypes", [NzIconService,
        MenuService,
        TranslateService,
        I18NService,
        SettingsService,
        ACLService,
        TitleService,
        HttpClient])
], StartupService);
export { StartupService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnR1cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2NvcmUvc3JjL3N0YXJ0dXAvc3RhcnR1cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5EOzs7R0FHRztBQUVILElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDekIsWUFDRSxPQUFzQixFQUNkLFdBQXdCLEVBQ3hCLFNBQTJCLEVBQ0QsSUFBaUIsRUFDM0MsY0FBK0IsRUFDL0IsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsVUFBc0I7UUFOdEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDRCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQzNDLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFFOUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJO1FBQ0YsMkJBQTJCO1FBQzNCLGtEQUFrRDtRQUNsRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztpQkFDdkgsSUFBSTtZQUNILGtCQUFrQjtZQUNsQixVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQ0g7aUJBQ0EsU0FBUyxDQUNSLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRTtnQkFDdEIsd0JBQXdCO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFckQsbUJBQW1CO2dCQUNuQixNQUFNLEdBQUcsR0FBUSxPQUFPLENBQUM7Z0JBQ3pCLG1CQUFtQjtnQkFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxvQkFBb0I7Z0JBQ3BCLHdDQUF3QztnQkFDeEMsY0FBYztnQkFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsUUFBUTtnQkFDUixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLFlBQVk7Z0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUMxQyxDQUFDLEVBQ0QsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUNSLEdBQUcsRUFBRTtnQkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBdERZLGNBQWM7SUFEMUIsVUFBVSxFQUFFO0lBTVIsV0FBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtxQ0FIaEIsYUFBYTtRQUNELFdBQVc7UUFDYixnQkFBZ0I7UUFDSyxXQUFXO1FBQzNCLGVBQWU7UUFDbkIsVUFBVTtRQUNSLFlBQVk7UUFDZCxVQUFVO0dBVHJCLGNBQWMsQ0FzRDFCO1NBdERZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xyXG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlLCBUaXRsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5pbXBvcnQgeyB6aXAgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSUNPTlMgfSBmcm9tICcuLi9zdHlsZS1pY29ucyc7XHJcbmltcG9ydCB7IElDT05TX0FVVE8gfSBmcm9tICcuLi9zdHlsZS1pY29ucy1hdXRvJztcclxuaW1wb3J0IHsgSTE4TlNlcnZpY2UgfSBmcm9tICcuLi9pMThuL2kxOG4uc2VydmljZSc7XHJcblxyXG4vKipcclxuICog55So5LqO5bqU55So5ZCv5Yqo5pe2XHJcbiAqIOS4gOiIrOeUqOadpeiOt+WPluW6lOeUqOaJgOmcgOimgeeahOWfuuehgOaVsOaNruetiVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RhcnR1cFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaWNvblNydjogTnpJY29uU2VydmljZSxcclxuICAgIHByaXZhdGUgbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4bjogSTE4TlNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNldHRpbmdTZXJ2aWNlOiBTZXR0aW5nc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFjbFNlcnZpY2U6IEFDTFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICkge1xyXG4gICAgaWNvblNydi5hZGRJY29uKC4uLklDT05TX0FVVE8sIC4uLklDT05TKTtcclxuICB9XHJcblxyXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIC8vIG9ubHkgd29ya3Mgd2l0aCBwcm9taXNlc1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTUwODhcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB6aXAodGhpcy5odHRwQ2xpZW50LmdldChgYXNzZXRzL3RtcC9pMThuLyR7dGhpcy5pMThuLmRlZmF1bHRMYW5nfS5qc29uYCksIHRoaXMuaHR0cENsaWVudC5nZXQoJ2Fzc2V0cy90bXAvYXBwLWRhdGEuanNvbicpKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgLy8g5o6l5pS25YW25LuW5oum5oiq5Zmo5ZCO5Lqn55Sf55qE5byC5bi45raI5oGvXHJcbiAgICAgICAgICBjYXRjaEVycm9yKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBTdGFydHVwU2VydmljZS5sb2FkOiBOZXR3b3JrIHJlcXVlc3QgZmFpbGVkYCwgcmVzKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAoW2xhbmdEYXRhLCBhcHBEYXRhXSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBzZXR0aW5nIGxhbmd1YWdlIGRhdGFcclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24odGhpcy5pMThuLmRlZmF1bHRMYW5nLCBsYW5nRGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKHRoaXMuaTE4bi5kZWZhdWx0TGFuZyk7XHJcblxyXG4gICAgICAgICAgICAvLyBhcHBsaWNhdGlvbiBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHJlczogYW55ID0gYXBwRGF0YTtcclxuICAgICAgICAgICAgLy8g5bqU55So5L+h5oGv77ya5YyF5ous56uZ54K55ZCN44CB5o+P6L+w44CB5bm05Lu9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2Uuc2V0QXBwKHJlcy5hcHApO1xyXG4gICAgICAgICAgICAvLyDnlKjmiLfkv6Hmga/vvJrljIXmi6zlp5PlkI3jgIHlpLTlg4/jgIHpgq7nrrHlnLDlnYBcclxuICAgICAgICAgICAgLy90aGlzLnNldHRpbmdTZXJ2aWNlLnNldFVzZXIocmVzLnVzZXIpO1xyXG4gICAgICAgICAgICAvLyBBQ0zvvJrorr7nva7mnYPpmZDkuLrlhajph49cclxuICAgICAgICAgICAgdGhpcy5hY2xTZXJ2aWNlLnNldEZ1bGwodHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIOWIneWni+WMluiPnOWNlVxyXG4gICAgICAgICAgICB0aGlzLm1lbnVTZXJ2aWNlLmFkZChyZXMubWVudSk7XHJcbiAgICAgICAgICAgIC8vIOiuvue9rumhtemdouagh+mimOeahOWQjue8gFxyXG4gICAgICAgICAgICB0aGlzLnRpdGxlU2VydmljZS5kZWZhdWx0ID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnN1ZmZpeCA9IHJlcy5hcHAubmFtZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=