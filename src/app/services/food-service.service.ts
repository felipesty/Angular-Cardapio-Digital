import { Injectable } from '@angular/core';
import { IFoods } from '../interfaces/food.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http: HttpClient) { }

  URL = "http://localhost:8080/food";

  getAll() {
    return this.http.get<IFoods[]>(this.URL);
  }

  saveFood(data: IFoods) {
    return this.http.post<IFoods>(this.URL, data);
  }
}
