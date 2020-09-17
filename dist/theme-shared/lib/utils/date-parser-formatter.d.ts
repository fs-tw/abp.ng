import { DatePipe } from '@angular/common';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
export declare class DateParserFormatter extends NgbDateParserFormatter {
    private datePipe;
    private store;
    constructor(datePipe: DatePipe, store: Store);
    parse(value: string): NgbDateStruct;
    format(date: NgbDateStruct): string;
}
