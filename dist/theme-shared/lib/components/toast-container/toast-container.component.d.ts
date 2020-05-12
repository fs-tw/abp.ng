import { OnInit } from '@angular/core';
import { Toaster } from '../../models/toaster';
import { ReplaySubject } from 'rxjs';
export declare class ToastContainerComponent implements OnInit {
    toasts$: ReplaySubject<Toaster.Toast[]>;
    toasts: Toaster.Toast[];
    top: string;
    right: string;
    bottom: string;
    left: string;
    toastKey: string;
    ngOnInit(): void;
    trackByFunc(index: any, toast: any): any;
}
