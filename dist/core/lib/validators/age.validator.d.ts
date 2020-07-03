import { ValidatorFn } from '@angular/forms';
export interface MinAgeError {
    minAge: {
        age: number;
    };
}
export interface MinAgeOptions {
    age?: number;
}
export declare function validateMinAge({ age }?: MinAgeOptions): ValidatorFn;
