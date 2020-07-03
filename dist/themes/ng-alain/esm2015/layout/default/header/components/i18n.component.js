import { __decorate, __metadata, __param } from "tslib";
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
let HeaderI18nComponent = class HeaderI18nComponent {
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
};
__decorate([
    Select(ConfigState.getDeep('localization.languages')),
    __metadata("design:type", Observable)
], HeaderI18nComponent.prototype, "languages$", void 0);
__decorate([
    Input(), InputBoolean(),
    __metadata("design:type", Object)
], HeaderI18nComponent.prototype, "showLangText", void 0);
HeaderI18nComponent = __decorate([
    Component({
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
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __param(1, Inject(ALAIN_I18N_TOKEN)),
    __param(2, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [SettingsService,
        I18NService, Object, Store])
], HeaderI18nComponent);
export { HeaderI18nComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL2kxOG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQTRCLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBa0NsQyxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQXdDOUIsWUFDVSxRQUF5QixFQUNDLElBQWlCLEVBQ3pCLEdBQVEsRUFDMUIsS0FBWTtRQUhaLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ0MsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUN6QixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQU87UUFmdEIsdUNBQXVDO1FBQ2QsaUJBQVksR0FBRyxJQUFJLENBQUM7SUFlMUMsQ0FBQztJQXpDSixJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN6QixHQUFHLENBQ0QsU0FBUyxDQUFDLEVBQUUsQ0FDVixHQUFHLENBQ0QsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsV0FBVyxDQUN4RixFQUNILEVBQUUsQ0FDSCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekIsR0FBRyxDQUNELFNBQVMsQ0FBQyxFQUFFLENBQ1YsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQ3BGLEVBQUUsQ0FDSCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUlELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQVNELFlBQVksQ0FBQyxXQUFtQjtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRixDQUFBO0FBaERDO0lBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQzs4QkFDMUMsVUFBVTt1REFBc0M7QUE0Qm5DO0lBQXhCLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRTs7eURBQXFCO0FBOUJsQyxtQkFBbUI7SUFoQy9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztJQTJDRyxXQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ3hCLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO3FDQUZDLGVBQWU7UUFDTyxXQUFXLFVBRXBDLEtBQUs7R0E1Q1gsbUJBQW1CLENBa0QvQjtTQWxEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgSTE4TlNlcnZpY2UgfSBmcm9tICdAZnMvbmctYWxhaW4vY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWd1cmF0aW9uLCBDb25maWdTdGF0ZSwgU2Vzc2lvblN0YXRlLCBTZXRMYW5ndWFnZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVhZGVyLWkxOG4nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2ICpuZ0lmPVwic2hvd0xhbmdUZXh0XCIgbnotZHJvcGRvd24gW256RHJvcGRvd25NZW51XT1cImxhbmdNZW51XCIgbnpQbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiPlxyXG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImdsb2JhbFwiPjwvaT5cclxuICAgICAge3sgZGVmYXVsdExhbmd1YWdlJCB8IGFzeW5jIH19XHJcbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGlcclxuICAgICAgKm5nSWY9XCIhc2hvd0xhbmdUZXh0XCJcclxuICAgICAgbnotZHJvcGRvd25cclxuICAgICAgW256RHJvcGRvd25NZW51XT1cImxhbmdNZW51XCJcclxuICAgICAgbnpQbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXHJcbiAgICAgIG56LWljb25cclxuICAgICAgbnpUeXBlPVwiZ2xvYmFsXCJcclxuICAgID48L2k+XHJcbiAgICA8bnotZHJvcGRvd24tbWVudSAjbGFuZ01lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxyXG4gICAgICA8dWwgbnotbWVudT5cclxuICAgICAgICA8bGlcclxuICAgICAgICAgIG56LW1lbnUtaXRlbVxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGxhbmcgb2YgZHJvcGRvd25MYW5ndWFnZXMkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgW256U2VsZWN0ZWRdPVwibGFuZy5jdWx0dXJlTmFtZSA9PT0gc2VsZWN0ZWRMYW5nQ3VsdHVyZVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwib25DaGFuZ2VMYW5nKGxhbmcuY3VsdHVyZU5hbWUpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJsYW5nPy5kaXNwbGF5TmFtZVwiIGNsYXNzPVwicHIteHNcIj57eyBsYW5nLmN1bHR1cmVOYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAge3sgbGFuZz8uZGlzcGxheU5hbWUgfX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uei1kcm9wZG93bi1tZW51PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJJMThuQ29tcG9uZW50IHtcclxuICBAU2VsZWN0KENvbmZpZ1N0YXRlLmdldERlZXAoJ2xvY2FsaXphdGlvbi5sYW5ndWFnZXMnKSlcclxuICBsYW5ndWFnZXMkOiBPYnNlcnZhYmxlPEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5MYW5ndWFnZVtdPjtcclxuXHJcbiAgZ2V0IGRlZmF1bHRMYW5ndWFnZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcyQucGlwZShcclxuICAgICAgbWFwKFxyXG4gICAgICAgIGxhbmd1YWdlcyA9PlxyXG4gICAgICAgICAgc25xKFxyXG4gICAgICAgICAgICAoKSA9PiBsYW5ndWFnZXMuZmluZChsYW5nID0+IGxhbmcuY3VsdHVyZU5hbWUgPT09IHRoaXMuc2VsZWN0ZWRMYW5nQ3VsdHVyZSkuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICcnLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldCBkcm9wZG93bkxhbmd1YWdlcyQoKTogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uTGFuZ3VhZ2VbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VzJC5waXBlKFxyXG4gICAgICBtYXAoXHJcbiAgICAgICAgbGFuZ3VhZ2VzID0+XHJcbiAgICAgICAgICBzbnEoKCkgPT4gbGFuZ3VhZ2VzLmZpbHRlcihsYW5nID0+IGxhbmcuY3VsdHVyZU5hbWUgIT09IHRoaXMuc2VsZWN0ZWRMYW5nQ3VsdHVyZSkpLFxyXG4gICAgICAgIFtdLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9ICBcclxuXHJcbiAgZ2V0IHNlbGVjdGVkTGFuZ0N1bHR1cmUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRMYW5ndWFnZSk7XHJcbiAgfVxyXG4gIC8qKiBXaGV0aGVyIHRvIGRpc3BsYXkgbGFuZ3VhZ2UgdGV4dCAqL1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93TGFuZ1RleHQgPSB0cnVlO1xyXG5cclxuICBnZXQgbGFuZ3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExhbmdzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgY3VyTGFuZ0NvZGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQubGFuZztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG46IEkxOE5TZXJ2aWNlLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlXHJcbiAgKSB7fVxyXG5cclxuICBvbkNoYW5nZUxhbmcoY3VsdHVyZU5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2V0TGFuZ3VhZ2UoY3VsdHVyZU5hbWUpKTtcclxuICB9ICBcclxufVxyXG4iXX0=