/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(renderer) {
        this.renderer = renderer;
        this.buttonClass = 'btn btn-primary';
        this.buttonType = 'button';
        this.loading = false;
        this.disabled = false;
        // tslint:disable-next-line: no-output-native
        this.click = new EventEmitter();
        // tslint:disable-next-line: no-output-native
        this.focus = new EventEmitter();
        // tslint:disable-next-line: no-output-native
        this.blur = new EventEmitter();
    }
    Object.defineProperty(ButtonComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return "" + (this.loading ? 'fa fa-spinner fa-spin' : this.iconClass || 'd-none');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.attributes) {
            Object.keys(this.attributes).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                _this.renderer.setAttribute(_this.buttonRef.nativeElement, key, _this.attributes[key]);
            }));
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ButtonComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.click.next(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ButtonComponent.prototype.onFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.focus.next(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ButtonComponent.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.blur.next(event);
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-button',
                    // tslint:disable-next-line: component-max-inline-declarations
                    template: "\n    <button\n      #button\n      [attr.type]=\"buttonType\"\n      [ngClass]=\"buttonClass\"\n      [disabled]=\"loading || disabled\"\n      (click)=\"onClick($event)\"\n      (focus)=\"onFocus($event)\"\n      (blur)=\"onBlur($event)\"\n    >\n      <i [ngClass]=\"icon\" class=\"mr-1\"></i><ng-content></ng-content>\n    </button>\n  "
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    ButtonComponent.propDecorators = {
        buttonClass: [{ type: Input }],
        buttonType: [{ type: Input }],
        iconClass: [{ type: Input }],
        loading: [{ type: Input }],
        disabled: [{ type: Input }],
        attributes: [{ type: Input }],
        click: [{ type: Output }],
        focus: [{ type: Output }],
        blur: [{ type: Output }],
        buttonRef: [{ type: ViewChild, args: ['button', { static: true },] }]
    };
    return ButtonComponent;
}());
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.buttonClass;
    /** @type {?} */
    ButtonComponent.prototype.buttonType;
    /** @type {?} */
    ButtonComponent.prototype.iconClass;
    /** @type {?} */
    ButtonComponent.prototype.loading;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.attributes;
    /** @type {?} */
    ButtonComponent.prototype.click;
    /** @type {?} */
    ButtonComponent.prototype.focus;
    /** @type {?} */
    ButtonComponent.prototype.blur;
    /** @type {?} */
    ButtonComponent.prototype.buttonRef;
    /**
     * @type {?}
     * @private
     */
    ButtonComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHakg7SUFvREUseUJBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFqQ3ZDLGdCQUFXLEdBQUcsaUJBQWlCLENBQUM7UUFHaEMsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQU10QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7O1FBTUUsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7O1FBR3ZDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDOztRQUd2QyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQVNmLENBQUM7SUFKM0Msc0JBQUksaUNBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sTUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUUsQ0FBQztRQUNsRixDQUFDOzs7T0FBQTs7OztJQUlELGtDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLEdBQUc7Z0JBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEYsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLEtBQWlCO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELGlDQUFPOzs7O0lBQVAsVUFBUSxLQUFpQjtRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxnQ0FBTTs7OztJQUFOLFVBQU8sS0FBaUI7UUFDdEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O2dCQTNFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7O29CQUV0QixRQUFRLEVBQUUsc1ZBWVQ7aUJBQ0Y7Ozs7Z0JBbkJ1RSxTQUFTOzs7OEJBcUI5RSxLQUFLOzZCQUdMLEtBQUs7NEJBR0wsS0FBSzswQkFHTCxLQUFLOzJCQUdMLEtBQUs7NkJBR0wsS0FBSzt3QkFJTCxNQUFNO3dCQUdOLE1BQU07dUJBR04sTUFBTTs0QkFFTixTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUErQnZDLHNCQUFDO0NBQUEsQUE1RUQsSUE0RUM7U0EzRFksZUFBZTs7O0lBQzFCLHNDQUNnQzs7SUFFaEMscUNBQ3NCOztJQUV0QixvQ0FDa0I7O0lBRWxCLGtDQUNnQjs7SUFFaEIsbUNBQ2lCOztJQUVqQixxQ0FDbUM7O0lBR25DLGdDQUEwRDs7SUFHMUQsZ0NBQTBEOztJQUcxRCwrQkFBeUQ7O0lBRXpELG9DQUN5Qzs7Ozs7SUFNN0IsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWJ1dHRvbicsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtbWF4LWlubGluZS1kZWNsYXJhdGlvbnNcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICAjYnV0dG9uXHJcbiAgICAgIFthdHRyLnR5cGVdPVwiYnV0dG9uVHlwZVwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cImJ1dHRvbkNsYXNzXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImxvYWRpbmcgfHwgZGlzYWJsZWRcIlxyXG4gICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcclxuICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXHJcbiAgICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPGkgW25nQ2xhc3NdPVwiaWNvblwiIGNsYXNzPVwibXItMVwiPjwvaT48bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIGJ1dHRvbkNsYXNzID0gJ2J0biBidG4tcHJpbWFyeSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYnV0dG9uVHlwZSA9ICdidXR0b24nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGljb25DbGFzczogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGF0dHJpYnV0ZXM6IEFCUC5EaWN0aW9uYXJ5PHN0cmluZz47XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW5hdGl2ZVxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtbmF0aXZlXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1uYXRpdmVcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYnV0dG9uJywgeyBzdGF0aWM6IHRydWUgfSlcclxuICBidXR0b25SZWY6IEVsZW1lbnRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xyXG5cclxuICBnZXQgaWNvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMubG9hZGluZyA/ICdmYSBmYS1zcGlubmVyIGZhLXNwaW4nIDogdGhpcy5pY29uQ2xhc3MgfHwgJ2Qtbm9uZSd9YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuYXR0cmlidXRlcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuYnV0dG9uUmVmLm5hdGl2ZUVsZW1lbnQsIGtleSwgdGhpcy5hdHRyaWJ1dGVzW2tleV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5jbGljay5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5mb2N1cy5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uQmx1cihldmVudDogRm9jdXNFdmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmJsdXIubmV4dChldmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==