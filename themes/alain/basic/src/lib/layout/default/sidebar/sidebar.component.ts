import { Component, ChangeDetectionStrategy, TrackByFunction } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ABP, ConfigState } from '@abp/ng.core';
import { map } from 'rxjs/operators';

@Component({
    selector: 'layout-sidebar',
    templateUrl: './sidebar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
    @Select(ConfigState.getOne('routes'))
    routes$: Observable<ABP.FullRoute[]>;
    constructor(public settings: SettingsService) { }

    get visibleRoutes$(): Observable<ABP.FullRoute[]> {
        //console.log('yc menu');
        return this.routes$.pipe(map(routes => getVisibleRoutes(routes)));
    }
    trackByFn: TrackByFunction<ABP.FullRoute> = (_, item) => item.name;

}
function getVisibleRoutes(routes: ABP.FullRoute[]) {
    return routes.reduce((acc, val) => {
        if (val.invisible) return acc;

        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }

        return [...acc, val];
    }, []);
}
