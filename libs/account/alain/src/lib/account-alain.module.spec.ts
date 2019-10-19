import { async, TestBed } from '@angular/core/testing';
import { AccountAlainModule } from './account-alain.module';

describe('AccountAlainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountAlainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccountAlainModule).toBeDefined();
  });
});
