import { Confirmation } from '../models/confirmation';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { Config } from '@abp/ng.core';
export declare class ConfirmationService {
    status$: Subject<Confirmation.Status>;
    confirmation$: ReplaySubject<Confirmation.DialogData>;
    info(message: Config.LocalizationParam, title: Config.LocalizationParam, options?: Partial<Confirmation.Options>): Observable<Confirmation.Status>;
    success(message: Config.LocalizationParam, title: Config.LocalizationParam, options?: Partial<Confirmation.Options>): Observable<Confirmation.Status>;
    warn(message: Config.LocalizationParam, title: Config.LocalizationParam, options?: Partial<Confirmation.Options>): Observable<Confirmation.Status>;
    error(message: Config.LocalizationParam, title: Config.LocalizationParam, options?: Partial<Confirmation.Options>): Observable<Confirmation.Status>;
    show(message: Config.LocalizationParam, title: Config.LocalizationParam, severity?: Confirmation.Severity, options?: Partial<Confirmation.Options>): Observable<Confirmation.Status>;
    clear(status?: Confirmation.Status): void;
    listenToEscape(): void;
}
