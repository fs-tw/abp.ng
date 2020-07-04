import { __decorate, __metadata, __param } from "tslib";
import { Directive, Host, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
let DisabledDirective = class DisabledDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    // Related issue: https://github.com/angular/angular/issues/35330
    ngOnChanges({ abpDisabled }) {
        if (this.ngControl.control && abpDisabled) {
            this.ngControl.control[abpDisabled.currentValue ? 'disable' : 'enable']();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DisabledDirective.prototype, "abpDisabled", void 0);
DisabledDirective = __decorate([
    Directive({
        selector: '[abpDisabled]',
    }),
    __param(0, Host()),
    __metadata("design:paramtypes", [NgControl])
], DisabledDirective);
export { DisabledDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL2V4dGVuc2lvbnMvc3JjL2xpYi9kaXJlY3RpdmVzL2Rpc2FibGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLM0MsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFJNUIsWUFBNEIsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7SUFFcEQsaUVBQWlFO0lBQ2pFLFdBQVcsQ0FBQyxFQUFFLFdBQVcsRUFBaUI7UUFDeEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxXQUFXLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1NBQzNFO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFWQztJQURDLEtBQUssRUFBRTs7c0RBQ2E7QUFGVixpQkFBaUI7SUFIN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7S0FDMUIsQ0FBQztJQUthLFdBQUEsSUFBSSxFQUFFLENBQUE7cUNBQW9CLFNBQVM7R0FKckMsaUJBQWlCLENBWTdCO1NBWlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FicERpc2FibGVkXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KClcclxuICBhYnBEaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sKSB7fVxyXG5cclxuICAvLyBSZWxhdGVkIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8zNTMzMFxyXG4gIG5nT25DaGFuZ2VzKHsgYWJwRGlzYWJsZWQgfTogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sLmNvbnRyb2wgJiYgYWJwRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbFthYnBEaXNhYmxlZC5jdXJyZW50VmFsdWUgPyAnZGlzYWJsZScgOiAnZW5hYmxlJ10oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19