import { chain, Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import * as execa from 'execa'
import { readJsonInTree } from '@nrwl/workspace';
import { Log } from './utils/log';

let spinner: any;
export default function (schema: any): Rule {
  spinner = Log.spinner('Processing...');
  return chain([
    updateNx
  ]);
}
const updateNx = async (host: Tree, context: SchematicContext) => {
    let buildActions=readJsonInTree<any>(host, './symlink.json');
    Log.primary(`Task Start.`);
    for (let i = 0; i < buildActions.length; i++) {
      let job = buildActions[i];
      await doJob(job);
    }
    Log.primary(`Task Done.`);
    spinner.stop();
    return Promise.resolve();
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