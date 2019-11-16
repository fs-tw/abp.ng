/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal/modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewChildren, } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { dialogAnimation, fadeAnimation } from '../../animations/modal.animations';
import { ConfirmationService } from '../../services/confirmation.service';
import { ButtonComponent } from '../button/button.component';
var ModalComponent = /** @class */ (function () {
    function ModalComponent(renderer, confirmationService) {
        this.renderer = renderer;
        this.confirmationService = confirmationService;
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
            var _this = this;
            if (typeof value !== 'boolean')
                return;
            this.isModalOpen = value;
            this._visible = value;
            this.visibleChange.emit(value);
            if (value) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.listen(); }), 0);
                this.renderer.addClass(document.body, 'modal-open');
                this.appear.emit();
            }
            else {
                this.renderer.removeClass(document.body, 'modal-open');
                this.disappear.emit();
                this.destroy$.next();
            }
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
        /** @type {?} */
        var node;
        if (!this.modalContent) {
            node = (/** @type {?} */ (document.getElementById('modal-container')));
        }
        /** @type {?} */
        var nodes = getFlatNodes(((/** @type {?} */ ((node || this.modalContent.nativeElement).querySelector('#abp-modal-body')))).childNodes);
        if (hasNgDirty(nodes)) {
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
                if (status === "confirm" /* confirm */) {
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
        function () {
            _this.close();
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
                    template: "<ng-container *ngIf=\"visible\">\r\n  <div id=\"modal-container\" class=\"modal show {{ modalClass }}\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-backdrop\" [@fade]=\"isModalOpen\" (click)=\"close()\"></div>\r\n    <div\r\n      id=\"abp-modal-dialog\"\r\n      class=\"modal-dialog modal-{{ size }}\"\r\n      role=\"document\"\r\n      [class.modal-dialog-centered]=\"centered\"\r\n      [@dialog]=\"isModalOpen\"\r\n      #abpModalContent\r\n    >\r\n      <div id=\"abp-modal-content\" class=\"modal-content\">\r\n        <div id=\"abp-modal-header\" class=\"modal-header\">\r\n          <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n          \u200B\r\n          <button id=\"abp-modal-close-button\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div id=\"abp-modal-body\" class=\"modal-body\">\r\n          <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n        </div>\r\n        <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n          <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-content></ng-content>\r\n  </div>\r\n</ng-container>\r\n",
                    animations: [fadeAnimation, dialogAnimation]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ConfirmationService }
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
    ModalComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.confirmationService;
}
/**
 * @param {?} nodes
 * @return {?}
 */
function getFlatNodes(nodes) {
    return Array.from(nodes).reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    function (acc, val) { return tslib_1.__spread(acc, (val.childNodes && val.childNodes.length ? getFlatNodes(val.childNodes) : [val])); }), []);
}
/**
 * @param {?} nodes
 * @return {?}
 */
function hasNgDirty(nodes) {
    return nodes.findIndex((/**
     * @param {?} node
     * @return {?}
     */
    function (node) { return (node.className || '').indexOf('ng-dirty') > -1; })) > -1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUk3RDtJQWdGRSx3QkFBb0IsUUFBbUIsRUFBVSxtQkFBd0M7UUFBckUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUF4Q2hGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQixTQUFJLEdBQWMsSUFBSSxDQUFDO1FBa0JiLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU1QyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVoQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFFZCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFM0IsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFNkQsQ0FBQztJQTFFN0Ysc0JBQ0ksbUNBQU87Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQUNELFVBQVksS0FBYztZQUExQixpQkFnQkM7WUFmQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVM7Z0JBQUUsT0FBTztZQUV2QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvQixJQUFJLEtBQUssRUFBRTtnQkFDVCxVQUFVOzs7Z0JBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLEdBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QjtRQUNILENBQUM7OztPQWpCQTtJQW1CRCxzQkFDSSxnQ0FBSTs7OztRQURSO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBQ0QsVUFBUyxLQUFjO1lBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxZQUFZLGVBQWUsRUFBRTtnQkFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ2hDO1lBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQzs7O09BUEE7Ozs7SUFtREQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsOEJBQUs7OztJQUFMO1FBQUEsaUJBMkJDO1FBMUJDLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPOztZQUVsQixJQUFvQjtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFrQixDQUFDO1NBQ3JFOztZQUVLLEtBQUssR0FBRyxZQUFZLENBQ3hCLENBQUMsbUJBQUEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsRUFBZSxDQUFDLENBQUMsVUFBVSxDQUN2RztRQUVELElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLGtCQUFrQjtnQkFBRSxPQUFPO1lBRXBDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLG1CQUFtQjtpQkFDckIsSUFBSSxDQUFDLDREQUE0RCxFQUFFLHdCQUF3QixDQUFDO2lCQUM1RixTQUFTOzs7O1lBQUMsVUFBQyxNQUFzQjtnQkFDaEMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztnQkFDaEMsSUFBSSxNQUFNLDRCQUEyQixFQUFFO29CQUNyQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztpQkFDdEI7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNOO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7SUFFRCwrQkFBTTs7O0lBQU47UUFBQSxpQkFzQkM7UUFyQkMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDekIsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsTUFBTTs7OztRQUFDLFVBQUMsR0FBa0IsSUFBSyxPQUFBLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBM0IsQ0FBMkIsRUFBQyxDQUM1RDthQUNBLFNBQVM7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7UUFFTCxVQUFVOzs7UUFBQztZQUNULElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUTtnQkFBRSxPQUFPO1lBQzNCLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7aUJBQzVDLElBQUksQ0FDSCxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUN4QixNQUFNOzs7WUFBQyxjQUFNLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQW5CLENBQW1CLEVBQUMsQ0FDbEM7aUJBQ0EsU0FBUzs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQUUsRUFBWixDQUFZLEVBQUMsQ0FBQztRQUNuQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7UUFFTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQXpJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG16Q0FBcUM7b0JBQ3JDLFVBQVUsRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUM7aUJBQzdDOzs7O2dCQWxCQyxTQUFTO2dCQVNGLG1CQUFtQjs7OzBCQVd6QixLQUFLO3VCQXNCTCxLQUFLOzJCQVlMLEtBQUs7NkJBRUwsS0FBSzt1QkFFTCxLQUFLOzRCQUVMLFlBQVksU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7NEJBR3RFLFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzBCQUUzQyxZQUFZLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs0QkFFekMsWUFBWSxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MkJBRTNDLFlBQVksU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7K0JBRzVELFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7NkJBRTlDLFlBQVksU0FBQyxZQUFZO2dDQUV6QixNQUFNO3VCQUVOLE1BQU07eUJBRU4sTUFBTTs0QkFFTixNQUFNOztJQXNFVCxxQkFBQztDQUFBLEFBMUlELElBMElDO1NBcklZLGNBQWM7OztJQW1DekIsa0NBQTBCOztJQUUxQixvQ0FBeUI7O0lBRXpCLDhCQUFnQzs7SUFFaEMsbUNBQzJCOztJQUUzQixtQ0FBMEU7O0lBRTFFLGlDQUFzRTs7SUFFdEUsbUNBQTBFOztJQUUxRSxrQ0FDMEI7O0lBRTFCLHNDQUEwRTs7SUFFMUUsb0NBQXVDOztJQUV2Qyx1Q0FBK0Q7O0lBRS9ELDhCQUFtRDs7SUFFbkQsZ0NBQStDOztJQUUvQyxtQ0FBa0Q7O0lBRWxELGtDQUFpQjs7SUFFakIsK0JBQWM7O0lBRWQscUNBQW9COztJQUVwQiw0Q0FBMkI7O0lBRTNCLGtDQUErQjs7Ozs7SUFFbkIsa0NBQTJCOzs7OztJQUFFLDZDQUFnRDs7Ozs7O0FBNEQzRixTQUFTLFlBQVksQ0FBQyxLQUFlO0lBQ25DLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNOzs7OztJQUM3QixVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssd0JBQUksR0FBRyxFQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUE1RixDQUE2RixHQUMzRyxFQUFFLENBQ0gsQ0FBQztBQUNKLENBQUM7Ozs7O0FBRUQsU0FBUyxVQUFVLENBQUMsS0FBb0I7SUFDdEMsT0FBTyxLQUFLLENBQUMsU0FBUzs7OztJQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBL0MsQ0FBK0MsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGRpYWxvZ0FuaW1hdGlvbiwgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvbW9kYWwuYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9hc3Rlcic7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE1vZGFsU2l6ZSA9ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zOiBbZmFkZUFuaW1hdGlvbiwgZGlhbG9nQW5pbWF0aW9uXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBASW5wdXQoKVxyXG4gIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG4gIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmlzTW9kYWxPcGVuID0gdmFsdWU7XHJcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saXN0ZW4oKSwgMCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ21vZGFsLW9wZW4nKTtcclxuICAgICAgdGhpcy5hcHBlYXIuZW1pdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnbW9kYWwtb3BlbicpO1xyXG4gICAgICB0aGlzLmRpc2FwcGVhci5lbWl0KCk7XHJcbiAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgYnVzeSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9idXN5O1xyXG4gIH1cclxuICBzZXQgYnVzeSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuYWJwU3VibWl0ICYmIHRoaXMuYWJwU3VibWl0IGluc3RhbmNlb2YgQnV0dG9uQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuYWJwU3VibWl0LmxvYWRpbmcgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9idXN5ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBjZW50ZXJlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBtb2RhbENsYXNzID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIHNpemU6IE1vZGFsU2l6ZSA9ICdsZyc7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoQnV0dG9uQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEJ1dHRvbkNvbXBvbmVudCB9KVxyXG4gIGFicFN1Ym1pdDogQnV0dG9uQ29tcG9uZW50O1xyXG5cclxuICBAQ29udGVudENoaWxkKCdhYnBIZWFkZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgYWJwSGVhZGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkKCdhYnBCb2R5JywgeyBzdGF0aWM6IGZhbHNlIH0pIGFicEJvZHk6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ2FicEZvb3RlcicsIHsgc3RhdGljOiBmYWxzZSB9KSBhYnBGb290ZXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ2FicENsb3NlJywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pXHJcbiAgYWJwQ2xvc2U6IEVsZW1lbnRSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYWJwTW9kYWxDb250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG1vZGFsQ29udGVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZHJlbignYWJwLWJ1dHRvbicpIGFicEJ1dHRvbnM7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaW5pdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFwcGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRpc2FwcGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgX3Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgX2J1c3kgPSBmYWxzZTtcclxuXHJcbiAgaXNNb2RhbE9wZW4gPSBmYWxzZTtcclxuXHJcbiAgaXNDb25maXJtYXRpb25PcGVuID0gZmFsc2U7XHJcblxyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLmJ1c3kpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbm9kZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBpZiAoIXRoaXMubW9kYWxDb250ZW50KSB7XHJcbiAgICAgIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm9kZXMgPSBnZXRGbGF0Tm9kZXMoXHJcbiAgICAgICgobm9kZSB8fCB0aGlzLm1vZGFsQ29udGVudC5uYXRpdmVFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCcjYWJwLW1vZGFsLWJvZHknKSBhcyBIVE1MRWxlbWVudCkuY2hpbGROb2RlcyxcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGhhc05nRGlydHkobm9kZXMpKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzQ29uZmlybWF0aW9uT3BlbikgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5pc0NvbmZpcm1hdGlvbk9wZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2VcclxuICAgICAgICAud2FybignQWJwQWNjb3VudDo6QXJlWW91U3VyZVlvdVdhbnRUb0NhbmNlbEVkaXRpbmdXYXJuaW5nTWVzc2FnZScsICdBYnBBY2NvdW50OjpBcmVZb3VTdXJlJylcclxuICAgICAgICAuc3Vic2NyaWJlKChzdGF0dXM6IFRvYXN0ZXIuU3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzQ29uZmlybWF0aW9uT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gVG9hc3Rlci5TdGF0dXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGlzdGVuKCkge1xyXG4gICAgZnJvbUV2ZW50KGRvY3VtZW50LCAna2V5dXAnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDE1MCksXHJcbiAgICAgICAgZmlsdGVyKChrZXk6IEtleWJvYXJkRXZlbnQpID0+IGtleSAmJiBrZXkua2V5ID09PSAnRXNjYXBlJyksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmFicENsb3NlKSByZXR1cm47XHJcbiAgICAgIGZyb21FdmVudCh0aGlzLmFicENsb3NlLm5hdGl2ZUVsZW1lbnQsICdjbGljaycpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLm1vZGFsQ29udGVudCksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIHRoaXMuaW5pdC5lbWl0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGbGF0Tm9kZXMobm9kZXM6IE5vZGVMaXN0KTogSFRNTEVsZW1lbnRbXSB7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20obm9kZXMpLnJlZHVjZShcclxuICAgIChhY2MsIHZhbCkgPT4gWy4uLmFjYywgLi4uKHZhbC5jaGlsZE5vZGVzICYmIHZhbC5jaGlsZE5vZGVzLmxlbmd0aCA/IGdldEZsYXROb2Rlcyh2YWwuY2hpbGROb2RlcykgOiBbdmFsXSldLFxyXG4gICAgW10sXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzTmdEaXJ0eShub2RlczogSFRNTEVsZW1lbnRbXSkge1xyXG4gIHJldHVybiBub2Rlcy5maW5kSW5kZXgobm9kZSA9PiAobm9kZS5jbGFzc05hbWUgfHwgJycpLmluZGV4T2YoJ25nLWRpcnR5JykgPiAtMSkgPiAtMTtcclxufVxyXG4iXX0=