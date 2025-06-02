import { normalizePath, joinPathFragments } from '@nx/devkit';
import { InputOptions } from './types';

export class OptionsBuilder {
  private option: InputOptions;
  private result: any = {};

  constructor(option: InputOptions) {
    this.option = option;
  }

  withSharedPath() {
    const parsedName = normalizePath(this.option.name).split('/');
    const nameLength = parsedName.filter((x) => x.trim().length !== 0).length;
    const parsedDirectory = normalizePath(this.option.directory).split('/');
    const directoryLength = parsedDirectory.filter(
      (x) => x.trim().length !== 0
    ).length;
    this.result.sharedPath = joinPathFragments(
      getRelationPath(nameLength + directoryLength),
      'shared'
    );
    return this;
  }

  build() {
    return this.result;
  }
}

function getRelationPath(length: number): string {
  return [...Array(length)].map(() => '../').join('');
}
