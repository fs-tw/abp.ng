import { BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import execa = require('execa');
import * as path from 'path';
import { readFileSync } from 'fs';

interface Options extends JsonObject {
  symlinkConfig: string;
  args: string[];
}

export default createBuilder<Options>((options, context) => {
  return new Promise<BuilderOutput>(async (resolve) => {
    const systemRoot = context.workspaceRoot;
    const symlinkConfigPath = options.symlinkConfig
      ? path.resolve(systemRoot, options.symlinkConfig)
      : '';

    let buildActions = JSON.parse(getFileContents(symlinkConfigPath));
    console.log(`//////////////////////////////////////////`);
    console.log(`Task Executing ...`);

    for (let i = 0; i < buildActions.length; i++) {
      let job = buildActions[i];
      await doJob(job);
    }
    console.log(`//////////////////////////////////////////`);
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
async function doJob(buildAction: any) {
  let buildPackages = buildAction.packages.filter((x: any) => !buildAction.ignore_packages || buildAction.ignore_packages.indexOf(x) == -1);
  console.log('----------------------------------------------');
  console.log(`Building packages: ${buildPackages.join(',')}`);

  let commands=buildPackages.map((packName:any)=>{
    return  [
      'ng',
      'build',
      packName,
      '--prod'
    ];
  });
  if(buildAction.sync){
    commands.forEach((command:any)=>{
      execa.sync('yarn', command);
      console.log(`\n${command[2]} successfully built.`);    
    });
  }
  else{
    await Promise.all(commands.map(async (command:any)=>{
      await execa('yarn',command);
      console.log(`\n${command[2]} successfully built.`);    
    }));
  }
}