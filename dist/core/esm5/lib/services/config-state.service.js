/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddRoute, GetAppConfiguration, PatchRouteByName, SetEnvironment, } from '../actions/config.actions';
import { ConfigState } from '../states';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
var ConfigStateService = /** @class */ (function () {
    function ConfigStateService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ConfigStateService.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(ConfigState.getAll);
    };
    /**
     * @return {?}
     */
    ConfigStateService.prototype.getApplicationInfo = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getOne = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getOne.apply(ConfigState, tslib_1.__spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getDeep = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getDeep.apply(ConfigState, tslib_1.__spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getRoute = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getRoute.apply(ConfigState, tslib_1.__spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getApiUrl = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getApiUrl.apply(ConfigState, tslib_1.__spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getSetting = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getSetting.apply(ConfigState, tslib_1.__spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getSettings = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getSettings.apply(ConfigState, tslib_1.__spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getGrantedPolicy = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getGrantedPolicy.apply(ConfigState, tslib_1.__spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getLocalization = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getLocalization.apply(ConfigState, tslib_1.__spread(args)));
    };
    /**
     * @return {?}
     */
    ConfigStateService.prototype.dispatchGetAppConfiguration = /**
     * @return {?}
     */
    function () {
        return this.store.dispatch(new GetAppConfiguration());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.dispatchPatchRouteByName = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (PatchRouteByName.bind.apply(PatchRouteByName, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.dispatchAddRoute = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (AddRoute.bind.apply(AddRoute, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.dispatchSetEnvironment = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (SetEnvironment.bind.apply(SetEnvironment, tslib_1.__spread([void 0], args)))());
    };
    ConfigStateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ConfigStateService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ ConfigStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigStateService_Factory() { return new ConfigStateService(i0.ɵɵinject(i1.Store)); }, token: ConfigStateService, providedIn: "root" });
    return ConfigStateService;
}());
export { ConfigStateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29uZmlnLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFDTCxRQUFRLEVBQ1IsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixjQUFjLEdBQ2YsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFFeEM7SUFJRSw0QkFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDOzs7O0lBRXBDLG1DQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCwrQ0FBa0I7OztJQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFRCxtQ0FBTTs7OztJQUFOO1FBQU8sY0FBOEM7YUFBOUMsVUFBOEMsRUFBOUMscUJBQThDLEVBQTlDLElBQThDO1lBQTlDLHlCQUE4Qzs7UUFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxPQUFsQixXQUFXLG1CQUFXLElBQUksR0FBRSxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsb0NBQU87Ozs7SUFBUDtRQUFRLGNBQStDO2FBQS9DLFVBQStDLEVBQS9DLHFCQUErQyxFQUEvQyxJQUErQztZQUEvQyx5QkFBK0M7O1FBQ3JELE9BQU8s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QWMsNkJBQUksSUFBSSxNQUFFLENBQUM7SUFDMUQsQ0FBQzs7Z0JBNURGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWFEsS0FBSzs7OzZCQURkO0NBdUVDLEFBN0RELElBNkRDO1NBMURZLGtCQUFrQjs7Ozs7O0lBQ2pCLG1DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWRkUm91dGUsXHJcbiAgR2V0QXBwQ29uZmlndXJhdGlvbixcclxuICBQYXRjaFJvdXRlQnlOYW1lLFxyXG4gIFNldEVudmlyb25tZW50LFxyXG59IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU3RhdGVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgZ2V0QWxsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0QWxsKTtcclxuICB9XHJcblxyXG4gIGdldEFwcGxpY2F0aW9uSW5mbygpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEFwcGxpY2F0aW9uSW5mbyk7XHJcbiAgfVxyXG5cclxuICBnZXRPbmUoLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0T25lPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0T25lKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGdldERlZXAoLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0RGVlcD4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldERlZXAoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um91dGUoLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0Um91dGU+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRSb3V0ZSguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBnZXRBcGlVcmwoLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0QXBpVXJsPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0QXBpVXJsKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGdldFNldHRpbmcoLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0U2V0dGluZz4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldFNldHRpbmcoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZ3MoLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgQ29uZmlnU3RhdGUuZ2V0U2V0dGluZ3M+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRTZXR0aW5ncyguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBnZXRHcmFudGVkUG9saWN5KC4uLmFyZ3M6IFBhcmFtZXRlcnM8dHlwZW9mIENvbmZpZ1N0YXRlLmdldEdyYW50ZWRQb2xpY3k+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRHcmFudGVkUG9saWN5KC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGdldExvY2FsaXphdGlvbiguLi5hcmdzOiBQYXJhbWV0ZXJzPHR5cGVvZiBDb25maWdTdGF0ZS5nZXRMb2NhbGl6YXRpb24+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRMb2NhbGl6YXRpb24oLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hHZXRBcHBDb25maWd1cmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEFwcENvbmZpZ3VyYXRpb24oKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaFBhdGNoUm91dGVCeU5hbWUoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBQYXRjaFJvdXRlQnlOYW1lPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFBhdGNoUm91dGVCeU5hbWUoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hBZGRSb3V0ZSguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIEFkZFJvdXRlPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFkZFJvdXRlKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoU2V0RW52aXJvbm1lbnQoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBTZXRFbnZpcm9ubWVudD4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZXRFbnZpcm9ubWVudCguLi5hcmdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==