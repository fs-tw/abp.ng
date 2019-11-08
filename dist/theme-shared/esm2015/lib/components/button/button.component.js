/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
export class ButtonComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
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
    /**
     * @return {?}
     */
    get icon() {
        return `${this.loading ? 'fa fa-spinner fa-spin' : this.iconClass || 'd-none'}`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.attributes) {
            Object.keys(this.attributes).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                this.renderer.setAttribute(this.buttonRef.nativeElement, key, this.attributes[key]);
            }));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        event.stopPropagation();
        this.click.next(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        event.stopPropagation();
        this.focus.next(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        event.stopPropagation();
        this.blur.next(event);
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-button',
                // tslint:disable-next-line: component-max-inline-declarations
                template: `
    <button
      #button
      [attr.type]="buttonType"
      [ngClass]="buttonClass"
      [disabled]="loading || disabled"
      (click)="onClick($event)"
      (focus)="onFocus($event)"
      (blur)="onBlur($event)"
    >
      <i [ngClass]="icon" class="mr-1"></i><ng-content></ng-content>
    </button>
  `
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFvQmpILE1BQU0sT0FBTyxlQUFlOzs7O0lBbUMxQixZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBakN2QyxnQkFBVyxHQUFHLGlCQUFpQixDQUFDO1FBR2hDLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFNdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixhQUFRLEdBQUcsS0FBSyxDQUFDOztRQU1FLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDOztRQUd2QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQzs7UUFHdkMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFTZixDQUFDOzs7O0lBSjNDLElBQUksSUFBSTtRQUNOLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUNsRixDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEYsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWlCO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFpQjtRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBaUI7UUFDdEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OztZQTNFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7O2dCQUV0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO2FBQ0Y7Ozs7WUFuQnVFLFNBQVM7OzswQkFxQjlFLEtBQUs7eUJBR0wsS0FBSzt3QkFHTCxLQUFLO3NCQUdMLEtBQUs7dUJBR0wsS0FBSzt5QkFHTCxLQUFLO29CQUlMLE1BQU07b0JBR04sTUFBTTttQkFHTixNQUFNO3dCQUVOLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBM0JyQyxzQ0FDZ0M7O0lBRWhDLHFDQUNzQjs7SUFFdEIsb0NBQ2tCOztJQUVsQixrQ0FDZ0I7O0lBRWhCLG1DQUNpQjs7SUFFakIscUNBQ21DOztJQUduQyxnQ0FBMEQ7O0lBRzFELGdDQUEwRDs7SUFHMUQsK0JBQXlEOztJQUV6RCxvQ0FDeUM7Ozs7O0lBTTdCLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1idXR0b24nLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LW1heC1pbmxpbmUtZGVjbGFyYXRpb25zXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b25cclxuICAgICAgI2J1dHRvblxyXG4gICAgICBbYXR0ci50eXBlXT1cImJ1dHRvblR5cGVcIlxyXG4gICAgICBbbmdDbGFzc109XCJidXR0b25DbGFzc1wiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJsb2FkaW5nIHx8IGRpc2FibGVkXCJcclxuICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxyXG4gICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICAgIDxpIFtuZ0NsYXNzXT1cImljb25cIiBjbGFzcz1cIm1yLTFcIj48L2k+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9idXR0b24+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBidXR0b25DbGFzcyA9ICdidG4gYnRuLXByaW1hcnknO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGJ1dHRvblR5cGUgPSAnYnV0dG9uJztcclxuXHJcbiAgQElucHV0KClcclxuICBpY29uQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGVzOiBBQlAuRGljdGlvbmFyeTxzdHJpbmc+O1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1uYXRpdmVcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW5hdGl2ZVxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtbmF0aXZlXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvbicsIHsgc3RhdGljOiB0cnVlIH0pXHJcbiAgYnV0dG9uUmVmOiBFbGVtZW50UmVmPEhUTUxCdXR0b25FbGVtZW50PjtcclxuXHJcbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmxvYWRpbmcgPyAnZmEgZmEtc3Bpbm5lciBmYS1zcGluJyA6IHRoaXMuaWNvbkNsYXNzIHx8ICdkLW5vbmUnfWA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuYXR0cmlidXRlcykge1xyXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmF0dHJpYnV0ZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmJ1dHRvblJlZi5uYXRpdmVFbGVtZW50LCBrZXksIHRoaXMuYXR0cmlidXRlc1trZXldKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY2xpY2submV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZm9jdXMubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5ibHVyLm5leHQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=