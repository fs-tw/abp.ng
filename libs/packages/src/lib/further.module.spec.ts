import { async, TestBed } from '@angular/core/testing';
import { FurtherModule } from './further.module';

describe('FurtherModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FurtherModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FurtherModule).toBeDefined();
  });
});
