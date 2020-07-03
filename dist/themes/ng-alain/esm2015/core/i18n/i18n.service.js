import { __decorate, __metadata } from "tslib";
// 请参考：https://ng-alain.com/docs/i18n
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
    constructor(settings, nzI18nService, delonLocaleService, translate) {
        this.settings = settings;
        this.nzI18nService = nzI18nService;
        this.delonLocaleService = delonLocaleService;
        this.translate = translate;
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
I18NService.ɵprov = i0.ɵɵdefineInjectable({ factory: function I18NService_Factory() { return new I18NService(i0.ɵɵinject(i1.SettingsService), i0.ɵɵinject(i2.NzI18nService), i0.ɵɵinject(i1.DelonLocaleService), i0.ɵɵinject(i3.TranslateService)); }, token: I18NService, providedIn: "root" });
I18NService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [SettingsService,
        NzI18nService,
        DelonLocaleService,
        TranslateService])
], I18NService);
export { I18NService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2NvcmUvc3JjL2kxOG4vaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQ0FBcUM7QUFDckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxJQUFJLE1BQU0sNEJBQTRCLENBQUM7QUFDOUMsT0FBTyxJQUFJLE1BQU0sNEJBQTRCLENBQUM7QUFDOUMsT0FBTyxNQUFNLE1BQU0saUNBQWlDLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsa0JBQWtCLEVBQ2xCLEtBQUssSUFBSSxTQUFTLEVBQ2xCLGVBQWUsRUFDZixLQUFLLElBQUksU0FBUyxFQUNsQixLQUFLLElBQUksU0FBUyxHQUNuQixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksTUFBTSxFQUFFLElBQUksSUFBSSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxJQUFJLFNBQVMsRUFBRSxhQUFhLEVBQUUsS0FBSyxJQUFJLFNBQVMsRUFBRSxLQUFLLElBQUksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0csT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBV3hDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN4QixNQUFNLEtBQUssR0FBZ0M7SUFDekMsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixFQUFFLEVB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TUFBTSxFQUFFLENBQUM7cUNBV2IsZUFBZTtRQUNWLGFBQWE7UUFDUixrQkFBa0I7UUFDM0IsZ0JBQWdCO0dBYjFCLFdBQVcsQ0FzRXZCO1NBdEVZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvLyDor7flj4LogIPvvJpodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2kxOG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGVEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IG5nRW4gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2xvY2FsZXMvZW4nO1xyXG5pbXBvcnQgbmdaaCBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy96aCc7XHJcbmltcG9ydCBuZ1poVHcgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2xvY2FsZXMvemgtSGFudCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBBbGFpbkkxOE5TZXJ2aWNlLFxyXG4gIERlbG9uTG9jYWxlU2VydmljZSxcclxuICBlbl9VUyBhcyBkZWxvbkVuVVMsXHJcbiAgU2V0dGluZ3NTZXJ2aWNlLFxyXG4gIHpoX0NOIGFzIGRlbG9uWmhDbixcclxuICB6aF9UVyBhcyBkZWxvblpoVHcsXHJcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBlblVTIGFzIGRmRW4sIHpoQ04gYXMgZGZaaENuLCB6aFRXIGFzIGRmWmhUdyB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XHJcbmltcG9ydCB7IGVuX1VTIGFzIHpvcnJvRW5VUywgTnpJMThuU2VydmljZSwgemhfQ04gYXMgem9ycm9aaENOLCB6aF9UVyBhcyB6b3Jyb1poVFcgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW50ZXJmYWNlIExhbmdEYXRhIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgbmc6IGFueTtcclxuICB6b3JybzogYW55O1xyXG4gIGRhdGU6IGFueTtcclxuICBkZWxvbjogYW55O1xyXG4gIGFiYnI6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgREVGQVVMVCA9ICd6aC1DTic7XHJcbmNvbnN0IExBTkdTOiB7IFtrZXk6IHN0cmluZ106IExhbmdEYXRhIH0gPSB7XHJcbiAgJ3poLUNOJzoge1xyXG4gICAgdGV4dDogJ+eugOS9k+S4reaWhycsXHJcbiAgICBuZzogbmdaaCxcclxuICAgIHpvcnJvOiB6b3Jyb1poQ04sXHJcbiAgICBkYXRlOiBkZlpoQ24sXHJcbiAgICBkZWxvbjogZGVsb25aaENuLFxyXG4gICAgYWJicjogJ/Cfh6jwn4ezJyxcclxuICB9LFxyXG4gICd6aC1UVyc6IHtcclxuICAgIHRleHQ6ICfnuYHkvZPkuK3mlocnLFxyXG4gICAgbmc6IG5nWmhUdyxcclxuICAgIHpvcnJvOiB6b3Jyb1poVFcsXHJcbiAgICBkYXRlOiBkZlpoVHcsXHJcbiAgICBkZWxvbjogZGVsb25aaFR3LFxyXG4gICAgYWJicjogJ/Cfh63wn4ewJyxcclxuICB9LFxyXG4gICdlbi1VUyc6IHtcclxuICAgIHRleHQ6ICdFbmdsaXNoJyxcclxuICAgIG5nOiBuZ0VuLFxyXG4gICAgem9ycm86IHpvcnJvRW5VUyxcclxuICAgIGRhdGU6IGRmRW4sXHJcbiAgICBkZWxvbjogZGVsb25FblVTLFxyXG4gICAgYWJicjogJ/Cfh6zwn4enJyxcclxuICB9LFxyXG59O1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEkxOE5TZXJ2aWNlIGltcGxlbWVudHMgQWxhaW5JMThOU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfZGVmYXVsdCA9IERFRkFVTFQ7XHJcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgcHJpdmF0ZSBfbGFuZ3MgPSBPYmplY3Qua2V5cyhMQU5HUykubWFwKChjb2RlKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gTEFOR1NbY29kZV07XHJcbiAgICByZXR1cm4geyBjb2RlLCB0ZXh0OiBpdGVtLnRleHQsIGFiYnI6IGl0ZW0uYWJiciB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcclxuICAgIHByaXZhdGUgbnpJMThuU2VydmljZTogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgZGVsb25Mb2NhbGVTZXJ2aWNlOiBEZWxvbkxvY2FsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcclxuICApIHtcclxuICAgIC8vIGBAbmd4LXRyYW5zbGF0ZS9jb3JlYCDpooTlhYjnn6XpgZPmlK/mjIHlk6rkupvor63oqIBcclxuICAgIGNvbnN0IGxhbnMgPSB0aGlzLl9sYW5ncy5tYXAoKGl0ZW0pID0+IGl0ZW0uY29kZSk7XHJcbiAgICB0cmFuc2xhdGUuYWRkTGFuZ3MobGFucyk7XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdExhbiA9IHRoaXMuZ2V0RGVmYXVsdExhbmcoKTtcclxuICAgIGlmIChsYW5zLmluY2x1ZGVzKGRlZmF1bHRMYW4pKSB7XHJcbiAgICAgIHRoaXMuX2RlZmF1bHQgPSBkZWZhdWx0TGFuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlTGFuZ0RhdGEodGhpcy5fZGVmYXVsdCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERlZmF1bHRMYW5nKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5sYXlvdXQubGFuZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQubGFuZztcclxuICAgIH1cclxuICAgIHJldHVybiAobmF2aWdhdG9yLmxhbmd1YWdlcyA/IG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gOiBudWxsKSB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUxhbmdEYXRhKGxhbmc6IHN0cmluZykge1xyXG4gICAgY29uc3QgaXRlbSA9IExBTkdTW2xhbmddO1xyXG4gICAgcmVnaXN0ZXJMb2NhbGVEYXRhKGl0ZW0ubmcpO1xyXG4gICAgdGhpcy5uekkxOG5TZXJ2aWNlLnNldExvY2FsZShpdGVtLnpvcnJvKTtcclxuICAgIHRoaXMubnpJMThuU2VydmljZS5zZXREYXRlTG9jYWxlKGl0ZW0uZGF0ZSk7XHJcbiAgICB0aGlzLmRlbG9uTG9jYWxlU2VydmljZS5zZXRMb2NhbGUoaXRlbS5kZWxvbik7XHJcbiAgfVxyXG5cclxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKCh3KSA9PiB3ICE9IG51bGwpKSBhcyBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgfVxyXG5cclxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsYW5nID0gbGFuZyB8fCB0aGlzLnRyYW5zbGF0ZS5nZXREZWZhdWx0TGFuZygpO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudExhbmcgPT09IGxhbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVMYW5nRGF0YShsYW5nKTtcclxuICAgIHRoaXMudHJhbnNsYXRlLnVzZShsYW5nKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGFuZ2UkLm5leHQobGFuZykpO1xyXG4gIH1cclxuICAvKiog6I635Y+W6K+t6KiA5YiX6KGoICovXHJcbiAgZ2V0TGFuZ3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3M7XHJcbiAgfVxyXG4gIC8qKiDnv7vor5EgKi9cclxuICBmYW55aShrZXk6IHN0cmluZywgaW50ZXJwb2xhdGVQYXJhbXM/OiB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XHJcbiAgfVxyXG4gIC8qKiDpu5jorqTor63oqIAgKi9cclxuICBnZXQgZGVmYXVsdExhbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdDtcclxuICB9XHJcbiAgLyoqIOW9k+WJjeivreiogCAqL1xyXG4gIGdldCBjdXJyZW50TGFuZygpIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyB8fCB0aGlzLnRyYW5zbGF0ZS5nZXREZWZhdWx0TGFuZygpIHx8IHRoaXMuX2RlZmF1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==