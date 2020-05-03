/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/localization.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { Store } from '@ngxs/store';
import { ConfigState } from '../states';
export class LocalizationPipe {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?=} value
     * @param {...?} interpolateParams
     * @return {?}
     */
    transform(value = '', ...interpolateParams) {
        return this.store.selectSnapshot(ConfigState.getLocalization(value, ...interpolateParams.reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        (acc, val) => (Array.isArray(val) ? [...acc, ...val] : [...acc, val])), [])));
    }
}
LocalizationPipe.decorators = [
    { type: Injectable },
    { type: Pipe, args: [{
                name: 'abpLocalization',
            },] }
];
/** @nocollapse */
LocalizationPipe.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalizationPipe.prototype.store;
}
export class MockLocalizationPipe {
    /**
     * @param {?=} value
     * @param {...?} _
     * @return {?}
     */
    transform(value = '', ..._) {
        return typeof value === 'string' ? value : value.defaultValue;
    }
}
MockLocalizationPipe.decorators = [
    { type: Injectable },
    { type: Pipe, args: [{
                name: 'abpLocalization',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbG9jYWxpemF0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBTXhDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDOzs7Ozs7SUFFcEMsU0FBUyxDQUNQLFFBQWlELEVBQUUsRUFDbkQsR0FBRyxpQkFBMkI7UUFFOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FDOUIsV0FBVyxDQUFDLGVBQWUsQ0FDekIsS0FBSyxFQUNMLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7Ozs7UUFDekIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUNyRSxFQUFFLENBQ0gsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDOzs7WUFwQkYsVUFBVTtZQUNWLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsaUJBQWlCO2FBQ3hCOzs7O1lBUFEsS0FBSzs7Ozs7OztJQVNBLGlDQUFvQjs7QUFzQmxDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQUMvQixTQUFTLENBQUMsUUFBaUQsRUFBRSxFQUFFLEdBQUcsQ0FBVztRQUMzRSxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQ2hFLENBQUM7OztZQVBGLFVBQVU7WUFDVixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGlCQUFpQjthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSAnLi4vc3RhdGVzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhYnBMb2NhbGl6YXRpb24nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYWxpemF0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICB0cmFuc2Zvcm0oXHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgQ29uZmlnLkxvY2FsaXphdGlvbldpdGhEZWZhdWx0ID0gJycsXHJcbiAgICAuLi5pbnRlcnBvbGF0ZVBhcmFtczogc3RyaW5nW11cclxuICApOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoXHJcbiAgICAgIENvbmZpZ1N0YXRlLmdldExvY2FsaXphdGlvbihcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICAuLi5pbnRlcnBvbGF0ZVBhcmFtcy5yZWR1Y2UoXHJcbiAgICAgICAgICAoYWNjLCB2YWwpID0+IChBcnJheS5pc0FycmF5KHZhbCkgPyBbLi4uYWNjLCAuLi52YWxdIDogWy4uLmFjYywgdmFsXSksXHJcbiAgICAgICAgICBbXSxcclxuICAgICAgICApLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhYnBMb2NhbGl6YXRpb24nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9ja0xvY2FsaXphdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyB8IENvbmZpZy5Mb2NhbGl6YXRpb25XaXRoRGVmYXVsdCA9ICcnLCAuLi5fOiBzdHJpbmdbXSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IHZhbHVlLmRlZmF1bHRWYWx1ZTtcclxuICB9XHJcbn1cclxuIl19