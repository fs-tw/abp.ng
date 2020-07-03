import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProfileState } from '../states';
import { GetProfile, UpdateProfile, ChangePassword } from '../actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
let ProfileStateService = class ProfileStateService {
    constructor(store) {
        this.store = store;
    }
    getProfile() {
        return this.store.selectSnapshot(ProfileState.getProfile);
    }
    dispatchGetProfile() {
        return this.store.dispatch(new GetProfile());
    }
    dispatchUpdateProfile(...args) {
        return this.store.dispatch(new UpdateProfile(...args));
    }
    dispatchChangePassword(...args) {
        return this.store.dispatch(new ChangePassword(...args));
    }
};
ProfileStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProfileStateService_Factory() { return new ProfileStateService(i0.ɵɵinject(i1.Store)); }, token: ProfileStateService, providedIn: "root" });
ProfileStateService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [Store])
], ProfileStateService);
export { ProfileStateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL3Byb2ZpbGUtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFLdkUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFDOUIsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBRXBDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxHQUFHLElBQWlEO1FBQ3hFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxHQUFHLElBQWtEO1FBQzFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FDRixDQUFBOztBQWxCWSxtQkFBbUI7SUFIL0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FFMkIsS0FBSztHQURyQixtQkFBbUIsQ0FrQi9CO1NBbEJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcyc7XHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlLCBVcGRhdGVQcm9maWxlLCBDaGFuZ2VQYXNzd29yZCB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTdGF0ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBnZXRQcm9maWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoUHJvZmlsZVN0YXRlLmdldFByb2ZpbGUpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hHZXRQcm9maWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFByb2ZpbGUoKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaFVwZGF0ZVByb2ZpbGUoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBVcGRhdGVQcm9maWxlPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwZGF0ZVByb2ZpbGUoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hDaGFuZ2VQYXNzd29yZCguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIENoYW5nZVBhc3N3b3JkPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVBhc3N3b3JkKC4uLmFyZ3MpKTtcclxuICB9XHJcbn1cclxuIl19