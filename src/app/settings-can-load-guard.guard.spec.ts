import { TestBed } from '@angular/core/testing';

import { SettingsCanLoadGuardGuard } from './settings-can-load-guard.guard';

describe('SettingsCanLoadGuardGuard', () => {
  let guard: SettingsCanLoadGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SettingsCanLoadGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
