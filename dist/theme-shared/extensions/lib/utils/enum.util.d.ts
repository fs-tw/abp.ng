import { ABP } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { ObjectExtensions } from '../models/object-extensions';
import { PropCallback } from '../models/props';
export declare function createEnum(members: ObjectExtensions.EnumMember[]): any;
export declare function createEnumValueResolver<T = any>(enumType: string, lookupEnum: ObjectExtensions.Enum, propName: string): PropCallback<T, Observable<string>>;
export declare function createEnumOptions<T = any>(enumType: string, lookupEnum: ObjectExtensions.Enum): PropCallback<T, Observable<ABP.Option<any>[]>>;
