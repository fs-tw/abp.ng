import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsNgAlainTreeComponent } from './fs-ng-alain-tree.component';

describe('FsNgAlainTreeComponent', () => {
  let component: FsNgAlainTreeComponent;
  let fixture: ComponentFixture<FsNgAlainTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsNgAlainTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsNgAlainTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
