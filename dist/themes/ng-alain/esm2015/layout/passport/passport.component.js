import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LayoutPassportComponent = class LayoutPassportComponent {
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
};
LayoutPassportComponent.type = "account" /* account */;
LayoutPassportComponent = __decorate([
    Component({
        selector: 'layout-passport',
        template: "<div class=\"container\">\r\n  <header-i18n showLangText=\"false\" class=\"langs\"></header-i18n>\r\n  <div class=\"wrap\">\r\n    <div class=\"top\">\r\n      <div class=\"head\">\r\n        <img class=\"logo\" src=\"./assets/logo-color.svg\" />\r\n        <span class=\"title\">ng-alain</span>\r\n      </div>\r\n      <div class=\"desc\">\u6B66\u6797\u4E2D\u6700\u6709\u5F71\u54CD\u529B\u7684\u300A\u8475\u82B1\u5B9D\u5178\u300B\uFF1B\u6B32\u7EC3\u795E\u529F\uFF0C\u6325\u5200\u81EA\u5BAB</div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <global-footer [links]=\"links\">\r\n      Copyright\r\n      <i nz-icon nzType=\"copyright\"></i> 2017 <a href=\"//github.com/cipchk\" target=\"_blank\">\u5361\u8272</a>\u51FA\u54C1\r\n    </global-footer>\r\n  </div>\r\n</div>\r\n<layout-theme-btn></layout-theme-btn>\r\n",
        styles: [":host ::ng-deep .container{background:#f0f2f5;display:flex;flex-direction:column;min-height:100%}:host ::ng-deep .langs{height:40px;line-height:44px;text-align:right;width:100%}:host ::ng-deep .langs .anticon{cursor:pointer;font-size:14px;margin-right:24px;margin-top:24px;vertical-align:top}:host ::ng-deep .wrap{flex:1;padding:32px 0}:host ::ng-deep .ant-form-item{display:flex;justify-content:space-between;margin-bottom:24px}@media (min-width:768px){:host ::ng-deep .container{background-image:url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);background-position:center 110px;background-repeat:no-repeat;background-size:100%}:host ::ng-deep .wrap{padding:32px 0 24px}}:host ::ng-deep .top{text-align:center}:host ::ng-deep .header{height:44px;line-height:44px}:host ::ng-deep .header a{text-decoration:none}:host ::ng-deep .logo{height:44px;margin-right:16px}:host ::ng-deep .title{color:rgba(0,0,0,.85);font-family:Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;font-size:33px;font-weight:600;position:relative;vertical-align:middle}:host ::ng-deep .desc{color:rgba(0,0,0,.45);font-size:14px;margin-bottom:40px;margin-top:12px}[data-theme=dark] :host ::ng-deep .container{background:#141414}[data-theme=dark] :host ::ng-deep .title{color:hsla(0,0%,100%,.85)}[data-theme=dark] :host ::ng-deep .desc{color:hsla(0,0%,100%,.45)}@media (min-width:768px){[data-theme=dark] :host ::ng-deep .container{background-image:none}}[data-theme=compact] :host ::ng-deep .ant-form-item{margin-bottom:16px}"]
    })
], LayoutPassportComponent);
export { LayoutPassportComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2xheW91dC9zcmMvcGFzc3BvcnQvcGFzc3BvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTFDLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBQXBDO1FBRUUsVUFBSyxHQUFHO1lBQ047Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLEVBQUU7YUFDVDtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxFQUFFO2FBQ1Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsRUFBRTthQUNUO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FBQSxDQUFBO0FBZlEsNEJBQUksMkJBQXVCO0FBRHZCLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLDIwQkFBd0M7O0tBRXpDLENBQUM7R0FDVyx1QkFBdUIsQ0FnQm5DO1NBaEJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBlTGF5b3V0VHlwZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xheW91dC1wYXNzcG9ydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Bhc3Nwb3J0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYXNzcG9ydC5jb21wb25lbnQubGVzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0UGFzc3BvcnRDb21wb25lbnQge1xyXG4gIHN0YXRpYyB0eXBlID0gZUxheW91dFR5cGUuYWNjb3VudDtcclxuICBsaW5rcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfluK7liqknLFxyXG4gICAgICBocmVmOiAnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn6ZqQ56eBJyxcclxuICAgICAgaHJlZjogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+adoeasvicsXHJcbiAgICAgIGhyZWY6ICcnLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcbiJdfQ==