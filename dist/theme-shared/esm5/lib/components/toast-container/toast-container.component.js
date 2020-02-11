/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast-container/toast-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toastInOut } from '../../animations/toast.animations';
import { ToasterService } from '../../services/toaster.service';
var ToastContainerComponent = /** @class */ (function () {
    function ToastContainerComponent(toastService) {
        this.toastService = toastService;
        this.toasts = (/** @type {?} */ ([]));
        this.right = '30px';
        this.bottom = '30px';
    }
    /**
     * @return {?}
     */
    ToastContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.toastService.toasts$.subscribe((/**
         * @param {?} toasts
         * @return {?}
         */
        function (toasts) {
            _this.toasts = _this.toastKey
                ? toasts.filter((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) {
                    return t.options && t.options.containerKey !== _this.toastKey;
                }))
                : toasts;
        }));
    };
    /**
     * @param {?} index
     * @param {?} toast
     * @return {?}
     */
    ToastContainerComponent.prototype.trackByFunc = /**
     * @param {?} index
     * @param {?} toast
     * @return {?}
     */
    function (index, toast) {
        if (!toast)
            return null;
        return toast.options.id;
    };
    ToastContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-toast-container',
                    template: "<div\r\n  class=\"toast-container\"\r\n  [style.top]=\"top || 'auto'\"\r\n  [style.right]=\"right || 'auto'\"\r\n  [style.bottom]=\"bottom || 'auto'\"\r\n  [style.left]=\"left || 'auto'\"\r\n  [style.display]=\"toasts.length ? 'flex' : 'none'\"\r\n  [@toastInOut]=\"toasts.length\"\r\n>\r\n  <abp-toast [toast]=\"toast\" *ngFor=\"let toast of toasts; trackBy: trackByFunc\"></abp-toast>\r\n</div>\r\n",
                    animations: [toastInOut],
                    styles: [".toast-container{position:fixed;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:350px;min-height:80px;z-index:1900}.toast-container.new-on-top{flex-direction:column-reverse}"]
                }] }
    ];
    /** @nocollapse */
    ToastContainerComponent.ctorParameters = function () { return [
        { type: ToasterService }
    ]; };
    ToastContainerComponent.propDecorators = {
        top: [{ type: Input }],
        right: [{ type: Input }],
        bottom: [{ type: Input }],
        left: [{ type: Input }],
        toastKey: [{ type: Input }]
    };
    return ToastContainerComponent;
}());
export { ToastContainerComponent };
if (false) {
    /** @type {?} */
    ToastContainerComponent.prototype.toasts;
    /** @type {?} */
    ToastContainerComponent.prototype.top;
    /** @type {?} */
    ToastContainerComponent.prototype.right;
    /** @type {?} */
    ToastContainerComponent.prototype.bottom;
    /** @type {?} */
    ToastContainerComponent.prototype.left;
    /** @type {?} */
    ToastContainerComponent.prototype.toastKey;
    /**
     * @type {?}
     * @private
     */
    ToastContainerComponent.prototype.toastService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWhFO0lBd0JFLGlDQUFvQixZQUE0QjtRQUE1QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFqQmhELFdBQU0sR0FBRyxtQkFBQSxFQUFFLEVBQW1CLENBQUM7UUFNL0IsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUdmLFdBQU0sR0FBRyxNQUFNLENBQUM7SUFRbUMsQ0FBQzs7OztJQUVwRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU07WUFDeEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsUUFBUTtnQkFDekIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O2dCQUFDLFVBQUEsQ0FBQztvQkFDYixPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEtBQUssS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDL0QsQ0FBQyxFQUFDO2dCQUNKLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELDZDQUFXOzs7OztJQUFYLFVBQVksS0FBSyxFQUFFLEtBQUs7UUFDdEIsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNFpBQStDO29CQUUvQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUM7O2lCQUN6Qjs7OztnQkFQUSxjQUFjOzs7c0JBV3BCLEtBQUs7d0JBR0wsS0FBSzt5QkFHTCxLQUFLO3VCQUdMLEtBQUs7MkJBR0wsS0FBSzs7SUFtQlIsOEJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQWxDWSx1QkFBdUI7OztJQUNsQyx5Q0FBK0I7O0lBRS9CLHNDQUNZOztJQUVaLHdDQUNlOztJQUVmLHlDQUNnQjs7SUFFaEIsdUNBQ2E7O0lBRWIsMkNBQ2lCOzs7OztJQUVMLCtDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RvYXN0ZXInO1xyXG5pbXBvcnQgeyB0b2FzdEluT3V0IH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucy90b2FzdC5hbmltYXRpb25zJztcclxuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2FzdGVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtdG9hc3QtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b2FzdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbdG9hc3RJbk91dF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdG9hc3RzID0gW10gYXMgVG9hc3Rlci5Ub2FzdFtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHRvcDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJpZ2h0ID0gJzMwcHgnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGJvdHRvbSA9ICczMHB4JztcclxuXHJcbiAgQElucHV0KClcclxuICBsZWZ0OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdG9hc3RLZXk6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdFNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudG9hc3RTZXJ2aWNlLnRvYXN0cyQuc3Vic2NyaWJlKHRvYXN0cyA9PiB7XHJcbiAgICAgIHRoaXMudG9hc3RzID0gdGhpcy50b2FzdEtleVxyXG4gICAgICAgID8gdG9hc3RzLmZpbHRlcih0ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHQub3B0aW9ucyAmJiB0Lm9wdGlvbnMuY29udGFpbmVyS2V5ICE9PSB0aGlzLnRvYXN0S2V5O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICA6IHRvYXN0cztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUZ1bmMoaW5kZXgsIHRvYXN0KSB7XHJcbiAgICBpZiAoIXRvYXN0KSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiB0b2FzdC5vcHRpb25zLmlkO1xyXG4gIH1cclxufVxyXG4iXX0=