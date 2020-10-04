import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySettings2Component } from './my-settings2.component';

describe('MySettings2Component', () => {
  let component: MySettings2Component;
  let fixture: ComponentFixture<MySettings2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySettings2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySettings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
