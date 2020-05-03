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
var ModalComponent = /** @class */ (function () {
    function ModalComponent(renderer, confirmationService, modalService) {
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
    Object.defineProperty(ModalComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value !== 'boolean')
                return;
            this.toggle$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "busy", {
        get: /**
         * @return {?}
         */
        function () {
            return this._busy;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.abpSubmit && this.abpSubmit instanceof ButtonComponent) {
                this.abpSubmit.loading = value;
            }
            this._busy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "isFormDirty", {
        get: /**
         * @return {?}
         */
        function () {
            return Boolean(document.querySelector('.modal-dialog .ng-dirty'));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ModalComponent.prototype.initToggleStream = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.toggle$
            .pipe(takeUntilDestroy(this), debounceTime(0), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.toggle(value); }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ModalComponent.prototype.toggle = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.isModalOpen = value;
        this._visible = value;
        this.visibleChange.emit(value);
        if (value) {
            this.modalService.renderTemplate(this.template);
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.listen(); }), 0);
            this.renderer.addClass(document.body, 'modal-open');
            this.appear.emit();
        }
        else {
            this.modalService.clearModal();
            this.renderer.removeClass(document.body, 'modal-open');
            this.disappear.emit();
            this.destroy$.next();
        }
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            function (status) {
                _this.isConfirmationOpen = false;
                if (status === Confirmation.Status.confirm) {
                    _this.visible = false;
                }
            }));
        }
        else {
            this.visible = false;
        }
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        fromEvent(document, 'keyup')
            .pipe(takeUntil(this.destroy$), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Escape'; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.close(); }));
        fromEvent(window, 'beforeunload')
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.isFormDirty) {
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
        function () {
            if (!_this.abpClose)
                return;
            fromEvent(_this.abpClose.nativeElement, 'click')
                .pipe(takeUntil(_this.destroy$), filter((/**
             * @return {?}
             */
            function () { return !!_this.modalContent; })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.close(); }));
        }), 0);
        this.init.emit();
    };
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
    ModalComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ConfirmationService },
        { type: ModalService }
    ]; };
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
    return ModalComponent;
}());
export { ModalComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJN0Q7SUE2RUUsd0JBQ1UsUUFBbUIsRUFDbkIsbUJBQXdDLEVBQ3hDLFlBQTBCO1FBRjFCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQW5EM0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLFNBQUksR0FBYyxJQUFJLENBQUM7UUFvQmIs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J0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NoaWxkcmVuLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGZhZGVBbmltYXRpb24gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zL21vZGFsLmFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29uZmlybWF0aW9uJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbmZpcm1hdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW9kYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE1vZGFsU2l6ZSA9ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zOiBbZmFkZUFuaW1hdGlvbl0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFtNb2RhbFNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcclxuICB9XHJcbiAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJykgcmV0dXJuO1xyXG4gICAgdGhpcy50b2dnbGUkLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgYnVzeSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9idXN5O1xyXG4gIH1cclxuICBzZXQgYnVzeSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuYWJwU3VibWl0ICYmIHRoaXMuYWJwU3VibWl0IGluc3RhbmNlb2YgQnV0dG9uQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuYWJwU3VibWl0LmxvYWRpbmcgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9idXN5ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBjZW50ZXJlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBtb2RhbENsYXNzID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIHNpemU6IE1vZGFsU2l6ZSA9ICdsZyc7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoQnV0dG9uQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEJ1dHRvbkNvbXBvbmVudCB9KVxyXG4gIGFicFN1Ym1pdDogQnV0dG9uQ29tcG9uZW50O1xyXG5cclxuICBAQ29udGVudENoaWxkKCdhYnBIZWFkZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgYWJwSGVhZGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkKCdhYnBCb2R5JywgeyBzdGF0aWM6IGZhbHNlIH0pIGFicEJvZHk6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ2FicEZvb3RlcicsIHsgc3RhdGljOiBmYWxzZSB9KSBhYnBGb290ZXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ2FicENsb3NlJywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pXHJcbiAgYWJwQ2xvc2U6IEVsZW1lbnRSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2FicE1vZGFsQ29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtb2RhbENvbnRlbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGRyZW4oJ2FicC1idXR0b24nKSBhYnBCdXR0b25zO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGluaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBhcHBlYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBkaXNhcHBlYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIF92aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIF9idXN5ID0gZmFsc2U7XHJcblxyXG4gIGlzTW9kYWxPcGVuID0gZmFsc2U7XHJcblxyXG4gIGlzQ29uZmlybWF0aW9uT3BlbiA9IGZhbHNlO1xyXG5cclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gIGdldCBpc0Zvcm1EaXJ0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2cgLm5nLWRpcnR5JykpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgdGhpcy5pbml0VG9nZ2xlU3RyZWFtKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRUb2dnbGVTdHJlYW0oKSB7XHJcbiAgICB0aGlzLnRvZ2dsZSRcclxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSwgZGVib3VuY2VUaW1lKDApLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMudG9nZ2xlKHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc01vZGFsT3BlbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLm1vZGFsU2VydmljZS5yZW5kZXJUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpc3RlbigpLCAwKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnbW9kYWwtb3BlbicpO1xyXG4gICAgICB0aGlzLmFwcGVhci5lbWl0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vZGFsU2VydmljZS5jbGVhck1vZGFsKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ21vZGFsLW9wZW4nKTtcclxuICAgICAgdGhpcy5kaXNhcHBlYXIuZW1pdCgpO1xyXG4gICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLmJ1c3kpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Zvcm1EaXJ0eSkge1xyXG4gICAgICBpZiAodGhpcy5pc0NvbmZpcm1hdGlvbk9wZW4pIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuaXNDb25maXJtYXRpb25PcGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlXHJcbiAgICAgICAgLndhcm4oXHJcbiAgICAgICAgICAnQWJwQWNjb3VudDo6QXJlWW91U3VyZVlvdVdhbnRUb0NhbmNlbEVkaXRpbmdXYXJuaW5nTWVzc2FnZScsXHJcbiAgICAgICAgICAnQWJwQWNjb3VudDo6QXJlWW91U3VyZScsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHN0YXR1czogQ29uZmlybWF0aW9uLlN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0NvbmZpcm1hdGlvbk9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IENvbmZpcm1hdGlvbi5TdGF0dXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGlzdGVuKCkge1xyXG4gICAgZnJvbUV2ZW50KGRvY3VtZW50LCAna2V5dXAnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDE1MCksXHJcbiAgICAgICAgZmlsdGVyKChrZXk6IEtleWJvYXJkRXZlbnQpID0+IGtleSAmJiBrZXkua2V5ID09PSAnRXNjYXBlJyksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG5cclxuICAgIGZyb21FdmVudCh3aW5kb3csICdiZWZvcmV1bmxvYWQnKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRm9ybURpcnR5KSB7XHJcbiAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICBkZWxldGUgZXZlbnQucmV0dXJuVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmFicENsb3NlKSByZXR1cm47XHJcbiAgICAgIGZyb21FdmVudCh0aGlzLmFicENsb3NlLm5hdGl2ZUVsZW1lbnQsICdjbGljaycpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLm1vZGFsQ29udGVudCksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIHRoaXMuaW5pdC5lbWl0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==