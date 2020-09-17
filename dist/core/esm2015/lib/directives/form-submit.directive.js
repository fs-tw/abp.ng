import { __decorate, __metadata, __param } from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output, Self, } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { SubscriptionService } from '../services/subscription.service';
let FormSubmitDirective = class FormSubmitDirective {
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
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], FormSubmitDirective.prototype, "debounce", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FormSubmitDirective.prototype, "notValidateOnSubmit", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FormSubmitDirective.prototype, "ngSubmit", void 0);
FormSubmitDirective = __decorate([
    Directive({
        // tslint:disable-next-line: directive-selector
        selector: 'form[ngSubmit][formGroup]',
        providers: [SubscriptionService],
    }),
    __param(0, Self()),
    __metadata("design:paramtypes", [FormGroupDirective,
        ElementRef,
        ChangeDetectorRef,
        SubscriptionService])
], FormSubmitDirective);
export { FormSubmitDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zdWJtaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBMEIsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFTdkUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFXOUIsWUFDa0Isa0JBQXNDLEVBQzlDLElBQWlDLEVBQ2pDLEtBQXdCLEVBQ3hCLFlBQWlDO1FBSHpCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDOUMsU0FBSSxHQUFKLElBQUksQ0FBNkI7UUFDakMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBYjNDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFLSSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRCxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFPdEIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUM5RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQTRCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1RSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUMzQixNQUFNLENBQUMsQ0FBQyxHQUFrQixFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxPQUFPLENBQUMsQ0FDM0QsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUNuQyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUN6RCxDQUFDO2FBQ0g7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBRXpDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBMEMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFBO0FBOUNDO0lBREMsS0FBSyxFQUFFOztxREFDTztBQUdmO0lBREMsS0FBSyxFQUFFOztnRUFDOEI7QUFFNUI7SUFBVCxNQUFNLEVBQUU7O3FEQUF3QztBQVB0QyxtQkFBbUI7SUFML0IsU0FBUyxDQUFDO1FBQ1QsK0NBQStDO1FBQy9DLFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7S0FDakMsQ0FBQztJQWFHLFdBQUEsSUFBSSxFQUFFLENBQUE7cUNBQTZCLGtCQUFrQjtRQUN4QyxVQUFVO1FBQ1QsaUJBQWlCO1FBQ1YsbUJBQW1CO0dBZmhDLG1CQUFtQixDQWdEL0I7U0FoRFksbUJBQW1CO0FBa0RoQyxTQUFTLFFBQVEsQ0FBQyxRQUFrQjtJQUNsQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDM0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixRQUFRLENBQUMsS0FBSyxDQUFDLFFBQTBDLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU87S0FDUjtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2xDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNlbGYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc3Vic2NyaXB0aW9uLnNlcnZpY2UnO1xyXG5cclxudHlwZSBDb250cm9scyA9IHsgW2tleTogc3RyaW5nXTogRm9ybUNvbnRyb2wgfSB8IEZvcm1Hcm91cFtdO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm1bbmdTdWJtaXRdW2Zvcm1Hcm91cF0nLFxyXG4gIHByb3ZpZGVyczogW1N1YnNjcmlwdGlvblNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybVN1Ym1pdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBkZWJvdW5jZSA9IDIwMDtcclxuXHJcbiAgQElucHV0KClcclxuICBub3RWYWxpZGF0ZU9uU3VibWl0OiBzdHJpbmcgfCBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbmdTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGV4ZWN1dGVkTmdTdWJtaXQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAU2VsZigpIHByaXZhdGUgZm9ybUdyb3VwRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmUsXHJcbiAgICBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTEZvcm1FbGVtZW50PixcclxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZE9uZSh0aGlzLmZvcm1Hcm91cERpcmVjdGl2ZS5uZ1N1Ym1pdCwgKCkgPT4ge1xyXG4gICAgICB0aGlzLm1hcmtBc0RpcnR5KCk7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZWROZ1N1Ym1pdCA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBrZXl1cCQgPSBmcm9tRXZlbnQodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQsICdrZXl1cCcpLnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlKSxcclxuICAgICAgZmlsdGVyKChrZXk6IEtleWJvYXJkRXZlbnQpID0+IGtleSAmJiBrZXkua2V5ID09PSAnRW50ZXInKSxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkT25lKGtleXVwJCwgKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuZXhlY3V0ZWROZ1N1Ym1pdCkge1xyXG4gICAgICAgIHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICBuZXcgRXZlbnQoJ3N1Ym1pdCcsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmV4ZWN1dGVkTmdTdWJtaXQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbWFya0FzRGlydHkoKSB7XHJcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlO1xyXG5cclxuICAgIHNldERpcnR5KGZvcm0uY29udHJvbHMgYXMgeyBba2V5OiBzdHJpbmddOiBGb3JtQ29udHJvbCB9KTtcclxuICAgIGZvcm0ubWFya0FzRGlydHkoKTtcclxuXHJcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERpcnR5KGNvbnRyb2xzOiBDb250cm9scykge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGNvbnRyb2xzKSkge1xyXG4gICAgY29udHJvbHMuZm9yRWFjaChncm91cCA9PiB7XHJcbiAgICAgIHNldERpcnR5KGdyb3VwLmNvbnRyb2xzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybUNvbnRyb2wgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIE9iamVjdC5rZXlzKGNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICBjb250cm9sc1trZXldLm1hcmtBc0RpcnR5KCk7XHJcbiAgICBjb250cm9sc1trZXldLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICB9KTtcclxufVxyXG4iXX0=