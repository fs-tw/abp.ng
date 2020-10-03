import { Directive, Host, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
export class DisabledDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    // Related issue: https://github.com/angular/angular/issues/35330
    ngOnChanges({ abpDisabled }) {
        if (this.ngControl.control && abpDisabled) {
            this.ngControl.control[abpDisabled.currentValue ? 'disable' : 'enable']();
        }
    }
}
DisabledDirective.decorators = [
    { type: Directive, args: [{
                selector: '[abpDisabled]',
            },] }
];
DisabledDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Host }] }
];
DisabledDirective.propDecorators = {
    abpDisabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL2V4dGVuc2lvbnMvc3JjL2xpYi9kaXJlY3RpdmVzL2Rpc2FibGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUszQyxNQUFNLE9BQU8saUJBQWlCO0lBSTVCLFlBQTRCLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBRyxDQUFDO0lBRXBELGlFQUFpRTtJQUNqRSxXQUFXLENBQUMsRUFBRSxXQUFXLEVBQWlCO1FBQ3hDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksV0FBVyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztTQUMzRTtJQUNILENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7O1lBSlEsU0FBUyx1QkFTSCxJQUFJOzs7MEJBSGhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYWJwRGlzYWJsZWRdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERpc2FibGVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKVxyXG4gIGFicERpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHt9XHJcblxyXG4gIC8vIFJlbGF0ZWQgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzM1MzMwXHJcbiAgbmdPbkNoYW5nZXMoeyBhYnBEaXNhYmxlZCB9OiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbCAmJiBhYnBEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sW2FicERpc2FibGVkLmN1cnJlbnRWYWx1ZSA/ICdkaXNhYmxlJyA6ICdlbmFibGUnXSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=