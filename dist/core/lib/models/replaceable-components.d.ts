import { Type, EventEmitter } from '@angular/core';
import { ABP } from './common';
import { Subject } from 'rxjs';
export declare namespace ReplaceableComponents {
    interface State {
        replaceableComponents: ReplaceableComponent[];
    }
    interface ReplaceableComponent {
        component: Type<any>;
        key: string;
    }
    interface ReplaceableTemplateDirectiveInput<I, O extends {
        [K in keyof O]: EventEmitter<any> | Subject<any>;
    }> {
        inputs: {
            -readonly [K in keyof I]: {
                value: I[K];
                twoWay?: boolean;
            };
        };
        outputs: {
            -readonly [K in keyof O]: (value: ABP.ExtractFromOutput<O[K]>) => void;
        };
        componentKey: string;
    }
    interface ReplaceableTemplateData<I, O extends {
        [K in keyof O]: EventEmitter<any> | Subject<any>;
    }> {
        inputs: ReplaceableTemplateInputs<I>;
        outputs: ReplaceableTemplateOutputs<O>;
        componentKey: string;
    }
    type ReplaceableTemplateInputs<T> = {
        [K in keyof T]: T[K];
    };
    type ReplaceableTemplateOutputs<T extends {
        [K in keyof T]: EventEmitter<any> | Subject<any>;
    }> = {
        [K in keyof T]: (value: ABP.ExtractFromOutput<T[K]>) => void;
    };
    interface RouteData<T = any> {
        key: string;
        defaultComponent: Type<T>;
    }
}
