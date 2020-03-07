import { Component, Inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { InputBoolean } from '@delon/util';

import { Select, Store } from '@ngxs/store';
import { ConfigState, ApplicationConfiguration, SessionState, SetLanguage } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import snq from 'snq';

@Component({
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
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderI18nComponent {
    @Select(ConfigState.getDeep('localization.languages'))
    languages$: Observable<ApplicationConfiguration.Language[]>;
    get selectedLangCulture(): string {
        return this.store.selectSnapshot(SessionState.getLanguage);
    }
    get defaultLanguage$(): Observable<string> {
        return this.languages$.pipe(
            map(languages => snq(() => languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName), '')
        );
    }
    get dropdownLanguages$(): Observable<ApplicationConfiguration.Language[]> {
        return this.languages$.pipe(
            map(languages => snq(() => languages, []))
        );
    }
    constructor(
        private store: Store
    ) {}
    onChangeLang(cultureName: string) {
        this.store.dispatch(new SetLanguage(cultureName));
    }
}
