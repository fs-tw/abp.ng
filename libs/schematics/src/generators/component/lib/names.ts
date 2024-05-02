import { normalizePath, names } from '@nx/devkit';

export type NameInfo = {
  name: string,
  path: string,
  relationPath: string,
  resourceName: string
};

export function parseNameWithPath(rawName: string): NameInfo {

  const parsedName = normalizePath(rawName).split('/');
  const name = parsedName.pop();
  const path = parsedName.join('/');

  const length = parsedName.length + 1;

  const relationPath = [...Array(length)].map(() => '../').join('');

  const resourceName = names(parsedName.length === 0 ? rawName : parsedName[0]).className;

  return {
    name,
    path,
    relationPath,
    resourceName
  };
}
