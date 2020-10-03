import { __rest } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RestOccurError } from '../actions/rest.actions';
import { ConfigState } from '../states/config.state';
import { isUndefinedOrEmptyString } from '../utils/common-utils';
import { CORE_OPTIONS } from '../tokens/options.token';
import * as i0 from "@angular/core";
import * as i1 from "../tokens/options.token";
import * as i2 from "@angular/common/http";
import * as i3 from "@ngxs/store";
export class RestService {
    constructor(options, http, store) {
        this.options = options;
        this.http = http;
        this.store = store;
    }
    getApiFromStore(apiName) {
        return this.store.selectSnapshot(ConfigState.getApiUrl(apiName));
    }
    handleError(err) {
        this.store.dispatch(new RestOccurError(err));
        return throwError(err);
    }
    // TODO: Deprecate service or improve interface in v3.0
    request(request, config, api) {
        config = config || {};
        api = api || this.getApiFromStore(config.apiName);
        const { method, params } = request, options = __rest(request, ["method", "params"]);
        const { observe = "body" /* Body */, skipHandleError } = config;
        return this.http
            .request(method, api + request.url, Object.assign(Object.assign({ observe }, (params && {
            params: Object.keys(params).reduce((acc, key) => {
                const value = params[key];
                if (isUndefinedOrEmptyString(value))
                    return acc;
                if (value === null && !this.options.sendNullsAsQueryParam)
                    return acc;
                acc[key] = value;
                return acc;
            }, {}),
        })), options))
            .pipe(catchError(err => (skipHandleError ? throwError(err) : this.handleError(err))));
    }
}
RestService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RestService_Factory() { return new RestService(i0.ɵɵinject(i1.CORE_OPTIONS), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i3.Store)); }, token: RestService, providedIn: "root" });
RestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
RestService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CORE_OPTIONS,] }] },
    { type: HttpClient },
    { type: Store }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL3Jlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBS3ZELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQ2dDLE9BQWlCLEVBQ3ZDLElBQWdCLEVBQ2hCLEtBQVk7UUFGVSxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQ3ZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBTztJQUNuQixDQUFDO0lBRUksZUFBZSxDQUFDLE9BQWU7UUFDckMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFRO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxPQUFPLENBQ0wsT0FBeUMsRUFDekMsTUFBb0IsRUFDcEIsR0FBWTtRQUVaLE1BQU0sR0FBRyxNQUFNLElBQUssRUFBa0IsQ0FBQztRQUN2QyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxLQUFpQixPQUFPLEVBQW5CLE9BQU8sVUFBSyxPQUFPLEVBQXhDLG9CQUE4QixDQUFVLENBQUM7UUFDL0MsTUFBTSxFQUFFLE9BQU8sb0JBQW9CLEVBQUUsZUFBZSxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBRWhFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixPQUFPLENBQUksTUFBTSxFQUFFLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLDhCQUNyQyxPQUFPLElBQ0osQ0FBQyxNQUFNLElBQUk7WUFDWixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQzlDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFMUIsSUFBSSx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7b0JBQUUsT0FBTyxHQUFHLENBQUM7Z0JBQ2hELElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCO29CQUFFLE9BQU8sR0FBRyxDQUFDO2dCQUV0RSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDUCxDQUFDLEdBQ0MsT0FBTyxDQUNKLENBQUM7YUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7O1lBL0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OzRDQUdJLE1BQU0sU0FBQyxZQUFZO1lBakJmLFVBQVU7WUFFVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBSZXN0T2NjdXJFcnJvciB9IGZyb20gJy4uL2FjdGlvbnMvcmVzdC5hY3Rpb25zJztcclxuaW1wb3J0IHsgUmVzdCB9IGZyb20gJy4uL21vZGVscy9yZXN0JztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuaW1wb3J0IHsgaXNVbmRlZmluZWRPckVtcHR5U3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uLXV0aWxzJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IENPUkVfT1BUSU9OUyB9IGZyb20gJy4uL3Rva2Vucy9vcHRpb25zLnRva2VuJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXN0U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KENPUkVfT1BUSU9OUykgcHJpdmF0ZSBvcHRpb25zOiBBQlAuUm9vdCxcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBnZXRBcGlGcm9tU3RvcmUoYXBpTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEFwaVVybChhcGlOYW1lKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcihlcnI6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBSZXN0T2NjdXJFcnJvcihlcnIpKTtcclxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBEZXByZWNhdGUgc2VydmljZSBvciBpbXByb3ZlIGludGVyZmFjZSBpbiB2My4wXHJcbiAgcmVxdWVzdDxULCBSPihcclxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PFQ+IHwgUmVzdC5SZXF1ZXN0PFQ+LFxyXG4gICAgY29uZmlnPzogUmVzdC5Db25maWcsXHJcbiAgICBhcGk/OiBzdHJpbmcsXHJcbiAgKTogT2JzZXJ2YWJsZTxSPiB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwgKHt9IGFzIFJlc3QuQ29uZmlnKTtcclxuICAgIGFwaSA9IGFwaSB8fCB0aGlzLmdldEFwaUZyb21TdG9yZShjb25maWcuYXBpTmFtZSk7XHJcbiAgICBjb25zdCB7IG1ldGhvZCwgcGFyYW1zLCAuLi5vcHRpb25zIH0gPSByZXF1ZXN0O1xyXG4gICAgY29uc3QgeyBvYnNlcnZlID0gUmVzdC5PYnNlcnZlLkJvZHksIHNraXBIYW5kbGVFcnJvciB9ID0gY29uZmlnO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnJlcXVlc3Q8Uj4obWV0aG9kLCBhcGkgKyByZXF1ZXN0LnVybCwge1xyXG4gICAgICAgIG9ic2VydmUsXHJcbiAgICAgICAgLi4uKHBhcmFtcyAmJiB7XHJcbiAgICAgICAgICBwYXJhbXM6IE9iamVjdC5rZXlzKHBhcmFtcykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtc1trZXldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzVW5kZWZpbmVkT3JFbXB0eVN0cmluZyh2YWx1ZSkpIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCAmJiAhdGhpcy5vcHRpb25zLnNlbmROdWxsc0FzUXVlcnlQYXJhbSkgcmV0dXJuIGFjYztcclxuXHJcbiAgICAgICAgICAgIGFjY1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICB9LCB7fSksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgfSBhcyBhbnkpXHJcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoZXJyID0+IChza2lwSGFuZGxlRXJyb3IgPyB0aHJvd0Vycm9yKGVycikgOiB0aGlzLmhhbmRsZUVycm9yKGVycikpKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==