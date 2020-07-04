import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { toastInOut } from '../../animations/toast.animations';
let ToastContainerComponent = class ToastContainerComponent {
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
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ToastContainerComponent.prototype, "top", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ToastContainerComponent.prototype, "right", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ToastContainerComponent.prototype, "bottom", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ToastContainerComponent.prototype, "left", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ToastContainerComponent.prototype, "toastKey", void 0);
ToastContainerComponent = __decorate([
    Component({
        selector: 'abp-toast-container',
        template: "<div\r\n  class=\"toast-container\"\r\n  [style.top]=\"top || 'auto'\"\r\n  [style.right]=\"right || 'auto'\"\r\n  [style.bottom]=\"bottom || 'auto'\"\r\n  [style.left]=\"left || 'auto'\"\r\n  [style.display]=\"toasts.length ? 'flex' : 'none'\"\r\n  [@toastInOut]=\"toasts.length\"\r\n>\r\n  <abp-toast [toast]=\"toast\" *ngFor=\"let toast of toasts; trackBy: trackByFunc\"></abp-toast>\r\n</div>\r\n",
        animations: [toastInOut],
        styles: [".toast-container{align-items:center;display:flex;flex-direction:column;justify-content:flex-end;min-height:80px;min-width:350px;position:fixed;z-index:1900}.toast-container.new-on-top{flex-direction:column-reverse}"]
    })
], ToastContainerComponent);
export { ToastContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVUvRCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQUFwQztRQUdFLFdBQU0sR0FBRyxFQUFxQixDQUFDO1FBTS9CLFVBQUssR0FBRyxNQUFNLENBQUM7UUFHZixXQUFNLEdBQUcsTUFBTSxDQUFDO0lBc0JsQixDQUFDO0lBZEMsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVE7Z0JBQ3pCLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNoQixPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDL0QsQ0FBQyxDQUFDO2dCQUNKLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUs7UUFDdEIsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBO0FBNUJDO0lBREMsS0FBSyxFQUFFOztvREFDSTtBQUdaO0lBREMsS0FBSyxFQUFFOztzREFDTztBQUdmO0lBREMsS0FBSyxFQUFFOzt1REFDUTtBQUdoQjtJQURDLEtBQUssRUFBRTs7cURBQ0s7QUFHYjtJQURDLEtBQUssRUFBRTs7eURBQ1M7QUFsQk4sdUJBQXVCO0lBTm5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsNFpBQStDO1FBRS9DLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQzs7S0FDekIsQ0FBQztHQUNXLHVCQUF1QixDQWtDbkM7U0FsQ1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvYXN0SW5PdXQgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zL3RvYXN0LmFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RvYXN0ZXInO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC10b2FzdC1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFt0b2FzdEluT3V0XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Q29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0b2FzdHMkOiBSZXBsYXlTdWJqZWN0PFRvYXN0ZXIuVG9hc3RbXT47XHJcblxyXG4gIHRvYXN0cyA9IFtdIGFzIFRvYXN0ZXIuVG9hc3RbXTtcclxuXHJcbiAgQElucHV0KClcclxuICB0b3A6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICByaWdodCA9ICczMHB4JztcclxuXHJcbiAgQElucHV0KClcclxuICBib3R0b20gPSAnMzBweCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbGVmdDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHRvYXN0S2V5OiBzdHJpbmc7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50b2FzdHMkLnN1YnNjcmliZSh0b2FzdHMgPT4ge1xyXG4gICAgICB0aGlzLnRvYXN0cyA9IHRoaXMudG9hc3RLZXlcclxuICAgICAgICA/IHRvYXN0cy5maWx0ZXIodCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0Lm9wdGlvbnMgJiYgdC5vcHRpb25zLmNvbnRhaW5lcktleSAhPT0gdGhpcy50b2FzdEtleTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgOiB0b2FzdHM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRyYWNrQnlGdW5jKGluZGV4LCB0b2FzdCkge1xyXG4gICAgaWYgKCF0b2FzdCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gdG9hc3Qub3B0aW9ucy5pZDtcclxuICB9XHJcbn1cclxuIl19