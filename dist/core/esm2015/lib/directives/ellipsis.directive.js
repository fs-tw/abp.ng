import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Input } from '@angular/core';
export class EllipsisDirective {
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
}
EllipsisDirective.decorators = [
    { type: Directive, args: [{
                selector: '[abpEllipsis]',
            },] }
];
EllipsisDirective.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
EllipsisDirective.propDecorators = {
    width: [{ type: Input, args: ['abpEllipsis',] }],
    title: [{ type: HostBinding, args: ['title',] }, { type: Input }],
    enabled: [{ type: Input, args: ['abpEllipsisEnabled',] }],
    inlineClass: [{ type: HostBinding, args: ['class.abp-ellipsis-inline',] }],
    class: [{ type: HostBinding, args: ['class.abp-ellipsis',] }],
    maxWidth: [{ type: HostBinding, args: ['style.max-width',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvZWxsaXBzaXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzVHLE1BQU0sT0FBTyxpQkFBaUI7SUEwQjVCLFlBQW9CLEtBQXdCLEVBQVUsS0FBaUI7UUFBbkQsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBakJ2RSxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBaUIyRCxDQUFDO0lBZjNFLElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RSxDQUFDO0lBSUQsZUFBZTtRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQTZCLENBQUMsU0FBUyxDQUFDO1FBQy9FLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7O1lBSnVCLGlCQUFpQjtZQUFhLFVBQVU7OztvQkFNN0QsS0FBSyxTQUFDLGFBQWE7b0JBR25CLFdBQVcsU0FBQyxPQUFPLGNBQ25CLEtBQUs7c0JBR0wsS0FBSyxTQUFDLG9CQUFvQjswQkFHMUIsV0FBVyxTQUFDLDJCQUEyQjtvQkFLdkMsV0FBVyxTQUFDLG9CQUFvQjt1QkFLaEMsV0FBVyxTQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYWJwRWxsaXBzaXNdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVsbGlwc2lzRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCdhYnBFbGxpcHNpcycpXHJcbiAgd2lkdGg6IHN0cmluZztcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCd0aXRsZScpXHJcbiAgQElucHV0KClcclxuICB0aXRsZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ2FicEVsbGlwc2lzRW5hYmxlZCcpXHJcbiAgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWJwLWVsbGlwc2lzLWlubGluZScpXHJcbiAgZ2V0IGlubGluZUNsYXNzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlZCAmJiB0aGlzLndpZHRoO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hYnAtZWxsaXBzaXMnKVxyXG4gIGdldCBjbGFzcygpIHtcclxuICAgIHJldHVybiB0aGlzLmVuYWJsZWQgJiYgIXRoaXMud2lkdGg7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heC13aWR0aCcpXHJcbiAgZ2V0IG1heFdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlZCAmJiB0aGlzLndpZHRoID8gdGhpcy53aWR0aCB8fCAnMTcwcHgnIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aGlzLnRpdGxlIHx8ICh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmlubmVyVGV4dDtcclxuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iXX0=