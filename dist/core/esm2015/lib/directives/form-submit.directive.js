import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output, Self, } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { SubscriptionService } from '../services/subscription.service';
export class FormSubmitDirective {
    constructor(formGroupDirective, host, cdRef, subscription) {
        this.formGroupDirective = formGroupDirective;
        this.host = host;
        this.cdRef = cdRef;
        this.subscription = subscription;
        this.debounce = 200;
        this.ngSubmit = new EventEmitter();
        this.executedNgSubmit = false;
    }
    ngOnInit() {
        this.subscription.addOne(this.formGroupDirective.ngSubmit, () => {
            this.markAsDirty();
            this.executedNgSubmit = true;
        });
        const keyup$ = fromEvent(this.host.nativeElement, 'keyup').pipe(debounceTime(this.debounce), filter((key) => key && key.key === 'Enter'));
        this.subscription.addOne(keyup$, () => {
            if (!this.executedNgSubmit) {
                this.host.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            }
            this.executedNgSubmit = false;
        });
    }
    markAsDirty() {
        const { form } = this.formGroupDirective;
        setDirty(form.controls);
        form.markAsDirty();
        this.cdRef.detectChanges();
    }
}
FormSubmitDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'form[ngSubmit][formGroup]',
                providers: [SubscriptionService],
            },] }
];
FormSubmitDirective.ctorParameters = () => [
    { type: FormGroupDirective, decorators: [{ type: Self }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: SubscriptionService }
];
FormSubmitDirective.propDecorators = {
    debounce: [{ type: Input }],
    notValidateOnSubmit: [{ type: Input }],
    ngSubmit: [{ type: Output }]
};
function setDirty(controls) {
    if (Array.isArray(controls)) {
        controls.forEach(group => {
            setDirty(group.controls);
        });
        return;
    }
    Object.keys(controls).forEach(key => {
        controls[key].markAsDirty();
        controls[key].updateValueAndValidity();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zdWJtaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUEwQixrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVN2RSxNQUFNLE9BQU8sbUJBQW1CO0lBVzlCLFlBQ2tCLGtCQUFzQyxFQUM5QyxJQUFpQyxFQUNqQyxLQUF3QixFQUN4QixZQUFpQztRQUh6Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQzlDLFNBQUksR0FBSixJQUFJLENBQTZCO1FBQ2pDLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQWIzQyxhQUFRLEdBQUcsR0FBRyxDQUFDO1FBS0ksYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBT3RCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDNUUsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDM0IsTUFBTSxDQUFDLENBQUMsR0FBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLENBQzNELENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FDbkMsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDekQsQ0FBQzthQUNIO1lBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUV6QyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQTBDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULCtDQUErQztnQkFDL0MsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDakM7OztZQVhnQyxrQkFBa0IsdUJBd0I5QyxJQUFJO1lBL0JQLFVBQVU7WUFGVixpQkFBaUI7WUFZVixtQkFBbUI7Ozt1QkFVekIsS0FBSztrQ0FHTCxLQUFLO3VCQUdMLE1BQU07O0FBMkNULFNBQVMsUUFBUSxDQUFDLFFBQWtCO0lBQ2xDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMzQixRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBMEMsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTztLQUNSO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDbEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2VsZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdWJzY3JpcHRpb24uc2VydmljZSc7XHJcblxyXG50eXBlIENvbnRyb2xzID0geyBba2V5OiBzdHJpbmddOiBGb3JtQ29udHJvbCB9IHwgRm9ybUdyb3VwW107XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybVtuZ1N1Ym1pdF1bZm9ybUdyb3VwXScsXHJcbiAgcHJvdmlkZXJzOiBbU3Vic2NyaXB0aW9uU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtU3VibWl0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIGRlYm91bmNlID0gMjAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG5vdFZhbGlkYXRlT25TdWJtaXQ6IHN0cmluZyB8IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuZ1N1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgZXhlY3V0ZWROZ1N1Ym1pdCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBTZWxmKCkgcHJpdmF0ZSBmb3JtR3JvdXBEaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZSxcclxuICAgIHByaXZhdGUgaG9zdDogRWxlbWVudFJlZjxIVE1MRm9ybUVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkT25lKHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlLm5nU3VibWl0LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMubWFya0FzRGlydHkoKTtcclxuICAgICAgdGhpcy5leGVjdXRlZE5nU3VibWl0ID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGtleXVwJCA9IGZyb21FdmVudCh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCwgJ2tleXVwJykucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2UpLFxyXG4gICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFbnRlcicpLFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGRPbmUoa2V5dXAkLCAoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5leGVjdXRlZE5nU3VibWl0KSB7XHJcbiAgICAgICAgdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgIG5ldyBFdmVudCgnc3VibWl0JywgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZXhlY3V0ZWROZ1N1Ym1pdCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBtYXJrQXNEaXJ0eSgpIHtcclxuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmU7XHJcblxyXG4gICAgc2V0RGlydHkoZm9ybS5jb250cm9scyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Db250cm9sIH0pO1xyXG4gICAgZm9ybS5tYXJrQXNEaXJ0eSgpO1xyXG5cclxuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGlydHkoY29udHJvbHM6IENvbnRyb2xzKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbHMpKSB7XHJcbiAgICBjb250cm9scy5mb3JFYWNoKGdyb3VwID0+IHtcclxuICAgICAgc2V0RGlydHkoZ3JvdXAuY29udHJvbHMgYXMgeyBba2V5OiBzdHJpbmddOiBGb3JtQ29udHJvbCB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMoY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGNvbnRyb2xzW2tleV0ubWFya0FzRGlydHkoKTtcclxuICAgIGNvbnRyb2xzW2tleV0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gIH0pO1xyXG59XHJcbiJdfQ==