/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/personal-settings/personal-settings.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PersonalSettingsComponent as AbpPersonalSettingsComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
var PersonalSettingsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PersonalSettingsComponent, _super);
    function PersonalSettingsComponent(_fb, _store, _toasterService) {
        var _this = _super.call(this, _fb, _store, _toasterService) || this;
        _this._fb = _fb;
        _this._store = _store;
        _this._toasterService = _toasterService;
        return _this;
    }
    PersonalSettingsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-personal-settings-form',
                    template: "<form novalidate *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"userName\" id=\"username\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"name\" id=\"name\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"surname\" id=\"surname\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"email\" id=\"email-address\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"phoneNumber\" id=\"phone-number\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <button nz-button nzType=\"primary\">\r\n    {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n</form>\r\n\r\n\r\n",
                    styles: ["nz-form-item{margin-bottom:0}"]
                }] }
    ];
    /** @nocollapse */
    PersonalSettingsComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Store },
        { type: ToasterService }
    ]; };
    return PersonalSettingsComponent;
}(AbpPersonalSettingsComponent));
export { PersonalSettingsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wZXJzb25hbC1zZXR0aW5ncy9wZXJzb25hbC1zZXR0aW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLHlCQUF5QixJQUFJLDRCQUE0QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEM7SUFLK0MscURBQTRCO0lBRXZFLG1DQUFvQixHQUFnQixFQUFVLE1BQWEsRUFBVSxlQUErQjtRQUFwRyxZQUNJLGtCQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDLFNBQ3RDO1FBRm1CLFNBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVUscUJBQWUsR0FBZixlQUFlLENBQWdCOztJQUVwRyxDQUFDOztnQkFUSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0Msb3FEQUFpRDs7aUJBRXBEOzs7O2dCQU5RLFdBQVc7Z0JBQ1gsS0FBSztnQkFITCxjQUFjOztJQWV2QixnQ0FBQztDQUFBLEFBWEQsQ0FLK0MsNEJBQTRCLEdBTTFFO1NBTlkseUJBQXlCOzs7Ozs7SUFFdEIsd0NBQXdCOzs7OztJQUFFLDJDQUFxQjs7Ozs7SUFBRSxvREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzb25hbFNldHRpbmdzQ29tcG9uZW50IGFzIEFicFBlcnNvbmFsU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmctYWxhaW4tcGVyc29uYWwtc2V0dGluZ3MtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVyc29uYWxTZXR0aW5nc0NvbXBvbmVudCBleHRlbmRzIEFicFBlcnNvbmFsU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlLCBwcml2YXRlIF90b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihfZmIsIF9zdG9yZSwgX3RvYXN0ZXJTZXJ2aWNlKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19