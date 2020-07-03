import { __decorate, __metadata } from "tslib";
import { takeUntilDestroy } from '@abp/ng.core';
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import snq from 'snq';
let HttpErrorWrapperComponent = class HttpErrorWrapperComponent {
    constructor() {
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
        fromEvent(document, 'keyup')
            .pipe(takeUntilDestroy(this), debounceTime(150), filter((key) => key && key.key === 'Escape'))
            .subscribe(() => {
            this.destroy();
        });
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
        styles: [".error{height:100vh;position:fixed;top:0;width:100vw;z-index:999999}.centered{left:50%;position:fixed;top:50%;transform:translate(-50%,-50%)}"]
    })
], HttpErrorWrapperComponent);
export { HttpErrorWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2NvbXBvbmVudHMvaHR0cC1lcnJvci13cmFwcGVyL2h0dHAtZXJyb3Itd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBVSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4RCxPQUFPLEVBR0wsU0FBUyxFQUVULFVBQVUsRUFNVixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQU90QixJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUF0QztRQU9FLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxVQUFLLEdBQTZCLE9BQU8sQ0FBQztRQUUxQyxZQUFPLEdBQTZCLDhCQUE4QixDQUFDO1FBRW5FLG9CQUFlLEdBQWMsSUFBSSxDQUFDO1FBSWxDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBSXRCLGVBQVUsR0FBRyxJQUFJLENBQUM7SUE4Q3BCLENBQUM7SUF6Q0MsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWU7WUFDbEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDdEYsTUFBTSxDQUFDO0lBQ1gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSztpQkFDbEMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QixrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEQsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FDeEMsa0JBQWtCLENBQUMsUUFBaUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQ25FLENBQUM7WUFDRixrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0RDtRQUVELFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ3pCLElBQUksQ0FDSCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFDdEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixNQUFNLENBQUMsQ0FBQyxHQUFrQixFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FDNUQ7YUFDQSxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVcsS0FBSSxDQUFDO0lBRWhCLE9BQU87UUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztDQUNGLENBQUE7QUEzQ0M7SUFEQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOzhCQUM1QixVQUFVOytEQUFpQjtBQXhCOUIseUJBQXlCO0lBTHJDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsZ25DQUFrRDs7S0FFbkQsQ0FBQztHQUNXLHlCQUF5QixDQW1FckM7U0FuRVkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnLCB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5qZWN0b3IsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBUeXBlLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1odHRwLWVycm9yLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9odHRwLWVycm9yLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydodHRwLWVycm9yLXdyYXBwZXIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgYXBwUmVmOiBBcHBsaWNhdGlvblJlZjtcclxuXHJcbiAgY2ZSZXM6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcclxuXHJcbiAgaW5qZWN0b3I6IEluamVjdG9yO1xyXG5cclxuICBzdGF0dXMgPSAwO1xyXG5cclxuICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtID0gJ09vcHMhJztcclxuXHJcbiAgZGV0YWlsczogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtID0gJ1NvcnJ5LCBhbiBlcnJvciBoYXMgb2NjdXJlZC4nO1xyXG5cclxuICBjdXN0b21Db21wb25lbnQ6IFR5cGU8YW55PiA9IG51bGw7XHJcblxyXG4gIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+O1xyXG5cclxuICBoaWRlQ2xvc2VJY29uID0gZmFsc2U7XHJcblxyXG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBpc0hvbWVTaG93ID0gdHJ1ZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgY29udGFpbmVyUmVmOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgZ2V0IHN0YXR1c1RleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyA/IGBbJHt0aGlzLnN0YXR1c31dYCA6ICcnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9XHJcbiAgICAgIHNucSgoKSA9PiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJykpIHx8XHJcbiAgICAgICcjZmZmJztcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xyXG4gICAgICBjb25zdCBjdXN0b21Db21wb25lbnRSZWYgPSB0aGlzLmNmUmVzXHJcbiAgICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY3VzdG9tQ29tcG9uZW50KVxyXG4gICAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICAgIGN1c3RvbUNvbXBvbmVudFJlZi5pbnN0YW5jZS5lcnJvclN0YXR1cyA9IHRoaXMuc3RhdHVzO1xyXG4gICAgICBjdXN0b21Db21wb25lbnRSZWYuaW5zdGFuY2UuZGVzdHJveSQgPSB0aGlzLmRlc3Ryb3kkO1xyXG4gICAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGN1c3RvbUNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgKGN1c3RvbUNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdLFxyXG4gICAgICApO1xyXG4gICAgICBjdXN0b21Db21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZyb21FdmVudChkb2N1bWVudCwgJ2tleXVwJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveSh0aGlzKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTUwKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19