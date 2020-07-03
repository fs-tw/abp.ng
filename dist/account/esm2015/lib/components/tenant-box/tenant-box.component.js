import { __decorate, __metadata } from "tslib";
import { GetAppConfiguration, SessionState, SetTenant } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AccountService } from '../../services/account.service';
let TenantBoxComponent = class TenantBoxComponent {
    constructor(store, toasterService, accountService) {
        this.store = store;
        this.toasterService = toasterService;
        this.accountService = accountService;
    }
    onSwitch() {
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
        this.name = (tenant || {}).name;
        this.isModalVisible = true;
    }
    save() {
        if (!this.name) {
            this.setTenant(null);
            this.isModalVisible = false;
            return;
        }
        this.modalBusy = true;
        this.accountService
            .findTenant(this.name)
            .pipe(finalize(() => (this.modalBusy = false)))
            .subscribe(({ success, tenantId: id, name }) => {
            if (!success) {
                this.showError();
                return;
            }
            this.setTenant({ id, name });
            this.isModalVisible = false;
        });
    }
    setTenant(tenant) {
        return this.store.dispatch([new SetTenant(tenant), new GetAppConfiguration()]);
    }
    showError() {
        this.toasterService.error('AbpUiMultiTenancy::GivenTenantIsNotAvailable', 'AbpUi::Error', {
            messageLocalizationParams: [this.name],
        });
    }
};
__decorate([
    Select(SessionState.getTenant),
    __metadata("design:type", Observable)
], TenantBoxComponent.prototype, "currentTenant$", void 0);
TenantBoxComponent = __decorate([
    Component({
        selector: 'abp-tenant-box',
        template: "<ng-container *ngIf=\"(currentTenant$ | async) || {} as currentTenant\">\r\n  <div class=\"card shadow-sm rounded mb-3\">\r\n    <div class=\"card-body px-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <span style=\"font-size: 0.8em;\" class=\"text-uppercase text-muted\">{{\r\n            'AbpUiMultiTenancy::Tenant' | abpLocalization\r\n          }}</span\r\n          ><br />\r\n          <h6 class=\"m-0 d-inline-block\">\r\n            <i>{{ currentTenant.name || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}</i>\r\n          </h6>\r\n        </div>\r\n        <div class=\"col-auto\">\r\n          <a\r\n            id=\"AbpTenantSwitchLink\"\r\n            href=\"javascript:void(0);\"\r\n            class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n            (click)=\"onSwitch()\"\r\n            >{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n    <ng-template #abpHeader>\r\n      <h5>Switch Tenant</h5>\r\n    </ng-template>\r\n    <ng-template #abpBody>\r\n      <form (ngSubmit)=\"save()\">\r\n        <div class=\"mt-2\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</label>\r\n            <input\r\n              [(ngModel)]=\"name\"\r\n              type=\"text\"\r\n              id=\"name\"\r\n              name=\"tenant\"\r\n              class=\"form-control\"\r\n              autofocus\r\n            />\r\n          </div>\r\n          <p>{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}</p>\r\n        </div>\r\n      </form>\r\n    </ng-template>\r\n    <ng-template #abpFooter>\r\n      <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n        {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button\r\n        type=\"abp-button\"\r\n        iconClass=\"fa fa-check\"\r\n        (click)=\"save()\"\r\n        [disabled]=\"currentTenant?.name === name\"\r\n      >\r\n        <span>{{ 'AbpTenantManagement::Save' | abpLocalization }}</span>\r\n      </abp-button>\r\n    </ng-template>\r\n  </abp-modal>\r\n</ng-container>\r\n"
    }),
    __metadata("design:paramtypes", [Store,
        ToasterService,
        AccountService])
], TenantBoxComponent);
export { TenantBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hY2NvdW50L3NyYy9saWIvY29tcG9uZW50cy90ZW5hbnQtYm94L3RlbmFudC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQU8sbUJBQW1CLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNaEUsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFXN0IsWUFDVSxLQUFZLEVBQ1osY0FBOEIsRUFDOUIsY0FBOEI7UUFGOUIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQztJQUVKLFFBQVE7UUFDTixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSyxFQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjO2FBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDOUMsU0FBUyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sU0FBUyxDQUFDLE1BQXFCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsOENBQThDLEVBQUUsY0FBYyxFQUFFO1lBQ3hGLHlCQUF5QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN2QyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQW5EQztJQURDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDOzhCQUNmLFVBQVU7MERBQWdCO0FBSC9CLGtCQUFrQjtJQUo5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLHV4RUFBMEM7S0FDM0MsQ0FBQztxQ0FhaUIsS0FBSztRQUNJLGNBQWM7UUFDZCxjQUFjO0dBZDdCLGtCQUFrQixDQXNEOUI7U0F0RFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQLCBHZXRBcHBDb25maWd1cmF0aW9uLCBTZXNzaW9uU3RhdGUsIFNldFRlbmFudCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4uLy4uL21vZGVscy9hY2NvdW50JztcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtdGVuYW50LWJveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbmFudC1ib3guY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50Qm94Q29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBBY2NvdW50LlRlbmFudEJveENvbXBvbmVudElucHV0cywgQWNjb3VudC5UZW5hbnRCb3hDb21wb25lbnRPdXRwdXRzIHtcclxuICBAU2VsZWN0KFNlc3Npb25TdGF0ZS5nZXRUZW5hbnQpXHJcbiAgY3VycmVudFRlbmFudCQ6IE9ic2VydmFibGU8QUJQLkJhc2ljSXRlbT47XHJcblxyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgaXNNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIG1vZGFsQnVzeTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBvblN3aXRjaCgpIHtcclxuICAgIGNvbnN0IHRlbmFudCA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldFRlbmFudCk7XHJcbiAgICB0aGlzLm5hbWUgPSAodGVuYW50IHx8ICh7fSBhcyBBQlAuQmFzaWNJdGVtKSkubmFtZTtcclxuICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGlmICghdGhpcy5uYW1lKSB7XHJcbiAgICAgIHRoaXMuc2V0VGVuYW50KG51bGwpO1xyXG4gICAgICB0aGlzLmlzTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1vZGFsQnVzeSA9IHRydWU7XHJcbiAgICB0aGlzLmFjY291bnRTZXJ2aWNlXHJcbiAgICAgIC5maW5kVGVuYW50KHRoaXMubmFtZSlcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gKHRoaXMubW9kYWxCdXN5ID0gZmFsc2UpKSlcclxuICAgICAgLnN1YnNjcmliZSgoeyBzdWNjZXNzLCB0ZW5hbnRJZDogaWQsIG5hbWUgfSkgPT4ge1xyXG4gICAgICAgIGlmICghc3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VGVuYW50KHsgaWQsIG5hbWUgfSk7XHJcbiAgICAgICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGVuYW50KHRlbmFudDogQUJQLkJhc2ljSXRlbSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2goW25ldyBTZXRUZW5hbnQodGVuYW50KSwgbmV3IEdldEFwcENvbmZpZ3VyYXRpb24oKV0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RXJyb3IoKSB7XHJcbiAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmVycm9yKCdBYnBVaU11bHRpVGVuYW5jeTo6R2l2ZW5UZW5hbnRJc05vdEF2YWlsYWJsZScsICdBYnBVaTo6RXJyb3InLCB7XHJcbiAgICAgIG1lc3NhZ2VMb2NhbGl6YXRpb25QYXJhbXM6IFt0aGlzLm5hbWVdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==