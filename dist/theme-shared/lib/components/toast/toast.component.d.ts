import { OnInit } from '@angular/core';
import { Toaster } from '../../models/toaster';
import { ToasterService } from '../../services/toaster.service';
import { LocalizationService } from '@abp/ng.core';
export declare class ToastComponent implements OnInit {
    private toastService;
    private localizationService;
    toast: Toaster.Toast;
    readonly severityClass: string;
    readonly iconClass: string;
    constructor(toastService: ToasterService, localizationService: LocalizationService);
    ngOnInit(): void;
    close(): void;
    tap(): void;
}
