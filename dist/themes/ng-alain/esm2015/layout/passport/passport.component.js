import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../default/header/components/i18n.component";
import * as i2 from "@angular/router";
import * as i3 from "@delon/abc/global-footer";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "../default/theme-btn/theme-btn.component";
export class LayoutPassportComponent {
    constructor() {
        this.links = [
            {
                title: '帮助',
                href: '',
            },
            {
                title: '隐私',
                href: '',
            },
            {
                title: '条款',
                href: '',
            },
        ];
    }
}
LayoutPassportComponent.type = "account" /* account */;
LayoutPassportComponent.ɵfac = function LayoutPassportComponent_Factory(t) { return new (t || LayoutPassportComponent)(); };
LayoutPassportComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutPassportComponent, selectors: [["layout-passport"]], decls: 19, vars: 1, consts: [[1, "container"], ["showLangText", "false", 1, "langs"], [1, "wrap"], [1, "top"], [1, "head"], ["src", "./assets/logo-color.svg", 1, "logo"], [1, "title"], [1, "desc"], [3, "links"], ["nz-icon", "", "nzType", "copyright"], ["href", "//github.com/cipchk", "target", "_blank"]], template: function LayoutPassportComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "header-i18n", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelement(5, "img", 5);
        i0.ɵɵelementStart(6, "span", 6);
        i0.ɵɵtext(7, "ng-alain");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 7);
        i0.ɵɵtext(9, "\u6B66\u6797\u4E2D\u6700\u6709\u5F71\u54CD\u529B\u7684\u300A\u8475\u82B1\u5B9D\u5178\u300B\uFF1B\u6B32\u7EC3\u795E\u529F\uFF0C\u6325\u5200\u81EA\u5BAB");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "router-outlet");
        i0.ɵɵelementStart(11, "global-footer", 8);
        i0.ɵɵtext(12, " Copyright ");
        i0.ɵɵelement(13, "i", 9);
        i0.ɵɵtext(14, " 2017 ");
        i0.ɵɵelementStart(15, "a", 10);
        i0.ɵɵtext(16, "\u5361\u8272");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(17, "\u51FA\u54C1 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "layout-theme-btn");
    } if (rf & 2) {
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("links", ctx.links);
    } }, directives: [i1.HeaderI18nComponent, i2.RouterOutlet, i3.GlobalFooterComponent, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i6.LayoutThemeBtnComponent], styles: ["[_nghost-%COMP%]     .container{background:#f0f2f5;display:flex;flex-direction:column;min-height:100%}[_nghost-%COMP%]     .langs{height:40px;line-height:44px;text-align:right;width:100%}[_nghost-%COMP%]     .langs .anticon{cursor:pointer;font-size:14px;margin-right:24px;margin-top:24px;vertical-align:top}[_nghost-%COMP%]     .wrap{flex:1;padding:32px 0}[_nghost-%COMP%]     .ant-form-item{display:flex;justify-content:space-between;margin-bottom:24px}@media (min-width:768px){[_nghost-%COMP%]     .container{background-image:url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);background-position:center 110px;background-repeat:no-repeat;background-size:100%}[_nghost-%COMP%]     .wrap{padding:32px 0 24px}}[_nghost-%COMP%]     .top{text-align:center}[_nghost-%COMP%]     .header{height:44px;line-height:44px}[_nghost-%COMP%]     .header a{text-decoration:none}[_nghost-%COMP%]     .logo{height:44px;margin-right:16px}[_nghost-%COMP%]     .title{color:rgba(0,0,0,.85);font-family:Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;font-size:33px;font-weight:600;position:relative;vertical-align:middle}[_nghost-%COMP%]     .desc{color:rgba(0,0,0,.45);font-size:14px;margin-bottom:40px;margin-top:12px}[data-theme=dark]   [_nghost-%COMP%]     .container{background:#141414}[data-theme=dark]   [_nghost-%COMP%]     .title{color:hsla(0,0%,100%,.85)}[data-theme=dark]   [_nghost-%COMP%]     .desc{color:hsla(0,0%,100%,.45)}@media (min-width:768px){[data-theme=dark]   [_nghost-%COMP%]     .container{background-image:none}}[data-theme=compact]   [_nghost-%COMP%]     .ant-form-item{margin-bottom:16px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayoutPassportComponent, [{
        type: Component,
        args: [{
                selector: 'layout-passport',
                templateUrl: './passport.component.html',
                styleUrls: ['./passport.component.less'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2xheW91dC9zcmMvcGFzc3BvcnQvcGFzc3BvcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2xheW91dC9zcmMvcGFzc3BvcnQvcGFzc3BvcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFRMUMsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU9FLFVBQUssR0FBRztZQUNOO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxFQUFFO2FBQ1Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsRUFBRTthQUNUO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLEVBQUU7YUFDVDtTQUNGLENBQUM7S0FDSDs7QUFmUSw0QkFBSSwyQkFBdUI7OEZBRHZCLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDUnBDLDhCQUNFO1FBQUEsaUNBQThEO1FBQzlELDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSw4QkFDRTtRQUFBLHlCQUNBO1FBQUEsK0JBQW9CO1FBQUEsd0JBQVE7UUFBQSxpQkFBTztRQUNyQyxpQkFBTTtRQUNOLDhCQUFrQjtRQUFBLHNLQUF5QjtRQUFBLGlCQUFNO1FBQ25ELGlCQUFNO1FBQ04saUNBQStCO1FBQy9CLHlDQUNFO1FBQUEsNEJBQ0E7UUFBQSx3QkFBa0M7UUFBQyx1QkFBSztRQUFBLDhCQUE4QztRQUFBLDZCQUFFO1FBQUEsaUJBQUk7UUFBQSw4QkFDOUY7UUFBQSxpQkFBZ0I7UUFDbEIsaUJBQU07UUFDUixpQkFBTTtRQUNOLG9DQUFxQzs7UUFObEIsZ0JBQWU7UUFBZixpQ0FBZTs7a0RESHJCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZUxheW91dFR5cGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsYXlvdXQtcGFzc3BvcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXNzcG9ydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFzc3BvcnQuY29tcG9uZW50Lmxlc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dFBhc3Nwb3J0Q29tcG9uZW50IHtcclxuICBzdGF0aWMgdHlwZSA9IGVMYXlvdXRUeXBlLmFjY291bnQ7XHJcbiAgbGlua3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn5biu5YqpJyxcclxuICAgICAgaHJlZjogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+makOengScsXHJcbiAgICAgIGhyZWY6ICcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfmnaHmrL4nLFxyXG4gICAgICBocmVmOiAnJyxcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgPGhlYWRlci1pMThuIHNob3dMYW5nVGV4dD1cImZhbHNlXCIgY2xhc3M9XCJsYW5nc1wiPjwvaGVhZGVyLWkxOG4+XHJcbiAgPGRpdiBjbGFzcz1cIndyYXBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b3BcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRcIj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwibG9nb1wiIHNyYz1cIi4vYXNzZXRzL2xvZ28tY29sb3Iuc3ZnXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+bmctYWxhaW48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiPuatpuael+S4reacgOacieW9seWTjeWKm+eahOOAiuiRteiKseWuneWFuOOAi++8m+assue7g+elnuWKn++8jOaMpeWIgOiHquWuqzwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8Z2xvYmFsLWZvb3RlciBbbGlua3NdPVwibGlua3NcIj5cclxuICAgICAgQ29weXJpZ2h0XHJcbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY29weXJpZ2h0XCI+PC9pPiAyMDE3IDxhIGhyZWY9XCIvL2dpdGh1Yi5jb20vY2lwY2hrXCIgdGFyZ2V0PVwiX2JsYW5rXCI+5Y2h6ImyPC9hPuWHuuWTgVxyXG4gICAgPC9nbG9iYWwtZm9vdGVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGxheW91dC10aGVtZS1idG4+PC9sYXlvdXQtdGhlbWUtYnRuPlxyXG4iXX0=