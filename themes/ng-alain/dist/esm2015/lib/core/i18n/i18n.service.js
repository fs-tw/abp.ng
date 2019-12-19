/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/i18n/i18n.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// 请参考：https://ng-alain.com/docs/i18n
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import ngZh from '@angular/common/locales/zh';
import ngEn from '@angular/common/locales/en';
import ngZhTw from '@angular/common/locales/zh-Hant';
import { en_US, zh_CN, zh_TW, NzI18nService } from 'ng-zorro-antd';
import * as df_en from 'date-fns/locale/en';
import * as df_zh_cn from 'date-fns/locale/zh_cn';
import * as df_zh_tw from 'date-fns/locale/zh_tw';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService, DelonLocaleService, en_US as delonEnUS, zh_CN as delonZhCn, zh_TW as delonZhTw, } from '@delon/theme';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "@ngx-translate/core";
/**
 * @record
 */
function LangData() { }
if (false) {
    /** @type {?} */
    LangData.prototype.text;
    /** @type {?} */
    LangData.prototype.ng;
    /** @type {?} */
    LangData.prototype.zorro;
    /** @type {?} */
    LangData.prototype.dateFns;
    /** @type {?} */
    LangData.prototype.delon;
    /** @type {?} */
    LangData.prototype.abbr;
}
/** @type {?} */
const DEFAULT = 'zh-CN';
/** @type {?} */
const LANGS = {
    'zh-CN': {
        text: '简体中文',
        ng: ngZh,
        zorro: zh_CN,
        dateFns: df_zh_cn,
        delon: delonZhCn,
        abbr: '🇨🇳',
    },
    'zh-Hant': {
        text: '繁体中文',
        ng: ngZhTw,
        zorro: zh_TW,
        dateFns: df_zh_tw,
        delon: delonZhTw,
        abbr: '🇭🇰',
    },
    'en-US': {
        text: 'English',
        ng: ngEn,
        zorro: en_US,
        dateFns: df_en,
        delon: delonEnUS,
        abbr: '🇬🇧',
    },
};
export class I18NService {
    /**
     * @param {?} settings
     * @param {?} nzI18nService
     * @param {?} delonLocaleService
     * @param {?} translate
     */
    constructor(settings, nzI18nService, delonLocaleService, translate) {
        this.nzI18nService = nzI18nService;
        this.delonLocaleService = delonLocaleService;
        this.translate = translate;
        this._default = DEFAULT;
        this.change$ = new BehaviorSubject(null);
        this._langs = Object.keys(LANGS).map((/**
         * @param {?} code
         * @return {?}
         */
        code => {
            /** @type {?} */
            const item = LANGS[code];
            return { code, text: item.text, abbr: item.abbr };
        }));
        // `@ngx-translate/core` 预先知道支持哪些语言
        /** @type {?} */
        const lans = this._langs.map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.code));
        translate.addLangs(lans);
        /** @type {?} */
        const defaultLan = settings.layout.lang || translate.getBrowserLang();
        if (lans.includes(defaultLan)) {
            this._default = defaultLan;
        }
        this.updateLangData(this._default);
    }
    /**
     * @private
     * @param {?} lang
     * @return {?}
     */
    updateLangData(lang) {
        /** @type {?} */
        const item = LANGS[lang];
        registerLocaleData(item.ng);
        this.nzI18nService.setLocale(item.zorro);
        this.nzI18nService.setDateLocale(item.dateFns);
        ((/** @type {?} */ (window))).__locale__ = item.dateFns;
        this.delonLocaleService.setLocale(item.delon);
    }
    /**
     * @return {?}
     */
    get change() {
        return (/** @type {?} */ (this.change$.asObservable().pipe(filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w != null)))));
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        lang = lang || this.translate.getDefaultLang();
        if (this.currentLang === lang)
            return;
        this.updateLangData(lang);
        this.translate.use(lang).subscribe((/**
         * @return {?}
         */
        () => this.change$.next(lang)));
    }
    /**
     * 获取语言列表
     * @return {?}
     */
    getLangs() {
        return this._langs;
    }
    /**
     * 翻译
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    fanyi(key, interpolateParams) {
        return this.translate.instant(key, interpolateParams);
    }
    /**
     * 默认语言
     * @return {?}
     */
    get defaultLang() {
        return this._default;
    }
    /**
     * 当前语言
     * @return {?}
     */
    get currentLang() {
        return this.translate.currentLang || this.translate.getDefaultLang() || this._default;
    }
}
I18NService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
I18NService.ctorParameters = () => [
    { type: SettingsService },
    { type: NzI18nService },
    { type: DelonLocaleService },
    { type: TranslateService }
];
/** @nocollapse */ I18NService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function I18NService_Factory() { return new I18NService(i0.ɵɵinject(i1.SettingsService), i0.ɵɵinject(i2.NzI18nService), i0.ɵɵinject(i1.DelonLocaleService), i0.ɵɵinject(i3.TranslateService)); }, token: I18NService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    I18NService.prototype._default;
    /**
     * @type {?}
     * @private
     */
    I18NService.prototype.change$;
    /**
     * @type {?}
     * @private
     */
    I18NService.prototype._langs;
    /**
     * @type {?}
     * @private
     */
    I18NService.prototype.nzI18nService;
    /**
     * @type {?}
     * @private
     */
    I18NService.prototype.delonLocaleService;
    /**
     * @type {?}
     * @private
     */
    I18NService.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaTE4bi9pMThuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLElBQUksTUFBTSw0QkFBNEIsQ0FBQztBQUM5QyxPQUFPLElBQUksTUFBTSw0QkFBNEIsQ0FBQztBQUM5QyxPQUFPLE1BQU0sTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxLQUFLLFFBQVEsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEtBQUssUUFBUSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFDTCxlQUFlLEVBRWYsa0JBQWtCLEVBQ2xCLEtBQUssSUFBSSxTQUFTLEVBQ2xCLEtBQUssSUFBSSxTQUFTLEVBQ2xCLEtBQUssSUFBSSxTQUFTLEdBQ25CLE1BQU0sY0FBYyxDQUFDOzs7Ozs7OztBQUV0Qix1QkFPQzs7O0lBTkMsd0JBQWE7O0lBQ2Isc0JBQVE7O0lBQ1IseUJBQVc7O0lBQ1gsMkJBQWE7O0lBQ2IseUJBQVc7O0lBQ1gsd0JBQWE7OztNQUdULE9BQU8sR0FBRyxPQUFPOztNQUNqQixLQUFLLEdBQWdDO0lBQ3pDLE9B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QUFHLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJO1lBQUUsT0FBTztRQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBVyxFQUFFLGlCQUFzQjtRQUN2QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDeEYsQ0FBQzs7O1lBOURGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUE3Q2hDLGVBQWU7WUFOYSxhQUFhO1lBUXpDLGtCQUFrQjtZQUpYLGdCQUFnQjs7Ozs7Ozs7SUFpRHZCLCtCQUEyQjs7Ozs7SUFDM0IsOEJBQTJEOzs7OztJQUUzRCw2QkFHRzs7Ozs7SUFJRCxvQ0FBb0M7Ozs7O0lBQ3BDLHlDQUE4Qzs7Ozs7SUFDOUMsZ0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLy8g6K+35Y+C6ICD77yaaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9pMThuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyTG9jYWxlRGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCBuZ1poIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL3poJztcclxuaW1wb3J0IG5nRW4gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2xvY2FsZXMvZW4nO1xyXG5pbXBvcnQgbmdaaFR3IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL3poLUhhbnQnO1xyXG5cclxuaW1wb3J0IHsgZW5fVVMsIHpoX0NOLCB6aF9UVywgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgKiBhcyBkZl9lbiBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW4nO1xyXG5pbXBvcnQgKiBhcyBkZl96aF9jbiBmcm9tICdkYXRlLWZucy9sb2NhbGUvemhfY24nO1xyXG5pbXBvcnQgKiBhcyBkZl96aF90dyBmcm9tICdkYXRlLWZucy9sb2NhbGUvemhfdHcnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgU2V0dGluZ3NTZXJ2aWNlLFxyXG4gIEFsYWluSTE4TlNlcnZpY2UsXHJcbiAgRGVsb25Mb2NhbGVTZXJ2aWNlLFxyXG4gIGVuX1VTIGFzIGRlbG9uRW5VUyxcclxuICB6aF9DTiBhcyBkZWxvblpoQ24sXHJcbiAgemhfVFcgYXMgZGVsb25aaFR3LFxyXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcblxyXG5pbnRlcmZhY2UgTGFuZ0RhdGEge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBuZzogYW55O1xyXG4gIHpvcnJvOiBhbnk7XHJcbiAgZGF0ZUZuczogYW55O1xyXG4gIGRlbG9uOiBhbnk7XHJcbiAgYWJicjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUID0gJ3poLUNOJztcclxuY29uc3QgTEFOR1M6IHsgW2tleTogc3RyaW5nXTogTGFuZ0RhdGEgfSA9IHtcclxuICAnemgtQ04nOiB7XHJcbiAgICB0ZXh0OiAn566A5L2T5Lit5paHJyxcclxuICAgIG5nOiBuZ1poLFxyXG4gICAgem9ycm86IHpoX0NOLFxyXG4gICAgZGF0ZUZuczogZGZfemhfY24sXHJcbiAgICBkZWxvbjogZGVsb25aaENuLFxyXG4gICAgYWJicjogJ/Cfh6jwn4ezJyxcclxuICB9LFxyXG4gICd6aC1IYW50Jzoge1xyXG4gICAgdGV4dDogJ+e5geS9k+S4reaWhycsXHJcbiAgICBuZzogbmdaaFR3LFxyXG4gICAgem9ycm86IHpoX1RXLFxyXG4gICAgZGF0ZUZuczogZGZfemhfdHcsXHJcbiAgICBkZWxvbjogZGVsb25aaFR3LFxyXG4gICAgYWJicjogJ/Cfh63wn4ewJyxcclxuICB9LFxyXG4gICdlbi1VUyc6IHtcclxuICAgIHRleHQ6ICdFbmdsaXNoJyxcclxuICAgIG5nOiBuZ0VuLFxyXG4gICAgem9ycm86IGVuX1VTLFxyXG4gICAgZGF0ZUZuczogZGZfZW4sXHJcbiAgICBkZWxvbjogZGVsb25FblVTLFxyXG4gICAgYWJicjogJ/Cfh6zwn4enJyxcclxuICB9LFxyXG59O1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEkxOE5TZXJ2aWNlIGltcGxlbWVudHMgQWxhaW5JMThOU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfZGVmYXVsdCA9IERFRkFVTFQ7XHJcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgcHJpdmF0ZSBfbGFuZ3MgPSBPYmplY3Qua2V5cyhMQU5HUykubWFwKGNvZGUgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IExBTkdTW2NvZGVdO1xyXG4gICAgcmV0dXJuIHsgY29kZSwgdGV4dDogaXRlbS50ZXh0LCBhYmJyOiBpdGVtLmFiYnIgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuekkxOG5TZXJ2aWNlOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkZWxvbkxvY2FsZVNlcnZpY2U6IERlbG9uTG9jYWxlU2VydmljZSxcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgLy8gYEBuZ3gtdHJhbnNsYXRlL2NvcmVgIOmihOWFiOefpemBk+aUr+aMgeWTquS6m+ivreiogFxyXG4gICAgY29uc3QgbGFucyA9IHRoaXMuX2xhbmdzLm1hcChpdGVtID0+IGl0ZW0uY29kZSk7XHJcbiAgICB0cmFuc2xhdGUuYWRkTGFuZ3MobGFucyk7XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdExhbiA9IHNldHRpbmdzLmxheW91dC5sYW5nIHx8IHRyYW5zbGF0ZS5nZXRCcm93c2VyTGFuZygpO1xyXG4gICAgaWYgKGxhbnMuaW5jbHVkZXMoZGVmYXVsdExhbikpIHtcclxuICAgICAgdGhpcy5fZGVmYXVsdCA9IGRlZmF1bHRMYW47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51cGRhdGVMYW5nRGF0YSh0aGlzLl9kZWZhdWx0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlTGFuZ0RhdGEobGFuZzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpdGVtID0gTEFOR1NbbGFuZ107XHJcbiAgICByZWdpc3RlckxvY2FsZURhdGEoaXRlbS5uZyk7XHJcbiAgICB0aGlzLm56STE4blNlcnZpY2Uuc2V0TG9jYWxlKGl0ZW0uem9ycm8pO1xyXG4gICAgdGhpcy5uekkxOG5TZXJ2aWNlLnNldERhdGVMb2NhbGUoaXRlbS5kYXRlRm5zKTtcclxuICAgICh3aW5kb3cgYXMgYW55KS5fX2xvY2FsZV9fID0gaXRlbS5kYXRlRm5zO1xyXG4gICAgdGhpcy5kZWxvbkxvY2FsZVNlcnZpY2Uuc2V0TG9jYWxlKGl0ZW0uZGVsb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcih3ID0+IHcgIT0gbnVsbCkpIGFzIE9ic2VydmFibGU8c3RyaW5nPjtcclxuICB9XHJcblxyXG4gIHVzZShsYW5nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxhbmcgPSBsYW5nIHx8IHRoaXMudHJhbnNsYXRlLmdldERlZmF1bHRMYW5nKCk7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50TGFuZyA9PT0gbGFuZykgcmV0dXJuO1xyXG4gICAgdGhpcy51cGRhdGVMYW5nRGF0YShsYW5nKTtcclxuICAgIHRoaXMudHJhbnNsYXRlLnVzZShsYW5nKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGFuZ2UkLm5leHQobGFuZykpO1xyXG4gIH1cclxuICAvKiog6I635Y+W6K+t6KiA5YiX6KGoICovXHJcbiAgZ2V0TGFuZ3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3M7XHJcbiAgfVxyXG4gIC8qKiDnv7vor5EgKi9cclxuICBmYW55aShrZXk6IHN0cmluZywgaW50ZXJwb2xhdGVQYXJhbXM/OiB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XHJcbiAgfVxyXG4gIC8qKiDpu5jorqTor63oqIAgKi9cclxuICBnZXQgZGVmYXVsdExhbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdDtcclxuICB9XHJcbiAgLyoqIOW9k+WJjeivreiogCAqL1xyXG4gIGdldCBjdXJyZW50TGFuZygpIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyB8fCB0aGlzLnRyYW5zbGF0ZS5nZXREZWZhdWx0TGFuZygpIHx8IHRoaXMuX2RlZmF1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==