import {
    eIdentityComponents,
    IdentityEntityActionContributors,
    IdentityUserDto,
  } from '@abp/ng.identity';
  import { EntityAction, EntityActionList } from '@abp/ng.theme.shared/extensions';
  
  const alertUserName = new EntityAction<IdentityUserDto>({
    text: 'Click Me!',
    action: data => {
      // Replace alert with your custom code
      alert(data.record.userName);
    },
    // See EntityActionOptions in API section for all options
  });
  
  export function alertUserNameContributor(actionList: EntityActionList<IdentityUserDto>) {
    actionList.addTail(alertUserName);
  }
  
  export const identityEntityActionContributors: IdentityEntityActionContributors = {
    // enum indicates the page to add contributors to
    [eIdentityComponents.Users]: [
      alertUserNameContributor,
      // You can add more contributors here
    ],
  };