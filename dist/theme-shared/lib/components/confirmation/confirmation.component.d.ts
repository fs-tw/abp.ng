import { ReplaySubject } from 'rxjs';
import { Confirmation } from '../../models/confirmation';
export declare class ConfirmationComponent {
    confirm: Confirmation.Status;
    reject: Confirmation.Status;
    dismiss: Confirmation.Status;
    confirmation$: ReplaySubject<Confirmation.DialogData>;
    clear: (status: Confirmation.Status) => void;
    close(status: Confirmation.Status): void;
    getIconClass({ severity }: Confirmation.DialogData): string;
}
