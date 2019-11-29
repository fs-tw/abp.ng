/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(renderer) {
        this.renderer = renderer;
        this.buttonId = '';
        this.buttonClass = 'btn btn-primary';
        this.buttonType = 'button';
        this.loading = false;
        this.disabled = false;
        /*
           *
           *
           * @deprecated use abpClick instead
           */
        // tslint:disable-next-line: no-output-native
        this.click = new EventEmitter();
        /*
           *
           *
           * @deprecated use abpFocus instead
           */
        // tslint:disable-next-line: no-output-native
        this.focus = new EventEmitter();
        /*
           *
           *
           * @deprecated use abpBlur instead
           */
        // tslint:disable-next-line: no-output-native
        this.blur = new EventEmitter();
        // tslint:disable-next-line: no-output-native
        this.abpClick = new EventEmitter();
        // tslint:disable-next-line: no-output-native
        this.abpFocus = new EventEmitter();
        // tslint:disable-next-line: no-output-native
        this.abpBlur = new EventEmitter();
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
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-button',
                    // tslint:disable-next-line: component-max-inline-declarations
                    template: "\n    <button\n      #button\n      [id]=\"buttonId\"\n      [attr.type]=\"buttonType\"\n      [ngClass]=\"buttonClass\"\n      [disabled]=\"loading || disabled\"\n      (click.stop)=\"click.next($event); abpClick.next($event)\"\n      (focus)=\"focus.next($event); abpFocus.next($event)\"\n      (blur)=\"blur.next($event); abpBlur.next($event)\"\n    >\n      <i [ngClass]=\"icon\" class=\"mr-1\"></i><ng-content></ng-content>\n    </button>\n  "
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    ButtonComponent.propDecorators = {
        buttonId: [{ type: Input }],
        buttonClass: [{ type: Input }],
        buttonType: [{ type: Input }],
        iconClass: [{ type: Input }],
        loading: [{ type: Input }],
        disabled: [{ type: Input }],
        attributes: [{ type: Input }],
        click: [{ type: Output }],
        focus: [{ type: Output }],
        blur: [{ type: Output }],
        abpClick: [{ type: Output }],
        abpFocus: [{ type: Output }],
        abpBlur: [{ type: Output }],
        buttonRef: [{ type: ViewChild, args: ['button', { static: true },] }]
    };
    return ButtonComponent;
}());
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.buttonId;
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
    ButtonComponent.prototype.abpClick;
    /** @type {?} */
    ButtonComponent.prototype.abpFocus;
    /** @type {?} */
    ButtonComponent.prototype.abpBlur;
    /** @type {?} */
    ButtonComponent.prototype.buttonRef;
    /**
     * @type {?}
     * @private
     */
    ButtonComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2pIO0lBZ0ZFLHlCQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBNUR2QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBR2QsZ0JBQVcsR0FBRyxpQkFBaUIsQ0FBQztRQUdoQyxlQUFVLEdBQUcsUUFBUSxDQUFDO1FBTXRCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHaEIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7Ozs7OztRQVdFLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDOzs7Ozs7O1FBUXZDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDOzs7Ozs7O1FBUXZDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDOztRQUd0QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQzs7UUFHMUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7O1FBRzFDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBU2xCLENBQUM7SUFKM0Msc0JBQUksaUNBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sTUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUUsQ0FBQztRQUNsRixDQUFDOzs7T0FBQTs7OztJQUlELGtDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLEdBQUc7Z0JBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEYsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQXhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7O29CQUV0QixRQUFRLEVBQUUsaWNBYVQ7aUJBQ0Y7Ozs7Z0JBcEJ1RSxTQUFTOzs7MkJBc0I5RSxLQUFLOzhCQUdMLEtBQUs7NkJBR0wsS0FBSzs0QkFHTCxLQUFLOzBCQUdMLEtBQUs7MkJBR0wsS0FBSzs2QkFHTCxLQUFLO3dCQVNMLE1BQU07d0JBUU4sTUFBTTt1QkFRTixNQUFNOzJCQUdOLE1BQU07MkJBR04sTUFBTTswQkFHTixNQUFNOzRCQUVOLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQWdCdkMsc0JBQUM7Q0FBQSxBQXpGRCxJQXlGQztTQXZFWSxlQUFlOzs7SUFDMUIsbUNBQ2M7O0lBRWQsc0NBQ2dDOztJQUVoQyxxQ0FDc0I7O0lBRXRCLG9DQUNrQjs7SUFFbEIsa0NBQ2dCOztJQUVoQixtQ0FDaUI7O0lBRWpCLHFDQUNtQzs7SUFRbkMsZ0NBQTBEOztJQVExRCxnQ0FBMEQ7O0lBUTFELCtCQUF5RDs7SUFHekQsbUNBQTZEOztJQUc3RCxtQ0FBNkQ7O0lBRzdELGtDQUE0RDs7SUFFNUQsb0NBQ3lDOzs7OztJQU03QixtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtYnV0dG9uJyxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1tYXgtaW5saW5lLWRlY2xhcmF0aW9uc1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgICNidXR0b25cclxuICAgICAgW2lkXT1cImJ1dHRvbklkXCJcclxuICAgICAgW2F0dHIudHlwZV09XCJidXR0b25UeXBlXCJcclxuICAgICAgW25nQ2xhc3NdPVwiYnV0dG9uQ2xhc3NcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwibG9hZGluZyB8fCBkaXNhYmxlZFwiXHJcbiAgICAgIChjbGljay5zdG9wKT1cImNsaWNrLm5leHQoJGV2ZW50KTsgYWJwQ2xpY2submV4dCgkZXZlbnQpXCJcclxuICAgICAgKGZvY3VzKT1cImZvY3VzLm5leHQoJGV2ZW50KTsgYWJwRm9jdXMubmV4dCgkZXZlbnQpXCJcclxuICAgICAgKGJsdXIpPVwiYmx1ci5uZXh0KCRldmVudCk7IGFicEJsdXIubmV4dCgkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPGkgW25nQ2xhc3NdPVwiaWNvblwiIGNsYXNzPVwibXItMVwiPjwvaT48bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIGJ1dHRvbklkID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYnV0dG9uQ2xhc3MgPSAnYnRuIGJ0bi1wcmltYXJ5JztcclxuXHJcbiAgQElucHV0KClcclxuICBidXR0b25UeXBlID0gJ2J1dHRvbic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaWNvbkNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYXR0cmlidXRlczogQUJQLkRpY3Rpb25hcnk8c3RyaW5nPjtcclxuXHJcbiAgLypcclxuICAgKlxyXG4gICAqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGFicENsaWNrIGluc3RlYWRcclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1uYXRpdmVcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qXHJcbiAgICpcclxuICAgKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZSBhYnBGb2N1cyBpbnN0ZWFkXHJcbiAgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtbmF0aXZlXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG5cclxuICAvKlxyXG4gICAqXHJcbiAgICpcclxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYWJwQmx1ciBpbnN0ZWFkXHJcbiAgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtbmF0aXZlXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW5hdGl2ZVxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBhYnBDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtbmF0aXZlXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFicEZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1uYXRpdmVcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYWJwQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYnV0dG9uJywgeyBzdGF0aWM6IHRydWUgfSlcclxuICBidXR0b25SZWY6IEVsZW1lbnRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xyXG5cclxuICBnZXQgaWNvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMubG9hZGluZyA/ICdmYSBmYS1zcGlubmVyIGZhLXNwaW4nIDogdGhpcy5pY29uQ2xhc3MgfHwgJ2Qtbm9uZSd9YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuYXR0cmlidXRlcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuYnV0dG9uUmVmLm5hdGl2ZUVsZW1lbnQsIGtleSwgdGhpcy5hdHRyaWJ1dGVzW2tleV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19