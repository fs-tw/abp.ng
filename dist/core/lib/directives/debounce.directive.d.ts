import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { SubscriptionService } from '../services/subscription.service';
export declare class InputEventDebounceDirective implements OnInit {
    private el;
    private subscription;
    debounce: number;
    readonly debounceEvent: EventEmitter<Event>;
    constructor(el: ElementRef, subscription: SubscriptionService);
    ngOnInit(): void;
}
