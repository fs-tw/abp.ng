/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast-container/toast-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toastInOut } from '../../animations/toast.animations';
import { ToasterService } from '../../services/toaster.service';
export class ToastContainerComponent {
    /**
     * @param {?} toastService
     */
    constructor(toastService) {
        this.toastService = toastService;
        this.toasts = (/** @type {?} */ ([]));
        this.right = '30px';
        this.bottom = '30px';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.toastService.toasts$.subscribe((/**
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
                styles: [".toast-container{position:fixed;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end;min-width:350px;min-height:80px;z-index:1900}.toast-container.new-on-top{-webkit-box-orient:vertical;-webkit-box-direction:reverse;flex-direction:column-reverse}"]
            }] }
];
/** @nocollapse */
ToastContainerComponent.ctorParameters = () => [
    { type: ToasterService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBUWhFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFrQmxDLFlBQW9CLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQWpCaEQsV0FBTSxHQUFHLG1CQUFBLEVBQUUsRUFBbUIsQ0FBQztRQU0vQixVQUFLLEdBQUcsTUFBTSxDQUFDO1FBR2YsV0FBTSxHQUFHLE1BQU0sQ0FBQztJQVFtQyxDQUFDOzs7O0lBRXBELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUTtnQkFDekIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNoQixPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDL0QsQ0FBQyxFQUFDO2dCQUNKLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSztRQUN0QixJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw0WkFBK0M7Z0JBRS9DLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQzs7YUFDekI7Ozs7WUFQUSxjQUFjOzs7a0JBV3BCLEtBQUs7b0JBR0wsS0FBSztxQkFHTCxLQUFLO21CQUdMLEtBQUs7dUJBR0wsS0FBSzs7OztJQWROLHlDQUErQjs7SUFFL0Isc0NBQ1k7O0lBRVosd0NBQ2U7O0lBRWYseUNBQ2dCOztJQUVoQix1Q0FDYTs7SUFFYiwyQ0FDaUI7Ozs7O0lBRUwsK0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9hc3Rlcic7XHJcbmltcG9ydCB7IHRvYXN0SW5PdXQgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zL3RvYXN0LmFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvYXN0ZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC10b2FzdC1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFt0b2FzdEluT3V0XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Q29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0b2FzdHMgPSBbXSBhcyBUb2FzdGVyLlRvYXN0W107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdG9wOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmlnaHQgPSAnMzBweCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYm90dG9tID0gJzMwcHgnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGxlZnQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICB0b2FzdEtleTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50b2FzdFNlcnZpY2UudG9hc3RzJC5zdWJzY3JpYmUodG9hc3RzID0+IHtcclxuICAgICAgdGhpcy50b2FzdHMgPSB0aGlzLnRvYXN0S2V5XHJcbiAgICAgICAgPyB0b2FzdHMuZmlsdGVyKHQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdC5vcHRpb25zICYmIHQub3B0aW9ucy5jb250YWluZXJLZXkgIT09IHRoaXMudG9hc3RLZXk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIDogdG9hc3RzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5RnVuYyhpbmRleCwgdG9hc3QpIHtcclxuICAgIGlmICghdG9hc3QpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIHRvYXN0Lm9wdGlvbnMuaWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==