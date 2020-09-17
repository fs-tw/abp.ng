import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { SubscriptionService } from '../services/subscription.service';
let StopPropagationDirective = class StopPropagationDirective {
    constructor(el, subscription) {
        this.el = el;
        this.subscription = subscription;
        this.stopPropEvent = new EventEmitter();
    }
    ngOnInit() {
        this.subscription.addOne(fromEvent(this.el.nativeElement, 'click'), (event) => {
            event.stopPropagation();
            this.stopPropEvent.emit(event);
        });
    }
};
__decorate([
    Output('click.stop'),
    __metadata("design:type", Object)
], StopPropagationDirective.prototype, "stopPropEvent", void 0);
StopPropagationDirective = __decorate([
    Directive({
        // tslint:disable-next-line: directive-selector
        selector: '[click.stop]',
        providers: [SubscriptionService],
    }),
    __metadata("design:paramtypes", [ElementRef, SubscriptionService])
], StopPropagationDirective);
export { StopPropagationDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBT3ZFLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBR25DLFlBQW9CLEVBQWMsRUFBVSxZQUFpQztRQUF6RCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBRjlDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUVFLENBQUM7SUFFakYsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUN4RixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQVZ1QjtJQUFyQixNQUFNLENBQUMsWUFBWSxDQUFDOzsrREFBeUQ7QUFEbkUsd0JBQXdCO0lBTHBDLFNBQVMsQ0FBQztRQUNULCtDQUErQztRQUMvQyxRQUFRLEVBQUUsY0FBYztRQUN4QixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUNqQyxDQUFDO3FDQUl3QixVQUFVLEVBQXdCLG1CQUFtQjtHQUhsRSx3QkFBd0IsQ0FXcEM7U0FYWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdWJzY3JpcHRpb24uc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW2NsaWNrLnN0b3BdJyxcclxuICBwcm92aWRlcnM6IFtTdWJzY3JpcHRpb25TZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQE91dHB1dCgnY2xpY2suc3RvcCcpIHJlYWRvbmx5IHN0b3BQcm9wRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25TZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZE9uZShmcm9tRXZlbnQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnY2xpY2snKSwgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLnN0b3BQcm9wRXZlbnQuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19