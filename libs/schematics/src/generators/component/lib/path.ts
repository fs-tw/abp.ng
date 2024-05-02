import {
  joinPathFragments,
  workspaceRoot,
} from '@nx/devkit';
import { basename, dirname, relative } from 'path';

export function pathStartsWith(path1: string, path2: string): boolean {
  const normalizedPath1 = joinPathFragments(workspaceRoot, path1);
  const normalizedPath2 = joinPathFragments(workspaceRoot, path2);

  return normalizedPath1.startsWith(normalizedPath2);
}

export function getRelativeImportToFile(
  sourceFilePath: string,
  targetFilePath: string
): string {
  const relativeDirToTarget = relative(
    dirname(sourceFilePath),
    dirname(targetFilePath)
  );

  return `./${joinPathFragments(
    relativeDirToTarget,
    basename(targetFilePath, '.ts')
  )}`;
}




