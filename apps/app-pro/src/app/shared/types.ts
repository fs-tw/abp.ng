import { PagedResultDto } from "@abp/ng.core";
import { Signal } from "@angular/core";
import { FormArray, FormControl, FormGroup as NgFormGroup } from "@angular/forms";
import { Observable, Unsubscribable } from "rxjs";
type RxMethodInput<Input> = Input | Observable<Input> | Signal<Input>;
export type RxMethod<Input> = ((input: RxMethodInput<Input>) => Unsubscribable) & Unsubscribable;

export type Controls<T> = { [k in keyof T]: Form<T[k]> }
export type Form<T> = [T] extends [boolean | number | string | null | undefined] ? FormControl<T | null> :
    [T] extends [(infer U)[]] ? FormArray<Form<U>> :
    NgFormGroup<Controls<T>>

export class FormGroup<T> {
    constructor(public controls: Controls<T>) {
    }
}

export interface IReadProxy<I, E> {
    list: (getListInput: I) => Observable<PagedResultDto<E>>,
    get: (id: string) => Observable<E>
}
export interface ICrudProxy<I, E, C, U> extends IReadProxy<I, E> {
    create: (data: C) => Observable<E>,
    update: (id: string, data: U) => Observable<E>,
    delete: (id: string) => Observable<void>,
} 