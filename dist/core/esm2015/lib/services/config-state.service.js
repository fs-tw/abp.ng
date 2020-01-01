/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ConfigState } from '../states';
import { GetAppConfiguration, PatchRouteByName, AddRoute } from '../actions/config.actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
export class ConfigStateService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.store.selectSnapshot(ConfigState.getAll);
    }
    /**
     * @return {?}
     */
    getApplicationInfo() {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getOne(...args) {
        return this.store.selectSnapshot(ConfigState.getOne(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getDeep(...args) {
        return this.store.selectSnapshot(ConfigState.getDeep(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getRoute(...args) {
        return this.store.selectSnapshot(ConfigState.getRoute(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getApiUrl(...args) {
        return this.store.selectSnapshot(ConfigState.getApiUrl(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getSetting(...args) {
        return this.store.selectSnapshot(ConfigState.getSetting(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getSettings(...args) {
        return this.store.selectSnapshot(ConfigState.getSettings(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getGrantedPolicy(...args) {
        return this.store.selectSnapshot(ConfigState.getGrantedPolicy(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getLocalization(...args) {
        return this.store.selectSnapshot(ConfigState.getLocalization(...args));
    }
    /**
     * @return {?}
     */
    dispatchGetAppConfiguration() {
        return this.store.dispatch(new GetAppConfiguration());
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchPatchRouteByName(...args) {
        return this.store.dispatch(new PatchRouteByName(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchAddRoute(...args) {
        return this.store.dispatch(new AddRoute(...args));
    }
}
ConfigStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ConfigStateService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ ConfigStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigStateService_Factory() { return new ConfigStateService(i0.ɵɵinject(i1.Store)); }, token: ConfigStateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29uZmlnLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN4QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQU01RixNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQzs7OztJQUVwQyxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQUcsSUFBMkM7UUFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxHQUFHLElBQTRDO1FBQ3JELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBRyxJQUE2QztRQUN2RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQUcsSUFBOEM7UUFDekQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFHLElBQStDO1FBQzNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsR0FBRyxJQUFnRDtRQUM3RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsR0FBRyxJQUFxRDtRQUN2RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsR0FBRyxJQUFvRDtRQUNyRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFRCwyQkFBMkI7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLEdBQUcsSUFBb0Q7UUFDOUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEdBQUcsSUFBNEM7UUFDOUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBeERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLEtBQUs7Ozs7Ozs7O0lBU0EsbUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMnO1xyXG5pbXBvcnQgeyBHZXRBcHBDb25maWd1cmF0aW9uLCBQYXRjaFJvdXRlQnlOYW1lLCBBZGRSb3V0ZSB9IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0YXRlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIGdldEFsbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEFsbCk7XHJcbiAgfVxyXG5cclxuICBnZXRBcHBsaWNhdGlvbkluZm8oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRBcHBsaWNhdGlvbkluZm8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0T25lKC4uLmFyZ3M6IFBhcmFtZXRlcnM8dHlwZW9mIENvbmZpZ1N0YXRlLmdldE9uZT4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldE9uZSguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBnZXREZWVwKC4uLmFyZ3M6IFBhcmFtZXRlcnM8dHlwZW9mIENvbmZpZ1N0YXRlLmdldERlZXA+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXREZWVwKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGdldFJvdXRlKC4uLmFyZ3M6IFBhcmFtZXRlcnM8dHlwZW9mIENvbmZpZ1N0YXRlLmdldFJvdXRlPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0Um91dGUoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXBpVXJsKC4uLmFyZ3M6IFBhcmFtZXRlcnM8dHlwZW9mIENvbmZpZ1N0YXRlLmdldEFwaVVybD4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEFwaVVybCguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBnZXRTZXR0aW5nKC4uLmFyZ3M6IFBhcmFtZXRlcnM8dHlwZW9mIENvbmZpZ1N0YXRlLmdldFNldHRpbmc+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRTZXR0aW5nKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGdldFNldHRpbmdzKC4uLmFyZ3M6IFBhcmFtZXRlcnM8dHlwZW9mIENvbmZpZ1N0YXRlLmdldFNldHRpbmdzPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0U2V0dGluZ3MoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0R3JhbnRlZFBvbGljeSguLi5hcmdzOiBQYXJhbWV0ZXJzPHR5cGVvZiBDb25maWdTdGF0ZS5nZXRHcmFudGVkUG9saWN5Pikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0R3JhbnRlZFBvbGljeSguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhbGl6YXRpb24oLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0TG9jYWxpemF0aW9uPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0TG9jYWxpemF0aW9uKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoR2V0QXBwQ29uZmlndXJhdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRBcHBDb25maWd1cmF0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hQYXRjaFJvdXRlQnlOYW1lKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgUGF0Y2hSb3V0ZUJ5TmFtZT4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBQYXRjaFJvdXRlQnlOYW1lKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoQWRkUm91dGUoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBBZGRSb3V0ZT4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGRSb3V0ZSguLi5hcmdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==