import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodEventService {

  private foodUpdatedSource = new Subject<void>();

  foodUpdated = this.foodUpdatedSource.asObservable();

  triggerFoodUpdated() {
    this.foodUpdatedSource.next();
  }
}
