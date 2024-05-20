import { signalStoreFeature } from '@ngrx/signals';
import {
  eOrganizationUnitNames,
  organizationUnitProxy,
} from './organization-unit.types';
import { organizationUnitDefaults } from './organization-unit.default';
import { withDefaults } from '../../../shared/defaults.feature';
import { withListService } from '../../../shared/list.feature';
import { withEditModal } from '../../../shared/edit-modal.feature';

export function withOrganizationUnit() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eOrganizationUnitNames.OrganizationUnit,
      defaults: organizationUnitDefaults,
    }),
    withListService({
      collection: 'organizationUnit',
      list: organizationUnitProxy.list,
    }),

    withEditModal({
      collection: 'organizationUnit',
      extensionsIdentifier: eOrganizationUnitNames.OrganizationUnit,
      get: organizationUnitProxy.get,
      create: organizationUnitProxy.create,
      update: organizationUnitProxy.update,
    })
  );
}
