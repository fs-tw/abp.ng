import { async, TestBed } from '@angular/core/testing';
import { TenantManagementModule } from './tenant-management.module';

describe('TenantManagementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TenantManagementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TenantManagementModule).toBeDefined();
  });
});
