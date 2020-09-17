import { NgModule } from '@angular/core';
import { SharedModule } from '@fs/ng-alain/shared';

import { ColorService } from './color.service';
import { StyleRoutingModule } from './style-routing.module';

import { ColorsComponent } from './colors/colors.component';
import { GridMasonryComponent } from './gridmasonry/gridmasonry.component';
import { TypographyComponent } from './typography/typography.component';

const COMPONENTS = [GridMasonryComponent, TypographyComponent, ColorsComponent];

const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, StyleRoutingModule],
  providers: [ColorService],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class StyleModule {}
