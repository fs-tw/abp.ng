import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SubscriptionService } from '../services/subscription.service';
export class InputEventDebounceDirective {
    constructor(el, subscription) {
        this.el = el;
        this.subscription = subscription;
        this.debounce = 300;
        this.debounceEvent = new EventEmitter();
    }
    ngOnInit() {
        const input$ = fromEvent(this.el.nativeElement, 'input').pipe(debounceTime(this.debounce));
        this.subscription.addOne(input$, (event) => {
            this.debounceEvent.emit(event);
        });
    }
}
InputEventDebounceDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[input.debounce]',
                providers: [SubscriptionService],
            },] }
];
InputEventDebounceDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: SubscriptionService }
];
InputEventDebounceDirective.propDecorators = {
    debounce: [{ type: Input }],
    debounceEvent: [{ type: Output, args: ['input.debounce',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVib3VuY2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvZGVib3VuY2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBT3ZFLE1BQU0sT0FBTywyQkFBMkI7SUFLdEMsWUFBb0IsRUFBYyxFQUFVLFlBQWlDO1FBQXpELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFKcEUsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUVXLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQUVHLENBQUM7SUFFakYsUUFBUTtRQUNOLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTNGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCwrQ0FBK0M7Z0JBQy9DLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDOzs7WUFUbUIsVUFBVTtZQUdyQixtQkFBbUI7Ozt1QkFRekIsS0FBSzs0QkFFTCxNQUFNLFNBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc3Vic2NyaXB0aW9uLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tpbnB1dC5kZWJvdW5jZV0nLFxyXG4gIHByb3ZpZGVyczogW1N1YnNjcmlwdGlvblNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRFdmVudERlYm91bmNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkZWJvdW5jZSA9IDMwMDtcclxuXHJcbiAgQE91dHB1dCgnaW5wdXQuZGVib3VuY2UnKSByZWFkb25seSBkZWJvdW5jZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5wdXQkID0gZnJvbUV2ZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2lucHV0JykucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZSkpO1xyXG5cclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZE9uZShpbnB1dCQsIChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5kZWJvdW5jZUV2ZW50LmVtaXQoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==