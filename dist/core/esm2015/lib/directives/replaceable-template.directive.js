/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/replaceable-template.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, Injector, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Store } from '@ngxs/store';
import { filter } from 'rxjs/operators';
import { ReplaceableComponentsState } from '../states/replaceable-components.state';
import { takeUntilDestroy } from '../utils/rxjs-utils';
import compare from 'just-compare';
import snq from 'snq';
export class ReplaceableTemplateDirective {
    /**
     * @param {?} injector
     * @param {?} templateRef
     * @param {?} cfRes
     * @param {?} vcRef
     * @param {?} store
     */
    constructor(injector, templateRef, cfRes, vcRef, store) {
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
            ref => {
                this.resetDefaultComponent();
                this.defaultComponentRef = ref;
                this.setDefaultComponentInputs();
            }),
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store
            .select(ReplaceableComponentsState.getComponent(this.data.componentKey))
            .pipe(filter((/**
         * @param {?=} res
         * @return {?}
         */
        (res = (/** @type {?} */ ({}))) => !this.initialized || !compare(res.component, this.externalComponent))), takeUntilDestroy(this))
            .subscribe((/**
         * @param {?=} res
         * @return {?}
         */
        (res = (/** @type {?} */ ({}))) => {
            this.vcRef.clear();
            this.externalComponent = res.component;
            if (this.defaultComponentRef) {
                this.resetDefaultComponent();
            }
            if (res.component) {
                this.setProvidedData();
                /** @type {?} */
                const customInjector = Injector.create({
                    providers: [{ provide: 'REPLACEABLE_DATA', useValue: this.providedData }],
                    parent: this.injector,
                });
                this.vcRef.createComponent(this.cfRes.resolveComponentFactory(res.component), 0, customInjector);
            }
            else {
                this.vcRef.createEmbeddedView(this.templateRef, this.context);
            }
            this.initialized = true;
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (snq((/**
         * @return {?}
         */
        () => changes.data.currentValue.inputs)) && this.defaultComponentRef) {
            this.setDefaultComponentInputs();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    setDefaultComponentInputs() {
        if (!this.defaultComponentRef || (!this.data.inputs && !this.data.outputs))
            return;
        if (this.data.inputs) {
            for (const key in this.data.inputs) {
                if (this.data.inputs.hasOwnProperty(key)) {
                    if (!compare(this.defaultComponentRef[key], this.data.inputs[key].value)) {
                        this.defaultComponentRef[key] = this.data.inputs[key].value;
                    }
                }
            }
        }
        if (this.data.outputs) {
            for (const key in this.data.outputs) {
                if (this.data.outputs.hasOwnProperty(key)) {
                    if (!this.defaultComponentSubscriptions[key]) {
                        this.defaultComponentSubscriptions[key] = this.defaultComponentRef[key].subscribe((/**
                         * @param {?} value
                         * @return {?}
                         */
                        value => {
                            this.data.outputs[key](value);
                        }));
                    }
                }
            }
        }
    }
    /**
     * @return {?}
     */
    setProvidedData() {
        this.providedData = Object.assign({}, this.data, { inputs: {} });
        if (!this.data.inputs)
            return;
        Object.defineProperties(this.providedData.inputs, Object.assign({}, Object.keys(this.data.inputs).reduce((/**
         * @param {?} acc
         * @param {?} key
         * @return {?}
         */
        (acc, key) => (Object.assign({}, acc, { [key]: Object.assign({ enumerable: true, configurable: true, get: (/**
                 * @return {?}
                 */
                () => this.data.inputs[key].value) }, (this.data.inputs[key].twoWay && {
                set: (/**
                 * @param {?} newValue
                 * @return {?}
                 */
                newValue => {
                    this.data.inputs[key].value = newValue;
                    this.data.outputs[`${key}Change`](newValue);
                }),
            })) }))), {})));
    }
    /**
     * @return {?}
     */
    resetDefaultComponent() {
        Object.keys(this.defaultComponentSubscriptions).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.defaultComponentSubscriptions[key].unsubscribe();
        }));
        this.defaultComponentSubscriptions = (/** @type {?} */ ({}));
        this.defaultComponentRef = null;
    }
}
ReplaceableTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[abpReplaceableTemplate]' },] }
];
/** @nocollapse */
ReplaceableTemplateDirective.ctorParameters = () => [
    { type: Injector },
    { type: TemplateRef },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: Store }
];
ReplaceableTemplateDirective.propDecorators = {
    data: [{ type: Input, args: ['abpReplaceableTemplate',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZWFibGUtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvcmVwbGFjZWFibGUtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsUUFBUSxFQUNSLEtBQUssRUFLTCxXQUFXLEVBRVgsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sT0FBTyxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFHdEIsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7Ozs7SUFtQnZDLFlBQ1UsUUFBa0IsRUFDbEIsV0FBNkIsRUFDN0IsS0FBK0IsRUFDL0IsS0FBdUIsRUFDdkIsS0FBWTtRQUpaLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBQy9CLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQU87UUFwQnRCLGlCQUFZLEdBQUcsbUJBQUEsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFHekMsQ0FBQztRQUVGLFlBQU8sR0FBRyxtQkFBQSxFQUFFLEVBQU8sQ0FBQztRQU1wQixrQ0FBNkIsR0FBRyxtQkFBQSxFQUFFLEVBQWdDLENBQUM7UUFFbkUsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFTbEIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFlBQVk7Ozs7WUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUM7Z0JBQy9CLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1lBQ25DLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLO2FBQ1AsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3ZFLElBQUksQ0FDSCxNQUFNOzs7O1FBQ0osQ0FBQyxHQUFHLEdBQUcsbUJBQUEsRUFBRSxFQUE4QyxFQUFFLEVBQUUsQ0FDekQsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQ3ZFLEVBQ0QsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQ3ZCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsR0FBRyxHQUFHLG1CQUFBLEVBQUUsRUFBOEMsRUFBRSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDdkMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2FBQzlCO1lBRUQsSUFBSSxHQUFHLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7O3NCQUNqQixjQUFjLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDckMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDekUsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO2lCQUN0QixDQUFDO2dCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFDakQsQ0FBQyxFQUNELGNBQWMsQ0FDZixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvRDtZQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDM0UsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVyxLQUFJLENBQUM7Ozs7SUFFaEIseUJBQXlCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFBRSxPQUFPO1FBRW5GLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDbEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN4RSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO3FCQUM3RDtpQkFDRjthQUNGO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUM1QyxJQUFJLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVM7Ozs7d0JBQy9FLEtBQUssQ0FBQyxFQUFFOzRCQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNoQyxDQUFDLEVBQ0YsQ0FBQztxQkFDSDtpQkFDRjthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLHFCQUFRLElBQUksQ0FBQyxJQUFJLElBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRSxDQUFDO1FBRWpELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQzlCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sb0JBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNOzs7OztRQUNyQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLG1CQUNULEdBQUcsSUFDTixDQUFDLEdBQUcsQ0FBQyxrQkFDSCxVQUFVLEVBQUUsSUFBSSxFQUNoQixZQUFZLEVBQUUsSUFBSSxFQUNsQixHQUFHOzs7Z0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxLQUNuQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSTtnQkFDbEMsR0FBRzs7OztnQkFBRSxRQUFRLENBQUMsRUFBRTtvQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO29CQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLENBQUMsQ0FBQTthQUNGLENBQUMsS0FFSixHQUNGLEVBQUUsQ0FDSCxFQUNELENBQUM7SUFDTCxDQUFDOzs7O0lBRUQscUJBQXFCO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsT0FBTzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4RCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyw2QkFBNkIsR0FBRyxtQkFBQSxFQUFFLEVBQWdDLENBQUM7UUFDeEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDOzs7WUEzSUYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFOzs7O1lBcEJqRCxRQUFRO1lBTVIsV0FBVztZQVJYLHdCQUF3QjtZQVV4QixnQkFBZ0I7WUFFVCxLQUFLOzs7bUJBWVgsS0FBSyxTQUFDLHdCQUF3Qjs7OztJQUEvQiw0Q0FDd0U7O0lBRXhFLG9EQUdFOztJQUVGLCtDQUFvQjs7SUFFcEIseURBQTZCOztJQUU3QiwyREFBeUI7O0lBRXpCLHFFQUFtRTs7SUFFbkUsbURBQW9COzs7OztJQUdsQixnREFBMEI7Ozs7O0lBQzFCLG1EQUFxQzs7Ozs7SUFDckMsNkNBQXVDOzs7OztJQUN2Qyw2Q0FBK0I7Ozs7O0lBQy9CLDZDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIERpcmVjdGl2ZSxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4uL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHMgfSBmcm9tICcuLi9tb2RlbHMvcmVwbGFjZWFibGUtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFJlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMuc3RhdGUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnLi4vdXRpbHMvcnhqcy11dGlscyc7XHJcbmltcG9ydCBjb21wYXJlIGZyb20gJ2p1c3QtY29tcGFyZSc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thYnBSZXBsYWNlYWJsZVRlbXBsYXRlXScgfSlcclxuZXhwb3J0IGNsYXNzIFJlcGxhY2VhYmxlVGVtcGxhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoJ2FicFJlcGxhY2VhYmxlVGVtcGxhdGUnKVxyXG4gIGRhdGE6IFJlcGxhY2VhYmxlQ29tcG9uZW50cy5SZXBsYWNlYWJsZVRlbXBsYXRlRGlyZWN0aXZlSW5wdXQ8YW55LCBhbnk+O1xyXG5cclxuICBwcm92aWRlZERhdGEgPSB7IGlucHV0czoge30sIG91dHB1dHM6IHt9IH0gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlJlcGxhY2VhYmxlVGVtcGxhdGVEYXRhPFxyXG4gICAgYW55LFxyXG4gICAgYW55XHJcbiAgPjtcclxuXHJcbiAgY29udGV4dCA9IHt9IGFzIGFueTtcclxuXHJcbiAgZXh0ZXJuYWxDb21wb25lbnQ6IFR5cGU8YW55PjtcclxuXHJcbiAgZGVmYXVsdENvbXBvbmVudFJlZjogYW55O1xyXG5cclxuICBkZWZhdWx0Q29tcG9uZW50U3Vic2NyaXB0aW9ucyA9IHt9IGFzIEFCUC5EaWN0aW9uYXJ5PFN1YnNjcmlwdGlvbj47XHJcblxyXG4gIGluaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgcHJpdmF0ZSBjZlJlczogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICkge1xyXG4gICAgdGhpcy5jb250ZXh0ID0ge1xyXG4gICAgICBpbml0VGVtcGxhdGU6IHJlZiA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXNldERlZmF1bHRDb21wb25lbnQoKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRDb21wb25lbnRSZWYgPSByZWY7XHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0Q29tcG9uZW50SW5wdXRzKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5zZWxlY3QoUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGUuZ2V0Q29tcG9uZW50KHRoaXMuZGF0YS5jb21wb25lbnRLZXkpKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIoXHJcbiAgICAgICAgICAocmVzID0ge30gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlJlcGxhY2VhYmxlQ29tcG9uZW50KSA9PlxyXG4gICAgICAgICAgICAhdGhpcy5pbml0aWFsaXplZCB8fCAhY29tcGFyZShyZXMuY29tcG9uZW50LCB0aGlzLmV4dGVybmFsQ29tcG9uZW50KSxcclxuICAgICAgICApLFxyXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3kodGhpcyksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgocmVzID0ge30gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlJlcGxhY2VhYmxlQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy52Y1JlZi5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZXh0ZXJuYWxDb21wb25lbnQgPSByZXMuY29tcG9uZW50O1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRDb21wb25lbnRSZWYpIHtcclxuICAgICAgICAgIHRoaXMucmVzZXREZWZhdWx0Q29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzLmNvbXBvbmVudCkge1xyXG4gICAgICAgICAgdGhpcy5zZXRQcm92aWRlZERhdGEoKTtcclxuICAgICAgICAgIGNvbnN0IGN1c3RvbUluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiAnUkVQTEFDRUFCTEVfREFUQScsIHVzZVZhbHVlOiB0aGlzLnByb3ZpZGVkRGF0YSB9XSxcclxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLnZjUmVmLmNyZWF0ZUNvbXBvbmVudChcclxuICAgICAgICAgICAgdGhpcy5jZlJlcy5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShyZXMuY29tcG9uZW50KSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgY3VzdG9tSW5qZWN0b3IsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmLCB0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHNucSgoKSA9PiBjaGFuZ2VzLmRhdGEuY3VycmVudFZhbHVlLmlucHV0cykgJiYgdGhpcy5kZWZhdWx0Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHRoaXMuc2V0RGVmYXVsdENvbXBvbmVudElucHV0cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7fVxyXG5cclxuICBzZXREZWZhdWx0Q29tcG9uZW50SW5wdXRzKCkge1xyXG4gICAgaWYgKCF0aGlzLmRlZmF1bHRDb21wb25lbnRSZWYgfHwgKCF0aGlzLmRhdGEuaW5wdXRzICYmICF0aGlzLmRhdGEub3V0cHV0cykpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLmlucHV0cykge1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRhdGEuaW5wdXRzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5pbnB1dHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgaWYgKCFjb21wYXJlKHRoaXMuZGVmYXVsdENvbXBvbmVudFJlZltrZXldLCB0aGlzLmRhdGEuaW5wdXRzW2tleV0udmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdENvbXBvbmVudFJlZltrZXldID0gdGhpcy5kYXRhLmlucHV0c1trZXldLnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGEub3V0cHV0cykge1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRhdGEub3V0cHV0cykge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEub3V0cHV0cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdENvbXBvbmVudFN1YnNjcmlwdGlvbnNba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDb21wb25lbnRTdWJzY3JpcHRpb25zW2tleV0gPSB0aGlzLmRlZmF1bHRDb21wb25lbnRSZWZba2V5XS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm91dHB1dHNba2V5XSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFByb3ZpZGVkRGF0YSgpIHtcclxuICAgIHRoaXMucHJvdmlkZWREYXRhID0geyAuLi50aGlzLmRhdGEsIGlucHV0czoge30gfTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGF0YS5pbnB1dHMpIHJldHVybjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMucHJvdmlkZWREYXRhLmlucHV0cywge1xyXG4gICAgICAuLi5PYmplY3Qua2V5cyh0aGlzLmRhdGEuaW5wdXRzKS5yZWR1Y2UoXHJcbiAgICAgICAgKGFjYywga2V5KSA9PiAoe1xyXG4gICAgICAgICAgLi4uYWNjLFxyXG4gICAgICAgICAgW2tleV06IHtcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBnZXQ6ICgpID0+IHRoaXMuZGF0YS5pbnB1dHNba2V5XS52YWx1ZSxcclxuICAgICAgICAgICAgLi4uKHRoaXMuZGF0YS5pbnB1dHNba2V5XS50d29XYXkgJiYge1xyXG4gICAgICAgICAgICAgIHNldDogbmV3VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmlucHV0c1trZXldLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEub3V0cHV0c1tgJHtrZXl9Q2hhbmdlYF0obmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB7fSxcclxuICAgICAgKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzZXREZWZhdWx0Q29tcG9uZW50KCkge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZhdWx0Q29tcG9uZW50U3Vic2NyaXB0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICB0aGlzLmRlZmF1bHRDb21wb25lbnRTdWJzY3JpcHRpb25zW2tleV0udW5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kZWZhdWx0Q29tcG9uZW50U3Vic2NyaXB0aW9ucyA9IHt9IGFzIEFCUC5EaWN0aW9uYXJ5PFN1YnNjcmlwdGlvbj47XHJcbiAgICB0aGlzLmRlZmF1bHRDb21wb25lbnRSZWYgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=