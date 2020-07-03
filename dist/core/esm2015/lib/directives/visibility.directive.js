import { __decorate, __metadata, __param } from "tslib";
import { Directive, Input, Optional, ElementRef, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import snq from 'snq';
/**
 *
 * @deprecated To be deleted in v3.3
 */
let VisibilityDirective = class VisibilityDirective {
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.completed$ = new Subject();
    }
    ngAfterViewInit() {
        if (!this.focusedElement && this.elRef) {
            this.focusedElement = this.elRef.nativeElement;
        }
        let observer;
        observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (!mutation.target)
                    return;
                const htmlNodes = snq(() => Array.from(mutation.target.childNodes).filter(node => node instanceof HTMLElement), []);
                if (!htmlNodes.length) {
                    this.removeFromDOM();
                }
            });
        });
        observer.observe(this.focusedElement, {
            childList: true,
        });
        setTimeout(() => {
            const htmlNodes = snq(() => Array.from(this.focusedElement.childNodes).filter(node => node instanceof HTMLElement), []);
            if (!htmlNodes.length)
                this.removeFromDOM();
        }, 0);
        this.completed$.subscribe(() => observer.disconnect());
    }
    disconnect() {
        this.completed$.next();
        this.completed$.complete();
    }
    removeFromDOM() {
        if (!this.elRef.nativeElement)
            return;
        this.renderer.removeChild(this.elRef.nativeElement.parentElement, this.elRef.nativeElement);
        this.disconnect();
    }
};
__decorate([
    Input('abpVisibility'),
    __metadata("design:type", HTMLElement)
], VisibilityDirective.prototype, "focusedElement", void 0);
VisibilityDirective = __decorate([
    Directive({
        selector: '[abpVisibility]',
    }),
    __param(0, Optional()),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], VisibilityDirective);
export { VisibilityDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJpbGl0eS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy92aXNpYmlsaXR5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBRXRCOzs7R0FHRztBQUlILElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBTTlCLFlBQWdDLEtBQWlCLEVBQVUsUUFBbUI7UUFBOUMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFGOUUsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7SUFFNkMsQ0FBQztJQUVsRixlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxRQUEwQixDQUFDO1FBQy9CLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtvQkFBRSxPQUFPO2dCQUU3QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQ25CLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksV0FBVyxDQUFDLEVBQ3hGLEVBQUUsQ0FDSCxDQUFDO2dCQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO29CQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNwQyxTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUNuQixHQUFHLEVBQUUsQ0FDSCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxZQUFZLFdBQVcsQ0FBQyxFQUN4RixFQUFFLENBQ0gsQ0FBQztZQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtnQkFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRU4sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUV0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztDQUNGLENBQUE7QUF2REM7SUFEQyxLQUFLLENBQUMsZUFBZSxDQUFDOzhCQUNQLFdBQVc7MkRBQUM7QUFGakIsbUJBQW1CO0lBSC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7S0FDNUIsQ0FBQztJQU9hLFdBQUEsUUFBUSxFQUFFLENBQUE7cUNBQWdCLFVBQVUsRUFBb0IsU0FBUztHQU5uRSxtQkFBbUIsQ0F5RC9CO1NBekRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9wdGlvbmFsLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcblxyXG4vKipcclxuICpcclxuICogQGRlcHJlY2F0ZWQgVG8gYmUgZGVsZXRlZCBpbiB2My4zXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thYnBWaXNpYmlsaXR5XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaXNpYmlsaXR5RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCdhYnBWaXNpYmlsaXR5JylcclxuICBmb2N1c2VkRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbXBsZXRlZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5mb2N1c2VkRWxlbWVudCAmJiB0aGlzLmVsUmVmKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNlZEVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xyXG4gICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xyXG4gICAgICBtdXRhdGlvbnMuZm9yRWFjaChtdXRhdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKCFtdXRhdGlvbi50YXJnZXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaHRtbE5vZGVzID0gc25xKFxyXG4gICAgICAgICAgKCkgPT4gQXJyYXkuZnJvbShtdXRhdGlvbi50YXJnZXQuY2hpbGROb2RlcykuZmlsdGVyKG5vZGUgPT4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSxcclxuICAgICAgICAgIFtdLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghaHRtbE5vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVGcm9tRE9NKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIG9ic2VydmVyLm9ic2VydmUodGhpcy5mb2N1c2VkRWxlbWVudCwge1xyXG4gICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgaHRtbE5vZGVzID0gc25xKFxyXG4gICAgICAgICgpID0+XHJcbiAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuZm9jdXNlZEVsZW1lbnQuY2hpbGROb2RlcykuZmlsdGVyKG5vZGUgPT4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSxcclxuICAgICAgICBbXSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICghaHRtbE5vZGVzLmxlbmd0aCkgdGhpcy5yZW1vdmVGcm9tRE9NKCk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICB0aGlzLmNvbXBsZXRlZCQuc3Vic2NyaWJlKCgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKSk7XHJcbiAgfVxyXG5cclxuICBkaXNjb25uZWN0KCkge1xyXG4gICAgdGhpcy5jb21wbGV0ZWQkLm5leHQoKTtcclxuICAgIHRoaXMuY29tcGxldGVkJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRnJvbURPTSgpIHtcclxuICAgIGlmICghdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCwgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuZGlzY29ubmVjdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=