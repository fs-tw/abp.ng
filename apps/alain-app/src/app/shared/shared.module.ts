import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { TableModule } from 'primeng/table';
import { AlainSharedModule } from '@fs/alain/shared';
import { AlainBasicModule } from '@fs/alain/basic';

@NgModule({
  declarations: [],
    imports: [
        CoreModule,
        ThemeSharedModule,
        ThemeBasicModule,
        AlainSharedModule,
        AlainBasicModule,
        TableModule,
        NgbDropdownModule

    ],
    exports: [
        CoreModule,
        ThemeSharedModule,
        ThemeBasicModule,
        AlainSharedModule,
        AlainBasicModule,
        TableModule,
        NgbDropdownModule

    ],
  providers: [],
})
export class SharedModule {}
