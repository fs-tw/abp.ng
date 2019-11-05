import { Injectable } from '@angular/core';
import { AbstractToaster } from '../abstracts/toaster';
import { Message } from 'primeng/components/common/message';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { LocalizationPipe } from '@abp/ng.core';

@Injectable({ providedIn: 'root' })
export class ToasterService extends AbstractToaster {
    constructor(
        private _modalService: NzModalService,
        private _notificationService: NzNotificationService,
        private _localizationPipe: LocalizationPipe
    ) {
        super(_modalService, _notificationService, _localizationPipe);
    }
    addAll(messages: Message[]): void {
    }
}
