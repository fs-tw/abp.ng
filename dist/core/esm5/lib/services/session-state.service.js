/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/session-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SessionState } from '../states';
import { SetLanguage, SetTenant } from '../actions';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Nlc3Npb24tc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBRXBEO0lBSUUsNkJBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQzs7OztJQUVwQyx5Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBRUQsdUNBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxpREFBbUI7Ozs7SUFBbkI7UUFBb0IsY0FBa0Q7YUFBbEQsVUFBa0QsRUFBbEQscUJBQWtELEVBQWxELElBQWtEO1lBQWxELHlCQUFrRDs7UUFDcEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsTUFBSyxXQUFXLFlBQVgsV0FBVyw2QkFBSSxJQUFJLE1BQUUsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELCtDQUFpQjs7OztJQUFqQjtRQUFrQixjQUFnRDthQUFoRCxVQUFnRCxFQUFoRCxxQkFBZ0QsRUFBaEQsSUFBZ0Q7WUFBaEQseUJBQWdEOztRQUNoRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxNQUFLLFNBQVMsWUFBVCxTQUFTLDZCQUFJLElBQUksTUFBRSxDQUFDO0lBQ3JELENBQUM7O2dCQXBCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLEtBQUs7Ozs4QkFEZDtDQTJCQyxBQXJCRCxJQXFCQztTQWxCWSxtQkFBbUI7Ozs7OztJQUNsQixvQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBTZXRMYW5ndWFnZSwgU2V0VGVuYW50IH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0YXRlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIGdldExhbmd1YWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldExhbmd1YWdlKTtcclxuICB9XHJcblxyXG4gIGdldFRlbmFudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRUZW5hbnQpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hTZXRMYW5ndWFnZSguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIFNldExhbmd1YWdlPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNldExhbmd1YWdlKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoU2V0VGVuYW50KC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgU2V0VGVuYW50Pikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNldFRlbmFudCguLi5hcmdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==