import { async, TestBed } from '@angular/core/testing';
import { FeatureManagementModule } from './feature-management.module';

describe('FeatureManagementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureManagementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureManagementModule).toBeDefined();
  });
});
