import {
  Component,OnDestroy, OnInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterState } from '@fs/theme.core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { TitleService } from '@delon/theme';
@Component({
  templateUrl: './page-bar.component.html'
})
export class PageBarComponent implements OnDestroy ,OnInit {
  @Select(RouterState.getProfile) profile$: Observable<any>;
  get isCurrentPath() {
    return this.router.createUrlTree(['./'], { relativeTo: this.route }).toString() === this.router.routerState.snapshot.url.toString();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService:TitleService
  ) {
  }
  ngOnInit(){
    // this.profile$.subscribe(x=>{
    //   this.titleService.setTitle(x.title);
    // });
    
  }
  ngOnDestroy(): void {

  }


}
