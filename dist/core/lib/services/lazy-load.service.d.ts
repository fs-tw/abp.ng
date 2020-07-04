import { Observable } from 'rxjs';
import { LoadingStrategy } from '../strategies';
export declare class LazyLoadService {
    readonly loaded: Map<string, HTMLScriptElement | HTMLLinkElement>;
    load(strategy: LoadingStrategy, retryTimes?: number, retryDelay?: number): Observable<Event>;
    remove(path: string): boolean;
}
