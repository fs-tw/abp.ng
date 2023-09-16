import { ABP } from '@abp/ng.core';
import { DemoDetailsComponent } from './demo-details.component';
import {
  eDemoDetailsNames,
  eDemoDetailsPolicyNames,
} from './demo-details.model';

export const DemoDetailsTab: ABP.Tab = {
  name: eDemoDetailsNames.DemoDetails,
  order: 1,
  requiredPolicy: eDemoDetailsPolicyNames.DemoDetails,
  component: DemoDetailsComponent,
};
