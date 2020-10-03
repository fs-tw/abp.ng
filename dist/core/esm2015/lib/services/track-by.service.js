import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export const trackBy = (key) => (_, item) => item[key];
export const trackByDeep = (...keys) => (_, item) => keys.reduce((acc, key) => acc[key], item);
export class TrackByService {
    constructor() {
        this.by = trackBy;
        this.byDeep = trackByDeep;
    }
}
TrackByService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TrackByService_Factory() { return new TrackByService(); }, token: TrackByService, providedIn: "root" });
TrackByService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stYnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy90cmFjay1ieS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQW1CLE1BQU0sZUFBZSxDQUFDOztBQUc1RCxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsQ0FBVSxHQUFZLEVBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUU3RixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FDekIsR0FBRyxJQUEyQyxFQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBS2hGLE1BQU0sT0FBTyxjQUFjO0lBSDNCO1FBSUUsT0FBRSxHQUFHLE9BQU8sQ0FBQztRQUViLFdBQU0sR0FBRyxXQUFXLENBQUM7S0FDdEI7Ozs7WUFQQSxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTyB9IGZyb20gJ3RzLXRvb2xiZWx0JztcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFja0J5ID0gPFQgPSBhbnk+KGtleToga2V5b2YgVCk6IFRyYWNrQnlGdW5jdGlvbjxUPiA9PiAoXywgaXRlbSkgPT4gaXRlbVtrZXldO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWNrQnlEZWVwID0gPFQgPSBhbnk+KFxyXG4gIC4uLmtleXM6IFQgZXh0ZW5kcyBvYmplY3QgPyBPLlBhdGhzPFQ+IDogbmV2ZXJcclxuKTogVHJhY2tCeUZ1bmN0aW9uPFQ+ID0+IChfLCBpdGVtKSA9PiBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IGFjY1trZXldLCBpdGVtKTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFja0J5U2VydmljZTxJdGVtVHlwZSA9IGFueT4ge1xyXG4gIGJ5ID0gdHJhY2tCeTtcclxuXHJcbiAgYnlEZWVwID0gdHJhY2tCeURlZXA7XHJcbn1cclxuIl19