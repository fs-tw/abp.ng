import { async, TestBed } from '@angular/core/testing';
import { IdentityModule } from './identity.module';

describe('IdentityModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IdentityModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IdentityModule).toBeDefined();
  });
});
