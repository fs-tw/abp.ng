import { __decorate, __metadata } from "tslib";
import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
let InitDirective = class InitDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.init = new EventEmitter();
    }
    ngAfterViewInit() {
        this.init.emit(this.elRef);
    }
};
__decorate([
    Output('abpInit'),
    __metadata("design:type", Object)
], InitDirective.prototype, "init", void 0);
InitDirective = __decorate([
    Directive({ selector: '[abpInit]' }),
    __metadata("design:paramtypes", [ElementRef])
], InitDirective);
export { InitDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9pbml0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHM0YsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUd4QixZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBRlQsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO0lBRS9CLENBQUM7SUFFekMsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQTtBQVBvQjtJQUFsQixNQUFNLENBQUMsU0FBUyxDQUFDOzsyQ0FBcUQ7QUFENUQsYUFBYTtJQUR6QixTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUM7cUNBSVIsVUFBVTtHQUgxQixhQUFhLENBUXpCO1NBUlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thYnBJbml0XScgfSlcclxuZXhwb3J0IGNsYXNzIEluaXREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAT3V0cHV0KCdhYnBJbml0JykgcmVhZG9ubHkgaW5pdCA9IG5ldyBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZjxhbnk+PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXQuZW1pdCh0aGlzLmVsUmVmKTtcclxuICB9XHJcbn1cclxuIl19