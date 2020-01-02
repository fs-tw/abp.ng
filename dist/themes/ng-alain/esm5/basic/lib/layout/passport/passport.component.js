/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/passport/passport.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var LayoutPassportComponent = /** @class */ (function () {
    function LayoutPassportComponent() {
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
    LayoutPassportComponent.type = "account" /* account */;
    LayoutPassportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'layout-passport',
                    template: "<div class=\"container\">\r\n  <header-i18n showLangText=\"false\" class=\"langs\"></header-i18n>\r\n  \r\n  <div class=\"wrap\">\r\n    <div class=\"top\">\r\n      <div class=\"head\">\r\n        <img class=\"logo\" src=\"./assets/logo-color.svg\" />\r\n        <span class=\"title\">ng-alain</span>\r\n      </div>\r\n      <div class=\"desc\">\u6B66\u6797\u4E2D\u6700\u6709\u5F71\u54CD\u529B\u7684\u300A\u8475\u82B1\u5B9D\u5178\u300B\uFF1B\u6B32\u7EC3\u795E\u529F\uFF0C\u6325\u5200\u81EA\u5BAB</div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <global-footer [links]=\"links\">\r\n      Copyright\r\n      <i nz-icon nzType=\"copyright\"></i> 2017 <a href=\"//github.com/cipchk\" target=\"_blank\">\u5361\u8272</a>\u51FA\u54C1\r\n    </global-footer>\r\n  </div>\r\n\r\n\r\n</div>\r\n<abp-confirmation></abp-confirmation>\r\n<abp-toast></abp-toast>",
                    styles: [":host ::ng-deep .container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-height:100%;background:#f0f2f5}:host ::ng-deep .langs{width:100%;height:40px;line-height:44px;text-align:right}:host ::ng-deep .langs .anticon{margin-top:24px;margin-right:24px;font-size:14px;vertical-align:top;cursor:pointer}:host ::ng-deep .wrap{-webkit-box-flex:1;flex:1;padding:32px 0}:host ::ng-deep .ant-form-item{margin-bottom:24px}@media (min-width:768px){:host ::ng-deep .container{background-image:url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);background-repeat:no-repeat;background-position:center 110px;background-size:100%}:host ::ng-deep .wrap{padding:32px 0 24px}}:host ::ng-deep .top{text-align:center}:host ::ng-deep .header{height:44px;line-height:44px}:host ::ng-deep .header a{text-decoration:none}:host ::ng-deep .logo{height:44px;margin-right:16px}:host ::ng-deep .title{position:relative;color:rgba(0,0,0,.85);font-weight:600;font-size:33px;font-family:'Myriad Pro','Helvetica Neue',Arial,Helvetica,sans-serif;vertical-align:middle}:host ::ng-deep .desc{margin-top:12px;margin-bottom:40px;color:rgba(0,0,0,.45);font-size:14px}"]
                }] }
    ];
    return LayoutPassportComponent;
}());
export { LayoutPassportComponent };
if (false) {
    /** @type {?} */
    LayoutPassportComponent.type;
    /** @type {?} */
    LayoutPassportComponent.prototype.links;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25nLWFsYWluL2Jhc2ljLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9wYXNzcG9ydC9wYXNzcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDO0lBQUE7UUFPSSxVQUFLLEdBQUc7WUFDSjtnQkFDSSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsRUFBRTthQUNYO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLEVBQUU7YUFDWDtZQUNEO2dCQUNJLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxFQUFFO2FBQ1g7U0FDSixDQUFDO0lBQ04sQ0FBQztJQWZVLDRCQUFJLDJCQUF1Qjs7Z0JBTnJDLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixnM0JBQXdDOztpQkFFM0M7O0lBaUJELDhCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FoQlksdUJBQXVCOzs7SUFDaEMsNkJBQWtDOztJQUNsQyx3Q0FhRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBlTGF5b3V0VHlwZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGF5b3V0LXBhc3Nwb3J0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYXNzcG9ydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYXNzcG9ydC5jb21wb25lbnQubGVzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0UGFzc3BvcnRDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHR5cGUgPSBlTGF5b3V0VHlwZS5hY2NvdW50O1xyXG4gICAgbGlua3MgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+W4ruWKqScsXHJcbiAgICAgICAgICAgIGhyZWY6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+makOengScsXHJcbiAgICAgICAgICAgIGhyZWY6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+adoeasvicsXHJcbiAgICAgICAgICAgIGhyZWY6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG59XHJcbiJdfQ==