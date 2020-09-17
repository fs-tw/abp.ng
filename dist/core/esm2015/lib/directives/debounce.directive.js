import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SubscriptionService } from '../services/subscription.service';
let InputEventDebounceDirective = class InputEventDebounceDirective {
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
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputEventDebounceDirective.prototype, "debounce", void 0);
__decorate([
    Output('input.debounce'),
    __metadata("design:type", Object)
], InputEventDebounceDirective.prototype, "debounceEvent", void 0);
InputEventDebounceDirective = __decorate([
    Directive({
        // tslint:disable-next-line: directive-selector
        selector: '[input.debounce]',
        providers: [SubscriptionService],
    }),
    __metadata("design:paramtypes", [ElementRef, SubscriptionService])
], InputEventDebounceDirective);
export { InputEventDebounceDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVib3VuY2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvZGVib3VuY2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU92RSxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUt0QyxZQUFvQixFQUFjLEVBQVUsWUFBaUM7UUFBekQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUpwRSxhQUFRLEdBQUcsR0FBRyxDQUFDO1FBRVcsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBRUcsQ0FBQztJQUVqRixRQUFRO1FBQ04sTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQWJVO0lBQVIsS0FBSyxFQUFFOzs2REFBZ0I7QUFFRTtJQUF6QixNQUFNLENBQUMsZ0JBQWdCLENBQUM7O2tFQUFvRDtBQUhsRSwyQkFBMkI7SUFMdkMsU0FBUyxDQUFDO1FBQ1QsK0NBQStDO1FBQy9DLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7S0FDakMsQ0FBQztxQ0FNd0IsVUFBVSxFQUF3QixtQkFBbUI7R0FMbEUsMkJBQTJCLENBY3ZDO1NBZFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc3Vic2NyaXB0aW9uLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tpbnB1dC5kZWJvdW5jZV0nLFxyXG4gIHByb3ZpZGVyczogW1N1YnNjcmlwdGlvblNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRFdmVudERlYm91bmNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkZWJvdW5jZSA9IDMwMDtcclxuXHJcbiAgQE91dHB1dCgnaW5wdXQuZGVib3VuY2UnKSByZWFkb25seSBkZWJvdW5jZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5wdXQkID0gZnJvbUV2ZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2lucHV0JykucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZSkpO1xyXG5cclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZE9uZShpbnB1dCQsIChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5kZWJvdW5jZUV2ZW50LmVtaXQoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==