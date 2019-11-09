/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button/button.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBb0JqSCxNQUFNLE9BQU8sZUFBZTs7OztJQW1DMUIsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWpDdkMsZ0JBQVcsR0FBRyxpQkFBaUIsQ0FBQztRQUdoQyxlQUFVLEdBQUcsUUFBUSxDQUFDO1FBTXRCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHaEIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7UUFNRSxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQzs7UUFHdkMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7O1FBR3ZDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBU2YsQ0FBQzs7OztJQUozQyxJQUFJLElBQUk7UUFDTixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxFQUFFLENBQUM7SUFDbEYsQ0FBQzs7OztJQUlELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFpQjtRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBaUI7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWlCO1FBQ3RCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7WUEzRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZOztnQkFFdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDthQUNGOzs7O1lBbkJ1RSxTQUFTOzs7MEJBcUI5RSxLQUFLO3lCQUdMLEtBQUs7d0JBR0wsS0FBSztzQkFHTCxLQUFLO3VCQUdMLEtBQUs7eUJBR0wsS0FBSztvQkFJTCxNQUFNO29CQUdOLE1BQU07bUJBR04sTUFBTTt3QkFFTixTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQTNCckMsc0NBQ2dDOztJQUVoQyxxQ0FDc0I7O0lBRXRCLG9DQUNrQjs7SUFFbEIsa0NBQ2dCOztJQUVoQixtQ0FDaUI7O0lBRWpCLHFDQUNtQzs7SUFHbkMsZ0NBQTBEOztJQUcxRCxnQ0FBMEQ7O0lBRzFELCtCQUF5RDs7SUFFekQsb0NBQ3lDOzs7OztJQU03QixtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtYnV0dG9uJyxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1tYXgtaW5saW5lLWRlY2xhcmF0aW9uc1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgICNidXR0b25cclxuICAgICAgW2F0dHIudHlwZV09XCJidXR0b25UeXBlXCJcclxuICAgICAgW25nQ2xhc3NdPVwiYnV0dG9uQ2xhc3NcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwibG9hZGluZyB8fCBkaXNhYmxlZFwiXHJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxyXG4gICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcclxuICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgICA8aSBbbmdDbGFzc109XCJpY29uXCIgY2xhc3M9XCJtci0xXCI+PC9pPjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvYnV0dG9uPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgYnV0dG9uQ2xhc3MgPSAnYnRuIGJ0bi1wcmltYXJ5JztcclxuXHJcbiAgQElucHV0KClcclxuICBidXR0b25UeXBlID0gJ2J1dHRvbic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaWNvbkNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYXR0cmlidXRlczogQUJQLkRpY3Rpb25hcnk8c3RyaW5nPjtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtbmF0aXZlXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1uYXRpdmVcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW5hdGl2ZVxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdidXR0b24nLCB7IHN0YXRpYzogdHJ1ZSB9KVxyXG4gIGJ1dHRvblJlZjogRWxlbWVudFJlZjxIVE1MQnV0dG9uRWxlbWVudD47XHJcblxyXG4gIGdldCBpY29uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5sb2FkaW5nID8gJ2ZhIGZhLXNwaW5uZXIgZmEtc3BpbicgOiB0aGlzLmljb25DbGFzcyB8fCAnZC1ub25lJ31gO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgT2JqZWN0LmtleXModGhpcy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5idXR0b25SZWYubmF0aXZlRWxlbWVudCwga2V5LCB0aGlzLmF0dHJpYnV0ZXNba2V5XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmNsaWNrLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cyhldmVudDogRm9jdXNFdmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmZvY3VzLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuYmx1ci5uZXh0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19