import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export const trackBy = (key) => (_, item) => item[key];
export const trackByDeep = (...keys) => (_, item) => keys.reduce((acc, key) => acc[key], item);
let TrackByService = class TrackByService {
    constructor() {
        this.by = trackBy;
        this.byDeep = trackByDeep;
    }
};
TrackByService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TrackByService_Factory() { return new TrackByService(); }, token: TrackByService, providedIn: "root" });
TrackByService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], TrackByService);
export { TrackByService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stYnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy90cmFjay1ieS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFtQixNQUFNLGVBQWUsQ0FBQzs7QUFHNUQsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLENBQVUsR0FBWSxFQUFzQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFN0YsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLENBQ3pCLEdBQUcsSUFBMkMsRUFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUtoRixJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBQTNCO1FBQ0UsT0FBRSxHQUFHLE9BQU8sQ0FBQztRQUViLFdBQU0sR0FBRyxXQUFXLENBQUM7S0FDdEI7Q0FBQSxDQUFBOztBQUpZLGNBQWM7SUFIMUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGNBQWMsQ0FJMUI7U0FKWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHJhY2tCeUZ1bmN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE8gfSBmcm9tICd0cy10b29sYmVsdCc7XHJcblxyXG5leHBvcnQgY29uc3QgdHJhY2tCeSA9IDxUID0gYW55PihrZXk6IGtleW9mIFQpOiBUcmFja0J5RnVuY3Rpb248VD4gPT4gKF8sIGl0ZW0pID0+IGl0ZW1ba2V5XTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFja0J5RGVlcCA9IDxUID0gYW55PihcclxuICAuLi5rZXlzOiBUIGV4dGVuZHMgb2JqZWN0ID8gTy5QYXRoczxUPiA6IG5ldmVyXHJcbik6IFRyYWNrQnlGdW5jdGlvbjxUPiA9PiAoXywgaXRlbSkgPT4ga2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiBhY2Nba2V5XSwgaXRlbSk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhY2tCeVNlcnZpY2U8SXRlbVR5cGUgPSBhbnk+IHtcclxuICBieSA9IHRyYWNrQnk7XHJcblxyXG4gIGJ5RGVlcCA9IHRyYWNrQnlEZWVwO1xyXG59XHJcbiJdfQ==