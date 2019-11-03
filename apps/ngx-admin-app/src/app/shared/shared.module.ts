import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { TableModule } from 'primeng/table';
import { ThemeModule } from '@fs/ngx-admin';
import { NbAuthModule } from '@nebular/auth';
import { NbMenuModule } from '@nebular/theme';

import { NgxAdminBasicModule} from '@fs/ngx-admin/basic'

@NgModule({
    declarations: [
    ],
    imports: [
        //abp
        CoreModule,
        ThemeSharedModule,
        ThemeBasicModule,
        TableModule,
        NgbDropdownModule,
        //ngx-admin
        NgxAdminBasicModule,
        ThemeModule
        

    ],
    exports: [
        //abp
        CoreModule,
        ThemeSharedModule,
        ThemeBasicModule,
        TableModule,
        NgbDropdownModule,
        //ngx-admin
        NgxAdminBasicModule,
        ThemeModule
        

    ],
    providers: [],
})
export class SharedModule { }
