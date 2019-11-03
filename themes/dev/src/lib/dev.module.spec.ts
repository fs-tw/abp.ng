import { async, TestBed } from '@angular/core/testing';
import { DevModule } from './dev.module';

describe('DevModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DevModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DevModule).toBeDefined();
  });
});
