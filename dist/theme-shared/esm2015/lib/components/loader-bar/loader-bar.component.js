import { StartLoader, StopLoader, SubscriptionService } from '@abp/ng.core';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Actions, ofActionSuccessful } from '@ngxs/store';
import { timer } from 'rxjs';
import { filter } from 'rxjs/operators';
export class LoaderBarComponent {
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
}
LoaderBarComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
LoaderBarComponent.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: ChangeDetectorRef },
    { type: SubscriptionService }
];
LoaderBarComponent.propDecorators = {
    isLoading: [{ type: Input }],
    containerClass: [{ type: Input }],
    color: [{ type: Input }],
    filter: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL2xvYWRlci1iYXIvbG9hZGVyLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRixPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW9CeEMsTUFBTSxPQUFPLGtCQUFrQjtJQXNEN0IsWUFDVSxPQUFnQixFQUNoQixNQUFjLEVBQ2QsS0FBd0IsRUFDeEIsWUFBaUM7UUFIakMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBN0MzQyxtQkFBYyxHQUFHLGdCQUFnQixDQUFDO1FBR2xDLFVBQUssR0FBRyxTQUFTLENBQUM7UUFFbEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFNbEIsbUJBQWMsR0FBRyxHQUFHLENBQUM7UUFFckIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUdoQixXQUFNLEdBQUcsQ0FBQyxNQUFnQyxFQUFFLEVBQUUsQ0FDNUMsTUFBTSxDQUFD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QUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUvQyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFBRSxPQUFPO1FBRTdDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7OztZQXBJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtnQkFFRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs7YUFDakM7OztZQXJCUSxPQUFPO1lBRDBDLE1BQU07WUFEdkQsaUJBQWlCO1lBRFEsbUJBQW1COzs7d0JBNEJsRCxLQUFLOzZCQVNMLEtBQUs7b0JBR0wsS0FBSztxQkFhTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhcnRMb2FkZXIsIFN0b3BMb2FkZXIsIFN1YnNjcmlwdGlvblNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkVycm9yLCBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjdGlvbnMsIG9mQWN0aW9uU3VjY2Vzc2Z1bCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCB0aW1lciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1sb2FkZXItYmFyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBpZD1cImFicC1sb2FkZXItYmFyXCIgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3NcIiBbY2xhc3MuaXMtbG9hZGluZ109XCJpc0xvYWRpbmdcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwiYWJwLXByb2dyZXNzXCJcclxuICAgICAgICBbY2xhc3MucHJvZ3Jlc3NpbmddPVwicHJvZ3Jlc3NMZXZlbFwiXHJcbiAgICAgICAgW3N0eWxlLndpZHRoLnZ3XT1cInByb2dyZXNzTGV2ZWxcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3IsXHJcbiAgICAgICAgICAnYm94LXNoYWRvdyc6IGJveFNoYWRvd1xyXG4gICAgICAgIH1cIlxyXG4gICAgICA+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlVXJsczogWycuL2xvYWRlci1iYXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFtTdWJzY3JpcHRpb25TZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRlckJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBwcm90ZWN0ZWQgX2lzTG9hZGluZzogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaXNMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0xvYWRpbmcgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBnZXQgaXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGluZztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29udGFpbmVyQ2xhc3MgPSAnYWJwLWxvYWRlci1iYXInO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbG9yID0gJyM3N2I2ZmYnO1xyXG5cclxuICBwcm9ncmVzc0xldmVsID0gMDtcclxuXHJcbiAgaW50ZXJ2YWw6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgdGltZXI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgaW50ZXJ2YWxQZXJpb2QgPSAzNTA7XHJcblxyXG4gIHN0b3BEZWxheSA9IDgwMDtcclxuXHJcbiAgQElucHV0KClcclxuICBmaWx0ZXIgPSAoYWN0aW9uOiBTdGFydExvYWRlciB8IFN0b3BMb2FkZXIpID0+XHJcbiAgICBhY3Rpb24ucGF5bG9hZC51cmwuaW5kZXhPZignb3BlbmlkLWNvbmZpZ3VyYXRpb24nKSA8IDA7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2xlYXJQcm9ncmVzcyA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvZ3Jlc3NMZXZlbCA9IDA7XHJcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHJlcG9ydFByb2dyZXNzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3NMZXZlbCA8IDc1KSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NMZXZlbCArPSAxICsgTWF0aC5yYW5kb20oKSAqIDk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvZ3Jlc3NMZXZlbCA8IDkwKSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NMZXZlbCArPSAwLjQ7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvZ3Jlc3NMZXZlbCA8IDEwMCkge1xyXG4gICAgICB0aGlzLnByb2dyZXNzTGV2ZWwgKz0gMC4xO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnRlcnZhbC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfTtcclxuXHJcbiAgZ2V0IGJveFNoYWRvdygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAwIDAgMTBweCByZ2JhKCR7dGhpcy5jb2xvcn0sIDAuNSlgO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFjdGlvbnM6IEFjdGlvbnMsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9Mb2FkQWN0aW9ucygpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZE9uZShcclxuICAgICAgdGhpcy5hY3Rpb25zLnBpcGUob2ZBY3Rpb25TdWNjZXNzZnVsKFN0YXJ0TG9hZGVyLCBTdG9wTG9hZGVyKSwgZmlsdGVyKHRoaXMuZmlsdGVyKSksXHJcbiAgICAgIGFjdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIFN0YXJ0TG9hZGVyKSB0aGlzLnN0YXJ0TG9hZGluZygpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5zdG9wTG9hZGluZygpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9Sb3V0ZXJFdmVudHMoKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGRPbmUoXHJcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxyXG4gICAgICAgIGZpbHRlcihcclxuICAgICAgICAgIGV2ZW50ID0+XHJcbiAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0IHx8XHJcbiAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCB8fFxyXG4gICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcixcclxuICAgICAgICApLFxyXG4gICAgICApLFxyXG4gICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB0aGlzLnN0YXJ0TG9hZGluZygpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5zdG9wTG9hZGluZygpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVUb0xvYWRBY3Rpb25zKCk7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvUm91dGVyRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmludGVydmFsKSB0aGlzLmludGVydmFsLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBzdGFydExvYWRpbmcoKSB7XHJcbiAgICBpZiAodGhpcy5pc0xvYWRpbmcgfHwgKHRoaXMuaW50ZXJ2YWwgJiYgIXRoaXMuaW50ZXJ2YWwuY2xvc2VkKSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmludGVydmFsID0gdGltZXIoMCwgdGhpcy5pbnRlcnZhbFBlcmlvZCkuc3Vic2NyaWJlKHRoaXMucmVwb3J0UHJvZ3Jlc3MpO1xyXG4gIH1cclxuXHJcbiAgc3RvcExvYWRpbmcoKSB7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbCkgdGhpcy5pbnRlcnZhbC51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgIHRoaXMucHJvZ3Jlc3NMZXZlbCA9IDEwMDtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMudGltZXIgJiYgIXRoaXMudGltZXIuY2xvc2VkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy50aW1lciA9IHRpbWVyKHRoaXMuc3RvcERlbGF5KS5zdWJzY3JpYmUodGhpcy5jbGVhclByb2dyZXNzKTtcclxuICB9XHJcbn1cclxuIl19