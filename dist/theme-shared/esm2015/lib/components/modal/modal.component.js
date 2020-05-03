/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal/modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { takeUntilDestroy } from '@abp/ng.core';
import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewChildren, } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { fadeAnimation } from '../../animations/modal.animations';
import { Confirmation } from '../../models/confirmation';
import { ConfirmationService } from '../../services/confirmation.service';
import { ModalService } from '../../services/modal.service';
import { ButtonComponent } from '../button/button.component';
export class ModalComponent {
    /**
     * @param {?} renderer
     * @param {?} confirmationService
     * @param {?} modalService
     */
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
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set visible(value) {
        if (typeof value !== 'boolean')
            return;
        this.toggle$.next(value);
    }
    /**
     * @return {?}
     */
    get busy() {
        return this._busy;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set busy(value) {
        if (this.abpSubmit && this.abpSubmit instanceof ButtonComponent) {
            this.abpSubmit.loading = value;
        }
        this._busy = value;
    }
    /**
     * @return {?}
     */
    get isFormDirty() {
        return Boolean(document.querySelector('.modal-dialog .ng-dirty'));
    }
    /**
     * @private
     * @return {?}
     */
    initToggleStream() {
        this.toggle$
            .pipe(takeUntilDestroy(this), debounceTime(0), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => this.toggle(value)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    toggle(value) {
        this.isModalOpen = value;
        this._visible = value;
        this.visibleChange.emit(value);
        if (value) {
            this.modalService.renderTemplate(this.template);
            setTimeout((/**
             * @return {?}
             */
            () => this.listen()), 0);
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
    }
    /**
     * @return {?}
     */
    close() {
        if (this.busy)
            return;
        if (this.isFormDirty) {
            if (this.isConfirmationOpen)
                return;
            this.isConfirmationOpen = true;
            this.confirmationService
                .warn('AbpAccount::AreYouSureYouWantToCancelEditingWarningMessage', 'AbpAccount::AreYouSure')
                .subscribe((/**
             * @param {?} status
             * @return {?}
             */
            (status) => {
                this.isConfirmationOpen = false;
                if (status === Confirmation.Status.confirm) {
                    this.visible = false;
                }
            }));
        }
        else {
            this.visible = false;
        }
    }
    /**
     * @return {?}
     */
    listen() {
        fromEvent(document, 'keyup')
            .pipe(takeUntil(this.destroy$), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key && key.key === 'Escape')))
            .subscribe((/**
         * @return {?}
         */
        () => this.close()));
        fromEvent(window, 'beforeunload')
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.isFormDirty) {
                event.returnValue = true;
            }
            else {
                event.returnValue = false;
                delete event.returnValue;
            }
        }));
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (!this.abpClose)
                return;
            fromEvent(this.abpClose.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$), filter((/**
             * @return {?}
             */
            () => !!this.modalContent)))
                .subscribe((/**
             * @return {?}
             */
            () => this.close()));
        }), 0);
        this.init.emit();
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-modal',
                template: "<ng-template #template>\r\n  <div\r\n    *ngIf=\"visible\"\r\n    [@fade]=\"isModalOpen\"\r\n    id=\"modal-container\"\r\n    class=\"modal show {{ modalClass }}\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div class=\"modal-backdrop\" (click)=\"close()\"></div>\r\n    <div\r\n      id=\"abp-modal-dialog\"\r\n      class=\"modal-dialog modal-{{ size }}\"\r\n      role=\"document\"\r\n      [class.modal-dialog-centered]=\"centered\"\r\n      #abpModalContent\r\n    >\r\n      <div id=\"abp-modal-content\" class=\"modal-content\">\r\n        <div id=\"abp-modal-header\" class=\"modal-header\">\r\n          <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n          \u200B\r\n          <button\r\n            id=\"abp-modal-close-button\"\r\n            type=\"button\"\r\n            class=\"close\"\r\n            aria-label=\"Close\"\r\n            (click)=\"close()\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div id=\"abp-modal-body\" class=\"modal-body\">\r\n          <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n        </div>\r\n        <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n          <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-content></ng-content>\r\n",
                animations: [fadeAnimation],
                providers: [ModalService],
                styles: [".modal.show{display:block!important}.modal-backdrop{opacity:.8}.modal::-webkit-scrollbar{width:7px}.modal::-webkit-scrollbar-track{background:#ddd}.modal::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog{z-index:1050}"]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ConfirmationService },
    { type: ModalService }
];
ModalComponent.propDecorators = {
    visible: [{ type: Input }],
    busy: [{ type: Input }],
    centered: [{ type: Input }],
    modalClass: [{ type: Input }],
    size: [{ type: Input }],
    abpSubmit: [{ type: ContentChild, args: [ButtonComponent, { static: false, read: ButtonComponent },] }],
    abpHeader: [{ type: ContentChild, args: ['abpHeader', { static: false },] }],
    abpBody: [{ type: ContentChild, args: ['abpBody', { static: false },] }],
    abpFooter: [{ type: ContentChild, args: ['abpFooter', { static: false },] }],
    abpClose: [{ type: ContentChild, args: ['abpClose', { static: false, read: ElementRef },] }],
    template: [{ type: ViewChild, args: ['template', { static: false },] }],
    modalContent: [{ type: ViewChild, args: ['abpModalContent', { static: false },] }],
    abpButtons: [{ type: ViewChildren, args: ['abp-button',] }],
    visibleChange: [{ type: Output }],
    init: [{ type: Output }],
    appear: [{ type: Output }],
    disappear: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ModalComponent.prototype.centered;
    /** @type {?} */
    ModalComponent.prototype.modalClass;
    /** @type {?} */
    ModalComponent.prototype.size;
    /** @type {?} */
    ModalComponent.prototype.abpSubmit;
    /** @type {?} */
    ModalComponent.prototype.abpHeader;
    /** @type {?} */
    ModalComponent.prototype.abpBody;
    /** @type {?} */
    ModalComponent.prototype.abpFooter;
    /** @type {?} */
    ModalComponent.prototype.abpClose;
    /** @type {?} */
    ModalComponent.prototype.template;
    /** @type {?} */
    ModalComponent.prototype.modalContent;
    /** @type {?} */
    ModalComponent.prototype.abpButtons;
    /** @type {?} */
    ModalComponent.prototype.visibleChange;
    /** @type {?} */
    ModalComponent.prototype.init;
    /** @type {?} */
    ModalComponent.prototype.appear;
    /** @type {?} */
    ModalComponent.prototype.disappear;
    /** @type {?} */
    ModalComponent.prototype._visible;
    /** @type {?} */
    ModalComponent.prototype._busy;
    /** @type {?} */
    ModalComponent.prototype.isModalOpen;
    /** @type {?} */
    ModalComponent.prototype.isConfirmationOpen;
    /** @type {?} */
    ModalComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.toggle$;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.confirmationService;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFXN0QsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQXNFekIsWUFDVSxRQUFtQixFQUNuQixtQkFBd0MsRUFDeEMsWUFBMEI7UUFGMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBbkQzQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsU0FBSSxH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QyxZQUFZLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt3QkFFekMsWUFBWSxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7dUJBRTNDLFlBQVksU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7dUJBRzVELFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzJCQUV2QyxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3lCQUU5QyxZQUFZLFNBQUMsWUFBWTs0QkFFekIsTUFBTTttQkFFTixNQUFNO3FCQUVOLE1BQU07d0JBRU4sTUFBTTs7OztJQTlCUCxrQ0FBMEI7O0lBRTFCLG9DQUF5Qjs7SUFFekIsOEJBQWdDOztJQUVoQyxtQ0FDMkI7O0lBRTNCLG1DQUEwRTs7SUFFMUUsaUNBQXNFOztJQUV0RSxtQ0FBMEU7O0lBRTFFLGtDQUMwQjs7SUFFMUIsa0NBQXFFOztJQUVyRSxzQ0FBMEU7O0lBRTFFLG9DQUF1Qzs7SUFFdkMsdUNBQStEOztJQUUvRCw4QkFBbUQ7O0lBRW5ELGdDQUErQzs7SUFFL0MsbUNBQWtEOztJQUVsRCxrQ0FBaUI7O0lBRWpCLCtCQUFjOztJQUVkLHFDQUFvQjs7SUFFcEIsNENBQTJCOztJQUUzQixrQ0FBK0I7Ozs7O0lBRS9CLGlDQUF5Qzs7Ozs7SUFPdkMsa0NBQTJCOzs7OztJQUMzQiw2Q0FBZ0Q7Ozs7O0lBQ2hELHNDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3kgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBmYWRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucy9tb2RhbC5hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbmZpcm1hdGlvbic7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBNb2RhbFNpemUgPSAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgYW5pbWF0aW9uczogW2ZhZGVBbmltYXRpb25dLFxyXG4gIHN0eWxlVXJsczogWycuL21vZGFsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbTW9kYWxTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBASW5wdXQoKVxyXG4gIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG4gIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicpIHJldHVybjtcclxuICAgIHRoaXMudG9nZ2xlJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGJ1c3koKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYnVzeTtcclxuICB9XHJcbiAgc2V0IGJ1c3kodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLmFicFN1Ym1pdCAmJiB0aGlzLmFicFN1Ym1pdCBpbnN0YW5jZW9mIEJ1dHRvbkNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmFicFN1Ym1pdC5sb2FkaW5nID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYnVzeSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgY2VudGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbW9kYWxDbGFzcyA9ICcnO1xyXG5cclxuICBASW5wdXQoKSBzaXplOiBNb2RhbFNpemUgPSAnbGcnO1xyXG5cclxuICBAQ29udGVudENoaWxkKEJ1dHRvbkNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBCdXR0b25Db21wb25lbnQgfSlcclxuICBhYnBTdWJtaXQ6IEJ1dHRvbkNvbXBvbmVudDtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnYWJwSGVhZGVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIGFicEhlYWRlcjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnYWJwQm9keScsIHsgc3RhdGljOiBmYWxzZSB9KSBhYnBCb2R5OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkKCdhYnBGb290ZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgYWJwRm9vdGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkKCdhYnBDbG9zZScsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KVxyXG4gIGFicENsb3NlOiBFbGVtZW50UmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAVmlld0NoaWxkKCdhYnBNb2RhbENvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbW9kYWxDb250ZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkcmVuKCdhYnAtYnV0dG9uJykgYWJwQnV0dG9ucztcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbml0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYXBwZWFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGlzYXBwZWFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBfdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBfYnVzeSA9IGZhbHNlO1xyXG5cclxuICBpc01vZGFsT3BlbiA9IGZhbHNlO1xyXG5cclxuICBpc0NvbmZpcm1hdGlvbk9wZW4gPSBmYWxzZTtcclxuXHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBwcml2YXRlIHRvZ2dsZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBnZXQgaXNGb3JtRGlydHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nIC5uZy1kaXJ0eScpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICApIHtcclxuICAgIHRoaXMuaW5pdFRvZ2dsZVN0cmVhbSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0VG9nZ2xlU3RyZWFtKCkge1xyXG4gICAgdGhpcy50b2dnbGUkXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcyksIGRlYm91bmNlVGltZSgwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcclxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLnRvZ2dsZSh2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNNb2RhbE9wZW4gPSB2YWx1ZTtcclxuICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5tb2RhbFNlcnZpY2UucmVuZGVyVGVtcGxhdGUodGhpcy50ZW1wbGF0ZSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saXN0ZW4oKSwgMCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ21vZGFsLW9wZW4nKTtcclxuICAgICAgdGhpcy5hcHBlYXIuZW1pdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb2RhbFNlcnZpY2UuY2xlYXJNb2RhbCgpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdtb2RhbC1vcGVuJyk7XHJcbiAgICAgIHRoaXMuZGlzYXBwZWFyLmVtaXQoKTtcclxuICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBpZiAodGhpcy5idXN5KSByZXR1cm47XHJcblxyXG4gICAgaWYgKHRoaXMuaXNGb3JtRGlydHkpIHtcclxuICAgICAgaWYgKHRoaXMuaXNDb25maXJtYXRpb25PcGVuKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmlzQ29uZmlybWF0aW9uT3BlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZVxyXG4gICAgICAgIC53YXJuKFxyXG4gICAgICAgICAgJ0FicEFjY291bnQ6OkFyZVlvdVN1cmVZb3VXYW50VG9DYW5jZWxFZGl0aW5nV2FybmluZ01lc3NhZ2UnLFxyXG4gICAgICAgICAgJ0FicEFjY291bnQ6OkFyZVlvdVN1cmUnLFxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKChzdGF0dXM6IENvbmZpcm1hdGlvbi5TdGF0dXMpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNDb25maXJtYXRpb25PcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSBDb25maXJtYXRpb24uU3RhdHVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxpc3RlbigpIHtcclxuICAgIGZyb21FdmVudChkb2N1bWVudCwgJ2tleXVwJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxNTApLFxyXG4gICAgICAgIGZpbHRlcigoa2V5OiBLZXlib2FyZEV2ZW50KSA9PiBrZXkgJiYga2V5LmtleSA9PT0gJ0VzY2FwZScpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuXHJcbiAgICBmcm9tRXZlbnQod2luZG93LCAnYmVmb3JldW5sb2FkJylcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pc0Zvcm1EaXJ0eSkge1xyXG4gICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgZGVsZXRlIGV2ZW50LnJldHVyblZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5hYnBDbG9zZSkgcmV0dXJuO1xyXG4gICAgICBmcm9tRXZlbnQodGhpcy5hYnBDbG9zZS5uYXRpdmVFbGVtZW50LCAnY2xpY2snKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5tb2RhbENvbnRlbnQpLFxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICB0aGlzLmluaXQuZW1pdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=