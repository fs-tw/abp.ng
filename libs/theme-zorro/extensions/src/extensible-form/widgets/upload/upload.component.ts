import { Component, Injector, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import * as _ from 'lodash';
import { WidgetComponent } from '../widget.component';

@Component({
  templateUrl: './upload.component.html',
  styles: [
    `
      :host ::ng-deep .upload-list-inline .ant-upload-list-item {
        float: left;
        width: 180px;
        margin-right: 7px;
      }
    `
  ]
})
export class UploadComponent extends WidgetComponent {

  fileList: NzUploadFile[] = [];

  constructor(injector:Injector) {
    super(injector);
   }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = _.unionBy([file, ...this.fileList], 'name');;
    return false;
  }
}
