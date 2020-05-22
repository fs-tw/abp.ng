import { ApplicationConfiguration } from '../models/application-configuration';
export declare function createLocalizer(localization: ApplicationConfiguration.Localization): (resourceName: string, key: string, defaultValue: string) => string;
export declare function createLocalizerWithFallback(localization: ApplicationConfiguration.Localization): (resourceNames: string[], keys: string[], defaultValue: string) => string;
export declare function createLocalizationPipeKeyGenerator(localization: ApplicationConfiguration.Localization): (resourceNames: string[], keys: string[], defaultKey: string) => string;
