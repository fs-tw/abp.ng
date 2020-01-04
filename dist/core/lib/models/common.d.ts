import { eLayoutType } from '../enums/common';
import { Config } from './config';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
export declare namespace ABP {
    interface Root {
        environment: Partial<Config.Environment>;
        requirements: Config.Requirements;
    }
    type PagedResponse<T> = {
        totalCount: number;
    } & PagedItemsResponse<T>;
    interface PagedItemsResponse<T> {
        items: T[];
    }
    interface PageQueryParams {
        filter?: string;
        sorting?: string;
        skipCount?: number;
        maxResultCount?: number;
    }
    interface Route {
        children?: Route[];
        invisible?: boolean;
        layout?: eLayoutType;
        name: string;
        order?: number;
        parentName?: string;
        path: string;
        requiredPolicy?: string;
        iconClass?: string;
    }
    interface FullRoute extends Route {
        url?: string;
        wrapper?: boolean;
    }
    interface BasicItem {
        id: string;
        name: string;
    }
    interface Dictionary<T = any> {
        [key: string]: T;
    }
    type ExtractFromOutput<T extends EventEmitter<any> | Subject<any>> = T extends EventEmitter<infer X> ? X : T extends Subject<infer Y> ? Y : never;
}
