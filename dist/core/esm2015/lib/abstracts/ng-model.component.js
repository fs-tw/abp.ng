import { ChangeDetectorRef, Component, Injector, Input } from '@angular/core';
// Not an abstract class on purpose. Do not change!
// tslint:disable-next-line: use-component-selector
export class AbstractNgModelComponent {
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
}
AbstractNgModelComponent.decorators = [
    { type: Component, args: [{ template: '' },] }
];
AbstractNgModelComponent.ctorParameters = () => [
    { type: Injector }
];
AbstractNgModelComponent.propDecorators = {
    disabled: [{ type: Input }],
    readonly: [{ type: Input }],
    valueFn: [{ type: Input }],
    valueLimitFn: [{ type: Input }],
    value: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbW9kZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2Fic3RyYWN0cy9uZy1tb2RlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlFLG1EQUFtRDtBQUNuRCxtREFBbUQ7QUFFbkQsTUFBTSxPQUFPLHdCQUF3QjtJQW9DbkMsWUFBbUIsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXZCckMsWUFBTyxHQUF1QyxLQUFLLENBQUMsRUFBRSxDQUFFLEtBQWtCLENBQUM7UUFHM0UsaUJBQVksR0FBeUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFxQmxFLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBckJELElBQ0ksS0FBSyxDQUFDLEtBQVE7UUFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUUsS0FBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUU3RSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBT0QsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFRO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUM3RCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7O1lBL0RGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7OztZQUpZLFFBQVE7Ozt1QkFXNUMsS0FBSzt1QkFHTCxLQUFLO3NCQUdMLEtBQUs7MkJBR0wsS0FBSztvQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdG9yLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gTm90IGFuIGFic3RyYWN0IGNsYXNzIG9uIHB1cnBvc2UuIERvIG5vdCBjaGFuZ2UhXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdXNlLWNvbXBvbmVudC1zZWxlY3RvclxyXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6ICcnIH0pXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdE5nTW9kZWxDb21wb25lbnQ8VCA9IGFueSwgVSA9IFQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIHByb3RlY3RlZCBfdmFsdWU6IFQ7XHJcbiAgcHJvdGVjdGVkIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcclxuICBvbkNoYW5nZTogKHZhbHVlOiBUKSA9PiB7fTtcclxuICBvblRvdWNoZWQ6ICgpID0+IHt9O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5OiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHZhbHVlRm46ICh2YWx1ZTogVSwgcHJldmlvdXNWYWx1ZT86IFQpID0+IFQgPSB2YWx1ZSA9PiAodmFsdWUgYXMgYW55KSBhcyBUO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHZhbHVlTGltaXRGbjogKHZhbHVlOiBULCBwcmV2aW91c1ZhbHVlPzogVCkgPT4gYW55ID0gdmFsdWUgPT4gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBUKSB7XHJcbiAgICB2YWx1ZSA9IHRoaXMudmFsdWVGbigodmFsdWUgYXMgYW55KSBhcyBVLCB0aGlzLl92YWx1ZSk7XHJcblxyXG4gICAgaWYgKHRoaXMudmFsdWVMaW1pdEZuKHZhbHVlLCB0aGlzLl92YWx1ZSkgIT09IGZhbHNlIHx8IHRoaXMucmVhZG9ubHkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlIHx8IHRoaXMuZGVmYXVsdFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRWYWx1ZSgpOiBUIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgIHRoaXMuY2RSZWYgPSBpbmplY3Rvci5nZXQoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gIH1cclxuXHJcbiAgbm90aWZ5VmFsdWVDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlTGltaXRGbih2YWx1ZSwgdGhpcy5fdmFsdWUpIHx8IHZhbHVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpLCAwKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==