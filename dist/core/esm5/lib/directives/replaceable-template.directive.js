/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/replaceable-template.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, Directive, Injector, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Store } from '@ngxs/store';
import { filter } from 'rxjs/operators';
import { ReplaceableComponentsState } from '../states/replaceable-components.state';
import { takeUntilDestroy } from '../utils/rxjs-utils';
import compare from 'just-compare';
import snq from 'snq';
var ReplaceableTemplateDirective = /** @class */ (function () {
    function ReplaceableTemplateDirective(injector, templateRef, cfRes, vcRef, store) {
        var _this = this;
        this.injector = injector;
        this.templateRef = templateRef;
        this.cfRes = cfRes;
        this.vcRef = vcRef;
        this.store = store;
        this.providedData = (/** @type {?} */ ({ inputs: {}, outputs: {} }));
        this.context = (/** @type {?} */ ({}));
        this.defaultComponentSubscriptions = (/** @type {?} */ ({}));
        this.initialized = false;
        this.context = {
            initTemplate: (/**
             * @param {?} ref
             * @return {?}
             */
            function (ref) {
                _this.resetDefaultComponent();
                _this.defaultComponentRef = ref;
                _this.setDefaultComponentInputs();
            }),
        };
    }
    /**
     * @return {?}
     */
    ReplaceableTemplateDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.store
            .select(ReplaceableComponentsState.getComponent(this.data.componentKey))
            .pipe(filter((/**
         * @param {?=} res
         * @return {?}
         */
        function (res) {
            if (res === void 0) { res = (/** @type {?} */ ({})); }
            return !_this.initialized || !compare(res.component, _this.externalComponent);
        })), takeUntilDestroy(this))
            .subscribe((/**
         * @param {?=} res
         * @return {?}
         */
        function (res) {
            if (res === void 0) { res = (/** @type {?} */ ({})); }
            _this.vcRef.clear();
            _this.externalComponent = res.component;
            if (_this.defaultComponentRef) {
                _this.resetDefaultComponent();
            }
            if (res.component) {
                _this.setProvidedData();
                /** @type {?} */
                var customInjector = Injector.create({
                    providers: [{ provide: 'REPLACEABLE_DATA', useValue: _this.providedData }],
                    parent: _this.injector,
                });
                _this.vcRef.createComponent(_this.cfRes.resolveComponentFactory(res.component), 0, customInjector);
            }
            else {
                _this.vcRef.createEmbeddedView(_this.templateRef, _this.context);
            }
            _this.initialized = true;
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ReplaceableTemplateDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (snq((/**
         * @return {?}
         */
        function () { return changes.data.currentValue.inputs; })) && this.defaultComponentRef) {
            this.setDefaultComponentInputs();
        }
    };
    /**
     * @return {?}
     */
    ReplaceableTemplateDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ReplaceableTemplateDirective.prototype.setDefaultComponentInputs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.defaultComponentRef || (!this.data.inputs && !this.data.outputs))
            return;
        if (this.data.inputs) {
            for (var key in this.data.inputs) {
                if (this.data.inputs.hasOwnProperty(key)) {
                    if (!compare(this.defaultComponentRef[key], this.data.inputs[key].value)) {
                        this.defaultComponentRef[key] = this.data.inputs[key].value;
                    }
                }
            }
        }
        if (this.data.outputs) {
            var _loop_1 = function (key) {
                if (this_1.data.outputs.hasOwnProperty(key)) {
                    if (!this_1.defaultComponentSubscriptions[key]) {
                        this_1.defaultComponentSubscriptions[key] = this_1.defaultComponentRef[key].subscribe((/**
                         * @param {?} value
                         * @return {?}
                         */
                        function (value) {
                            _this.data.outputs[key](value);
                        }));
                    }
                }
            };
            var this_1 = this;
            for (var key in this.data.outputs) {
                _loop_1(key);
            }
        }
    };
    /**
     * @return {?}
     */
    ReplaceableTemplateDirective.prototype.setProvidedData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.providedData = tslib_1.__assign({}, this.data, { inputs: {} });
        if (!this.data.inputs)
            return;
        Object.defineProperties(this.providedData.inputs, tslib_1.__assign({}, Object.keys(this.data.inputs).reduce((/**
         * @param {?} acc
         * @param {?} key
         * @return {?}
         */
        function (acc, key) {
            var _a;
            return (tslib_1.__assign({}, acc, (_a = {}, _a[key] = tslib_1.__assign({ enumerable: true, configurable: true, get: (/**
                 * @return {?}
                 */
                function () { return _this.data.inputs[key].value; }) }, (_this.data.inputs[key].twoWay && {
                set: (/**
                 * @param {?} newValue
                 * @return {?}
                 */
                function (newValue) {
                    _this.data.inputs[key].value = newValue;
                    _this.data.outputs[key + "Change"](newValue);
                }),
            })), _a)));
        }), {})));
    };
    /**
     * @return {?}
     */
    ReplaceableTemplateDirective.prototype.resetDefaultComponent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.defaultComponentSubscriptions).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            _this.defaultComponentSubscriptions[key].unsubscribe();
        }));
        this.defaultComponentSubscriptions = (/** @type {?} */ ({}));
        this.defaultComponentRef = null;
    };
    ReplaceableTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[abpReplaceableTemplate]' },] }
    ];
    /** @nocollapse */
    ReplaceableTemplateDirective.ctorParameters = function () { return [
        { type: Injector },
        { type: TemplateRef },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: Store }
    ]; };
    ReplaceableTemplateDirective.propDecorators = {
        data: [{ type: Input, args: ['abpReplaceableTemplate',] }]
    };
    return ReplaceableTemplateDirective;
}());
export { ReplaceableTemplateDirective };
if (false) {
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.data;
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.providedData;
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.context;
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.externalComponent;
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.defaultComponentRef;
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.defaultComponentSubscriptions;
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.initialized;
    /**
     * @type {?}
     * @private
     */
    ReplaceableTemplateDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ReplaceableTemplateDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    ReplaceableTemplateDirective.prototype.cfRes;
    /**
     * @type {?}
     * @private
     */
    ReplaceableTemplateDirective.prototype.vcRef;
    /**
     * @type {?}
     * @private
     */
    ReplaceableTemplateDirective.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZWFibGUtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvcmVwbGFjZWFibGUtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFFBQVEsRUFDUixLQUFLLEVBS0wsV0FBVyxFQUVYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBRXRCO0lBb0JFLHNDQUNVLFFBQWtCLEVBQ2xCLFdBQTZCLEVBQzdCLEtBQStCLEVBQy9CLEtBQXVCLEVBQ3ZCLEtBQVk7UUFMdEIsaUJBY0M7UUFiUyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixVQUFLLEdBQUwsS0FBSyxDQUEwQjtRQUMvQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBcEJ0QixpQkFBWSxHQUFHLG1CQUFBLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBR3pDLENBQUM7UUFFRixZQUFPLEdBQUcsbUJBQUEsRUFBRSxFQUFPLENBQUM7UUFNcEIsa0NBQTZCLEdBQUcsbUJBQUEsRUFBRSxFQUFnQyxDQUFDO1FBRW5FLGdCQUFXLEdB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Qzs7Z0JBM0lGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRTs7OztnQkFwQmpELFFBQVE7Z0JBTVIsV0FBVztnQkFSWCx3QkFBd0I7Z0JBVXhCLGdCQUFnQjtnQkFFVCxLQUFLOzs7dUJBWVgsS0FBSyxTQUFDLHdCQUF3Qjs7SUEwSWpDLG1DQUFDO0NBQUEsQUE1SUQsSUE0SUM7U0EzSVksNEJBQTRCOzs7SUFDdkMsNENBQ3dFOztJQUV4RSxvREFHRTs7SUFFRiwrQ0FBb0I7O0lBRXBCLHlEQUE2Qjs7SUFFN0IsMkRBQXlCOztJQUV6QixxRUFBbUU7O0lBRW5FLG1EQUFvQjs7Ozs7SUFHbEIsZ0RBQTBCOzs7OztJQUMxQixtREFBcUM7Ozs7O0lBQ3JDLDZDQUF1Qzs7Ozs7SUFDdkMsNkNBQStCOzs7OztJQUMvQiw2Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBUeXBlLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVDb21wb25lbnRzIH0gZnJvbSAnLi4vbW9kZWxzL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9yZXBsYWNlYWJsZS1jb21wb25lbnRzLnN0YXRlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSB9IGZyb20gJy4uL3V0aWxzL3J4anMtdXRpbHMnO1xyXG5pbXBvcnQgY29tcGFyZSBmcm9tICdqdXN0LWNvbXBhcmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbYWJwUmVwbGFjZWFibGVUZW1wbGF0ZV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBSZXBsYWNlYWJsZVRlbXBsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCdhYnBSZXBsYWNlYWJsZVRlbXBsYXRlJylcclxuICBkYXRhOiBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUmVwbGFjZWFibGVUZW1wbGF0ZURpcmVjdGl2ZUlucHV0PGFueSwgYW55PjtcclxuXHJcbiAgcHJvdmlkZWREYXRhID0geyBpbnB1dHM6IHt9LCBvdXRwdXRzOiB7fSB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5SZXBsYWNlYWJsZVRlbXBsYXRlRGF0YTxcclxuICAgIGFueSxcclxuICAgIGFueVxyXG4gID47XHJcblxyXG4gIGNvbnRleHQgPSB7fSBhcyBhbnk7XHJcblxyXG4gIGV4dGVybmFsQ29tcG9uZW50OiBUeXBlPGFueT47XHJcblxyXG4gIGRlZmF1bHRDb21wb25lbnRSZWY6IGFueTtcclxuXHJcbiAgZGVmYXVsdENvbXBvbmVudFN1YnNjcmlwdGlvbnMgPSB7fSBhcyBBQlAuRGljdGlvbmFyeTxTdWJzY3JpcHRpb24+O1xyXG5cclxuICBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgIHByaXZhdGUgY2ZSZXM6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICApIHtcclxuICAgIHRoaXMuY29udGV4dCA9IHtcclxuICAgICAgaW5pdFRlbXBsYXRlOiByZWYgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzZXREZWZhdWx0Q29tcG9uZW50KCk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Q29tcG9uZW50UmVmID0gcmVmO1xyXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdENvbXBvbmVudElucHV0cygpO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuc2VsZWN0KFJlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlLmdldENvbXBvbmVudCh0aGlzLmRhdGEuY29tcG9uZW50S2V5KSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKFxyXG4gICAgICAgICAgKHJlcyA9IHt9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5SZXBsYWNlYWJsZUNvbXBvbmVudCkgPT5cclxuICAgICAgICAgICAgIXRoaXMuaW5pdGlhbGl6ZWQgfHwgIWNvbXBhcmUocmVzLmNvbXBvbmVudCwgdGhpcy5leHRlcm5hbENvbXBvbmVudCksXHJcbiAgICAgICAgKSxcclxuICAgICAgICB0YWtlVW50aWxEZXN0cm95KHRoaXMpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyA9IHt9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5SZXBsYWNlYWJsZUNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMudmNSZWYuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmV4dGVybmFsQ29tcG9uZW50ID0gcmVzLmNvbXBvbmVudDtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgICB0aGlzLnJlc2V0RGVmYXVsdENvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcy5jb21wb25lbnQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0UHJvdmlkZWREYXRhKCk7XHJcbiAgICAgICAgICBjb25zdCBjdXN0b21JbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogJ1JFUExBQ0VBQkxFX0RBVEEnLCB1c2VWYWx1ZTogdGhpcy5wcm92aWRlZERhdGEgfV0sXHJcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5pbmplY3RvcixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy52Y1JlZi5jcmVhdGVDb21wb25lbnQoXHJcbiAgICAgICAgICAgIHRoaXMuY2ZSZXMucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkocmVzLmNvbXBvbmVudCksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGN1c3RvbUluamVjdG9yLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy52Y1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZiwgdGhpcy5jb250ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChzbnEoKCkgPT4gY2hhbmdlcy5kYXRhLmN1cnJlbnRWYWx1ZS5pbnB1dHMpICYmIHRoaXMuZGVmYXVsdENvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLnNldERlZmF1bHRDb21wb25lbnRJbnB1dHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge31cclxuXHJcbiAgc2V0RGVmYXVsdENvbXBvbmVudElucHV0cygpIHtcclxuICAgIGlmICghdGhpcy5kZWZhdWx0Q29tcG9uZW50UmVmIHx8ICghdGhpcy5kYXRhLmlucHV0cyAmJiAhdGhpcy5kYXRhLm91dHB1dHMpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS5pbnB1dHMpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kYXRhLmlucHV0cykge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuaW5wdXRzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIGlmICghY29tcGFyZSh0aGlzLmRlZmF1bHRDb21wb25lbnRSZWZba2V5XSwgdGhpcy5kYXRhLmlucHV0c1trZXldLnZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDb21wb25lbnRSZWZba2V5XSA9IHRoaXMuZGF0YS5pbnB1dHNba2V5XS52YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLm91dHB1dHMpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kYXRhLm91dHB1dHMpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLm91dHB1dHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRDb21wb25lbnRTdWJzY3JpcHRpb25zW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q29tcG9uZW50U3Vic2NyaXB0aW9uc1trZXldID0gdGhpcy5kZWZhdWx0Q29tcG9uZW50UmVmW2tleV0uc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5vdXRwdXRzW2tleV0odmFsdWUpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRQcm92aWRlZERhdGEoKSB7XHJcbiAgICB0aGlzLnByb3ZpZGVkRGF0YSA9IHsgLi4udGhpcy5kYXRhLCBpbnB1dHM6IHt9IH07XHJcblxyXG4gICAgaWYgKCF0aGlzLmRhdGEuaW5wdXRzKSByZXR1cm47XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLnByb3ZpZGVkRGF0YS5pbnB1dHMsIHtcclxuICAgICAgLi4uT2JqZWN0LmtleXModGhpcy5kYXRhLmlucHV0cykucmVkdWNlKFxyXG4gICAgICAgIChhY2MsIGtleSkgPT4gKHtcclxuICAgICAgICAgIC4uLmFjYyxcclxuICAgICAgICAgIFtrZXldOiB7XHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLmRhdGEuaW5wdXRzW2tleV0udmFsdWUsXHJcbiAgICAgICAgICAgIC4uLih0aGlzLmRhdGEuaW5wdXRzW2tleV0udHdvV2F5ICYmIHtcclxuICAgICAgICAgICAgICBzZXQ6IG5ld1ZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5pbnB1dHNba2V5XS52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm91dHB1dHNbYCR7a2V5fUNoYW5nZWBdKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAge30sXHJcbiAgICAgICksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0RGVmYXVsdENvbXBvbmVudCgpIHtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdENvbXBvbmVudFN1YnNjcmlwdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgdGhpcy5kZWZhdWx0Q29tcG9uZW50U3Vic2NyaXB0aW9uc1trZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGVmYXVsdENvbXBvbmVudFN1YnNjcmlwdGlvbnMgPSB7fSBhcyBBQlAuRGljdGlvbmFyeTxTdWJzY3JpcHRpb24+O1xyXG4gICAgdGhpcy5kZWZhdWx0Q29tcG9uZW50UmVmID0gbnVsbDtcclxuICB9XHJcbn1cclxuIl19