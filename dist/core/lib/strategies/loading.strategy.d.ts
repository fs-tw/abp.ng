import { Observable } from 'rxjs';
import { CrossOriginStrategy } from './cross-origin.strategy';
import { DomStrategy } from './dom.strategy';
export declare abstract class LoadingStrategy<T extends HTMLScriptElement | HTMLLinkElement = any> {
    path: string;
    protected domStrategy: DomStrategy;
    protected crossOriginStrategy: CrossOriginStrategy;
    constructor(path: string, domStrategy?: DomStrategy, crossOriginStrategy?: CrossOriginStrategy);
    abstract createElement(): T;
    createStream<E extends Event>(): Observable<E>;
}
export declare class ScriptLoadingStrategy extends LoadingStrategy<HTMLScriptElement> {
    constructor(src: string, domStrategy?: DomStrategy, crossOriginStrategy?: CrossOriginStrategy);
    createElement(): HTMLScriptElement;
}
export declare class StyleLoadingStrategy extends LoadingStrategy<HTMLLinkElement> {
    constructor(href: string, domStrategy?: DomStrategy, crossOriginStrategy?: CrossOriginStrategy);
    createElement(): HTMLLinkElement;
}
export declare const LOADING_STRATEGY: {
    AppendAnonymousScriptToBody(src: string, integrity?: string): ScriptLoadingStrategy;
    AppendAnonymousScriptToHead(src: string, integrity?: string): ScriptLoadingStrategy;
    AppendAnonymousStyleToHead(src: string, integrity?: string): StyleLoadingStrategy;
    PrependAnonymousScriptToHead(src: string, integrity?: string): ScriptLoadingStrategy;
    PrependAnonymousStyleToHead(src: string, integrity?: string): StyleLoadingStrategy;
};
