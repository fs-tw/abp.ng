/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/loading.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, HostBinding, Injector, Input, Renderer2, ViewContainerRef, } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { LoadingComponent } from '../components/loading/loading.component';
var LoadingDirective = /** @class */ (function () {
    function LoadingDirective(elRef, vcRef, cdRes, injector, renderer) {
        this.elRef = elRef;
        this.vcRef = vcRef;
        this.cdRes = cdRes;
        this.injector = injector;
        this.renderer = renderer;
        this.position = 'relative';
        this.delay = 0;
    }
    Object.defineProperty(LoadingDirective.prototype, "loading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (!newValue && _this.timerSubscription) {
                    _this.timerSubscription.unsubscribe();
                    _this.timerSubscription = null;
                    _this._loading = newValue;
                    if (_this.rootNode) {
                        _this.renderer.removeChild(_this.rootNode.parentElement, _this.rootNode);
                        _this.rootNode = null;
                    }
                    return;
                }
                _this.timerSubscription = timer(_this.delay)
                    .pipe(take(1))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    if (!_this.componentRef) {
                        _this.componentRef = _this.cdRes
                            .resolveComponentFactory(LoadingComponent)
                            .create(_this.injector);
                    }
                    if (newValue && !_this.rootNode) {
                        _this.rootNode = ((/** @type {?} */ (_this.componentRef.hostView))).rootNodes[0];
                        _this.targetElement.appendChild(_this.rootNode);
                    }
                    else if (_this.rootNode) {
                        _this.renderer.removeChild(_this.rootNode.parentElement, _this.rootNode);
                        _this.rootNode = null;
                    }
                    _this._loading = newValue;
                    _this.timerSubscription = null;
                }));
            }), 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LoadingDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.targetElement) {
            var _a = this.elRef.nativeElement, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
            if (!offsetHeight && !offsetWidth && this.elRef.nativeElement.children.length) {
                this.targetElement = (/** @type {?} */ (this.elRef.nativeElement.children[0]));
            }
            else {
                this.targetElement = this.elRef.nativeElement;
            }
        }
    };
    /**
     * @return {?}
     */
    LoadingDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    };
    LoadingDirective.decorators = [
        { type: Directive, args: [{ selector: '[abpLoading]' },] }
    ];
    /** @nocollapse */
    LoadingDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: Renderer2 }
    ]; };
    LoadingDirective.propDecorators = {
        position: [{ type: HostBinding, args: ['style.position',] }],
        loading: [{ type: Input, args: ['abpLoading',] }],
        targetElement: [{ type: Input, args: ['abpLoadingTargetElement',] }],
        delay: [{ type: Input, args: ['abpLoadingDelay',] }]
    };
    return LoadingDirective;
}());
export { LoadingDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUV4QixTQUFTLEVBQ1QsVUFBVSxFQUVWLFdBQVcsRUFDWCxRQUFRLEVBQ1IsS0FBSyxFQUdMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBMkRFLDBCQUNVLEtBQThCLEVBQzlCLEtBQXVCLEVBQ3ZCLEtBQStCLEVBQy9CLFFBQWtCLEVBQ2xCLFFBQW1CO1FBSm5CLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTNEN0IsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQWdEdEIsVUFBSyxHQUFHLENBQUMsQ0FBQztJQVlQLENBQUM7SUExREosc0JBQ0kscUNBQU87Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQUVELFVBQVksUUFBaUI7WUFBN0IsaUJBbUNDO1lBbENDLFVBQVU7OztZQUFDO2dCQUNULElBQUksQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLGlCQUFpQixFQUFFO29CQUN2QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3JDLEtBQUks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b0NBQTBCOztJQUUxQixvQ0FDc0I7O0lBNEN0Qix5Q0FDMkI7O0lBRTNCLGlDQUNVOztJQUVWLHdDQUE2Qzs7SUFDN0Msb0NBQXlCOztJQUN6Qiw2Q0FBZ0M7Ozs7O0lBRzlCLGlDQUFzQzs7Ozs7SUFDdEMsaUNBQStCOzs7OztJQUMvQixpQ0FBdUM7Ozs7O0lBQ3ZDLG9DQUEwQjs7Ozs7SUFDMUIsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBIb3N0QmluZGluZyxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIHRpbWVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2FicExvYWRpbmddJyB9KVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9sb2FkaW5nOiBib29sZWFuO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBvc2l0aW9uJylcclxuICBwb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcblxyXG4gIEBJbnB1dCgnYWJwTG9hZGluZycpXHJcbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcclxuICB9XHJcblxyXG4gIHNldCBsb2FkaW5nKG5ld1ZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCFuZXdWYWx1ZSAmJiB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy50aW1lclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucm9vdE5vZGUpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yb290Tm9kZS5wYXJlbnRFbGVtZW50LCB0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgIHRoaXMucm9vdE5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24gPSB0aW1lcih0aGlzLmRlbGF5KVxyXG4gICAgICAgIC5waXBlKHRha2UoMSkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jZFJlc1xyXG4gICAgICAgICAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShMb2FkaW5nQ29tcG9uZW50KVxyXG4gICAgICAgICAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKG5ld1ZhbHVlICYmICF0aGlzLnJvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdE5vZGUgPSAodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMucm9vdE5vZGUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yb290Tm9kZS5wYXJlbnRFbGVtZW50LCB0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgICAgdGhpcy5yb290Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5fbG9hZGluZyA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgdGhpcy50aW1lclN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnYWJwTG9hZGluZ1RhcmdldEVsZW1lbnQnKVxyXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBASW5wdXQoJ2FicExvYWRpbmdEZWxheScpXHJcbiAgZGVsYXkgPSAwO1xyXG5cclxuICBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxMb2FkaW5nQ29tcG9uZW50PjtcclxuICByb290Tm9kZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgdGltZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIGNkUmVzOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLnRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgeyBvZmZzZXRIZWlnaHQsIG9mZnNldFdpZHRoIH0gPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGlmICghb2Zmc2V0SGVpZ2h0ICYmICFvZmZzZXRXaWR0aCAmJiB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy50aW1lclN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==