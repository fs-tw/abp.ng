import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'fs-vertical-alignment',
  templateUrl: './fs-vertical-alignment.component.html',
  styleUrls: ['./fs-vertical-alignment.component.less']
})
export class FsVerticalAlignmentComponent implements OnInit {

  @HostBinding('class')
  @Input('class') classList: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
