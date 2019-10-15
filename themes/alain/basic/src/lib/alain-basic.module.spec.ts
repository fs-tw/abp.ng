import { async, TestBed } from '@angular/core/testing';
import { AlainBasicModule } from './alain-basic.module';

describe('AlainBasicModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AlainBasicModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AlainBasicModule).toBeDefined();
  });
});
