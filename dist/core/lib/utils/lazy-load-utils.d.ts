import { Observable } from 'rxjs';
import { CrossOriginStrategy } from '../strategies/cross-origin.strategy';
import { DomStrategy } from '../strategies/dom.strategy';
export declare function fromLazyLoad<T extends Event>(element: HTMLScriptElement | HTMLLinkElement, domStrategy?: DomStrategy, crossOriginStrategy?: CrossOriginStrategy): Observable<T>;
