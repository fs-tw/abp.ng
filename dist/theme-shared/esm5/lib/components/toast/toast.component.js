/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
    }
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-toast',
                    // tslint:disable-next-line: component-max-inline-declarations
                    template: "\n    <p-toast position=\"bottom-right\" key=\"abpToast\" styleClass=\"abp-toast\" [baseZIndex]=\"1000\">\n      <ng-template let-message pTemplate=\"message\">\n        <span\n          class=\"ui-toast-icon pi\"\n          [ngClass]=\"{\n            'pi-info-circle': message.severity === 'info',\n            'pi-exclamation-triangle': message.severity === 'warn',\n            'pi-times': message.severity === 'error',\n            'pi-check': message.severity === 'success'\n          }\"\n        ></span>\n        <div class=\"ui-toast-message-text-content\">\n          <div class=\"ui-toast-summary\">{{ message.summary | abpLocalization: message.titleLocalizationParams }}</div>\n          <div class=\"ui-toast-detail\">{{ message.detail | abpLocalization: message.messageLocalizationParams }}</div>\n        </div>\n      </ng-template>\n    </p-toast>\n  "
                }] }
    ];
    return ToastComponent;
}());
export { ToastComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFBQTtJQXVCNkIsQ0FBQzs7Z0JBdkI3QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7O29CQUVyQixRQUFRLEVBQUUsczJCQWtCVDtpQkFDRjs7SUFDNEIscUJBQUM7Q0FBQSxBQXZCOUIsSUF1QjhCO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXRvYXN0JyxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1tYXgtaW5saW5lLWRlY2xhcmF0aW9uc1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cC10b2FzdCBwb3NpdGlvbj1cImJvdHRvbS1yaWdodFwiIGtleT1cImFicFRvYXN0XCIgc3R5bGVDbGFzcz1cImFicC10b2FzdFwiIFtiYXNlWkluZGV4XT1cIjEwMDBcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIGxldC1tZXNzYWdlIHBUZW1wbGF0ZT1cIm1lc3NhZ2VcIj5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgY2xhc3M9XCJ1aS10b2FzdC1pY29uIHBpXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgJ3BpLWluZm8tY2lyY2xlJzogbWVzc2FnZS5zZXZlcml0eSA9PT0gJ2luZm8nLFxyXG4gICAgICAgICAgICAncGktZXhjbGFtYXRpb24tdHJpYW5nbGUnOiBtZXNzYWdlLnNldmVyaXR5ID09PSAnd2FybicsXHJcbiAgICAgICAgICAgICdwaS10aW1lcyc6IG1lc3NhZ2Uuc2V2ZXJpdHkgPT09ICdlcnJvcicsXHJcbiAgICAgICAgICAgICdwaS1jaGVjayc6IG1lc3NhZ2Uuc2V2ZXJpdHkgPT09ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgfVwiXHJcbiAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktdG9hc3QtbWVzc2FnZS10ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS10b2FzdC1zdW1tYXJ5XCI+e3sgbWVzc2FnZS5zdW1tYXJ5IHwgYWJwTG9jYWxpemF0aW9uOiBtZXNzYWdlLnRpdGxlTG9jYWxpemF0aW9uUGFyYW1zIH19PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktdG9hc3QtZGV0YWlsXCI+e3sgbWVzc2FnZS5kZXRhaWwgfCBhYnBMb2NhbGl6YXRpb246IG1lc3NhZ2UubWVzc2FnZUxvY2FsaXphdGlvblBhcmFtcyB9fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9wLXRvYXN0PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCB7fVxyXG4iXX0=