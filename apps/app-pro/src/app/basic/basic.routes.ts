import { BasicComponent } from './basic.component';
import { provideBasic } from './basic.provide';

export default [
  {
    path: '',
    component: BasicComponent,
    providers: [provideBasic()],
  },
];
