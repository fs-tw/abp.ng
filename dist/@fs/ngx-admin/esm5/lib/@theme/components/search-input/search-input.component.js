/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/components/search-input/search-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    /**
     * @return {?}
     */
    SearchInputComponent.prototype.showInput = /**
     * @return {?}
     */
    function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    SearchInputComponent.prototype.hideInput = /**
     * @return {?}
     */
    function () {
        this.isInputShown = false;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SearchInputComponent.prototype.onInput = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.search.emit(val);
    };
    SearchInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-search-input',
                    template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
                    styles: [":host{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}:host i.control-icon::before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:0;margin-left:1rem;width:15rem;-webkit-transition:width .2s;transition:width .2s}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:0 0}"]
                }] }
    ];
    SearchInputComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['input', { static: true },] }],
        search: [{ type: Output }]
    };
    return SearchInputComponent;
}());
export { SearchInputComponent };
if (false) {
    /** @type {?} */
    SearchInputComponent.prototype.input;
    /** @type {?} */
    SearchInputComponent.prototype.search;
    /** @type {?} */
    SearchInputComponent.prototype.isInputShown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQHRoZW1lL2NvbXBvbmVudHMvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RjtJQUFBO1FBZ0JZLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVwRSxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQWN2QixDQUFDOzs7O0lBWkMsd0NBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELHdDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsc0NBQU87Ozs7SUFBUCxVQUFRLEdBQVc7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUU1QixRQUFRLEVBQUUsc1NBUVQ7O2lCQUNGOzs7d0JBRUUsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7eUJBRW5DLE1BQU07O0lBZ0JULDJCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0FuQlksb0JBQW9COzs7SUFDL0IscUNBQXdEOztJQUV4RCxzQ0FBb0U7O0lBRXBFLDRDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtc2VhcmNoLWlucHV0JyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGkgY2xhc3M9XCJjb250cm9sLWljb24gaW9uIGlvbi1pb3Mtc2VhcmNoXCJcclxuICAgICAgIChjbGljayk9XCJzaG93SW5wdXQoKVwiPjwvaT5cclxuICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBzZWFyY2ggcmVxdWVzdCBoZXJlLi4uXCJcclxuICAgICAgICAgICAjaW5wdXRcclxuICAgICAgICAgICBbY2xhc3MuaGlkZGVuXT1cIiFpc0lucHV0U2hvd25cIlxyXG4gICAgICAgICAgIChibHVyKT1cImhpZGVJbnB1dCgpXCJcclxuICAgICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCI+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaElucHV0Q29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBpc0lucHV0U2hvd24gPSBmYWxzZTtcclxuXHJcbiAgc2hvd0lucHV0KCkge1xyXG4gICAgdGhpcy5pc0lucHV0U2hvd24gPSB0cnVlO1xyXG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBoaWRlSW5wdXQoKSB7XHJcbiAgICB0aGlzLmlzSW5wdXRTaG93biA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dCh2YWw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZWFyY2guZW1pdCh2YWwpO1xyXG4gIH1cclxufVxyXG4iXX0=