import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { SetLanguage, ConfigState, SessionState } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import snq from 'snq';
export class LanguagesComponent {
    constructor(store) {
        this.store = store;
    }
    get smallScreen() {
        return window.innerWidth < 992;
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
    ngOnInit() { }
    onChangeLang(cultureName) {
        this.store.dispatch(new SetLanguage(cultureName));
    }
}
LanguagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-languages',
                // tslint:disable-next-line: component-max-inline-declarations
                template: `
    <div
      *ngIf="(dropdownLanguages$ | async)?.length > 0"
      class="dropdown"
      ngbDropdown
      #languageDropdown="ngbDropdown"
      display="static"
    >
      <a
        ngbDropdownToggle
        class="nav-link"
        href="javascript:void(0)"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {{ defaultLanguage$ | async }}
      </a>
      <div
        class="dropdown-menu dropdown-menu-right border-0 shadow-sm"
        aria-labelledby="dropdownMenuLink"
        [class.d-block]="smallScreen && languageDropdown.isOpen()"
      >
        <a
          *ngFor="let lang of dropdownLanguages$ | async"
          href="javascript:void(0)"
          class="dropdown-item"
          (click)="onChangeLang(lang.cultureName)"
          >{{ lang?.displayName }}</a
        >
      </div>
    </div>
  `
            },] }
];
LanguagesComponent.ctorParameters = () => [
    { type: Store }
];
__decorate([
    Select(ConfigState.getDeep('localization.languages')),
    __metadata("design:type", Observable)
], LanguagesComponent.prototype, "languages$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLWJhc2ljL3NyYy9saWIvY29tcG9uZW50cy9uYXYtaXRlbXMvbGFuZ3VhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQTRCLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUF5Q3RCLE1BQU0sT0FBTyxrQkFBa0I7SUFrQzdCLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQztJQWpDcEMsSUFBSSxXQUFXO1FBQ2IsT0FBTyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztJQUNqQyxDQUFDO0lBS0QsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekIsR0FBRyxDQUNELFNBQVMsQ0FBQyxFQUFFLENBQ1YsR0FBRyxDQUNELEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFdBQVcsQ0FDeEYsRUFDSCxFQUFFLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3pCLEdBQUcsQ0FDRCxTQUFTLENBQUMsRUFBRSxDQUNWLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUNwRixFQUFFLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFJRCxRQUFRLEtBQUksQ0FBQztJQUViLFlBQVksQ0FBQyxXQUFtQjtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7OztZQS9FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDhEQUE4RDtnQkFDOUQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0NUO2FBQ0Y7OztZQTVDUSxLQUFLOztBQW1EWjtJQURDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7OEJBQzFDLFVBQVU7c0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlLCBTZWxlY3QgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFNldExhbmd1YWdlLCBDb25maWdTdGF0ZSwgQXBwbGljYXRpb25Db25maWd1cmF0aW9uLCBTZXNzaW9uU3RhdGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtbGFuZ3VhZ2VzJyxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1tYXgtaW5saW5lLWRlY2xhcmF0aW9uc1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgICpuZ0lmPVwiKGRyb3Bkb3duTGFuZ3VhZ2VzJCB8IGFzeW5jKT8ubGVuZ3RoID4gMFwiXHJcbiAgICAgIGNsYXNzPVwiZHJvcGRvd25cIlxyXG4gICAgICBuZ2JEcm9wZG93blxyXG4gICAgICAjbGFuZ3VhZ2VEcm9wZG93bj1cIm5nYkRyb3Bkb3duXCJcclxuICAgICAgZGlzcGxheT1cInN0YXRpY1wiXHJcbiAgICA+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgbmdiRHJvcGRvd25Ub2dnbGVcclxuICAgICAgICBjbGFzcz1cIm5hdi1saW5rXCJcclxuICAgICAgICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICBpZD1cImRyb3Bkb3duTWVudUxpbmtcIlxyXG4gICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgZGVmYXVsdExhbmd1YWdlJCB8IGFzeW5jIH19XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0IGJvcmRlci0wIHNoYWRvdy1zbVwiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51TGlua1wiXHJcbiAgICAgICAgW2NsYXNzLmQtYmxvY2tdPVwic21hbGxTY3JlZW4gJiYgbGFuZ3VhZ2VEcm9wZG93bi5pc09wZW4oKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGxhbmcgb2YgZHJvcGRvd25MYW5ndWFnZXMkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXHJcbiAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2hhbmdlTGFuZyhsYW5nLmN1bHR1cmVOYW1lKVwiXHJcbiAgICAgICAgICA+e3sgbGFuZz8uZGlzcGxheU5hbWUgfX08L2FcclxuICAgICAgICA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhbmd1YWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZ2V0IHNtYWxsU2NyZWVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdChDb25maWdTdGF0ZS5nZXREZWVwKCdsb2NhbGl6YXRpb24ubGFuZ3VhZ2VzJykpXHJcbiAgbGFuZ3VhZ2VzJDogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uTGFuZ3VhZ2VbXT47XHJcblxyXG4gIGdldCBkZWZhdWx0TGFuZ3VhZ2UkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5sYW5ndWFnZXMkLnBpcGUoXHJcbiAgICAgIG1hcChcclxuICAgICAgICBsYW5ndWFnZXMgPT5cclxuICAgICAgICAgIHNucShcclxuICAgICAgICAgICAgKCkgPT4gbGFuZ3VhZ2VzLmZpbmQobGFuZyA9PiBsYW5nLmN1bHR1cmVOYW1lID09PSB0aGlzLnNlbGVjdGVkTGFuZ0N1bHR1cmUpLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAnJyxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXQgZHJvcGRvd25MYW5ndWFnZXMkKCk6IE9ic2VydmFibGU8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLkxhbmd1YWdlW10+IHtcclxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcyQucGlwZShcclxuICAgICAgbWFwKFxyXG4gICAgICAgIGxhbmd1YWdlcyA9PlxyXG4gICAgICAgICAgc25xKCgpID0+IGxhbmd1YWdlcy5maWx0ZXIobGFuZyA9PiBsYW5nLmN1bHR1cmVOYW1lICE9PSB0aGlzLnNlbGVjdGVkTGFuZ0N1bHR1cmUpKSxcclxuICAgICAgICBbXSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRMYW5nQ3VsdHVyZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldExhbmd1YWdlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG9uQ2hhbmdlTGFuZyhjdWx0dXJlTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZXRMYW5ndWFnZShjdWx0dXJlTmFtZSkpO1xyXG4gIH1cclxufVxyXG4iXX0=