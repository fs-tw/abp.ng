import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { pluck, finalize } from 'rxjs/operators';

@Component({
  templateUrl: './page-bar.component.html',
})
export class PageBarComponent
  implements OnInit {
  constructor(private _store: Store) {
  }
  ngOnInit(): void {
  }
}
