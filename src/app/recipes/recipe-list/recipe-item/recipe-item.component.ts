import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.interface';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() onDetailRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  detailRecipe(recipe: Recipe) {
    this.onDetailRecipe.emit(recipe);
  }
}
