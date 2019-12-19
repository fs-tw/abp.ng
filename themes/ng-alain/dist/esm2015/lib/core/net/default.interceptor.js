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
export class DefaultInterceptor {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @private
     * @return {?}
     */
    get notification() {
        return this.injector.get(NzNotificationService);
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    goTo(url) {
        setTimeout((/**
         * @return {?}
         */
        () => this.injector.get(Router).navigateByUrl(url)));
    }
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    checkStatus(ev) {
        if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
            return;
        }
        /** @type {?} */
        const errortext = CODEMESSAGE[ev.status] || ev.statusText;
        this.notification.error(`请求错误 ${ev.status}: ${ev.url}`, errortext);
    }
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
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
                ((/** @type {?} */ (this.injector.get(DA_SERVICE_TOKEN)))).clear();
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
                    return throwError(ev);
                }
                break;
        }
        return of(ev);
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        // 统一加上服务端前缀
        /** @type {?} */
        let url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = environment.SERVER_URL + url;
        }
        /** @type {?} */
        const newReq = req.clone({ url });
        return next.handle(newReq).pipe(mergeMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // 允许统一对请求错误处理
            if (event instanceof HttpResponseBase)
                return this.handleData(event);
            // 若一切都正常，则后续操作
            return of(event);
        })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => this.handleData(err))));
    }
}
DefaultInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DefaultInterceptor.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultInterceptor.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25ldC9kZWZhdWx0LmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFJTCxpQkFBaUIsRUFFakIsZ0JBQWdCLEdBQ2pCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFjLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQW9CLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSxhQUFhLENBQUM7O01BRXhELFdBQVcsR0FBRztJQUNsQixHQUFHLEVBQUUsZUFBZTtJQUNwQixHQUFHLEVBQUUsWUFBWTtJQUNqQixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLDZCQUE2QjtJQUNsQyxHQUFHLEVBQUUsc0JBQXNCO0lBQzNCLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsR0FBRyxFQUFFLDRCQUE0QjtJQUNqQyxHQUFHLEVBQUUsV0FBVztJQUNoQixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLEdBQUcsRUFBRSxvQkFBb0I7SUFDekIsR0FBRyxFQUFFLGlCQUFpQjtJQUN0QixHQUFHLEVBQUUsT0FBTztJQUNaLEdBQUcs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QyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUc7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdELEdBQUcsR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztTQUNwQzs7Y0FFSyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzdCLFFBQVE7Ozs7UUFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3RCLGNBQWM7WUFDZCxJQUFJLEtBQUssWUFBWSxnQkFBZ0I7Z0JBQUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JFLGVBQWU7WUFDZixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1FBQUMsQ0FBQyxHQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQzdELENBQUM7SUFDSixDQUFDOzs7WUF4RkYsVUFBVTs7OztZQXRDVSxRQUFROzs7Ozs7O0lBd0NmLHNDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgSHR0cEludGVyY2VwdG9yLFxyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBIYW5kbGVyLFxyXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxyXG4gIEh0dHBFdmVudCxcclxuICBIdHRwUmVzcG9uc2VCYXNlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWVyZ2VNYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UsIE56Tm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hdXRoJztcclxuXHJcbmNvbnN0IENPREVNRVNTQUdFID0ge1xyXG4gIDIwMDogJ+acjeWKoeWZqOaIkOWKn+i/lOWbnuivt+axgueahOaVsOaNruOAgicsXHJcbiAgMjAxOiAn5paw5bu65oiW5L+u5pS55pWw5o2u5oiQ5Yqf44CCJyxcclxuICAyMDI6ICfkuIDkuKror7fmsYLlt7Lnu4/ov5vlhaXlkI7lj7DmjpLpmJ/vvIjlvILmraXku7vliqHvvInjgIInLFxyXG4gIDIwNDogJ+WIoOmZpOaVsOaNruaIkOWKn+OAgicsXHJcbiAgNDAwOiAn5Y+R5Ye655qE6K+35rGC5pyJ6ZSZ6K+v77yM5pyN5Yqh5Zmo5rKh5pyJ6L+b6KGM5paw5bu65oiW5L+u5pS55pWw5o2u55qE5pON5L2c44CCJyxcclxuICA0MDE6ICfnlKjmiLfmsqHmnInmnYPpmZDvvIjku6TniYzjgIHnlKjmiLflkI3jgIHlr4bnoIHplJnor6/vvInjgIInLFxyXG4gIDQwMzogJ+eUqOaIt+W+l+WIsOaOiOadg++8jOS9huaYr+iuv+mXruaYr+iiq+emgeatoueahOOAgicsXHJcbiAgNDA0OiAn5Y+R5Ye655qE6K+35rGC6ZKI5a+555qE5piv5LiN5a2Y5Zyo55qE6K6w5b2V77yM5pyN5Yqh5Zmo5rKh5pyJ6L+b6KGM5pON5L2c44CCJyxcclxuICA0MDY6ICfor7fmsYLnmoTmoLzlvI/kuI3lj6/lvpfjgIInLFxyXG4gIDQxMDogJ+ivt+axgueahOi1hOa6kOiiq+awuOS5heWIoOmZpO+8jOS4lOS4jeS8muWGjeW+l+WIsOeahOOAgicsXHJcbiAgNDIyOiAn5b2T5Yib5bu65LiA5Liq5a+56LGh5pe277yM5Y+R55Sf5LiA5Liq6aqM6K+B6ZSZ6K+v44CCJyxcclxuICA1MDA6ICfmnI3liqHlmajlj5HnlJ/plJnor6/vvIzor7fmo4Dmn6XmnI3liqHlmajjgIInLFxyXG4gIDUwMjogJ+e9keWFs+mUmeivr+OAgicsXHJcbiAgNTAzOiAn5pyN5Yqh5LiN5Y+v55So77yM5pyN5Yqh5Zmo5pqC5pe26L+H6L295oiW57u05oqk44CCJyxcclxuICA1MDQ6ICfnvZHlhbPotoXml7bjgIInLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupEhUVFDmi6bmiKrlmajvvIzlhbbms6jlhoznu4boioLop4EgYGFwcC5tb2R1bGUudHNgXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxyXG5cclxuICBwcml2YXRlIGdldCBub3RpZmljYXRpb24oKTogTnpOb3RpZmljYXRpb25TZXJ2aWNlIHtcclxuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChOek5vdGlmaWNhdGlvblNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb1RvKHVybDogc3RyaW5nKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcikubmF2aWdhdGVCeVVybCh1cmwpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tTdGF0dXMoZXY6IEh0dHBSZXNwb25zZUJhc2UpIHtcclxuICAgIGlmICgoZXYuc3RhdHVzID49IDIwMCAmJiBldi5zdGF0dXMgPCAzMDApIHx8IGV2LnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlcnJvcnRleHQgPSBDT0RFTUVTU0FHRVtldi5zdGF0dXNdIHx8IGV2LnN0YXR1c1RleHQ7XHJcbiAgICB0aGlzLm5vdGlmaWNhdGlvbi5lcnJvcihg6K+35rGC6ZSZ6K+vICR7ZXYuc3RhdHVzfTogJHtldi51cmx9YCwgZXJyb3J0ZXh0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRGF0YShldjogSHR0cFJlc3BvbnNlQmFzZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyDlj6/og73kvJrlm6DkuLogYHRocm93YCDlr7zlh7rml6Dms5XmiafooYwgYF9IdHRwQ2xpZW50YCDnmoQgYGVuZCgpYCDmk43kvZxcclxuICAgIGlmIChldi5zdGF0dXMgPiAwKSB7XHJcbiAgICAgIHRoaXMuaW5qZWN0b3IuZ2V0KF9IdHRwQ2xpZW50KS5lbmQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hlY2tTdGF0dXMoZXYpO1xyXG4gICAgLy8g5Lia5Yqh5aSE55CG77ya5LiA5Lqb6YCa55So5pON5L2cXHJcbiAgICBzd2l0Y2ggKGV2LnN0YXR1cykge1xyXG4gICAgICBjYXNlIDIwMDpcclxuICAgICAgICAvLyDkuJrliqHlsYLnuqfplJnor6/lpITnkIbvvIzku6XkuIvmmK/lgYflrppyZXN0ZnVs5pyJ5LiA5aWX57uf5LiA6L6T5Ye65qC85byP77yI5oyH5LiN566h5oiQ5Yqf5LiO5ZCm6YO95pyJ55u45bqU55qE5pWw5o2u5qC85byP77yJ5oOF5Ya15LiL6L+b6KGM5aSE55CGXHJcbiAgICAgICAgLy8g5L6L5aaC5ZON5bqU5YaF5a6577yaXHJcbiAgICAgICAgLy8gIOmUmeivr+WGheWuue+8mnsgc3RhdHVzOiAxLCBtc2c6ICfpnZ7ms5Xlj4LmlbAnIH1cclxuICAgICAgICAvLyAg5q2j56Gu5YaF5a6577yaeyBzdGF0dXM6IDAsIHJlc3BvbnNlOiB7ICB9IH1cclxuICAgICAgICAvLyDliJnku6XkuIvku6PnoIHniYfmlq3lj6/nm7TmjqXpgILnlKhcclxuICAgICAgICAvLyBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgYm9keTogYW55ID0gZXZlbnQuYm9keTtcclxuICAgICAgICAvLyAgICAgaWYgKGJvZHkgJiYgYm9keS5zdGF0dXMgIT09IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubXNnLmVycm9yKGJvZHkubXNnKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIOe7p+e7reaKm+WHuumUmeivr+S4reaWreWQjue7reaJgOaciSBQaXBl44CBc3Vic2NyaWJlIOaTjeS9nO+8jOWboOatpO+8mlxyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5odHRwLmdldCgnLycpLnN1YnNjcmliZSgpIOW5tuS4jeS8muinpuWPkVxyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRocm93RXJyb3Ioe30pO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8g6YeN5paw5L+u5pS5IGBib2R5YCDlhoXlrrnkuLogYHJlc3BvbnNlYCDlhoXlrrnvvIzlr7nkuo7nu53lpKflpJrmlbDlnLrmma/lt7Lnu4/ml6Dpobvlho3lhbPlv4PkuJrliqHnirbmgIHnoIFcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBvZihuZXcgSHR0cFJlc3BvbnNlKE9iamVjdC5hc3NpZ24oZXZlbnQsIHsgYm9keTogYm9keS5yZXNwb25zZSB9KSkpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8g5oiW6ICF5L6d54S25L+d5oyB5a6M5pW055qE5qC85byPXHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gb2YoZXZlbnQpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQwMTpcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5lcnJvcihg5pyq55m75b2V5oiW55m75b2V5bey6L+H5pyf77yM6K+36YeN5paw55m75b2V44CCYCwgYGApO1xyXG4gICAgICAgIC8vIOa4heepuiB0b2tlbiDkv6Hmga9cclxuICAgICAgICAodGhpcy5pbmplY3Rvci5nZXQoREFfU0VSVklDRV9UT0tFTikgYXMgSVRva2VuU2VydmljZSkuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmdvVG8oJy9wYXNzcG9ydC9sb2dpbicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQwMzpcclxuICAgICAgY2FzZSA0MDQ6XHJcbiAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgIHRoaXMuZ29UbyhgL2V4Y2VwdGlvbi8ke2V2LnN0YXR1c31gKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpZiAoZXYgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCfmnKrlj6/nn6XplJnor6/vvIzlpKfpg6jliIbmmK/nlLHkuo7lkI7nq6/kuI3mlK/mjIFDT1JT5oiW5peg5pWI6YWN572u5byV6LW3JywgZXYpO1xyXG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBvZihldik7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIC8vIOe7n+S4gOWKoOS4iuacjeWKoeerr+WJjee8gFxyXG4gICAgbGV0IHVybCA9IHJlcS51cmw7XHJcbiAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwczovLycpICYmICF1cmwuc3RhcnRzV2l0aCgnaHR0cDovLycpKSB7XHJcbiAgICAgIHVybCA9IGVudmlyb25tZW50LlNFUlZFUl9VUkwgKyB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3UmVxID0gcmVxLmNsb25lKHsgdXJsIH0pO1xyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKG5ld1JlcSkucGlwZShcclxuICAgICAgbWVyZ2VNYXAoKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvLyDlhYHorrjnu5/kuIDlr7nor7fmsYLplJnor6/lpITnkIZcclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2VCYXNlKSByZXR1cm4gdGhpcy5oYW5kbGVEYXRhKGV2ZW50KTtcclxuICAgICAgICAvLyDoi6XkuIDliIfpg73mraPluLjvvIzliJnlkI7nu63mk43kvZxcclxuICAgICAgICByZXR1cm4gb2YoZXZlbnQpO1xyXG4gICAgICB9KSxcclxuICAgICAgY2F0Y2hFcnJvcigoZXJyOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gdGhpcy5oYW5kbGVEYXRhKGVycikpLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19