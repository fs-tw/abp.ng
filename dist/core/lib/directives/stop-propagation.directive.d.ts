import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { SubscriptionService } from '../services/subscription.service';
export declare class StopPropagationDirective implements OnInit {
    private el;
    private subscription;
    readonly stopPropEvent: EventEmitter<MouseEvent>;
    constructor(el: ElementRef, subscription: SubscriptionService);
    ngOnInit(): void;
}
