import { Component, OnInit } from '@angular/core';
import { IFoods } from '../interfaces/food.interface';
import { FoodService } from '../services/food-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';
import { FoodEventService } from '../services/food-event.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  foods: IFoods[] = [];

  constructor(
    private foodService: FoodService,
    private modalService: NgbModal,
    private foodEventService: FoodEventService
  ) {}

  ngOnInit(): void {
    this.getAll();
    this.foodEventService.foodUpdated.subscribe(() => {
      this.getAll();
    });
  }

  getAll():void {
    this.foodService.getAll().subscribe(
      (foodData: IFoods[]) => {
        this.foods = foodData;
      }  
    );
  }

  openModal() {
    const open = this.modalService.open(FormComponent);
  }
}
