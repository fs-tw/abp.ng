import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Rest } from '../models/rest';
import { ABP } from '../models/common';
export declare class RestService {
    private options;
    private http;
    private store;
    constructor(options: ABP.Root, http: HttpClient, store: Store);
    private getApiFromStore;
    handleError(err: any): Observable<any>;
    request<T, R>(request: HttpRequest<T> | Rest.Request<T>, config?: Rest.Config, api?: string): Observable<R>;
}
