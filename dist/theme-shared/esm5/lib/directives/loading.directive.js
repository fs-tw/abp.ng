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
                    else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUV4QixTQUFTLEVBQ1QsVUFBVSxFQUVWLFdBQVcsRUFDWCxRQUFRLEVBQ1IsS0FBSyxFQUdMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBMkRFLDBCQUNVLEtBQThCLEVBQzlCLEtBQXVCLEVBQ3ZCLEtBQStCLEVBQy9CLFFBQWtCLEVBQ2xCLFFBQW1CO1FBSm5CLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTNEN0IsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQWdEdEIsVUFBSyxHQUFHLENBQUMsQ0FBQztJQVlQLENBQUM7SUExREosc0JBQ0kscUNBQU87Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQUVELFVBQVksUUFBaUI7WUFBN0IsaUJBbUNDO1lBbENDLFVBQVU7OztZQUFDO2dCQUNULElBQUksQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLGlCQUFpQixFQUFFO29CQUN2QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3JDLEtBQUks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dEIseUNBQzJCOztJQUUzQixpQ0FDVTs7SUFFVix3Q0FBNkM7O0lBQzdDLG9DQUF5Qjs7SUFDekIsNkNBQWdDOzs7OztJQUc5QixpQ0FBc0M7Ozs7O0lBQ3RDLGlDQUErQjs7Ozs7SUFDL0IsaUNBQXVDOzs7OztJQUN2QyxvQ0FBMEI7Ozs7O0lBQzFCLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCB0aW1lciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thYnBMb2FkaW5nXScgfSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfbG9hZGluZzogYm9vbGVhbjtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wb3NpdGlvbicpXHJcbiAgcG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG5cclxuICBASW5wdXQoJ2FicExvYWRpbmcnKVxyXG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXQgbG9hZGluZyhuZXdWYWx1ZTogYm9vbGVhbikge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghbmV3VmFsdWUgJiYgdGhpcy50aW1lclN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nID0gbmV3VmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvb3ROb2RlKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucm9vdE5vZGUucGFyZW50RWxlbWVudCwgdGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICB0aGlzLnJvb3ROb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uID0gdGltZXIodGhpcy5kZWxheSlcclxuICAgICAgICAucGlwZSh0YWtlKDEpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFJlZikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuY2RSZXNcclxuICAgICAgICAgICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTG9hZGluZ0NvbXBvbmVudClcclxuICAgICAgICAgICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChuZXdWYWx1ZSAmJiAhdGhpcy5yb290Tm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3ROb2RlID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF07XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yb290Tm9kZS5wYXJlbnRFbGVtZW50LCB0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgICAgdGhpcy5yb290Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5fbG9hZGluZyA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgdGhpcy50aW1lclN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnYWJwTG9hZGluZ1RhcmdldEVsZW1lbnQnKVxyXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBASW5wdXQoJ2FicExvYWRpbmdEZWxheScpXHJcbiAgZGVsYXkgPSAwO1xyXG5cclxuICBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxMb2FkaW5nQ29tcG9uZW50PjtcclxuICByb290Tm9kZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgdGltZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIGNkUmVzOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLnRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgeyBvZmZzZXRIZWlnaHQsIG9mZnNldFdpZHRoIH0gPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGlmICghb2Zmc2V0SGVpZ2h0ICYmICFvZmZzZXRXaWR0aCAmJiB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy50aW1lclN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==