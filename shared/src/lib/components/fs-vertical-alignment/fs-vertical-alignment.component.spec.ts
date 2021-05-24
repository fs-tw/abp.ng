import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsVerticalAlignmentComponent } from './fs-vertical-alignment.component';

describe('FsVerticalAlignmentComponent', () => {
  let component: FsVerticalAlignmentComponent;
  let fixture: ComponentFixture<FsVerticalAlignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsVerticalAlignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsVerticalAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
