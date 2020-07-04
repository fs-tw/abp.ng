import { Validation, ValidationErrorComponent as ErrorComponent } from '@ngx-validate/core';
export declare class ValidationErrorComponent extends ErrorComponent {
    get abpErrors(): Validation.Error[] & {
        interpoliteParams?: string[];
    };
}
