/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/loading.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, HostBinding, Injector, Input, Renderer2, ViewContainerRef, } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { LoadingComponent } from '../components/loading/loading.component';
export class LoadingDirective {
    /**
     * @param {?} elRef
     * @param {?} vcRef
     * @param {?} cdRes
     * @param {?} injector
     * @param {?} renderer
     */
    constructor(elRef, vcRef, cdRes, injector, renderer) {
        this.elRef = elRef;
        this.vcRef = vcRef;
        this.cdRes = cdRes;
        this.injector = injector;
        this.renderer = renderer;
        this.position = 'relative';
        this.delay = 0;
    }
    /**
     * @return {?}
     */
    get loading() {
        return this._loading;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set loading(newValue) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (!newValue && this.timerSubscription) {
                this.timerSubscription.unsubscribe();
                this.timerSubscription = null;
                this._loading = newValue;
                if (this.rootNode) {
                    this.renderer.removeChild(this.rootNode.parentElement, this.rootNode);
                    this.rootNode = null;
                }
                return;
            }
            this.timerSubscription = timer(this.delay)
                .pipe(take(1))
                .subscribe((/**
             * @return {?}
             */
            () => {
                if (!this.componentRef) {
                    this.componentRef = this.cdRes
                        .resolveComponentFactory(LoadingComponent)
                        .create(this.injector);
                }
                if (newValue && !this.rootNode) {
                    this.rootNode = ((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0];
                    this.targetElement.appendChild(this.rootNode);
                }
                else {
                    this.renderer.removeChild(this.rootNode.parentElement, this.rootNode);
                    this.rootNode = null;
                }
                this._loading = newValue;
                this.timerSubscription = null;
            }));
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.targetElement) {
            const { offsetHeight, offsetWidth } = this.elRef.nativeElement;
            if (!offsetHeight && !offsetWidth && this.elRef.nativeElement.children.length) {
                this.targetElement = (/** @type {?} */ (this.elRef.nativeElement.children[0]));
            }
            else {
                this.targetElement = this.elRef.nativeElement;
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    }
}
LoadingDirective.decorators = [
    { type: Directive, args: [{ selector: '[abpLoading]' },] }
];
/** @nocollapse */
LoadingDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: Renderer2 }
];
LoadingDirective.propDecorators = {
    position: [{ type: HostBinding, args: ['style.position',] }],
    loading: [{ type: Input, args: ['abpLoading',] }],
    targetElement: [{ type: Input, args: ['abpLoadingTargetElement',] }],
    delay: [{ type: Input, args: ['abpLoadingDelay',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype._loading;
    /** @type {?} */
    LoadingDirective.prototype.position;
    /** @type {?} */
    LoadingDirective.prototype.targetElement;
    /** @type {?} */
    LoadingDirective.prototype.delay;
    /** @type {?} */
    LoadingDirective.prototype.componentRef;
    /** @type {?} */
    LoadingDirective.prototype.rootNode;
    /** @type {?} */
    LoadingDirective.prototype.timerSubscription;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.vcRef;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.cdRes;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUV4QixTQUFTLEVBQ1QsVUFBVSxFQUVWLFdBQVcsRUFDWCxRQUFRLEVBQ1IsS0FBSyxFQUdMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRzNFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7O0lBMEQzQixZQUNVLEtBQThCLEVBQzlCLEtBQXVCLEVBQ3ZCLEtBQStCLEVBQy9CLFFBQWtCLEVBQ2xCLFFBQW1CO1FBSm5CLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTNEN0IsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQWdEdEIsVUFBSyxHQUFHLENBQUMsQ0FBQztJQVlQLENBQUM7Ozs7SUExREosSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsUUFBaUI7UUFDM0IsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFX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OztJQUVWLHdDQUE2Qzs7SUFDN0Msb0NBQXlCOztJQUN6Qiw2Q0FBZ0M7Ozs7O0lBRzlCLGlDQUFzQzs7Ozs7SUFDdEMsaUNBQStCOzs7OztJQUMvQixpQ0FBdUM7Ozs7O0lBQ3ZDLG9DQUEwQjs7Ozs7SUFDMUIsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBIb3N0QmluZGluZyxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIHRpbWVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2FicExvYWRpbmddJyB9KVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9sb2FkaW5nOiBib29sZWFuO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBvc2l0aW9uJylcclxuICBwb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcblxyXG4gIEBJbnB1dCgnYWJwTG9hZGluZycpXHJcbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcclxuICB9XHJcblxyXG4gIHNldCBsb2FkaW5nKG5ld1ZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCFuZXdWYWx1ZSAmJiB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy50aW1lclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucm9vdE5vZGUpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yb290Tm9kZS5wYXJlbnRFbGVtZW50LCB0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgIHRoaXMucm9vdE5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24gPSB0aW1lcih0aGlzLmRlbGF5KVxyXG4gICAgICAgIC5waXBlKHRha2UoMSkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jZFJlc1xyXG4gICAgICAgICAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShMb2FkaW5nQ29tcG9uZW50KVxyXG4gICAgICAgICAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKG5ld1ZhbHVlICYmICF0aGlzLnJvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdE5vZGUgPSAodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMucm9vdE5vZGUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJvb3ROb2RlLnBhcmVudEVsZW1lbnQsIHRoaXMucm9vdE5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3ROb2RlID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLl9sb2FkaW5nID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdhYnBMb2FkaW5nVGFyZ2V0RWxlbWVudCcpXHJcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIEBJbnB1dCgnYWJwTG9hZGluZ0RlbGF5JylcclxuICBkZWxheSA9IDA7XHJcblxyXG4gIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPExvYWRpbmdDb21wb25lbnQ+O1xyXG4gIHJvb3ROb2RlOiBIVE1MRGl2RWxlbWVudDtcclxuICB0aW1lclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgY2RSZXM6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMudGFyZ2V0RWxlbWVudCkge1xyXG4gICAgICBjb25zdCB7IG9mZnNldEhlaWdodCwgb2Zmc2V0V2lkdGggfSA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgaWYgKCFvZmZzZXRIZWlnaHQgJiYgIW9mZnNldFdpZHRoICYmIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLnRpbWVyU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19