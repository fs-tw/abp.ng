/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/users.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of as observableOf } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserData } from '../data/users';
var UserService = /** @class */ (function (_super) {
    tslib_1.__extends(UserService, _super);
    function UserService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = new Date;
        _this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        _this.types = {
            mobile: 'mobile',
            home: 'home',
            work: 'work',
        };
        _this.contacts = [
            { user: _this.users.nick, type: _this.types.mobile },
            { user: _this.users.eva, type: _this.types.home },
            { user: _this.users.jack, type: _this.types.mobile },
            { user: _this.users.lee, type: _this.types.mobile },
            { user: _this.users.alan, type: _this.types.home },
            { user: _this.users.kate, type: _this.types.work },
        ];
        _this.recentUsers = [
            { user: _this.users.alan, type: _this.types.home, time: _this.time.setHours(21, 12) },
            { user: _this.users.eva, type: _this.types.home, time: _this.time.setHours(17, 45) },
            { user: _this.users.nick, type: _this.types.mobile, time: _this.time.setHours(5, 29) },
            { user: _this.users.lee, type: _this.types.mobile, time: _this.time.setHours(11, 24) },
            { user: _this.users.jack, type: _this.types.mobile, time: _this.time.setHours(10, 45) },
            { user: _this.users.kate, type: _this.types.work, time: _this.time.setHours(9, 42) },
            { user: _this.users.kate, type: _this.types.work, time: _this.time.setHours(9, 31) },
            { user: _this.users.jack, type: _this.types.mobile, time: _this.time.setHours(8, 0) },
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    UserService.prototype.getUsers = /**
     * @return {?}
     */
    function () {
        return observableOf(this.users);
    };
    /**
     * @return {?}
     */
    UserService.prototype.getContacts = /**
     * @return {?}
     */
    function () {
        return observableOf(this.contacts);
    };
    /**
     * @return {?}
     */
    UserService.prototype.getRecentUsers = /**
     * @return {?}
     */
    function () {
        return observableOf(this.recentUsers);
    };
    UserService.decorators = [
        { type: Injectable }
    ];
    return UserService;
}(UserData));
export { UserService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9jay91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUF5QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEU7SUFDaUMsdUNBQVE7SUFEekM7UUFBQSxxRUFnREM7UUE3Q1MsVUFBSSxHQUFTLElBQUksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBRztZQUNkLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1lBQy9ELEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFO1lBQzNELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1lBQ2xFLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFO1lBQzNELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1lBQ2xFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1NBQ25FLENBQUM7UUFDTSxXQUFLLEdBQUc7WUFDZCxNQUFNLEVBQUUsUUFBUTtZQUNoQixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQztRQUNNLGNBQVEsR0FBZTtZQUM3QixFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbEQsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNsRCxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDakQsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2hELEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtTQUNqRCxDQUFDO1FBQ00saUJBQVcsR0FBbUI7WUFDcEMsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDakYsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDaEYsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDbEYsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDbEYsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDbkYsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDaEYsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDaEYsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUM7U0FDbEYsQ0FBQzs7SUFhSixDQUFDOzs7O0lBWEMsOEJBQVE7OztJQUFSO1FBQ0UsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxpQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELG9DQUFjOzs7SUFBZDtRQUNFLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkEvQ0YsVUFBVTs7SUFnRFgsa0JBQUM7Q0FBQSxBQWhERCxDQUNpQyxRQUFRLEdBK0N4QztTQS9DWSxXQUFXOzs7Ozs7SUFFdEIsMkJBQThCOzs7OztJQUU5Qiw0QkFPRTs7Ozs7SUFDRiw0QkFJRTs7Ozs7SUFDRiwrQkFPRTs7Ozs7SUFDRixrQ0FTRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250YWN0cywgUmVjZW50VXNlcnMsIFVzZXJEYXRhIH0gZnJvbSAnLi4vZGF0YS91c2Vycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSBleHRlbmRzIFVzZXJEYXRhIHtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lOiBEYXRlID0gbmV3IERhdGU7XHJcblxyXG4gIHByaXZhdGUgdXNlcnMgPSB7XHJcbiAgICBuaWNrOiB7IG5hbWU6ICdOaWNrIEpvbmVzJywgcGljdHVyZTogJ2Fzc2V0cy9pbWFnZXMvbmljay5wbmcnIH0sXHJcbiAgICBldmE6IHsgbmFtZTogJ0V2YSBNb29yJywgcGljdHVyZTogJ2Fzc2V0cy9pbWFnZXMvZXZhLnBuZycgfSxcclxuICAgIGphY2s6IHsgbmFtZTogJ0phY2sgV2lsbGlhbXMnLCBwaWN0dXJlOiAnYXNzZXRzL2ltYWdlcy9qYWNrLnBuZycgfSxcclxuICAgIGxlZTogeyBuYW1lOiAnTGVlIFdvbmcnLCBwaWN0dXJlOiAnYXNzZXRzL2ltYWdlcy9sZWUucG5nJyB9LFxyXG4gICAgYWxhbjogeyBuYW1lOiAnQWxhbiBUaG9tcHNvbicsIHBpY3R1cmU6ICdhc3NldHMvaW1hZ2VzL2FsYW4ucG5nJyB9LFxyXG4gICAga2F0ZTogeyBuYW1lOiAnS2F0ZSBNYXJ0aW5leicsIHBpY3R1cmU6ICdhc3NldHMvaW1hZ2VzL2thdGUucG5nJyB9LFxyXG4gIH07XHJcbiAgcHJpdmF0ZSB0eXBlcyA9IHtcclxuICAgIG1vYmlsZTogJ21vYmlsZScsXHJcbiAgICBob21lOiAnaG9tZScsXHJcbiAgICB3b3JrOiAnd29yaycsXHJcbiAgfTtcclxuICBwcml2YXRlIGNvbnRhY3RzOiBDb250YWN0c1tdID0gW1xyXG4gICAgeyB1c2VyOiB0aGlzLnVzZXJzLm5pY2ssIHR5cGU6IHRoaXMudHlwZXMubW9iaWxlIH0sXHJcbiAgICB7IHVzZXI6IHRoaXMudXNlcnMuZXZhLCB0eXBlOiB0aGlzLnR5cGVzLmhvbWUgfSxcclxuICAgIHsgdXNlcjogdGhpcy51c2Vycy5qYWNrLCB0eXBlOiB0aGlzLnR5cGVzLm1vYmlsZSB9LFxyXG4gICAgeyB1c2VyOiB0aGlzLnVzZXJzLmxlZSwgdHlwZTogdGhpcy50eXBlcy5tb2JpbGUgfSxcclxuICAgIHsgdXNlcjogdGhpcy51c2Vycy5hbGFuLCB0eXBlOiB0aGlzLnR5cGVzLmhvbWUgfSxcclxuICAgIHsgdXNlcjogdGhpcy51c2Vycy5rYXRlLCB0eXBlOiB0aGlzLnR5cGVzLndvcmsgfSxcclxuICBdO1xyXG4gIHByaXZhdGUgcmVjZW50VXNlcnM6IFJlY2VudFVzZXJzW10gID0gW1xyXG4gICAgeyB1c2VyOiB0aGlzLnVzZXJzLmFsYW4sIHR5cGU6IHRoaXMudHlwZXMuaG9tZSwgdGltZTogdGhpcy50aW1lLnNldEhvdXJzKDIxLCAxMil9LFxyXG4gICAgeyB1c2VyOiB0aGlzLnVzZXJzLmV2YSwgdHlwZTogdGhpcy50eXBlcy5ob21lLCB0aW1lOiB0aGlzLnRpbWUuc2V0SG91cnMoMTcsIDQ1KX0sXHJcbiAgICB7IHVzZXI6IHRoaXMudXNlcnMubmljaywgdHlwZTogdGhpcy50eXBlcy5tb2JpbGUsIHRpbWU6IHRoaXMudGltZS5zZXRIb3Vycyg1LCAyOSl9LFxyXG4gICAgeyB1c2VyOiB0aGlzLnVzZXJzLmxlZSwgdHlwZTogdGhpcy50eXBlcy5tb2JpbGUsIHRpbWU6IHRoaXMudGltZS5zZXRIb3VycygxMSwgMjQpfSxcclxuICAgIHsgdXNlcjogdGhpcy51c2Vycy5qYWNrLCB0eXBlOiB0aGlzLnR5cGVzLm1vYmlsZSwgdGltZTogdGhpcy50aW1lLnNldEhvdXJzKDEwLCA0NSl9LFxyXG4gICAgeyB1c2VyOiB0aGlzLnVzZXJzLmthdGUsIHR5cGU6IHRoaXMudHlwZXMud29yaywgdGltZTogdGhpcy50aW1lLnNldEhvdXJzKDksIDQyKX0sXHJcbiAgICB7IHVzZXI6IHRoaXMudXNlcnMua2F0ZSwgdHlwZTogdGhpcy50eXBlcy53b3JrLCB0aW1lOiB0aGlzLnRpbWUuc2V0SG91cnMoOSwgMzEpfSxcclxuICAgIHsgdXNlcjogdGhpcy51c2Vycy5qYWNrLCB0eXBlOiB0aGlzLnR5cGVzLm1vYmlsZSwgdGltZTogdGhpcy50aW1lLnNldEhvdXJzKDgsIDApfSxcclxuICBdO1xyXG5cclxuICBnZXRVc2VycygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLnVzZXJzKTtcclxuICB9XHJcblxyXG4gIGdldENvbnRhY3RzKCk6IE9ic2VydmFibGU8Q29udGFjdHNbXT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmNvbnRhY3RzKTtcclxuICB9XHJcblxyXG4gIGdldFJlY2VudFVzZXJzKCk6IE9ic2VydmFibGU8UmVjZW50VXNlcnNbXT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLnJlY2VudFVzZXJzKTtcclxuICB9XHJcbn1cclxuIl19