import { TestBed } from '@angular/core/testing';

import { StudentUnionService } from './student-union.service';

describe('StudentUnionService', () => {
  let service: StudentUnionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentUnionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
