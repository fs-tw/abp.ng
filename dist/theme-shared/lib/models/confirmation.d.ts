import { Config } from '@abp/ng.core';
export declare namespace Confirmation {
    interface Options {
        id?: any;
        dismissible?: boolean;
        messageLocalizationParams?: string[];
        titleLocalizationParams?: string[];
        hideCancelBtn?: boolean;
        hideYesBtn?: boolean;
        cancelText?: Config.LocalizationParam;
        yesText?: Config.LocalizationParam;
        /**
         *
         * @deprecated To be deleted in v2.9
         */
        closable?: boolean;
    }
    interface DialogData {
        message: Config.LocalizationParam;
        title?: Config.LocalizationParam;
        severity?: Severity;
        options?: Partial<Options>;
    }
    type Severity = 'neutral' | 'success' | 'info' | 'warning' | 'error';
    enum Status {
        confirm = "confirm",
        reject = "reject",
        dismiss = "dismiss"
    }
}
