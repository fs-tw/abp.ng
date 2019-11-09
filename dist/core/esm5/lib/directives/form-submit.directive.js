/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/form-submit.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output, Self } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { takeUntilDestroy } from '../utils';
var FormSubmitDirective = /** @class */ (function () {
    function FormSubmitDirective(formGroupDirective, host, cdRef) {
        this.formGroupDirective = formGroupDirective;
        this.host = host;
        this.cdRef = cdRef;
        this.ngSubmit = new EventEmitter();
        this.executedNgSubmit = false;
    }
    /**
     * @return {?}
     */
    FormSubmitDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formGroupDirective.ngSubmit.pipe(takeUntilDestroy(this)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.markAsDirty();
            _this.executedNgSubmit = true;
        }));
        fromEvent((/** @type {?} */ (this.host.nativeElement)), 'keyup')
            .pipe(debounceTime(200), filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Enter'; })), takeUntilDestroy(this))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (!_this.executedNgSubmit) {
                _this.host.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            }
            _this.executedNgSubmit = false;
        }));
        fromEvent(this.host.nativeElement, 'submit')
            .pipe(takeUntilDestroy(this), filter((/**
         * @return {?}
         */
        function () { return !_this.notValidateOnSubmit && typeof _this.notValidateOnSubmit !== 'string'; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (!_this.executedNgSubmit) {
                _this.markAsDirty();
            }
        }));
    };
    /**
     * @return {?}
     */
    FormSubmitDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    FormSubmitDirective.prototype.markAsDirty = /**
     * @return {?}
     */
    function () {
        var form = this.formGroupDirective.form;
        setDirty((/** @type {?} */ (form.controls)));
        form.markAsDirty();
        this.cdRef.detectChanges();
    };
    FormSubmitDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: 'form[ngSubmit][formGroup]'
                },] }
    ];
    /** @nocollapse */
    FormSubmitDirective.ctorParameters = function () { return [
        { type: FormGroupDirective, decorators: [{ type: Self }] },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    FormSubmitDirective.propDecorators = {
        notValidateOnSubmit: [{ type: Input }],
        ngSubmit: [{ type: Output }]
    };
    return FormSubmitDirective;
}());
export { FormSubmitDirective };
if (false) {
    /** @type {?} */
    FormSubmitDirective.prototype.notValidateOnSubmit;
    /** @type {?} */
    FormSubmitDirective.prototype.ngSubmit;
    /** @type {?} */
    FormSubmitDirective.prototype.executedNgSubmit;
    /**
     * @type {?}
     * @private
     */
    FormSubmitDirective.prototype.formGroupDirective;
    /**
     * @type {?}
     * @private
     */
    FormSubmitDirective.prototype.host;
    /**
     * @type {?}
     * @private
     */
    FormSubmitDirective.prototype.cdRef;
}
/**
 * @param {?} controls
 * @return {?}
 */
function setDirty(controls) {
    if (Array.isArray(controls)) {
        controls.forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            setDirty((/** @type {?} */ (group.controls)));
        }));
        return;
    }
    Object.keys(controls).forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        controls[key].markAsDirty();
        controls[key].updateValueAndValidity();
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zdWJtaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLElBQUksRUFDTCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQTBCLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUk1QztJQVlFLDZCQUNrQixrQkFBc0MsRUFDOUMsSUFBaUMsRUFDakMsS0FBd0I7UUFGaEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUM5QyxTQUFJLEdBQUosSUFBSSxDQUE2QjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQVBmLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELHFCQUFnQixHQUFHLEtBQUssQ0FBQztJQU10QixDQUFDOzs7O0lBRUosc0NBQVE7OztJQUFSO1FBQUEsaUJBOEJDO1FBN0JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDdEUsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsbUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQWUsRUFBRSxPQUFPLENBQUM7YUFDdkQsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsTUFBTTs7OztRQUFDLFVBQUMsR0FBa0IsSUFBSyxPQUFBLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBMUIsQ0FBMEIsRUFBQyxFQUMxRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FDdkI7YUFDQSxTQUFTOzs7UUFBQztZQUNULElBQUksQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFCLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDakc7WUFFRCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO1FBRUwsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQ0gsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQ3RCLE1BQU07OztRQUFDLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsSUFBSSxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsS0FBSyxRQUFRLEVBQXpFLENBQXlFLEVBQUMsQ0FDeEY7YUFDQSxTQUFTOzs7UUFBQztZQUNULElBQUksQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWCxjQUFxQixDQUFDOzs7O0lBRXRCLHlDQUFXOzs7SUFBWDtRQUNVLElBQUEsbUNBQUk7UUFFWixRQUFRLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBa0MsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQTNERixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOzs7O2dCQVZnQyxrQkFBa0IsdUJBb0I5QyxJQUFJO2dCQTVCUCxVQUFVO2dCQUZWLGlCQUFpQjs7O3NDQXNCaEIsS0FBSzsyQkFHTCxNQUFNOztJQW9EVCwwQkFBQztDQUFBLEFBNURELElBNERDO1NBeERZLG1CQUFtQjs7O0lBQzlCLGtEQUNzQzs7SUFFdEMsdUNBQWlEOztJQUVqRCwrQ0FBeUI7Ozs7O0lBR3ZCLGlEQUFzRDs7Ozs7SUFDdEQsbUNBQXlDOzs7OztJQUN6QyxvQ0FBZ0M7Ozs7OztBQStDcEMsU0FBUyxRQUFRLENBQUMsUUFBa0I7SUFDbEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzNCLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ3BCLFFBQVEsQ0FBQyxtQkFBQSxLQUFLLENBQUMsUUFBUSxFQUFrQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPO0tBQ1I7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU87Ozs7SUFBQyxVQUFBLEdBQUc7UUFDL0IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3pDLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3kgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG50eXBlIENvbnRyb2xzID0geyBba2V5OiBzdHJpbmddOiBGb3JtQ29udHJvbCB9IHwgRm9ybUdyb3VwW107XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybVtuZ1N1Ym1pdF1bZm9ybUdyb3VwXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1TdWJtaXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBub3RWYWxpZGF0ZU9uU3VibWl0OiBzdHJpbmcgfCBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbmdTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGV4ZWN1dGVkTmdTdWJtaXQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAU2VsZigpIHByaXZhdGUgZm9ybUdyb3VwRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmUsXHJcbiAgICBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTEZvcm1FbGVtZW50PixcclxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlLm5nU3VibWl0LnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgICB0aGlzLmV4ZWN1dGVkTmdTdWJtaXQgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnJvbUV2ZW50KHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50LCAna2V5dXAnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFbnRlcicpLFxyXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3kodGhpcylcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuZXhlY3V0ZWROZ1N1Ym1pdCkge1xyXG4gICAgICAgICAgdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N1Ym1pdCcsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmV4ZWN1dGVkTmdTdWJtaXQgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZnJvbUV2ZW50KHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LCAnc3VibWl0JylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveSh0aGlzKSxcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMubm90VmFsaWRhdGVPblN1Ym1pdCAmJiB0eXBlb2YgdGhpcy5ub3RWYWxpZGF0ZU9uU3VibWl0ICE9PSAnc3RyaW5nJylcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuZXhlY3V0ZWROZ1N1Ym1pdCkge1xyXG4gICAgICAgICAgdGhpcy5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XHJcblxyXG4gIG1hcmtBc0RpcnR5KCkge1xyXG4gICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLmZvcm1Hcm91cERpcmVjdGl2ZTtcclxuXHJcbiAgICBzZXREaXJ0eShmb3JtLmNvbnRyb2xzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybUNvbnRyb2wgfSk7XHJcbiAgICBmb3JtLm1hcmtBc0RpcnR5KCk7XHJcblxyXG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREaXJ0eShjb250cm9sczogQ29udHJvbHMpIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShjb250cm9scykpIHtcclxuICAgIGNvbnRyb2xzLmZvckVhY2goZ3JvdXAgPT4ge1xyXG4gICAgICBzZXREaXJ0eShncm91cC5jb250cm9scyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Db250cm9sIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBPYmplY3Qua2V5cyhjb250cm9scykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgY29udHJvbHNba2V5XS5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgY29udHJvbHNba2V5XS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgfSk7XHJcbn1cclxuIl19