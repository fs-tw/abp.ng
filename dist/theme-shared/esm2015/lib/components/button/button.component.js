import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, Renderer2, } from '@angular/core';
let ButtonComponent = class ButtonComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.buttonId = '';
        this.buttonClass = 'btn btn-primary';
        this.buttonType = 'button';
        this.loading = false;
        this.disabled = false;
        // tslint:disable
        this.click = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        // tslint:enable
        this.abpClick = new EventEmitter();
        this.abpFocus = new EventEmitter();
        this.abpBlur = new EventEmitter();
    }
    get icon() {
        return `${this.loading ? 'fa fa-spinner fa-spin' : this.iconClass || 'd-none'}`;
    }
    ngOnInit() {
        if (this.attributes) {
            Object.keys(this.attributes).forEach(key => {
                this.renderer.setAttribute(this.buttonRef.nativeElement, key, this.attributes[key]);
            });
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "buttonId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "buttonClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "buttonType", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "iconClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "loading", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "attributes", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "click", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "focus", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "blur", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "abpClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "abpFocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "abpBlur", void 0);
__decorate([
    ViewChild('button', { static: true }),
    __metadata("design:type", ElementRef)
], ButtonComponent.prototype, "buttonRef", void 0);
ButtonComponent = __decorate([
    Component({
        selector: 'abp-button',
        template: `
    <button
      #button
      [id]="buttonId"
      [attr.type]="buttonType"
      [ngClass]="buttonClass"
      [disabled]="loading || disabled"
      (click.stop)="click.next($event); abpClick.next($event)"
      (focus)="focus.next($event); abpFocus.next($event)"
      (blur)="blur.next($event); abpBlur.next($event)"
    >
      <i [ngClass]="icon" class="mr-1"></i><ng-content></ng-content>
    </button>
  `
    }),
    __metadata("design:paramtypes", [Renderer2])
], ButtonComponent);
export { ButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFvQnZCLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUEyQzFCLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUF6Q3ZDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFHZCxnQkFBVyxHQUFHLGlCQUFpQixDQUFDO1FBR2hDLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFNdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBS2pCLGlCQUFpQjtRQUNFLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBRXZDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBRXZDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3pELGdCQUFnQjtRQUVHLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBRTFDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBRTFDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBU2xCLENBQUM7SUFKM0MsSUFBSSxJQUFJO1FBQ04sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ2xGLENBQUM7SUFJRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFsREM7SUFEQyxLQUFLLEVBQUU7O2lEQUNNO0FBR2Q7SUFEQyxLQUFLLEVBQUU7O29EQUN3QjtBQUdoQztJQURDLEtBQUssRUFBRTs7bURBQ2M7QUFHdEI7SUFEQyxLQUFLLEVBQUU7O2tEQUNVO0FBR2xCO0lBREMsS0FBSyxFQUFFOztnREFDUTtBQUdoQjtJQURDLEtBQUssRUFBRTs7aURBQ1M7QUFHakI7SUFEQyxLQUFLLEVBQUU7O21EQUMyQjtBQUd6QjtJQUFULE1BQU0sRUFBRTs7OENBQWlEO0FBRWhEO0lBQVQsTUFBTSxFQUFFOzs4Q0FBaUQ7QUFFaEQ7SUFBVCxNQUFNLEVBQUU7OzZDQUFnRDtBQUcvQztJQUFULE1BQU0sRUFBRTs7aURBQW9EO0FBRW5EO0lBQVQsTUFBTSxFQUFFOztpREFBb0Q7QUFFbkQ7SUFBVCxNQUFNLEVBQUU7O2dEQUFtRDtBQUc1RDtJQURDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQzNCLFVBQVU7a0RBQW9CO0FBckM5QixlQUFlO0lBakIzQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7R0FhVDtLQUNGLENBQUM7cUNBNEM4QixTQUFTO0dBM0M1QixlQUFlLENBb0QzQjtTQXBEWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgT25Jbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICAjYnV0dG9uXHJcbiAgICAgIFtpZF09XCJidXR0b25JZFwiXHJcbiAgICAgIFthdHRyLnR5cGVdPVwiYnV0dG9uVHlwZVwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cImJ1dHRvbkNsYXNzXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImxvYWRpbmcgfHwgZGlzYWJsZWRcIlxyXG4gICAgICAoY2xpY2suc3RvcCk9XCJjbGljay5uZXh0KCRldmVudCk7IGFicENsaWNrLm5leHQoJGV2ZW50KVwiXHJcbiAgICAgIChmb2N1cyk9XCJmb2N1cy5uZXh0KCRldmVudCk7IGFicEZvY3VzLm5leHQoJGV2ZW50KVwiXHJcbiAgICAgIChibHVyKT1cImJsdXIubmV4dCgkZXZlbnQpOyBhYnBCbHVyLm5leHQoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICAgIDxpIFtuZ0NsYXNzXT1cImljb25cIiBjbGFzcz1cIm1yLTFcIj48L2k+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9idXR0b24+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBidXR0b25JZCA9ICcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGJ1dHRvbkNsYXNzID0gJ2J0biBidG4tcHJpbWFyeSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYnV0dG9uVHlwZSA9ICdidXR0b24nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGljb25DbGFzczogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGF0dHJpYnV0ZXM6IEFCUC5EaWN0aW9uYXJ5PHN0cmluZz47XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG4gIC8vIHRzbGludDplbmFibGVcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFicENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYWJwRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBhYnBCbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdidXR0b24nLCB7IHN0YXRpYzogdHJ1ZSB9KVxyXG4gIGJ1dHRvblJlZjogRWxlbWVudFJlZjxIVE1MQnV0dG9uRWxlbWVudD47XHJcblxyXG4gIGdldCBpY29uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5sb2FkaW5nID8gJ2ZhIGZhLXNwaW5uZXIgZmEtc3BpbicgOiB0aGlzLmljb25DbGFzcyB8fCAnZC1ub25lJ31gO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgT2JqZWN0LmtleXModGhpcy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5idXR0b25SZWYubmF0aXZlRWxlbWVudCwga2V5LCB0aGlzLmF0dHJpYnV0ZXNba2V5XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=