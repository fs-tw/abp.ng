import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let LoadingComponent = class LoadingComponent {
    constructor() { }
    ngOnInit() { }
};
LoadingComponent = __decorate([
    Component({
        selector: 'abp-loading',
        template: `
    <div class="abp-loading">
      <i class="fa fa-spinner fa-pulse abp-spinner"></i>
    </div>
  `,
        encapsulation: ViewEncapsulation.None,
        styles: [`
      .abp-loading {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1040;
      }

      .abp-loading .abp-spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 14px;
        -moz-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
      }
    `]
    }),
    __metadata("design:paramtypes", [])
], LoadingComponent);
export { LoadingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFtQ3JFLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLGdCQUFlLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7Q0FDZCxDQUFBO0FBSlksZ0JBQWdCO0lBakM1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUU7Ozs7R0FJVDtRQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUVuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcUJDO0tBRUosQ0FBQzs7R0FDVyxnQkFBZ0IsQ0FJNUI7U0FKWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWxvYWRpbmcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYWJwLWxvYWRpbmdcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXB1bHNlIGFicC1zcGlubmVyXCI+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYWJwLWxvYWRpbmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTA0MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFicC1sb2FkaW5nIC5hYnAtc3Bpbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgfVxyXG4gICAgYCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19