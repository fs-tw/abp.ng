import { ValidatorFn } from '@angular/forms';
export interface RequiredError {
    required: true;
}
export interface RequiredOptions {
    allowEmptyStrings?: boolean;
}
export declare function validateRequired({ allowEmptyStrings }?: RequiredOptions): ValidatorFn;
