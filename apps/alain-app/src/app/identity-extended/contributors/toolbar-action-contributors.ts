import {
  eIdentityComponents,
  IdentityToolbarActionContributors,
  IdentityUserDto,
} from '@abp/ng.identity';
import {
  ToolbarAction,
  ToolbarActionList,
} from '@abp/ng.theme.shared/extensions';

const logUserNames = new ToolbarAction<IdentityUserDto[]>({
  text: 'Click Me!',
  action: (data) => {
    // Replace log with your custom code
    data.record.forEach((user) => console.log(user.userName));
  },
  // See ToolbarActionOptions in API section for all options
});

export function logUserNamesContributor(
  actionList: ToolbarActionList<IdentityUserDto[]>
) {
  actionList.addHead(logUserNames);
}

export const identityToolbarActionContributors: IdentityToolbarActionContributors = {
  // enum indicates the page to add contributors to
  [eIdentityComponents.Users]: [
    logUserNamesContributor,
    // You can add more contributors here
  ],
};
