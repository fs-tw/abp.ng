import { normalizePath, names, joinPathFragments } from '@nx/devkit';
import { InputOptions } from './types';

export function parseNameWithPath(option: InputOptions) {

  const parsedName = normalizePath(option.name).split('/');
  const nameLength = parsedName.filter(x => x.trim().length !== 0).length;
  const parsedDirectory = normalizePath(option.directory).split('/');
  const directoryLength = parsedDirectory.filter(x => x.trim().length !== 0).length;
  const resourceName = names(parsedName[0]).className;

  const rootNames = {
    ...names(parsedName[0]),
    ...{
      fileName: joinPathFragments(getRelationPath(nameLength - 1), names(parsedName[0]).fileName)
    }
  };

  const name = parsedName.pop();

  const storeNames = {
    ...names(name + '.store')
  };

  const path = parsedName.join('/');

  const relationPath = getRelationPath(nameLength - 1 + directoryLength);

  const sharedPath = joinPathFragments(getRelationPath(nameLength + directoryLength), 'shared');

  return {
    rootNames,
    storeNames,
    name,
    path,
    relationPath,
    sharedPath,
    resourceName
  };
}

function getRelationPath(length: number): string {
  return [...Array(length)].map(() => '../').join('');
}

