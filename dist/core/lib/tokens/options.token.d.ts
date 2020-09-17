import { InjectionToken } from '@angular/core';
import { ABP } from '../models/common';
export declare const CORE_OPTIONS: InjectionToken<ABP.Root>;
export declare function coreOptionsFactory({ cultureNameLocaleFileMap, ...options }: ABP.Root): ABP.Root;
