import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { VERSION as VERSION_ALAIN, TitleService } from '@delon/theme';
import { VERSION as VERSION_ZORRO, NzModalService } from 'ng-zorro-antd';
import { Store } from '@ngxs/store'
import { AddReplaceableComponent } from '@abp/ng.core';
import { LayoutDefaultComponent } from '@fs/ng-alain/basic';
import { LayoutPassportComponent } from '@fs/ng-alain/basic';
import { LayoutFullScreenComponent } from '@fs/ng-alain/basic';

@Component({
    selector: 'app-root',
    template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
    constructor(
        el: ElementRef,
        renderer: Renderer2,
        private router: Router,
        private titleSrv: TitleService,
        private modalSrv: NzModalService,
        private store: Store
    ) {
        renderer.setAttribute(el.nativeElement, 'ng-alain-version', VERSION_ALAIN.full);
        renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);
    }

    ngOnInit() {
        this.router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(() => {
            this.titleSrv.setTitle();
            this.modalSrv.closeAll();
        });
        this.store.dispatch(
            new AddReplaceableComponent({
              component: LayoutDefaultComponent,
              key: 'Theme.ApplicationLayoutComponent',
            })
          );
          this.store.dispatch(
            new AddReplaceableComponent({
              component: LayoutPassportComponent,
              key: 'Theme.AccountLayoutComponent',
            })
          );
          this.store.dispatch(
            new AddReplaceableComponent({
              component: LayoutFullScreenComponent,
              key: 'Theme.EmptyLayoutComponent',
            })
          );        
    }
}
