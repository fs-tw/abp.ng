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
var AbstractNgModelComponent = /** @class */ (function () {
    function AbstractNgModelComponent(injector) {
        this.injector = injector;
        this.valueFn = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return (/** @type {?} */ (((/** @type {?} */ (value))))); });
        this.valueLimitFn = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return false; });
        // tslint:disable-next-line: deprecation
        this.cdRef = injector.get(ChangeDetectorRef);
    }
    Object.defineProperty(AbstractNgModelComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value || this.defaultValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = this.valueFn((/** @type {?} */ (((/** @type {?} */ (value))))), this._value);
            if (this.valueLimitFn(value, this._value) !== false || this.readonly)
                return;
            this._value = value;
            this.notifyValueChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNgModelComponent.prototype, "defaultValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AbstractNgModelComponent.prototype.notifyValueChange = /**
     * @return {?}
     */
    function () {
        if (this.onChange) {
            this.onChange(this.value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AbstractNgModelComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this._value = this.valueLimitFn(value, this._value) || value;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.cdRef.markForCheck(); }), 0);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractNgModelComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractNgModelComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    AbstractNgModelComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    AbstractNgModelComponent.decorators = [
        { type: Component, args: [{ template: '' }] }
    ];
    /** @nocollapse */
    AbstractNgModelComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    AbstractNgModelComponent.propDecorators = {
        disabled: [{ type: Input }],
        readonly: [{ type: Input }],
        valueFn: [{ type: Input }],
        valueLimitFn: [{ type: Input }],
        value: [{ type: Input }]
    };
    return AbstractNgModelComponent;
}());
export { AbstractNgModelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbW9kZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0cy9uZy1tb2RlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUk5RTtJQXFDRSxrQ0FBbUIsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXZCckMsWUFBTzs7OztRQUF1QyxVQUFBLEtBQUssV0FBSSxtQkFBQSxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLEVBQUssR0FBQSxFQUFDO1FBRzNFLGlCQUFZOzs7O1FBQXlDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxFQUFMLENBQUssRUFBQztRQXFCbEUsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFyQkQsc0JBQ0ksMkNBQUs7Ozs7UUFTVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzFDLENBQUM7Ozs7O1FBWkQsVUFDVSxLQUFRO1lBQ2hCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFBLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsRUFBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV2RCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVE7Z0JBQUUsT0FBTztZQUU3RSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLGtEQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBOzs7O0lBT0Qsb0RBQWlCOzs7SUFBakI7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVELDZDQUFVOzs7O0lBQVYsVUFBVyxLQUFRO1FBQW5CLGlCQUdDO1FBRkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDO1FBQzdELFVBQVU7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUF6QixDQUF5QixHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsbURBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxvREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELG1EQUFnQjs7OztJQUFoQixVQUFpQixVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOztnQkEvREYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTs7OztnQkFKWSxRQUFROzs7MkJBVzVDLEtBQUs7MkJBR0wsS0FBSzswQkFHTCxLQUFLOytCQUdMLEtBQUs7d0JBR0wsS0FBSzs7SUE2Q1IsK0JBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQS9EWSx3QkFBd0I7Ozs7OztJQUNuQywwQ0FBb0I7Ozs7O0lBQ3BCLHlDQUFtQzs7SUFDbkMsNENBQTJCOztJQUMzQiw2Q0FBb0I7O0lBRXBCLDRDQUNrQjs7SUFFbEIsNENBQ2tCOztJQUVsQiwyQ0FDMkU7O0lBRTNFLGdEQUNvRTs7SUFvQnhELDRDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3RvciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIE5vdCBhbiBhYnN0cmFjdCBjbGFzcyBvbiBwdXJwb3NlLiBEbyBub3QgY2hhbmdlIVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1jb21wb25lbnQtc2VsZWN0b3JcclxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiAnJyB9KVxyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3ROZ01vZGVsQ29tcG9uZW50PFQgPSBhbnksIFUgPSBUPiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBwcm90ZWN0ZWQgX3ZhbHVlOiBUO1xyXG4gIHByb3RlY3RlZCBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogVCkgPT4ge307XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB7fTtcclxuXHJcbiAgQElucHV0KClcclxuICBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICByZWFkb25seTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICB2YWx1ZUZuOiAodmFsdWU6IFUsIHByZXZpb3VzVmFsdWU/OiBUKSA9PiBUID0gdmFsdWUgPT4gKHZhbHVlIGFzIGFueSkgYXMgVDtcclxuXHJcbiAgQElucHV0KClcclxuICB2YWx1ZUxpbWl0Rm46ICh2YWx1ZTogVCwgcHJldmlvdXNWYWx1ZT86IFQpID0+IGFueSA9IHZhbHVlID0+IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogVCkge1xyXG4gICAgdmFsdWUgPSB0aGlzLnZhbHVlRm4oKHZhbHVlIGFzIGFueSkgYXMgVSwgdGhpcy5fdmFsdWUpO1xyXG5cclxuICAgIGlmICh0aGlzLnZhbHVlTGltaXRGbih2YWx1ZSwgdGhpcy5fdmFsdWUpICE9PSBmYWxzZSB8fCB0aGlzLnJlYWRvbmx5KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMubm90aWZ5VmFsdWVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBUIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZSB8fCB0aGlzLmRlZmF1bHRWYWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0VmFsdWUoKTogVCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXHJcbiAgICB0aGlzLmNkUmVmID0gaW5qZWN0b3IuZ2V0KENoYW5nZURldGVjdG9yUmVmKTtcclxuICB9XHJcblxyXG4gIG5vdGlmeVZhbHVlQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy52YWx1ZUxpbWl0Rm4odmFsdWUsIHRoaXMuX3ZhbHVlKSB8fCB2YWx1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKSwgMCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxufVxyXG4iXX0=