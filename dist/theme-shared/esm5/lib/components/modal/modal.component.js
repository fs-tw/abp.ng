/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal/modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewChildren, } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { fadeAnimation } from '../../animations/modal.animations';
import { Toaster } from '../../models/toaster';
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
    Object.defineProperty(ModalComponent.prototype, "isFormDirty", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var node;
            if (!this.modalContent) {
                node = (/** @type {?} */ (document.getElementById('modal-container')));
            }
            /** @type {?} */
            var nodes = getFlatNodes(((/** @type {?} */ ((node || this.modalContent.nativeElement).querySelector('#abp-modal-body'))))
                .childNodes);
            return hasNgDirty(nodes);
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
                if (status === Toaster.Status.confirm) {
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
                    template: "<div\r\n  *ngIf=\"visible\"\r\n  [@fade]=\"isModalOpen\"\r\n  id=\"modal-container\"\r\n  class=\"modal show {{ modalClass }}\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n>\r\n  <div class=\"modal-backdrop\" (click)=\"close()\"></div>\r\n  <div\r\n    id=\"abp-modal-dialog\"\r\n    class=\"modal-dialog modal-{{ size }}\"\r\n    role=\"document\"\r\n    [class.modal-dialog-centered]=\"centered\"\r\n    #abpModalContent\r\n  >\r\n    <div id=\"abp-modal-content\" class=\"modal-content\">\r\n      <div id=\"abp-modal-header\" class=\"modal-header\">\r\n        <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n        \u200B\r\n        <button id=\"abp-modal-close-button\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div id=\"abp-modal-body\" class=\"modal-body\">\r\n        <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n      </div>\r\n      <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n        <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    animations: [fadeAnimation],
                    styles: [".modal.show{display:block!important}.modal-backdrop{background-color:rgba(0,0,0,.6)}.modal::-webkit-scrollbar{width:7px}.modal::-webkit-scrollbar-track{background:#ddd}.modal::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog{z-index:1050}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUk3RDtJQStGRSx3QkFBb0IsUUFBbUIsRUFBVSxtQkFBd0M7UUFBckUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUF0RGhGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQixTQUFJLEdBQWMsSUFBSSxDQUFDO1FBa0JiLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU1QyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVoQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FB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OEJBQWdDOztJQUVoQyxtQ0FDMkI7O0lBRTNCLG1DQUEwRTs7SUFFMUUsaUNBQXNFOztJQUV0RSxtQ0FBMEU7O0lBRTFFLGtDQUMwQjs7SUFFMUIsc0NBQTBFOztJQUUxRSxvQ0FBdUM7O0lBRXZDLHVDQUErRDs7SUFFL0QsOEJBQW1EOztJQUVuRCxnQ0FBK0M7O0lBRS9DLG1DQUFrRDs7SUFFbEQsa0NBQWlCOztJQUVqQiwrQkFBYzs7SUFFZCxxQ0FBb0I7O0lBRXBCLDRDQUEyQjs7SUFFM0Isa0NBQStCOzs7OztJQWdCbkIsa0NBQTJCOzs7OztJQUFFLDZDQUFnRDs7Ozs7O0FBZ0UzRixTQUFTLFlBQVksQ0FBQyxLQUFlO0lBQ25DLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNOzs7OztJQUM3QixVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssd0JBQ1QsR0FBRyxFQUNILENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUZ2RSxDQUdiLEdBQ0QsRUFBRSxDQUNILENBQUM7QUFDSixDQUFDOzs7OztBQUVELFNBQVMsVUFBVSxDQUFDLEtBQW9CO0lBQ3RDLE9BQU8sS0FBSyxDQUFDLFNBQVM7Ozs7SUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQS9DLENBQStDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBmYWRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucy9tb2RhbC5hbmltYXRpb25zJztcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJy4uLy4uL21vZGVscy90b2FzdGVyJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbmZpcm1hdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgTW9kYWxTaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtmYWRlQW5pbWF0aW9uXSxcclxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcclxuICB9XHJcbiAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJykgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuaXNNb2RhbE9wZW4gPSB2YWx1ZTtcclxuICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpc3RlbigpLCAwKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnbW9kYWwtb3BlbicpO1xyXG4gICAgICB0aGlzLmFwcGVhci5lbWl0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdtb2RhbC1vcGVuJyk7XHJcbiAgICAgIHRoaXMuZGlzYXBwZWFyLmVtaXQoKTtcclxuICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBidXN5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2J1c3k7XHJcbiAgfVxyXG4gIHNldCBidXN5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5hYnBTdWJtaXQgJiYgdGhpcy5hYnBTdWJtaXQgaW5zdGFuY2VvZiBCdXR0b25Db21wb25lbnQpIHtcclxuICAgICAgdGhpcy5hYnBTdWJtaXQubG9hZGluZyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2J1c3kgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGNlbnRlcmVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG1vZGFsQ2xhc3MgPSAnJztcclxuXHJcbiAgQElucHV0KCkgc2l6ZTogTW9kYWxTaXplID0gJ2xnJztcclxuXHJcbiAgQENvbnRlbnRDaGlsZChCdXR0b25Db21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogQnV0dG9uQ29tcG9uZW50IH0pXHJcbiAgYWJwU3VibWl0OiBCdXR0b25Db21wb25lbnQ7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ2FicEhlYWRlcicsIHsgc3RhdGljOiBmYWxzZSB9KSBhYnBIZWFkZXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ2FicEJvZHknLCB7IHN0YXRpYzogZmFsc2UgfSkgYWJwQm9keTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnYWJwRm9vdGVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIGFicEZvb3RlcjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnYWJwQ2xvc2UnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcclxuICBhYnBDbG9zZTogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBAVmlld0NoaWxkKCdhYnBNb2RhbENvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbW9kYWxDb250ZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkcmVuKCdhYnAtYnV0dG9uJykgYWJwQnV0dG9ucztcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbml0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYXBwZWFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGlzYXBwZWFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBfdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBfYnVzeSA9IGZhbHNlO1xyXG5cclxuICBpc01vZGFsT3BlbiA9IGZhbHNlO1xyXG5cclxuICBpc0NvbmZpcm1hdGlvbk9wZW4gPSBmYWxzZTtcclxuXHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBnZXQgaXNGb3JtRGlydHkoKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgbm9kZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBpZiAoIXRoaXMubW9kYWxDb250ZW50KSB7XHJcbiAgICAgIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm9kZXMgPSBnZXRGbGF0Tm9kZXMoXHJcbiAgICAgICgobm9kZSB8fCB0aGlzLm1vZGFsQ29udGVudC5uYXRpdmVFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCcjYWJwLW1vZGFsLWJvZHknKSBhcyBIVE1MRWxlbWVudClcclxuICAgICAgICAuY2hpbGROb2RlcyxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIGhhc05nRGlydHkobm9kZXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLmJ1c3kpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Zvcm1EaXJ0eSkge1xyXG4gICAgICBpZiAodGhpcy5pc0NvbmZpcm1hdGlvbk9wZW4pIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuaXNDb25maXJtYXRpb25PcGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlXHJcbiAgICAgICAgLndhcm4oXHJcbiAgICAgICAgICAnQWJwQWNjb3VudDo6QXJlWW91U3VyZVlvdVdhbnRUb0NhbmNlbEVkaXRpbmdXYXJuaW5nTWVzc2FnZScsXHJcbiAgICAgICAgICAnQWJwQWNjb3VudDo6QXJlWW91U3VyZScsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHN0YXR1czogVG9hc3Rlci5TdGF0dXMpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNDb25maXJtYXRpb25PcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSBUb2FzdGVyLlN0YXR1cy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsaXN0ZW4oKSB7XHJcbiAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTUwKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGZyb21FdmVudCh3aW5kb3csICdiZWZvcmV1bmxvYWQnKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRm9ybURpcnR5KSB7XHJcbiAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlbGV0ZSBldmVudC5yZXR1cm5WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuYWJwQ2xvc2UpIHJldHVybjtcclxuICAgICAgZnJvbUV2ZW50KHRoaXMuYWJwQ2xvc2UubmF0aXZlRWxlbWVudCwgJ2NsaWNrJylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbHRlcigoKSA9PiAhIXRoaXMubW9kYWxDb250ZW50KSxcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgdGhpcy5pbml0LmVtaXQoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZsYXROb2Rlcyhub2RlczogTm9kZUxpc3QpOiBIVE1MRWxlbWVudFtdIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShub2RlcykucmVkdWNlKFxyXG4gICAgKGFjYywgdmFsKSA9PiBbXHJcbiAgICAgIC4uLmFjYyxcclxuICAgICAgLi4uKHZhbC5jaGlsZE5vZGVzICYmIHZhbC5jaGlsZE5vZGVzLmxlbmd0aCA/IGdldEZsYXROb2Rlcyh2YWwuY2hpbGROb2RlcykgOiBbdmFsXSksXHJcbiAgICBdLFxyXG4gICAgW10sXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzTmdEaXJ0eShub2RlczogSFRNTEVsZW1lbnRbXSkge1xyXG4gIHJldHVybiBub2Rlcy5maW5kSW5kZXgobm9kZSA9PiAobm9kZS5jbGFzc05hbWUgfHwgJycpLmluZGV4T2YoJ25nLWRpcnR5JykgPiAtMSkgPiAtMTtcclxufVxyXG4iXX0=