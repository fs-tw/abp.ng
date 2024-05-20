import { Type } from '@abp/ng.schematics/models';
import { ChangeType, Tree, applyChangesToString, joinPathFragments } from '@nx/devkit';
import { ensureTypescript } from '@nx/js/src/utils/typescript/ensure-typescript';
import { tsquery } from '@phenomnomnominal/tsquery';
import { camel } from '@abp/ng.schematics/utils'
import ts = require('typescript');
import { ExtensionsGeneratorSchema } from '../schema';
//import { addProviderToRoute as nxAddProviderToRoute } from '@nx/angular/utils';
export const enum Variable {
  ENTITY_PROPS = 'ENTITY_PROPS',
  CREATE_FORM_PROPS = 'CREATE_FORM_PROPS',
  EDIT_FORM_PROPS = 'EDIT_FORM_PROPS',
}

let tsModule: typeof import('typescript');

const defaultIgnoreProperties = ['TenantId', 'ConcurrencyStamp'];

const typeMap: Record<string, string> = {
  'System.DateTime?': 'ePropType.String',
  'System.DateTime': 'ePropType.String',
  "System.DateTimeOffset?": 'ePropType.DateTime',
  "System.DateTimeOffset": 'ePropType.DateTime',
  'System.Boolean': 'ePropType.Boolean',
  "System.Guid?": 'ePropType.String',
  "System.Guid": 'ePropType.String',
  "System.String": 'ePropType.String',
  "System.Int32": 'ePropType.Number',
  "System.Int64": 'ePropType.Number',
  "System.Int16": 'ePropType.Number',
  "System.Double": 'ePropType.Number',
  "System.Single": 'ePropType.Number',
  "System.Decimal": 'ePropType.Number'
};
const defaultMap: Record<string, string> = {
  'System.Boolean': 'false'
};

export function addEntityPropToDefault(
  tree: Tree,
  fileName: string,
  type: Type & { name: string },
  options: ExtensionsGeneratorSchema & {
    rootNames: {
      fileName: string;
      name: string;
      className: string;
      propertyName: string;
      constantName: string;
    }
  }
) {
  if (!tsModule) {
    tsModule = ensureTypescript();
  }
  const contents = tree.read(fileName, 'utf-8');

  const ast = tsquery.ast(contents);

  const PROPS_SELECTOR =
    `VariableDeclaration:has(Identifier[name=${options.variable}])  PropertyAssignment:has(Identifier[name=name])`;

  const entityPropNodes = tsquery(ast, PROPS_SELECTOR, {
    visitAllChildren: true,
  });



  const _ignoreProperties = [
    ...defaultIgnoreProperties.map(x => camel(x)),
    //...ignoreProperties.map(x => camel(x)),
    ...entityPropNodes.map(x => (x as ts.PropertyAssignment).initializer.getText().replace(/'/g, '')),
    ...type.properties.filter(x => Object.keys(typeMap).find(y => y === x.type) === undefined).map(x => camel(x.name))
  ];

  const insertPropertiesTexts = type.properties.filter(x => _ignoreProperties.findIndex((y) => y === camel(x.name)) === -1).map(x => {

    switch (options.variable) {
      case Variable.ENTITY_PROPS:
        return `{
          name: '${camel(x.name)}',
          type: ${typeMap[x.type] || 'ePropType.String'},
          displayName: \`\${resourceName}::${x.name}\`,
          sortable: true,
          columnWidth: 100
        }`;
      case Variable.CREATE_FORM_PROPS:
        return `{
          id: '${camel(x.name)}',
          name: '${camel(x.name)}',
          type: ${typeMap[x.type] || 'ePropType.String'},
          displayName: \`\${resourceName}::${x.name}\`,
          defaultValue: ${defaultMap[x.type] ? 'false' : 'undefined'},
          validators: () => [${x.isRequired ? 'Validators.required' : ''}],
        }`;
      case Variable.EDIT_FORM_PROPS:
        return `{
          id: '${camel(x.name)}',
          name: '${camel(x.name)}',
          type: ${typeMap[x.type] || 'ePropType.String'},
          displayName: \`\${resourceName}::${x.name}\`,
          defaultValue: ${defaultMap[x.type] ? 'false' : 'undefined'},            
          validators: () => [${x.isRequired ? 'Validators.required' : ''}],
        }`;

    }
  });

  const PROPS_ARRAY =
    `VariableDeclaration:has(Identifier[name=${options.variable}])  ArrayLiteralExpression:has(Identifier[name=name])`;

  const propArray = tsquery(ast, PROPS_ARRAY, {
    visitAllChildren: true,
  });

  if (insertPropertiesTexts.length === 0)
    return;



  const insertIndex = propArray.reverse()[0].getEnd() - 1;

  const prefix = contents
    .slice(0, insertIndex)
    .trim()
    .endsWith(',')
    ? ''
    : ', '

  const newContents = applyChangesToString(contents, [
    {
      type: ChangeType.Insert,
      index: insertIndex,
      text: prefix + insertPropertiesTexts.join(',\n')
    },
  ]);

  tree.write(fileName, newContents);
}
