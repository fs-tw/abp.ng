/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/player.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class Track {
}
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
export class PlayerService {
    constructor() {
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
    random() {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    }
    /**
     * @return {?}
     */
    next() {
        return this.getNextTrack();
    }
    /**
     * @return {?}
     */
    prev() {
        return this.getPrevTrack();
    }
    /**
     * @private
     * @return {?}
     */
    getNextTrack() {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    }
    /**
     * @private
     * @return {?}
     */
    getPrevTrack() {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    }
}
PlayerService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    PlayerService.prototype.current;
    /** @type {?} */
    PlayerService.prototype.playlist;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL3V0aWxzL3BsYXllci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxNQUFNLE9BQU8sS0FBSztDQUtqQjs7O0lBSkMscUJBQWE7O0lBQ2IsdUJBQWU7O0lBQ2Ysb0JBQVk7O0lBQ1osc0JBQWM7O0FBSWhCLE1BQU0sT0FBTyxhQUFhO0lBRDFCO1FBR0UsYUFBUSxHQUFZO1lBQ2xCO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCLEdBQUcsRUFBRSx3RUFBd0U7Z0JBQzdFLEtBQUssRUFBRSwwQkFBMEI7YUFDbEM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxNQUFNLEVBQUUsV0FBVztnQkFDbkIsR0FBRyxFQUFFLHdFQUF3RTtnQkFDN0UsS0FBSyxFQUFFLDBCQUEwQjthQUNsQztZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixNQUFNLEVBQUUsU0FBUztnQkFDakIsR0FBRyxFQUFFLHdFQUF3RTtnQkFDN0UsS0FBSyxFQUFFLDBCQUEwQjthQUNsQztTQUNGLENBQUM7SUFrQ0osQ0FBQzs7OztJQWhDQyxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELElBQUk7UUFDRixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU8sWUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU8sWUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQXZERixVQUFVOzs7O0lBRVQsZ0NBQWdCOztJQUNoQixpQ0FtQkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhY2sge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBhcnRpc3Q6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBjb3Zlcjogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTZXJ2aWNlIHtcclxuICBjdXJyZW50OiBudW1iZXI7XHJcbiAgcGxheWxpc3Q6IFRyYWNrW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdEb25cXCd0IFdhbm5hIEZpZ2h0JyxcclxuICAgICAgYXJ0aXN0OiAnQWxhYmFtYSBTaGFrZXMnLFxyXG4gICAgICB1cmw6ICdodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy82MTU2Y2RiY2E0MjVhODk0OTcyYzAyZmNhOWQ3NmMwYjcwZTAwMWFmJyxcclxuICAgICAgY292ZXI6ICdhc3NldHMvaW1hZ2VzL2NvdmVyMS5qcGcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0hhcmRlcicsXHJcbiAgICAgIGFydGlzdDogJ0RhZnQgUHVuaycsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzkyYTA0YzdjMGU5NmJmOTNhMWIxYjFjYWU3ZGZmZjE5MjE5NjlhN2InLFxyXG4gICAgICBjb3ZlcjogJ2Fzc2V0cy9pbWFnZXMvY292ZXIyLmpwZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQ29tZSBUb2dldGhlcicsXHJcbiAgICAgIGFydGlzdDogJ0JlYXRsZXMnLFxyXG4gICAgICB1cmw6ICdodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy84MzA5MGE0ZGI2ODk5ZWFjYTY4OWFlMzVmNjkxMjZkYmU2NWQ5NGM5JyxcclxuICAgICAgY292ZXI6ICdhc3NldHMvaW1hZ2VzL2NvdmVyMy5qcGcnLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByYW5kb20oKTogVHJhY2sge1xyXG4gICAgdGhpcy5jdXJyZW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wbGF5bGlzdC5sZW5ndGgpO1xyXG4gICAgcmV0dXJuIHRoaXMucGxheWxpc3RbdGhpcy5jdXJyZW50XTtcclxuICB9XHJcblxyXG4gIG5leHQoKTogVHJhY2sge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0TmV4dFRyYWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcmV2KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJldlRyYWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5leHRUcmFjaygpOiBUcmFjayB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLnBsYXlsaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5jdXJyZW50ID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3VycmVudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnBsYXlsaXN0W3RoaXMuY3VycmVudF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFByZXZUcmFjaygpOiBUcmFjayB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucGxheWxpc3QubGVuZ3RoIC0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3VycmVudC0tO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnBsYXlsaXN0W3RoaXMuY3VycmVudF07XHJcbiAgfVxyXG59XHJcbiJdfQ==