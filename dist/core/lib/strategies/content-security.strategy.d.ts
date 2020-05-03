export declare abstract class ContentSecurityStrategy {
    nonce?: string;
    constructor(nonce?: string);
    abstract applyCSP(element: HTMLScriptElement | HTMLStyleElement): void;
}
export declare class LooseContentSecurityStrategy extends ContentSecurityStrategy {
    constructor(nonce: string);
    applyCSP(element: HTMLScriptElement | HTMLStyleElement): void;
}
export declare class NoContentSecurityStrategy extends ContentSecurityStrategy {
    constructor();
    applyCSP(_: HTMLScriptElement | HTMLStyleElement): void;
}
export declare const CONTENT_SECURITY_STRATEGY: {
    Loose(nonce: string): LooseContentSecurityStrategy;
    None(): NoContentSecurityStrategy;
};
