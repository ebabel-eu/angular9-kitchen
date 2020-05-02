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
    },
    {
      name: 'teaspoon cardamom powder',
      amount: 0.5,
    },
    {
      name: 'pinch saffron strands',
      amount: 1,
    },
    {
      name: 'teaspoon dry ginger powder',
      amount: 0.25,
    },
    {
      name: 'jug of water or milk',
      amount: 1,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

}
