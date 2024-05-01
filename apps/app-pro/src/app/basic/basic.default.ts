import {
  ExtensionsService,
  mergeWithDefaultActions,
  ToolbarAction,
} from '@abp/ng.components/extensible';
import { BasicComponent } from './basic.component';
import { eBasicNames } from './basic.model';

export const TOOLBAR_ACTIONS = ToolbarAction.createMany<unknown>([
  {
    text: 'AbpIdentity::NewRole',
    action: (data) => {
      console.log(data);
      const component = data.getInjected(BasicComponent);
      //component.onAdd();
    },
    permission: 'AbpIdentity.Roles.Create',
    icon: 'fa fa-plus',
  },
]);

export function MergeDefaultsBasic(extensions: ExtensionsService) {
  mergeWithDefaultActions(extensions.toolbarActions, {
    [eBasicNames.Basic]: TOOLBAR_ACTIONS,
  });
}
