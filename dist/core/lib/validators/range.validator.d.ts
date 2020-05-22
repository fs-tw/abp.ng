import { ValidatorFn } from '@angular/forms';
export interface RangeError {
    range: {
        max: number;
        min: number;
    };
}
export interface RangeOptions {
    maximum?: number;
    minimum?: number;
}
export declare function validateRange({ maximum, minimum }?: RangeOptions): ValidatorFn;
