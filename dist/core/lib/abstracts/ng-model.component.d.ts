import { ControlValueAccessor } from '@angular/forms';
import { ChangeDetectorRef, Injector } from '@angular/core';
export declare class AbstractNgModelComponent<T = any, U = T> implements ControlValueAccessor {
    injector: Injector;
    protected _value: T;
    protected cdRef: ChangeDetectorRef;
    onChange: (value: T) => {};
    onTouched: () => {};
    disabled: boolean;
    readonly: boolean;
    valueFn: (value: U, previousValue?: T) => T;
    valueLimitFn: (value: T, previousValue?: T) => any;
    set value(value: T);
    get value(): T;
    get defaultValue(): T;
    constructor(injector: Injector);
    notifyValueChange(): void;
    writeValue(value: T): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
