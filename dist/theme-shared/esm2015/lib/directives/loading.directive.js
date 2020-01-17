/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/loading.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, ViewContainerRef, ComponentFactoryResolver, Input, Injector, HostBinding, Renderer2, } from '@angular/core';
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
    targetElement: [{ type: Input, args: ['abpLoadingTargetElement',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBRVYsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixLQUFLLEVBQ0wsUUFBUSxFQUdSLFdBQVcsRUFFWCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHM0UsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7Ozs7SUFxQzNCLFlBQ1UsS0FBOEIsRUFDOUIsS0FBdUIsRUFDdkIsS0FBK0IsRUFDL0IsUUFBa0IsRUFDbEIsUUFBbUI7UUFKbkIsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBMEI7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBdEM3QixhQUFRLEdBQUcsVUFBVSxDQUFDO0lBdUNuQixDQUFDOzs7O0lBckNKLElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELElBQUksT0FBTyxDQUFDLFFBQWlCO1FBQzNCLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLO3FCQUMzQix1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMxQjtZQUVELElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN0QjtZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzNCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7SUFnQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2tCQUNqQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7WUFDOUQsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUM3RSxJQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBZSxDQUFDO2FBQzFFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7YUFDL0M7U0FDRjtJQUNILENBQUM7OztZQXZERixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFOzs7O1lBZnJDLFVBQVU7WUFFVixnQkFBZ0I7WUFDaEIsd0JBQXdCO1lBRXhCLFFBQVE7WUFLUixTQUFTOzs7dUJBU1IsV0FBVyxTQUFDLGdCQUFnQjtzQkFHNUIsS0FBSyxTQUFDLFlBQVk7NEJBeUJsQixLQUFLLFNBQUMseUJBQXlCOzs7Ozs7O0lBOUJoQyxvQ0FBMEI7O0lBRTFCLG9DQUNzQjs7SUEyQnRCLHlDQUMyQjs7SUFFM0Isd0NBQTZDOztJQUM3QyxvQ0FBeUI7Ozs7O0lBR3ZCLGlDQUFzQzs7Ozs7SUFDdEMsaUNBQStCOzs7OztJQUMvQixpQ0FBdUM7Ozs7O0lBQ3ZDLG9DQUEwQjs7Ozs7SUFDMUIsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIElucHV0LFxyXG4gIEluamVjdG9yLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgT25Jbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thYnBMb2FkaW5nXScgfSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgX2xvYWRpbmc6IGJvb2xlYW47XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucG9zaXRpb24nKVxyXG4gIHBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuXHJcbiAgQElucHV0KCdhYnBMb2FkaW5nJylcclxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0IGxvYWRpbmcobmV3VmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuY29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNkUmVzXHJcbiAgICAgICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTG9hZGluZ0NvbXBvbmVudClcclxuICAgICAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZXdWYWx1ZSAmJiAhdGhpcy5yb290Tm9kZSkge1xyXG4gICAgICAgIHRoaXMucm9vdE5vZGUgPSAodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXTtcclxuICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5yb290Tm9kZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJvb3ROb2RlLnBhcmVudEVsZW1lbnQsIHRoaXMucm9vdE5vZGUpO1xyXG4gICAgICAgIHRoaXMucm9vdE5vZGUgPSBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9sb2FkaW5nID0gbmV3VmFsdWU7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnYWJwTG9hZGluZ1RhcmdldEVsZW1lbnQnKVxyXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxMb2FkaW5nQ29tcG9uZW50PjtcclxuICByb290Tm9kZTogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBjZFJlczogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy50YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgb2Zmc2V0SGVpZ2h0LCBvZmZzZXRXaWR0aCB9ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBpZiAoIW9mZnNldEhlaWdodCAmJiAhb2Zmc2V0V2lkdGggJiYgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19