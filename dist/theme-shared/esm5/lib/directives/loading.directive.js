/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/loading.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, ViewContainerRef, ComponentFactoryResolver, Input, Injector, HostBinding, Renderer2, } from '@angular/core';
import { LoadingComponent } from '../components/loading/loading.component';
var LoadingDirective = /** @class */ (function () {
    function LoadingDirective(elRef, vcRef, cdRes, injector, renderer) {
        this.elRef = elRef;
        this.vcRef = vcRef;
        this.cdRes = cdRes;
        this.injector = injector;
        this.renderer = renderer;
        this.position = 'relative';
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
        targetElement: [{ type: Input, args: ['abpLoadingTargetElement',] }]
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
    LoadingDirective.prototype.componentRef;
    /** @type {?} */
    LoadingDirective.prototype.rootNode;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBRVYsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixLQUFLLEVBQ0wsUUFBUSxFQUdSLFdBQVcsRUFFWCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFM0U7SUFzQ0UsMEJBQ1UsS0FBOEIsRUFDOUIsS0FBdUIsRUFDdkIsS0FBK0IsRUFDL0IsUUFBa0IsRUFDbEIsUUFBbUI7UUFKbkIsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBMEI7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBdEM3QixhQUFRLEdBQUcsVUFBVSxDQUFDO0lBdUNuQixDQUFDO0lBckNKLHNCQUNJLHFDQUFPOzs7O1FBRFg7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFFRCxVQUFZLFFBQWlCO1lBQTdCLGlCQWtCQztZQWpCQyxVQUFVOzs7WUFBQztnQkFDVCxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksRUFBRTtvQkFDdEIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsS0FBSzt5QkFDM0IsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUM7eUJBQ3pDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzFCO2dCQUVELElBQUksUUFBUSxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTtvQkFDOUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLG1CQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsRixLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQy9DO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEUsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ3RCO2dCQUVELEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQzNCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUM7OztPQXBCQTs7OztJQW9DRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNqQixJQUFBLDZCQUF3RCxFQUF0RCw4QkFBWSxFQUFFLDRCQUF3QztZQUM5RCxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdFLElBQUksQ0FBQyxhQUFhLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFlLENBQUM7YUFDMUU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQzthQUMvQztTQUNGO0lBQ0gsQ0FBQzs7Z0JBdkRGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7Ozs7Z0JBZnJDLFVBQVU7Z0JBRVYsZ0JBQWdCO2dCQUNoQix3QkFBd0I7Z0JBRXhCLFFBQVE7Z0JBS1IsU0FBUzs7OzJCQVNSLFdBQVcsU0FBQyxnQkFBZ0I7MEJBRzVCLEtBQUssU0FBQyxZQUFZO2dDQXlCbEIsS0FBSyxTQUFDLHlCQUF5Qjs7SUF3QmxDLHVCQUFDO0NBQUEsQUF4REQsSUF3REM7U0F2RFksZ0JBQWdCOzs7Ozs7SUFDM0Isb0NBQTBCOztJQUUxQixvQ0FDc0I7O0lBMkJ0Qix5Q0FDMkI7O0lBRTNCLHdDQUE2Qzs7SUFDN0Msb0NBQXlCOzs7OztJQUd2QixpQ0FBc0M7Ozs7O0lBQ3RDLGlDQUErQjs7Ozs7SUFDL0IsaUNBQXVDOzs7OztJQUN2QyxvQ0FBMEI7Ozs7O0lBQzFCLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBJbnB1dCxcclxuICBJbmplY3RvcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgQ29tcG9uZW50RmFjdG9yeSxcclxuICBIb3N0QmluZGluZyxcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE9uSW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbYWJwTG9hZGluZ10nIH0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIF9sb2FkaW5nOiBib29sZWFuO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBvc2l0aW9uJylcclxuICBwb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcblxyXG4gIEBJbnB1dCgnYWJwTG9hZGluZycpXHJcbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcclxuICB9XHJcblxyXG4gIHNldCBsb2FkaW5nKG5ld1ZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFJlZikge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jZFJlc1xyXG4gICAgICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KExvYWRpbmdDb21wb25lbnQpXHJcbiAgICAgICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobmV3VmFsdWUgJiYgIXRoaXMucm9vdE5vZGUpIHtcclxuICAgICAgICB0aGlzLnJvb3ROb2RlID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF07XHJcbiAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMucm9vdE5vZGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yb290Tm9kZS5wYXJlbnRFbGVtZW50LCB0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICB0aGlzLnJvb3ROb2RlID0gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fbG9hZGluZyA9IG5ld1ZhbHVlO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2FicExvYWRpbmdUYXJnZXRFbGVtZW50JylcclxuICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TG9hZGluZ0NvbXBvbmVudD47XHJcbiAgcm9vdE5vZGU6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgY2RSZXM6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMudGFyZ2V0RWxlbWVudCkge1xyXG4gICAgICBjb25zdCB7IG9mZnNldEhlaWdodCwgb2Zmc2V0V2lkdGggfSA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgaWYgKCFvZmZzZXRIZWlnaHQgJiYgIW9mZnNldFdpZHRoICYmIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==