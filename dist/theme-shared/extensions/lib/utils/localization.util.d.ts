import { ApplicationConfiguration } from '@abp/ng.core';
import { ObjectExtensions } from '../models/object-extensions';
export declare function createDisplayNameLocalizationPipeKeyGenerator(localization: ApplicationConfiguration.Localization): (displayName: ObjectExtensions.DisplayName, fallback: ObjectExtensions.DisplayName) => string;
