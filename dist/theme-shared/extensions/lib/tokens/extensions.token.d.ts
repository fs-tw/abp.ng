import { InjectionToken } from '@angular/core';
import { ActionCallback } from '../models/actions';
import { ExtensionsService } from '../services/extensions.service';
export declare const EXTENSIONS_IDENTIFIER: InjectionToken<string>;
export declare type ActionKeys = Extract<'entityActions' | 'toolbarActions', keyof ExtensionsService>;
export declare const EXTENSIONS_ACTION_TYPE: InjectionToken<"entityActions" | "toolbarActions">;
export declare const EXTENSIONS_ACTION_DATA: InjectionToken<{
    readonly getInjected: <T>(token: import("@angular/core").Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: import("@angular/core").InjectFlags) => T;
    readonly index?: number;
    readonly record: any;
}>;
export declare const EXTENSIONS_ACTION_CALLBACK: InjectionToken<ActionCallback<unknown, any>>;
