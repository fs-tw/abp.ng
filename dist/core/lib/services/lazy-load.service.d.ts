import { Observable, ReplaySubject } from 'rxjs';
import { LoadingStrategy } from '../strategies';
export declare class LazyLoadService {
    readonly loaded: Set<unknown>;
    loadedLibraries: {
        [url: string]: ReplaySubject<void>;
    };
    load(strategy: LoadingStrategy, retryTimes?: number, retryDelay?: number): Observable<Event>;
    /**
     *
     * @deprecated Use other overload that requires a strategy as first param
     */
    load(urlOrUrls: string | string[], type: 'script' | 'style', content?: string, targetQuery?: string, position?: InsertPosition): Observable<void>;
}
