import { Component, Injector } from '@angular/core';
// import { ImagePicker } from '@fs-tw/components/image-picker';
import { WidgetComponent } from '../widget.component';
import * as _ from 'lodash';
import { ExtensionsStore } from '../../../../providers/extensions.store';

@Component({
  templateUrl: './quill-editor.component.html',
})
export class WidgetQuillEditorComponent extends WidgetComponent {
  // editorImageInfo: ImagePicker.ImageFile[] = [];

  //get extraData() {
    //return this.extensionsStore.extraData;
  //}

  constructor(
    protected injector: Injector,
    private extensionsStore: ExtensionsStore
  ) {
    super(injector);
  }

  ngOnDestroy(): void {}
}
