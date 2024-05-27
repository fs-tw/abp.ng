import { Location } from '@angular/common';
import { ToolbarAction } from '@abp/ng.components/extensible';
import { UsersV3Store } from './users-v3.store';

export const TOOLBAR_ACTIONS = ToolbarAction.createMany([
  {
    text: 'AbpUi::Back',
    action: (data) => {
      data.getInjected(Location).back();
    },
    permission: '',
    icon: 'fa fa-arrow-left',
    visible: (data) => {
      const usersV3Store = data?.getInjected(UsersV3Store);
      const isMatch = usersV3Store?.usersV3Routes.IsMatch() as boolean;
      return !isMatch;
    },
  },
]);

export const usersV3Defaults = {
  toolbarActions: TOOLBAR_ACTIONS,
};
