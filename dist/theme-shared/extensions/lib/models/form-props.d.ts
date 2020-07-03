import { ABP } from '@abp/ng.core';
import { Injector, Type } from '@angular/core';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { O } from 'ts-toolbelt';
import { Prop, PropCallback, PropContributorCallback, PropContributorCallbacks, PropData, PropList, PropPredicate, Props, PropsFactory } from './props';
export declare class FormPropList<R = any> extends PropList<R, FormProp<R>> {
}
export declare class FormProps<R = any> extends Props<FormPropList<R>> {
    protected _ctor: Type<FormPropList<R>>;
}
export declare class CreateFormPropsFactory<R = any> extends PropsFactory<FormProps<R>> {
    protected _ctor: Type<FormProps<R>>;
}
export declare class EditFormPropsFactory<R = any> extends PropsFactory<FormProps<R>> {
    protected _ctor: Type<FormProps<R>>;
}
export declare class FormProp<R = any> extends Prop<R> {
    readonly validators: PropCallback<R, ValidatorFn[]>;
    readonly asyncValidators: PropCallback<R, AsyncValidatorFn[]>;
    readonly disabled: PropPredicate<R>;
    readonly readonly: PropPredicate<R>;
    readonly autocomplete: string;
    readonly defaultValue: boolean | number | string | Date;
    readonly options: PropCallback<R, Observable<ABP.Option<any>[]>> | undefined;
    readonly id: string | undefined;
    constructor(options: FormPropOptions<R>);
    static create<R = any>(options: FormPropOptions<R>): FormProp<R>;
    static createMany<R = any>(arrayOfOptions: FormPropOptions<R>[]): FormProp<R>[];
}
export declare class FormPropData<R = any> extends PropData<R> {
    readonly record: R;
    getInjected: PropData<R>['getInjected'];
    constructor(injector: Injector, record: R);
}
export declare type FormPropOptions<R = any> = O.Optional<O.Writable<FormProp<R>>, 'permission' | 'visible' | 'displayName' | 'isExtra' | 'validators' | 'asyncValidators' | 'disabled' | 'readonly' | 'autocomplete' | 'defaultValue' | 'options' | 'id'>;
export declare type CreateFormPropDefaults<R = any> = Record<string, FormProp<R>[]>;
export declare type CreateFormPropContributorCallback<R = any> = PropContributorCallback<FormPropList<R>>;
export declare type CreateFormPropContributorCallbacks<R = any> = PropContributorCallbacks<FormPropList<R>>;
export declare type EditFormPropDefaults<R = any> = Record<string, FormProp<R>[]>;
export declare type EditFormPropContributorCallback<R = any> = PropContributorCallback<FormPropList<R>>;
export declare type EditFormPropContributorCallbacks<R = any> = PropContributorCallbacks<FormPropList<R>>;
