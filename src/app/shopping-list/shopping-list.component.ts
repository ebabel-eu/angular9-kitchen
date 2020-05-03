import { Component, OnInit, Input } from '@angular/core';

import { Ingredient } from '../shared/ingredient.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() currentPage: string;

  ingredients: Ingredient[] = [
    {
      name: 'kesar mangoes',
      amount: 4,
      path: '#/kesar-mangoes',
    },
    {
      name: 'teaspoon cardamom powder',
      amount: 0.5,
      path: '#/teaspoon-cardamom-powder',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.unshift(ingredient);
  }

}
