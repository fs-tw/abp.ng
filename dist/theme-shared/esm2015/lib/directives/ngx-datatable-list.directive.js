import { ListService, LocalizationService } from '@abp/ng.core';
import { ChangeDetectorRef, Directive, Input, } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Subscription } from 'rxjs';
export class NgxDatatableListDirective {
    constructor(table, cdRef, localizationService) {
        this.table = table;
        this.cdRef = cdRef;
        this.localizationService = localizationService;
        this.subscription = new Subscription();
        this.querySubscription = new Subscription();
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
    subscribeToQuery() {
        this.querySubscription.add(this.list.query$.subscribe(() => {
            if (this.list.page !== this.table.offset)
                this.table.offset = this.list.page;
        }));
    }
    ngOnChanges({ list }) {
        if (!list.firstChange)
            return;
        const { maxResultCount, page } = list.currentValue;
        this.table.limit = maxResultCount;
        this.table.offset = page;
        this.querySubscription.unsubscribe();
        this.subscribeToQuery();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.querySubscription.unsubscribe();
    }
    ngOnInit() {
        this.subscribeToPage();
        this.subscribeToSort();
    }
}
NgxDatatableListDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line
                selector: 'ngx-datatable[list]',
                exportAs: 'ngxDatatableList',
            },] }
];
NgxDatatableListDirective.ctorParameters = () => [
    { type: DatatableComponent },
    { type: ChangeDetectorRef },
    { type: LocalizationService }
];
NgxDatatableListDirective.propDecorators = {
    list: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1saXN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2RpcmVjdGl2ZXMvbmd4LWRhdGF0YWJsZS1saXN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hFLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssR0FLTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBT3BDLE1BQU0sT0FBTyx5QkFBeUI7SUFNcEMsWUFDVSxLQUF5QixFQUN6QixLQUF3QixFQUN4QixtQkFBd0M7UUFGeEMsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVIxQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVM3QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUc7WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQ2pELE9BQU8sRUFDUCw0QkFBNEIsRUFDNUIsbUJBQW1CLENBQ3BCO1lBQ0QsWUFB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LENBQUM7SUFDekIsQ0FBQzs7O1lBbkZGLFNBQVMsU0FBQztnQkFDVCwyQkFBMkI7Z0JBQzNCLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7OztZQVBRLGtCQUFrQjtZQVJ6QixpQkFBaUI7WUFGRyxtQkFBbUI7OzttQkFzQnRDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0U2VydmljZSwgTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICBzZWxlY3RvcjogJ25neC1kYXRhdGFibGVbbGlzdF0nLFxyXG4gIGV4cG9ydEFzOiAnbmd4RGF0YXRhYmxlTGlzdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEYXRhdGFibGVMaXN0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgcHJpdmF0ZSBxdWVyeVN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgQElucHV0KCkgbGlzdDogTGlzdFNlcnZpY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGxvY2FsaXphdGlvblNlcnZpY2U6IExvY2FsaXphdGlvblNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SW5pdGlhbFZhbHVlcygpIHtcclxuICAgIHRoaXMudGFibGUuZXh0ZXJuYWxQYWdpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy50YWJsZS5leHRlcm5hbFNvcnRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy50YWJsZS5tZXNzYWdlcyA9IHtcclxuICAgICAgZW1wdHlNZXNzYWdlOiB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2UubG9jYWxpemVTeW5jKFxyXG4gICAgICAgICdBYnBVaScsXHJcbiAgICAgICAgJ05vRGF0YUF2YWlsYWJsZUluRGF0YXRhYmxlJyxcclxuICAgICAgICAnTm8gZGF0YSBhdmFpbGFibGUnLFxyXG4gICAgICApLFxyXG4gICAgICB0b3RhbE1lc3NhZ2U6IHRoaXMubG9jYWxpemF0aW9uU2VydmljZS5sb2NhbGl6ZVN5bmMoJ0FicFVpJywgJ1RvdGFsJywgJ3RvdGFsJyksXHJcbiAgICAgIHNlbGVjdGVkTWVzc2FnZTogdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLmxvY2FsaXplU3luYygnQWJwVWknLCAnU2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZVRvUGFnZSgpIHtcclxuICAgIGNvbnN0IHN1YiA9IHRoaXMudGFibGUucGFnZS5zdWJzY3JpYmUoKHsgb2Zmc2V0IH0pID0+IHtcclxuICAgICAgdGhpcy5saXN0LnBhZ2UgPSBvZmZzZXQ7XHJcbiAgICAgIHRoaXMudGFibGUub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoc3ViKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9Tb3J0KCkge1xyXG4gICAgY29uc3Qgc3ViID0gdGhpcy50YWJsZS5zb3J0LnN1YnNjcmliZSgoeyBzb3J0czogW3sgcHJvcCwgZGlyIH1dIH0pID0+IHtcclxuICAgICAgaWYgKHByb3AgPT09IHRoaXMubGlzdC5zb3J0S2V5ICYmIHRoaXMubGlzdC5zb3J0T3JkZXIgPT09ICdkZXNjJykge1xyXG4gICAgICAgIHRoaXMubGlzdC5zb3J0S2V5ID0gJyc7XHJcbiAgICAgICAgdGhpcy5saXN0LnNvcnRPcmRlciA9ICcnO1xyXG4gICAgICAgIHRoaXMudGFibGUuc29ydHMgPSBbXTtcclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxpc3Quc29ydEtleSA9IHByb3A7XHJcbiAgICAgICAgdGhpcy5saXN0LnNvcnRPcmRlciA9IGRpcjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoc3ViKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9RdWVyeSgpIHtcclxuICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24uYWRkKFxyXG4gICAgICB0aGlzLmxpc3QucXVlcnkkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5wYWdlICE9PSB0aGlzLnRhYmxlLm9mZnNldCkgdGhpcy50YWJsZS5vZmZzZXQgPSB0aGlzLmxpc3QucGFnZTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoeyBsaXN0IH06IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghbGlzdC5maXJzdENoYW5nZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgbWF4UmVzdWx0Q291bnQsIHBhZ2UgfSA9IGxpc3QuY3VycmVudFZhbHVlO1xyXG4gICAgdGhpcy50YWJsZS5saW1pdCA9IG1heFJlc3VsdENvdW50O1xyXG4gICAgdGhpcy50YWJsZS5vZmZzZXQgPSBwYWdlO1xyXG5cclxuICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9RdWVyeSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvUGFnZSgpO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVUb1NvcnQoKTtcclxuICB9XHJcbn1cclxuIl19