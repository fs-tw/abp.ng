import { __decorate, __metadata } from "tslib";
// 请参考：https://ng-alain.com/docs/i18n
import { Platform } from '@angular/cdk/platform';
import { registerLocaleData } from '@angular/common';
import ngEn from '@angular/common/locales/en';
import ngZh from '@angular/common/locales/zh';
import ngZhTw from '@angular/common/locales/zh-Hant';
import { Injectable } from '@angular/core';
import { DelonLocaleService, en_US as delonEnUS, SettingsService, zh_CN as delonZhCn, zh_TW as delonZhTw, } from '@delon/theme';
import { TranslateService } from '@ngx-translate/core';
import { enUS as dfEn, zhCN as dfZhCn, zhTW as dfZhTw } from 'date-fns/locale';
import { en_US as zorroEnUS, NzI18nService, zh_CN as zorroZhCN, zh_TW as zorroZhTW } from 'ng-zorro-antd/i18n';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "@ngx-translate/core";
import * as i4 from "@angular/cdk/platform";
const DEFAULT = 'zh-CN';
const LANGS = {
    'zh-CN': {
        text: '简体中文',
        ng: ngZh,
        zorro: zorroZhCN,
        date: dfZhCn,
        delon: delonZhCn,
        abbr: '🇨🇳',
    },
    'zh-TW': {
        text: '繁体中文',
        ng: ngZhTw,
        zorro: zorroZhTW,
        date: dfZhTw,
        delon: delonZhTw,
        abbr: '🇭🇰',
    },
    'en-US': {
        text: 'English',
        ng: ngEn,
        zorro: zorroEnUS,
        date: dfEn,
        delon: delonEnUS,
        abbr: '🇬🇧',
    },
};
let I18NService = class I18NService {
    constructor(settings, nzI18nService, delonLocaleService, translate, platform) {
        this.settings = settings;
        this.nzI18nService = nzI18nService;
        this.delonLocaleService = delonLocaleService;
        this.translate = translate;
        this.platform = platform;
        this._default = DEFAULT;
        this.change$ = new BehaviorSubject(null);
        this._langs = Object.keys(LANGS).map((code) => {
            const item = LANGS[code];
            return { code, text: item.text, abbr: item.abbr };
        });
        // `@ngx-translate/core` 预先知道支持哪些语言
        const lans = this._langs.map((item) => item.code);
        translate.addLangs(lans);
        const defaultLan = this.getDefaultLang();
        if (lans.includes(defaultLan)) {
            this._default = defaultLan;
        }
        this.updateLangData(this._default);
    }
    getDefaultLang() {
        if (!this.platform.isBrowser) {
            return DEFAULT;
        }
        if (this.settings.layout.lang) {
            return this.settings.layout.lang;
        }
        return (navigator.languages ? navigator.languages[0] : null) || navigator.language;
    }
    updateLangData(lang) {
        const item = LANGS[lang];
        registerLocaleData(item.ng);
        this.nzI18nService.setLocale(item.zorro);
        this.nzI18nService.setDateLocale(item.date);
        this.delonLocaleService.setLocale(item.delon);
    }
    get change() {
        return this.change$.asObservable().pipe(filter((w) => w != null));
    }
    use(lang) {
        lang = lang || this.translate.getDefaultLang();
        if (this.currentLang === lang) {
            return;
        }
        this.updateLangData(lang);
        this.translate.use(lang).subscribe(() => this.change$.next(lang));
    }
    /** 获取语言列表 */
    getLangs() {
        return this._langs;
    }
    /** 翻译 */
    fanyi(key, interpolateParams) {
        return this.translate.instant(key, interpolateParams);
    }
    /** 默认语言 */
    get defaultLang() {
        return this._default;
    }
    /** 当前语言 */
    get currentLang() {
        return this.translate.currentLang || this.translate.getDefaultLang() || this._default;
    }
};
I18NService.ɵprov = i0.ɵɵdefineInjectable({ factory: function I18NService_Factory() { return new I18NService(i0.ɵɵinject(i1.SettingsService), i0.ɵɵinject(i2.NzI18nService), i0.ɵɵinject(i1.DelonLocaleService), i0.ɵɵinject(i3.TranslateService), i0.ɵɵinject(i4.Platform)); }, token: I18NService, providedIn: "root" });
I18NService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [SettingsService,
        NzI18nService,
        DelonLocaleService,
        TranslateService,
        Platform])
], I18NService);
export { I18NService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2NvcmUvc3JjL2kxOG4vaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQ0FBcUM7QUFDckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sSUFBSSxNQUFNLDRCQUE0QixDQUFDO0FBQzlDLE9BQU8sSUFBSSxNQUFNLDRCQUE0QixDQUFDO0FBQzlDLE9BQU8sTUFBTSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLGtCQUFrQixFQUNsQixLQUFLLElBQUksU0FBUyxFQUNsQixlQUFlLEVBQ2YsS0FBSyxJQUFJLFNBQVMsRUFDbEIsS0FBSyxJQUFJLFNBQVMsR0FDbkIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLE1BQU0sRUFBRSxJQUFJLElBQUksTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0UsT0FBTyxFQUFFLEtBQUssSUFBSSxTQUFTLEVBQUUsYUFBYSxFQUFFLEtBQUssSUFBSSxTQUFTLEVBQUUsS0FBSyxJQUFJLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9HLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFXeEMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLE1BQU0sS0FBSyxHQUFnQztJQUN6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T0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDeEYsQ0FBQztDQUNGLENBQUE7O0FBMUVZLFdBQVc7SUFEdkIsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO3FDQVdiLGVBQWU7UUFDVixhQUFhO1FBQ1Isa0JBQWtCO1FBQzNCLGdCQUFnQjtRQUNqQixRQUFRO0dBZGpCLFdBQVcsQ0EwRXZCO1NBMUVZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvLyDor7flj4LogIPvvJpodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2kxOG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyByZWdpc3RlckxvY2FsZURhdGEgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgbmdFbiBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9lbic7XHJcbmltcG9ydCBuZ1poIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL3poJztcclxuaW1wb3J0IG5nWmhUdyBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy96aC1IYW50JztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFsYWluSTE4TlNlcnZpY2UsXHJcbiAgRGVsb25Mb2NhbGVTZXJ2aWNlLFxyXG4gIGVuX1VTIGFzIGRlbG9uRW5VUyxcclxuICBTZXR0aW5nc1NlcnZpY2UsXHJcbiAgemhfQ04gYXMgZGVsb25aaENuLFxyXG4gIHpoX1RXIGFzIGRlbG9uWmhUdyxcclxufSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IGVuVVMgYXMgZGZFbiwgemhDTiBhcyBkZlpoQ24sIHpoVFcgYXMgZGZaaFR3IH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcclxuaW1wb3J0IHsgZW5fVVMgYXMgem9ycm9FblVTLCBOekkxOG5TZXJ2aWNlLCB6aF9DTiBhcyB6b3Jyb1poQ04sIHpoX1RXIGFzIHpvcnJvWmhUVyB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbnRlcmZhY2UgTGFuZ0RhdGEge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBuZzogYW55O1xyXG4gIHpvcnJvOiBhbnk7XHJcbiAgZGF0ZTogYW55O1xyXG4gIGRlbG9uOiBhbnk7XHJcbiAgYWJicjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUID0gJ3poLUNOJztcclxuY29uc3QgTEFOR1M6IHsgW2tleTogc3RyaW5nXTogTGFuZ0RhdGEgfSA9IHtcclxuICAnemgtQ04nOiB7XHJcbiAgICB0ZXh0OiAn566A5L2T5Lit5paHJyxcclxuICAgIG5nOiBuZ1poLFxyXG4gICAgem9ycm86IHpvcnJvWmhDTixcclxuICAgIGRhdGU6IGRmWmhDbixcclxuICAgIGRlbG9uOiBkZWxvblpoQ24sXHJcbiAgICBhYmJyOiAn8J+HqPCfh7MnLFxyXG4gIH0sXHJcbiAgJ3poLVRXJzoge1xyXG4gICAgdGV4dDogJ+e5geS9k+S4reaWhycsXHJcbiAgICBuZzogbmdaaFR3LFxyXG4gICAgem9ycm86IHpvcnJvWmhUVyxcclxuICAgIGRhdGU6IGRmWmhUdyxcclxuICAgIGRlbG9uOiBkZWxvblpoVHcsXHJcbiAgICBhYmJyOiAn8J+HrfCfh7AnLFxyXG4gIH0sXHJcbiAgJ2VuLVVTJzoge1xyXG4gICAgdGV4dDogJ0VuZ2xpc2gnLFxyXG4gICAgbmc6IG5nRW4sXHJcbiAgICB6b3Jybzogem9ycm9FblVTLFxyXG4gICAgZGF0ZTogZGZFbixcclxuICAgIGRlbG9uOiBkZWxvbkVuVVMsXHJcbiAgICBhYmJyOiAn8J+HrPCfh6cnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgSTE4TlNlcnZpY2UgaW1wbGVtZW50cyBBbGFpbkkxOE5TZXJ2aWNlIHtcclxuICBwcml2YXRlIF9kZWZhdWx0ID0gREVGQVVMVDtcclxuICBwcml2YXRlIGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICBwcml2YXRlIF9sYW5ncyA9IE9iamVjdC5rZXlzKExBTkdTKS5tYXAoKGNvZGUpID0+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSBMQU5HU1tjb2RlXTtcclxuICAgIHJldHVybiB7IGNvZGUsIHRleHQ6IGl0ZW0udGV4dCwgYWJicjogaXRlbS5hYmJyIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuekkxOG5TZXJ2aWNlOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkZWxvbkxvY2FsZVNlcnZpY2U6IERlbG9uTG9jYWxlU2VydmljZSxcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgKSB7XHJcbiAgICAvLyBgQG5neC10cmFuc2xhdGUvY29yZWAg6aKE5YWI55+l6YGT5pSv5oyB5ZOq5Lqb6K+t6KiAXHJcbiAgICBjb25zdCBsYW5zID0gdGhpcy5fbGFuZ3MubWFwKChpdGVtKSA9PiBpdGVtLmNvZGUpO1xyXG4gICAgdHJhbnNsYXRlLmFkZExhbmdzKGxhbnMpO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRMYW4gPSB0aGlzLmdldERlZmF1bHRMYW5nKCk7XHJcbiAgICBpZiAobGFucy5pbmNsdWRlcyhkZWZhdWx0TGFuKSkge1xyXG4gICAgICB0aGlzLl9kZWZhdWx0ID0gZGVmYXVsdExhbjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVwZGF0ZUxhbmdEYXRhKHRoaXMuX2RlZmF1bHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREZWZhdWx0TGFuZygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm4gREVGQVVMVDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmxheW91dC5sYW5nKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmxheW91dC5sYW5nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChuYXZpZ2F0b3IubGFuZ3VhZ2VzID8gbmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IG51bGwpIHx8IG5hdmlnYXRvci5sYW5ndWFnZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlTGFuZ0RhdGEobGFuZzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpdGVtID0gTEFOR1NbbGFuZ107XHJcbiAgICByZWdpc3RlckxvY2FsZURhdGEoaXRlbS5uZyk7XHJcbiAgICB0aGlzLm56STE4blNlcnZpY2Uuc2V0TG9jYWxlKGl0ZW0uem9ycm8pO1xyXG4gICAgdGhpcy5uekkxOG5TZXJ2aWNlLnNldERhdGVMb2NhbGUoaXRlbS5kYXRlKTtcclxuICAgIHRoaXMuZGVsb25Mb2NhbGVTZXJ2aWNlLnNldExvY2FsZShpdGVtLmRlbG9uKTtcclxuICB9XHJcblxyXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYW5nZSQuYXNPYnNlcnZhYmxlKCkucGlwZShmaWx0ZXIoKHcpID0+IHcgIT0gbnVsbCkpIGFzIE9ic2VydmFibGU8c3RyaW5nPjtcclxuICB9XHJcblxyXG4gIHVzZShsYW5nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxhbmcgPSBsYW5nIHx8IHRoaXMudHJhbnNsYXRlLmdldERlZmF1bHRMYW5nKCk7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50TGFuZyA9PT0gbGFuZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUxhbmdEYXRhKGxhbmcpO1xyXG4gICAgdGhpcy50cmFuc2xhdGUudXNlKGxhbmcpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNoYW5nZSQubmV4dChsYW5nKSk7XHJcbiAgfVxyXG4gIC8qKiDojrflj5bor63oqIDliJfooaggKi9cclxuICBnZXRMYW5ncygpIHtcclxuICAgIHJldHVybiB0aGlzLl9sYW5ncztcclxuICB9XHJcbiAgLyoqIOe/u+ivkSAqL1xyXG4gIGZhbnlpKGtleTogc3RyaW5nLCBpbnRlcnBvbGF0ZVBhcmFtcz86IHt9KSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUuaW5zdGFudChrZXksIGludGVycG9sYXRlUGFyYW1zKTtcclxuICB9XHJcbiAgLyoqIOm7mOiupOivreiogCAqL1xyXG4gIGdldCBkZWZhdWx0TGFuZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0O1xyXG4gIH1cclxuICAvKiog5b2T5YmN6K+t6KiAICovXHJcbiAgZ2V0IGN1cnJlbnRMYW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nIHx8IHRoaXMudHJhbnNsYXRlLmdldERlZmF1bHRMYW5nKCkgfHwgdGhpcy5fZGVmYXVsdDtcclxuICB9XHJcbn1cclxuIl19