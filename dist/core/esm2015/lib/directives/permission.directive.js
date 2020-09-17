import { __decorate, __metadata, __param } from "tslib";
import { Directive, ElementRef, Input, Optional, Renderer2, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Store } from '@ngxs/store';
import { ConfigState } from '../states';
let PermissionDirective = class PermissionDirective {
    constructor(elRef, renderer, store, templateRef, vcRef) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.store = store;
        this.templateRef = templateRef;
        this.vcRef = vcRef;
    }
    check() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription = this.store
            .select(ConfigState.getGrantedPolicy(this.condition))
            .subscribe(isGranted => {
            if (this.templateRef && isGranted) {
                this.vcRef.clear();
                this.vcRef.createEmbeddedView(this.templateRef);
            }
            else if (this.templateRef && !isGranted) {
                this.vcRef.clear();
            }
            else if (!isGranted && !this.templateRef) {
                this.renderer.removeChild(this.elRef.nativeElement.parentElement, this.elRef.nativeElement);
            }
        });
    }
    ngOnInit() {
        if (this.templateRef && !this.condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        }
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    ngOnChanges({ condition }) {
        if ((condition || { currentValue: null }).currentValue) {
            this.check();
        }
    }
};
__decorate([
    Input('abpPermission'),
    __metadata("design:type", String)
], PermissionDirective.prototype, "condition", void 0);
PermissionDirective = __decorate([
    Directive({
        selector: '[abpPermission]',
    }),
    __param(3, Optional()),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        Store,
        TemplateRef,
        ViewContainerRef])
], PermissionDirective);
export { PermissionDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9wZXJtaXNzaW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBRVQsV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFLeEMsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFLOUIsWUFDVSxLQUFpQixFQUNqQixRQUFtQixFQUNuQixLQUFZLEVBQ0EsV0FBNkIsRUFDekMsS0FBdUI7UUFKdkIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQU87UUFDQSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDekMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7SUFDOUIsQ0FBQztJQUVJLEtBQUs7UUFDWCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDM0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDcEQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNwQjtpQkFBTSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBNkIsQ0FBQyxhQUFhLEVBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUN6QixDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVELFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBaUI7UUFDdEMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUN0RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7Q0FDRixDQUFBO0FBakR5QjtJQUF2QixLQUFLLENBQUMsZUFBZSxDQUFDOztzREFBbUI7QUFEL0IsbUJBQW1CO0lBSC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7S0FDNUIsQ0FBQztJQVVHLFdBQUEsUUFBUSxFQUFFLENBQUE7cUNBSEksVUFBVTtRQUNQLFNBQVM7UUFDWixLQUFLO1FBQ2EsV0FBVztRQUM3QixnQkFBZ0I7R0FWdEIsbUJBQW1CLENBa0QvQjtTQWxEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYWJwUGVybWlzc2lvbl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgnYWJwUGVybWlzc2lvbicpIGNvbmRpdGlvbjogc3RyaW5nO1xyXG5cclxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgY2hlY2soKSB7XHJcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuc3RvcmVcclxuICAgICAgLnNlbGVjdChDb25maWdTdGF0ZS5nZXRHcmFudGVkUG9saWN5KHRoaXMuY29uZGl0aW9uKSlcclxuICAgICAgLnN1YnNjcmliZShpc0dyYW50ZWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlUmVmICYmIGlzR3JhbnRlZCkge1xyXG4gICAgICAgICAgdGhpcy52Y1JlZi5jbGVhcigpO1xyXG4gICAgICAgICAgdGhpcy52Y1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRlbXBsYXRlUmVmICYmICFpc0dyYW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMudmNSZWYuY2xlYXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFpc0dyYW50ZWQgJiYgIXRoaXMudGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgICAgICh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnBhcmVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMudGVtcGxhdGVSZWYgJiYgIXRoaXMuY29uZGl0aW9uKSB7XHJcbiAgICAgIHRoaXMudmNSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyh7IGNvbmRpdGlvbiB9OiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoKGNvbmRpdGlvbiB8fCB7IGN1cnJlbnRWYWx1ZTogbnVsbCB9KS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5jaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=