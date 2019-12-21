/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/startup/startup.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuService, SettingsService, TitleService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { ACLService } from '@delon/acl';
import { TranslateService } from '@ngx-translate/core';
import { I18NService } from '../i18n/i18n.service';
import { NzIconService } from 'ng-zorro-antd';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
var StartupService = /** @class */ (function () {
    function StartupService(iconSrv, menuService, translate, i18n, settingService, aclService, titleService, httpClient) {
        this.menuService = menuService;
        this.translate = translate;
        this.i18n = i18n;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.httpClient = httpClient;
        iconSrv.addIcon.apply(iconSrv, tslib_1.__spread(ICONS_AUTO, ICONS));
    }
    /**
     * @return {?}
     */
    StartupService.prototype.load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            zip(_this.httpClient.get("assets/tmp/i18n/" + _this.i18n.defaultLang + ".json"), _this.httpClient.get('assets/tmp/app-data.json'))
                .pipe(
            // 接收其他拦截器后产生的异常消息
            catchError((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), langData = _b[0], appData = _b[1];
                resolve(null);
                return [langData, appData];
            })))
                .subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                // setting language data
                //this.translate.setTranslation(this.i18n.defaultLang, langData);
                //this.translate.setDefaultLang(this.i18n.defaultLang);
                var _b = tslib_1.__read(_a, 2), langData = _b[0], appData = _b[1];
                // setting language data
                //this.translate.setTranslation(this.i18n.defaultLang, langData);
                //this.translate.setDefaultLang(this.i18n.defaultLang);
                // application data
                /** @type {?} */
                var res = appData;
                // 应用信息：包括站点名、描述、年份
                _this.settingService.setApp(res.app);
                // 用户信息：包括姓名、头像、邮箱地址
                //this.settingService.setUser(res.user);
                // ACL：设置权限为全量
                //this.aclService.setFull(true);
                // 初始化菜单
                //this.menuService.add(res.menu);
                // 设置页面标题的后缀
                _this.titleService.default = '';
                _this.titleService.suffix = res.app.name;
            }), (/**
             * @return {?}
             */
            function () { }), (/**
             * @return {?}
             */
            function () {
                resolve(null);
            }));
        }));
    };
    StartupService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StartupService.ctorParameters = function () { return [
        { type: NzIconService },
        { type: MenuService },
        { type: TranslateService },
        { type: I18NService, decorators: [{ type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: SettingsService },
        { type: ACLService },
        { type: TitleService },
        { type: HttpClient }
    ]; };
    return StartupService;
}());
export { StartupService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StartupService.prototype.menuService;
    /**
     * @type {?}
     * @private
     */
    StartupService.prototype.translate;
    /**
     * @type {?}
     * @private
     */
    StartupService.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    StartupService.prototype.settingService;
    /**
     * @type {?}
     * @private
     */
    StartupService.prototype.aclService;
    /**
     * @type {?}
     * @private
     */
    StartupService.prototype.titleService;
    /**
     * @type {?}
     * @private
     */
    StartupService.prototype.httpClient;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnR1cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL2NvcmUvc3RhcnR1cC9zdGFydHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBTTdDO0lBRUUsd0JBQ0UsT0FBc0IsRUFDZCxXQUF3QixFQUN4QixTQUEyQixFQUNELElBQWlCLEVBQzNDLGNBQStCLEVBQy9CLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLFVBQXNCO1FBTnRCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQ0QsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUMzQyxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRTlCLE9BQU8sQ0FBQyxPQUFPLE9BQWYsT0FBTyxtQkFBWSxVQUFVLEVBQUssS0FBSyxHQUFFO0lBQzNDLENBQUM7Ozs7SUFFRCw2QkFBSTs7O0lBQUo7UUFBQSxpQkF5Q0M7UUF4Q0MsMkJBQTJCO1FBQzNCLGtEQUFrRDtRQUNsRCxPQUFPLElBQUksT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUN4QixHQUFHLENBQ0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMscUJBQW1CLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxVQUFPLENBQUMsRUFDcEUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FDaEQ7aUJBQ0UsSUFBSTtZQUNILGtCQUFrQjtZQUNsQixVQUFVOzs7O1lBQUMsVUFBQyxFQUFtQjtvQkFBbkIsMEJBQW1CLEVBQWxCLGdCQUFRLEVBQUUsZUFBTztnQkFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNkLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxFQUFDLENBQ0g7aUJBQ0EsU0FBUzs7OztZQUNSLFVBQUMsRUFBbUI7Z0JBQ2xCLHdCQUF3QjtnQkFDeEIsaUVBQWlFO2dCQUNqRSx1REFBdUQ7b0JBSHhELDBCQUFtQixFQUFsQixnQkFBUSxFQUFFLGVBQU87Ozs7OztvQkFNWCxHQUFHLEdBQVEsT0FBTztnQkFDeEIsbUJBQW1CO2dCQUNuQixLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLG9CQUFvQjtnQkFDcEIsd0NBQXdDO2dCQUN4QyxjQUFjO2dCQUNkLGdDQUFnQztnQkFDaEMsUUFBUTtnQkFDUixpQ0FBaUM7Z0JBQ2pDLFlBQVk7Z0JBQ1osS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUMxQyxDQUFDOzs7WUFDRCxjQUFPLENBQUM7OztZQUNSO2dCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBeERGLFVBQVU7Ozs7Z0JBUkYsYUFBYTtnQkFMYixXQUFXO2dCQUVYLGdCQUFnQjtnQkFDaEIsV0FBVyx1QkFnQmYsTUFBTSxTQUFDLGdCQUFnQjtnQkFuQk4sZUFBZTtnQkFDNUIsVUFBVTtnQkFEb0IsWUFBWTtnQkFIMUMsVUFBVTs7SUF5RW5CLHFCQUFDO0NBQUEsQUF6REQsSUF5REM7U0F4RFksY0FBYzs7Ozs7O0lBR3ZCLHFDQUFnQzs7Ozs7SUFDaEMsbUNBQW1DOzs7OztJQUNuQyw4QkFBbUQ7Ozs7O0lBQ25ELHdDQUF1Qzs7Ozs7SUFDdkMsb0NBQThCOzs7OztJQUM5QixzQ0FBa0M7Ozs7O0lBQ2xDLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyB6aXAgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UsIFNldHRpbmdzU2VydmljZSwgVGl0bGVTZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEkxOE5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9pMThuLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBJQ09OU19BVVRPIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGUtaWNvbnMtYXV0byc7XHJcbmltcG9ydCB7IElDT05TIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGUtaWNvbnMnO1xyXG5cclxuLyoqXHJcbiAqIOeUqOS6juW6lOeUqOWQr+WKqOaXtlxyXG4gKiDkuIDoiKznlKjmnaXojrflj5blupTnlKjmiYDpnIDopoHnmoTln7rnoYDmlbDmja7nrYlcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0YXJ0dXBTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGljb25TcnY6IE56SWNvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG46IEkxOE5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzZXR0aW5nU2VydmljZTogU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhY2xTZXJ2aWNlOiBBQ0xTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlU2VydmljZSxcclxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCxcclxuICApIHtcclxuICAgIGljb25TcnYuYWRkSWNvbiguLi5JQ09OU19BVVRPLCAuLi5JQ09OUyk7XHJcbiAgfVxyXG5cclxuICBsb2FkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAvLyBvbmx5IHdvcmtzIHdpdGggcHJvbWlzZXNcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1MDg4XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHppcChcclxuICAgICAgICB0aGlzLmh0dHBDbGllbnQuZ2V0KGBhc3NldHMvdG1wL2kxOG4vJHt0aGlzLmkxOG4uZGVmYXVsdExhbmd9Lmpzb25gKSxcclxuICAgICAgICB0aGlzLmh0dHBDbGllbnQuZ2V0KCdhc3NldHMvdG1wL2FwcC1kYXRhLmpzb24nKSxcclxuICAgICAgKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgLy8g5o6l5pS25YW25LuW5oum5oiq5Zmo5ZCO5Lqn55Sf55qE5byC5bi45raI5oGvXHJcbiAgICAgICAgICBjYXRjaEVycm9yKChbbGFuZ0RhdGEsIGFwcERhdGFdKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbbGFuZ0RhdGEsIGFwcERhdGFdO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAoW2xhbmdEYXRhLCBhcHBEYXRhXSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBzZXR0aW5nIGxhbmd1YWdlIGRhdGFcclxuICAgICAgICAgICAgLy90aGlzLnRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbih0aGlzLmkxOG4uZGVmYXVsdExhbmcsIGxhbmdEYXRhKTtcclxuICAgICAgICAgICAgLy90aGlzLnRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZyh0aGlzLmkxOG4uZGVmYXVsdExhbmcpO1xyXG5cclxuICAgICAgICAgICAgLy8gYXBwbGljYXRpb24gZGF0YVxyXG4gICAgICAgICAgICBjb25zdCByZXM6IGFueSA9IGFwcERhdGE7XHJcbiAgICAgICAgICAgIC8vIOW6lOeUqOS/oeaBr++8muWMheaLrOermeeCueWQjeOAgeaPj+i/sOOAgeW5tOS7vVxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLnNldEFwcChyZXMuYXBwKTtcclxuICAgICAgICAgICAgLy8g55So5oi35L+h5oGv77ya5YyF5ous5aeT5ZCN44CB5aS05YOP44CB6YKu566x5Zyw5Z2AXHJcbiAgICAgICAgICAgIC8vdGhpcy5zZXR0aW5nU2VydmljZS5zZXRVc2VyKHJlcy51c2VyKTtcclxuICAgICAgICAgICAgLy8gQUNM77ya6K6+572u5p2D6ZmQ5Li65YWo6YePXHJcbiAgICAgICAgICAgIC8vdGhpcy5hY2xTZXJ2aWNlLnNldEZ1bGwodHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIOWIneWni+WMluiPnOWNlVxyXG4gICAgICAgICAgICAvL3RoaXMubWVudVNlcnZpY2UuYWRkKHJlcy5tZW51KTtcclxuICAgICAgICAgICAgLy8g6K6+572u6aG16Z2i5qCH6aKY55qE5ZCO57yAXHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLmRlZmF1bHQgPSAnJztcclxuICAgICAgICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc3VmZml4ID0gcmVzLmFwcC5uYW1lO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICgpID0+IHt9LFxyXG4gICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==