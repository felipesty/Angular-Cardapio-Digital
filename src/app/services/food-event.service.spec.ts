import { TestBed } from '@angular/core/testing';

import { FoodEventService } from './food-event.service';

describe('FoodEventService', () => {
  let service: FoodEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
