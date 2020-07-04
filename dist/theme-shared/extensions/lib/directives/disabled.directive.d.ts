import { OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
export declare class DisabledDirective implements OnChanges {
    private ngControl;
    abpDisabled: boolean;
    constructor(ngControl: NgControl);
    ngOnChanges({ abpDisabled }: SimpleChanges): void;
}
