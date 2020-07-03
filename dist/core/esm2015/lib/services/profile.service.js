import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import * as i0 from "@angular/core";
import * as i1 from "./rest.service";
let ProfileService = class ProfileService {
    constructor(rest) {
        this.rest = rest;
        this.apiName = 'AbpIdentity';
    }
    get() {
        const request = {
            method: 'GET',
            url: '/api/identity/my-profile',
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    update(body) {
        const request = {
            method: 'PUT',
            url: '/api/identity/my-profile',
            body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    changePassword(body, skipHandleError = false) {
        const request = {
            method: 'POST',
            url: '/api/identity/my-profile/change-password',
            body,
        };
        return this.rest.request(request, {
            skipHandleError,
            apiName: this.apiName,
        });
    }
};
ProfileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProfileService_Factory() { return new ProfileService(i0.ɵɵinject(i1.RestService)); }, token: ProfileService, providedIn: "root" });
ProfileService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [RestService])
], ProfileService);
export { ProfileService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL3Byb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU03QyxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBR3pCLFlBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFGckMsWUFBTyxHQUFHLGFBQWEsQ0FBQztJQUVnQixDQUFDO0lBRXpDLEdBQUc7UUFDRCxNQUFNLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsMEJBQTBCO1NBQ2hDLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUF5QixPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFzQjtRQUMzQixNQUFNLE9BQU8sR0FBbUM7WUFDOUMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsMEJBQTBCO1lBQy9CLElBQUk7U0FDTCxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBcUMsT0FBTyxFQUFFO1lBQ3BFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUNaLElBQW1DLEVBQ25DLGtCQUEyQixLQUFLO1FBRWhDLE1BQU0sT0FBTyxHQUFnRDtZQUMzRCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSwwQ0FBMEM7WUFDL0MsSUFBSTtTQUNMLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFzQyxPQUFPLEVBQUU7WUFDckUsZUFBZTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7QUF6Q1ksY0FBYztJQUgxQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO3FDQUkwQixXQUFXO0dBSDFCLGNBQWMsQ0F5QzFCO1NBekNZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICcuL3Jlc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IFByb2ZpbGUsIFJlc3QgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNlIHtcclxuICBhcGlOYW1lID0gJ0FicElkZW50aXR5JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0OiBSZXN0U2VydmljZSkge31cclxuXHJcbiAgZ2V0KCk6IE9ic2VydmFibGU8UHJvZmlsZS5SZXNwb25zZT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6ICcvYXBpL2lkZW50aXR5L215LXByb2ZpbGUnLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgUHJvZmlsZS5SZXNwb25zZT4ocmVxdWVzdCwgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoYm9keTogUHJvZmlsZS5SZXNwb25zZSk6IE9ic2VydmFibGU8UHJvZmlsZS5SZXNwb25zZT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PFByb2ZpbGUuUmVzcG9uc2U+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICB1cmw6ICcvYXBpL2lkZW50aXR5L215LXByb2ZpbGUnLFxyXG4gICAgICBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8UHJvZmlsZS5SZXNwb25zZSwgUHJvZmlsZS5SZXNwb25zZT4ocmVxdWVzdCwge1xyXG4gICAgICBhcGlOYW1lOiB0aGlzLmFwaU5hbWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVBhc3N3b3JkKFxyXG4gICAgYm9keTogUHJvZmlsZS5DaGFuZ2VQYXNzd29yZFJlcXVlc3QsXHJcbiAgICBza2lwSGFuZGxlRXJyb3I6IGJvb2xlYW4gPSBmYWxzZSxcclxuICApOiBPYnNlcnZhYmxlPG51bGw+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxQcm9maWxlLkNoYW5nZVBhc3N3b3JkUmVxdWVzdD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvYXBpL2lkZW50aXR5L215LXByb2ZpbGUvY2hhbmdlLXBhc3N3b3JkJyxcclxuICAgICAgYm9keSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PFByb2ZpbGUuQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0LCBudWxsPihyZXF1ZXN0LCB7XHJcbiAgICAgIHNraXBIYW5kbGVFcnJvcixcclxuICAgICAgYXBpTmFtZTogdGhpcy5hcGlOYW1lLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==