import { __decorate, __metadata } from "tslib";
import { StartLoader, StopLoader } from '@abp/ng.core';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { takeUntilDestroy } from '@ngx-validate/core';
import { Actions, ofActionSuccessful } from '@ngxs/store';
import { timer } from 'rxjs';
import { filter } from 'rxjs/operators';
let LoaderBarComponent = class LoaderBarComponent {
    constructor(actions, router, cdRef) {
        this.actions = actions;
        this.router = router;
        this.cdRef = cdRef;
        this.containerClass = 'abp-loader-bar';
        this.color = '#77b6ff';
        this.isLoading = false;
        this.progressLevel = 0;
        this.intervalPeriod = 350;
        this.stopDelay = 800;
        this.filter = (action) => action.payload.url.indexOf('openid-configuration') < 0;
        this.clearProgress = () => {
            this.progressLevel = 0;
            this.cdRef.detectChanges();
        };
        this.reportProgress = () => {
            if (this.progressLevel < 75) {
                this.progressLevel += 1 + Math.random() * 9;
            }
            else if (this.progressLevel < 90) {
                this.progressLevel += 0.4;
            }
            else if (this.progressLevel < 100) {
                this.progressLevel += 0.1;
            }
            else {
                this.interval.unsubscribe();
            }
            this.cdRef.detectChanges();
        };
    }
    get boxShadow() {
        return `0 0 10px rgba(${this.color}, 0.5)`;
    }
    subscribeToLoadActions() {
        this.actions
            .pipe(ofActionSuccessful(StartLoader, StopLoader), filter(this.filter), takeUntilDestroy(this))
            .subscribe(action => {
            if (action instanceof StartLoader)
                this.startLoading();
            else
                this.stopLoading();
        });
    }
    subscribeToRouterEvents() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationError), takeUntilDestroy(this))
            .subscribe(event => {
            if (event instanceof NavigationStart)
                this.startLoading();
            else
                this.stopLoading();
        });
    }
    ngOnInit() {
        this.subscribeToLoadActions();
        this.subscribeToRouterEvents();
    }
    ngOnDestroy() {
        if (this.interval)
            this.interval.unsubscribe();
    }
    startLoading() {
        if (this.isLoading || (this.interval && !this.interval.closed))
            return;
        this.isLoading = true;
        this.interval = timer(0, this.intervalPeriod).subscribe(this.reportProgress);
    }
    stopLoading() {
        if (this.interval)
            this.interval.unsubscribe();
        this.progressLevel = 100;
        this.isLoading = false;
        if (this.timer && !this.timer.closed)
            return;
        this.timer = timer(this.stopDelay).subscribe(this.clearProgress);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoaderBarComponent.prototype, "containerClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoaderBarComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoaderBarComponent.prototype, "isLoading", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoaderBarComponent.prototype, "filter", void 0);
LoaderBarComponent = __decorate([
    Component({
        selector: 'abp-loader-bar',
        template: `
    <div id="abp-loader-bar" [ngClass]="containerClass" [class.is-loading]="isLoading">
      <div
        class="abp-progress"
        [class.progressing]="progressLevel"
        [style.width.vw]="progressLevel"
        [ngStyle]="{
          'background-color': color,
          'box-shadow': boxShadow
        }"
      ></div>
    </div>
  `,
        styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0}.abp-loader-bar .abp-progress.progressing{transition:width .4s ease}"]
    }),
    __metadata("design:paramtypes", [Actions, Router, ChangeDetectorRef])
], LoaderBarComponent);
export { LoaderBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL2xvYWRlci1iYXIvbG9hZGVyLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFtQnhDLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBOEM3QixZQUFvQixPQUFnQixFQUFVLE1BQWMsRUFBVSxLQUF3QjtRQUExRSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBNUM5RixtQkFBYyxHQUFHLGdCQUFnQixDQUFDO1FBR2xDLFVBQUssR0FBRyxTQUFTLENBQUM7UUFHbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQU1sQixtQkFBYyxHQUFHLEdBQUcsQ0FBQztRQUVyQixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBR2hCLFdBQU0sR0FBRyxDQUFD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QUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRS9DLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUFFLE9BQU87UUFFN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNGLENBQUE7QUF2R0M7SUFEQyxLQUFLLEVBQUU7OzBEQUMwQjtBQUdsQztJQURDLEtBQUssRUFBRTs7aURBQ1U7QUFHbEI7SUFEQyxLQUFLLEVBQUU7O3FEQUNVO0FBYWxCO0lBREMsS0FBSyxFQUFFOztrREFFaUQ7QUF0QjlDLGtCQUFrQjtJQWpCOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUOztLQUVGLENBQUM7cUNBK0M2QixPQUFPLEVBQWtCLE1BQU0sRUFBaUIsaUJBQWlCO0dBOUNuRixrQkFBa0IsQ0F5RzlCO1NBekdZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXJ0TG9hZGVyLCBTdG9wTG9hZGVyIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciwgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9ucywgb2ZBY3Rpb25TdWNjZXNzZnVsIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIHRpbWVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWxvYWRlci1iYXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGlkPVwiYWJwLWxvYWRlci1iYXJcIiBbbmdDbGFzc109XCJjb250YWluZXJDbGFzc1wiIFtjbGFzcy5pcy1sb2FkaW5nXT1cImlzTG9hZGluZ1wiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJhYnAtcHJvZ3Jlc3NcIlxyXG4gICAgICAgIFtjbGFzcy5wcm9ncmVzc2luZ109XCJwcm9ncmVzc0xldmVsXCJcclxuICAgICAgICBbc3R5bGUud2lkdGgudnddPVwicHJvZ3Jlc3NMZXZlbFwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBjb2xvcixcclxuICAgICAgICAgICdib3gtc2hhZG93JzogYm94U2hhZG93XHJcbiAgICAgICAgfVwiXHJcbiAgICAgID48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGVyLWJhci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGVyQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgY29udGFpbmVyQ2xhc3MgPSAnYWJwLWxvYWRlci1iYXInO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbG9yID0gJyM3N2I2ZmYnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBwcm9ncmVzc0xldmVsID0gMDtcclxuXHJcbiAgaW50ZXJ2YWw6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgdGltZXI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgaW50ZXJ2YWxQZXJpb2QgPSAzNTA7XHJcblxyXG4gIHN0b3BEZWxheSA9IDgwMDtcclxuXHJcbiAgQElucHV0KClcclxuICBmaWx0ZXIgPSAoYWN0aW9uOiBTdGFydExvYWRlciB8IFN0b3BMb2FkZXIpID0+XHJcbiAgICBhY3Rpb24ucGF5bG9hZC51cmwuaW5kZXhPZignb3BlbmlkLWNvbmZpZ3VyYXRpb24nKSA8IDA7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2xlYXJQcm9ncmVzcyA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvZ3Jlc3NMZXZlbCA9IDA7XHJcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHJlcG9ydFByb2dyZXNzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3NMZXZlbCA8IDc1KSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NMZXZlbCArPSAxICsgTWF0aC5yYW5kb20oKSAqIDk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvZ3Jlc3NMZXZlbCA8IDkwKSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NMZXZlbCArPSAwLjQ7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvZ3Jlc3NMZXZlbCA8IDEwMCkge1xyXG4gICAgICB0aGlzLnByb2dyZXNzTGV2ZWwgKz0gMC4xO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnRlcnZhbC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfTtcclxuXHJcbiAgZ2V0IGJveFNoYWRvdygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAwIDAgMTBweCByZ2JhKCR7dGhpcy5jb2xvcn0sIDAuNSlgO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zOiBBY3Rpb25zLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0xvYWRBY3Rpb25zKCkge1xyXG4gICAgdGhpcy5hY3Rpb25zXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG9mQWN0aW9uU3VjY2Vzc2Z1bChTdGFydExvYWRlciwgU3RvcExvYWRlciksXHJcbiAgICAgICAgZmlsdGVyKHRoaXMuZmlsdGVyKSxcclxuICAgICAgICB0YWtlVW50aWxEZXN0cm95KHRoaXMpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoYWN0aW9uID0+IHtcclxuICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgU3RhcnRMb2FkZXIpIHRoaXMuc3RhcnRMb2FkaW5nKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnN0b3BMb2FkaW5nKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1JvdXRlckV2ZW50cygpIHtcclxuICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIoXHJcbiAgICAgICAgICBldmVudCA9PlxyXG4gICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCB8fFxyXG4gICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgfHxcclxuICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IsXHJcbiAgICAgICAgKSxcclxuICAgICAgICB0YWtlVW50aWxEZXN0cm95KHRoaXMpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkgdGhpcy5zdGFydExvYWRpbmcoKTtcclxuICAgICAgICBlbHNlIHRoaXMuc3RvcExvYWRpbmcoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9Mb2FkQWN0aW9ucygpO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVUb1JvdXRlckV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbCkgdGhpcy5pbnRlcnZhbC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRMb2FkaW5nKCkge1xyXG4gICAgaWYgKHRoaXMuaXNMb2FkaW5nIHx8ICh0aGlzLmludGVydmFsICYmICF0aGlzLmludGVydmFsLmNsb3NlZCkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHRpbWVyKDAsIHRoaXMuaW50ZXJ2YWxQZXJpb2QpLnN1YnNjcmliZSh0aGlzLnJlcG9ydFByb2dyZXNzKTtcclxuICB9XHJcblxyXG4gIHN0b3BMb2FkaW5nKCkge1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHRoaXMuaW50ZXJ2YWwudW5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICB0aGlzLnByb2dyZXNzTGV2ZWwgPSAxMDA7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIGlmICh0aGlzLnRpbWVyICYmICF0aGlzLnRpbWVyLmNsb3NlZCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMudGltZXIgPSB0aW1lcih0aGlzLnN0b3BEZWxheSkuc3Vic2NyaWJlKHRoaXMuY2xlYXJQcm9ncmVzcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==