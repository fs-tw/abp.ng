/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, Renderer2, } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(renderer) {
        this.renderer = renderer;
        this.buttonId = '';
        this.buttonClass = 'btn btn-primary';
        this.buttonType = 'button';
        this.loading = false;
        this.disabled = false;
        // tslint:disable
        this.click = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        // tslint:enable
        this.abpClick = new EventEmitter();
        this.abpFocus = new EventEmitter();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBNERFLHlCQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBekN2QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBR2QsZ0JBQVcsR0FBRyxpQkFBaUIsQ0FBQztRQUdoQyxlQUFVLEdBQUcsUUFBUSxDQUFDO1FBTXRCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHaEIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7UUFNRSxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUV2QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUV2QyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQzs7UUFHdEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFFMUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFFMUMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFTbEIsQ0FBQztJQUozQyxzQkFBSSxpQ0FBSTs7OztRQUFSO1lBQ0UsT0FBTyxNQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBRSxDQUFDO1FBQ2xGLENBQUM7OztPQUFBOzs7O0lBSUQsa0NBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsR0FBRztnQkFDdEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RixDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLGljQWFUO2lCQUNGOzs7O2dCQXJCQyxTQUFTOzs7MkJBdUJSLEtBQUs7OEJBR0wsS0FBSzs2QkFHTCxLQUFLOzRCQUdMLEtBQUs7MEJBR0wsS0FBSzsyQkFHTCxLQUFLOzZCQUdMLEtBQUs7d0JBSUwsTUFBTTt3QkFFTixNQUFNO3VCQUVOLE1BQU07MkJBR04sTUFBTTsyQkFFTixNQUFNOzBCQUVOLE1BQU07NEJBRU4sU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBZ0J2QyxzQkFBQztDQUFBLEFBckVELElBcUVDO1NBcERZLGVBQWU7OztJQUMxQixtQ0FDYzs7SUFFZCxzQ0FDZ0M7O0lBRWhDLHFDQUNzQjs7SUFFdEIsb0NBQ2tCOztJQUVsQixrQ0FDZ0I7O0lBRWhCLG1DQUNpQjs7SUFFakIscUNBQ21DOztJQUduQyxnQ0FBMEQ7O0lBRTFELGdDQUEwRDs7SUFFMUQsK0JBQXlEOztJQUd6RCxtQ0FBNkQ7O0lBRTdELG1DQUE2RDs7SUFFN0Qsa0NBQTREOztJQUU1RCxvQ0FDeUM7Ozs7O0lBTTdCLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE9uSW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b25cclxuICAgICAgI2J1dHRvblxyXG4gICAgICBbaWRdPVwiYnV0dG9uSWRcIlxyXG4gICAgICBbYXR0ci50eXBlXT1cImJ1dHRvblR5cGVcIlxyXG4gICAgICBbbmdDbGFzc109XCJidXR0b25DbGFzc1wiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJsb2FkaW5nIHx8IGRpc2FibGVkXCJcclxuICAgICAgKGNsaWNrLnN0b3ApPVwiY2xpY2submV4dCgkZXZlbnQpOyBhYnBDbGljay5uZXh0KCRldmVudClcIlxyXG4gICAgICAoZm9jdXMpPVwiZm9jdXMubmV4dCgkZXZlbnQpOyBhYnBGb2N1cy5uZXh0KCRldmVudClcIlxyXG4gICAgICAoYmx1cik9XCJibHVyLm5leHQoJGV2ZW50KTsgYWJwQmx1ci5uZXh0KCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgICA8aSBbbmdDbGFzc109XCJpY29uXCIgY2xhc3M9XCJtci0xXCI+PC9pPjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvYnV0dG9uPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgYnV0dG9uSWQgPSAnJztcclxuXHJcbiAgQElucHV0KClcclxuICBidXR0b25DbGFzcyA9ICdidG4gYnRuLXByaW1hcnknO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGJ1dHRvblR5cGUgPSAnYnV0dG9uJztcclxuXHJcbiAgQElucHV0KClcclxuICBpY29uQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGVzOiBBQlAuRGljdGlvbmFyeTxzdHJpbmc+O1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZVxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICAvLyB0c2xpbnQ6ZW5hYmxlXHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBhYnBDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFicEZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYWJwQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYnV0dG9uJywgeyBzdGF0aWM6IHRydWUgfSlcclxuICBidXR0b25SZWY6IEVsZW1lbnRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xyXG5cclxuICBnZXQgaWNvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMubG9hZGluZyA/ICdmYSBmYS1zcGlubmVyIGZhLXNwaW4nIDogdGhpcy5pY29uQ2xhc3MgfHwgJ2Qtbm9uZSd9YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuYXR0cmlidXRlcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuYnV0dG9uUmVmLm5hdGl2ZUVsZW1lbnQsIGtleSwgdGhpcy5hdHRyaWJ1dGVzW2tleV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19