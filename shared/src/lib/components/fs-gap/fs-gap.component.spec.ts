import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsGapComponent } from './fs-gap.component';

describe('FsGapComponent', () => {
  let component: FsGapComponent;
  let fixture: ComponentFixture<FsGapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsGapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
