import { __decorate, __metadata } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { ALAIN_I18N_TOKEN, SettingsService } from '@delon/theme';
import { InputBoolean } from '@delon/util';
import { I18NService } from '@fs/ng-alain/core';
import { Observable } from 'rxjs';
import { ConfigState, SessionState, SetLanguage } from '@abp/ng.core';
import { Select } from '@ngxs/store';
import { map } from 'rxjs/operators';
import snq from 'snq';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@ngxs/store";
import * as i3 from "@fs/ng-alain/core";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/dropdown";
import * as i6 from "ng-zorro-antd/menu";
import * as i7 from "ng-zorro-antd/core/transition-patch";
import * as i8 from "ng-zorro-antd/icon";
function HeaderI18nComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "i", 6);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelement(4, "i", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵproperty("nzDropdownMenu", _r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, ctx_r0.defaultLanguage$), " ");
} }
function HeaderI18nComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵproperty("nzDropdownMenu", _r2);
} }
function HeaderI18nComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 9);
    i0.ɵɵlistener("click", function HeaderI18nComponent_li_5_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r6); const lang_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onChangeLang(lang_r4.cultureName); });
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzSelected", lang_r4.cultureName === ctx_r3.selectedLangCulture);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", lang_r4 == null ? null : lang_r4.displayName);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(lang_r4.cultureName);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", lang_r4 == null ? null : lang_r4.displayName, " ");
} }
export class HeaderI18nComponent {
    constructor(settings, i18n, doc, store) {
        this.settings = settings;
        this.i18n = i18n;
        this.doc = doc;
        this.store = store;
        /** Whether to display language text */
        this.showLangText = true;
    }
    get defaultLanguage$() {
        return this.languages$.pipe(map(languages => snq(() => languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName), ''));
    }
    get dropdownLanguages$() {
        return this.languages$.pipe(map(languages => snq(() => languages.filter(lang => lang.cultureName !== this.selectedLangCulture)), []));
    }
    get selectedLangCulture() {
        return this.store.selectSnapshot(SessionState.getLanguage);
    }
    get langs() {
        return this.i18n.getLangs();
    }
    get curLangCode() {
        return this.settings.layout.lang;
    }
    onChangeLang(cultureName) {
        this.store.dispatch(new SetLanguage(cultureName));
    }
}
HeaderI18nComponent.ɵfac = function HeaderI18nComponent_Factory(t) { return new (t || HeaderI18nComponent)(i0.ɵɵdirectiveInject(i1.SettingsService), i0.ɵɵdirectiveInject(ALAIN_I18N_TOKEN), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i2.Store)); };
HeaderI18nComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderI18nComponent, selectors: [["header-i18n"]], inputs: { showLangText: "showLangText" }, decls: 7, vars: 5, consts: [["nz-dropdown", "", "nzPlacement", "bottomRight", 3, "nzDropdownMenu", 4, "ngIf"], ["nz-dropdown", "", "nzPlacement", "bottomRight", "nz-icon", "", "nzType", "global", 3, "nzDropdownMenu", 4, "ngIf"], ["langMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf"], ["nz-dropdown", "", "nzPlacement", "bottomRight", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "global"], ["nz-icon", "", "nzType", "down"], ["nz-dropdown", "", "nzPlacement", "bottomRight", "nz-icon", "", "nzType", "global", 3, "nzDropdownMenu"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["role", "img", 1, "pr-xs"]], template: function HeaderI18nComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HeaderI18nComponent_div_0_Template, 5, 4, "div", 0);
        i0.ɵɵtemplate(1, HeaderI18nComponent_i_1_Template, 1, 1, "i", 1);
        i0.ɵɵelementStart(2, "nz-dropdown-menu", null, 2);
        i0.ɵɵelementStart(4, "ul", 3);
        i0.ɵɵtemplate(5, HeaderI18nComponent_li_5_Template, 4, 4, "li", 4);
        i0.ɵɵpipe(6, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.showLangText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.showLangText);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 3, ctx.dropdownLanguages$));
    } }, directives: [i4.NgIf, i5.NzDropdownMenuComponent, i6.NzMenuDirective, i4.NgForOf, i5.NzDropDownDirective, i7.ɵNzTransitionPatchDirective, i8.NzIconDirective, i6.NzMenuItemDirective], pipes: [i4.AsyncPipe], encapsulation: 2, changeDetection: 0 });
__decorate([
    Select(ConfigState.getDeep('localization.languages')),
    __metadata("design:type", Observable)
], HeaderI18nComponent.prototype, "languages$", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], HeaderI18nComponent.prototype, "showLangText", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderI18nComponent, [{
        type: Component,
        args: [{
                selector: 'header-i18n',
                template: `
    <div *ngIf="showLangText" nz-dropdown [nzDropdownMenu]="langMenu" nzPlacement="bottomRight">
      <i nz-icon nzType="global"></i>
      {{ defaultLanguage$ | async }}
      <i nz-icon nzType="down"></i>
    </div>
    <i
      *ngIf="!showLangText"
      nz-dropdown
      [nzDropdownMenu]="langMenu"
      nzPlacement="bottomRight"
      nz-icon
      nzType="global"
    ></i>
    <nz-dropdown-menu #langMenu="nzDropdownMenu">
      <ul nz-menu>
        <li
          nz-menu-item
          *ngFor="let lang of dropdownLanguages$ | async"
          [nzSelected]="lang.cultureName === selectedLangCulture"
          (click)="onChangeLang(lang.cultureName)"
        >
          <span role="img" [attr.aria-label]="lang?.displayName" class="pr-xs">{{ lang.cultureName }}</span>
          {{ lang?.displayName }}
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.SettingsService }, { type: i3.I18NService, decorators: [{
                type: Inject,
                args: [ALAIN_I18N_TOKEN]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i2.Store }]; }, { languages$: [], showLangText: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL2kxOG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQTRCLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7OztJQUs5Qiw4QkFDRTtJQUFBLHVCQUErQjtJQUMvQixZQUNBOztJQUFBLHVCQUE2QjtJQUMvQixpQkFBTTs7OztJQUpnQyxvQ0FBMkI7SUFFL0QsZUFDQTtJQURBLDhFQUNBOzs7SUFFRix1QkFPSzs7OztJQUpILG9DQUEyQjs7OztJQU96Qiw2QkFNRTtJQUZBLHNPQUF3QztJQUV4QyxnQ0FBcUU7SUFBQSxZQUFzQjtJQUFBLGlCQUFPO0lBQ2xHLFlBQ0Y7SUFBQSxpQkFBSzs7OztJQUxILCtFQUF1RDtJQUd0QyxlQUFxQztJQUFyQywwRUFBcUM7SUFBZSxlQUFzQjtJQUF0Qix5Q0FBc0I7SUFDM0YsZUFDRjtJQURFLDZFQUNGOztBQU1SLE1BQU0sT0FBTyxtQkFBbUI7SUF3QzlCLFlBQ1UsUUFBeUIsRUFDQyxJQUFpQixFQUN6QixHQUFRLEVBQzFCLEtBQVk7UUFIWixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUNDLFNBQUksR0FBSixJQUFJLENBQWE7UUFDekIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBZnRCLHVDQUF1QztRQUNkLGlCQUFZLEdBQUcsSUFBSSxDQUFDO0lBZTFDLENBQUM7SUF6Q0osSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekIsR0FBRyxDQUNELFNBQVMsQ0FBQyxFQUFFLENBQ1YsR0FBRyxDQUNELEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFdBQVcsQ0FDeEYsRUFDSCxFQUFFLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3pCLEdBQUcsQ0FDRCxTQUFTLENBQUMsRUFBRSxDQUNWLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUNwRixFQUFFLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFJRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFTRCxZQUFZLENBQUMsV0FBbUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDOztzRkFqRFUsbUJBQW1CLGlFQTBDcEIsZ0JBQWdCLHdCQUNoQixRQUFRO3dEQTNDUCxtQkFBbUI7UUE3QjVCLG9FQUNFO1FBSUYsZ0VBT0M7UUFDRCxpREFDRTtRQUFBLDZCQUNFO1FBQUEsa0VBTUU7O1FBR0osaUJBQUs7UUFDUCxpQkFBbUI7O1FBekJkLHVDQUFvQjtRQU12QixlQUFxQjtRQUFyQix3Q0FBcUI7UUFXakIsZUFBK0M7UUFBL0Msc0VBQStDOztBQWN2RDtJQURDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7OEJBQzFDLFVBQVU7dURBQXNDO0FBNEJuQztJQUFmLFlBQVksRUFBRTs7eURBQXFCO2tEQTlCbEMsbUJBQW1CO2NBaEMvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztzQkEyQ0ksTUFBTTt1QkFBQyxnQkFBZ0I7O3NCQUN2QixNQUFNO3VCQUFDLFFBQVE7O2tCQWJqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbmplY3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IEkxOE5TZXJ2aWNlIH0gZnJvbSAnQGZzL25nLWFsYWluL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiwgQ29uZmlnU3RhdGUsIFNlc3Npb25TdGF0ZSwgU2V0TGFuZ3VhZ2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlci1pMThuJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dMYW5nVGV4dFwiIG56LWRyb3Bkb3duIFtuekRyb3Bkb3duTWVudV09XCJsYW5nTWVudVwiIG56UGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIj5cclxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJnbG9iYWxcIj48L2k+XHJcbiAgICAgIHt7IGRlZmF1bHRMYW5ndWFnZSQgfCBhc3luYyB9fVxyXG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIj48L2k+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxpXHJcbiAgICAgICpuZ0lmPVwiIXNob3dMYW5nVGV4dFwiXHJcbiAgICAgIG56LWRyb3Bkb3duXHJcbiAgICAgIFtuekRyb3Bkb3duTWVudV09XCJsYW5nTWVudVwiXHJcbiAgICAgIG56UGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxyXG4gICAgICBuei1pY29uXHJcbiAgICAgIG56VHlwZT1cImdsb2JhbFwiXHJcbiAgICA+PC9pPlxyXG4gICAgPG56LWRyb3Bkb3duLW1lbnUgI2xhbmdNZW51PVwibnpEcm9wZG93bk1lbnVcIj5cclxuICAgICAgPHVsIG56LW1lbnU+XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBuei1tZW51LWl0ZW1cclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBsYW5nIG9mIGRyb3Bkb3duTGFuZ3VhZ2VzJCB8IGFzeW5jXCJcclxuICAgICAgICAgIFtuelNlbGVjdGVkXT1cImxhbmcuY3VsdHVyZU5hbWUgPT09IHNlbGVjdGVkTGFuZ0N1bHR1cmVcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2hhbmdlTGFuZyhsYW5nLmN1bHR1cmVOYW1lKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIFthdHRyLmFyaWEtbGFiZWxdPVwibGFuZz8uZGlzcGxheU5hbWVcIiBjbGFzcz1cInByLXhzXCI+e3sgbGFuZy5jdWx0dXJlTmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgIHt7IGxhbmc/LmRpc3BsYXlOYW1lIH19XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbnotZHJvcGRvd24tbWVudT5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVySTE4bkNvbXBvbmVudCB7XHJcbiAgQFNlbGVjdChDb25maWdTdGF0ZS5nZXREZWVwKCdsb2NhbGl6YXRpb24ubGFuZ3VhZ2VzJykpXHJcbiAgbGFuZ3VhZ2VzJDogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uTGFuZ3VhZ2VbXT47XHJcblxyXG4gIGdldCBkZWZhdWx0TGFuZ3VhZ2UkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5sYW5ndWFnZXMkLnBpcGUoXHJcbiAgICAgIG1hcChcclxuICAgICAgICBsYW5ndWFnZXMgPT5cclxuICAgICAgICAgIHNucShcclxuICAgICAgICAgICAgKCkgPT4gbGFuZ3VhZ2VzLmZpbmQobGFuZyA9PiBsYW5nLmN1bHR1cmVOYW1lID09PSB0aGlzLnNlbGVjdGVkTGFuZ0N1bHR1cmUpLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAnJyxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXQgZHJvcGRvd25MYW5ndWFnZXMkKCk6IE9ic2VydmFibGU8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLkxhbmd1YWdlW10+IHtcclxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcyQucGlwZShcclxuICAgICAgbWFwKFxyXG4gICAgICAgIGxhbmd1YWdlcyA9PlxyXG4gICAgICAgICAgc25xKCgpID0+IGxhbmd1YWdlcy5maWx0ZXIobGFuZyA9PiBsYW5nLmN1bHR1cmVOYW1lICE9PSB0aGlzLnNlbGVjdGVkTGFuZ0N1bHR1cmUpKSxcclxuICAgICAgICBbXSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfSAgXHJcblxyXG4gIGdldCBzZWxlY3RlZExhbmdDdWx0dXJlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0TGFuZ3VhZ2UpO1xyXG4gIH1cclxuICAvKiogV2hldGhlciB0byBkaXNwbGF5IGxhbmd1YWdlIHRleHQgKi9cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0xhbmdUZXh0ID0gdHJ1ZTtcclxuXHJcbiAgZ2V0IGxhbmdzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMYW5ncygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGN1ckxhbmdDb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubGF5b3V0Lmxhbmc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcclxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuOiBJMThOU2VydmljZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZVxyXG4gICkge31cclxuXHJcbiAgb25DaGFuZ2VMYW5nKGN1bHR1cmVOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNldExhbmd1YWdlKGN1bHR1cmVOYW1lKSk7XHJcbiAgfSAgXHJcbn1cclxuIl19