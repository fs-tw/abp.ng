/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/users.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of as observableOf } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserData } from '../data/users';
export class UserService extends UserData {
    constructor() {
        super(...arguments);
        this.time = new Date;
        this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        this.types = {
            mobile: 'mobile',
            home: 'home',
            work: 'work',
        };
        this.contacts = [
            { user: this.users.nick, type: this.types.mobile },
            { user: this.users.eva, type: this.types.home },
            { user: this.users.jack, type: this.types.mobile },
            { user: this.users.lee, type: this.types.mobile },
            { user: this.users.alan, type: this.types.home },
            { user: this.users.kate, type: this.types.work },
        ];
        this.recentUsers = [
            { user: this.users.alan, type: this.types.home, time: this.time.setHours(21, 12) },
            { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45) },
            { user: this.users.nick, type: this.types.mobile, time: this.time.setHours(5, 29) },
            { user: this.users.lee, type: this.types.mobile, time: this.time.setHours(11, 24) },
            { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(10, 45) },
            { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 42) },
            { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 31) },
            { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(8, 0) },
        ];
    }
    /**
     * @return {?}
     */
    getUsers() {
        return observableOf(this.users);
    }
    /**
     * @return {?}
     */
    getContacts() {
        return observableOf(this.contacts);
    }
    /**
     * @return {?}
     */
    getRecentUsers() {
        return observableOf(this.recentUsers);
    }
}
UserService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.time;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.users;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.types;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.contacts;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.recentUsers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9jay91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXlCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoRSxNQUFNLE9BQU8sV0FBWSxTQUFRLFFBQVE7SUFEekM7O1FBR1UsU0FBSSxHQUFTLElBQUksSUFBSSxDQUFDO1FBRXRCLFVBQUssR0FBRztZQUNkLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1lBQy9ELEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFO1lBQzNELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1lBQ2xFLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFO1lBQzNELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1lBQ2xFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1NBQ25FLENBQUM7UUFDTSxVQUFLLEdBQUc7WUFDZCxNQUFNLEVBQUUsUUFBUTtZQUNoQixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQztRQUNNLGFBQVEsR0FBZTtZQUM3QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbEQsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNsRCxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDakQsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2hELEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtTQUNqRCxDQUFDO1FBQ00sZ0JBQVcsR0FBbUI7WUFDcEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDakYsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDaEYsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDbEYsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDbEYsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDbkYsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDaEYsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDaEYsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUM7U0FDbEYsQ0FBQztJQWFKLENBQUM7Ozs7SUFYQyxRQUFRO1FBQ04sT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQS9DRixVQUFVOzs7Ozs7O0lBR1QsMkJBQThCOzs7OztJQUU5Qiw0QkFPRTs7Ozs7SUFDRiw0QkFJRTs7Ozs7SUFDRiwrQkFPRTs7Ozs7SUFDRixrQ0FTRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250YWN0cywgUmVjZW50VXNlcnMsIFVzZXJEYXRhIH0gZnJvbSAnLi4vZGF0YS91c2Vycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSBleHRlbmRzIFVzZXJEYXRhIHtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lOiBEYXRlID0gbmV3IERhdGU7XHJcblxyXG4gIHByaXZhdGUgdXNlcnMgPSB7XHJcbiAgICBuaWNrOiB7IG5hbWU6ICdOaWNrIEpvbmVzJywgcGljdHVyZTogJ2Fzc2V0cy9pbWFnZXMvbmljay5wbmcnIH0sXHJcbiAgICBldmE6IHsgbmFtZTogJ0V2YSBNb29yJywgcGljdHVyZTogJ2Fzc2V0cy9pbWFnZXMvZXZhLnBuZycgfSxcclxuICAgIGphY2s6IHsgbmFtZTogJ0phY2sgV2lsbGlhbXMnLCBwaWN0dXJlOiAnYXNzZXRzL2ltYWdlcy9qYWNrLnBuZycgfSxcclxuICAgIGxlZTogeyBuYW1lOiAnTGVlIFdvbmcnLCBwaWN0dXJlOiAnYXNzZXRzL2ltYWdlcy9sZWUucG5nJyB9LFxyXG4gICAgYWxhbjogeyBuYW1lOiAnQWxhbiBUaG9tcHNvbicsIHBpY3R1cmU6ICdhc3NldHMvaW1hZ2VzL2FsYW4ucG5nJyB9LFxyXG4gICAga2F0ZTogeyBuYW1lOiAnS2F0ZSBNYXJ0aW5leicsIHBpY3R1cmU6ICdhc3NldHMvaW1hZ2VzL2thdGUucG5nJyB9LFxyXG4gIH07XHJcbiAgcHJpdmF0ZSB0eXBlcyA9IHtcclxuICAgIG1vYmlsZTogJ21vYmlsZScsXHJcbiAgICBob21lOiAnaG9tZScsXHJcbiAgICB3b3JrOiAnd29yaycsXHJcbiAgfTtcclxuICBwcml2YXRlIGNvbnRhY3RzOiBDb250YWN0c1tdID0gW1xyXG4gICAgeyB1c2VyOiB0aGlzLnVzZXJzLm5pY2ssIHR5cGU6IHRoaXMudHlwZXMubW9iaWxlIH0sXHJcbiAgICB7IHVzZXI6IHRoaXMudXNlcnMuZXZhLCB0eXBlOiB0aGlzLnR5cGVzLmhvbWUgfSxcclxuICAgIHsgdXNlcjogdGhpcy51c2Vycy5qYWNrLCB0eXBlOiB0aGlzLnR5cGVzLm1vYmlsZSB9LFxyXG4gICAgeyB1c2VyOiB0aGlzLnVzZXJzLmxlZSwgdHlwZTogdGhpcy50eXBlcy5tb2JpbGUgfSxcclxuICAgIHsgdXNlcjogdGhpcy51c2Vycy5hbGFuLCB0eXBlOiB0aGlzLnR5cGVzLmhvbWUgfSxcclxuICAgIHsgdXNlcjogdGhpcy51c2Vycy5rYXRlLCB0eXBlOiB0aGlzLnR5cGVzLndvcmsgfSxcclxuICBdO1xyXG4gIHByaXZhdGUgcmVjZW50VXNlcnM6IFJlY2VudFVzZXJzW10gID0gW1xyXG4gICAgeyB1c2VyOiB0aGlzLnVzZXJzLmFsYW4sIHR5cGU6IHRoaXMudHlwZXMuaG9tZSwgdGltZTogdGhpcy50aW1lLnNldEhvdXJzKDIxLCAxMil9LFxyXG4gICAgeyB1c2VyOiB0aGlzLnVzZXJzLmV2YSwgdHlwZTogdGhpcy50eXBlcy5ob21lLCB0aW1lOiB0aGlzLnRpbWUuc2V0SG91cnMoMTcsIDQ1KX0sXHJcbiAgICB7IHVzZXI6IHRoaXMudXNlcnMubmljaywgdHlwZTogdGhpcy50eXBlcy5tb2JpbGUsIHRpbWU6IHRoaXMudGltZS5zZXRIb3Vycyg1LCAyOSl9LFxyXG4gICAgeyB1c2VyOiB0aGlzLnVzZXJzLmxlZSwgdHlwZTogdGhpcy50eXBlcy5tb2JpbGUsIHRpbWU6IHRoaXMudGltZS5zZXRIb3VycygxMSwgMjQpfSxcclxuICAgIHsgdXNlcjogdGhpcy51c2Vycy5qYWNrLCB0eXBlOiB0aGlzLnR5cGVzLm1vYmlsZSwgdGltZTogdGhpcy50aW1lLnNldEhvdXJzKDEwLCA0NSl9LFxyXG4gICAgeyB1c2VyOiB0aGlzLnVzZXJzLmthdGUsIHR5cGU6IHRoaXMudHlwZXMud29yaywgdGltZTogdGhpcy50aW1lLnNldEhvdXJzKDksIDQyKX0sXHJcbiAgICB7IHVzZXI6IHRoaXMudXNlcnMua2F0ZSwgdHlwZTogdGhpcy50eXBlcy53b3JrLCB0aW1lOiB0aGlzLnRpbWUuc2V0SG91cnMoOSwgMzEpfSxcclxuICAgIHsgdXNlcjogdGhpcy51c2Vycy5qYWNrLCB0eXBlOiB0aGlzLnR5cGVzLm1vYmlsZSwgdGltZTogdGhpcy50aW1lLnNldEhvdXJzKDgsIDApfSxcclxuICBdO1xyXG5cclxuICBnZXRVc2VycygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLnVzZXJzKTtcclxuICB9XHJcblxyXG4gIGdldENvbnRhY3RzKCk6IE9ic2VydmFibGU8Q29udGFjdHNbXT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmNvbnRhY3RzKTtcclxuICB9XHJcblxyXG4gIGdldFJlY2VudFVzZXJzKCk6IE9ic2VydmFibGU8UmVjZW50VXNlcnNbXT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLnJlY2VudFVzZXJzKTtcclxuICB9XHJcbn1cclxuIl19