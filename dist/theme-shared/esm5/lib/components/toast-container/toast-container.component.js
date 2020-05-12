/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast-container/toast-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toastInOut } from '../../animations/toast.animations';
var ToastContainerComponent = /** @class */ (function () {
    function ToastContainerComponent() {
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
        this.toasts$.subscribe((/**
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
    ToastContainerComponent.prototype.toasts$;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFJL0Q7SUFBQTtRQVNFLFdBQU0sR0FBRyxtQkFBQSxFQUFFLEVBQW1CLENBQUM7UUFNL0IsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUdmLFdBQU0sR0FBRyxNQUFNLENBQUM7SUFzQmxCLENBQUM7Ozs7SUFkQywwQ0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTTtZQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxRQUFRO2dCQUN6QixDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQSxDQUFDO29CQUNiLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksS0FBSyxLQUFJLENBQUMsUUFBUSxDQUFDO2dCQUMvRCxDQUFDLEVBQUM7Z0JBQ0osQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNiLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsNkNBQVc7Ozs7O0lBQVgsVUFBWSxLQUFLLEVBQUUsS0FBSztRQUN0QixJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw0WkFBK0M7b0JBRS9DLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQzs7aUJBQ3pCOzs7c0JBTUUsS0FBSzt3QkFHTCxLQUFLO3lCQUdMLEtBQUs7dUJBR0wsS0FBSzsyQkFHTCxLQUFLOztJQWlCUiw4QkFBQztDQUFBLEFBeENELElBd0NDO1NBbENZLHVCQUF1Qjs7O0lBQ2xDLDBDQUF3Qzs7SUFFeEMseUNBQStCOztJQUUvQixzQ0FDWTs7SUFFWix3Q0FDZTs7SUFFZix5Q0FDZ0I7O0lBRWhCLHVDQUNhOztJQUViLDJDQUNpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b2FzdEluT3V0IH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucy90b2FzdC5hbmltYXRpb25zJztcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJy4uLy4uL21vZGVscy90b2FzdGVyJztcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtdG9hc3QtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b2FzdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbdG9hc3RJbk91dF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdG9hc3RzJDogUmVwbGF5U3ViamVjdDxUb2FzdGVyLlRvYXN0W10+O1xyXG5cclxuICB0b2FzdHMgPSBbXSBhcyBUb2FzdGVyLlRvYXN0W107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdG9wOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmlnaHQgPSAnMzBweCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYm90dG9tID0gJzMwcHgnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGxlZnQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICB0b2FzdEtleTogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudG9hc3RzJC5zdWJzY3JpYmUodG9hc3RzID0+IHtcclxuICAgICAgdGhpcy50b2FzdHMgPSB0aGlzLnRvYXN0S2V5XHJcbiAgICAgICAgPyB0b2FzdHMuZmlsdGVyKHQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdC5vcHRpb25zICYmIHQub3B0aW9ucy5jb250YWluZXJLZXkgIT09IHRoaXMudG9hc3RLZXk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIDogdG9hc3RzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5RnVuYyhpbmRleCwgdG9hc3QpIHtcclxuICAgIGlmICghdG9hc3QpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIHRvYXN0Lm9wdGlvbnMuaWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==