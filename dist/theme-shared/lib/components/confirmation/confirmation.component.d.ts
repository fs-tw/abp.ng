import { ConfirmationService } from '../../services/confirmation.service';
import { Confirmation } from '../../models/confirmation';
import { LocalizationService } from '@abp/ng.core';
import { Toaster } from '../../models/toaster';
export declare class ConfirmationComponent {
    private confirmationService;
    private localizationService;
    confirm: Toaster.Status;
    reject: Toaster.Status;
    dismiss: Toaster.Status;
    visible: boolean;
    data: Confirmation.DialogData;
    readonly iconClass: string;
    constructor(confirmationService: ConfirmationService, localizationService: LocalizationService);
    close(status: Toaster.Status): void;
}
