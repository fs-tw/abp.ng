import { BuilderOutput, createBuilder } from '@angular-devkit/architect';
import * as childProcess from 'child_process';
import { JsonObject } from '@angular-devkit/core';
import execa from 'execa';

interface Options extends JsonObject {
  command: string;
  args: string[];
}

export default createBuilder<Options>((options, context) => {
  return new Promise<BuilderOutput>(async (resolve, reject) => {

    context.reportStatus(`Executing "${options.command}"...`);  

    await execa(options.command, options.args, { stdout: 'inherit', cwd: './' });
    
    context.reportStatus(`Done.`);

    resolve({ success: true });
    // const child = childProcess.spawn('yarn', ['symlink','copy', '--angular', '--no-watch' ,'--sync' ,'--packages', '@abp/ng.core'], { stdio: 'pipe',cwd: './' });

    // child.stdout.on('data', (data) => {
    //   context.logger.info(data.toString());
    // });
    // child.stderr.on('data', (data) => {
    //   context.logger.error(data.toString());
    //   reject();
    // });

    // context.reportStatus(`Done.`);
    // child.on('close', code => {
    //   resolve({ success: code === 0 });
    // });
  });
});
