import { Toaster } from './toaster';
export declare namespace Confirmation {
    interface Options extends Toaster.Options {
        hideCancelBtn?: boolean;
        hideYesBtn?: boolean;
        cancelText?: string;
        yesText?: string;
        /**
         * @deprecated to be deleted in v2
         */
        cancelCopy?: string;
        /**
         * @deprecated to be deleted in v2
         */
        yesCopy?: string;
    }
}
