import { ConfigStateService, LanguageInfo, SessionStateService } from '@abp/ng.core';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import { BooleanInput, InputBoolean } from '@delon/util/decorator';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import snq from 'snq';

//import { I18NService } from '@core';

@Component({
  selector: 'header-i18n',
  template: `
    <div
      *ngIf="showLangText"
      nz-dropdown
      [nzDropdownMenu]="langMenu"
      nzPlacement="bottomRight"
    >
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
          <!-- <span role="img" [attr.aria-label]="item.text" class="pr-xs">{{
            item.abbr
          }}</span> -->
          {{ lang?.displayName }}
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderI18nComponent {
  static ngAcceptInputType_showLangText: BooleanInput;
  /** Whether to display language text */
  @Input() @InputBoolean() showLangText = true;

  languages$: Observable<LanguageInfo[]> = this.configState.getDeep$('localization.languages');
  
  get defaultLanguage$(): Observable<string> {
    return this.languages$.pipe(
      map(
        languages =>
          snq(
            () => languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName,
          ),
        '',
      ),
    );
  }

  get dropdownLanguages$(): Observable<LanguageInfo[]> {
    return this.languages$.pipe(
      map(
        languages =>
          snq(() => languages.filter(lang => lang.cultureName !== this.selectedLangCulture)),
        [],
      ),
    );
  }

  get selectedLangCulture(): string {
    return this.sessionState.getLanguage();
  }

  constructor(
    private sessionState: SessionStateService,
    private configState: ConfigStateService
  ) {}

  onChangeLang(cultureName: string) {
    this.sessionState.setLanguage(cultureName);
  }
}
