import { Directive, Injector, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import { PropData } from '../models/props';
export class PropDataDirective extends PropData {
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
}
PropDataDirective.decorators = [
    { type: Directive, args: [{
                exportAs: 'abpPropData',
                selector: '[abpPropData]',
            },] }
];
PropDataDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: Injector }
];
PropDataDirective.propDecorators = {
    propList: [{ type: Input, args: ['abpPropDataFromList',] }],
    record: [{ type: Input, args: ['abpPropDataWithRecord',] }],
    index: [{ type: Input, args: ['abpPropDataAtIndex',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcC1kYXRhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9leHRlbnNpb25zL3NyYy9saWIvZGlyZWN0aXZlcy9wcm9wLWRhdGEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLEtBQUssRUFHTCxXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxpQkFBaUIsQ0FBQztBQU1yRCxNQUFNLE9BQU8saUJBQTJDLFNBQVEsUUFBeUI7SUFZdkYsWUFDVSxPQUF5QixFQUN6QixLQUF1QixFQUMvQixRQUFrQjtRQUVsQixLQUFLLEVBQUUsQ0FBQztRQUpBLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBSy9CLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ3BCLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7WUFSQyxXQUFXO1lBQ1gsZ0JBQWdCO1lBTGhCLFFBQVE7Ozt1QkFnQlAsS0FBSyxTQUFDLHFCQUFxQjtxQkFFM0IsS0FBSyxTQUFDLHVCQUF1QjtvQkFFN0IsS0FBSyxTQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvcERhdGEsIFByb3BMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb3BzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIGV4cG9ydEFzOiAnYWJwUHJvcERhdGEnLFxyXG4gIHNlbGVjdG9yOiAnW2FicFByb3BEYXRhXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9wRGF0YURpcmVjdGl2ZTxMIGV4dGVuZHMgUHJvcExpc3Q8YW55Pj4gZXh0ZW5kcyBQcm9wRGF0YTxJbmZlcnJlZERhdGE8TD4+XHJcbiAgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgLyogdHNsaW50OmRpc2FibGU6bm8taW5wdXQtcmVuYW1lICovXHJcbiAgQElucHV0KCdhYnBQcm9wRGF0YUZyb21MaXN0JykgcmVhZG9ubHkgcHJvcExpc3Q6IEw7XHJcblxyXG4gIEBJbnB1dCgnYWJwUHJvcERhdGFXaXRoUmVjb3JkJykgcmVhZG9ubHkgcmVjb3JkOiBJbmZlcnJlZERhdGE8TD5bJ3JlY29yZCddO1xyXG5cclxuICBASW5wdXQoJ2FicFByb3BEYXRhQXRJbmRleCcpIHJlYWRvbmx5IGluZGV4OiBudW1iZXI7XHJcbiAgLyogdHNsaW50OmVuYWJsZTpuby1pbnB1dC1yZW5hbWUgKi9cclxuXHJcbiAgcmVhZG9ubHkgZ2V0SW5qZWN0ZWQ6IEluZmVycmVkRGF0YTxMPlsnZ2V0SW5qZWN0ZWQnXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHRlbXBSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIHRoaXMuZ2V0SW5qZWN0ZWQgPSBpbmplY3Rvci5nZXQuYmluZChpbmplY3Rvcik7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMudmNSZWYuY2xlYXIoKTtcclxuXHJcbiAgICB0aGlzLnZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBSZWYsIHtcclxuICAgICAgJGltcGxpY2l0OiB0aGlzLmRhdGEsXHJcbiAgICAgIGluZGV4OiAwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMudmNSZWYuY2xlYXIoKTtcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgSW5mZXJyZWREYXRhPEw+ID0gUHJvcERhdGE8SW5mZXJyZWRSZWNvcmQ8TD4+O1xyXG50eXBlIEluZmVycmVkUmVjb3JkPEw+ID0gTCBleHRlbmRzIFByb3BMaXN0PGluZmVyIFI+ID8gUiA6IG5ldmVyO1xyXG4iXX0=