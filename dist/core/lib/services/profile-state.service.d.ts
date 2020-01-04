import { Store } from '@ngxs/store';
import { Profile } from '../models';
import { UpdateProfile, ChangePassword } from '../actions';
export declare class ProfileStateService {
    private store;
    constructor(store: Store);
    getProfile(): Profile.Response;
    dispatchGetProfile(): import("rxjs").Observable<any>;
    dispatchUpdateProfile(...args: ConstructorParameters<typeof UpdateProfile>): import("rxjs").Observable<any>;
    dispatchChangePassword(...args: ConstructorParameters<typeof ChangePassword>): import("rxjs").Observable<any>;
}
