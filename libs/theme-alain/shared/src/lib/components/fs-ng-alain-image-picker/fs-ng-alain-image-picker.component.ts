import { Component, Input, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';

import { NzUploadFile } from 'ng-zorro-antd/upload';

import { ToasterService } from '@abp/ng.theme.shared';
import { ConfigStateService,EnvironmentService } from '@abp/ng.core';

export class ImageFile {
  fileName: string;
  fileUrl: string;

  constructor(fileName: string = '', fileUrl: string = '') {
    this.fileName = fileName;
    this.fileUrl = fileUrl;
  }
}

class ViewImage {
  image: ImageFile;
  isVisabled: boolean;

  constructor() {
    this.image = new ImageFile();
    this.isVisabled = false;
  }
}

@Component({
  selector: 'fs-ng-alain-image-picker',
  templateUrl: './fs-ng-alain-image-picker.component.html',
  styleUrls: ['./fs-ng-alain-image-picker.component.css']
})
export class FsNgAlainImagePickerComponent implements OnInit {

  /** 縮圖寬度，單位 px，最小 104px */
  @Input() imageWidth: string = '104px';

  /** 縮圖高度，單位 px ，最小 104px */
  @Input() imageHeight: string = '104px';

  /** 上傳最大數量 */
  @Input() maxImageCount: number = null;

  /** 顯示圖片 Template ，縮圖比例功能會失效 */
  @Input() imageTemplate: TemplateRef<any>;

  /** 上傳圖片 Template */
  @Input() uploadTemplate: TemplateRef<any>;

  /** 是否排列在同一行，同一行時行寬同 imageWidth */
  @Input() inLine: boolean = true;

  /** 上傳按鈕顯示於前面 */
  @Input() showFrontButton: boolean = true;

  /** 上傳按鈕顯示於後面 */
  @Input() showBackendButton: boolean = false;

  /** 原已上傳圖片 */
  @Input() existFiles: ImageFile[] = [];

  /** 原已上傳圖片被刪除的檔名 */
  private deleteFiles: string[] = [];

  /** 本次上傳所顯示圖片 */
  showFiles: ImageFile[] = [];

  /** 本次上傳圖片 */
  private uploadFiles: NzUploadFile[] = [];

  /** 顯示預覽圖 modal */
  viewImage: ViewImage = new ViewImage();

  get canUpload(): boolean {
    let imageNumber = this.existFiles.length + this.uploadFiles.length;
    return this.maxImageCount == null || imageNumber < this.maxImageCount;
  }

  constructor(
    private toasterService: ToasterService,
    private environmentService:EnvironmentService,
    private configStateService: ConfigStateService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.existFiles = this.existFiles
      .filter(x => x.fileUrl)
      .map(x => new ImageFile(x.fileName, this.getHttpUrl(x.fileUrl)));

    this.uploadFiles = [];
    this.showFiles = [];
  }

  clear() {
    
    this.existFiles = [];
    this.deleteFiles = [];
    this.uploadFiles = [];
    this.showFiles = [];
  }

  

  private getHttpUrl(url: string): string {
    let result = url;
    if (url.includes("http") || url == "assets/img/info.png") return result;

    return this.environmentService.getApiUrl() + url;
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    let isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      this.toasterService.error("圖片格式須為 jpg 或 png");
      return false;
    }

    let fileName = file.name;

    let hasExistImage = this.existFiles.findIndex(x => x.fileName == fileName) > -1;
    let hasShowImage = this.showFiles.findIndex(x => x.fileName == fileName) > -1;
    if (hasExistImage || hasShowImage) return false;


    let imgFile: any = file;
    this.getBase64(imgFile, (img) => {
      if (!this.canUpload) {
        this.toasterService.error("圖片數已達上限");
        return;
      }

      this.uploadFiles.push(imgFile);
      this.showFiles.push(new ImageFile(fileName, img));
    });

    return false;
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  deleteFile(fileName: string) {
    let inExistImage = this.existFiles.findIndex(x => x.fileName == fileName) > -1;
    let inShowImage = this.showFiles.findIndex(x => x.fileName == fileName) > -1;

    // 現有圖片刪除
    if (inExistImage) {
      this.existFiles = this.existFiles.filter(x => x.fileName != fileName);
      this.deleteFiles.push(fileName);
      return;
    }

    // 上傳圖片刪除
    if (inShowImage) {
      this.showFiles = this.showFiles.filter(x => x.fileName != fileName);
      this.uploadFiles = this.uploadFiles.filter(x => x.name != fileName);
    }

  }

  controllModal(state: boolean, image: ImageFile = new ImageFile()) {
    this.viewImage.image = image;
    this.viewImage.isVisabled = state;
  }

  getDeleteFileNames(): string[] {
    return this.deleteFiles;
  }

  getUploadFiles(): File[] {
    let result: any[] = this.uploadFiles.map(x => x);
    return result;
  }

  getImageFiles(): ImageFile[] {
    let files = this.existFiles.filter(x => !this.deleteFiles.includes(x.fileName));

    return files.concat(this.showFiles);
  }

}
