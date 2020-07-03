import { ABP } from './common';
export declare namespace ApplicationConfiguration {
    interface Response {
        localization: Localization;
        auth: Auth;
        setting: Value;
        currentUser: CurrentUser;
        features: Value;
    }
    interface Localization {
        currentCulture: CurrentCulture;
        defaultResourceName: string;
        languages: Language[];
        values: LocalizationValue;
    }
    interface LocalizationValue {
        [key: string]: {
            [key: string]: string;
        };
    }
    interface Language {
        cultureName: string;
        uiCultureName: string;
        displayName: string;
        flagIcon: string;
    }
    interface CurrentCulture {
        cultureName: string;
        dateTimeFormat: DateTimeFormat;
        displayName: string;
        englishName: string;
        isRightToLeft: boolean;
        name: string;
        nativeName: string;
        threeLetterIsoLanguageName: string;
        twoLetterIsoLanguageName: string;
    }
    interface DateTimeFormat {
        calendarAlgorithmType: string;
        dateSeparator: string;
        fullDateTimePattern: string;
        longTimePattern: string;
        shortDatePattern: string;
        shortTimePattern: string;
    }
    interface Auth {
        policies: Policy;
        grantedPolicies: Policy;
    }
    interface Policy {
        [key: string]: boolean;
    }
    interface Value {
        values: ABP.Dictionary<string>;
    }
    interface CurrentUser {
        email: string;
        id: string;
        isAuthenticated: boolean;
        roles: string[];
        tenantId: string;
        userName: string;
    }
}
