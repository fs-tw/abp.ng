import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
export declare class DateTimeAdapter {
    value: NgbDateTimeStruct;
    fromModel(value: string | Date): NgbDateTimeStruct | null;
    toModel(value: NgbDateTimeStruct | null): string;
}
declare type NgbDateTimeStruct = NgbDateStruct & NgbTimeStruct;
export {};
