import { OnInit } from '@angular/core';
import { Toaster } from '../../models/toaster';
import { ToasterService } from '../../services/toaster.service';
export declare class ToastContainerComponent implements OnInit {
    private toastService;
    toasts: Toaster.Toast[];
    top: string;
    right: string;
    bottom: string;
    left: string;
    toastKey: string;
    constructor(toastService: ToasterService);
    ngOnInit(): void;
    trackByFunc(index: any, toast: any): any;
}
