import { AccountModule } from '@fs/account';
import { ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { Options } from '@abp/ng.account';
import * as i0 from "@angular/core";
import * as i1 from "./components/auth-wrapper/auth-wrapper.component";
import * as i2 from "./components/tenant-box/tenant-box.component";
import * as i3 from "./components/login/login.component";
import * as i4 from "./components/register/register.component";
import * as i5 from "./components/manage-profile/manage-profile.component";
import * as i6 from "./components/personal-settings/personal-settings.component";
import * as i7 from "./components/change-password/change-password.component";
import * as i8 from "@abp/ng.core";
import * as i9 from "@fs/ng-alain/basic";
import * as i10 from "@fs/account/wrap";
export declare function accountOptionsFactory(options: Options): {
    redirectUrl: string;
};
export declare class AccountNgAlainModule {
    static forChild(options: any): ModuleWithProviders<AccountNgAlainModule>;
    static forLazy(options: Options): NgModuleFactory<AccountModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<AccountNgAlainModule, [typeof i1.AuthWrapperComponent, typeof i2.TenantBoxComponent, typeof i3.UserLoginComponent, typeof i4.UserRegisterComponent, typeof i5.ManageProfileComponent, typeof i6.PersonalSettingsComponent, typeof i7.ChangePasswordComponent], [typeof i8.CoreModule, typeof i9.NgAlainBasicModule, typeof i10.AccountWrapModule], never>;
    static ɵinj: i0.ɵɵInjectorDef<AccountNgAlainModule>;
}
