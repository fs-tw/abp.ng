import { ValidatorFn } from '@angular/forms';
export interface StringLengthError {
    maxlength?: {
        requiredLength: number;
    };
    minlength?: {
        requiredLength: number;
    };
}
export interface StringLengthOptions {
    maximumLength?: number;
    minimumLength?: number;
}
export declare function validateStringLength({ maximumLength, minimumLength, }?: StringLengthOptions): ValidatorFn;
