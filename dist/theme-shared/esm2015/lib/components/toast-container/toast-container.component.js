/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast-container/toast-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toastInOut } from '../../animations/toast.animations';
export class ToastContainerComponent {
    constructor() {
        this.toasts = (/** @type {?} */ ([]));
        this.right = '30px';
        this.bottom = '30px';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.toasts$.subscribe((/**
         * @param {?} toasts
         * @return {?}
         */
        toasts => {
            this.toasts = this.toastKey
                ? toasts.filter((/**
                 * @param {?} t
                 * @return {?}
                 */
                t => {
                    return t.options && t.options.containerKey !== this.toastKey;
                }))
                : toasts;
        }));
    }
    /**
     * @param {?} index
     * @param {?} toast
     * @return {?}
     */
    trackByFunc(index, toast) {
        if (!toast)
            return null;
        return toast.options.id;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFVL0QsTUFBTSxPQUFPLHVCQUF1QjtJQU5wQztRQVNFLFdBQU0sR0FBRyxtQkFBQSxFQUFFLEVBQW1CLENBQUM7UUFNL0IsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUdmLFdBQU0sR0FBRyxNQUFNLENBQUM7SUFzQmxCLENBQUM7Ozs7SUFkQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUTtnQkFDekIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNoQixPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDL0QsQ0FBQyxFQUFDO2dCQUNKLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSztRQUN0QixJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw0WkFBK0M7Z0JBRS9DLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQzs7YUFDekI7OztrQkFNRSxLQUFLO29CQUdMLEtBQUs7cUJBR0wsS0FBSzttQkFHTCxLQUFLO3VCQUdMLEtBQUs7Ozs7SUFoQk4sMENBQXdDOztJQUV4Qyx5Q0FBK0I7O0lBRS9CLHNDQUNZOztJQUVaLHdDQUNlOztJQUVmLHlDQUNnQjs7SUFFaEIsdUNBQ2E7O0lBRWIsMkNBQ2lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvYXN0SW5PdXQgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zL3RvYXN0LmFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RvYXN0ZXInO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC10b2FzdC1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFt0b2FzdEluT3V0XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Q29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0b2FzdHMkOiBSZXBsYXlTdWJqZWN0PFRvYXN0ZXIuVG9hc3RbXT47XHJcblxyXG4gIHRvYXN0cyA9IFtdIGFzIFRvYXN0ZXIuVG9hc3RbXTtcclxuXHJcbiAgQElucHV0KClcclxuICB0b3A6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICByaWdodCA9ICczMHB4JztcclxuXHJcbiAgQElucHV0KClcclxuICBib3R0b20gPSAnMzBweCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbGVmdDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHRvYXN0S2V5OiBzdHJpbmc7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50b2FzdHMkLnN1YnNjcmliZSh0b2FzdHMgPT4ge1xyXG4gICAgICB0aGlzLnRvYXN0cyA9IHRoaXMudG9hc3RLZXlcclxuICAgICAgICA/IHRvYXN0cy5maWx0ZXIodCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0Lm9wdGlvbnMgJiYgdC5vcHRpb25zLmNvbnRhaW5lcktleSAhPT0gdGhpcy50b2FzdEtleTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgOiB0b2FzdHM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRyYWNrQnlGdW5jKGluZGV4LCB0b2FzdCkge1xyXG4gICAgaWYgKCF0b2FzdCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gdG9hc3Qub3B0aW9ucy5pZDtcclxuICB9XHJcbn1cclxuIl19