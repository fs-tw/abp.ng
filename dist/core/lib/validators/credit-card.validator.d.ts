import { ValidatorFn } from '@angular/forms';
export interface CreditCardError {
    creditCard: true;
}
export declare function validateCreditCard(): ValidatorFn;
