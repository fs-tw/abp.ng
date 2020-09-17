import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { SubscriptionService } from '../services/subscription.service';
export declare class FormSubmitDirective implements OnInit {
    private formGroupDirective;
    private host;
    private cdRef;
    private subscription;
    debounce: number;
    notValidateOnSubmit: string | boolean;
    readonly ngSubmit: EventEmitter<any>;
    executedNgSubmit: boolean;
    constructor(formGroupDirective: FormGroupDirective, host: ElementRef<HTMLFormElement>, cdRef: ChangeDetectorRef, subscription: SubscriptionService);
    ngOnInit(): void;
    markAsDirty(): void;
}
