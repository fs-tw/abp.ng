import { Observable } from 'rxjs';
import { NzI18nService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService, AlainI18NService, DelonLocaleService } from '@delon/theme';
export declare class I18NService implements AlainI18NService {
    private nzI18nService;
    private delonLocaleService;
    private translate;
    private _default;
    private change$;
    private _langs;
    constructor(settings: SettingsService, nzI18nService: NzI18nService, delonLocaleService: DelonLocaleService, translate: TranslateService);
    private updateLangData;
    readonly change: Observable<string>;
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
    readonly defaultLang: string;
    /** 当前语言 */
    readonly currentLang: string;
}
