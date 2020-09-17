import { __decorate, __metadata } from "tslib";
import { SubscriptionService } from '@abp/ng.core';
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import snq from 'snq';
let HttpErrorWrapperComponent = class HttpErrorWrapperComponent {
    constructor(subscription) {
        this.subscription = subscription;
        this.status = 0;
        this.title = 'Oops!';
        this.details = 'Sorry, an error has occured.';
        this.customComponent = null;
        this.hideCloseIcon = false;
        this.isHomeShow = true;
    }
    get statusText() {
        return this.status ? `[${this.status}]` : '';
    }
    ngOnInit() {
        this.backgroundColor =
            snq(() => window.getComputedStyle(document.body).getPropertyValue('background-color')) ||
                '#fff';
    }
    ngAfterViewInit() {
        if (this.customComponent) {
            const customComponentRef = this.cfRes
                .resolveComponentFactory(this.customComponent)
                .create(this.injector);
            customComponentRef.instance.errorStatus = this.status;
            customComponentRef.instance.destroy$ = this.destroy$;
            this.appRef.attachView(customComponentRef.hostView);
            this.containerRef.nativeElement.appendChild(customComponentRef.hostView.rootNodes[0]);
            customComponentRef.changeDetectorRef.detectChanges();
        }
        const keyup$ = fromEvent(document, 'keyup').pipe(debounceTime(150), filter((key) => key && key.key === 'Escape'));
        this.subscription.addOne(keyup$, () => this.destroy());
    }
    ngOnDestroy() { }
    destroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
__decorate([
    ViewChild('container', { static: false }),
    __metadata("design:type", ElementRef)
], HttpErrorWrapperComponent.prototype, "containerRef", void 0);
HttpErrorWrapperComponent = __decorate([
    Component({
        selector: 'abp-http-error-wrapper',
        template: "<div\r\n  #container\r\n  id=\"abp-http-error-container\"\r\n  class=\"error\"\r\n  [style.backgroundColor]=\"backgroundColor\"\r\n>\r\n  <button\r\n    *ngIf=\"!hideCloseIcon\"\r\n    id=\"abp-close-button\"\r\n    type=\"button\"\r\n    class=\"close mr-2\"\r\n    (click)=\"destroy()\"\r\n  >\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a\r\n            *ngIf=\"isHomeShow\"\r\n            (click)=\"destroy()\"\r\n            routerLink=\"/\"\r\n            class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
        providers: [SubscriptionService],
        styles: [".error{height:100vh;position:fixed;top:0;width:100vw;z-index:999999}.centered{left:50%;position:fixed;top:50%;transform:translate(-50%,-50%)}"]
    }),
    __metadata("design:paramtypes", [SubscriptionService])
], HttpErrorWrapperComponent);
export { HttpErrorWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2NvbXBvbmVudHMvaHR0cC1lcnJvci13cmFwcGVyL2h0dHAtZXJyb3Itd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBVSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzRCxPQUFPLEVBR0wsU0FBUyxFQUVULFVBQVUsRUFNVixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQVF0QixJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQThCcEMsWUFBb0IsWUFBaUM7UUFBakMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBdkJyRCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRVgsVUFBSyxHQUE2QixPQUFPLENBQUM7UUFFMUMsWUFBTyxHQUE2Qiw4QkFBOEIsQ0FBQztRQUVuRSxvQkFBZSxHQUFjLElBQUksQ0FBQztRQUlsQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUl0QixlQUFVLEdBQUcsSUFBSSxDQUFDO0lBU3NDLENBQUM7SUFKekQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFJRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWU7WUFDbEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDdEYsTUFBTSxDQUFDO0lBQ1gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSztpQkFDbEMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QixrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEQsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FDeEMsa0JBQWtCLENBQUMsUUFBaUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQ25FLENBQUM7WUFDRixrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0RDtRQUVELE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE1BQU0sQ0FBQyxDQUFDLEdBQWtCLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUM1RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxXQUFXLEtBQUksQ0FBQztJQUVoQixPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFBO0FBekNDO0lBREMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzs4QkFDNUIsVUFBVTsrREFBaUI7QUF4QjlCLHlCQUF5QjtJQU5yQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLGduQ0FBa0Q7UUFFbEQsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7O0tBQ2pDLENBQUM7cUNBK0JrQyxtQkFBbUI7R0E5QjFDLHlCQUF5QixDQWlFckM7U0FqRVkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnLCBTdWJzY3JpcHRpb25TZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5qZWN0b3IsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBUeXBlLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1odHRwLWVycm9yLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9odHRwLWVycm9yLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydodHRwLWVycm9yLXdyYXBwZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFtTdWJzY3JpcHRpb25TZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgYXBwUmVmOiBBcHBsaWNhdGlvblJlZjtcclxuXHJcbiAgY2ZSZXM6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcclxuXHJcbiAgaW5qZWN0b3I6IEluamVjdG9yO1xyXG5cclxuICBzdGF0dXMgPSAwO1xyXG5cclxuICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtID0gJ09vcHMhJztcclxuXHJcbiAgZGV0YWlsczogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtID0gJ1NvcnJ5LCBhbiBlcnJvciBoYXMgb2NjdXJlZC4nO1xyXG5cclxuICBjdXN0b21Db21wb25lbnQ6IFR5cGU8YW55PiA9IG51bGw7XHJcblxyXG4gIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+O1xyXG5cclxuICBoaWRlQ2xvc2VJY29uID0gZmFsc2U7XHJcblxyXG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBpc0hvbWVTaG93ID0gdHJ1ZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgY29udGFpbmVyUmVmOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgZ2V0IHN0YXR1c1RleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyA/IGBbJHt0aGlzLnN0YXR1c31dYCA6ICcnO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPVxyXG4gICAgICBzbnEoKCkgPT4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpKSB8fFxyXG4gICAgICAnI2ZmZic7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21Db21wb25lbnQpIHtcclxuICAgICAgY29uc3QgY3VzdG9tQ29tcG9uZW50UmVmID0gdGhpcy5jZlJlc1xyXG4gICAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmN1c3RvbUNvbXBvbmVudClcclxuICAgICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgICBjdXN0b21Db21wb25lbnRSZWYuaW5zdGFuY2UuZXJyb3JTdGF0dXMgPSB0aGlzLnN0YXR1cztcclxuICAgICAgY3VzdG9tQ29tcG9uZW50UmVmLmluc3RhbmNlLmRlc3Ryb3kkID0gdGhpcy5kZXN0cm95JDtcclxuICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjdXN0b21Db21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIChjdXN0b21Db21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSxcclxuICAgICAgKTtcclxuICAgICAgY3VzdG9tQ29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBrZXl1cCQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcpLnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSgxNTApLFxyXG4gICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICk7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGRPbmUoa2V5dXAkLCAoKSA9PiB0aGlzLmRlc3Ryb3koKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19