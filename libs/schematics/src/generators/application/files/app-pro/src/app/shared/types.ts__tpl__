import { PagedResultDto } from "@abp/ng.core";
import { Signal } from "@angular/core";
import { Observable, Unsubscribable } from "rxjs";
type RxMethodInput<Input> = Input | Observable<Input> | Signal<Input>;
export type RxMethod<Input> = ((input: RxMethodInput<Input>) => Unsubscribable) & Unsubscribable;

export interface Proxy<I, E, C, U>  {
    list: (getListInput: I) => Observable<PagedResultDto<E>>,
    get: (id: string) => Observable<E>,
    create: (data: C) => Observable<E>,
    update: (id: string, data: U) => Observable<E>,
    delete: (id: string) => Observable<void>,
} 