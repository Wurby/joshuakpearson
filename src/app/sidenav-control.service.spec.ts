import { TestBed } from '@angular/core/testing';

import { SidenavControlService } from './sidenav-control.service';

describe('SidenavControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidenavControlService = TestBed.get(SidenavControlService);
    expect(service).toBeTruthy();
  });
});
