/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/layout-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { LayoutState } from '../states/layout.state';
import { AddNavigationElement, RemoveNavigationElementByName } from '../actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
export class LayoutStateService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    getNavigationElements() {
        return this.store.selectSnapshot(LayoutState.getNavigationElements);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchAddNavigationElement(...args) {
        return this.store.dispatch(new AddNavigationElement(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchRemoveNavigationElementByName(...args) {
        return this.store.dispatch(new RemoveNavigationElementByName(...args));
    }
}
LayoutStateService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LayoutStateService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ LayoutStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LayoutStateService_Factory() { return new LayoutStateService(i0.ɵɵinject(i1.Store)); }, token: LayoutStateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LayoutStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLmJhc2ljLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQUlqRixNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQzs7OztJQUVwQyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7OztJQUVELDRCQUE0QixDQUFDLEdBQUcsSUFBd0Q7UUFDdEYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELHFDQUFxQyxDQUNuQyxHQUFHLElBQWlFO1FBRXBFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7O1lBaEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFMekIsS0FBSzs7Ozs7Ozs7SUFPQSxtQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBMYXlvdXRTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9sYXlvdXQuc3RhdGUnO1xyXG5pbXBvcnQgeyBBZGROYXZpZ2F0aW9uRWxlbWVudCwgUmVtb3ZlTmF2aWdhdGlvbkVsZW1lbnRCeU5hbWUgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vbW9kZWxzL2xheW91dCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0U3RhdGVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgZ2V0TmF2aWdhdGlvbkVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoTGF5b3V0U3RhdGUuZ2V0TmF2aWdhdGlvbkVsZW1lbnRzKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoQWRkTmF2aWdhdGlvbkVsZW1lbnQoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBBZGROYXZpZ2F0aW9uRWxlbWVudD4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGROYXZpZ2F0aW9uRWxlbWVudCguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaFJlbW92ZU5hdmlnYXRpb25FbGVtZW50QnlOYW1lKFxyXG4gICAgLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBSZW1vdmVOYXZpZ2F0aW9uRWxlbWVudEJ5TmFtZT5cclxuICApIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBSZW1vdmVOYXZpZ2F0aW9uRWxlbWVudEJ5TmFtZSguLi5hcmdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==