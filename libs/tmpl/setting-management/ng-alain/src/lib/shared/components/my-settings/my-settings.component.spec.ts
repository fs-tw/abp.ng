import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySettingsComponent } from './my-settings.component';

describe('MySettingsComponent', () => {
  let component: MySettingsComponent;
  let fixture: ComponentFixture<MySettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
