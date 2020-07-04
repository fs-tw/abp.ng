import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ValidationErrorComponent as ErrorComponent } from '@ngx-validate/core';
let ValidationErrorComponent = class ValidationErrorComponent extends ErrorComponent {
    get abpErrors() {
        if (!this.errors || !this.errors.length)
            return [];
        return this.errors.map(error => {
            if (!error.message)
                return error;
            const index = error.message.indexOf('[');
            if (index > -1) {
                return Object.assign(Object.assign({}, error), { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
            }
            return error;
        });
    }
};
ValidationErrorComponent = __decorate([
    Component({
        selector: 'abp-validation-error',
        template: `
    <div class="invalid-feedback" *ngFor="let error of abpErrors; trackBy: trackByFn">
      {{ error.message | abpLocalization: error.interpoliteParams }}
    </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
    })
], ValidationErrorComponent);
export { ValidationErrorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1iYXNpYy9zcmMvbGliL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1lcnJvci92YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQWMsd0JBQXdCLElBQUksY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZNUYsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBeUIsU0FBUSxjQUFjO0lBQzFELElBQUksU0FBUztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFFbkQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFFakMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFekMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsdUNBQ0ssS0FBSyxLQUNSLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQ3RDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUN0RjthQUNIO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBcEJZLHdCQUF3QjtJQVZwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRTs7OztHQUlUO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7S0FDdEMsQ0FBQztHQUNXLHdCQUF3QixDQW9CcEM7U0FwQlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbiwgVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50IGFzIEVycm9yQ29tcG9uZW50IH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXZhbGlkYXRpb24tZXJyb3InLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiICpuZ0Zvcj1cImxldCBlcnJvciBvZiBhYnBFcnJvcnM7IHRyYWNrQnk6IHRyYWNrQnlGblwiPlxyXG4gICAgICB7eyBlcnJvci5tZXNzYWdlIHwgYWJwTG9jYWxpemF0aW9uOiBlcnJvci5pbnRlcnBvbGl0ZVBhcmFtcyB9fVxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50IGV4dGVuZHMgRXJyb3JDb21wb25lbnQge1xyXG4gIGdldCBhYnBFcnJvcnMoKTogVmFsaWRhdGlvbi5FcnJvcltdICYgeyBpbnRlcnBvbGl0ZVBhcmFtcz86IHN0cmluZ1tdIH0ge1xyXG4gICAgaWYgKCF0aGlzLmVycm9ycyB8fCAhdGhpcy5lcnJvcnMubGVuZ3RoKSByZXR1cm4gW107XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgIGlmICghZXJyb3IubWVzc2FnZSkgcmV0dXJuIGVycm9yO1xyXG5cclxuICAgICAgY29uc3QgaW5kZXggPSBlcnJvci5tZXNzYWdlLmluZGV4T2YoJ1snKTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmVycm9yLFxyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZS5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgICBpbnRlcnBvbGl0ZVBhcmFtczogZXJyb3IubWVzc2FnZS5zbGljZShpbmRleCArIDEsIGVycm9yLm1lc3NhZ2UubGVuZ3RoIC0gMSkuc3BsaXQoJywnKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19