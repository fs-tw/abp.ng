import type { ProjectConfiguration } from '@nx/devkit';

export type AngularProjectConfiguration = ProjectConfiguration & {
  prefix?: string;
};

export type InputOptions = {
  name: string;
  directory: string;
  project: string;
  path?: string;
  type?: string;
};

export type OutputOptions = {
  directory: string;
  fileName: string;
  name: string;
  path: string;
  relationPath: string;
  resourceName: string;
};