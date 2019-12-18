/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/i18n.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ConfigState, SessionState, SetLanguage } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import snq from 'snq';
export class HeaderI18nComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    get selectedLangCulture() {
        return this.store.selectSnapshot(SessionState.getLanguage);
    }
    /**
     * @return {?}
     */
    get defaultLanguage$() {
        return this.languages$.pipe(map((/**
         * @param {?} languages
         * @return {?}
         */
        languages => snq((/**
         * @return {?}
         */
        () => languages.find((/**
         * @param {?} lang
         * @return {?}
         */
        lang => lang.cultureName === this.selectedLangCulture)).displayName))), ''));
    }
    /**
     * @return {?}
     */
    get dropdownLanguages$() {
        return this.languages$.pipe(map((/**
         * @param {?} languages
         * @return {?}
         */
        languages => snq((/**
         * @return {?}
         */
        () => languages), []))));
    }
    /**
     * @param {?} cultureName
     * @return {?}
     */
    onChangeLang(cultureName) {
        this.store.dispatch(new SetLanguage(cultureName));
    }
}
HeaderI18nComponent.decorators = [
    { type: Component, args: [{
                selector: 'header-i18n',
                template: `
    <div nz-dropdown [nzDropdownMenu]="langMenu" nzPlacement="bottomRight">
      <i nz-icon nzType="global"></i>
      {{ defaultLanguage$ | async }}
      <i nz-icon nzType="down"></i>
    </div>
    <nz-dropdown-menu #langMenu="nzDropdownMenu">
      <ul nz-menu>
        <li
          nz-menu-item
          *ngFor="let lang of dropdownLanguages$ | async"
          [nzSelected]="lang.cultureName === selectedLangCulture"
          (click)="onChangeLang(lang.cultureName)"
        >
         <span role="img" [attr.aria-label]="lang?.displayName" class="pr-xs">{{lang.cultureName}}</span>
          {{ lang?.displayName }}
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
HeaderI18nComponent.ctorParameters = () => [
    { type: Store }
];
tslib_1.__decorate([
    Select(ConfigState.getDeep('localization.languages')),
    tslib_1.__metadata("design:type", Observable)
], HeaderI18nComponent.prototype, "languages$", void 0);
if (false) {
    /** @type {?} */
    HeaderI18nComponent.prototype.languages$;
    /**
     * @type {?}
     * @private
     */
    HeaderI18nComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvaTE4bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNbEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFdBQVcsRUFBNEIsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUEwQnRCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFnQjVCLFlBQ1ksS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFDckIsQ0FBQzs7OztJQWZKLElBQUksbUJBQW1CO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFDRCxJQUFJLGdCQUFnQjtRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN2QixHQUFHOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsbUJBQW1CLEVBQUMsQ0FBQyxXQUFXLEVBQUMsR0FBRSxFQUFFLENBQUMsQ0FDckgsQ0FBQztJQUNOLENBQUM7Ozs7SUFDRCxJQUFJLGtCQUFrQjtRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN2QixHQUFHOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEdBQUUsRUFBRSxDQUFDLEVBQUMsQ0FDN0MsQ0FBQztJQUNOLENBQUM7Ozs7O0lBSUQsWUFBWSxDQUFDLFdBQW1CO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBN0NKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJYO2dCQUNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOzs7O1lBN0JnQixLQUFLOztBQWdDbEI7SUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO3NDQUMxQyxVQUFVO3VEQUFzQzs7O0lBRDVELHlDQUM0RDs7Ozs7SUFleEQsb0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSwgQUxBSU5fSTE4Tl9UT0tFTiB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IEkxOE5TZXJ2aWNlIH0gZnJvbSAnQGZzL25nLWFsYWluJztcclxuaW1wb3J0IHsgU2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUsIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiwgU2Vzc2lvblN0YXRlLCBTZXRMYW5ndWFnZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGVhZGVyLWkxOG4nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgbnotZHJvcGRvd24gW256RHJvcGRvd25NZW51XT1cImxhbmdNZW51XCIgbnpQbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiPlxyXG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImdsb2JhbFwiPjwvaT5cclxuICAgICAge3sgZGVmYXVsdExhbmd1YWdlJCB8IGFzeW5jIH19XHJcbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cclxuICAgIDwvZGl2PlxyXG4gICAgPG56LWRyb3Bkb3duLW1lbnUgI2xhbmdNZW51PVwibnpEcm9wZG93bk1lbnVcIj5cclxuICAgICAgPHVsIG56LW1lbnU+XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBuei1tZW51LWl0ZW1cclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBsYW5nIG9mIGRyb3Bkb3duTGFuZ3VhZ2VzJCB8IGFzeW5jXCJcclxuICAgICAgICAgIFtuelNlbGVjdGVkXT1cImxhbmcuY3VsdHVyZU5hbWUgPT09IHNlbGVjdGVkTGFuZ0N1bHR1cmVcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2hhbmdlTGFuZyhsYW5nLmN1bHR1cmVOYW1lKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJsYW5nPy5kaXNwbGF5TmFtZVwiIGNsYXNzPVwicHIteHNcIj57e2xhbmcuY3VsdHVyZU5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgIHt7IGxhbmc/LmRpc3BsYXlOYW1lIH19XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbnotZHJvcGRvd24tbWVudT5cclxuICBgLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJJMThuQ29tcG9uZW50IHtcclxuICAgIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0RGVlcCgnbG9jYWxpemF0aW9uLmxhbmd1YWdlcycpKVxyXG4gICAgbGFuZ3VhZ2VzJDogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uTGFuZ3VhZ2VbXT47XHJcbiAgICBnZXQgc2VsZWN0ZWRMYW5nQ3VsdHVyZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRMYW5ndWFnZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgZGVmYXVsdExhbmd1YWdlJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcyQucGlwZShcclxuICAgICAgICAgICAgbWFwKGxhbmd1YWdlcyA9PiBzbnEoKCkgPT4gbGFuZ3VhZ2VzLmZpbmQobGFuZyA9PiBsYW5nLmN1bHR1cmVOYW1lID09PSB0aGlzLnNlbGVjdGVkTGFuZ0N1bHR1cmUpLmRpc3BsYXlOYW1lKSwgJycpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldCBkcm9wZG93bkxhbmd1YWdlcyQoKTogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uTGFuZ3VhZ2VbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcyQucGlwZShcclxuICAgICAgICAgICAgbWFwKGxhbmd1YWdlcyA9PiBzbnEoKCkgPT4gbGFuZ3VhZ2VzLCBbXSkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlXHJcbiAgICApIHt9XHJcbiAgICBvbkNoYW5nZUxhbmcoY3VsdHVyZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNldExhbmd1YWdlKGN1bHR1cmVOYW1lKSk7XHJcbiAgICB9XHJcbn1cclxuIl19