import { __decorate, __metadata } from "tslib";
import { Directive, Injector, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import { PropData } from '../models/props';
let PropDataDirective = class PropDataDirective extends PropData {
    constructor(tempRef, vcRef, injector) {
        super();
        this.tempRef = tempRef;
        this.vcRef = vcRef;
        // tslint:disable-next-line
        this.getInjected = injector.get.bind(injector);
    }
    ngOnChanges() {
        this.vcRef.clear();
        this.vcRef.createEmbeddedView(this.tempRef, {
            $implicit: this.data,
            index: 0,
        });
    }
    ngOnDestroy() {
        this.vcRef.clear();
    }
};
__decorate([
    Input('abpPropDataFromList'),
    __metadata("design:type", Object)
], PropDataDirective.prototype, "propList", void 0);
__decorate([
    Input('abpPropDataWithRecord'),
    __metadata("design:type", Object)
], PropDataDirective.prototype, "record", void 0);
__decorate([
    Input('abpPropDataAtIndex'),
    __metadata("design:type", Number)
], PropDataDirective.prototype, "index", void 0);
PropDataDirective = __decorate([
    Directive({
        exportAs: 'abpPropData',
        selector: '[abpPropData]',
    }),
    __metadata("design:paramtypes", [TemplateRef,
        ViewContainerRef,
        Injector])
], PropDataDirective);
export { PropDataDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcC1kYXRhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9leHRlbnNpb25zL3NyYy9saWIvZGlyZWN0aXZlcy9wcm9wLWRhdGEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixLQUFLLEVBR0wsV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0saUJBQWlCLENBQUM7QUFNckQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBMkMsU0FBUSxRQUF5QjtJQVl2RixZQUNVLE9BQXlCLEVBQ3pCLEtBQXVCLEVBQy9CLFFBQWtCO1FBRWxCLEtBQUssRUFBRSxDQUFDO1FBSkEsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFLL0IsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDcEIsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUNGLENBQUE7QUFoQytCO0lBQTdCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7bURBQXNCO0FBRW5CO0lBQS9CLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQzs7aURBQTRDO0FBRTlDO0lBQTVCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7Z0RBQXdCO0FBUHpDLGlCQUFpQjtJQUo3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsZUFBZTtLQUMxQixDQUFDO3FDQWNtQixXQUFXO1FBQ2IsZ0JBQWdCO1FBQ3JCLFFBQVE7R0FmVCxpQkFBaUIsQ0FtQzdCO1NBbkNZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvcERhdGEsIFByb3BMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb3BzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIGV4cG9ydEFzOiAnYWJwUHJvcERhdGEnLFxyXG4gIHNlbGVjdG9yOiAnW2FicFByb3BEYXRhXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9wRGF0YURpcmVjdGl2ZTxMIGV4dGVuZHMgUHJvcExpc3Q8YW55Pj4gZXh0ZW5kcyBQcm9wRGF0YTxJbmZlcnJlZERhdGE8TD4+XHJcbiAgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgLyogdHNsaW50OmRpc2FibGU6bm8taW5wdXQtcmVuYW1lICovXHJcbiAgQElucHV0KCdhYnBQcm9wRGF0YUZyb21MaXN0JykgcmVhZG9ubHkgcHJvcExpc3Q6IEw7XHJcblxyXG4gIEBJbnB1dCgnYWJwUHJvcERhdGFXaXRoUmVjb3JkJykgcmVhZG9ubHkgcmVjb3JkOiBJbmZlcnJlZERhdGE8TD5bJ3JlY29yZCddO1xyXG5cclxuICBASW5wdXQoJ2FicFByb3BEYXRhQXRJbmRleCcpIHJlYWRvbmx5IGluZGV4OiBudW1iZXI7XHJcbiAgLyogdHNsaW50OmVuYWJsZTpuby1pbnB1dC1yZW5hbWUgKi9cclxuXHJcbiAgcmVhZG9ubHkgZ2V0SW5qZWN0ZWQ6IEluZmVycmVkRGF0YTxMPlsnZ2V0SW5qZWN0ZWQnXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHRlbXBSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIHRoaXMuZ2V0SW5qZWN0ZWQgPSBpbmplY3Rvci5nZXQuYmluZChpbmplY3Rvcik7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMudmNSZWYuY2xlYXIoKTtcclxuXHJcbiAgICB0aGlzLnZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBSZWYsIHtcclxuICAgICAgJGltcGxpY2l0OiB0aGlzLmRhdGEsXHJcbiAgICAgIGluZGV4OiAwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMudmNSZWYuY2xlYXIoKTtcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgSW5mZXJyZWREYXRhPEw+ID0gUHJvcERhdGE8SW5mZXJyZWRSZWNvcmQ8TD4+O1xyXG50eXBlIEluZmVycmVkUmVjb3JkPEw+ID0gTCBleHRlbmRzIFByb3BMaXN0PGluZmVyIFI+ID8gUiA6IG5ldmVyO1xyXG4iXX0=