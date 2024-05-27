import { ToolbarAction } from '@abp/ng.components/extensible';

export const TOOLBAR_ACTIONS = ToolbarAction.createMany([
  {
    text: 'AbpUi::AddNew',
    action: (data) => {
      console.log(data);
    },
    permission: '',
    icon: 'fa fa-plus',
  },
]);

export const userSettingsDefaults = {
  toolbarActions: TOOLBAR_ACTIONS,
};
