import { ContentSecurityStrategy } from './content-security.strategy';
import { DomStrategy } from './dom.strategy';
export declare abstract class ContentStrategy<T extends HTMLScriptElement | HTMLStyleElement = any> {
    content: string;
    protected domStrategy: DomStrategy;
    protected contentSecurityStrategy: ContentSecurityStrategy;
    constructor(content: string, domStrategy?: DomStrategy, contentSecurityStrategy?: ContentSecurityStrategy);
    abstract createElement(): T;
    insertElement(): T;
}
export declare class StyleContentStrategy extends ContentStrategy<HTMLStyleElement> {
    createElement(): HTMLStyleElement;
}
export declare class ScriptContentStrategy extends ContentStrategy<HTMLScriptElement> {
    createElement(): HTMLScriptElement;
}
export declare const CONTENT_STRATEGY: {
    AppendScriptToBody(content: string): ScriptContentStrategy;
    AppendScriptToHead(content: string): ScriptContentStrategy;
    AppendStyleToHead(content: string): StyleContentStrategy;
    PrependStyleToHead(content: string): StyleContentStrategy;
};
