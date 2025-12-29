import { DetailType } from '../../schema';

export interface EnsureComponentParams {
  directory: string;
  name: string;
  project: string;
  prefix?: string;
  filesRoot: string;
  // Split-view specific
  detailType?: DetailType;
}
