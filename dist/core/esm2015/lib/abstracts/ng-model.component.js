/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstracts/ng-model.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, Injector, Input } from '@angular/core';
// Not an abstract class on purpose. Do not change!
// tslint:disable-next-line: use-component-selector
/**
 * @template T, U
 */
export class AbstractNgModelComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.valueFn = (/**
         * @param {?} value
         * @return {?}
         */
        value => (/** @type {?} */ (((/** @type {?} */ (value))))));
        this.valueLimitFn = (/**
         * @param {?} value
         * @return {?}
         */
        value => false);
        // tslint:disable-next-line: deprecation
        this.cdRef = injector.get(ChangeDetectorRef);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        value = this.valueFn((/** @type {?} */ (((/** @type {?} */ (value))))), this._value);
        if (this.valueLimitFn(value, this._value) !== false || this.readonly)
            return;
        this._value = value;
        this.notifyValueChange();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value || this.defaultValue;
    }
    /**
     * @return {?}
     */
    get defaultValue() {
        return this._value;
    }
    /**
     * @return {?}
     */
    notifyValueChange() {
        if (this.onChange) {
            this.onChange(this.value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = this.valueLimitFn(value, this._value) || value;
        setTimeout((/**
         * @return {?}
         */
        () => this.cdRef.markForCheck()), 0);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
AbstractNgModelComponent.decorators = [
    { type: Component, args: [{ template: '' }] }
];
/** @nocollapse */
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
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AbstractNgModelComponent.prototype._value;
    /**
     * @type {?}
     * @protected
     */
    AbstractNgModelComponent.prototype.cdRef;
    /** @type {?} */
    AbstractNgModelComponent.prototype.onChange;
    /** @type {?} */
    AbstractNgModelComponent.prototype.onTouched;
    /** @type {?} */
    AbstractNgModelComponent.prototype.disabled;
    /** @type {?} */
    AbstractNgModelComponent.prototype.readonly;
    /** @type {?} */
    AbstractNgModelComponent.prototype.valueFn;
    /** @type {?} */
    AbstractNgModelComponent.prototype.valueLimitFn;
    /** @type {?} */
    AbstractNgModelComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbW9kZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0cy9uZy1tb2RlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUs5RSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBb0NuQyxZQUFtQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBdkJyQyxZQUFPOzs7O1FBQXVDLEtBQUssQ0FBQyxFQUFFLENBQUMsbUJBQUEsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxFQUFLLEVBQUM7UUFHM0UsaUJBQVk7Ozs7UUFBeUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUM7UUFxQmxFLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQXJCRCxJQUNJLEtBQUssQ0FBQyxLQUFRO1FBQ2hCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFBLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsRUFBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTdFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFPRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFRO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUM3RCxVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOzs7WUEvREYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTs7OztZQUpZLFFBQVE7Ozt1QkFXNUMsS0FBSzt1QkFHTCxLQUFLO3NCQUdMLEtBQUs7MkJBR0wsS0FBSztvQkFHTCxLQUFLOzs7Ozs7O0lBakJOLDBDQUFvQjs7Ozs7SUFDcEIseUNBQW1DOztJQUNuQyw0Q0FBMkI7O0lBQzNCLDZDQUFvQjs7SUFFcEIsNENBQ2tCOztJQUVsQiw0Q0FDa0I7O0lBRWxCLDJDQUMyRTs7SUFFM0UsZ0RBQ29FOztJQW9CeEQsNENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdG9yLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gTm90IGFuIGFic3RyYWN0IGNsYXNzIG9uIHB1cnBvc2UuIERvIG5vdCBjaGFuZ2UhXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdXNlLWNvbXBvbmVudC1zZWxlY3RvclxyXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6ICcnIH0pXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdE5nTW9kZWxDb21wb25lbnQ8VCA9IGFueSwgVSA9IFQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIHByb3RlY3RlZCBfdmFsdWU6IFQ7XHJcbiAgcHJvdGVjdGVkIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcclxuICBvbkNoYW5nZTogKHZhbHVlOiBUKSA9PiB7fTtcclxuICBvblRvdWNoZWQ6ICgpID0+IHt9O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5OiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHZhbHVlRm46ICh2YWx1ZTogVSwgcHJldmlvdXNWYWx1ZT86IFQpID0+IFQgPSB2YWx1ZSA9PiAodmFsdWUgYXMgYW55KSBhcyBUO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHZhbHVlTGltaXRGbjogKHZhbHVlOiBULCBwcmV2aW91c1ZhbHVlPzogVCkgPT4gYW55ID0gdmFsdWUgPT4gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBUKSB7XHJcbiAgICB2YWx1ZSA9IHRoaXMudmFsdWVGbigodmFsdWUgYXMgYW55KSBhcyBVLCB0aGlzLl92YWx1ZSk7XHJcblxyXG4gICAgaWYgKHRoaXMudmFsdWVMaW1pdEZuKHZhbHVlLCB0aGlzLl92YWx1ZSkgIT09IGZhbHNlIHx8IHRoaXMucmVhZG9ubHkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlIHx8IHRoaXMuZGVmYXVsdFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRWYWx1ZSgpOiBUIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgIHRoaXMuY2RSZWYgPSBpbmplY3Rvci5nZXQoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gIH1cclxuXHJcbiAgbm90aWZ5VmFsdWVDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlTGltaXRGbih2YWx1ZSwgdGhpcy5fdmFsdWUpIHx8IHZhbHVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpLCAwKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==