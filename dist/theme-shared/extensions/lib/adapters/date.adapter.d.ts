import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
export declare class DateAdapter extends NgbDateAdapter<string> {
    fromModel(value: string | Date): NgbDateStruct | null;
    toModel(value: NgbDateStruct | null): string;
}
