import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Input } from '@angular/core';
let EllipsisDirective = class EllipsisDirective {
    constructor(cdRef, elRef) {
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.enabled = true;
    }
    get inlineClass() {
        return this.enabled && this.width;
    }
    get class() {
        return this.enabled && !this.width;
    }
    get maxWidth() {
        return this.enabled && this.width ? this.width || '170px' : undefined;
    }
    ngAfterViewInit() {
        this.title = this.title || this.elRef.nativeElement.innerText;
        this.cdRef.detectChanges();
    }
};
__decorate([
    Input('abpEllipsis'),
    __metadata("design:type", String)
], EllipsisDirective.prototype, "width", void 0);
__decorate([
    HostBinding('title'),
    Input(),
    __metadata("design:type", String)
], EllipsisDirective.prototype, "title", void 0);
__decorate([
    Input('abpEllipsisEnabled'),
    __metadata("design:type", Object)
], EllipsisDirective.prototype, "enabled", void 0);
__decorate([
    HostBinding('class.abp-ellipsis-inline'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], EllipsisDirective.prototype, "inlineClass", null);
__decorate([
    HostBinding('class.abp-ellipsis'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], EllipsisDirective.prototype, "class", null);
__decorate([
    HostBinding('style.max-width'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], EllipsisDirective.prototype, "maxWidth", null);
EllipsisDirective = __decorate([
    Directive({
        selector: '[abpEllipsis]',
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef])
], EllipsisDirective);
export { EllipsisDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvZWxsaXBzaXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs1RyxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQTBCNUIsWUFBb0IsS0FBd0IsRUFBVSxLQUFpQjtRQUFuRCxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7UUFqQnZFLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFpQjJELENBQUM7SUFkM0UsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUdELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUdELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hFLENBQUM7SUFJRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBNkIsQ0FBQyxTQUFTLENBQUM7UUFDL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQTtBQTlCQztJQURDLEtBQUssQ0FBQyxhQUFhLENBQUM7O2dEQUNQO0FBSWQ7SUFGQyxXQUFXLENBQUMsT0FBTyxDQUFDO0lBQ3BCLEtBQUssRUFBRTs7Z0RBQ007QUFHZDtJQURDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7a0RBQ2I7QUFHZjtJQURDLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQzs7O29EQUd4QztBQUdEO0lBREMsV0FBVyxDQUFDLG9CQUFvQixDQUFDOzs7OENBR2pDO0FBR0Q7SUFEQyxXQUFXLENBQUMsaUJBQWlCLENBQUM7OztpREFHOUI7QUF4QlUsaUJBQWlCO0lBSDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO0tBQzFCLENBQUM7cUNBMkIyQixpQkFBaUIsRUFBaUIsVUFBVTtHQTFCNUQsaUJBQWlCLENBZ0M3QjtTQWhDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FicEVsbGlwc2lzXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbGxpcHNpc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgnYWJwRWxsaXBzaXMnKVxyXG4gIHdpZHRoOiBzdHJpbmc7XHJcblxyXG4gIEBIb3N0QmluZGluZygndGl0bGUnKVxyXG4gIEBJbnB1dCgpXHJcbiAgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdhYnBFbGxpcHNpc0VuYWJsZWQnKVxyXG4gIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFicC1lbGxpcHNpcy1pbmxpbmUnKVxyXG4gIGdldCBpbmxpbmVDbGFzcygpIHtcclxuICAgIHJldHVybiB0aGlzLmVuYWJsZWQgJiYgdGhpcy53aWR0aDtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWJwLWVsbGlwc2lzJylcclxuICBnZXQgY2xhc3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbmFibGVkICYmICF0aGlzLndpZHRoO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXgtd2lkdGgnKVxyXG4gIGdldCBtYXhXaWR0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVuYWJsZWQgJiYgdGhpcy53aWR0aCA/IHRoaXMud2lkdGggfHwgJzE3MHB4JyA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGhpcy50aXRsZSB8fCAodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pbm5lclRleHQ7XHJcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIl19