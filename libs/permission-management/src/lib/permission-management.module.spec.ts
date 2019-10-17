import { async, TestBed } from '@angular/core/testing';
import { PermissionManagementModule } from './permission-management.module';

describe('PermissionManagementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PermissionManagementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PermissionManagementModule).toBeDefined();
  });
});
