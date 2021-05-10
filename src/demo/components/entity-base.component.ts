import { Component, OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { eIdentityComponents, IdentityUserService } from '@abp/ng.identity';

@Component({
  template: `
    <fs-tw-entity-base
      title="AbpIdentity::Users"
      [streamCreator]="streamCreator"
    >
    </fs-tw-entity-base>
  `,
  styles: [],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityComponents.Users,
    },
  ],
})
export class EntityBaseComponent implements OnInit {
  streamCreator = (q) => {
    return this.service.getList(q);
  };
  constructor(public list: ListService, public service: IdentityUserService) {}

  ngOnInit(): void {}
}
