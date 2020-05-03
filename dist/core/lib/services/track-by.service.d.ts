import { TrackByFunction } from '@angular/core';
import { O } from 'ts-toolbelt';
export declare const trackBy: <T = any>(key: keyof T) => TrackByFunction<T>;
export declare const trackByDeep: <T = any>(...keys: T extends object ? O.Paths<T> : never) => TrackByFunction<T>;
export declare class TrackByService<ItemType = any> {
    by: <T = any>(key: keyof T) => TrackByFunction<T>;
    byDeep: <T = any>(...keys: T extends object ? O.Paths<T> : never) => TrackByFunction<T>;
}
