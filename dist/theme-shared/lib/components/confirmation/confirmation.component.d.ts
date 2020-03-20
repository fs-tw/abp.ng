import { ConfirmationService } from '../../services/confirmation.service';
import { Confirmation } from '../../models/confirmation';
import { LocalizationService } from '@abp/ng.core';
export declare class ConfirmationComponent {
    private confirmationService;
    private localizationService;
    confirm: Confirmation.Status;
    reject: Confirmation.Status;
    dismiss: Confirmation.Status;
    visible: boolean;
    data: Confirmation.DialogData;
    readonly iconClass: string;
    constructor(confirmationService: ConfirmationService, localizationService: LocalizationService);
    close(status: Confirmation.Status): void;
}
