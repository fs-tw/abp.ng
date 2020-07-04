import { Config, ContentProjectionService } from '@abp/ng.core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Confirmation } from '../models/confirmation';
export declare class ConfirmationService {
    private contentProjectionService;
    status$: Subject<Confirmation.Status>;
    confirmation$: ReplaySubject<Confirmation.DialogData>;
    private containerComponentRef;
    clear: (status?: Confirmation.Status) => void;
    constructor(contentProjectionService: ContentProjectionService);
    private setContainer;
    info(message: Config.LocalizationParam, title: Config.LocalizationParam, options?: Partial<Confirmation.Options>): Observable<Confirmation.Status>;
    success(message: Config.LocalizationParam, title: Config.LocalizationParam, options?: Partial<Confirmation.Options>): Observable<Confirmation.Status>;
    warn(message: Config.LocalizationParam, title: Config.LocalizationParam, options?: Partial<Confirmation.Options>): Observable<Confirmation.Status>;
    error(message: Config.LocalizationParam, title: Config.LocalizationParam, options?: Partial<Confirmation.Options>): Observable<Confirmation.Status>;
    show(message: Config.LocalizationParam, title: Config.LocalizationParam, severity?: Confirmation.Severity, options?: Partial<Confirmation.Options>): Observable<Confirmation.Status>;
    private listenToEscape;
}
