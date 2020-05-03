import { ContentStrategy } from '../strategies/content.strategy';
export declare class DomInsertionService {
    private readonly inserted;
    insertContent<T extends HTMLScriptElement | HTMLStyleElement>(contentStrategy: ContentStrategy<T>): T;
    removeContent(element: HTMLScriptElement | HTMLStyleElement): void;
    has(content: string): boolean;
}
