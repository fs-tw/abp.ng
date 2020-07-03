import { BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import execa from 'execa';
import * as path from 'path';
import { readFileSync } from 'fs';

interface Options extends JsonObject {
  symlinkConfig: string;
  args: string[];
}

export default createBuilder<Options>((options, context) => {
  return new Promise<BuilderOutput>(async (resolve, reject) => {
    const systemRoot = context.workspaceRoot;
    const symlinkConfigPath = options.symlinkConfig
    ? path.resolve(systemRoot, options.symlinkConfig)
    : null;

    let buildActions=JSON.parse(getFileContents(symlinkConfigPath));
    console.log(`Task Executing ...`);

    for (var i = 0; i < buildActions.length; i++) {
      console.log(`"${buildActions[i].name}" Symlink building ...`);
      let buildPackages=buildActions[i].packages.filter(x=>!buildActions[i].ignore_packages || buildActions[i].ignore_packages.indexOf(x)==-1);
      await execa(
        'yarn',
        [
          'symlink',
          'copy',
          '--angular',
          '--prod',
          '--yarn',
          '--no-watch',
          buildActions[i].sync ? '--sync' : '',
          '--packages',
          buildPackages.join(',')
        ],
        { stdout: 'inherit', cwd: './' },
      );
      console.log(`"${buildActions[i].name}" Symlink done ...`);
    }
    console.log(`Task Done.`);

    resolve({ success: true });
  });
});
function getFileContents(file: string): string {
  try {
    return readFileSync(file, 'utf-8');
  } catch {
    throw new Error(`Could not read file '${file}'.`);
  }
}
