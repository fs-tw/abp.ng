import type { ProjectConfiguration } from '@nx/devkit';

export type AngularProjectConfiguration = ProjectConfiguration & {
  prefix?: string;
};


export type InputOptions = {
  name: string;
  namePostFix?: string;
  directory: string;
  project: string;
  path?: string;
  type?: string;
};
