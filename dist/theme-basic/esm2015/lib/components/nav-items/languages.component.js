import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { SetLanguage, ConfigState, SessionState } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import snq from 'snq';
let LanguagesComponent = class LanguagesComponent {
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
};
__decorate([
    Select(ConfigState.getDeep('localization.languages')),
    __metadata("design:type", Observable)
], LanguagesComponent.prototype, "languages$", void 0);
LanguagesComponent = __decorate([
    Component({
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
    }),
    __metadata("design:paramtypes", [Store])
], LanguagesComponent);
export { LanguagesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLWJhc2ljL3NyYy9saWIvY29tcG9uZW50cy9uYXYtaXRlbXMvbGFuZ3VhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQTRCLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUF5Q3RCLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBa0M3QixZQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7SUFqQ3BDLElBQUksV0FBVztRQUNiLE9BQU8sTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDakMsQ0FBQztJQUtELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3pCLEdBQUcsQ0FDRCxTQUFTLENBQUMsRUFBRSxDQUNWLEdBQUcsQ0FDRCxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxXQUFXLENBQ3hGLEVBQ0gsRUFBRSxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN6QixHQUFHLENBQ0QsU0FBUyxDQUFDLEVBQUUsQ0FDVixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFDcEYsRUFBRSxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBSUQsUUFBUSxLQUFJLENBQUM7SUFFYixZQUFZLENBQUMsV0FBbUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0YsQ0FBQTtBQW5DQztJQURDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7OEJBQzFDLFVBQVU7c0RBQXNDO0FBTmpELGtCQUFrQjtJQXZDOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsOERBQThEO1FBQzlELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDVDtLQUNGLENBQUM7cUNBbUMyQixLQUFLO0dBbENyQixrQkFBa0IsQ0F5QzlCO1NBekNZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSwgU2VsZWN0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBTZXRMYW5ndWFnZSwgQ29uZmlnU3RhdGUsIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiwgU2Vzc2lvblN0YXRlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWxhbmd1YWdlcycsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtbWF4LWlubGluZS1kZWNsYXJhdGlvbnNcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICAqbmdJZj1cIihkcm9wZG93bkxhbmd1YWdlcyQgfCBhc3luYyk/Lmxlbmd0aCA+IDBcIlxyXG4gICAgICBjbGFzcz1cImRyb3Bkb3duXCJcclxuICAgICAgbmdiRHJvcGRvd25cclxuICAgICAgI2xhbmd1YWdlRHJvcGRvd249XCJuZ2JEcm9wZG93blwiXHJcbiAgICAgIGRpc3BsYXk9XCJzdGF0aWNcIlxyXG4gICAgPlxyXG4gICAgICA8YVxyXG4gICAgICAgIG5nYkRyb3Bkb3duVG9nZ2xlXHJcbiAgICAgICAgY2xhc3M9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXHJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgaWQ9XCJkcm9wZG93bk1lbnVMaW5rXCJcclxuICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IGRlZmF1bHRMYW5ndWFnZSQgfCBhc3luYyB9fVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodCBib3JkZXItMCBzaGFkb3ctc21cIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUxpbmtcIlxyXG4gICAgICAgIFtjbGFzcy5kLWJsb2NrXT1cInNtYWxsU2NyZWVuICYmIGxhbmd1YWdlRHJvcGRvd24uaXNPcGVuKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBsYW5nIG9mIGRyb3Bkb3duTGFuZ3VhZ2VzJCB8IGFzeW5jXCJcclxuICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIlxyXG4gICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcclxuICAgICAgICAgIChjbGljayk9XCJvbkNoYW5nZUxhbmcobGFuZy5jdWx0dXJlTmFtZSlcIlxyXG4gICAgICAgICAgPnt7IGxhbmc/LmRpc3BsYXlOYW1lIH19PC9hXHJcbiAgICAgICAgPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGdldCBzbWFsbFNjcmVlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MjtcclxuICB9XHJcblxyXG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0RGVlcCgnbG9jYWxpemF0aW9uLmxhbmd1YWdlcycpKVxyXG4gIGxhbmd1YWdlcyQ6IE9ic2VydmFibGU8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLkxhbmd1YWdlW10+O1xyXG5cclxuICBnZXQgZGVmYXVsdExhbmd1YWdlJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VzJC5waXBlKFxyXG4gICAgICBtYXAoXHJcbiAgICAgICAgbGFuZ3VhZ2VzID0+XHJcbiAgICAgICAgICBzbnEoXHJcbiAgICAgICAgICAgICgpID0+IGxhbmd1YWdlcy5maW5kKGxhbmcgPT4gbGFuZy5jdWx0dXJlTmFtZSA9PT0gdGhpcy5zZWxlY3RlZExhbmdDdWx0dXJlKS5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgJycsXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyb3Bkb3duTGFuZ3VhZ2VzJCgpOiBPYnNlcnZhYmxlPEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5MYW5ndWFnZVtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5sYW5ndWFnZXMkLnBpcGUoXHJcbiAgICAgIG1hcChcclxuICAgICAgICBsYW5ndWFnZXMgPT5cclxuICAgICAgICAgIHNucSgoKSA9PiBsYW5ndWFnZXMuZmlsdGVyKGxhbmcgPT4gbGFuZy5jdWx0dXJlTmFtZSAhPT0gdGhpcy5zZWxlY3RlZExhbmdDdWx0dXJlKSksXHJcbiAgICAgICAgW10sXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkTGFuZ0N1bHR1cmUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRMYW5ndWFnZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBvbkNoYW5nZUxhbmcoY3VsdHVyZU5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2V0TGFuZ3VhZ2UoY3VsdHVyZU5hbWUpKTtcclxuICB9XHJcbn1cclxuIl19