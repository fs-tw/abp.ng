import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ObjectExtensions } from '../models/object-extensions';
export declare function getObjectExtensionEntitiesFromStore(store: Store, moduleKey: ModuleKey): Observable<Record<string, ObjectExtensions.Entity>>;
export declare function mapEntitiesToContributors<T = any>(store: Store, resource: string): import("rxjs").UnaryFunction<Observable<unknown>, Observable<ObjectExtensions.PropContributors<any>>>;
declare type ModuleKey = keyof ObjectExtensions.Modules;
export {};
