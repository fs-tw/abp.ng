import { async, TestBed } from '@angular/core/testing';
import { AccountModule } from './account.module';

describe('AccountModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccountModule).toBeDefined();
  });
});
