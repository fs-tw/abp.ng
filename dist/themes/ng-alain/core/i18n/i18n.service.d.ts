import { Platform } from '@angular/cdk/platform';
import { AlainI18NService, DelonLocaleService, SettingsService } from '@delon/theme';
import { TranslateService } from '@ngx-translate/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Observable } from 'rxjs';
export declare class I18NService implements AlainI18NService {
    private settings;
    private nzI18nService;
    private delonLocaleService;
    private translate;
    private platform;
    private _default;
    private change$;
    private _langs;
    constructor(settings: SettingsService, nzI18nService: NzI18nService, delonLocaleService: DelonLocaleService, translate: TranslateService, platform: Platform);
    private getDefaultLang;
    private updateLangData;
    get change(): Observable<string>;
    use(lang: string): void;
    /** 获取语言列表 */
    getLangs(): {
        code: string;
        text: string;
        abbr: string;
    }[];
    /** 翻译 */
    fanyi(key: string, interpolateParams?: {}): any;
    /** 默认语言 */
    get defaultLang(): string;
    /** 当前语言 */
    get currentLang(): string;
}
