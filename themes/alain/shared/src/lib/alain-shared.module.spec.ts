import { async, TestBed } from '@angular/core/testing';
import { AlainSharedModule } from './alain-shared.module';

describe('AlainSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AlainSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AlainSharedModule).toBeDefined();
  });
});
