import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
import { SessionState } from '../states';
import { StartLoader, StopLoader } from '../actions/loader.actions';
import { finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "angular-oauth2-oidc";
import * as i2 from "@ngxs/store";
export class ApiInterceptor {
    constructor(oAuthService, store) {
        this.oAuthService = oAuthService;
        this.store = store;
    }
    intercept(request, next) {
        this.store.dispatch(new StartLoader(request));
        return next
            .handle(request.clone({
            setHeaders: this.getAdditionalHeaders(request.headers),
        }))
            .pipe(finalize(() => this.store.dispatch(new StopLoader(request))));
    }
    getAdditionalHeaders(existingHeaders) {
        const headers = {};
        const token = this.oAuthService.getAccessToken();
        if (!(existingHeaders === null || existingHeaders === void 0 ? void 0 : existingHeaders.has('Authorization')) && token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const lang = this.store.selectSnapshot(SessionState.getLanguage);
        if (!(existingHeaders === null || existingHeaders === void 0 ? void 0 : existingHeaders.has('Accept-Language')) && lang) {
            headers['Accept-Language'] = lang;
        }
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
        if (!(existingHeaders === null || existingHeaders === void 0 ? void 0 : existingHeaders.has('__tenant')) && tenant) {
            headers['__tenant'] = tenant.id;
        }
        return headers;
    }
}
ApiInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApiInterceptor_Factory() { return new ApiInterceptor(i0.ɵɵinject(i1.OAuthService), i0.ɵɵinject(i2.Store)); }, token: ApiInterceptor, providedIn: "root" });
ApiInterceptor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ApiInterceptor.ctorParameters = () => [
    { type: OAuthService },
    { type: Store }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2ludGVyY2VwdG9ycy9hcGkuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSzFDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQW9CLFlBQTBCLEVBQVUsS0FBWTtRQUFoRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBRXhFLFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFOUMsT0FBTyxJQUFJO2FBQ1IsTUFBTSxDQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDWixVQUFVLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDdkQsQ0FBQyxDQUNIO2FBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsb0JBQW9CLENBQUMsZUFBNkI7UUFDaEQsTUFBTSxPQUFPLEdBQUcsRUFBUyxDQUFDO1FBRTFCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakQsSUFBSSxFQUFDLGVBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxHQUFHLENBQUMsZUFBZSxFQUFDLElBQUksS0FBSyxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxVQUFVLEtBQUssRUFBRSxDQUFDO1NBQzlDO1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksRUFBQyxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsR0FBRyxDQUFDLGlCQUFpQixFQUFDLElBQUksSUFBSSxFQUFFO1lBQ3BELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNuQztRQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLEVBQUMsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUMsSUFBSSxNQUFNLEVBQUU7WUFDL0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7U0FDakM7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7O1lBckNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUlEsWUFBWTtZQUNaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciwgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMnO1xyXG5pbXBvcnQgeyBTdGFydExvYWRlciwgU3RvcExvYWRlciB9IGZyb20gJy4uL2FjdGlvbnMvbG9hZGVyLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcGlJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvQXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcikge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU3RhcnRMb2FkZXIocmVxdWVzdCkpO1xyXG5cclxuICAgIHJldHVybiBuZXh0XHJcbiAgICAgIC5oYW5kbGUoXHJcbiAgICAgICAgcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgICAgICBzZXRIZWFkZXJzOiB0aGlzLmdldEFkZGl0aW9uYWxIZWFkZXJzKHJlcXVlc3QuaGVhZGVycyksXHJcbiAgICAgICAgfSksXHJcbiAgICAgIClcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU3RvcExvYWRlcihyZXF1ZXN0KSkpKTtcclxuICB9XHJcblxyXG4gIGdldEFkZGl0aW9uYWxIZWFkZXJzKGV4aXN0aW5nSGVhZGVycz86IEh0dHBIZWFkZXJzKSB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0ge30gYXMgYW55O1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gdGhpcy5vQXV0aFNlcnZpY2UuZ2V0QWNjZXNzVG9rZW4oKTtcclxuICAgIGlmICghZXhpc3RpbmdIZWFkZXJzPy5oYXMoJ0F1dGhvcml6YXRpb24nKSAmJiB0b2tlbikge1xyXG4gICAgICBoZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYW5nID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0TGFuZ3VhZ2UpO1xyXG4gICAgaWYgKCFleGlzdGluZ0hlYWRlcnM/LmhhcygnQWNjZXB0LUxhbmd1YWdlJykgJiYgbGFuZykge1xyXG4gICAgICBoZWFkZXJzWydBY2NlcHQtTGFuZ3VhZ2UnXSA9IGxhbmc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGVuYW50ID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0VGVuYW50KTtcclxuICAgIGlmICghZXhpc3RpbmdIZWFkZXJzPy5oYXMoJ19fdGVuYW50JykgJiYgdGVuYW50KSB7XHJcbiAgICAgIGhlYWRlcnNbJ19fdGVuYW50J10gPSB0ZW5hbnQuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgfVxyXG59XHJcbiJdfQ==