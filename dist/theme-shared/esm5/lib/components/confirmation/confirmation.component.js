/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ConfirmationService } from '../../services/confirmation.service';
var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(confirmationService) {
        this.confirmationService = confirmationService;
        this.confirm = "confirm" /* confirm */;
        this.reject = "reject" /* reject */;
        this.dismiss = "dismiss" /* dismiss */;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    ConfirmationComponent.prototype.close = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.confirmationService.clear(status);
    };
    ConfirmationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-confirmation',
                    // tslint:disable-next-line: component-max-inline-declarations
                    template: "\n    <p-toast\n      position=\"center\"\n      key=\"abpConfirmation\"\n      (onClose)=\"close(dismiss)\"\n      [modal]=\"true\"\n      [baseZIndex]=\"1000\"\n      styleClass=\"abp-confirm\"\n    >\n      <ng-template let-message pTemplate=\"message\">\n        <i class=\"fa fa-exclamation-circle abp-confirm-icon\"></i>\n        <div *ngIf=\"message.summary\" class=\"abp-confirm-summary\">\n          {{ message.summary | abpLocalization: message.titleLocalizationParams }}\n        </div>\n        <div class=\"abp-confirm-body\">\n          {{ message.detail | abpLocalization: message.messageLocalizationParams }}\n        </div>\n\n        <div class=\"abp-confirm-footer justify-content-center\">\n          <button\n            *ngIf=\"!message.hideCancelBtn\"\n            id=\"cancel\"\n            type=\"button\"\n            class=\"btn btn-sm btn-primary\"\n            (click)=\"close(reject)\"\n          >\n            {{ message.cancelText || message.cancelCopy || 'AbpIdentity::Cancel' | abpLocalization }}\n          </button>\n          <button\n            *ngIf=\"!message.hideYesBtn\"\n            id=\"confirm\"\n            type=\"button\"\n            class=\"btn btn-sm btn-primary\"\n            (click)=\"close(confirm)\"\n            autofocus\n          >\n            <span>{{ message.yesText || 'AbpIdentity::Yes' | abpLocalization }}</span>\n          </button>\n        </div>\n      </ng-template>\n    </p-toast>\n  "
                }] }
    ];
    /** @nocollapse */
    ConfirmationComponent.ctorParameters = function () { return [
        { type: ConfirmationService }
    ]; };
    return ConfirmationComponent;
}());
export { ConfirmationComponent };
if (false) {
    /** @type {?} */
    ConfirmationComponent.prototype.confirm;
    /** @type {?} */
    ConfirmationComponent.prototype.reject;
    /** @type {?} */
    ConfirmationComponent.prototype.dismiss;
    /**
     * @type {?}
     * @private
     */
    ConfirmationComponent.prototype.confirmationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHMUU7SUFtREUsK0JBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBSjVELFlBQU8sMkJBQTBCO1FBQ2pDLFdBQU0seUJBQXlCO1FBQy9CLFlBQU8sMkJBQTBCO0lBRThCLENBQUM7Ozs7O0lBRWhFLHFDQUFLOzs7O0lBQUwsVUFBTSxNQUFzQjtRQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O2dCQXZERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjs7b0JBRTVCLFFBQVEsRUFBRSxzN0NBeUNUO2lCQUNGOzs7O2dCQWhEUSxtQkFBbUI7O0lBMkQ1Qiw0QkFBQztDQUFBLEFBeERELElBd0RDO1NBVlkscUJBQXFCOzs7SUFDaEMsd0NBQWlDOztJQUNqQyx1Q0FBK0I7O0lBQy9CLHdDQUFpQzs7Ozs7SUFFckIsb0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9hc3Rlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1jb25maXJtYXRpb24nLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LW1heC1pbmxpbmUtZGVjbGFyYXRpb25zXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwLXRvYXN0XHJcbiAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcclxuICAgICAga2V5PVwiYWJwQ29uZmlybWF0aW9uXCJcclxuICAgICAgKG9uQ2xvc2UpPVwiY2xvc2UoZGlzbWlzcylcIlxyXG4gICAgICBbbW9kYWxdPVwidHJ1ZVwiXHJcbiAgICAgIFtiYXNlWkluZGV4XT1cIjEwMDBcIlxyXG4gICAgICBzdHlsZUNsYXNzPVwiYWJwLWNvbmZpcm1cIlxyXG4gICAgPlxyXG4gICAgICA8bmctdGVtcGxhdGUgbGV0LW1lc3NhZ2UgcFRlbXBsYXRlPVwibWVzc2FnZVwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlIGFicC1jb25maXJtLWljb25cIj48L2k+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm1lc3NhZ2Uuc3VtbWFyeVwiIGNsYXNzPVwiYWJwLWNvbmZpcm0tc3VtbWFyeVwiPlxyXG4gICAgICAgICAge3sgbWVzc2FnZS5zdW1tYXJ5IHwgYWJwTG9jYWxpemF0aW9uOiBtZXNzYWdlLnRpdGxlTG9jYWxpemF0aW9uUGFyYW1zIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFicC1jb25maXJtLWJvZHlcIj5cclxuICAgICAgICAgIHt7IG1lc3NhZ2UuZGV0YWlsIHwgYWJwTG9jYWxpemF0aW9uOiBtZXNzYWdlLm1lc3NhZ2VMb2NhbGl6YXRpb25QYXJhbXMgfX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFicC1jb25maXJtLWZvb3RlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICpuZ0lmPVwiIW1lc3NhZ2UuaGlkZUNhbmNlbEJ0blwiXHJcbiAgICAgICAgICAgIGlkPVwiY2FuY2VsXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJjbG9zZShyZWplY3QpXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3sgbWVzc2FnZS5jYW5jZWxUZXh0IHx8IG1lc3NhZ2UuY2FuY2VsQ29weSB8fCAnQWJwSWRlbnRpdHk6OkNhbmNlbCcgfCBhYnBMb2NhbGl6YXRpb24gfX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAqbmdJZj1cIiFtZXNzYWdlLmhpZGVZZXNCdG5cIlxyXG4gICAgICAgICAgICBpZD1cImNvbmZpcm1cIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKGNvbmZpcm0pXCJcclxuICAgICAgICAgICAgYXV0b2ZvY3VzXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7IG1lc3NhZ2UueWVzVGV4dCB8fCAnQWJwSWRlbnRpdHk6OlllcycgfCBhYnBMb2NhbGl6YXRpb24gfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvcC10b2FzdD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uQ29tcG9uZW50IHtcclxuICBjb25maXJtID0gVG9hc3Rlci5TdGF0dXMuY29uZmlybTtcclxuICByZWplY3QgPSBUb2FzdGVyLlN0YXR1cy5yZWplY3Q7XHJcbiAgZGlzbWlzcyA9IFRvYXN0ZXIuU3RhdHVzLmRpc21pc3M7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSkge31cclxuXHJcbiAgY2xvc2Uoc3RhdHVzOiBUb2FzdGVyLlN0YXR1cykge1xyXG4gICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmNsZWFyKHN0YXR1cyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==