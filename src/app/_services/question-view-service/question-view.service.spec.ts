import { TestBed } from '@angular/core/testing';

import { QuestionViewService } from './question-view.service';

describe('QuestionViewService', () => {
  let service: QuestionViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
