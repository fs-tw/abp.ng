/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/layout-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { LayoutState } from '../states/layout.state';
import { AddNavigationElement, RemoveNavigationElementByName } from '../actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
var LayoutStateService = /** @class */ (function () {
    function LayoutStateService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    LayoutStateService.prototype.getNavigationElements = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(LayoutState.getNavigationElements);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LayoutStateService.prototype.dispatchAddNavigationElement = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (AddNavigationElement.bind.apply(AddNavigationElement, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LayoutStateService.prototype.dispatchRemoveNavigationElementByName = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (RemoveNavigationElementByName.bind.apply(RemoveNavigationElementByName, tslib_1.__spread([void 0], args)))());
    };
    LayoutStateService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LayoutStateService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ LayoutStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LayoutStateService_Factory() { return new LayoutStateService(i0.ɵɵinject(i1.Store)); }, token: LayoutStateService, providedIn: "root" });
    return LayoutStateService;
}());
export { LayoutStateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LayoutStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLmJhc2ljLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLDZCQUE2QixFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFHakY7SUFFRSw0QkFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDOzs7O0lBRXBDLGtEQUFxQjs7O0lBQXJCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7OztJQUVELHlEQUE0Qjs7OztJQUE1QjtRQUE2QixjQUEyRDthQUEzRCxVQUEyRCxFQUEzRCxxQkFBMkQsRUFBM0QsSUFBMkQ7WUFBM0QseUJBQTJEOztRQUN0RixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxNQUFLLG9CQUFvQixZQUFwQixvQkFBb0IsNkJBQUksSUFBSSxNQUFFLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxrRUFBcUM7Ozs7SUFBckM7UUFDRSxjQUFvRTthQUFwRSxVQUFvRSxFQUFwRSxxQkFBb0UsRUFBcEUsSUFBb0U7WUFBcEUseUJBQW9FOztRQUVwRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxNQUFLLDZCQUE2QixZQUE3Qiw2QkFBNkIsNkJBQUksSUFBSSxNQUFFLENBQUM7SUFDekUsQ0FBQzs7Z0JBaEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBTHpCLEtBQUs7Ozs2QkFEZDtDQXVCQyxBQWpCRCxJQWlCQztTQWhCWSxrQkFBa0I7Ozs7OztJQUNqQixtQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBMYXlvdXRTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9sYXlvdXQuc3RhdGUnO1xyXG5pbXBvcnQgeyBBZGROYXZpZ2F0aW9uRWxlbWVudCwgUmVtb3ZlTmF2aWdhdGlvbkVsZW1lbnRCeU5hbWUgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vbW9kZWxzL2xheW91dCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0U3RhdGVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgZ2V0TmF2aWdhdGlvbkVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoTGF5b3V0U3RhdGUuZ2V0TmF2aWdhdGlvbkVsZW1lbnRzKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoQWRkTmF2aWdhdGlvbkVsZW1lbnQoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBBZGROYXZpZ2F0aW9uRWxlbWVudD4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGROYXZpZ2F0aW9uRWxlbWVudCguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaFJlbW92ZU5hdmlnYXRpb25FbGVtZW50QnlOYW1lKFxyXG4gICAgLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBSZW1vdmVOYXZpZ2F0aW9uRWxlbWVudEJ5TmFtZT5cclxuICApIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBSZW1vdmVOYXZpZ2F0aW9uRWxlbWVudEJ5TmFtZSguLi5hcmdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==