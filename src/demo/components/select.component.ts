import { Component, OnInit } from '@angular/core';
//import { IdentityUserService, GetIdentityUsersInput } from '@abp/ng.identity';
import { map } from 'rxjs/operators';
import { NzSelectOption } from '@fs-tw/theme-alain/shared/extensions';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'fs-tw-select',
  template: `
    <nz-select
      nzMode="multiple"
      [default]="streamCreator"
      [(ngModel)]="selectedUserId"
      (selectedItemChange)="onSelectChange($event)"
    ></nz-select>
  `,
  styles: [],
})
export class SelectComponent implements OnInit {
  //constructor(private service: IdentityUserService) {}
  selectedUserId : Array<string>|string= ['0d379bb0-f973-05b1-d6d3-39fb93c005b6'];
  //streamCreator = (query: GetIdentityUsersInput) => {
    

    // let getById$ = !!this.selectedUserId
    //   ? this.service.get(this.selectedUserId[0])
    //   : of(null);

    // let getList$ = this.service.getList(query);

    // return forkJoin([getById$, getList$]).pipe(
    //   map(([getById, getList]) => {
    //     let items = getList.items;
    //     if (
    //       !!getById &&
    //       getList.items.findIndex((x) => x.id === getById?.id) === -1
    //     ) {
    //       items = [getById, ...getList.items];
    //     }
    //     return {
    //       totalCount: items.length,
    //       items: items.map((y) => new NzSelectOption(y, y.id, y.name)),
    //     };
    //   })
    // );

    // return this.service.getList(query).pipe(
    //   map((x) => {
    //     let result = {
    //       totalCount: x.totalCount,
    //       items: x.items.map((y) => new NzSelectOption(y, y.id, y.name)),
    //     };
    //     return result;
    //   })
    // );
  //};

  onSelectChange(data) {
    console.log(data);
  }

  ngOnInit(): void {


  }
}
