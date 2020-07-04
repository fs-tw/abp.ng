import { __decorate, __metadata } from "tslib";
import { ListService, LocalizationService } from '@abp/ng.core';
import { ChangeDetectorRef, Directive, Input, } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Subscription } from 'rxjs';
let NgxDatatableListDirective = class NgxDatatableListDirective {
    constructor(table, cdRef, localizationService) {
        this.table = table;
        this.cdRef = cdRef;
        this.localizationService = localizationService;
        this.subscription = new Subscription();
        this.setInitialValues();
    }
    setInitialValues() {
        this.table.externalPaging = true;
        this.table.externalSorting = true;
        this.table.messages = {
            emptyMessage: this.localizationService.localizeSync('AbpUi', 'NoDataAvailableInDatatable', 'No data available'),
            totalMessage: this.localizationService.localizeSync('AbpUi', 'Total', 'total'),
            selectedMessage: this.localizationService.localizeSync('AbpUi', 'Selected', 'selected'),
        };
    }
    subscribeToPage() {
        const sub = this.table.page.subscribe(({ offset }) => {
            this.list.page = offset;
            this.table.offset = offset;
        });
        this.subscription.add(sub);
    }
    subscribeToSort() {
        const sub = this.table.sort.subscribe(({ sorts: [{ prop, dir }] }) => {
            if (prop === this.list.sortKey && this.list.sortOrder === 'desc') {
                this.list.sortKey = '';
                this.list.sortOrder = '';
                this.table.sorts = [];
                this.cdRef.detectChanges();
            }
            else {
                this.list.sortKey = prop;
                this.list.sortOrder = dir;
            }
        });
        this.subscription.add(sub);
    }
    subscribeToIsLoading() {
        const sub = this.list.isLoading$.subscribe(loading => {
            this.table.loadingIndicator = loading;
            this.cdRef.detectChanges();
        });
        this.subscription.add(sub);
    }
    ngOnChanges({ list }) {
        if (!list.firstChange)
            return;
        const { maxResultCount, page } = list.currentValue;
        this.table.limit = maxResultCount;
        this.table.offset = page;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        this.subscribeToPage();
        this.subscribeToSort();
        this.subscribeToIsLoading();
    }
};
__decorate([
    Input(),
    __metadata("design:type", ListService)
], NgxDatatableListDirective.prototype, "list", void 0);
NgxDatatableListDirective = __decorate([
    Directive({
        // tslint:disable-next-line
        selector: 'ngx-datatable[list]',
        exportAs: 'ngxDatatableList',
    }),
    __metadata("design:paramtypes", [DatatableComponent,
        ChangeDetectorRef,
        LocalizationService])
], NgxDatatableListDirective);
export { NgxDatatableListDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1saXN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2RpcmVjdGl2ZXMvbmd4LWRhdGF0YWJsZS1saXN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEdBS04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU9wQyxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUtwQyxZQUNVLEtBQXlCLEVBQ3pCLEtBQXdCLEVBQ3hCLG1CQUF3QztRQUZ4QyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBUDFDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVN4QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUc7WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQ2pELE9BQU8sRUFDUCw0QkFBNEIsRUFDNUIsbUJBQW1CLENBQ3BCO1lBQ0QsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUIs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RSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFLGtCQUFrQjtLQUM3QixDQUFDO3FDQU9pQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ0gsbUJBQW1CO0dBUnZDLHlCQUF5QixDQTJFckM7U0EzRVkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdFNlcnZpY2UsIExvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgc2VsZWN0b3I6ICduZ3gtZGF0YXRhYmxlW2xpc3RdJyxcclxuICBleHBvcnRBczogJ25neERhdGF0YWJsZUxpc3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGF0YXRhYmxlTGlzdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBASW5wdXQoKSBsaXN0OiBMaXN0U2VydmljZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbG9jYWxpemF0aW9uU2VydmljZTogTG9jYWxpemF0aW9uU2VydmljZSxcclxuICApIHtcclxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJbml0aWFsVmFsdWVzKCkge1xyXG4gICAgdGhpcy50YWJsZS5leHRlcm5hbFBhZ2luZyA9IHRydWU7XHJcbiAgICB0aGlzLnRhYmxlLmV4dGVybmFsU29ydGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnRhYmxlLm1lc3NhZ2VzID0ge1xyXG4gICAgICBlbXB0eU1lc3NhZ2U6IHRoaXMubG9jYWxpemF0aW9uU2VydmljZS5sb2NhbGl6ZVN5bmMoXHJcbiAgICAgICAgJ0FicFVpJyxcclxuICAgICAgICAnTm9EYXRhQXZhaWxhYmxlSW5EYXRhdGFibGUnLFxyXG4gICAgICAgICdObyBkYXRhIGF2YWlsYWJsZScsXHJcbiAgICAgICksXHJcbiAgICAgIHRvdGFsTWVzc2FnZTogdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLmxvY2FsaXplU3luYygnQWJwVWknLCAnVG90YWwnLCAndG90YWwnKSxcclxuICAgICAgc2VsZWN0ZWRNZXNzYWdlOiB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2UubG9jYWxpemVTeW5jKCdBYnBVaScsICdTZWxlY3RlZCcsICdzZWxlY3RlZCcpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9QYWdlKCkge1xyXG4gICAgY29uc3Qgc3ViID0gdGhpcy50YWJsZS5wYWdlLnN1YnNjcmliZSgoeyBvZmZzZXQgfSkgPT4ge1xyXG4gICAgICB0aGlzLmxpc3QucGFnZSA9IG9mZnNldDtcclxuICAgICAgdGhpcy50YWJsZS5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChzdWIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1NvcnQoKSB7XHJcbiAgICBjb25zdCBzdWIgPSB0aGlzLnRhYmxlLnNvcnQuc3Vic2NyaWJlKCh7IHNvcnRzOiBbeyBwcm9wLCBkaXIgfV0gfSkgPT4ge1xyXG4gICAgICBpZiAocHJvcCA9PT0gdGhpcy5saXN0LnNvcnRLZXkgJiYgdGhpcy5saXN0LnNvcnRPcmRlciA9PT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LnNvcnRLZXkgPSAnJztcclxuICAgICAgICB0aGlzLmxpc3Quc29ydE9yZGVyID0gJyc7XHJcbiAgICAgICAgdGhpcy50YWJsZS5zb3J0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubGlzdC5zb3J0S2V5ID0gcHJvcDtcclxuICAgICAgICB0aGlzLmxpc3Quc29ydE9yZGVyID0gZGlyO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChzdWIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0lzTG9hZGluZygpIHtcclxuICAgIGNvbnN0IHN1YiA9IHRoaXMubGlzdC5pc0xvYWRpbmckLnN1YnNjcmliZShsb2FkaW5nID0+IHtcclxuICAgICAgdGhpcy50YWJsZS5sb2FkaW5nSW5kaWNhdG9yID0gbG9hZGluZztcclxuICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChzdWIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoeyBsaXN0IH06IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghbGlzdC5maXJzdENoYW5nZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgbWF4UmVzdWx0Q291bnQsIHBhZ2UgfSA9IGxpc3QuY3VycmVudFZhbHVlO1xyXG4gICAgdGhpcy50YWJsZS5saW1pdCA9IG1heFJlc3VsdENvdW50O1xyXG4gICAgdGhpcy50YWJsZS5vZmZzZXQgPSBwYWdlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvUGFnZSgpO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVUb1NvcnQoKTtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9Jc0xvYWRpbmcoKTtcclxuICB9XHJcbn1cclxuIl19