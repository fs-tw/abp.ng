export declare class CrossOriginStrategy {
    crossorigin: 'anonymous' | 'use-credentials';
    integrity?: string;
    constructor(crossorigin: 'anonymous' | 'use-credentials', integrity?: string);
    setCrossOrigin<T extends HTMLElement>(element: T): void;
}
export declare const CROSS_ORIGIN_STRATEGY: {
    Anonymous(integrity?: string): CrossOriginStrategy;
    UseCredentials(integrity?: string): CrossOriginStrategy;
};
