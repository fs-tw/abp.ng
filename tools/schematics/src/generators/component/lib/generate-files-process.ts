import { Tree, generateFiles, joinPathFragments, names } from '@nx/devkit';
import { ComponentGeneratorSchema, ComponentKind } from '../schema';
// import { executeExtensions } from './entity-process';

export async function preGenerateFiles(
  tree: Tree,
  rawOptions: ComponentGeneratorSchema,
  options: {
    rootNames: {
      fileName: string;
      name: string;
      className: string;
      propertyName: string;
      constantName: string;
    };
    storeNames: {
      fileName: string;
      name: string;
      className: string;
      propertyName: string;
      constantName: string;
    };
    componentType: ComponentKind;
    project: string;
    prefix: string;
    pageWrap: boolean;
    navStyle: string;
    name: string;
    names: {
      name: string;
      className: string;
      propertyName: string;
      constantName: string;
      fileName: string;
    };
    directory: string;
    path: string;
    relationPath: string;
    sharedPath: string;
    resourceName: string;
    selector: string;
  }
) {
  switch (options.componentType) {
    case 'routes':
      if (options.path.trim().length !== 0)
        throw new Error(
          'routes of ComponentType is not allowed to in sub directory, please use other ComponentType instead.'
        );
      break;
    case 'entity':
      break;
    case 'form':
      if (options.path.trim().length === 0)
        throw new Error(
          'form of ComponentType is not allowed to in root directory, please use routes or tabs ComponentType first.'
        );
      break;
    case 'modal':
      if (options.path.trim().length === 0)
        throw new Error(
          'form of ComponentType is not allowed to in root directory, please use routes or tabs ComponentType first.'
        );
      break;
    case 'tabs':
      break;
    case 'tree':
      break;
    case 'nz-select':
      break;
  }
  generateFiles(
    tree,
    joinPathFragments(__dirname, '../', `files/__root__`),
    options.directory,
    options
  );
  return options;
}

export async function postGenerateFiles(
  tree: Tree,
  rawOptions: ComponentGeneratorSchema,
  options: {
    rootNames: {
      fileName: string;
      name: string;
      className: string;
      propertyName: string;
      constantName: string;
    };
    storeNames: {
      fileName: string;
      name: string;
      className: string;
      propertyName: string;
      constantName: string;
    };
    componentType: ComponentKind;
    project: string;
    prefix: string;
    pageWrap: boolean;
    navStyle: string;
    name: string;
    names: {
      name: string;
      className: string;
      propertyName: string;
      constantName: string;
      fileName: string;
    };
    directory: string;
    path: string;
    relationPath: string;
    sharedPath: string;
    resourceName: string;
    selector: string;
  }
) {
  //let ignoreDeleteStore = false;
  switch (options.componentType) {
    case 'routes':
      break;
    case 'entity':
      // await executeExtensions(tree, rawOptions);
      break;
    case 'form':
      //  ignoreDeleteStore = true;
      // await executeExtensions(tree, rawOptions);
      break;
    case 'modal':
      break;
    case 'tabs':
      break;
    case 'tree':
      break;
    case 'nz-select':
      //     ignoreDeleteStore = true;
      break;
  }
  if (options.path.trim().length !== 0) {
    tree.delete(
      joinPathFragments(
        options.directory,
        `${options.names.name}.localizations.ts`
      )
    );

    //  if (!ignoreDeleteStore)
    //      tree.delete(joinPathFragments(options.directory, `${options.names.name}.store.ts`));

    tree.delete(
      joinPathFragments(options.directory, `${options.names.name}.provide.ts`)
    );
    tree.delete(
      joinPathFragments(options.directory, `${options.names.name}.routes.ts`)
    );
  }
}
