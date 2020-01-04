import { Toaster } from './toaster';
import { Config } from '@abp/ng.core';
export declare namespace Confirmation {
    interface Options extends Toaster.Options {
        hideCancelBtn?: boolean;
        hideYesBtn?: boolean;
        cancelText?: Config.LocalizationParam;
        yesText?: Config.LocalizationParam;
    }
}
