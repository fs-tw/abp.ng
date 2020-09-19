import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JsonEditorOptions, JsonEditorComponent } from 'ang-jsoneditor';

@Component({
  selector: 'fs-ng-alain-json-editor',
  templateUrl: './fs-ng-alain-json-editor.component.html'
})
export class FsNgAlainJsonEditorComponent implements OnInit {
    @Input()
    form: FormGroup;
    
    @Input()
    data: string;

    @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;
    public editorOptions: JsonEditorOptions;
    constructor(
    ) {
        this.editorOptions = new JsonEditorOptions()
        this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    }

    ngOnInit() {
    }
}
