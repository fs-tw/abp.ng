import { Toaster } from '../models';
import { ReplaySubject } from 'rxjs';
import { Config, ContentProjectionService } from '@abp/ng.core';
export declare class ToasterService {
    private contentProjectionService;
    toasts$: ReplaySubject<Toaster.Toast[]>;
    private lastId;
    private toasts;
    private containerComponentRef;
    constructor(contentProjectionService: ContentProjectionService);
    private setContainer;
    /**
     * Creates an info toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    info(message: Config.LocalizationParam, title?: Config.LocalizationParam, options?: Partial<Toaster.ToastOptions>): number;
    /**
     * Creates a success toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    success(message: Config.LocalizationParam, title?: Config.LocalizationParam, options?: Partial<Toaster.ToastOptions>): number;
    /**
     * Creates a warning toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    warn(message: Config.LocalizationParam, title?: Config.LocalizationParam, options?: Partial<Toaster.ToastOptions>): number;
    /**
     * Creates an error toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    error(message: Config.LocalizationParam, title?: Config.LocalizationParam, options?: Partial<Toaster.ToastOptions>): number;
    /**
     * Creates a toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param severity Sets color of the toast. "success", "warning" etc.
     * @param options Spesific style or structural options for individual toast
     */
    show(message: Config.LocalizationParam, title?: Config.LocalizationParam, severity?: Toaster.Severity, options?: Partial<Toaster.ToastOptions>): number;
    /**
     * Removes the toast with given id.
     * @param id ID of the toast to be removed.
     */
    remove(id: number): void;
    /**
     * Removes all open toasts at once.
     */
    clear(key?: string): void;
}
