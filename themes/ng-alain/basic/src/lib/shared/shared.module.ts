import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainSharedModule } from '@fs/ng-alain/shared'
import { FsNgAlainTreeComponent } from './components/fs-ng-alain-tree/fs-ng-alain-tree.component'
import { PageBarComponent } from './components/page-bar/page-bar.component';

const COMPONENT = [
    FsNgAlainTreeComponent,
    PageBarComponent
]
const ENTRY_COMPONENT=[
    PageBarComponent
]

@NgModule({
    declarations: [...COMPONENT],
    entryComponents: [...ENTRY_COMPONENT],
    imports: [CoreModule, NgAlainSharedModule],
    exports: [...COMPONENT,ENTRY_COMPONENT, NgAlainSharedModule]
})
export class SharedModule { }
