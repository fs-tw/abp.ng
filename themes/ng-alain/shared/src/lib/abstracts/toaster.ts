import { MessageService } from 'primeng/components/common/messageservice';
import { Observable, Subject } from 'rxjs';
import { Toaster } from '@abp/ng.theme.shared';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { LocalizationPipe } from '@abp/ng.core';

export abstract class AbstractToaster<T = Toaster.Options> {
    status$: Subject<Toaster.Status>;

    key = 'ngAlainToast';

    sticky = false;


    constructor(
        protected modalService: NzModalService,
        protected notificationService: NzNotificationService,
        private localizationPipe: LocalizationPipe
    ) { }

    info(message: string, title: string, options?: T): Observable<Toaster.Status> {
        return this.show(message, title, 'info', options);
    }

    success(message: string, title: string, options?: T): Observable<Toaster.Status> {
        return this.show(message, title, 'success', options);
    }

    warn(message: string, title: string, options?: T): Observable<Toaster.Status> {
        return this.show(message, title, 'warn', options);
    }

    error(message: string, title: string, options?: T): Observable<Toaster.Status> {
        return this.show(message, title, 'error', options);
    }

    protected show(message: string, title: string, severity: Toaster.Severity, options?: T): Observable<Toaster.Status> {
        this.modalService.closeAll();
        let nzTitle = this.localizationPipe.transform(title, (<any>options).titleLocalizationParams);
        let nzContent = this.localizationPipe.transform(message, (<any>options).messageLocalizationParams);
        let nzOkText = this.localizationPipe.transform('AbpIdentity::Yes');
        let nzCancelText = this.localizationPipe.transform('AbpIdentity::Cancel');
        let nzOnOk = () => {
            this.clear(Toaster.Status.confirm);
        }
        let nzOnCancel = () => {
            this.clear(Toaster.Status.reject);
        }

        switch (severity) {
            case "success":
                this.modalService.success({
                    nzTitle: nzTitle,
                    nzContent: nzContent,
                    nzOkText: nzOkText,
                    nzOnOk: nzOnOk
                });
                break;
            case "info":
                this.modalService.info({
                    nzTitle: nzTitle,
                    nzContent: nzContent,
                    nzOkText: nzOkText,
                    nzOnOk: nzOnOk
                });
                break;
            case "warn":
                this.modalService.confirm({
                    nzTitle: nzTitle,
                    nzContent: nzContent,
                    nzOkText: nzOkText,
                    nzCancelText: nzCancelText,
                    nzOnOk: nzOnOk,
                    nzOnCancel: nzOnCancel
                });
                break;
            case "error":
                this.modalService.error({
                    nzTitle: nzTitle,
                    nzContent: nzContent,
                    nzOkText: nzOkText,
                    nzOnOk: nzOnOk
                });
                break;

            default:

        }

        this.status$ = new Subject<Toaster.Status>();
        return this.status$;
    }

    clear(status?: Toaster.Status) {
        this.modalService.closeAll();
        this.status$.next(status || Toaster.Status.dismiss);
        this.status$.complete();
    }
}
