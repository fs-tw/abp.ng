import { Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
export declare class DefaultInterceptor implements HttpInterceptor {
    private injector;
    constructor(injector: Injector);
    private readonly notification;
    private goTo;
    private checkStatus;
    private handleData;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
