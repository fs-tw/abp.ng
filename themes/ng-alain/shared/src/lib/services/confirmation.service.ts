import { Injectable } from '@angular/core';
import { AbstractToaster } from '../abstracts/toaster';
import { Confirmation } from '@abp/ng.theme.shared';
//import { MessageService } from 'primeng/components/common/messageservice';
import { fromEvent, Observable, Subject } from 'rxjs';
import { takeUntil, debounceTime, filter } from 'rxjs/operators';
import { Toaster } from '@abp/ng.theme.shared';
import { NzModalService } from 'ng-zorro-antd';
import { LocalizationPipe } from '@abp/ng.core';

@Injectable({ providedIn: 'root' })
export class ConfirmationService extends AbstractToaster<Confirmation.Options> {
    key = 'ngAlainConfirmation';

    sticky = true;

    destroy$ = new Subject();

    constructor(
        private _modalService: NzModalService,
        private _localizationPipe: LocalizationPipe
    ) {
        super(_modalService, _localizationPipe);
    }

    show(
        message: string,
        title: string,
        severity: Toaster.Severity,
        options?: Confirmation.Options
    ): Observable<Toaster.Status> {
        this.listenToEscape();

        return super.show(message, title, severity, options);
    }

    clear(status?: Toaster.Status) {
        super.clear(status);

        this.destroy$.next();
    }

    listenToEscape() {
        fromEvent(document, 'keyup')
            .pipe(
                takeUntil(this.destroy$),
                debounceTime(150),
                filter((key: KeyboardEvent) => key && key.code === 'Escape')
            )
            .subscribe(_ => {
                this.clear();
            });
    }
}
