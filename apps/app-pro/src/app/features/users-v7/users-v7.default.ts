import { ToolbarAction } from '@abp/ng.components/extensible';
import { UsersV7Store } from './users-v7.store';
import { Location } from '@angular/common';

export const TOOLBAR_ACTIONS = ToolbarAction.createMany([
  {
    text: 'AbpUi::Back',
    action: (data) => {
      data.getInjected(Location).back();
    },
    permission: '',
    icon: 'fa fa-arrow-left',
    visible: (data) => {
      const usersV7Store = data?.getInjected(UsersV7Store);
      const isMatch = usersV7Store?.routes.IsMatch() as boolean;
      return !isMatch;
    },
  }
]);
export const usersV7Defaults = {
  toolbarActions: TOOLBAR_ACTIONS
};
