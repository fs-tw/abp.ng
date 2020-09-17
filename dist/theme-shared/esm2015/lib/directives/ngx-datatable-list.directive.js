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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1saXN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2RpcmVjdGl2ZXMvbmd4LWRhdGF0YWJsZS1saXN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEdBS04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU9wQyxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUtwQyxZQUNVLEtBQXlCLEVBQ3pCLEtBQXdCLEVBQ3hCLG1CQUF3QztRQUZ4QyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBUDFDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVN4QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUc7WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQ2pELE9BQU8sRUFDUCw0QkFBNEIsRUFDNUIsbUJBQW1CLENBQ3BCO1lBQ0QsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7WUFDOUUsZUFBZSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7U0FDeEYsQ0FBQztJQUNKLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLGVBQWU7UUFDckIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUNuRSxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7Z0JBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7YUFDM0I7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQWlCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFFOUIsTUFBTSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0YsQ0FBQTtBQS9EVTtJQUFSLEtBQUssRUFBRTs4QkFBTyxXQUFXO3VEQUFDO0FBSGhCLHlCQUF5QjtJQUxyQyxTQUFTLENBQUM7UUFDVCwyQkFBMkI7UUFDM0IsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixRQUFRLEVBQUUsa0JBQWtCO0tBQzdCLENBQUM7cUNBT2lCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDSCxtQkFBbUI7R0FSdkMseUJBQXlCLENBa0VyQztTQWxFWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0U2VydmljZSwgTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICBzZWxlY3RvcjogJ25neC1kYXRhdGFibGVbbGlzdF0nLFxyXG4gIGV4cG9ydEFzOiAnbmd4RGF0YXRhYmxlTGlzdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEYXRhdGFibGVMaXN0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIEBJbnB1dCgpIGxpc3Q6IExpc3RTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudCxcclxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBsb2NhbGl6YXRpb25TZXJ2aWNlOiBMb2NhbGl6YXRpb25TZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEluaXRpYWxWYWx1ZXMoKSB7XHJcbiAgICB0aGlzLnRhYmxlLmV4dGVybmFsUGFnaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMudGFibGUuZXh0ZXJuYWxTb3J0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMudGFibGUubWVzc2FnZXMgPSB7XHJcbiAgICAgIGVtcHR5TWVzc2FnZTogdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLmxvY2FsaXplU3luYyhcclxuICAgICAgICAnQWJwVWknLFxyXG4gICAgICAgICdOb0RhdGFBdmFpbGFibGVJbkRhdGF0YWJsZScsXHJcbiAgICAgICAgJ05vIGRhdGEgYXZhaWxhYmxlJyxcclxuICAgICAgKSxcclxuICAgICAgdG90YWxNZXNzYWdlOiB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2UubG9jYWxpemVTeW5jKCdBYnBVaScsICdUb3RhbCcsICd0b3RhbCcpLFxyXG4gICAgICBzZWxlY3RlZE1lc3NhZ2U6IHRoaXMubG9jYWxpemF0aW9uU2VydmljZS5sb2NhbGl6ZVN5bmMoJ0FicFVpJywgJ1NlbGVjdGVkJywgJ3NlbGVjdGVkJyksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1BhZ2UoKSB7XHJcbiAgICBjb25zdCBzdWIgPSB0aGlzLnRhYmxlLnBhZ2Uuc3Vic2NyaWJlKCh7IG9mZnNldCB9KSA9PiB7XHJcbiAgICAgIHRoaXMubGlzdC5wYWdlID0gb2Zmc2V0O1xyXG4gICAgICB0aGlzLnRhYmxlLm9mZnNldCA9IG9mZnNldDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKHN1Yik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZVRvU29ydCgpIHtcclxuICAgIGNvbnN0IHN1YiA9IHRoaXMudGFibGUuc29ydC5zdWJzY3JpYmUoKHsgc29ydHM6IFt7IHByb3AsIGRpciB9XSB9KSA9PiB7XHJcbiAgICAgIGlmIChwcm9wID09PSB0aGlzLmxpc3Quc29ydEtleSAmJiB0aGlzLmxpc3Quc29ydE9yZGVyID09PSAnZGVzYycpIHtcclxuICAgICAgICB0aGlzLmxpc3Quc29ydEtleSA9ICcnO1xyXG4gICAgICAgIHRoaXMubGlzdC5zb3J0T3JkZXIgPSAnJztcclxuICAgICAgICB0aGlzLnRhYmxlLnNvcnRzID0gW107XHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5saXN0LnNvcnRLZXkgPSBwcm9wO1xyXG4gICAgICAgIHRoaXMubGlzdC5zb3J0T3JkZXIgPSBkaXI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKHN1Yik7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyh7IGxpc3QgfTogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKCFsaXN0LmZpcnN0Q2hhbmdlKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgeyBtYXhSZXN1bHRDb3VudCwgcGFnZSB9ID0gbGlzdC5jdXJyZW50VmFsdWU7XHJcbiAgICB0aGlzLnRhYmxlLmxpbWl0ID0gbWF4UmVzdWx0Q291bnQ7XHJcbiAgICB0aGlzLnRhYmxlLm9mZnNldCA9IHBhZ2U7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9QYWdlKCk7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvU29ydCgpO1xyXG4gIH1cclxufVxyXG4iXX0=