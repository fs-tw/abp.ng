import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, } from '@angular/core';
import { takeUntilDestroy } from '../utils/rxjs-utils';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
let InputEventDebounceDirective = class InputEventDebounceDirective {
    constructor(el) {
        this.el = el;
        this.debounce = 300;
        this.debounceEvent = new EventEmitter();
    }
    ngOnInit() {
        fromEvent(this.el.nativeElement, 'input')
            .pipe(debounceTime(this.debounce), takeUntilDestroy(this))
            .subscribe((event) => {
            this.debounceEvent.emit(event);
        });
    }
    ngOnDestroy() { }
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
    }),
    __metadata("design:paramtypes", [ElementRef])
], InputEventDebounceDirective);
export { InputEventDebounceDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVib3VuY2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvZGVib3VuY2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU05QyxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUt0QyxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUp6QixhQUFRLEdBQUcsR0FBRyxDQUFDO1FBRVcsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBRXhDLENBQUM7SUFFdEMsUUFBUTtRQUNOLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7YUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekQsU0FBUyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVyxLQUFVLENBQUM7Q0FDdkIsQ0FBQTtBQWZVO0lBQVIsS0FBSyxFQUFFOzs2REFBZ0I7QUFFRTtJQUF6QixNQUFNLENBQUMsZ0JBQWdCLENBQUM7O2tFQUFvRDtBQUhsRSwyQkFBMkI7SUFKdkMsU0FBUyxDQUFDO1FBQ1QsK0NBQStDO1FBQy9DLFFBQVEsRUFBRSxrQkFBa0I7S0FDN0IsQ0FBQztxQ0FNd0IsVUFBVTtHQUx2QiwyQkFBMkIsQ0FnQnZDO1NBaEJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnLi4vdXRpbHMvcnhqcy11dGlscyc7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW2lucHV0LmRlYm91bmNlXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEV2ZW50RGVib3VuY2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgZGVib3VuY2UgPSAzMDA7XHJcblxyXG4gIEBPdXRwdXQoJ2lucHV0LmRlYm91bmNlJykgcmVhZG9ubHkgZGVib3VuY2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2lucHV0JylcclxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2UpLCB0YWtlVW50aWxEZXN0cm95KHRoaXMpKVxyXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLmRlYm91bmNlRXZlbnQuZW1pdChldmVudCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==