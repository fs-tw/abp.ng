import {
    eIdentityComponents,
    IdentityEntityPropContributors,
    IdentityUserDto,
  } from '@abp/ng.identity';
  import { EntityProp, EntityPropList, ePropType } from '@abp/ng.theme.shared/extensions';
  
  const nameProp = new EntityProp<IdentityUserDto>({
    type: ePropType.String,
    name: 'name',
    displayName: 'AbpIdentity::Name',
    sortable: true,
    columnWidth: 250,
  });
  
  export function namePropContributor(propList: EntityPropList<IdentityUserDto>) {
    propList.addAfter(nameProp, 'userName', (value, name) => value.name === name);
  }
  
  export const identityEntityPropContributors: IdentityEntityPropContributors = {
    // enum indicates the page to add contributors to
    [eIdentityComponents.Users]: [
      namePropContributor,
      // You can add more contributors here
    ],
  };