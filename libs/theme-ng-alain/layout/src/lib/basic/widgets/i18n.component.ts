import { ConfigStateService, SessionStateService, ApplicationConfiguration } from '@abp/ng.core';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BooleanInput, InputBoolean } from '@delon/util';
import snq from 'snq';


@Component({
  selector: 'header-i18n',
  templateUrl: 'i18n.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderI18nComponent {
  static ngAcceptInputType_showLangText: BooleanInput;
  @Input() @InputBoolean() showLangText = true;

  languages$ = this.configState.getDeep$('localization.languages');

  get defaultLanguage$(): Observable<{ displayName: string; flagIcon: string }> {
    return this.languages$.pipe(
      map(languages => {
        const lang: Partial<ApplicationConfiguration.Language> = snq(
          () => languages.find(language => language.cultureName === this.selectedLangCulture),
          {} as Partial<ApplicationConfiguration.Language>,
        );
        return {
          displayName: lang.displayName || '',
          flagIcon: lang.flagIcon,
        };
      }),
    );
  }

  get dropdownLanguages$(): Observable<ApplicationConfiguration.Language[]> {
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
    private configState: ConfigStateService,
    private sessionState: SessionStateService
  ) { }

  change(cultureName: string): void {
    this.sessionState.setLanguage(cultureName);
  }
}
