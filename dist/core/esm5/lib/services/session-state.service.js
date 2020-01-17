/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/session-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetLanguage, SetRemember, SetTenant, ModifyOpenedTabCount, } from '../actions/session.actions';
import { SessionState } from '../states';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
var SessionStateService = /** @class */ (function () {
    function SessionStateService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    SessionStateService.prototype.getLanguage = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(SessionState.getLanguage);
    };
    /**
     * @return {?}
     */
    SessionStateService.prototype.getTenant = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(SessionState.getTenant);
    };
    /**
     * @return {?}
     */
    SessionStateService.prototype.getSessionDetail = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(SessionState.getSessionDetail);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    SessionStateService.prototype.dispatchSetLanguage = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (SetLanguage.bind.apply(SetLanguage, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    SessionStateService.prototype.dispatchSetTenant = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (SetTenant.bind.apply(SetTenant, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    SessionStateService.prototype.dispatchSetRemember = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (SetRemember.bind.apply(SetRemember, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    SessionStateService.prototype.dispatchModifyOpenedTabCount = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (ModifyOpenedTabCount.bind.apply(ModifyOpenedTabCount, tslib_1.__spread([void 0], args)))());
    };
    SessionStateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SessionStateService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ SessionStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SessionStateService_Factory() { return new SessionStateService(i0.ɵɵinject(i1.Store)); }, token: SessionStateService, providedIn: "root" });
    return SessionStateService;
}());
export { SessionStateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SessionStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Nlc3Npb24tc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUNMLFdBQVcsRUFDWCxXQUFXLEVBQ1gsU0FBUyxFQUNULG9CQUFvQixHQUNyQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQUV6QztJQUlFLDZCQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7Ozs7SUFFcEMseUNBQVc7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVELHVDQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7SUFFRCw4Q0FBZ0I7OztJQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxpREFBbUI7Ozs7SUFBbkI7UUFBb0IsY0FBa0Q7YUFBbEQsVUFBa0QsRUFBbEQscUJBQWtELEVBQWxELElBQWtEO1lBQWxELHlCQUFrRDs7UUFDcEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsTUFBSyxXQUFXLFlBQVgsV0FBVyw2QkFBSSxJQUFJLE1BQUUsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELCtDQUFpQjs7OztJQUFqQjtRQUFrQixjQUFnRDthQUFoRCxVQUFnRCxFQUFoRCxxQkFBZ0QsRUFBaEQsSUFBZ0Q7WUFBaEQseUJBQWdEOztRQUNoRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxNQUFLLFNBQVMsWUFBVCxTQUFTLDZCQUFJLElBQUksTUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsaURBQW1COzs7O0lBQW5CO1FBQW9CLGNBQWtEO2FBQWxELFVBQWtELEVBQWxELHFCQUFrRCxFQUFsRCxJQUFrRDtZQUFsRCx5QkFBa0Q7O1FBQ3BFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLE1BQUssV0FBVyxZQUFYLFdBQVcsNkJBQUksSUFBSSxNQUFFLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCwwREFBNEI7Ozs7SUFBNUI7UUFBNkIsY0FBMkQ7YUFBM0QsVUFBMkQsRUFBM0QscUJBQTJELEVBQTNELElBQTJEO1lBQTNELHlCQUEyRDs7UUFDdEYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsTUFBSyxvQkFBb0IsWUFBcEIsb0JBQW9CLDZCQUFJLElBQUksTUFBRSxDQUFDO0lBQ2hFLENBQUM7O2dCQWhDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVhRLEtBQUs7Ozs4QkFEZDtDQTJDQyxBQWpDRCxJQWlDQztTQTlCWSxtQkFBbUI7Ozs7OztJQUNsQixvQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQge1xyXG4gIFNldExhbmd1YWdlLFxyXG4gIFNldFJlbWVtYmVyLFxyXG4gIFNldFRlbmFudCxcclxuICBNb2RpZnlPcGVuZWRUYWJDb3VudCxcclxufSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb24uYWN0aW9ucyc7XHJcbmltcG9ydCB7IFNlc3Npb25TdGF0ZSB9IGZyb20gJy4uL3N0YXRlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0YXRlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIGdldExhbmd1YWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldExhbmd1YWdlKTtcclxuICB9XHJcblxyXG4gIGdldFRlbmFudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRUZW5hbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2Vzc2lvbkRldGFpbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRTZXNzaW9uRGV0YWlsKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoU2V0TGFuZ3VhZ2UoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBTZXRMYW5ndWFnZT4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZXRMYW5ndWFnZSguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaFNldFRlbmFudCguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIFNldFRlbmFudD4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZXRUZW5hbnQoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hTZXRSZW1lbWJlciguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIFNldFJlbWVtYmVyPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNldFJlbWVtYmVyKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoTW9kaWZ5T3BlbmVkVGFiQ291bnQoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBNb2RpZnlPcGVuZWRUYWJDb3VudD4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBNb2RpZnlPcGVuZWRUYWJDb3VudCguLi5hcmdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==