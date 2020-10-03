import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProfileState } from '../states';
import { GetProfile, UpdateProfile, ChangePassword } from '../actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
export class ProfileStateService {
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
}
ProfileStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProfileStateService_Factory() { return new ProfileStateService(i0.ɵɵinject(i1.Store)); }, token: ProfileStateService, providedIn: "root" });
ProfileStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProfileStateService.ctorParameters = () => [
    { type: Store }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL3Byb2ZpbGUtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQUt2RSxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQztJQUVwQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQscUJBQXFCLENBQUMsR0FBRyxJQUFpRDtRQUN4RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsc0JBQXNCLENBQUMsR0FBRyxJQUFrRDtRQUMxRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcyc7XHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlLCBVcGRhdGVQcm9maWxlLCBDaGFuZ2VQYXNzd29yZCB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTdGF0ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBnZXRQcm9maWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoUHJvZmlsZVN0YXRlLmdldFByb2ZpbGUpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hHZXRQcm9maWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFByb2ZpbGUoKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaFVwZGF0ZVByb2ZpbGUoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBVcGRhdGVQcm9maWxlPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwZGF0ZVByb2ZpbGUoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hDaGFuZ2VQYXNzd29yZCguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIENoYW5nZVBhc3N3b3JkPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVBhc3N3b3JkKC4uLmFyZ3MpKTtcclxuICB9XHJcbn1cclxuIl19