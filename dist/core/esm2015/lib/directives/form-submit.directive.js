import { __decorate, __metadata, __param } from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output, Self, } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { takeUntilDestroy } from '../utils';
let FormSubmitDirective = class FormSubmitDirective {
    constructor(formGroupDirective, host, cdRef) {
        this.formGroupDirective = formGroupDirective;
        this.host = host;
        this.cdRef = cdRef;
        this.debounce = 200;
        this.ngSubmit = new EventEmitter();
        this.executedNgSubmit = false;
    }
    ngOnInit() {
        this.formGroupDirective.ngSubmit.pipe(takeUntilDestroy(this)).subscribe(() => {
            this.markAsDirty();
            this.executedNgSubmit = true;
        });
        fromEvent(this.host.nativeElement, 'keyup')
            .pipe(debounceTime(this.debounce), filter((key) => key && key.key === 'Enter'), takeUntilDestroy(this))
            .subscribe(() => {
            if (!this.executedNgSubmit) {
                this.host.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            }
            this.executedNgSubmit = false;
        });
    }
    ngOnDestroy() { }
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
    }),
    __param(0, Self()),
    __metadata("design:paramtypes", [FormGroupDirective,
        ElementRef,
        ChangeDetectorRef])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zdWJtaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBMEIsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBUTVDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBVzlCLFlBQ2tCLGtCQUFzQyxFQUM5QyxJQUFpQyxFQUNqQyxLQUF3QjtRQUZoQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQzlDLFNBQUksR0FBSixJQUFJLENBQTZCO1FBQ2pDLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBWmxDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFLSSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRCxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFNdEIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDM0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUE0QixFQUFFLE9BQU8sQ0FBQzthQUN2RCxJQUFJLENBQ0gsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDM0IsTUFBTSxDQUFDLENBQUMsR0FBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLEVBQzFELGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUN2QjthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2pHO1lBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXLEtBQVUsQ0FBQztJQUV0QixXQUFXO1FBQ1QsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUV6QyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQTBDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQTtBQTlDQztJQURDLEtBQUssRUFBRTs7cURBQ087QUFHZjtJQURDLEtBQUssRUFBRTs7Z0VBQzhCO0FBRTVCO0lBQVQsTUFBTSxFQUFFOztxREFBd0M7QUFQdEMsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNULCtDQUErQztRQUMvQyxRQUFRLEVBQUUsMkJBQTJCO0tBQ3RDLENBQUM7SUFhRyxXQUFBLElBQUksRUFBRSxDQUFBO3FDQUE2QixrQkFBa0I7UUFDeEMsVUFBVTtRQUNULGlCQUFpQjtHQWR2QixtQkFBbUIsQ0FnRC9CO1NBaERZLG1CQUFtQjtBQWtEaEMsU0FBUyxRQUFRLENBQUMsUUFBa0I7SUFDbEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzNCLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkIsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUEwQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPO0tBQ1I7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNsQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDekMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2VsZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3kgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG50eXBlIENvbnRyb2xzID0geyBba2V5OiBzdHJpbmddOiBGb3JtQ29udHJvbCB9IHwgRm9ybUdyb3VwW107XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybVtuZ1N1Ym1pdF1bZm9ybUdyb3VwXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtU3VibWl0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgZGVib3VuY2UgPSAyMDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbm90VmFsaWRhdGVPblN1Ym1pdDogc3RyaW5nIHwgYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG5nU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBleGVjdXRlZE5nU3VibWl0ID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQFNlbGYoKSBwcml2YXRlIGZvcm1Hcm91cERpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlLFxyXG4gICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmPEhUTUxGb3JtRWxlbWVudD4sXHJcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmUubmdTdWJtaXQucGlwZSh0YWtlVW50aWxEZXN0cm95KHRoaXMpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm1hcmtBc0RpcnR5KCk7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZWROZ1N1Ym1pdCA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmcm9tRXZlbnQodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFbnRlcicpLFxyXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3kodGhpcyksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmV4ZWN1dGVkTmdTdWJtaXQpIHtcclxuICAgICAgICAgIHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzdWJtaXQnLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5leGVjdXRlZE5nU3VibWl0ID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxyXG5cclxuICBtYXJrQXNEaXJ0eSgpIHtcclxuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmU7XHJcblxyXG4gICAgc2V0RGlydHkoZm9ybS5jb250cm9scyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Db250cm9sIH0pO1xyXG4gICAgZm9ybS5tYXJrQXNEaXJ0eSgpO1xyXG5cclxuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGlydHkoY29udHJvbHM6IENvbnRyb2xzKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbHMpKSB7XHJcbiAgICBjb250cm9scy5mb3JFYWNoKGdyb3VwID0+IHtcclxuICAgICAgc2V0RGlydHkoZ3JvdXAuY29udHJvbHMgYXMgeyBba2V5OiBzdHJpbmddOiBGb3JtQ29udHJvbCB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMoY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGNvbnRyb2xzW2tleV0ubWFya0FzRGlydHkoKTtcclxuICAgIGNvbnRyb2xzW2tleV0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gIH0pO1xyXG59XHJcbiJdfQ==