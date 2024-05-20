/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @typescript-eslint/ban-types */
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.components/extensible';
import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef,
    ViewRef,
} from '@angular/core';
import '@angular/compiler';

@Directive({ selector: '[appExtensionsIdentifier]', standalone: true })
export class ExtensionsIdentifierRenderDirective {
    constructor(
        private readonly template: TemplateRef<{}>,
        private readonly viewContainer: ViewContainerRef
    ) { }

    value!: string;

    private view!: ViewRef;

    @Input()
    set appExtensionsIdentifier(value: string) {
        this.value = value;
        if (this.view) {
            this.view.destroy();
        }
        this.view = this.viewContainer.createEmbeddedView(this.template);
    }
}

export function getExtensionsIdentifier(directive: ExtensionsIdentifierRenderDirective) {
    return directive.value;
}

@Directive({
    selector: "[appExtensionsIdentifier]",
    providers: [
        {
            provide: EXTENSIONS_IDENTIFIER,
            useFactory: getExtensionsIdentifier,
            deps: [ExtensionsIdentifierRenderDirective]
        }
    ],
    standalone: true
})
export class ExtensionsIdentifierDirective { }