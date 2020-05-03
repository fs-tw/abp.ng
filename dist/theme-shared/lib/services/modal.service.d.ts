import { ContentProjectionService } from '@abp/ng.core';
import { TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
export declare class ModalService implements OnDestroy {
    private contentProjectionService;
    private containerComponentRef;
    constructor(contentProjectionService: ContentProjectionService);
    private setContainer;
    clearModal(): void;
    detectChanges(): void;
    getContainer(): ViewContainerRef;
    renderTemplate<T extends any>(template: TemplateRef<T>, context?: T): void;
    ngOnDestroy(): void;
}
