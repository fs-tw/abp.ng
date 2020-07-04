import { Store } from '@ngxs/store';
import { SetLanguage, SetRemember, SetTenant, ModifyOpenedTabCount } from '../actions/session.actions';
export declare class SessionStateService {
    private store;
    constructor(store: Store);
    getLanguage(): string;
    getTenant(): import("../models").ABP.BasicItem;
    getSessionDetail(): import("../models").Session.SessionDetail;
    dispatchSetLanguage(...args: ConstructorParameters<typeof SetLanguage>): import("rxjs").Observable<any>;
    dispatchSetTenant(...args: ConstructorParameters<typeof SetTenant>): import("rxjs").Observable<any>;
    dispatchSetRemember(...args: ConstructorParameters<typeof SetRemember>): import("rxjs").Observable<any>;
    dispatchModifyOpenedTabCount(...args: ConstructorParameters<typeof ModifyOpenedTabCount>): import("rxjs").Observable<any>;
}
