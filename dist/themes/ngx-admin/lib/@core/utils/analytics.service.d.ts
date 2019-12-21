import { Router } from '@angular/router';
import { Location } from '@angular/common';
export declare class AnalyticsService {
    private location;
    private router;
    private enabled;
    constructor(location: Location, router: Router);
    trackPageViews(): void;
    trackEvent(eventName: string): void;
}
