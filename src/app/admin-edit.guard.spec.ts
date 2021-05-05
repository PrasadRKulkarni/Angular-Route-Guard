import { TestBed } from '@angular/core/testing';

import { AdminEditGuard } from './admin-edit.guard';

describe('AdminEditGuard', () => {
  let guard: AdminEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
