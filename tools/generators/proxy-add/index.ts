import {
  Tree,
  formatFiles,
  installPackagesTask,
  moveFilesToNewDirectory,
  visitNotIgnoredFiles,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { wrapAngularDevkitSchematic } from '@nrwl/devkit/ngcli-adapter';

export default async function (host: Tree, schema: any) {
  let module=schema.module;
  let application=schema.application;
  let library=schema.library;
  let runAngularLibrarySchematic = wrapAngularDevkitSchematic(
    '@abp/ng.schematics',
    'proxy-add'
  );

  await runAngularLibrarySchematic(host, {
    module: module,
    source: application,
    target: application
  });

  moveFilesToNewDirectory(
    host,
    `apps\\${application}\\src\\app\\proxy`,
    `libs\\${library}\\proxy\\${module}\\src`
  );

  generateFiles(
    host,
    joinPathFragments(__dirname, '.', './files'),
    `libs\\${library}\\proxy\\${module}`,
    {
      tmpl: '',
    }
  );

  return () => {
    console.log(`proxy added '${module} to ${library} success at ${application}`);
  };
}
