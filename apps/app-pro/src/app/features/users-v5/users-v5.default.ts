import { Location } from '@angular/common';
import { ToolbarAction } from '@abp/ng.components/extensible';
import { UsersV5Store } from './users-v5.store';

export const TOOLBAR_ACTIONS = ToolbarAction.createMany([
  {
    text: 'AbpUi::Back',
    action: (data) => {
      data.getInjected(Location).back();
    },
    permission: '',
    icon: 'fa fa-arrow-left',
    visible: (data) => {
      const usersV5Store = data?.getInjected(UsersV5Store);
      const isMatch = usersV5Store?.usersV5Routes.IsMatch() as boolean;
      return !isMatch;
    },
  },
]);

export const usersV5Defaults = {
  toolbarActions: TOOLBAR_ACTIONS,
};
