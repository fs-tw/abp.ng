/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
var HeaderSearchComponent = /** @class */ (function () {
    function HeaderSearchComponent(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    Object.defineProperty(HeaderSearchComponent.prototype, "toggleChange", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (typeof value === 'undefined')
                return;
            this.searchToggled = true;
            this.focus = true;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.qIpt.focus(); }), 300);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HeaderSearchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.qIpt = (/** @type {?} */ (((/** @type {?} */ (this.el.nativeElement))).querySelector('.ant-input')));
    };
    /**
     * @return {?}
     */
    HeaderSearchComponent.prototype.qFocus = /**
     * @return {?}
     */
    function () {
        this.focus = true;
    };
    /**
     * @return {?}
     */
    HeaderSearchComponent.prototype.qBlur = /**
     * @return {?}
     */
    function () {
        this.focus = false;
        this.searchToggled = false;
    };
    HeaderSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-search',
                    template: "\n    <nz-input-group [nzAddOnBeforeIcon]=\"focus ? 'arrow-down' : 'search'\">\n      <input\n        nz-input\n        [(ngModel)]=\"q\"\n        (focus)=\"qFocus()\"\n        (blur)=\"qBlur()\"\n        [placeholder]=\"'menu.search.placeholder' | translate\"\n      />\n    </nz-input-group>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderSearchComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    HeaderSearchComponent.propDecorators = {
        focus: [{ type: HostBinding, args: ['class.alain-default__search-focus',] }],
        searchToggled: [{ type: HostBinding, args: ['class.alain-default__search-toggled',] }],
        toggleChange: [{ type: Input }]
    };
    return HeaderSearchComponent;
}());
export { HeaderSearchComponent };
if (false) {
    /** @type {?} */
    HeaderSearchComponent.prototype.q;
    /** @type {?} */
    HeaderSearchComponent.prototype.qIpt;
    /** @type {?} */
    HeaderSearchComponent.prototype.focus;
    /** @type {?} */
    HeaderSearchComponent.prototype.searchToggled;
    /**
     * @type {?}
     * @private
     */
    HeaderSearchComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi9iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvZGVmYXVsdC9oZWFkZXIvY29tcG9uZW50cy9zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBaUIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEg7SUFrQ0UsK0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBYmxDLFVBQUssR0FBRyxLQUFLLENBQUM7UUFHZCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVVlLENBQUM7SUFSdEMsc0JBQ0ksK0NBQVk7Ozs7O1FBRGhCLFVBQ2lCLEtBQWM7WUFEL0IsaUJBTUM7WUFKQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVc7Z0JBQUUsT0FBTztZQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixVQUFVOzs7WUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBakIsQ0FBaUIsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTs7OztJQUlELCtDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBZSxDQUFDLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFvQixDQUFDO0lBQ3JHLENBQUM7Ozs7SUFFRCxzQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQscUNBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLDJTQVVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFoQnVDLFVBQVU7Ozt3QkFzQi9DLFdBQVcsU0FBQyxtQ0FBbUM7Z0NBRy9DLFdBQVcsU0FBQyxxQ0FBcUM7K0JBR2pELEtBQUs7O0lBc0JSLDRCQUFDO0NBQUEsQUFoREQsSUFnREM7U0FqQ1kscUJBQXFCOzs7SUFDaEMsa0NBQVU7O0lBRVYscUNBQXVCOztJQUV2QixzQ0FDYzs7SUFFZCw4Q0FDc0I7Ozs7O0lBVVYsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlci1zZWFyY2gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bnotaW5wdXQtZ3JvdXAgW256QWRkT25CZWZvcmVJY29uXT1cImZvY3VzID8gJ2Fycm93LWRvd24nIDogJ3NlYXJjaCdcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbnotaW5wdXRcclxuICAgICAgICBbKG5nTW9kZWwpXT1cInFcIlxyXG4gICAgICAgIChmb2N1cyk9XCJxRm9jdXMoKVwiXHJcbiAgICAgICAgKGJsdXIpPVwicUJsdXIoKVwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidtZW51LnNlYXJjaC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAvPlxyXG4gICAgPC9uei1pbnB1dC1ncm91cD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcTogc3RyaW5nO1xyXG5cclxuICBxSXB0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFsYWluLWRlZmF1bHRfX3NlYXJjaC1mb2N1cycpXHJcbiAgZm9jdXMgPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbGFpbi1kZWZhdWx0X19zZWFyY2gtdG9nZ2xlZCcpXHJcbiAgc2VhcmNoVG9nZ2xlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB0b2dnbGVDaGFuZ2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcbiAgICB0aGlzLnNlYXJjaFRvZ2dsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5mb2N1cyA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucUlwdC5mb2N1cygpLCAzMDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5xSXB0ID0gKHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcignLmFudC1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBxRm9jdXMoKSB7XHJcbiAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHFCbHVyKCkge1xyXG4gICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWFyY2hUb2dnbGVkID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==