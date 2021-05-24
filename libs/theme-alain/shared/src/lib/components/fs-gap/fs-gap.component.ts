import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fs-gap',
  templateUrl: './fs-gap.component.html',
  styleUrls: ['./fs-gap.component.less']
})
export class FsGapComponent implements OnInit {

  /** 間隔，單位：px 
   * @default '8px'
  */
  @Input() gap: string = '8px';

  /** 類型：
   * @param horizontal：左右
   * @param vertical：上下
   * @default 'horizontal'
   * @returns 
   */
  @Input() type: 'horizontal' | 'vertical' = 'horizontal';

  constructor() { }

  ngOnInit(): void {
  }

}
