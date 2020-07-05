import { BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import execa = require('execa');
import * as path from 'path';
import { readFileSync } from 'fs';
import { Log } from '../utils/log';

interface Options extends JsonObject {
  symlinkConfig: string;
  args: string[];
}
let spinner = Log.spinner('Processing...');
export default createBuilder<Options>((options, context) => {
  return new Promise<BuilderOutput>(async (resolve) => {
    const systemRoot = context.workspaceRoot;
    const symlinkConfigPath = options.symlinkConfig
      ? path.resolve(systemRoot, options.symlinkConfig)
      : '';

    let buildActions = JSON.parse(getFileContents(symlinkConfigPath));
    Log.primary(`\nTask Executing ...`);
    for (let i = 0; i < buildActions.length; i++) {
      let job = buildActions[i];
      await doJob(job);
    }
    Log.primary(`Task Done.`);

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
async function doJob(buildAction: any) {

  let buildPackages = buildAction.packages.filter((x: any) => !buildAction.ignore_packages || buildAction.ignore_packages.indexOf(x) == -1);
  let commands = buildPackages.map((packName: any) => {
    return [
      'ng',
      'build',
      packName,
      '--prod'
    ];
  });
  Log.info(`\nBuilding packages(${buildAction.sync ? "sync" : "async"}): ${buildPackages.join(',')}`);
  spinner.start();
  if (buildAction.sync) {
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i];
      try {
        await execa('yarn', command);
        Log.success(`${command[2]} successfully built.`);
      } catch (error) {
        Log.error(`"${command[2]}" ERR!!!.Rebuild again in ng command`);
        process.exit(1);
        return;
      }
    }
  }
  else {
    await Promise.all(commands.map(async (command: any) => {
      try {
        await execa('yarn', command);
        Log.success(`${command[2]} successfully built.`);
      } catch (error) {
        Log.error(`"${command[2]}" ERR!!!.Rebuild again in ng command`);
        process.exit(1);
        return;
      }

    }));
  }
}