import { __decorate, __metadata } from "tslib";
import { StartLoader, StopLoader, SubscriptionService } from '@abp/ng.core';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Actions, ofActionSuccessful } from '@ngxs/store';
import { timer } from 'rxjs';
import { filter } from 'rxjs/operators';
let LoaderBarComponent = class LoaderBarComponent {
    constructor(actions, router, cdRef, subscription) {
        this.actions = actions;
        this.router = router;
        this.cdRef = cdRef;
        this.subscription = subscription;
        this.containerClass = 'abp-loader-bar';
        this.color = '#77b6ff';
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
    set isLoading(value) {
        this._isLoading = value;
        this.cdRef.detectChanges();
    }
    get isLoading() {
        return this._isLoading;
    }
    get boxShadow() {
        return `0 0 10px rgba(${this.color}, 0.5)`;
    }
    subscribeToLoadActions() {
        this.subscription.addOne(this.actions.pipe(ofActionSuccessful(StartLoader, StopLoader), filter(this.filter)), action => {
            if (action instanceof StartLoader)
                this.startLoading();
            else
                this.stopLoading();
        });
    }
    subscribeToRouterEvents() {
        this.subscription.addOne(this.router.events.pipe(filter(event => event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationError)), event => {
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
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LoaderBarComponent.prototype, "isLoading", null);
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
        providers: [SubscriptionService],
        styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0}.abp-loader-bar .abp-progress.progressing{transition:width .4s ease}"]
    }),
    __metadata("design:paramtypes", [Actions,
        Router,
        ChangeDetectorRef,
        SubscriptionService])
], LoaderBarComponent);
export { LoaderBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL2xvYWRlci1iYXIvbG9hZGVyLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFvQnhDLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBc0Q3QixZQUNVLE9BQWdCLEVBQ2hCLE1BQWMsRUFDZCxLQUF3QixFQUN4QixZQUFpQztRQUhqQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUE3QzNDLG1CQUFjLEdBQUcsZ0JBQWdCLENBQUM7UUFHbEMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUVsQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQU1sQixtQkFBYyxHQUFHLEdBQUcsQ0FBQztRQUVyQixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBR2hCLFdBQU0sR0FBRyxDQUFDLE1BQWdDLEVBQUUsRUFBRSxD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O1FBRXRCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRS9DLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUFFLE9BQU87UUFFN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNGLENBQUE7QUEvR0M7SUFEQyxLQUFLLEVBQUU7OzttREFJUDtBQU1EO0lBREMsS0FBSyxFQUFFOzswREFDMEI7QUFHbEM7SUFEQyxLQUFLLEVBQUU7O2lEQUNVO0FBYWxCO0lBREMsS0FBSyxFQUFFOztrREFFaUQ7QUE5QjlDLGtCQUFrQjtJQWxCOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO1FBRUQsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7O0tBQ2pDLENBQUM7cUNBd0RtQixPQUFPO1FBQ1IsTUFBTTtRQUNQLGlCQUFpQjtRQUNWLG1CQUFtQjtHQTFEaEMsa0JBQWtCLENBbUg5QjtTQW5IWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFydExvYWRlciwgU3RvcExvYWRlciwgU3Vic2NyaXB0aW9uU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uRXJyb3IsIE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWN0aW9ucywgb2ZBY3Rpb25TdWNjZXNzZnVsIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIHRpbWVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWxvYWRlci1iYXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGlkPVwiYWJwLWxvYWRlci1iYXJcIiBbbmdDbGFzc109XCJjb250YWluZXJDbGFzc1wiIFtjbGFzcy5pcy1sb2FkaW5nXT1cImlzTG9hZGluZ1wiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJhYnAtcHJvZ3Jlc3NcIlxyXG4gICAgICAgIFtjbGFzcy5wcm9ncmVzc2luZ109XCJwcm9ncmVzc0xldmVsXCJcclxuICAgICAgICBbc3R5bGUud2lkdGgudnddPVwicHJvZ3Jlc3NMZXZlbFwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBjb2xvcixcclxuICAgICAgICAgICdib3gtc2hhZG93JzogYm94U2hhZG93XHJcbiAgICAgICAgfVwiXHJcbiAgICAgID48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGVyLWJhci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1N1YnNjcmlwdGlvblNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGVyQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIHByb3RlY3RlZCBfaXNMb2FkaW5nOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpc0xvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzTG9hZGluZyA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIGdldCBpc0xvYWRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBjb250YWluZXJDbGFzcyA9ICdhYnAtbG9hZGVyLWJhcic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3IgPSAnIzc3YjZmZic7XHJcblxyXG4gIHByb2dyZXNzTGV2ZWwgPSAwO1xyXG5cclxuICBpbnRlcnZhbDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICB0aW1lcjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBpbnRlcnZhbFBlcmlvZCA9IDM1MDtcclxuXHJcbiAgc3RvcERlbGF5ID0gODAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGZpbHRlciA9IChhY3Rpb246IFN0YXJ0TG9hZGVyIHwgU3RvcExvYWRlcikgPT5cclxuICAgIGFjdGlvbi5wYXlsb2FkLnVybC5pbmRleE9mKCdvcGVuaWQtY29uZmlndXJhdGlvbicpIDwgMDtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBjbGVhclByb2dyZXNzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9ncmVzc0xldmVsID0gMDtcclxuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVwb3J0UHJvZ3Jlc3MgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9ncmVzc0xldmVsIDwgNzUpIHtcclxuICAgICAgdGhpcy5wcm9ncmVzc0xldmVsICs9IDEgKyBNYXRoLnJhbmRvbSgpICogOTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9ncmVzc0xldmVsIDwgOTApIHtcclxuICAgICAgdGhpcy5wcm9ncmVzc0xldmVsICs9IDAuNDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9ncmVzc0xldmVsIDwgMTAwKSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NMZXZlbCArPSAwLjE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmludGVydmFsLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9O1xyXG5cclxuICBnZXQgYm94U2hhZG93KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYDAgMCAxMHB4IHJnYmEoJHt0aGlzLmNvbG9yfSwgMC41KWA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYWN0aW9uczogQWN0aW9ucyxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25TZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0xvYWRBY3Rpb25zKCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkT25lKFxyXG4gICAgICB0aGlzLmFjdGlvbnMucGlwZShvZkFjdGlvblN1Y2Nlc3NmdWwoU3RhcnRMb2FkZXIsIFN0b3BMb2FkZXIpLCBmaWx0ZXIodGhpcy5maWx0ZXIpKSxcclxuICAgICAgYWN0aW9uID0+IHtcclxuICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgU3RhcnRMb2FkZXIpIHRoaXMuc3RhcnRMb2FkaW5nKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnN0b3BMb2FkaW5nKCk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1JvdXRlckV2ZW50cygpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZE9uZShcclxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKFxyXG4gICAgICAgICAgZXZlbnQgPT5cclxuICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQgfHxcclxuICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8XHJcbiAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yLFxyXG4gICAgICAgICksXHJcbiAgICAgICksXHJcbiAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHRoaXMuc3RhcnRMb2FkaW5nKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnN0b3BMb2FkaW5nKCk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvTG9hZEFjdGlvbnMoKTtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9Sb3V0ZXJFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHRoaXMuaW50ZXJ2YWwudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0TG9hZGluZygpIHtcclxuICAgIGlmICh0aGlzLmlzTG9hZGluZyB8fCAodGhpcy5pbnRlcnZhbCAmJiAhdGhpcy5pbnRlcnZhbC5jbG9zZWQpKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuaW50ZXJ2YWwgPSB0aW1lcigwLCB0aGlzLmludGVydmFsUGVyaW9kKS5zdWJzY3JpYmUodGhpcy5yZXBvcnRQcm9ncmVzcyk7XHJcbiAgfVxyXG5cclxuICBzdG9wTG9hZGluZygpIHtcclxuICAgIGlmICh0aGlzLmludGVydmFsKSB0aGlzLmludGVydmFsLnVuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgdGhpcy5wcm9ncmVzc0xldmVsID0gMTAwO1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAodGhpcy50aW1lciAmJiAhdGhpcy50aW1lci5jbG9zZWQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnRpbWVyID0gdGltZXIodGhpcy5zdG9wRGVsYXkpLnN1YnNjcmliZSh0aGlzLmNsZWFyUHJvZ3Jlc3MpO1xyXG4gIH1cclxufVxyXG4iXX0=