import { __decorate, __metadata } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
let NgxDatatableDefaultDirective = class NgxDatatableDefaultDirective {
    constructor(table) {
        this.table = table;
        this.class = 'material bordered';
        this.table.columnMode = ColumnMode.force;
        this.table.footerHeight = 50;
        this.table.headerHeight = 50;
        this.table.rowHeight = 'auto';
        this.table.scrollbarH = true;
        this.table.virtualization = false;
    }
    get classes() {
        return `ngx-datatable ${this.class}`;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxDatatableDefaultDirective.prototype, "class", void 0);
__decorate([
    HostBinding('class'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], NgxDatatableDefaultDirective.prototype, "classes", null);
NgxDatatableDefaultDirective = __decorate([
    Directive({
        // tslint:disable-next-line
        selector: 'ngx-datatable[default]',
        exportAs: 'ngxDatatableDefault',
    }),
    __metadata("design:paramtypes", [DatatableComponent])
], NgxDatatableDefaultDirective);
export { NgxDatatableDefaultDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1kZWZhdWx0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2RpcmVjdGl2ZXMvbmd4LWRhdGF0YWJsZS1kZWZhdWx0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU96RSxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtJQVF2QyxZQUFvQixLQUF5QjtRQUF6QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQVBwQyxVQUFLLEdBQUcsbUJBQW1CLENBQUM7UUFRbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFYRCxJQUFJLE9BQU87UUFDVCxPQUFPLGlCQUFpQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkMsQ0FBQztDQVVGLENBQUE7QUFmVTtJQUFSLEtBQUssRUFBRTs7MkRBQTZCO0FBR3JDO0lBREMsV0FBVyxDQUFDLE9BQU8sQ0FBQzs7OzJEQUdwQjtBQU5VLDRCQUE0QjtJQUx4QyxTQUFTLENBQUM7UUFDVCwyQkFBMkI7UUFDM0IsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxRQUFRLEVBQUUscUJBQXFCO0tBQ2hDLENBQUM7cUNBUzJCLGtCQUFrQjtHQVJsQyw0QkFBNEIsQ0FnQnhDO1NBaEJZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbHVtbk1vZGUsIERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHNlbGVjdG9yOiAnbmd4LWRhdGF0YWJsZVtkZWZhdWx0XScsXHJcbiAgZXhwb3J0QXM6ICduZ3hEYXRhdGFibGVEZWZhdWx0JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERhdGF0YWJsZURlZmF1bHREaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIGNsYXNzID0gJ21hdGVyaWFsIGJvcmRlcmVkJztcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGNsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgbmd4LWRhdGF0YWJsZSAke3RoaXMuY2xhc3N9YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudCkge1xyXG4gICAgdGhpcy50YWJsZS5jb2x1bW5Nb2RlID0gQ29sdW1uTW9kZS5mb3JjZTtcclxuICAgIHRoaXMudGFibGUuZm9vdGVySGVpZ2h0ID0gNTA7XHJcbiAgICB0aGlzLnRhYmxlLmhlYWRlckhlaWdodCA9IDUwO1xyXG4gICAgdGhpcy50YWJsZS5yb3dIZWlnaHQgPSAnYXV0byc7XHJcbiAgICB0aGlzLnRhYmxlLnNjcm9sbGJhckggPSB0cnVlO1xyXG4gICAgdGhpcy50YWJsZS52aXJ0dWFsaXphdGlvbiA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=