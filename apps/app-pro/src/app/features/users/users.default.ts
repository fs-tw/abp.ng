import {
  ExtensionsService,
  mergeWithDefaultActions,
  ToolbarAction,
} from '@abp/ng.components/extensible';
import { UsersComponent } from './users.component';
import { eUsersNames } from './users.model';

export const TOOLBAR_ACTIONS = ToolbarAction.createMany([
  {
    text: 'Users::New',
    action: (data) => {
      const component = data.getInjected(UsersComponent);
      //component.onAdd();
    },
    permission: '',
    icon: 'fa fa-plus',
  },
]);

export function MergeDefaultsUsers(extensions: ExtensionsService) {
  mergeWithDefaultActions(extensions.toolbarActions, {
    [eUsersNames.Users]: TOOLBAR_ACTIONS,
  });
}
