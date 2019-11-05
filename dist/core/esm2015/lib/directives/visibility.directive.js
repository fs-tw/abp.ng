/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Optional, ElementRef, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import snq from 'snq';
export class VisibilityDirective {
    /**
     * @param {?} elRef
     * @param {?} renderer
     */
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.completed$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.focusedElement && this.elRef) {
            this.focusedElement = this.elRef.nativeElement;
        }
        /** @type {?} */
        let observer;
        observer = new MutationObserver((/**
         * @param {?} mutations
         * @return {?}
         */
        mutations => {
            mutations.forEach((/**
             * @param {?} mutation
             * @return {?}
             */
            mutation => {
                if (!mutation.target)
                    return;
                /** @type {?} */
                const htmlNodes = snq((/**
                 * @return {?}
                 */
                () => Array.from(mutation.target.childNodes).filter((/**
                 * @param {?} node
                 * @return {?}
                 */
                node => node instanceof HTMLElement))), []);
                if (!htmlNodes.length) {
                    this.removeFromDOM();
                }
            }));
        }));
        observer.observe(this.focusedElement, {
            childList: true,
        });
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const htmlNodes = snq((/**
             * @return {?}
             */
            () => Array.from(this.focusedElement.childNodes).filter((/**
             * @param {?} node
             * @return {?}
             */
            node => node instanceof HTMLElement))), []);
            if (!htmlNodes.length)
                this.removeFromDOM();
        }), 0);
        this.completed$.subscribe((/**
         * @return {?}
         */
        () => observer.disconnect()));
    }
    /**
     * @return {?}
     */
    disconnect() {
        this.completed$.next();
        this.completed$.complete();
    }
    /**
     * @return {?}
     */
    removeFromDOM() {
        if (!this.elRef.nativeElement)
            return;
        this.renderer.removeChild(this.elRef.nativeElement.parentElement, this.elRef.nativeElement);
        this.disconnect();
    }
}
VisibilityDirective.decorators = [
    { type: Directive, args: [{
                selector: '[abpVisibility]',
            },] }
];
/** @nocollapse */
VisibilityDirective.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Optional }] },
    { type: Renderer2 }
];
VisibilityDirective.propDecorators = {
    focusedElement: [{ type: Input, args: ['abpVisibility',] }]
};
if (false) {
    /** @type {?} */
    VisibilityDirective.prototype.focusedElement;
    /** @type {?} */
    VisibilityDirective.prototype.completed$;
    /**
     * @type {?}
     * @private
     */
    VisibilityDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    VisibilityDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJpbGl0eS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy92aXNpYmlsaXR5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBS3RCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBTTlCLFlBQWdDLEtBQWlCLEVBQVUsUUFBbUI7UUFBOUMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFGOUUsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7SUFFNkMsQ0FBQzs7OztJQUVsRixlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1NBQ2hEOztZQUVHLFFBQTBCO1FBQzlCLFFBQVEsR0FBRyxJQUFJLGdCQUFnQjs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzFDLFNBQVMsQ0FBQyxPQUFPOzs7O1lBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtvQkFBRSxPQUFPOztzQkFFdkIsU0FBUyxHQUFHLEdBQUc7OztnQkFDbkIsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU07Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksV0FBVyxFQUFDLEdBQ3hGLEVBQUUsQ0FDSDtnQkFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN0QjtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDcEMsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsVUFBVTs7O1FBQUMsR0FBRyxFQUFFOztrQkFDUixTQUFTLEdBQUcsR0FBRzs7O1lBQ25CLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksV0FBVyxFQUFDLEdBQzVGLEVBQUUsQ0FDSDtZQUVELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtnQkFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBRU4sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7WUFBRSxPQUFPO1FBRXRDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUFOb0MsVUFBVSx1QkFhaEMsUUFBUTtZQWIwQixTQUFTOzs7NkJBUXZELEtBQUssU0FBQyxlQUFlOzs7O0lBQXRCLDZDQUM0Qjs7SUFFNUIseUNBQW9DOzs7OztJQUV4QixvQ0FBcUM7Ozs7O0lBQUUsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3B0aW9uYWwsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FicFZpc2liaWxpdHldJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFZpc2liaWxpdHlEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoJ2FicFZpc2liaWxpdHknKVxyXG4gIGZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29tcGxldGVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLmZvY3VzZWRFbGVtZW50ICYmIHRoaXMuZWxSZWYpIHtcclxuICAgICAgdGhpcy5mb2N1c2VkRWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcbiAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XHJcbiAgICAgIG11dGF0aW9ucy5mb3JFYWNoKG11dGF0aW9uID0+IHtcclxuICAgICAgICBpZiAoIW11dGF0aW9uLnRhcmdldCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBodG1sTm9kZXMgPSBzbnEoXHJcbiAgICAgICAgICAoKSA9PiBBcnJheS5mcm9tKG11dGF0aW9uLnRhcmdldC5jaGlsZE5vZGVzKS5maWx0ZXIobm9kZSA9PiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpLFxyXG4gICAgICAgICAgW10sXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKCFodG1sTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUZyb21ET00oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmZvY3VzZWRFbGVtZW50LCB7XHJcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBodG1sTm9kZXMgPSBzbnEoXHJcbiAgICAgICAgKCkgPT4gQXJyYXkuZnJvbSh0aGlzLmZvY3VzZWRFbGVtZW50LmNoaWxkTm9kZXMpLmZpbHRlcihub2RlID0+IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCksXHJcbiAgICAgICAgW10sXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoIWh0bWxOb2Rlcy5sZW5ndGgpIHRoaXMucmVtb3ZlRnJvbURPTSgpO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgdGhpcy5jb21wbGV0ZWQkLnN1YnNjcmliZSgoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCkpO1xyXG4gIH1cclxuXHJcbiAgZGlzY29ubmVjdCgpIHtcclxuICAgIHRoaXMuY29tcGxldGVkJC5uZXh0KCk7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUZyb21ET00oKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbn1cclxuIl19