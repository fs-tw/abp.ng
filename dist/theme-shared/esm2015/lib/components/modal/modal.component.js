import { __decorate, __metadata } from "tslib";
import { SubscriptionService } from '@abp/ng.core';
import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewChildren, } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { fadeAnimation } from '../../animations/modal.animations';
import { Confirmation } from '../../models/confirmation';
import { ConfirmationService } from '../../services/confirmation.service';
import { ModalService } from '../../services/modal.service';
import { ButtonComponent } from '../button/button.component';
let ModalComponent = class ModalComponent {
    constructor(renderer, confirmationService, modalService, subscription) {
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.modalService = modalService;
        this.subscription = subscription;
        this.centered = false;
        this.modalClass = '';
        this.size = 'lg';
        this.visibleChange = new EventEmitter();
        this.init = new EventEmitter();
        this.appear = new EventEmitter();
        this.disappear = new EventEmitter();
        this._visible = false;
        this._busy = false;
        this.isModalOpen = false;
        this.isConfirmationOpen = false;
        this.destroy$ = new Subject();
        this.toggle$ = new Subject();
        this.initToggleStream();
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (typeof value !== 'boolean')
            return;
        this.toggle$.next(value);
    }
    get busy() {
        return this._busy;
    }
    set busy(value) {
        if (this.abpSubmit && this.abpSubmit instanceof ButtonComponent) {
            this.abpSubmit.loading = value;
        }
        this._busy = value;
    }
    get isFormDirty() {
        return Boolean(document.querySelector('.modal-dialog .ng-dirty'));
    }
    initToggleStream() {
        this.subscription.addOne(this.toggle$.pipe(debounceTime(0), distinctUntilChanged()), value => this.toggle(value));
    }
    toggle(value) {
        this.isModalOpen = value;
        this._visible = value;
        this.visibleChange.emit(value);
        if (value) {
            this.modalService.renderTemplate(this.template);
            setTimeout(() => this.listen(), 0);
            this.renderer.addClass(document.body, 'modal-open');
            this.appear.emit();
        }
        else {
            this.modalService.clearModal();
            this.renderer.removeClass(document.body, 'modal-open');
            this.disappear.emit();
            this.destroy$.next();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    close() {
        if (this.busy)
            return;
        if (this.isFormDirty) {
            if (this.isConfirmationOpen)
                return;
            this.isConfirmationOpen = true;
            this.confirmationService
                .warn('AbpAccount::AreYouSureYouWantToCancelEditingWarningMessage', 'AbpAccount::AreYouSure')
                .subscribe((status) => {
                this.isConfirmationOpen = false;
                if (status === Confirmation.Status.confirm) {
                    this.visible = false;
                }
            });
        }
        else {
            this.visible = false;
        }
    }
    listen() {
        fromEvent(document, 'keyup')
            .pipe(takeUntil(this.destroy$), debounceTime(150), filter((key) => key && key.key === 'Escape'))
            .subscribe(() => this.close());
        fromEvent(window, 'beforeunload')
            .pipe(takeUntil(this.destroy$))
            .subscribe(event => {
            if (this.isFormDirty) {
                event.returnValue = true;
            }
            else {
                event.returnValue = false;
                delete event.returnValue;
            }
        });
        setTimeout(() => {
            if (!this.abpClose)
                return;
            fromEvent(this.abpClose.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$), filter(() => !!this.modalContent))
                .subscribe(() => this.close());
        }, 0);
        this.init.emit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ModalComponent.prototype, "visible", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ModalComponent.prototype, "busy", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "centered", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "size", void 0);
__decorate([
    ContentChild(ButtonComponent, { static: false, read: ButtonComponent }),
    __metadata("design:type", ButtonComponent)
], ModalComponent.prototype, "abpSubmit", void 0);
__decorate([
    ContentChild('abpHeader', { static: false }),
    __metadata("design:type", TemplateRef)
], ModalComponent.prototype, "abpHeader", void 0);
__decorate([
    ContentChild('abpBody', { static: false }),
    __metadata("design:type", TemplateRef)
], ModalComponent.prototype, "abpBody", void 0);
__decorate([
    ContentChild('abpFooter', { static: false }),
    __metadata("design:type", TemplateRef)
], ModalComponent.prototype, "abpFooter", void 0);
__decorate([
    ContentChild('abpClose', { static: false, read: ElementRef }),
    __metadata("design:type", ElementRef)
], ModalComponent.prototype, "abpClose", void 0);
__decorate([
    ViewChild('template', { static: false }),
    __metadata("design:type", TemplateRef)
], ModalComponent.prototype, "template", void 0);
__decorate([
    ViewChild('abpModalContent', { static: false }),
    __metadata("design:type", ElementRef)
], ModalComponent.prototype, "modalContent", void 0);
__decorate([
    ViewChildren('abp-button'),
    __metadata("design:type", Object)
], ModalComponent.prototype, "abpButtons", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "visibleChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "init", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "appear", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "disappear", void 0);
ModalComponent = __decorate([
    Component({
        selector: 'abp-modal',
        template: "<ng-template #template>\r\n  <div\r\n    *ngIf=\"visible\"\r\n    [@fade]=\"isModalOpen\"\r\n    id=\"modal-container\"\r\n    class=\"modal show {{ modalClass }}\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div class=\"modal-backdrop\" (click)=\"close()\"></div>\r\n    <div\r\n      id=\"abp-modal-dialog\"\r\n      class=\"modal-dialog modal-{{ size }}\"\r\n      role=\"document\"\r\n      [class.modal-dialog-centered]=\"centered\"\r\n      #abpModalContent\r\n    >\r\n      <div id=\"abp-modal-content\" class=\"modal-content\">\r\n        <div id=\"abp-modal-header\" class=\"modal-header\">\r\n          <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n          \u200B\r\n          <button\r\n            id=\"abp-modal-close-button\"\r\n            type=\"button\"\r\n            class=\"close\"\r\n            aria-label=\"Close\"\r\n            (click)=\"close()\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div id=\"abp-modal-body\" class=\"modal-body\">\r\n          <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n        </div>\r\n        <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n          <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-content></ng-content>\r\n",
        animations: [fadeAnimation],
        providers: [ModalService, SubscriptionService],
        styles: [".modal.show{display:block!important}.modal-backdrop{opacity:.8}.modal::-webkit-scrollbar{width:7px}.modal::-webkit-scrollbar-track{background:#ddd}.modal::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog{z-index:1050}"]
    }),
    __metadata("design:paramtypes", [Renderer2,
        ConfirmationService,
        ModalService,
        SubscriptionService])
], ModalComponent);
export { ModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVc3RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBc0V6QixZQUNVLFFBQW1CLEVBQ25CLG1CQUF3QyxFQUN4QyxZQUEwQixFQUMxQixZQUFpQztRQUhqQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBcERs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LFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzs4QkFBVSxXQUFXOytDQUFNO0FBRXhCO0lBQTdDLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7OEJBQVksV0FBVztpREFBTTtBQUcxRTtJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQzs4QkFDcEQsVUFBVTtnREFBTTtBQUVnQjtJQUF6QyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOzhCQUFXLFdBQVc7Z0RBQU07QUFFcEI7SUFBaEQsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOzhCQUFlLFVBQVU7b0RBQUM7QUFFOUM7SUFBM0IsWUFBWSxDQUFDLFlBQVksQ0FBQzs7a0RBQVk7QUFFN0I7SUFBVCxNQUFNLEVBQUU7O3FEQUFzRDtBQUVyRDtJQUFULE1BQU0sRUFBRTs7NENBQTBDO0FBRXpDO0lBQVQsTUFBTSxFQUFFOzs4Q0FBc0M7QUFFckM7SUFBVCxNQUFNLEVBQUU7O2lEQUF5QztBQXBEdkMsY0FBYztJQVAxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixpNkNBQXFDO1FBQ3JDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUUzQixTQUFTLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUM7O0tBQy9DLENBQUM7cUNBd0VvQixTQUFTO1FBQ0UsbUJBQW1CO1FBQzFCLFlBQVk7UUFDWixtQkFBbUI7R0ExRWhDLGNBQWMsQ0FrSzFCO1NBbEtZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb25TZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvbW9kYWwuYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9jb25maXJtYXRpb24nO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uZmlybWF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgTW9kYWxTaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtmYWRlQW5pbWF0aW9uXSxcclxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW01vZGFsU2VydmljZSwgU3Vic2NyaXB0aW9uU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xyXG4gIH1cclxuICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nKSByZXR1cm47XHJcbiAgICB0aGlzLnRvZ2dsZSQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBidXN5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2J1c3k7XHJcbiAgfVxyXG4gIHNldCBidXN5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5hYnBTdWJtaXQgJiYgdGhpcy5hYnBTdWJtaXQgaW5zdGFuY2VvZiBCdXR0b25Db21wb25lbnQpIHtcclxuICAgICAgdGhpcy5hYnBTdWJtaXQubG9hZGluZyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2J1c3kgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGNlbnRlcmVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG1vZGFsQ2xhc3MgPSAnJztcclxuXHJcbiAgQElucHV0KCkgc2l6ZTogTW9kYWxTaXplID0gJ2xnJztcclxuXHJcbiAgQENvbnRlbnRDaGlsZChCdXR0b25Db21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogQnV0dG9uQ29tcG9uZW50IH0pXHJcbiAgYWJwU3VibWl0OiBCdXR0b25Db21wb25lbnQ7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ2FicEhlYWRlcicsIHsgc3RhdGljOiBmYWxzZSB9KSBhYnBIZWFkZXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ2FicEJvZHknLCB7IHN0YXRpYzogZmFsc2UgfSkgYWJwQm9keTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnYWJwRm9vdGVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIGFicEZvb3RlcjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnYWJwQ2xvc2UnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcclxuICBhYnBDbG9zZTogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZScsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYWJwTW9kYWxDb250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG1vZGFsQ29udGVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZHJlbignYWJwLWJ1dHRvbicpIGFicEJ1dHRvbnM7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaW5pdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFwcGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRpc2FwcGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgX3Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgX2J1c3kgPSBmYWxzZTtcclxuXHJcbiAgaXNNb2RhbE9wZW4gPSBmYWxzZTtcclxuXHJcbiAgaXNDb25maXJtYXRpb25PcGVuID0gZmFsc2U7XHJcblxyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGUkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgZ2V0IGlzRm9ybURpcnR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZyAubmctZGlydHknKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uU2VydmljZSxcclxuICApIHtcclxuICAgIHRoaXMuaW5pdFRvZ2dsZVN0cmVhbSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0VG9nZ2xlU3RyZWFtKCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkT25lKHRoaXMudG9nZ2xlJC5waXBlKGRlYm91bmNlVGltZSgwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSksIHZhbHVlID0+XHJcbiAgICAgIHRoaXMudG9nZ2xlKHZhbHVlKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc01vZGFsT3BlbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLm1vZGFsU2VydmljZS5yZW5kZXJUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpc3RlbigpLCAwKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnbW9kYWwtb3BlbicpO1xyXG4gICAgICB0aGlzLmFwcGVhci5lbWl0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vZGFsU2VydmljZS5jbGVhck1vZGFsKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ21vZGFsLW9wZW4nKTtcclxuICAgICAgdGhpcy5kaXNhcHBlYXIuZW1pdCgpO1xyXG4gICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLmJ1c3kpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Zvcm1EaXJ0eSkge1xyXG4gICAgICBpZiAodGhpcy5pc0NvbmZpcm1hdGlvbk9wZW4pIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuaXNDb25maXJtYXRpb25PcGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlXHJcbiAgICAgICAgLndhcm4oXHJcbiAgICAgICAgICAnQWJwQWNjb3VudDo6QXJlWW91U3VyZVlvdVdhbnRUb0NhbmNlbEVkaXRpbmdXYXJuaW5nTWVzc2FnZScsXHJcbiAgICAgICAgICAnQWJwQWNjb3VudDo6QXJlWW91U3VyZScsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHN0YXR1czogQ29uZmlybWF0aW9uLlN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0NvbmZpcm1hdGlvbk9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IENvbmZpcm1hdGlvbi5TdGF0dXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGlzdGVuKCkge1xyXG4gICAgZnJvbUV2ZW50KGRvY3VtZW50LCAna2V5dXAnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDE1MCksXHJcbiAgICAgICAgZmlsdGVyKChrZXk6IEtleWJvYXJkRXZlbnQpID0+IGtleSAmJiBrZXkua2V5ID09PSAnRXNjYXBlJyksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG5cclxuICAgIGZyb21FdmVudCh3aW5kb3csICdiZWZvcmV1bmxvYWQnKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRm9ybURpcnR5KSB7XHJcbiAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICBkZWxldGUgZXZlbnQucmV0dXJuVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmFicENsb3NlKSByZXR1cm47XHJcbiAgICAgIGZyb21FdmVudCh0aGlzLmFicENsb3NlLm5hdGl2ZUVsZW1lbnQsICdjbGljaycpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLm1vZGFsQ29udGVudCksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIHRoaXMuaW5pdC5lbWl0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==