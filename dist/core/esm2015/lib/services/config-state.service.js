/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddRoute, GetAppConfiguration, PatchRouteByName, SetEnvironment, } from '../actions/config.actions';
import { ConfigState } from '../states';
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
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchSetEnvironment(...args) {
        return this.store.dispatch(new SetEnvironment(...args));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29uZmlnLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUNMLFFBQVEsRUFDUixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGNBQWMsR0FDZixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQUt4QyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQzs7OztJQUVwQyxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQUcsSUFBMkM7UUFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxHQUFHLElBQTRDO1FBQ3JELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBRyxJQUE2QztRQUN2RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQUcsSUFBOEM7UUFDekQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFHLElBQStDO1FBQzNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsR0FBRyxJQUFnRDtRQUM3RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsR0FBRyxJQUFxRDtRQUN2RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsR0FBRyxJQUFvRDtRQUNyRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFRCwyQkFBMkI7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLEdBQUcsSUFBb0Q7UUFDOUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEdBQUcsSUFBNEM7UUFDOUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxzQkFBc0IsQ0FBQyxHQUFHLElBQWtEO1FBQzFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7OztZQTVERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFYUSxLQUFLOzs7Ozs7OztJQWFBLG1DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWRkUm91dGUsXHJcbiAgR2V0QXBwQ29uZmlndXJhdGlvbixcclxuICBQYXRjaFJvdXRlQnlOYW1lLFxyXG4gIFNldEVudmlyb25tZW50LFxyXG59IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU3RhdGVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgZ2V0QWxsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0QWxsKTtcclxuICB9XHJcblxyXG4gIGdldEFwcGxpY2F0aW9uSW5mbygpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEFwcGxpY2F0aW9uSW5mbyk7XHJcbiAgfVxyXG5cclxuICBnZXRPbmUoLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0T25lPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0T25lKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGdldERlZXAoLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0RGVlcD4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldERlZXAoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um91dGUoLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0Um91dGU+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRSb3V0ZSguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBnZXRBcGlVcmwoLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0QXBpVXJsPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0QXBpVXJsKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGdldFNldHRpbmcoLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0U2V0dGluZz4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldFNldHRpbmcoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZ3MoLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0U2V0dGluZ3M+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRTZXR0aW5ncyguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBnZXRHcmFudGVkUG9saWN5KC4uLmFyZ3M6IFBhcmFtZXRlcnM8dHlwZW9mIENvbmZpZ1N0YXRlLmdldEdyYW50ZWRQb2xpY3k+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRHcmFudGVkUG9saWN5KC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGdldExvY2FsaXphdGlvbiguLi5hcmdzOiBQYXJhbWV0ZXJzPHR5cGVvZiBDb25maWdTdGF0ZS5nZXRMb2NhbGl6YXRpb24+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRMb2NhbGl6YXRpb24oLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hHZXRBcHBDb25maWd1cmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEFwcENvbmZpZ3VyYXRpb24oKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaFBhdGNoUm91dGVCeU5hbWUoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBQYXRjaFJvdXRlQnlOYW1lPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFBhdGNoUm91dGVCeU5hbWUoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hBZGRSb3V0ZSguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIEFkZFJvdXRlPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFkZFJvdXRlKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoU2V0RW52aXJvbm1lbnQoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBTZXRFbnZpcm9ubWVudD4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZXRFbnZpcm9ubWVudCguLi5hcmdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==