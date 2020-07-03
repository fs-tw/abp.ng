import { __decorate, __metadata } from "tslib";
import { takeUntilDestroy } from '@abp/ng.core';
import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewChildren, } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { fadeAnimation } from '../../animations/modal.animations';
import { Confirmation } from '../../models/confirmation';
import { ConfirmationService } from '../../services/confirmation.service';
import { ModalService } from '../../services/modal.service';
import { ButtonComponent } from '../button/button.component';
let ModalComponent = class ModalComponent {
    constructor(renderer, confirmationService, modalService) {
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.modalService = modalService;
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
        this.toggle$
            .pipe(takeUntilDestroy(this), debounceTime(0), distinctUntilChanged())
            .subscribe(value => this.toggle(value));
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
        providers: [ModalService],
        styles: [".modal.show{display:block!important}.modal-backdrop{opacity:.8}.modal::-webkit-scrollbar{width:7px}.modal::-webkit-scrollbar-track{background:#ddd}.modal::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog{z-index:1050}"]
    }),
    __metadata("design:paramtypes", [Renderer2,
        ConfirmationService,
        ModalService])
], ModalComponent);
export { ModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVc3RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBc0V6QixZQUNVLFFBQW1CLEVBQ25CLG1CQUF3QyxFQUN4QyxZQUEwQjtRQUYxQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFuRDNCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsZUFBVSxHQUFHLEVB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QUMsQ0FBQzs4QkFBVSxXQUFXOytDQUFNO0FBRXhCO0lBQTNDLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7OEJBQVksV0FBVztpREFBTTtBQUd4RTtJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQzs4QkFDcEQsVUFBVTtnREFBTTtBQUVnQjtJQUF6QyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOzhCQUFXLFdBQVc7Z0RBQU07QUFFcEI7SUFBaEQsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOzhCQUFlLFVBQVU7b0RBQUM7QUFFOUM7SUFBM0IsWUFBWSxDQUFDLFlBQVksQ0FBQzs7a0RBQVk7QUFFN0I7SUFBVCxNQUFNLEVBQUU7O3FEQUFzRDtBQUVyRDtJQUFULE1BQU0sRUFBRTs7NENBQTBDO0FBRXpDO0lBQVQsTUFBTSxFQUFFOzs4Q0FBc0M7QUFFckM7SUFBVCxNQUFNLEVBQUU7O2lEQUF5QztBQXBEdkMsY0FBYztJQVAxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixpNkNBQXFDO1FBQ3JDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUUzQixTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7O0tBQzFCLENBQUM7cUNBd0VvQixTQUFTO1FBQ0UsbUJBQW1CO1FBQzFCLFlBQVk7R0F6RXpCLGNBQWMsQ0FpSzFCO1NBaktZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvbW9kYWwuYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9jb25maXJtYXRpb24nO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uZmlybWF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgTW9kYWxTaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtmYWRlQW5pbWF0aW9uXSxcclxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW01vZGFsU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xyXG4gIH1cclxuICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nKSByZXR1cm47XHJcbiAgICB0aGlzLnRvZ2dsZSQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBidXN5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2J1c3k7XHJcbiAgfVxyXG4gIHNldCBidXN5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5hYnBTdWJtaXQgJiYgdGhpcy5hYnBTdWJtaXQgaW5zdGFuY2VvZiBCdXR0b25Db21wb25lbnQpIHtcclxuICAgICAgdGhpcy5hYnBTdWJtaXQubG9hZGluZyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2J1c3kgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGNlbnRlcmVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG1vZGFsQ2xhc3MgPSAnJztcclxuXHJcbiAgQElucHV0KCkgc2l6ZTogTW9kYWxTaXplID0gJ2xnJztcclxuXHJcbiAgQENvbnRlbnRDaGlsZChCdXR0b25Db21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogQnV0dG9uQ29tcG9uZW50IH0pXHJcbiAgYWJwU3VibWl0OiBCdXR0b25Db21wb25lbnQ7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ2FicEhlYWRlcicsIHtzdGF0aWM6IGZhbHNlfSkgYWJwSGVhZGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkKCdhYnBCb2R5Jywge3N0YXRpYzogZmFsc2V9KSBhYnBCb2R5OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkKCdhYnBGb290ZXInLCB7c3RhdGljOiBmYWxzZX0pIGFicEZvb3RlcjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnYWJwQ2xvc2UnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcclxuICBhYnBDbG9zZTogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZScsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYWJwTW9kYWxDb250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG1vZGFsQ29udGVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZHJlbignYWJwLWJ1dHRvbicpIGFicEJ1dHRvbnM7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaW5pdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFwcGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRpc2FwcGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgX3Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgX2J1c3kgPSBmYWxzZTtcclxuXHJcbiAgaXNNb2RhbE9wZW4gPSBmYWxzZTtcclxuXHJcbiAgaXNDb25maXJtYXRpb25PcGVuID0gZmFsc2U7XHJcblxyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGUkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgZ2V0IGlzRm9ybURpcnR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZyAubmctZGlydHknKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmluaXRUb2dnbGVTdHJlYW0oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFRvZ2dsZVN0cmVhbSgpIHtcclxuICAgIHRoaXMudG9nZ2xlJFxyXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95KHRoaXMpLCBkZWJvdW5jZVRpbWUoMCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXHJcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy50b2dnbGUodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzTW9kYWxPcGVuID0gdmFsdWU7XHJcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnJlbmRlclRlbXBsYXRlKHRoaXMudGVtcGxhdGUpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubGlzdGVuKCksIDApO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdtb2RhbC1vcGVuJyk7XHJcbiAgICAgIHRoaXMuYXBwZWFyLmVtaXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNsZWFyTW9kYWwoKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnbW9kYWwtb3BlbicpO1xyXG4gICAgICB0aGlzLmRpc2FwcGVhci5lbWl0KCk7XHJcbiAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgaWYgKHRoaXMuYnVzeSkgcmV0dXJuO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRm9ybURpcnR5KSB7XHJcbiAgICAgIGlmICh0aGlzLmlzQ29uZmlybWF0aW9uT3BlbikgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5pc0NvbmZpcm1hdGlvbk9wZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2VcclxuICAgICAgICAud2FybihcclxuICAgICAgICAgICdBYnBBY2NvdW50OjpBcmVZb3VTdXJlWW91V2FudFRvQ2FuY2VsRWRpdGluZ1dhcm5pbmdNZXNzYWdlJyxcclxuICAgICAgICAgICdBYnBBY2NvdW50OjpBcmVZb3VTdXJlJyxcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoc3RhdHVzOiBDb25maXJtYXRpb24uU3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzQ29uZmlybWF0aW9uT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gQ29uZmlybWF0aW9uLlN0YXR1cy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsaXN0ZW4oKSB7XHJcbiAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTUwKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XHJcblxyXG4gICAgZnJvbUV2ZW50KHdpbmRvdywgJ2JlZm9yZXVubG9hZCcpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb3JtRGlydHkpIHtcclxuICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgIGRlbGV0ZSBldmVudC5yZXR1cm5WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuYWJwQ2xvc2UpIHJldHVybjtcclxuICAgICAgZnJvbUV2ZW50KHRoaXMuYWJwQ2xvc2UubmF0aXZlRWxlbWVudCwgJ2NsaWNrJylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbHRlcigoKSA9PiAhIXRoaXMubW9kYWxDb250ZW50KSxcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgdGhpcy5pbml0LmVtaXQoKTtcclxuICB9XHJcbn1cclxuIl19