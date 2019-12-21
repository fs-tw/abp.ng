/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/net/default.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponseBase, } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { NzNotificationService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { environment } from '../../../environments/environment';
import { DA_SERVICE_TOKEN } from '@delon/auth';
/** @type {?} */
var CODEMESSAGE = {
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
var DefaultInterceptor = /** @class */ (function () {
    function DefaultInterceptor(injector) {
        this.injector = injector;
    }
    Object.defineProperty(DefaultInterceptor.prototype, "notification", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.injector.get(NzNotificationService);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    DefaultInterceptor.prototype.goTo = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.injector.get(Router).navigateByUrl(url); }));
    };
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    DefaultInterceptor.prototype.checkStatus = /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
            return;
        }
        /** @type {?} */
        var errortext = CODEMESSAGE[ev.status] || ev.statusText;
        this.notification.error("\u8BF7\u6C42\u9519\u8BEF " + ev.status + ": " + ev.url, errortext);
    };
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    DefaultInterceptor.prototype.handleData = /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
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
                this.notification.error("\u672A\u767B\u5F55\u6216\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002", "");
                // 清空 token 信息
                ((/** @type {?} */ (this.injector.get(DA_SERVICE_TOKEN)))).clear();
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo("/exception/" + ev.status);
                break;
            default:
                if (ev instanceof HttpErrorResponse) {
                    console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', ev);
                    return throwError(ev);
                }
                break;
        }
        return of(ev);
    };
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    DefaultInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var _this = this;
        // 统一加上服务端前缀
        /** @type {?} */
        var url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = environment.SERVER_URL + url;
        }
        /** @type {?} */
        var newReq = req.clone({ url: url });
        return next.handle(newReq).pipe(mergeMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // 允许统一对请求错误处理
            if (event instanceof HttpResponseBase)
                return _this.handleData(event);
            // 若一切都正常，则后续操作
            return of(event);
        })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.handleData(err); })));
    };
    DefaultInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DefaultInterceptor.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return DefaultInterceptor;
}());
export { DefaultInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultInterceptor.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25ldC9kZWZhdWx0LmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFJTCxpQkFBaUIsRUFFakIsZ0JBQWdCLEdBQ2pCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFjLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQW9CLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSxhQUFhLENBQUM7O0lBRXhELFdBQVcsR0FBRztJQUNsQixHQUFHLEVBQUUsZUFBZTtJQUNwQixHQUFHLEVBQUUsWUFBWTtJQUNqQixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLDZCQUE2QjtJQUNsQyxHQUFHLEVBQUUsc0JBQXNCO0lBQzNCLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsR0FBRyxFQUFFLDRCQUE0QjtJQUNqQyxHQUFHLEVBQUUsV0FBVztJQUNoQixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLEdBQUcsRUFBRSxvQkFBb0I7SUFDekIsR0FBRyxFQUFFLGlCQUFpQjtJQUN0QixHQUFHLEVBQUUsT0FBTztJQUNaLEdBQUcs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SUFFRCxzQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFBbEQsaUJBaUJDOzs7WUFmSyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUc7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdELEdBQUcsR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztTQUNwQzs7WUFFSyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDN0IsUUFBUTs7OztRQUFDLFVBQUMsS0FBVTtZQUNsQixjQUFjO1lBQ2QsSUFBSSxLQUFLLFlBQVksZ0JBQWdCO2dCQUFFLE9BQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRSxlQUFlO1lBQ2YsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLFVBQUMsR0FBc0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQXBCLENBQW9CLEVBQUMsQ0FDN0QsQ0FBQztJQUNKLENBQUM7O2dCQXhGRixVQUFVOzs7O2dCQXRDVSxRQUFROztJQStIN0IseUJBQUM7Q0FBQSxBQXpGRCxJQXlGQztTQXhGWSxrQkFBa0I7Ozs7OztJQUNqQixzQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBJbnRlcmNlcHRvcixcclxuICBIdHRwUmVxdWVzdCxcclxuICBIdHRwSGFuZGxlcixcclxuICBIdHRwRXJyb3JSZXNwb25zZSxcclxuICBIdHRwRXZlbnQsXHJcbiAgSHR0cFJlc3BvbnNlQmFzZSxcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1lcmdlTWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlLCBOek5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICdAZGVsb24vYXV0aCc7XHJcblxyXG5jb25zdCBDT0RFTUVTU0FHRSA9IHtcclxuICAyMDA6ICfmnI3liqHlmajmiJDlip/ov5Tlm57or7fmsYLnmoTmlbDmja7jgIInLFxyXG4gIDIwMTogJ+aWsOW7uuaIluS/ruaUueaVsOaNruaIkOWKn+OAgicsXHJcbiAgMjAyOiAn5LiA5Liq6K+35rGC5bey57uP6L+b5YWl5ZCO5Y+w5o6S6Zif77yI5byC5q2l5Lu75Yqh77yJ44CCJyxcclxuICAyMDQ6ICfliKDpmaTmlbDmja7miJDlip/jgIInLFxyXG4gIDQwMDogJ+WPkeWHuueahOivt+axguaciemUmeivr++8jOacjeWKoeWZqOayoeaciei/m+ihjOaWsOW7uuaIluS/ruaUueaVsOaNrueahOaTjeS9nOOAgicsXHJcbiAgNDAxOiAn55So5oi35rKh5pyJ5p2D6ZmQ77yI5Luk54mM44CB55So5oi35ZCN44CB5a+G56CB6ZSZ6K+v77yJ44CCJyxcclxuICA0MDM6ICfnlKjmiLflvpfliLDmjojmnYPvvIzkvYbmmK/orr/pl67mmK/ooqvnpoHmraLnmoTjgIInLFxyXG4gIDQwNDogJ+WPkeWHuueahOivt+axgumSiOWvueeahOaYr+S4jeWtmOWcqOeahOiusOW9le+8jOacjeWKoeWZqOayoeaciei/m+ihjOaTjeS9nOOAgicsXHJcbiAgNDA2OiAn6K+35rGC55qE5qC85byP5LiN5Y+v5b6X44CCJyxcclxuICA0MTA6ICfor7fmsYLnmoTotYTmupDooqvmsLjkuYXliKDpmaTvvIzkuJTkuI3kvJrlho3lvpfliLDnmoTjgIInLFxyXG4gIDQyMjogJ+W9k+WIm+W7uuS4gOS4quWvueixoeaXtu+8jOWPkeeUn+S4gOS4qumqjOivgemUmeivr+OAgicsXHJcbiAgNTAwOiAn5pyN5Yqh5Zmo5Y+R55Sf6ZSZ6K+v77yM6K+35qOA5p+l5pyN5Yqh5Zmo44CCJyxcclxuICA1MDI6ICfnvZHlhbPplJnor6/jgIInLFxyXG4gIDUwMzogJ+acjeWKoeS4jeWPr+eUqO+8jOacjeWKoeWZqOaaguaXtui/h+i9veaIlue7tOaKpOOAgicsXHJcbiAgNTA0OiAn572R5YWz6LaF5pe244CCJyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqRIVFRQ5oum5oiq5Zmo77yM5YW25rOo5YaM57uG6IqC6KeBIGBhcHAubW9kdWxlLnRzYFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cclxuXHJcbiAgcHJpdmF0ZSBnZXQgbm90aWZpY2F0aW9uKCk6IE56Tm90aWZpY2F0aW9uU2VydmljZSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoTnpOb3RpZmljYXRpb25TZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ29Ubyh1cmw6IHN0cmluZykge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlQnlVcmwodXJsKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrU3RhdHVzKGV2OiBIdHRwUmVzcG9uc2VCYXNlKSB7XHJcbiAgICBpZiAoKGV2LnN0YXR1cyA+PSAyMDAgJiYgZXYuc3RhdHVzIDwgMzAwKSB8fCBldi5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXJyb3J0ZXh0ID0gQ09ERU1FU1NBR0VbZXYuc3RhdHVzXSB8fCBldi5zdGF0dXNUZXh0O1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb24uZXJyb3IoYOivt+axgumUmeivryAke2V2LnN0YXR1c306ICR7ZXYudXJsfWAsIGVycm9ydGV4dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZURhdGEoZXY6IEh0dHBSZXNwb25zZUJhc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8g5Y+v6IO95Lya5Zug5Li6IGB0aHJvd2Ag5a+85Ye65peg5rOV5omn6KGMIGBfSHR0cENsaWVudGAg55qEIGBlbmQoKWAg5pON5L2cXHJcbiAgICBpZiAoZXYuc3RhdHVzID4gMCkge1xyXG4gICAgICB0aGlzLmluamVjdG9yLmdldChfSHR0cENsaWVudCkuZW5kKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrU3RhdHVzKGV2KTtcclxuICAgIC8vIOS4muWKoeWkhOeQhu+8muS4gOS6m+mAmueUqOaTjeS9nFxyXG4gICAgc3dpdGNoIChldi5zdGF0dXMpIHtcclxuICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgLy8g5Lia5Yqh5bGC57qn6ZSZ6K+v5aSE55CG77yM5Lul5LiL5piv5YGH5a6acmVzdGZ1bOacieS4gOWll+e7n+S4gOi+k+WHuuagvOW8j++8iOaMh+S4jeeuoeaIkOWKn+S4juWQpumDveacieebuOW6lOeahOaVsOaNruagvOW8j++8ieaDheWGteS4i+i/m+ihjOWkhOeQhlxyXG4gICAgICAgIC8vIOS+i+WmguWTjeW6lOWGheWuue+8mlxyXG4gICAgICAgIC8vICDplJnor6/lhoXlrrnvvJp7IHN0YXR1czogMSwgbXNnOiAn6Z2e5rOV5Y+C5pWwJyB9XHJcbiAgICAgICAgLy8gIOato+ehruWGheWuue+8mnsgc3RhdHVzOiAwLCByZXNwb25zZTogeyAgfSB9XHJcbiAgICAgICAgLy8g5YiZ5Lul5LiL5Luj56CB54mH5pat5Y+v55u05o6l6YCC55SoXHJcbiAgICAgICAgLy8gaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGJvZHk6IGFueSA9IGV2ZW50LmJvZHk7XHJcbiAgICAgICAgLy8gICAgIGlmIChib2R5ICYmIGJvZHkuc3RhdHVzICE9PSAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1zZy5lcnJvcihib2R5Lm1zZyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyDnu6fnu63mipvlh7rplJnor6/kuK3mlq3lkI7nu63miYDmnIkgUGlwZeOAgXN1YnNjcmliZSDmk43kvZzvvIzlm6DmraTvvJpcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuaHR0cC5nZXQoJy8nKS5zdWJzY3JpYmUoKSDlubbkuI3kvJrop6blj5FcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHt9KTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIOmHjeaWsOS/ruaUuSBgYm9keWAg5YaF5a655Li6IGByZXNwb25zZWAg5YaF5a6577yM5a+55LqO57ud5aSn5aSa5pWw5Zy65pmv5bey57uP5peg6aG75YaN5YWz5b+D5Lia5Yqh54q25oCB56CBXHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gb2YobmV3IEh0dHBSZXNwb25zZShPYmplY3QuYXNzaWduKGV2ZW50LCB7IGJvZHk6IGJvZHkucmVzcG9uc2UgfSkpKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIOaIluiAheS+neeEtuS/neaMgeWujOaVtOeahOagvOW8j1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIG9mKGV2ZW50KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uZXJyb3IoYOacqueZu+W9leaIlueZu+W9leW3sui/h+acn++8jOivt+mHjeaWsOeZu+W9leOAgmAsIGBgKTtcclxuICAgICAgICAvLyDmuIXnqbogdG9rZW4g5L+h5oGvXHJcbiAgICAgICAgKHRoaXMuaW5qZWN0b3IuZ2V0KERBX1NFUlZJQ0VfVE9LRU4pIGFzIElUb2tlblNlcnZpY2UpLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5nb1RvKCcvcGFzc3BvcnQvbG9naW4nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA0MDM6XHJcbiAgICAgIGNhc2UgNDA0OlxyXG4gICAgICBjYXNlIDUwMDpcclxuICAgICAgICB0aGlzLmdvVG8oYC9leGNlcHRpb24vJHtldi5zdGF0dXN9YCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaWYgKGV2IGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2Fybign5pyq5Y+v55+l6ZSZ6K+v77yM5aSn6YOo5YiG5piv55Sx5LqO5ZCO56uv5LiN5pSv5oyBQ09SU+aIluaXoOaViOmFjee9ruW8lei1tycsIGV2KTtcclxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2YoZXYpO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICAvLyDnu5/kuIDliqDkuIrmnI3liqHnq6/liY3nvIBcclxuICAgIGxldCB1cmwgPSByZXEudXJsO1xyXG4gICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSAmJiAhdXJsLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKSkge1xyXG4gICAgICB1cmwgPSBlbnZpcm9ubWVudC5TRVJWRVJfVVJMICsgdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1JlcSA9IHJlcS5jbG9uZSh7IHVybCB9KTtcclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShuZXdSZXEpLnBpcGUoXHJcbiAgICAgIG1lcmdlTWFwKChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgLy8g5YWB6K6457uf5LiA5a+56K+35rGC6ZSZ6K+v5aSE55CGXHJcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlQmFzZSkgcmV0dXJuIHRoaXMuaGFuZGxlRGF0YShldmVudCk7XHJcbiAgICAgICAgLy8g6Iul5LiA5YiH6YO95q2j5bi477yM5YiZ5ZCO57ut5pON5L2cXHJcbiAgICAgICAgcmV0dXJuIG9mKGV2ZW50KTtcclxuICAgICAgfSksXHJcbiAgICAgIGNhdGNoRXJyb3IoKGVycjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHRoaXMuaGFuZGxlRGF0YShlcnIpKSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==