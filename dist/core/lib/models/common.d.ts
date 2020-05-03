import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { eLayoutType } from '../enums/common';
import { Config } from './config';
export declare namespace ABP {
    interface Root {
        environment: Partial<Config.Environment>;
        /**
         *
         * @deprecated To be deleted in v3.0
         */
        requirements?: Config.Requirements;
        skipGetAppConfiguration?: boolean;
    }
    interface Test {
        baseHref?: Router;
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
    interface Option<T> {
        key: Extract<keyof T, string>;
        value: T[Extract<keyof T, string>];
    }
    interface Dictionary<T = any> {
        [key: string]: T;
    }
    type ExtractFromOutput<T extends EventEmitter<any> | Subject<any>> = T extends EventEmitter<infer X> ? X : T extends Subject<infer Y> ? Y : never;
}
