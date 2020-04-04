import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from '@delon/theme';
@Component({
  selector: 'fs-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
  inputLang: string = '';
  constructor(
    private menuService: MenuService,
    private translate: TranslateService) { }

  ngOnInit() {
    console.log('yinchang');
  }
  click() {
   
  }

}
