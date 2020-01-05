import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { NgxsModule } from '@ngxs/store';

const COMPONENT = [
]

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    CoreModule,
    NgAlainBasicModule,
    //NgxsModule.forFeature([])
  ],
  exports: [...COMPONENT],
  providers: [
  ]
})
export class SharedModule { }
