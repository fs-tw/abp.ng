/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
export class HeaderSearchComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set toggleChange(value) {
        if (typeof value === 'undefined')
            return;
        this.searchToggled = true;
        this.focus = true;
        setTimeout((/**
         * @return {?}
         */
        () => this.qIpt.focus()), 300);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.qIpt = (/** @type {?} */ (((/** @type {?} */ (this.el.nativeElement))).querySelector('.ant-input')));
    }
    /**
     * @return {?}
     */
    qFocus() {
        this.focus = true;
    }
    /**
     * @return {?}
     */
    qBlur() {
        this.focus = false;
        this.searchToggled = false;
    }
}
HeaderSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'header-search',
                template: `
    <nz-input-group [nzAddOnBeforeIcon]="focus ? 'arrow-down' : 'search'">
      <input
        nz-input
        [(ngModel)]="q"
        (focus)="qFocus()"
        (blur)="qBlur()"
        [placeholder]="'menu.search.placeholder' | translate"
      />
    </nz-input-group>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
HeaderSearchComponent.ctorParameters = () => [
    { type: ElementRef }
];
HeaderSearchComponent.propDecorators = {
    focus: [{ type: HostBinding, args: ['class.alain-default__search-focus',] }],
    searchToggled: [{ type: HostBinding, args: ['class.alain-default__search-toggled',] }],
    toggleChange: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi9iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvZGVmYXVsdC9oZWFkZXIvY29tcG9uZW50cy9zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBaUIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFpQmxILE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFtQmhDLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBYmxDLFVBQUssR0FBRyxLQUFLLENBQUM7UUFHZCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVVlLENBQUM7Ozs7O0lBUnRDLElBQ0ksWUFBWSxDQUFDLEtBQWM7UUFDN0IsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXO1lBQUUsT0FBTztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFJRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBQSxDQUFDLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFlLENBQUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQW9CLENBQUM7SUFDckcsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBaEJ1QyxVQUFVOzs7b0JBc0IvQyxXQUFXLFNBQUMsbUNBQW1DOzRCQUcvQyxXQUFXLFNBQUMscUNBQXFDOzJCQUdqRCxLQUFLOzs7O0lBVk4sa0NBQVU7O0lBRVYscUNBQXVCOztJQUV2QixzQ0FDYzs7SUFFZCw4Q0FDc0I7Ozs7O0lBVVYsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlci1zZWFyY2gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bnotaW5wdXQtZ3JvdXAgW256QWRkT25CZWZvcmVJY29uXT1cImZvY3VzID8gJ2Fycm93LWRvd24nIDogJ3NlYXJjaCdcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbnotaW5wdXRcclxuICAgICAgICBbKG5nTW9kZWwpXT1cInFcIlxyXG4gICAgICAgIChmb2N1cyk9XCJxRm9jdXMoKVwiXHJcbiAgICAgICAgKGJsdXIpPVwicUJsdXIoKVwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidtZW51LnNlYXJjaC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAvPlxyXG4gICAgPC9uei1pbnB1dC1ncm91cD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcTogc3RyaW5nO1xyXG5cclxuICBxSXB0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFsYWluLWRlZmF1bHRfX3NlYXJjaC1mb2N1cycpXHJcbiAgZm9jdXMgPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbGFpbi1kZWZhdWx0X19zZWFyY2gtdG9nZ2xlZCcpXHJcbiAgc2VhcmNoVG9nZ2xlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB0b2dnbGVDaGFuZ2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcbiAgICB0aGlzLnNlYXJjaFRvZ2dsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5mb2N1cyA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucUlwdC5mb2N1cygpLCAzMDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5xSXB0ID0gKHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcignLmFudC1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBxRm9jdXMoKSB7XHJcbiAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHFCbHVyKCkge1xyXG4gICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWFyY2hUb2dnbGVkID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==