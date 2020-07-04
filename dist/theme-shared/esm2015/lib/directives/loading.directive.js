import { __decorate, __metadata } from "tslib";
import { ComponentFactoryResolver, Directive, ElementRef, HostBinding, Injector, Input, Renderer2, ViewContainerRef, } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { LoadingComponent } from '../components/loading/loading.component';
let LoadingDirective = class LoadingDirective {
    constructor(elRef, vcRef, cdRes, injector, renderer) {
        this.elRef = elRef;
        this.vcRef = vcRef;
        this.cdRes = cdRes;
        this.injector = injector;
        this.renderer = renderer;
        this.position = 'relative';
        this.delay = 0;
    }
    get loading() {
        return this._loading;
    }
    set loading(newValue) {
        setTimeout(() => {
            if (!newValue && this.timerSubscription) {
                this.timerSubscription.unsubscribe();
                this.timerSubscription = null;
                this._loading = newValue;
                if (this.rootNode) {
                    this.renderer.removeChild(this.rootNode.parentElement, this.rootNode);
                    this.rootNode = null;
                }
                return;
            }
            this.timerSubscription = timer(this.delay)
                .pipe(take(1))
                .subscribe(() => {
                if (!this.componentRef) {
                    this.componentRef = this.cdRes
                        .resolveComponentFactory(LoadingComponent)
                        .create(this.injector);
                }
                if (newValue && !this.rootNode) {
                    this.rootNode = this.componentRef.hostView.rootNodes[0];
                    this.targetElement.appendChild(this.rootNode);
                }
                else if (this.rootNode) {
                    this.renderer.removeChild(this.rootNode.parentElement, this.rootNode);
                    this.rootNode = null;
                }
                this._loading = newValue;
                this.timerSubscription = null;
            });
        }, 0);
    }
    ngOnInit() {
        if (!this.targetElement) {
            const { offsetHeight, offsetWidth } = this.elRef.nativeElement;
            if (!offsetHeight && !offsetWidth && this.elRef.nativeElement.children.length) {
                this.targetElement = this.elRef.nativeElement.children[0];
            }
            else {
                this.targetElement = this.elRef.nativeElement;
            }
        }
    }
    ngOnDestroy() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    }
};
__decorate([
    HostBinding('style.position'),
    __metadata("design:type", Object)
], LoadingDirective.prototype, "position", void 0);
__decorate([
    Input('abpLoading'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LoadingDirective.prototype, "loading", null);
__decorate([
    Input('abpLoadingTargetElement'),
    __metadata("design:type", HTMLElement)
], LoadingDirective.prototype, "targetElement", void 0);
__decorate([
    Input('abpLoadingDelay'),
    __metadata("design:type", Object)
], LoadingDirective.prototype, "delay", void 0);
LoadingDirective = __decorate([
    Directive({ selector: '[abpLoading]' }),
    __metadata("design:paramtypes", [ElementRef,
        ViewContainerRef,
        ComponentFactoryResolver,
        Injector,
        Renderer2])
], LoadingDirective);
export { LoadingDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsd0JBQXdCLEVBRXhCLFNBQVMsRUFDVCxVQUFVLEVBRVYsV0FBVyxFQUNYLFFBQVEsRUFDUixLQUFLLEVBR0wsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHM0UsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUEwRDNCLFlBQ1UsS0FBOEIsRUFDOUIsS0FBdUIsRUFDdkIsS0FBK0IsRUFDL0IsUUFBa0IsRUFDbEIsUUFBbUI7UUFKbkIsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBMEI7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBM0Q3QixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBZ0R0QixVQUFLLEdBQUcsQ0FBQyxDQUFDO0lBWVAsQ0FBQztJQXpESixJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLFFBQWlCO1FBQzNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLGlCQUFpQixD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VixnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3JCLFFBQVE7UUFDUixTQUFTO0dBL0RsQixnQkFBZ0IsQ0FrRjVCO1NBbEZZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCB0aW1lciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thYnBMb2FkaW5nXScgfSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfbG9hZGluZzogYm9vbGVhbjtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wb3NpdGlvbicpXHJcbiAgcG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG5cclxuICBASW5wdXQoJ2FicExvYWRpbmcnKVxyXG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXQgbG9hZGluZyhuZXdWYWx1ZTogYm9vbGVhbikge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghbmV3VmFsdWUgJiYgdGhpcy50aW1lclN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nID0gbmV3VmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvb3ROb2RlKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucm9vdE5vZGUucGFyZW50RWxlbWVudCwgdGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICB0aGlzLnJvb3ROb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uID0gdGltZXIodGhpcy5kZWxheSlcclxuICAgICAgICAucGlwZSh0YWtlKDEpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFJlZikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuY2RSZXNcclxuICAgICAgICAgICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTG9hZGluZ0NvbXBvbmVudClcclxuICAgICAgICAgICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChuZXdWYWx1ZSAmJiAhdGhpcy5yb290Tm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3ROb2RlID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF07XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJvb3ROb2RlKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yb290Tm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucm9vdE5vZGUucGFyZW50RWxlbWVudCwgdGhpcy5yb290Tm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuX2xvYWRpbmcgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2FicExvYWRpbmdUYXJnZXRFbGVtZW50JylcclxuICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgQElucHV0KCdhYnBMb2FkaW5nRGVsYXknKVxyXG4gIGRlbGF5ID0gMDtcclxuXHJcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TG9hZGluZ0NvbXBvbmVudD47XHJcbiAgcm9vdE5vZGU6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHRpbWVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBjZFJlczogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy50YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgb2Zmc2V0SGVpZ2h0LCBvZmZzZXRXaWR0aCB9ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBpZiAoIW9mZnNldEhlaWdodCAmJiAhb2Zmc2V0V2lkdGggJiYgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMudGltZXJTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy50aW1lclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=