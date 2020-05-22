import { ValidatorFn } from '@angular/forms';
export interface UrlError {
    url: true;
}
export declare function validateUrl(): ValidatorFn;
