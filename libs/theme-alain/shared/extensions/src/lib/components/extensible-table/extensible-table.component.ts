import {
  ListService,
  ConfigStateService,
} from '@abp/ng.core';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  Input,
  LOCALE_ID,
  TemplateRef,
  ContentChild,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { ExtensibleTableComponent as AbpExtensibleTableComponent } from '@abp/ng.theme.shared/extensions'
const DEFAULT_ACTIONS_COLUMN_WIDTH = 100;
import { NzTableRowDetailDirective } from '../../directives/nz-table-row-detail.directive'


@Component({
  exportAs: 'nzExtensibleTable',
  selector: 'nz-extensible-table',
  styleUrls: ['./extensible-table.component.css'],
  templateUrl: './extensible-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ant-table-rep]': `responsive`,
  },
})
export class ExtensibleTableComponent<R = any> extends AbpExtensibleTableComponent<R> implements OnInit {
  @Input()  responsive: boolean = true;
  expandSet = new Set<string>();
  selectId = null;
  onExpandChange(id: string, check: boolean) {
    if (check) {
      this.expandSet.add(id);
    } else this.expandSet.delete(id);
  }

  protected _actionsText: string;
  @Input()
  set actionsText(value: string) {
    this._actionsText = value;
  }
  get actionsText(): string {
    return this._actionsText ?? (this.actionList.length > 1 ? 'AbpUi::Actions' : '');
  }

  @ContentChild(NzTableRowDetailDirective) rowDetailTemplate: NzTableRowDetailDirective;
  @Input() data: R[];
  @Input() list: ListService;
  @Input() recordsTotal: number;
  @Input() set actionsColumnWidth(width: number) {
    this._setColumnWidths(width ? Number(width) : undefined);
  }
  @Input() actionsTemplate: TemplateRef<any>;
  @Input() haveRowDetail = false;
  @Input() haveSelect = false;
  @Input() svRowCount = 2;
  @Input() set defaultSelectId(value: string) {
    this.selectId = value;
  }
  @Input() scroll:{
    x?: string | null;
    y?: string | null;
  };

  

  @Output() select = new EventEmitter<R>();
  constructor(
    @Inject(LOCALE_ID) private _locale: string,
    private _config: ConfigStateService,
    _injector: Injector,
  ) {
    super(_locale, _config, _injector);
    this._setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
  }
  ngOnInit(): void {
    if(this.scroll){
      this.responsive = false;
    }
  }

  private _setColumnWidths(actionsColumn: number) {
    const widths = [actionsColumn];
    this.propList.forEach(({ value: prop }) => {
      widths.push(prop.columnWidth);
    });
    (this.columnWidths as any) = widths;
  }

  selected(data: R) {
    if (this.haveSelect) {
      this.selectId = data['id'];
      this.select.emit(data);
    }
  }
}
