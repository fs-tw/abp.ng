import { Component, Input } from '@angular/core';
import { toastInOut } from '../../animations/toast.animations';
export class ToastContainerComponent {
    constructor() {
        this.toasts = [];
        this.right = '30px';
        this.bottom = '30px';
    }
    ngOnInit() {
        this.toasts$.subscribe(toasts => {
            this.toasts = this.toastKey
                ? toasts.filter(t => {
                    return t.options && t.options.containerKey !== this.toastKey;
                })
                : toasts;
        });
    }
    trackByFunc(index, toast) {
        if (!toast)
            return null;
        return toast.options.id;
    }
}
ToastContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-toast-container',
                template: "<div\r\n  class=\"toast-container\"\r\n  [style.top]=\"top || 'auto'\"\r\n  [style.right]=\"right || 'auto'\"\r\n  [style.bottom]=\"bottom || 'auto'\"\r\n  [style.left]=\"left || 'auto'\"\r\n  [style.display]=\"toasts.length ? 'flex' : 'none'\"\r\n  [@toastInOut]=\"toasts.length\"\r\n>\r\n  <abp-toast [toast]=\"toast\" *ngFor=\"let toast of toasts; trackBy: trackByFunc\"></abp-toast>\r\n</div>\r\n",
                animations: [toastInOut],
                styles: [".toast-container{align-items:center;display:flex;flex-direction:column;justify-content:flex-end;min-height:80px;min-width:350px;position:fixed;z-index:1900}.toast-container.new-on-top{flex-direction:column-reverse}"]
            },] }
];
ToastContainerComponent.propDecorators = {
    top: [{ type: Input }],
    right: [{ type: Input }],
    bottom: [{ type: Input }],
    left: [{ type: Input }],
    toastKey: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBVS9ELE1BQU0sT0FBTyx1QkFBdUI7SUFOcEM7UUFTRSxXQUFNLEdBQUcsRUFBcUIsQ0FBQztRQU0vQixVQUFLLEdBQUcsTUFBTSxDQUFDO1FBR2YsV0FBTSxHQUFHLE1BQU0sQ0FBQztJQXNCbEIsQ0FBQztJQWRDLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRO2dCQUN6QixDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDaEIsT0FBTyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQy9ELENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3RCLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDRaQUErQztnQkFFL0MsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDOzthQUN6Qjs7O2tCQU1FLEtBQUs7b0JBR0wsS0FBSztxQkFHTCxLQUFLO21CQUdMLEtBQUs7dUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b2FzdEluT3V0IH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucy90b2FzdC5hbmltYXRpb25zJztcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJy4uLy4uL21vZGVscy90b2FzdGVyJztcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtdG9hc3QtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b2FzdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbdG9hc3RJbk91dF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdG9hc3RzJDogUmVwbGF5U3ViamVjdDxUb2FzdGVyLlRvYXN0W10+O1xyXG5cclxuICB0b2FzdHMgPSBbXSBhcyBUb2FzdGVyLlRvYXN0W107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdG9wOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmlnaHQgPSAnMzBweCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYm90dG9tID0gJzMwcHgnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGxlZnQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICB0b2FzdEtleTogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudG9hc3RzJC5zdWJzY3JpYmUodG9hc3RzID0+IHtcclxuICAgICAgdGhpcy50b2FzdHMgPSB0aGlzLnRvYXN0S2V5XHJcbiAgICAgICAgPyB0b2FzdHMuZmlsdGVyKHQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdC5vcHRpb25zICYmIHQub3B0aW9ucy5jb250YWluZXJLZXkgIT09IHRoaXMudG9hc3RLZXk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIDogdG9hc3RzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5RnVuYyhpbmRleCwgdG9hc3QpIHtcclxuICAgIGlmICghdG9hc3QpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIHRvYXN0Lm9wdGlvbnMuaWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==