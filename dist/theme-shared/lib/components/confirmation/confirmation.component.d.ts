import { Confirmation } from '../../models/confirmation';
import { ConfirmationService } from '../../services/confirmation.service';
export declare class ConfirmationComponent {
    private confirmationService;
    confirm: Confirmation.Status;
    reject: Confirmation.Status;
    dismiss: Confirmation.Status;
    visible: boolean;
    data: Confirmation.DialogData;
    readonly iconClass: string;
    constructor(confirmationService: ConfirmationService);
    close(status: Confirmation.Status): void;
}
