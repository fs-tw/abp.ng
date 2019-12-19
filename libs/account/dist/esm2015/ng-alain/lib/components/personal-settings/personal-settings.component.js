/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/personal-settings/personal-settings.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PersonalSettingsComponent as AbpPersonalSettingsComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
export class PersonalSettingsComponent extends AbpPersonalSettingsComponent {
    /**
     * @param {?} _fb
     * @param {?} _store
     * @param {?} _toasterService
     */
    constructor(_fb, _store, _toasterService) {
        super(_fb, _store, _toasterService);
        this._fb = _fb;
        this._store = _store;
        this._toasterService = _toasterService;
    }
}
PersonalSettingsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-alain-personal-settings-form',
                template: "<form novalidate *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"userName\" id=\"username\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"name\" id=\"name\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"surname\" id=\"surname\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"email\" id=\"email-address\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"phoneNumber\" id=\"phone-number\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <button nz-button nzType=\"primary\">\r\n    {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n</form>\r\n\r\n\r\n",
                styles: ["nz-form-item{margin-bottom:0}"]
            }] }
];
/** @nocollapse */
PersonalSettingsComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Store },
    { type: ToasterService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersonalSettingsComponent.prototype._fb;
    /**
     * @type {?}
     * @private
     */
    PersonalSettingsComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    PersonalSettingsComponent.prototype._toasterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wZXJzb25hbC1zZXR0aW5ncy9wZXJzb25hbC1zZXR0aW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUseUJBQXlCLElBQUksNEJBQTRCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU1wQyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsNEJBQTRCOzs7Ozs7SUFFdkUsWUFBb0IsR0FBZ0IsRUFBVSxNQUFhLEVBQVUsZUFBK0I7UUFDaEcsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFEcEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQU87UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFFcEcsQ0FBQzs7O1lBVEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLG9xREFBaUQ7O2FBRXBEOzs7O1lBTlEsV0FBVztZQUNYLEtBQUs7WUFITCxjQUFjOzs7Ozs7O0lBV1Asd0NBQXdCOzs7OztJQUFFLDJDQUFxQjs7Ozs7SUFBRSxvREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzb25hbFNldHRpbmdzQ29tcG9uZW50IGFzIEFicFBlcnNvbmFsU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmctYWxhaW4tcGVyc29uYWwtc2V0dGluZ3MtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVyc29uYWxTZXR0aW5nc0NvbXBvbmVudCBleHRlbmRzIEFicFBlcnNvbmFsU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlLCBwcml2YXRlIF90b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihfZmIsIF9zdG9yZSwgX3RvYXN0ZXJTZXJ2aWNlKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19