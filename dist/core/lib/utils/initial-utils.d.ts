import { Injector } from '@angular/core';
import { Store } from '@ngxs/store';
import { ABP } from '../models/common';
export declare function getInitialData(injector: Injector): () => Promise<any>;
export declare function checkAccessToken(store: Store, injector: Injector): void;
export declare function localeInitializer(injector: Injector): () => Promise<unknown>;
export declare function registerLocale(locale: string, localeNameMap: ABP.Dictionary<string>): Promise<void>;
