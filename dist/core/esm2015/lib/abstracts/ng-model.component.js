import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, Injector, Input } from '@angular/core';
// Not an abstract class on purpose. Do not change!
// tslint:disable-next-line: use-component-selector
let AbstractNgModelComponent = class AbstractNgModelComponent {
    constructor(injector) {
        this.injector = injector;
        this.valueFn = value => value;
        this.valueLimitFn = value => false;
        // tslint:disable-next-line: deprecation
        this.cdRef = injector.get(ChangeDetectorRef);
    }
    set value(value) {
        value = this.valueFn(value, this._value);
        if (this.valueLimitFn(value, this._value) !== false || this.readonly)
            return;
        this._value = value;
        this.notifyValueChange();
    }
    get value() {
        return this._value || this.defaultValue;
    }
    get defaultValue() {
        return this._value;
    }
    notifyValueChange() {
        if (this.onChange) {
            this.onChange(this.value);
        }
    }
    writeValue(value) {
        this._value = this.valueLimitFn(value, this._value) || value;
        setTimeout(() => this.cdRef.markForCheck(), 0);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AbstractNgModelComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AbstractNgModelComponent.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], AbstractNgModelComponent.prototype, "valueFn", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], AbstractNgModelComponent.prototype, "valueLimitFn", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], AbstractNgModelComponent.prototype, "value", null);
AbstractNgModelComponent = __decorate([
    Component({ template: '' }),
    __metadata("design:paramtypes", [Injector])
], AbstractNgModelComponent);
export { AbstractNgModelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbW9kZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2Fic3RyYWN0cy9uZy1tb2RlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RSxtREFBbUQ7QUFDbkQsbURBQW1EO0FBRW5ELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBb0NuQyxZQUFtQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBdkJyQyxZQUFPLEdBQXVDLEtBQUssQ0FBQyxFQUFFLENBQUUsS0FBa0IsQ0FBQztRQUczRSxpQkFBWSxHQUF5QyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQXFCbEUsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFwQkQsSUFBSSxLQUFLLENBQUMsS0FBUTtRQUNoQixLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxLQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTdFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFPRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVE7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDO1FBQzdELFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQTtBQXhEQztJQURDLEtBQUssRUFBRTs7MERBQ1U7QUFHbEI7SUFEQyxLQUFLLEVBQUU7OzBEQUNVO0FBR2xCO0lBREMsS0FBSyxFQUFFOzt5REFDbUU7QUFHM0U7SUFEQyxLQUFLLEVBQUU7OzhEQUM0RDtBQUdwRTtJQURDLEtBQUssRUFBRTs7O3FEQVFQO0FBMUJVLHdCQUF3QjtJQURwQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7cUNBcUNHLFFBQVE7R0FwQzFCLHdCQUF3QixDQStEcEM7U0EvRFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdG9yLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gTm90IGFuIGFic3RyYWN0IGNsYXNzIG9uIHB1cnBvc2UuIERvIG5vdCBjaGFuZ2UhXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdXNlLWNvbXBvbmVudC1zZWxlY3RvclxyXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6ICcnIH0pXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdE5nTW9kZWxDb21wb25lbnQ8VCA9IGFueSwgVSA9IFQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIHByb3RlY3RlZCBfdmFsdWU6IFQ7XHJcbiAgcHJvdGVjdGVkIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcclxuICBvbkNoYW5nZTogKHZhbHVlOiBUKSA9PiB7fTtcclxuICBvblRvdWNoZWQ6ICgpID0+IHt9O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5OiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHZhbHVlRm46ICh2YWx1ZTogVSwgcHJldmlvdXNWYWx1ZT86IFQpID0+IFQgPSB2YWx1ZSA9PiAodmFsdWUgYXMgYW55KSBhcyBUO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHZhbHVlTGltaXRGbjogKHZhbHVlOiBULCBwcmV2aW91c1ZhbHVlPzogVCkgPT4gYW55ID0gdmFsdWUgPT4gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBUKSB7XHJcbiAgICB2YWx1ZSA9IHRoaXMudmFsdWVGbigodmFsdWUgYXMgYW55KSBhcyBVLCB0aGlzLl92YWx1ZSk7XHJcblxyXG4gICAgaWYgKHRoaXMudmFsdWVMaW1pdEZuKHZhbHVlLCB0aGlzLl92YWx1ZSkgIT09IGZhbHNlIHx8IHRoaXMucmVhZG9ubHkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlIHx8IHRoaXMuZGVmYXVsdFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRWYWx1ZSgpOiBUIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgIHRoaXMuY2RSZWYgPSBpbmplY3Rvci5nZXQoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gIH1cclxuXHJcbiAgbm90aWZ5VmFsdWVDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlTGltaXRGbih2YWx1ZSwgdGhpcy5fdmFsdWUpIHx8IHZhbHVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpLCAwKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==