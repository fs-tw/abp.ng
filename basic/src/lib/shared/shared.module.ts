import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainSharedModule } from '@fs/ng-alain/shared'
import { FsNgAlainTreeComponent } from './components/fs-ng-alain-tree/fs-ng-alain-tree.component'

const COMPONENT = [
    FsNgAlainTreeComponent
]

@NgModule({
    declarations: [...COMPONENT],
    imports: [CoreModule, NgAlainSharedModule],
    exports: [...COMPONENT, NgAlainSharedModule]
})
export class SharedModule { }
