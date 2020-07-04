import { Config } from '@abp/ng.core';
export declare namespace Toaster {
    interface ToastOptions {
        life?: number;
        sticky?: boolean;
        closable?: boolean;
        tapToDismiss?: boolean;
        messageLocalizationParams?: string[];
        titleLocalizationParams?: string[];
        id: any;
        containerKey?: string;
    }
    interface Toast {
        message: Config.LocalizationParam;
        title?: Config.LocalizationParam;
        severity?: string;
        options?: ToastOptions;
    }
    type Severity = 'neutral' | 'success' | 'info' | 'warning' | 'error';
}
