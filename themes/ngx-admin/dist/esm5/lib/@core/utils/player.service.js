/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/player.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var Track = /** @class */ (function () {
    function Track() {
    }
    return Track;
}());
export { Track };
if (false) {
    /** @type {?} */
    Track.prototype.name;
    /** @type {?} */
    Track.prototype.artist;
    /** @type {?} */
    Track.prototype.url;
    /** @type {?} */
    Track.prototype.cover;
}
var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.playlist = [
            {
                name: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
                cover: 'assets/images/cover1.jpg',
            },
            {
                name: 'Harder',
                artist: 'Daft Punk',
                url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
                cover: 'assets/images/cover2.jpg',
            },
            {
                name: 'Come Together',
                artist: 'Beatles',
                url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
                cover: 'assets/images/cover3.jpg',
            },
        ];
    }
    /**
     * @return {?}
     */
    PlayerService.prototype.random = /**
     * @return {?}
     */
    function () {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    };
    /**
     * @return {?}
     */
    PlayerService.prototype.next = /**
     * @return {?}
     */
    function () {
        return this.getNextTrack();
    };
    /**
     * @return {?}
     */
    PlayerService.prototype.prev = /**
     * @return {?}
     */
    function () {
        return this.getPrevTrack();
    };
    /**
     * @private
     * @return {?}
     */
    PlayerService.prototype.getNextTrack = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    };
    /**
     * @private
     * @return {?}
     */
    PlayerService.prototype.getPrevTrack = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    };
    PlayerService.decorators = [
        { type: Injectable }
    ];
    return PlayerService;
}());
export { PlayerService };
if (false) {
    /** @type {?} */
    PlayerService.prototype.current;
    /** @type {?} */
    PlayerService.prototype.playlist;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL3V0aWxzL3BsYXllci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFBO0lBS0EsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpDLHFCQUFhOztJQUNiLHVCQUFlOztJQUNmLG9CQUFZOztJQUNaLHNCQUFjOztBQUdoQjtJQUFBO1FBR0UsYUFBUSxHQUFZO1lBQ2xCO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCLEdBQUcsRUFBRSx3RUFBd0U7Z0JBQzdFLEtBQUssRUFBRSwwQkFBMEI7YUFDbEM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxNQUFNLEVBQUUsV0FBVztnQkFDbkIsR0FBRyxFQUFFLHdFQUF3RTtnQkFDN0UsS0FBSyxFQUFFLDBCQUEwQjthQUNsQztZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixNQUFNLEVBQUUsU0FBUztnQkFDakIsR0FBRyxFQUFFLHdFQUF3RTtnQkFDN0UsS0FBSyxFQUFFLDBCQUEwQjthQUNsQztTQUNGLENBQUM7SUFrQ0osQ0FBQzs7OztJQWhDQyw4QkFBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsNEJBQUk7OztJQUFKO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELDRCQUFJOzs7SUFBSjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU8sb0NBQVk7Ozs7SUFBcEI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU8sb0NBQVk7Ozs7SUFBcEI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQXZERixVQUFVOztJQXdEWCxvQkFBQztDQUFBLEFBeERELElBd0RDO1NBdkRZLGFBQWE7OztJQUN4QixnQ0FBZ0I7O0lBQ2hCLGlDQW1CRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFjayB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGFydGlzdDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGNvdmVyOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBsYXllclNlcnZpY2Uge1xyXG4gIGN1cnJlbnQ6IG51bWJlcjtcclxuICBwbGF5bGlzdDogVHJhY2tbXSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0RvblxcJ3QgV2FubmEgRmlnaHQnLFxyXG4gICAgICBhcnRpc3Q6ICdBbGFiYW1hIFNoYWtlcycsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzYxNTZjZGJjYTQyNWE4OTQ5NzJjMDJmY2E5ZDc2YzBiNzBlMDAxYWYnLFxyXG4gICAgICBjb3ZlcjogJ2Fzc2V0cy9pbWFnZXMvY292ZXIxLmpwZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnSGFyZGVyJyxcclxuICAgICAgYXJ0aXN0OiAnRGFmdCBQdW5rJyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvOTJhMDRjN2MwZTk2YmY5M2ExYjFiMWNhZTdkZmZmMTkyMTk2OWE3YicsXHJcbiAgICAgIGNvdmVyOiAnYXNzZXRzL2ltYWdlcy9jb3ZlcjIuanBnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdDb21lIFRvZ2V0aGVyJyxcclxuICAgICAgYXJ0aXN0OiAnQmVhdGxlcycsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzgzMDkwYTRkYjY4OTllYWNhNjg5YWUzNWY2OTEyNmRiZTY1ZDk0YzknLFxyXG4gICAgICBjb3ZlcjogJ2Fzc2V0cy9pbWFnZXMvY292ZXIzLmpwZycsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJhbmRvbSgpOiBUcmFjayB7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXlsaXN0Lmxlbmd0aCk7XHJcbiAgICByZXR1cm4gdGhpcy5wbGF5bGlzdFt0aGlzLmN1cnJlbnRdO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpOiBUcmFjayB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXROZXh0VHJhY2soKTtcclxuICB9XHJcblxyXG4gIHByZXYoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQcmV2VHJhY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmV4dFRyYWNrKCk6IFRyYWNrIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMucGxheWxpc3QubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnQgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucGxheWxpc3RbdGhpcy5jdXJyZW50XTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UHJldlRyYWNrKCk6IFRyYWNrIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IDApIHtcclxuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wbGF5bGlzdC5sZW5ndGggLSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50LS07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucGxheWxpc3RbdGhpcy5jdXJyZW50XTtcclxuICB9XHJcbn1cclxuIl19