import { HttpClient } from '@angular/common/http';
import { ACLService } from '@delon/acl';
import { MenuService, SettingsService, TitleService } from '@delon/theme';
import { TranslateService } from '@ngx-translate/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { I18NService } from '../i18n/i18n.service';
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
export declare class StartupService {
    private menuService;
    private translate;
    private i18n;
    private settingService;
    private aclService;
    private titleService;
    private httpClient;
    constructor(iconSrv: NzIconService, menuService: MenuService, translate: TranslateService, i18n: I18NService, settingService: SettingsService, aclService: ACLService, titleService: TitleService, httpClient: HttpClient);
    load(): Promise<any>;
}
