import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
let AutofocusDirective = class AutofocusDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.delay = 0;
    }
    ngAfterViewInit() {
        setTimeout(() => this.elRef.nativeElement.focus(), this.delay);
    }
};
__decorate([
    Input('autofocus'),
    __metadata("design:type", Object)
], AutofocusDirective.prototype, "delay", void 0);
AutofocusDirective = __decorate([
    Directive({
        // tslint:disable-next-line: directive-selector
        selector: '[autofocus]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], AutofocusDirective);
export { AutofocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL2F1dG9mb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFNNUUsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFJN0IsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUZyQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRThCLENBQUM7SUFFekMsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNGLENBQUE7QUFQQztJQURDLEtBQUssQ0FBQyxXQUFXLENBQUM7O2lEQUNUO0FBRkMsa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNULCtDQUErQztRQUMvQyxRQUFRLEVBQUUsYUFBYTtLQUN4QixDQUFDO3FDQUsyQixVQUFVO0dBSjFCLGtCQUFrQixDQVM5QjtTQVRZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbYXV0b2ZvY3VzXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9mb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgnYXV0b2ZvY3VzJylcclxuICBkZWxheSA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCksIHRoaXMuZGVsYXkpO1xyXG4gIH1cclxufVxyXG4iXX0=