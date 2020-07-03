import { AlainI18NService, DelonLocaleService, SettingsService } from '@delon/theme';
import { TranslateService } from '@ngx-translate/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class I18NService implements AlainI18NService {
    private settings;
    private nzI18nService;
    private delonLocaleService;
    private translate;
    private _default;
    private change$;
    private _langs;
    constructor(settings: SettingsService, nzI18nService: NzI18nService, delonLocaleService: DelonLocaleService, translate: TranslateService);
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
    static ɵfac: i0.ɵɵFactoryDef<I18NService, never>;
    static ɵprov: i0.ɵɵInjectableDef<I18NService>;
}
