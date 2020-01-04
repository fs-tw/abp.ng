import { Store } from '@ngxs/store';
import { ABP } from '../models';
import { SetLanguage, SetTenant } from '../actions';
export declare class SessionStateService {
    private store;
    constructor(store: Store);
    getLanguage(): string;
    getTenant(): ABP.BasicItem;
    dispatchSetLanguage(...args: ConstructorParameters<typeof SetLanguage>): import("rxjs").Observable<any>;
    dispatchSetTenant(...args: ConstructorParameters<typeof SetTenant>): import("rxjs").Observable<any>;
}
