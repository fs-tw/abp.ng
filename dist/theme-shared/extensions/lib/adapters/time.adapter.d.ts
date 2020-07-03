import { NgbTimeAdapter, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
export declare class TimeAdapter extends NgbTimeAdapter<string> {
    fromModel(value: string | Date): NgbTimeStruct | null;
    toModel(value: NgbTimeStruct | null): string;
}
