import { TestBed } from '@angular/core/testing';

import { MedRoleService } from './med-role.service';

describe('MedRoleService', () => {
  let service: MedRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
