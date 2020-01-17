import { Confirmation } from '../models/confirmation';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { Toaster } from '../models/toaster';
import { Config } from '@abp/ng.core';
export declare class ConfirmationService {
    status$: Subject<Toaster.Status>;
    confirmation$: ReplaySubject<Confirmation.DialogData>;
    info(message: Config.LocalizationParam, title: Config.LocalizationParam, options?: Partial<Confirmation.Options>): Observable<Toaster.Status>;
    success(message: Config.LocalizationParam, title: Config.LocalizationParam, options?: Partial<Confirmation.Options>): Observable<Toaster.Status>;
    warn(message: Config.LocalizationParam, title: Config.LocalizationParam, options?: Partial<Confirmation.Options>): Observable<Toaster.Status>;
    error(message: Config.LocalizationParam, title: Config.LocalizationParam, options?: Partial<Confirmation.Options>): Observable<Toaster.Status>;
    show(message: Config.LocalizationParam, title: Config.LocalizationParam, severity?: Toaster.Severity, options?: Partial<Confirmation.Options>): Observable<Toaster.Status>;
    clear(status?: Toaster.Status): void;
    listenToEscape(): void;
}
