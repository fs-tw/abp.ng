import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';

@NgModule({
  declarations: [],
    imports: [
        CoreModule,
        //ThemeSharedModule,
        //ThemeBasicModule,
        //AlainSharedModule,
        NgAlainBasicModule,
        NgbDropdownModule

    ],
    exports: [
        CoreModule,
        //ThemeSharedModule,
        //ThemeBasicModule,
        //AlainSharedModule,
        NgAlainBasicModule,
        NgbDropdownModule

    ],
  providers: [],
})
export class SharedModule {}
