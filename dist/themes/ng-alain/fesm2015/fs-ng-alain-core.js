import { __decorate, __metadata, __param } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { registerLocaleData } from '@angular/common';
import ngEn from '@angular/common/locales/en';
import ngZh from '@angular/common/locales/zh';
import ngZhTw from '@angular/common/locales/zh-Hant';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Injector, Inject, NgModule, Optional, SkipSelf } from '@angular/core';
import { zh_CN as zh_CN$1, zh_TW as zh_TW$1, en_US as en_US$1, SettingsService, DelonLocaleService, _HttpClient, ALAIN_I18N_TOKEN, MenuService, TitleService } from '@delon/theme';
import { TranslateService } from '@ngx-translate/core';
import { zhCN, zhTW, enUS } from 'date-fns/locale';
import { zh_CN, zh_TW, en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { BehaviorSubject, throwError, of, zip } from 'rxjs';
import { filter, mergeMap, catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponseBase, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ACLService } from '@delon/acl';
import { NzIconService } from 'ng-zorro-antd/icon';
import { InfoOutline, BulbOutline, ProfileOutline, ExceptionOutline, LinkOutline, AlipayCircleOutline, ApiOutline, AppstoreOutline, ArrowDownOutline, BookOutline, CloudOutline, CopyrightOutline, CustomerServiceOutline, DashboardOutline, DatabaseOutline, DingdingOutline, DislikeOutline, DownloadOutline, ForkOutline, FrownOutline, FullscreenExitOutline, FullscreenOutline, GithubOutline, GlobalOutline, HddOutline, LaptopOutline, LikeOutline, LockOutline, LogoutOutline, MailOutline, MenuFoldOutline, MenuUnfoldOutline, MessageOutline, PayCircleOutline, PieChartOutline, PrinterOutline, RocketOutline, ScanOutline, SettingOutline, ShareAltOutline, ShoppingCartOutline, SoundOutline, StarOutline, TaobaoCircleOutline, TaobaoOutline, TeamOutline, ToolOutline, TrophyOutline, UsbOutline, UserOutline, WeiboCircleOutline } from '@ant-design/icons-angular/icons';

const DEFAULT = 'zh-CN';
const LANGS = {
    'zh-CN': {
        text: '简体中文',
        ng: ngZh,
        zorro: zh_CN,
        date: zhCN,
        delon: zh_CN$1,
        abbr: '🇨🇳',
    },
    'zh-TW': {
        text: '繁体中文',
        ng: ngZhTw,
        zorro: zh_TW,
        date: zhTW,
        delon: zh_TW$1,
        abbr: '🇭🇰',
    },
    'en-US': {
        text: 'English',
        ng: ngEn,
        zorro: en_US,
        date: enUS,
        delon: en_US$1,
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
I18NService.ɵprov = ɵɵdefineInjectable({ factory: function I18NService_Factory() { return new I18NService(ɵɵinject(SettingsService), ɵɵinject(NzI18nService), ɵɵinject(DelonLocaleService), ɵɵinject(TranslateService), ɵɵinject(Platform)); }, token: I18NService, providedIn: "root" });
I18NService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [SettingsService,
        NzI18nService,
        DelonLocaleService,
        TranslateService,
        Platform])
], I18NService);

const CODEMESSAGE = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};
/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
let DefaultInterceptor = class DefaultInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    get notification() {
        return this.injector.get(NzNotificationService);
    }
    goTo(url) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }
    checkStatus(ev) {
        if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
            return;
        }
        const errortext = CODEMESSAGE[ev.status] || ev.statusText;
        this.notification.error(`请求错误 ${ev.status}: ${ev.url}`, errortext);
    }
    handleData(ev) {
        // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
        if (ev.status > 0) {
            this.injector.get(_HttpClient).end();
        }
        this.checkStatus(ev);
        // 业务处理：一些通用操作
        switch (ev.status) {
            case 200:
                // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
                // 例如响应内容：
                //  错误内容：{ status: 1, msg: '非法参数' }
                //  正确内容：{ status: 0, response: {  } }
                // 则以下代码片断可直接适用
                // if (event instanceof HttpResponse) {
                //     const body: any = event.body;
                //     if (body && body.status !== 0) {
                //         this.msg.error(body.msg);
                //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //         // this.http.get('/').subscribe() 并不会触发
                //         return throwError({});
                //     } else {
                //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
                //         // 或者依然保持完整的格式
                //         return of(event);
                //     }
                // }
                break;
            case 401:
                this.notification.error(`未登录或登录已过期，请重新登录。`, ``);
                // 清空 token 信息
                this.injector.get(DA_SERVICE_TOKEN).clear();
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo(`/exception/${ev.status}`);
                break;
            default:
                if (ev instanceof HttpErrorResponse) {
                    console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', ev);
                }
                break;
        }
        if (ev instanceof HttpErrorResponse) {
            return throwError(ev);
        }
        else {
            return of(ev);
        }
    }
    intercept(req, next) {
        // 统一加上服务端前缀
        let url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = `./` + url;
        }
        const newReq = req.clone({ url });
        return next.handle(newReq).pipe(mergeMap((event) => {
            // 允许统一对请求错误处理
            if (event instanceof HttpResponseBase) {
                return this.handleData(event);
            }
            // 若一切都正常，则后续操作
            return of(event);
        }), catchError((err) => this.handleData(err)));
    }
};
DefaultInterceptor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Injector])
], DefaultInterceptor);

let MessagesService = class MessagesService {
    constructor(modalSrv) {
        this.modalSrv = modalSrv;
    }
    info(message, title = "訊息") {
        this.modalSrv.info({
            nzTitle: title,
            nzContent: message
        });
    }
    success(message, title = "成功訊息") {
        this.modalSrv.success({
            nzTitle: title,
            nzContent: message
        });
    }
    warn(message, title = "警告訊息") {
        this.modalSrv.warning({
            nzTitle: title,
            nzContent: message
        });
    }
    error(message, title = "錯誤訊息") {
        this.modalSrv.error({
            nzTitle: title,
            nzContent: message
        });
    }
    confirm(message, titleOrCallBack, callback) {
        if (typeof titleOrCallBack == 'string') {
            this.modalSrv.confirm({
                nzTitle: titleOrCallBack,
                nzContent: message,
                nzOnOk() {
                    if (callback)
                        callback(true);
                },
                nzOnCancel() {
                    if (callback)
                        callback(false);
                }
            });
        }
        else {
            this.modalSrv.confirm({
                nzTitle: "請確認",
                nzContent: message,
                nzOnOk() {
                    if (titleOrCallBack)
                        titleOrCallBack(true);
                },
                nzOnCancel() {
                    if (titleOrCallBack)
                        titleOrCallBack(false);
                }
            });
        }
    }
};
MessagesService.ɵprov = ɵɵdefineInjectable({ factory: function MessagesService_Factory() { return new MessagesService(ɵɵinject(NzModalService)); }, token: MessagesService, providedIn: "root" });
MessagesService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [NzModalService])
], MessagesService);

let NotifyService = class NotifyService {
    constructor(notification) {
        this.notification = notification;
    }
    showNotify(type, title, content) {
        this.notification.create(type, title, content);
    }
    success(content = '', title = "成功") {
        this.showNotify('success', title, content);
    }
    info(content = '', title = "訊息") {
        this.showNotify('info', title, content);
    }
    warning(content = '', title = "警告") {
        this.showNotify('warning', title, content);
    }
    error(content = '', title = "錯誤") {
        this.showNotify('error', title, content);
    }
};
NotifyService.ɵprov = ɵɵdefineInjectable({ factory: function NotifyService_Factory() { return new NotifyService(ɵɵinject(NzNotificationService)); }, token: NotifyService, providedIn: "root" });
NotifyService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [NzNotificationService])
], NotifyService);

// Custom icon static resources
const ICONS = [InfoOutline, BulbOutline, ProfileOutline, ExceptionOutline, LinkOutline];

/*
* Automatically generated by 'ng g ng-alain:plugin icon'
* @see https://ng-alain.com/cli/plugin#icon
*/
const ICONS_AUTO = [
    AlipayCircleOutline,
    ApiOutline,
    AppstoreOutline,
    ArrowDownOutline,
    BookOutline,
    CloudOutline,
    CopyrightOutline,
    CustomerServiceOutline,
    DashboardOutline,
    DatabaseOutline,
    DingdingOutline,
    DislikeOutline,
    DownloadOutline,
    ForkOutline,
    FrownOutline,
    FullscreenExitOutline,
    FullscreenOutline,
    GithubOutline,
    GlobalOutline,
    HddOutline,
    LaptopOutline,
    LikeOutline,
    LockOutline,
    LogoutOutline,
    MailOutline,
    MenuFoldOutline,
    MenuUnfoldOutline,
    MessageOutline,
    PayCircleOutline,
    PieChartOutline,
    PrinterOutline,
    RocketOutline,
    ScanOutline,
    SettingOutline,
    ShareAltOutline,
    ShoppingCartOutline,
    SoundOutline,
    StarOutline,
    TaobaoCircleOutline,
    TaobaoOutline,
    TeamOutline,
    ToolOutline,
    TrophyOutline,
    UsbOutline,
    UserOutline,
    WeiboCircleOutline
];

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

// https://angular.io/guide/styleguide#style-04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}

let CoreModule = class CoreModule {
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
};
CoreModule = __decorate([
    NgModule({
        providers: [],
    }),
    __param(0, Optional()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CoreModule, DefaultInterceptor, I18NService, MessagesService, NotifyService, StartupService, throwIfAlreadyLoaded };
//# sourceMappingURL=fs-ng-alain-core.js.map
