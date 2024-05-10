import { normalizePath, names } from '@nx/devkit';
import { InputOptions } from './types';

export type NameInfo = {
  name: string,
  path: string,
  relationPath: string,
  resourceName: string
};

export function parseNameWithPath(option: InputOptions): NameInfo {

  const parsedName = normalizePath(option.name).split('/');
  const nameLength = parsedName.filter(x => x.trim().length !== 0).length;
  const parsedDirectory = normalizePath(option.directory).split('/');
  const DirectoryLength = parsedDirectory.filter(x => x.trim().length !== 0).length;
  const resourceName = names(parsedName[0]).className;

  const name = parsedName.pop();
  const path = parsedName.join('/');

  console.log(nameLength, DirectoryLength);

  const relationPath = [...Array(nameLength - 1 + DirectoryLength)].map(() => '../').join('');

  return {
    name,
    path,
    relationPath,
    resourceName
  };
}
