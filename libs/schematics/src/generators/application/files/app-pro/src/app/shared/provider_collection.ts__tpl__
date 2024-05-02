import { ABP, LOCALIZATIONS, LocalizationService, localizationContributor } from "@abp/ng.core";
import { Provider } from "@angular/core";

export function provideLocalization(localizations?: ABP.Localization[]): Provider {
    return {
        provide: LOCALIZATIONS,
        multi: true,
        useValue: localizationContributor(localizations),
        deps: [LocalizationService],
    };
}