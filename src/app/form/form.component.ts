import { Component, OnInit  } from '@angular/core';
import { FoodService } from '../services/food-service.service';
import { IFoods } from '../interfaces/food.interface';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodEventService } from '../services/food-event.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  foods: IFoods[] | undefined;

  constructor(
    private foodService: FoodService,
    public activeModal: NgbActiveModal,
    private foodEventService: FoodEventService
  ) {}
  
  ngOnInit(): void {
    this.getFoods();
  }
  
  getFoods():void {
    this.foodService.getAll().subscribe(
      (foodData: IFoods[]) => {
        this.foods = foodData;
      }  
    )
  } 

  onSubmit(form: NgForm):void {
    if(form.valid) {
      const foodData: IFoods ={
        title: form.value.title,
        price: form.value.price,
        image: form.value.image,
      };

      this.foodService.saveFood(foodData).subscribe(
        (response) => {
          console.log(response);
          this.foodEventService.triggerFoodUpdated();
        },
        (error) => {
          console.error('Erro ao salvar o alimento:', error);
        }
      );
    };
    this.activeModal.close();
  }
}
