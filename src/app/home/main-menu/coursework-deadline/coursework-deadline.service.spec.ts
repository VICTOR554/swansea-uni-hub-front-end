import { TestBed } from '@angular/core/testing';

import { CourseworkDeadlineService } from './coursework-deadline.service';

describe('CourseworkDeadlineService', () => {
  let service: CourseworkDeadlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseworkDeadlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
