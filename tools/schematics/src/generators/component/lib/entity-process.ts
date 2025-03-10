import { Tree } from "@nx/devkit";
import extensionsGenerator from "../../extensions/generator";
import { ComponentGeneratorSchema } from "../schema";

export async function executeExtensions(
    tree: Tree,
    rawOptions: ComponentGeneratorSchema
) {
    if (rawOptions.url.trim().length === 0)
        return;

    //"ENTITY_PROPS", "CREATE_FORM_PROPS", "EDIT_FORM_PROPS"
    if (rawOptions.entityType.trim().length !== 0)
        await extensionsGenerator(tree, {
            directory: rawOptions.directory,
            url: rawOptions.url,
            project: rawOptions.project,
            name: rawOptions.name,
            type: rawOptions.entityType,
            variable: 'ENTITY_PROPS'
        });

    if (rawOptions.createFormType.trim().length !== 0)
        await extensionsGenerator(tree, {
            directory: rawOptions.directory,
            url: rawOptions.url,
            project: rawOptions.project,
            name: rawOptions.name,
            type: rawOptions.createFormType,
            variable: 'CREATE_FORM_PROPS'
        });

    if (rawOptions.editFormType.trim().length !== 0)
        await extensionsGenerator(tree, {
            directory: rawOptions.directory,
            url: rawOptions.url,
            project: rawOptions.project,
            name: rawOptions.name,
            type: rawOptions.editFormType,
            variable: 'EDIT_FORM_PROPS'
        });

}