/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/components/search-input/search-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
export class SearchInputComponent {
    constructor() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    /**
     * @return {?}
     */
    showInput() {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    hideInput() {
        this.isInputShown = false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onInput(val) {
        this.search.emit(val);
    }
}
SearchInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-search-input',
                template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `,
                styles: [":host{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}:host i.control-icon::before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:0;margin-left:1rem;width:15rem;-webkit-transition:width .2s;transition:width .2s}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:0 0}"]
            }] }
];
SearchInputComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input', { static: true },] }],
    search: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SearchInputComponent.prototype.input;
    /** @type {?} */
    SearchInputComponent.prototype.search;
    /** @type {?} */
    SearchInputComponent.prototype.isInputShown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQHRoZW1lL2NvbXBvbmVudHMvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWV2RixNQUFNLE9BQU8sb0JBQW9CO0lBYmpDO1FBZ0JZLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVwRSxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQWN2QixDQUFDOzs7O0lBWkMsU0FBUztRQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBRTVCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDs7YUFDRjs7O29CQUVFLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3FCQUVuQyxNQUFNOzs7O0lBRlAscUNBQXdEOztJQUV4RCxzQ0FBb0U7O0lBRXBFLDRDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtc2VhcmNoLWlucHV0JyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGkgY2xhc3M9XCJjb250cm9sLWljb24gaW9uIGlvbi1pb3Mtc2VhcmNoXCJcclxuICAgICAgIChjbGljayk9XCJzaG93SW5wdXQoKVwiPjwvaT5cclxuICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBzZWFyY2ggcmVxdWVzdCBoZXJlLi4uXCJcclxuICAgICAgICAgICAjaW5wdXRcclxuICAgICAgICAgICBbY2xhc3MuaGlkZGVuXT1cIiFpc0lucHV0U2hvd25cIlxyXG4gICAgICAgICAgIChibHVyKT1cImhpZGVJbnB1dCgpXCJcclxuICAgICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCI+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaElucHV0Q29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBpc0lucHV0U2hvd24gPSBmYWxzZTtcclxuXHJcbiAgc2hvd0lucHV0KCkge1xyXG4gICAgdGhpcy5pc0lucHV0U2hvd24gPSB0cnVlO1xyXG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBoaWRlSW5wdXQoKSB7XHJcbiAgICB0aGlzLmlzSW5wdXRTaG93biA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dCh2YWw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZWFyY2guZW1pdCh2YWwpO1xyXG4gIH1cclxufVxyXG4iXX0=