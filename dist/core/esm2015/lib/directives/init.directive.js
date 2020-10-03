import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
export class InitDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.init = new EventEmitter();
    }
    ngAfterViewInit() {
        this.init.emit(this.elRef);
    }
}
InitDirective.decorators = [
    { type: Directive, args: [{ selector: '[abpInit]' },] }
];
InitDirective.ctorParameters = () => [
    { type: ElementRef }
];
InitDirective.propDecorators = {
    init: [{ type: Output, args: ['abpInit',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9pbml0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUczRixNQUFNLE9BQU8sYUFBYTtJQUd4QixZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBRlQsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO0lBRS9CLENBQUM7SUFFekMsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFSRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFOzs7WUFGTSxVQUFVOzs7bUJBSWpELE1BQU0sU0FBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2FicEluaXRdJyB9KVxyXG5leHBvcnQgY2xhc3MgSW5pdERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBPdXRwdXQoJ2FicEluaXQnKSByZWFkb25seSBpbml0ID0gbmV3IEV2ZW50RW1pdHRlcjxFbGVtZW50UmVmPGFueT4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdC5lbWl0KHRoaXMuZWxSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=