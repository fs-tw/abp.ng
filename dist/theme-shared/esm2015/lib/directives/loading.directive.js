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
                else if (this.rootNode) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUV4QixTQUFTLEVBQ1QsVUFBVSxFQUVWLFdBQVcsRUFDWCxRQUFRLEVBQ1IsS0FBSyxFQUdMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRzNFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7O0lBMEQzQixZQUNVLEtBQThCLEVBQzlCLEtBQXVCLEVBQ3ZCLEtBQStCLEVBQy9CLFFBQWtCLEVBQ2xCLFFBQW1CO1FBSm5CLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTNEN0IsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQWdEdEIsVUFBSyxHQUFHLENBQUMsQ0FBQztJQVlQLENBQUM7Ozs7SUExREosSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsUUFBaUI7UUFDM0IsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBRXpCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNiLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSzt5QkFDM0IsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUM7eUJBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzFCO2dCQUVELElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsRixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQy9DO3FCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDdEI7Z0JBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDaEMsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7O0lBb0JELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtrQkFDakIsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQzlELElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDN0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxtQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQWUsQ0FBQzthQUMxRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO2FBQy9DO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7OztZQWxGRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFOzs7O1lBZHJDLFVBQVU7WUFRVixnQkFBZ0I7WUFYaEIsd0JBQXdCO1lBTXhCLFFBQVE7WUFJUixTQUFTOzs7dUJBV1IsV0FBVyxTQUFDLGdCQUFnQjtzQkFHNUIsS0FBSyxTQUFDLFlBQVk7NEJBMENsQixLQUFLLFNBQUMseUJBQXlCO29CQUcvQixLQUFLLFNBQUMsaUJBQWlCOzs7Ozs7O0lBbER4QixvQ0FBMEI7O0lBRTFCLG9DQUNzQjs7SUE0Q3RCLHlDQUMyQjs7SUFFM0IsaUNBQ1U7O0lBRVYsd0NBQTZDOztJQUM3QyxvQ0FBeUI7O0lBQ3pCLDZDQUFnQzs7Ozs7SUFHOUIsaUNBQXNDOzs7OztJQUN0QyxpQ0FBK0I7Ozs7O0lBQy9CLGlDQUF1Qzs7Ozs7SUFDdkMsb0NBQTBCOzs7OztJQUMxQixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgdGltZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbYWJwTG9hZGluZ10nIH0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX2xvYWRpbmc6IGJvb2xlYW47XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucG9zaXRpb24nKVxyXG4gIHBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuXHJcbiAgQElucHV0KCdhYnBMb2FkaW5nJylcclxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0IGxvYWRpbmcobmV3VmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIW5ld1ZhbHVlICYmIHRoaXMudGltZXJTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy50aW1lclN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IG5ld1ZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yb290Tm9kZSkge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJvb3ROb2RlLnBhcmVudEVsZW1lbnQsIHRoaXMucm9vdE5vZGUpO1xyXG4gICAgICAgICAgdGhpcy5yb290Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50aW1lclN1YnNjcmlwdGlvbiA9IHRpbWVyKHRoaXMuZGVsYXkpXHJcbiAgICAgICAgLnBpcGUodGFrZSgxKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5jb21wb25lbnRSZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNkUmVzXHJcbiAgICAgICAgICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KExvYWRpbmdDb21wb25lbnQpXHJcbiAgICAgICAgICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAobmV3VmFsdWUgJiYgIXRoaXMucm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yb290Tm9kZSA9ICh0aGlzLmNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJvb3ROb2RlLnBhcmVudEVsZW1lbnQsIHRoaXMucm9vdE5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3ROb2RlID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLl9sb2FkaW5nID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdhYnBMb2FkaW5nVGFyZ2V0RWxlbWVudCcpXHJcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIEBJbnB1dCgnYWJwTG9hZGluZ0RlbGF5JylcclxuICBkZWxheSA9IDA7XHJcblxyXG4gIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPExvYWRpbmdDb21wb25lbnQ+O1xyXG4gIHJvb3ROb2RlOiBIVE1MRGl2RWxlbWVudDtcclxuICB0aW1lclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgY2RSZXM6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMudGFyZ2V0RWxlbWVudCkge1xyXG4gICAgICBjb25zdCB7IG9mZnNldEhlaWdodCwgb2Zmc2V0V2lkdGggfSA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgaWYgKCFvZmZzZXRIZWlnaHQgJiYgIW9mZnNldFdpZHRoICYmIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLnRpbWVyU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19